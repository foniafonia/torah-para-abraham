# -*- coding: utf-8 -*-
"""Monta el HTML del gilyón 263 a partir de contenido_a..e.py.

    python3 construir.py [cuerpo] [salida.html]
"""
import os, sys, html as H

S = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, S)
import contenido_a, contenido_b, contenido_c, contenido_d, contenido_e

BLOQUES = (contenido_a.BLOQUES + contenido_b.BLOQUES + contenido_c.BLOQUES
           + contenido_d.BLOQUES + contenido_e.BLOQUES)

# Guarda el hebreo, en orden, para el verificador — solo el texto (sin las
# claves de estructura), tal como lo vería alguien leyendo el PDF original.
hebreo_piezas = []


def par(he, es, extra_clase=''):
    hebreo_piezas.append(he)
    return (f'<div class="par{extra_clase}">\n'
            f'  <div class="he">{he}</div>\n'
            f'  <div class="es">{es}</div>\n'
            f'</div>\n')


partes = []
halaja_n = 0
for b in BLOQUES:
    t = b['t']

    if t == 'masthead':
        hebreo_piezas.append(b['he'])
        partes.append(f'<div class="memoria"><div class="he">{b["he"]}</div>'
                       f'<div class="es">{b["es"]}</div></div>\n')

    elif t == 'masthead2':
        for k in ('titulo_he', 'subtitulo_he', 'horarios_he', 'fecha_he', 'pie_he'):
            hebreo_piezas.append(b[k])
        partes.append(f'''<div class="cab-revista">
  <div class="franja">
    <div class="titulos"><div class="he">{b['titulo_he']}</div><div class="sub-he">{b['subtitulo_he']}</div></div>
    <div class="titulos-es"><div class="es">{b['titulo_es']}</div><div class="sub-es">{b['subtitulo_es']}</div></div>
  </div>
  <div class="datos">
    <div class="he">{b['horarios_he']}<br>{b['fecha_he']}<br>{b['pie_he']}</div>
    <div class="es">{b['horarios_es']}<br>{b['fecha_es']}<br>{b['pie_es']}</div>
  </div>
</div>
''')

    elif t in ('dedic', 'dedic-verde'):
        hebreo_piezas.append(b['he'])
        clase = ' verde' if t == 'dedic-verde' else ''
        partes.append(f'<div class="dedicatorias"><div class="linea{clase}">'
                       f'<div class="he">{b["he"]}</div><div class="es">{b["es"]}</div>'
                       f'</div></div>\n')

    elif t == 'titulo':
        hebreo_piezas.append(b['he'])
        partes.append(f'<div class="par h-sec"><div class="in">\n'
                       f'  <div class="he">{b["he"]}</div>\n'
                       f'  <div class="es">{b["es"]}</div>\n'
                       f'</div></div>\n')

    elif t == 'sub':
        hebreo_piezas.append(b['he'])
        partes.append(f'<div class="h-sub">\n'
                       f'  <div class="es">{b["es"]}</div>\n'
                       f'  <div class="he">{b["he"]}</div>\n'
                       f'</div>\n')

    elif t == 'par':
        partes.append(par(b['he'], b['es']))

    elif t == 'saludo':
        hebreo_piezas.append(b['he'])
        partes.append(f'<div class="saludo"><span class="he">{b["he"]}</span>{b["es"]}</div>\n')

    elif t == 'caja':
        hebreo_piezas.append(b['he'])
        partes.append(f'''<div class="caja">
  <div class="titulo-caja"><span class="he">{b['titulo_he']}</span>{b['titulo_es']}</div>
  {par(b['he'], b['es'])}</div>
''')

    elif t == 'halaja':
        halaja_n += 1
        he = f'<span class="num">{b["letra"]}.</span> {b["he"]}'
        es = f'<span class="num">{halaja_n}.</span> {b["es"]}'
        partes.append(par(he, es, ' halaja keep'))

    elif t == 'pie':
        hebreo_piezas.append(b['he'])
        partes.append(f'<div class="pie-revista">{par(b["he"], b["es"])}</div>\n')

    else:
        raise ValueError(f'tipo de bloque desconocido: {t}')

open(os.path.join(S, 'gilyon-263-original.txt'), 'w', encoding='utf-8').write(
    '\n'.join(hebreo_piezas))

CABEZA = '''<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Boletín Yediat Retzonó · gilyón n.º 263 — Sucot 5787</title>
<link rel="stylesheet" href="../comun/estilo.css">
<style>
  :root{ --cuerpo:CUERPO; }
  .nota{ margin-top:3mm; }
</style>
</head>
<body>
'''

PIE = '''
<div class="nota">Gilyón «וְהָיִיתָ אַךְ שָׂמֵחַ» n.º 263, Sucot 5787, de las
instituciones del Rab Meír Kadosh, shlitá. Edición bilingüe completa: el
hebreo se reproduce literalmente y la traducción es literal; los términos
halájicos van transliterados en cursiva.</div>
</body>
</html>
'''

cuerpo = sys.argv[1] if len(sys.argv) > 1 else '1'
salida = sys.argv[2] if len(sys.argv) > 2 else os.path.join(S, '..', 'gilyon-263.html')
open(os.path.abspath(salida), 'w', encoding='utf-8').write(
    CABEZA.replace('CUERPO', cuerpo) + ''.join(partes) + PIE)
print(f'escrito {os.path.abspath(salida)} · {len(BLOQUES)} bloques · {halaja_n} halajot')
