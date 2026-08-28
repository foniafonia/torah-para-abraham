#!/usr/bin/env node
// Genera el PDF del boletín con pie de página numerado bilingüe.
// Uso: node generar.mjs   (opcional: CHROME=/ruta/a/chrome)
import { spawn } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = dirname(fileURLToPath(import.meta.url));
const HTML = resolve(DIR, 'boletin-05-ki-tetse.html');
const SALIDA = process.argv[2] || resolve(DIR, 'boletin-05-ki-tetse-he-es.pdf');
const CHROME = process.env.CHROME || '/opt/pw-browsers/chromium';
const PUERTO = 9333;

const mm = v => v / 25.4; // mm -> pulgadas

// Chromium renderiza el pie en un documento aparte que ignora las hojas de
// estilo y arranca con font-size 0, asi que todo va en estilos en linea.
const est = 'font-family:\'Liberation Serif\',\'FreeSerif\',serif;font-size:7pt;color:#8c6d2f;';
const pie = `<div style="${est}width:100%;padding:0 9mm;box-sizing:border-box;display:flex;justify-content:space-between;">
  <span style="${est}">P&aacute;g. <span class="pageNumber" style="${est}"></span> de <span class="totalPages" style="${est}"></span></span>
  <span style="${est}direction:rtl;">&#1506;&#1502;&#1493;&#1491; <span class="pageNumber" style="${est}"></span> &#1502;&#1514;&#1493;&#1498; <span class="totalPages" style="${est}"></span></span>
</div>`;

const chrome = spawn(CHROME, [
  '--headless', '--disable-gpu', '--no-sandbox', '--allow-file-access-from-files',
  `--remote-debugging-port=${PUERTO}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'chr-'))}`,
  'about:blank',
], { stdio: 'ignore' });

const esperar = ms => new Promise(r => setTimeout(r, ms));

async function versionCDP() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PUERTO}/json/version`);
      if (r.ok) return await r.json();
    } catch {}
    await esperar(250);
  }
  throw new Error('Chromium no respondió en el puerto de depuración');
}

function sesion(url) {
  const ws = new WebSocket(url);
  let id = 0;
  const pendientes = new Map();
  const escuchas = new Map();
  ws.addEventListener('message', e => {
    const m = JSON.parse(e.data);
    if (m.id && pendientes.has(m.id)) {
      const { ok, ko } = pendientes.get(m.id);
      pendientes.delete(m.id);
      m.error ? ko(new Error(m.error.message)) : ok(m.result);
    } else if (m.method && escuchas.has(m.method)) {
      escuchas.get(m.method)();
      escuchas.delete(m.method);
    }
  });
  const listo = new Promise(r => ws.addEventListener('open', r));
  return {
    listo,
    enviar: (method, params = {}, sessionId) => new Promise((ok, ko) => {
      const n = ++id;
      pendientes.set(n, { ok, ko });
      ws.send(JSON.stringify({ id: n, method, params, sessionId }));
    }),
    evento: method => new Promise(r => escuchas.set(method, r)),
    cerrar: () => ws.close(),
  };
}

try {
  const { webSocketDebuggerUrl } = await versionCDP();
  const s = sesion(webSocketDebuggerUrl);
  await s.listo;

  const { targetId } = await s.enviar('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await s.enviar('Target.attachToTarget', { targetId, flatten: true });

  await s.enviar('Page.enable', {}, sessionId);
  const cargada = s.evento('Page.loadEventFired');
  await s.enviar('Page.navigate', { url: `file://${HTML}` }, sessionId);
  await cargada;
  await s.enviar('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true }, sessionId);

  const { data } = await s.enviar('Page.printToPDF', {
    printBackground: true,
    paperWidth: mm(210), paperHeight: mm(297),
    marginTop: mm(9), marginBottom: mm(10), marginLeft: mm(9), marginRight: mm(9),
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: pie,
  }, sessionId);

  writeFileSync(SALIDA, Buffer.from(data, 'base64'));
  console.log(`PDF escrito en ${SALIDA}`);
  s.cerrar();
} finally {
  chrome.kill();
}
