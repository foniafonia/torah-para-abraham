# -*- coding: utf-8 -*-
"""Saca de la revista original el texto con sus estilos, sin tocar una letra.

Agrupa los caracteres en líneas, las líneas en párrafos y dentro del párrafo
marca los tramos en negrita, cursiva, hebreo o titular según la fuente.

Tres cosas que hay que arreglar del PDF de origen:
  · tres glifos sin mapa a Unicode (las ligaduras «ti», «tí» y «tz»);
  · el hebreo sale en orden visual y hay que darle la vuelta;
  · los párrafos vienen partidos por el corte de columna.
"""
import json
import pdfplumber
from voltear import voltea_hebreo

CIDS = {'(cid:415)': 'ti', '(cid:417)': 'tí', '(cid:309)': 'tz'}

ESTILO = {
    'CIDFont+F5': '', 'CIDFont+F9': '', 'CIDFont+F11': '',   # cuerpo
    'CIDFont+F7': 'bi',                                      # negrita cursiva
    'CIDFont+F6': 'i', 'CIDFont+F10': 'i', 'CIDFont+F13': 'i',
    'CIDFont+F8': 'b', 'CIDFont+F14': 'b',
    'CIDFont+F4': 'h',                                       # titular
    'CIDFont+F12': 'he',                                     # hebreo suelto
    'CIDFont+F1': 'pie',
}

COLS = (('izq', 20, 295), ('der', 298, 580))


def lineas(chars):
    out = []
    for ch in sorted(chars, key=lambda c: (round(c['top'], 1), c['x0'])):
        if out and abs(out[-1][0]['top'] - ch['top']) < 3:
            out[-1].append(ch)
        else:
            out.append([ch])
    return [sorted(l, key=lambda c: c['x0']) for l in out]


def tramos(ls):
    out = []
    for i, l in enumerate(ls):
        if i and out:
            out[-1][1] += ' '
        for ch in l:
            est = ESTILO.get(ch['fontname'], '')
            if out and out[-1][0] == est:
                out[-1][1] += ch['text']
            else:
                out.append([est, ch['text']])
    for t in out:
        for k, v in CIDS.items():
            t[1] = t[1].replace(k, v)
        t[1] = voltea_hebreo(t[1])
    return out


bruto = []
with pdfplumber.open('kolel.pdf') as pdf:
    for n in (1, 2, 3):
        pag = pdf.pages[n]
        for _, x0, x1 in COLS:
            chars = [c for c in pag.chars
                     if x0 <= c['x0'] < x1 and c['top'] > 20
                     and ESTILO.get(c['fontname']) != 'pie']
            if not chars:
                continue
            ls = lineas(chars)
            derecha = max(c['x1'] for c in chars)
            grupo = []
            for i, l in enumerate(ls):
                grupo.append(l)
                corta = l[-1]['x1'] < derecha - 12
                sig_titular = (i + 1 < len(ls)
                               and ESTILO.get(ls[i + 1][0]['fontname']) == 'h'
                               and ESTILO.get(l[0]['fontname']) != 'h')
                if corta or sig_titular:
                    bruto.append({'t': tramos(grupo), 'sigue': False})
                    grupo = []
            if grupo:
                bruto.append({'t': tramos(grupo), 'sigue': True})


def pega(dest, origen):
    if dest['t'] and origen['t'] and dest['t'][-1][0] == origen['t'][0][0]:
        dest['t'][-1][1] += ' ' + origen['t'][0][1]
        dest['t'].extend(origen['t'][1:])
    else:
        if dest['t']:
            dest['t'][-1][1] += ' '
        dest['t'].extend(origen['t'])


# --- unir lo que el corte de columna partió ---
unidos = []
for p in bruto:
    if unidos and unidos[-1]['sigue']:
        pega(unidos[-1], p)
        unidos[-1]['sigue'] = p['sigue']
    else:
        unidos.append(dict(p))

# --- separar los titulares en bloques propios ---
bloques = []
for p in unidos:
    actual, tipo = [], None
    for est, txt in p['t']:
        t = 'h' if est == 'h' else 'p'
        if tipo is None:
            tipo = t
        if t != tipo:
            bloques.append({'tipo': tipo, 't': actual})
            actual, tipo = [], t
        actual.append([est, txt])
    if actual:
        bloques.append({'tipo': tipo, 't': actual})

# --- el tercer artículo no va justificado: ahí la línea corta engaña, así que
#     un bloque que empieza en minúscula es continuación del anterior ---
final = []
for b in bloques:
    inicial = ''.join(t[1] for t in b['t']).lstrip()[:1]
    if (final and b['tipo'] == 'p' and final[-1]['tipo'] == 'p'
            and inicial.islower()):
        pega(final[-1], b)
    else:
        final.append(b)

json.dump(final, open('estructura.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
print(f'{len(final)} bloques')
for i, b in enumerate(final):
    print(f'{i:3d} {b["tipo"]} {"".join(t[1] for t in b["t"])[:74]}')
