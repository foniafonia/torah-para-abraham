#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const FILES = {
  html: path.join(ROOT, "index.html"),
  css: path.join(ROOT, "styles.css"),
  js: path.join(ROOT, "script.js"),
};

function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

const html = read(FILES.html);
const css = read(FILES.css);
const js = read(FILES.js);

const findings = [];
function add(severity, area, message, fix) {
  findings.push({ severity, area, message, fix });
}

function extractObjectText(source, varName) {
  const start = source.indexOf(`const ${varName} = {`);
  if (start < 0) return "";
  let i = source.indexOf("{", start);
  let depth = 0;
  for (let j = i; j < source.length; j++) {
    if (source[j] === "{") depth += 1;
    if (source[j] === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(i, j + 1);
    }
  }
  return "";
}

function normalizeHebrewToken(token) {
  return token
    .replace(/[\u0591-\u05AF]/g, "")
    .replace(/[\u05B0-\u05BC\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7]/g, "")
    .replace(/[?.!,:;"'״׳]/g, "")
    .trim();
}

function parseObjectLiteral(text) {
  try {
    // controlled local project parser
    // eslint-disable-next-line no-new-func
    return new Function(`return (${text});`)();
  } catch {
    return null;
  }
}

function checkBasicFiles() {
  Object.entries(FILES).forEach(([k, file]) => {
    if (!fs.existsSync(file)) add("critical", "setup", `Falta archivo ${k}: ${file}`, "Restaurar el archivo.");
  });
}

function checkSyntaxSmoke() {
  if (!html.includes("<!doctype html>")) add("high", "html", "Falta doctype HTML5.", "Añadir <!doctype html>.");
  if (!js.includes("const wordData")) add("critical", "js", "No existe wordData.", "Restaurar estructura base.");
  if (!css.includes(":root")) add("high", "css", "No existe bloque :root.", "Añadir variables base.");
}

function checkDuplicateIds() {
  const idRegex = /id="([^"]+)"/g;
  const counts = {};
  let m;
  while ((m = idRegex.exec(html)) !== null) {
    counts[m[1]] = (counts[m[1]] || 0) + 1;
  }
  Object.entries(counts).forEach(([id, count]) => {
    if (count > 1) add("critical", "html", `ID duplicado: ${id} (${count} veces).`, "Dejar IDs únicos.");
  });
}

function checkPasukCoverage() {
  const clickableCount = (html.match(/class="word clickable"/g) || []).length;
  if (clickableCount < 30) {
    add("medium", "contenido", `Hay pocas palabras clicables (${clickableCount}).`, "Completar todas las palabras de los pesukim activos.");
  }
}

function checkRashiLiteralCoverage() {
  const rashiText = extractObjectText(js, "rashiData");
  const glossText = extractObjectText(js, "literalGlossary");
  const rashiData = parseObjectLiteral(rashiText);
  const glossary = parseObjectLiteral(glossText);
  if (!rashiData || !glossary) {
    add("high", "rashi", "No se pudo parsear rashiData/literalGlossary.", "Revisar sintaxis del bloque JS.");
    return;
  }
  const normalizedGlossary = {};
  Object.entries(glossary).forEach(([k, v]) => {
    normalizedGlossary[normalizeHebrewToken(k)] = v;
  });
  const missing = new Set();
  Object.values(rashiData).forEach((item) => {
    const tokens = String(item.hebrew || "").split(/\s+/).filter(Boolean);
    tokens.forEach((t) => {
      const n = normalizeHebrewToken(t);
      if (!n) return;
      if (!glossary[n] && !normalizedGlossary[n]) missing.add(n);
    });
  });
  if (missing.size > 0) {
    add(
      "high",
      "rashi",
      `Faltan traducciones literales en glosario para ${missing.size} tokens.`,
      `Añadir entradas faltantes: ${Array.from(missing).slice(0, 12).join(", ")}${missing.size > 12 ? "..." : ""}`
    );
  }
}

function checkKidsUX() {
  if (!html.includes("Explícamelo fácil")) {
    add("high", "pedagogia", "Falta botón 'Explícamelo fácil'.", "Añadir explicación simplificada.");
  }
  if (!html.includes("Exámenes Tipo Test")) {
    add("high", "pedagogia", "Falta bloque de quizzes.", "Añadir quizzes por pasuk y acumulativo.");
  }
  if (!html.includes("Mi Progresión")) {
    add("high", "pedagogia", "Falta panel de progresión.", "Añadir seguimiento de notas e intentos.");
  }
  if (!html.includes("Retos Del Día")) {
    add("medium", "gamificacion", "Faltan retos.", "Añadir retos con estado.");
  }
}

function checkFallbackStrings() {
  const pendingCount = (js.match(/Traducción literal pendiente/g) || []).length;
  if (pendingCount > 0) {
    add("medium", "contenido", "Existe fallback 'Traducción literal pendiente'.", "Reducir su aparición completando glosario.");
  }
}

function checkScriptSize() {
  const lines = js.split("\n").length;
  if (lines > 2200) add("medium", "arquitectura", `script.js muy grande (${lines} líneas).`, "Separar módulos (quiz, rashi, ui).");
}

function run() {
  checkBasicFiles();
  checkSyntaxSmoke();
  checkDuplicateIds();
  checkPasukCoverage();
  checkRashiLiteralCoverage();
  checkKidsUX();
  checkFallbackStrings();
  checkScriptSize();

  const sevWeight = { critical: 4, high: 3, medium: 2, low: 1 };
  findings.sort((a, b) => sevWeight[b.severity] - sevWeight[a.severity]);

  const bySev = { critical: 0, high: 0, medium: 0, low: 0 };
  findings.forEach((f) => {
    bySev[f.severity] += 1;
  });

  const report = [];
  report.push("# QA Tester Report");
  report.push("");
  report.push(`Fecha: ${new Date().toISOString()}`);
  report.push("");
  report.push("## Resumen");
  report.push(`- Critical: ${bySev.critical}`);
  report.push(`- High: ${bySev.high}`);
  report.push(`- Medium: ${bySev.medium}`);
  report.push(`- Low: ${bySev.low}`);
  report.push("");
  report.push("## Hallazgos");
  if (!findings.length) {
    report.push("- ✅ Sin hallazgos.");
  } else {
    findings.forEach((f, i) => {
      report.push(`${i + 1}. [${f.severity.toUpperCase()}] (${f.area}) ${f.message}`);
      report.push(`   - Sugerencia: ${f.fix}`);
    });
  }
  report.push("");
  report.push("## Checklist pedagógico");
  report.push(`- Pasuk clicable: ${html.includes('class="word clickable"') ? "OK" : "FALTA"}`);
  report.push(`- Rashi interactivo: ${html.includes('id="tab-rashi"') ? "OK" : "FALTA"}`);
  report.push(`- Quiz: ${html.includes("Exámenes Tipo Test") ? "OK" : "FALTA"}`);
  report.push(`- Progresión: ${html.includes("Mi Progresión") ? "OK" : "FALTA"}`);
  report.push(`- Gamificación: ${html.includes("Retos Del Día") ? "OK" : "FALTA"}`);
  report.push("");

  fs.writeFileSync(path.join(ROOT, "QA_TESTER_REPORT.md"), report.join("\n"));
  console.log(`QA report generado: ${path.join(ROOT, "QA_TESTER_REPORT.md")}`);

  if (bySev.critical > 0) process.exit(2);
}

run();
