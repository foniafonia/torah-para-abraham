# -*- coding: utf-8 -*-
"""Monta la revista a partir de estructura.json (el texto del original).

    python3 construir.py [cuerpo] [salida.html]

El texto no se toca: sale tal cual de `extraer.py`. Aquí solo se decide dónde
va cada bloque y con qué estilo se pinta.
"""
import html
import json
import os
import re
import sys

S = os.path.dirname(os.path.abspath(__file__))
BLOQUES = json.load(open(f'{S}/estructura.json', encoding='utf-8'))

HEB = re.compile(r'[֐-׿יִ-ﭏ][֐-׿יִ-ﭏ\s]*'
                 r'[֐-׿יִ-ﭏ]')

ETIQUETA = {'b': ('<b>', '</b>'), 'i': ('<i>', '</i>'),
            'bi': ('<span class="bi">', '</span>'),
            'he': ('<span class="he">', '</span>'), '': ('', '')}


def envuelve(txt):
    """Mete el hebreo en su propio span, dejando fuera los espacios de los
    extremos: dentro de un tramo rtl acaban en el lado que no toca."""
    izq = txt[:len(txt) - len(txt.lstrip())]
    der = txt[len(txt.rstrip()):]
    return f'{izq}<span class="he">{txt.strip()}</span>{der}'


def marca_hebreo(t):
    """Aísla el hebreo para que el motor no lo mezcle con el castellano."""
    return HEB.sub(lambda m: envuelve(m.group()), t)


def pinta(tramos):
    out = []
    for est, txt in tramos:
        txt = html.escape(txt)
        if est == 'he':
            out.append(envuelve(txt))
            continue
        ini, fin = ETIQUETA.get(est, ('', ''))
        out.append(f'{ini}{marca_hebreo(txt)}{fin}')
    return ''.join(out).strip()


# --- repartir los bloques en artículos ---------------------------------
# Cada artículo: titulares seguidos, cuerpo, y una firma final.
FIRMAS = {'Rabino Avraham Attia', 'RAB ELIMELEJ BIDERMAN'}

articulos, actual = [], None
for b in BLOQUES:
    txt = ''.join(t[1] for t in b['t']).strip()
    if b['tipo'] == 'h':
        if actual is None or actual['cuerpo']:
            actual = {'titulo': [], 'cuerpo': [], 'firma': None}
            articulos.append(actual)
        actual['titulo'].append(txt)
    else:
        if actual is None:
            actual = {'titulo': [], 'cuerpo': [], 'firma': None}
            articulos.append(actual)
        if txt in FIRMAS or txt.startswith('Tsion Meimoun'):
            actual['firma'] = pinta(b['t'])
        else:
            actual['cuerpo'].append(pinta(b['t']))

def titulo_html(art, i):
    """El titular se pinta con las palabras del original y nada más.

    Cuando el original lo trae partido en dos líneas (la primera acaba en
    guion, como «PNINÉ BETH LEVY SOBRE BEREISHIT -»), esa primera línea se
    pinta como antetítulo. No se añade ni se quita una palabra.
    """
    lineas = [re.sub(r'\s+', ' ', t).strip() for t in art['titulo']]
    lineas = [l for l in lineas if l]
    if len(lineas) > 1 and lineas[0].rstrip().endswith('-'):
        cinta = f'<span class="cinta">{html.escape(lineas[0].rstrip(" -"))}</span>'
        resto = ' '.join(lineas[1:])
    else:
        cinta, resto = '', ' '.join(lineas)
    orden = f'<span class="orden">{i + 1}</span>'
    return (f'<div class="apertura">{orden}{cinta}'
            f'<h2>{html.escape(resto)}</h2></div>')


# Frases del propio artículo que se sacan en grande para romper la mancha de
# texto. No se escribe nada nuevo: se repite una frase que ya está dentro, y
# se señala aquí por el párrafo donde cae y cómo empieza.
DESTACADOS = [
    (0, 9, 'A veces una persona puede poseer millones y, sin embargo, no ser '
           'feliz, como si no tuviera nada'),
    (0, 19, 'Debes fortalecerte en la fe'),
    (1, 2, 'Abrabanel sostiene que la serpiente nunca habló'),
]


