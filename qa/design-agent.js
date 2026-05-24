#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const htmlPath = path.join(ROOT, "index.html");
const cssPath = path.join(ROOT, "styles.css");

const html = fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath, "utf8") : "";
const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";

const findings = [];
const suggestions = [];

function addFinding(level, title, detail) {
  findings.push({ level, title, detail });
}

function addSuggestion(area, action) {
  suggestions.push({ area, action });
}

function has(pattern, text) {
  return pattern.test(text);
}

function runChecks() {
  if (!html.includes("kids-coach")) {
    addFinding("HIGH", "Falta coach visual", "No se detecta bloque de mascota/coach.");
    addSuggestion("engagement", "Añadir coach fijo con mensajes contextuales.");
  }

  if (!has(/\.card\s*\{[\s\S]*border-radius:\s*(2[0-9]|3[0-9])px;/, css)) {
    addFinding("MEDIUM", "Tarjetas poco redondeadas", "La UI infantil suele usar radios amplios.");
    addSuggestion("cards", "Usar radios 20px+ con profundidad y capas.");
  }

  if (!has(/linear-gradient|radial-gradient/, css)) {
    addFinding("MEDIUM", "Fondo plano", "No hay dirección visual de fondo.");
    addSuggestion("background", "Agregar gradientes y blobs suaves.");
  }

  if (!has(/@media\s*\(max-width:\s*880px\)/, css)) {
    addFinding("HIGH", "Responsive incompleto", "No hay cortes claros para móvil.");
    addSuggestion("responsive", "Definir breakpoints y targets táctiles de 44px.");
  }

  if (!has(/\.flip-btn|\.chip-btn|\.tab-btn/, css)) {
    addFinding("HIGH", "Acciones sin estilo consistente", "Botones sin sistema de tokens.");
    addSuggestion("controls", "Unificar botones con jerarquía primaria/secundaria.");
  }

  if (!has(/\.quiz-option\.good|\.quiz-option\.bad/, css)) {
    addFinding("MEDIUM", "Feedback de quiz débil", "No hay estados visuales claros acierto/error.");
    addSuggestion("quiz", "Aplicar estados positivos/negativos y microanimaciones.");
  }

  if (!html.includes("Mi Progresión")) {
    addFinding("HIGH", "Sin metajuego", "No hay panel de progreso.");
    addSuggestion("progress", "Mostrar nivel, XP, racha y retos.");
  }

  if (!has(/font-family:[^;]*Nunito|Avenir|Trebuchet/i, css)) {
    addFinding("LOW", "Tipografía no optimizada para niños", "Fuente no detectada o poco legible.");
    addSuggestion("typography", "Usar familia redondeada y alto contraste.");
  }

  if (!has(/box-shadow/, css)) {
    addFinding("LOW", "Profundidad visual baja", "Sin sombras no hay jerarquía de planos.");
    addSuggestion("depth", "Añadir sombras consistentes por componente.");
  }

  if (!has(/\.kids-coach|coach-bubble/, css)) {
    addFinding("MEDIUM", "Coach sin piel visual", "No hay estilo para el coach.");
    addSuggestion("coach", "Estilizar coach con tarjeta fija y estados animados.");
  }
}

function buildReport() {
  const now = new Date().toISOString();
  const counts = { HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    counts[f.level] += 1;
  });

  const lines = [];
  lines.push("# Design Agent Report");
  lines.push("");
  lines.push(`Fecha: ${now}`);
  lines.push("");
  lines.push("## Resumen");
  lines.push(`- HIGH: ${counts.HIGH}`);
  lines.push(`- MEDIUM: ${counts.MEDIUM}`);
  lines.push(`- LOW: ${counts.LOW}`);
  lines.push("");
  lines.push("## Hallazgos");
  if (!findings.length) {
    lines.push("- ✅ Sin hallazgos visuales críticos.");
  } else {
    findings.forEach((f, i) => {
      lines.push(`${i + 1}. [${f.level}] ${f.title}`);
      lines.push(`   - ${f.detail}`);
    });
  }
  lines.push("");
  lines.push("## Sugerencias accionables");
  if (!suggestions.length) {
    lines.push("- ✅ Sin sugerencias pendientes.");
  } else {
    suggestions.forEach((s, i) => {
      lines.push(`${i + 1}. (${s.area}) ${s.action}`);
    });
  }
  lines.push("");
  lines.push("## Checklist Kids UI");
  lines.push(`- Coach visible: ${html.includes("kids-coach") ? "OK" : "FALTA"}`);
  lines.push(`- Quiz visual feedback: ${/quiz-option\.good/.test(css) ? "OK" : "FALTA"}`);
  lines.push(`- Progresión gamificada: ${html.includes("Mi Progresión") ? "OK" : "FALTA"}`);
  lines.push(`- Breakpoint móvil: ${/@media\s*\(max-width:\s*880px\)/.test(css) ? "OK" : "FALTA"}`);
  lines.push("");

  return lines.join("\n");
}

runChecks();
const report = buildReport();
const out = path.join(ROOT, "DESIGN_AGENT_REPORT.md");
fs.writeFileSync(out, report);
console.log(`Design report generado: ${out}`);
