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




# `encabeza` va antes del multicolumna, a todo el ancho de la página: es la
# apertura del artículo principal (titular y entradilla). El resto del texto,
# y los otros dos artículos, van ya dentro de las dos columnas.
encabeza, partes = [], []
for i, art in enumerate(articulos):
    # Solo el artículo principal abre en grande; en los cortos la entradilla
    # se come media columna y encadena dos capitulares seguidas.
    cuerpo_art = art['cuerpo']
    abre_grande = i == 0 and cuerpo_art and len(cuerpo_art[0]) > 240

    if abre_grande:
        encabeza.append(titulo_html(art, i))
        encabeza.append(f'<p class="entradilla">{cuerpo_art[0]}</p>')
        resto, desfase = cuerpo_art[1:], 1
        partes.append('<div class="art">')
    else:
        partes.append(f'<div class="art{" menor" if i else ""}">')
        if art['titulo']:
            partes.append(titulo_html(art, i))
        resto, desfase = cuerpo_art, 0

    for j, p in enumerate(resto):
        capitular = j == 0 and not abre_grande and len(p) > 300
        partes.append(f'<p{" class=\"abre\"" if capitular else ""}>{p}</p>')
        d = destacado(i, j + desfase)
        if d:
            partes.append(d)
    if art['firma']:
        partes.append(f'<p class="firma">{art["firma"]}</p>')
    partes.append('</div>')

ENCABEZA = '\n'.join(encabeza)
CUERPO = '\n'.join(partes)

PORTADA = '''<div class="portada">

  <div class="franja">
    <div class="marca">
      <img src="img/logo-izq.jpg" alt="">
      <div class="nombre">
        <div class="es">Kolel Kol Yaakov</div>
        <div class="he">כולל קול יעקב</div>
      </div>
      <img src="img/logo-der.jpg" alt="">
    </div>
    <div class="numero">
      <span>Melilla</span><b>Parashat Bereshit</b><span>5787</span>
    </div>
  </div>

  <div class="centro">
    <div class="cartel"><img src="img/cartel.jpg" alt="Shiurim Parashat Bereshit"></div>
    <div class="dedic">
      <div class="intro">Esta revista de Torah ha sido dedicada</div>
      <div class="para">Para leilui nishmat de:</div>
      <div class="nombre">RABÍ YEHUDA TRUZMAN · BAR MIRIAM Z.L.</div>
    </div>
  </div>

  <div class="tira">
    <img src="img/foto1.jpg" alt="">
    <img src="img/foto2.jpg" alt="">
  </div>
</div>
'''


def pagina(titulo, contenido, cuerpo):
    return f'''<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>{titulo}</title>
<link rel="stylesheet" href="../comun/estilo.css">
<style>:root{{ --cuerpo:{cuerpo}; }}</style>
</head>
<body>
{contenido}
</body>
</html>
'''


cuerpo = sys.argv[1] if len(sys.argv) > 1 else '1'
base = f'{S}/..'

open(f'{base}/portada.html', 'w', encoding='utf-8').write(
    pagina('Kolel Kol Yaakov · Parashat Bereshit 5787', PORTADA, cuerpo))
open(f'{base}/interior.html', 'w', encoding='utf-8').write(
    pagina('Kolel Kol Yaakov · interior',
           '<div class="blanca"></div>\n'
           f'<div class="apertura-ancha">\n{ENCABEZA}\n</div>\n'
           f'<div class="cuerpo">\n{CUERPO}\n</div>', cuerpo))

print(f'portada.html + interior.html · {len(articulos)} artículos · '
      f'{sum(len(a["cuerpo"]) for a in articulos)} párrafos')
