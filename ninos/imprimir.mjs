// Imprime a PDF una hoja de ninos/ (páginas A4 fijas, sin pie de Chromium).
//
//   CHROME=/ruta/a/chrome node ninos/imprimir.mjs ninos/kipur/kipur-ninos.html [salida.pdf]
//
// Antes de imprimir lee body.dataset.desborde, que el guion de la hoja
// rellena con las páginas cuyo contenido no cabe. Si hay desborde, lo dice.
import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname, basename } from 'node:path';

const HTML = resolve(process.argv[2] || '');
if (!process.argv[2] || !existsSync(HTML)) { console.error('uso: node ninos/imprimir.mjs hoja.html [salida.pdf]'); process.exit(2); }
const SALIDA = process.argv[3] ? resolve(process.argv[3]) : join(dirname(HTML), basename(HTML).replace(/\.html?$/i, '') + '.pdf');
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PUERTO = Number(process.env.PUERTO || 9334);

const chrome = spawn(CHROME, [
  '--headless', '--disable-gpu', '--no-first-run', '--allow-file-access-from-files',
  `--remote-debugging-port=${PUERTO}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'chr-'))}`,
  'about:blank',
], { stdio: 'ignore' });

const esperar = ms => new Promise(r => setTimeout(r, ms));

async function versionCDP() {
  for (let i = 0; i < 60; i++) {
    try { const r = await fetch(`http://127.0.0.1:${PUERTO}/json/version`); if (r.ok) return await r.json(); } catch {}
    await esperar(250);
  }
  throw new Error('Chrome no respondió en el puerto de depuración');
}

function sesion(url) {
  const ws = new WebSocket(url);
  let id = 0;
  const pendientes = new Map(), escuchas = new Map();
  ws.addEventListener('message', e => {
    const m = JSON.parse(e.data);
    if (m.id && pendientes.has(m.id)) {
      const { ok, ko } = pendientes.get(m.id); pendientes.delete(m.id);
      m.error ? ko(new Error(m.error.message)) : ok(m.result);
    } else if (m.method && escuchas.has(m.method)) { escuchas.get(m.method)(); escuchas.delete(m.method); }
  });
  return {
    listo: new Promise(r => ws.addEventListener('open', r)),
    enviar: (method, params = {}, sessionId) => new Promise((ok, ko) => {
      const n = ++id; pendientes.set(n, { ok, ko });
      ws.send(JSON.stringify({ id: n, method, params, sessionId }));
    }),
    evento: method => new Promise(r => escuchas.set(method, r)),
    cerrar: () => ws.close(),
  };
}

try {
  const s = sesion((await versionCDP()).webSocketDebuggerUrl);
  await s.listo;
  const { targetId } = await s.enviar('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await s.enviar('Target.attachToTarget', { targetId, flatten: true });
  await s.enviar('Page.enable', {}, sessionId);
  await s.enviar('Emulation.setEmulatedMedia', { media: 'print' }, sessionId);
  const cargada = s.evento('Page.loadEventFired');
  await s.enviar('Page.navigate', { url: `file://${HTML}` }, sessionId);
  await cargada;
  await s.enviar('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true }, sessionId);
  await esperar(200);

  const { result } = await s.enviar('Runtime.evaluate', {
    expression: 'JSON.stringify({desborde: document.body.dataset.desborde, huecos: document.body.dataset.huecos})',
    returnByValue: true,
  }, sessionId);
  const info = JSON.parse(result.value || '{}');
  console.log(`desborde: ${info.desborde ?? '?'}   huecos: ${info.huecos ?? '?'}`);

  const { data } = await s.enviar('Page.printToPDF', { printBackground: true, preferCSSPageSize: true }, sessionId);
  writeFileSync(SALIDA, Buffer.from(data, 'base64'));
  console.log(`PDF escrito en ${SALIDA}`);
  s.cerrar();
} finally {
  chrome.kill();
}