def destacado(i_art, j_par):
    for a, p, frase in DESTACADOS:
        if a == i_art and p == j_par:
            return f'<p class="destacado">{html.escape(frase)}</p>'
    return None


partes = []
for i, art in enumerate(articulos):
    partes.append('<div class="art">')
    if art['titulo']:
        partes.append(titulo_html(art, i))
    for j, p in enumerate(art['cuerpo']):
        # La capitular solo cuando hay párrafo bastante para arroparla; si no,
        # la letra se queda suelta con el texto colgando al lado.
        clase = ' class="abre"' if j == 0 and len(p) > 320 else ''
        partes.append(f'<p{clase}>{p}</p>')
        d = destacado(i, j)
        if d:
            partes.append(d)
    if art['firma']:
        partes.append(f'<p class="firma">{art["firma"]}</p>')
    partes.append('</div>')

CUERPO = '\n'.join(partes)

# --- sumario de portada: los títulos tal como están en los artículos -----
def entrada_sumario(art):
    lineas = [re.sub(r'\s+', ' ', t).strip() for t in art['titulo'] if t.strip()]
    if lineas and lineas[0].rstrip().endswith('-'):
        pie, titulo = lineas[0].rstrip(' -'), ' '.join(lineas[1:])
    else:
        pie, titulo = '', ' '.join(lineas)
    # Los títulos van con las mayúsculas del original: pasarlos a minúscula
    # automáticamente se come los nombres propios (Yitzchak, Abrabanel).
    extra = f'<span>{html.escape(pie)}</span>' if pie else ''
    return f'<li>{html.escape(titulo)}{extra}</li>'

SUMARIO = '\n      '.join(entrada_sumario(a) for a in articulos)

PORTADA = f'''<div class="portada">

  <div class="nameplate">
    <img src="img/logo-izq.jpg" alt="">
    <div class="centro">
      <div class="es">Kolel Kol Yaakov</div>
      <div class="he">כולל קול יעקב</div>
    </div>
    <img src="img/logo-der.jpg" alt="">
  </div>

  <div class="linea-numero">
    <span>Melilla</span><span>·</span><b>Parashat Bereshit</b><span>·</span><span>5787</span>
  </div>

  <div class="cartel"><img src="img/cartel.jpg" alt="Shiurim Parashat Bereshit"></div>

  <div class="dedic">
    <div class="intro">Esta revista de Torah ha sido dedicada</div>
    <div class="para">Para leilui nishmat de:</div>
    <div class="nombre">RABÍ YEHUDA TRUZMAN · BAR MIRIAM Z.L.</div>
  </div>

  <div class="pie-portada">
    <div class="sumario">
      <div class="rotulo">En este número</div>
      <ol>
      {SUMARIO}
      </ol>
    </div>
    <div class="fotos">
      <figure><img src="img/foto1.jpg" alt=""></figure>
      <figure><img src="img/foto2.jpg" alt=""></figure>
    </div>
  </div>
</div>
'''

CABEZA = '''<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Revista Kolel Kol Yaakov · Parashat Bereshit 5787</title>
<link rel="stylesheet" href="../comun/estilo.css">
<style>:root{ --cuerpo:CUERPO; }</style>
</head>
<body>
'''

cuerpo = sys.argv[1] if len(sys.argv) > 1 else '1'
salida = sys.argv[2] if len(sys.argv) > 2 else f'{S}/../revista-bereshit-5787.html'

doc = (CABEZA.replace('CUERPO', cuerpo) + PORTADA
       + f'<div class="cuerpo">\n{CUERPO}\n</div>\n'
       + '</body>\n</html>\n')
open(os.path.abspath(salida), 'w', encoding='utf-8').write(doc)
print(f'escrito {os.path.abspath(salida)} · {len(articulos)} artículos · '
      f'{sum(len(a["cuerpo"]) for a in articulos)} párrafos')
