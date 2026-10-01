# -*- coding: utf-8 -*-
"""Monta el documento bilingüe del capítulo 9 de Hiljot Teshuvá.

    python3 construir.py [cuerpo] [salida.html]

El hebreo sale de `ram9.json` (texto vocalizado de origen) y no se teclea: se
parte en oraciones, se agrupa según `frases` de cap9.py y se comprueba que al
volver a unir los trozos sale el original letra por letra.
"""
import json, os, re, sys

S = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, S)
import cap9


def limpia(t):
    t = re.sub(r'<[^>]+>', '', t)
    return re.sub(r'\s+', ' ', t).strip()


def frases(t):
    """Parte por punto y espacio, conservando el punto en cada trozo."""
    trozos = re.split(r'(?<=\.)\s+', t)
    return [x for x in trozos if x.strip()]


he_crudo = [limpia(x) for x in json.load(open(f'{S}/ram9.json', encoding='utf-8'))['he']]
assert len(he_crudo) == len(cap9.HALAJOT), \
    f'{len(he_crudo)} halajot en el original, {len(cap9.HALAJOT)} traducidas'

partes = []
hebreo_plano = []

for n, (texto, hal) in enumerate(zip(he_crudo, cap9.HALAJOT), 1):
    fs = frases(texto)
    reparto = [b[0] for b in hal['bloques']]
    assert sum(reparto) == len(fs), \
        f'halajá {n}: el reparto suma {sum(reparto)} y hay {len(fs)} oraciones'

    letra = 'אבגדהוזחטי'[n - 1]
    partes.append(f'''
<!-- ============ HALAJÁ {n} ============ -->
<div class="par halaja"><div class="in">
  <div class="he">הֲלָכָה {letra}</div>
  <div class="es">{hal['titulo']}</div>
</div></div>
''')

    i = 0
    trozos_he = []
    for cuantas, es in hal['bloques']:
        he = ' '.join(fs[i:i + cuantas])
        i += cuantas
        trozos_he.append(he)
        hebreo_plano.append(he)
        partes.append(f'''<div class="par">
  <div class="he">{he}</div>
  <div class="es">{es}</div>
</div>
''')

    # El hebreo tiene que seguir siendo el mismo: ni una letra de más ni de menos.
    assert ' '.join(trozos_he) == ' '.join(fs), f'halajá {n}: el hebreo no cuadra al reunirlo'

open(f'{S}/../rambam-teshuva-9-original.txt', 'w', encoding='utf-8').write(
    '\n'.join(hebreo_plano))

CABEZA = open(f'{S}/plantilla-cabeza.html', encoding='utf-8').read()
CABEZA = CABEZA.replace('Rambam · Hiljot Teshuvá · Capítulo 4',
                        'Rambam · Hiljot Teshuvá · Capítulo 9')
CABEZA = re.sub(r'--cuerpo:[0-9.]+', '--cuerpo:CUERPO', CABEZA)
SCRIPT = open(f'{S}/plantilla-script.html', encoding='utf-8').read()

MASTHEAD = f'''
<body>

<div class="masthead">
  <div class="mh-top">
    <div class="mh-num">
      <b>מִשְׁנֵה תּוֹרָה · הִלְכוֹת תְּשׁוּבָה</b>
      <span class="es">Mishné Torá · Hiljot Teshuvá</span>
    </div>
    <div class="mh-aut">
      <b>הָרַמְבַּ״ם</b><br>
      רַבֵּנוּ מֹשֶׁה בֶּן מַימוֹן
      <span class="es">Rabenu Moshé ben Maimón</span>
    </div>
  </div>
  <div class="mh-title">
    <div class="he">פֶּרֶק ט <small>– {cap9.TITULO_HE}</small></div>
    <div class="es">Capítulo {cap9.CAP} · {cap9.TITULO}</div>
  </div>
</div>
'''

voces = '\n'.join(
    f'  <div data-clave="{c}" data-he="{h}" data-tr="{tr}"\n'
    f'       data-corto="{corto}"' + (f'\n       data-es="{largo}"' if largo else '') + '></div>'
    for c, h, tr, corto, largo in cap9.GLOSARIO)

PIE = f'''
<div id="panel-glosario"></div>

<div class="pie">
  <div class="es">Rambam · Mishné Torá · Hiljot Teshuvá, capítulo 9 · edición bilingüe</div>
  <div class="he">רַמְבַּ״ם · מִשְׁנֵה תּוֹרָה · הִלְכוֹת תְּשׁוּבָה פֶּרֶק ט</div>
</div>

<template id="glosario">
{voces}
</template>

{SCRIPT}

</body>
</html>
'''

cuerpo = sys.argv[1] if len(sys.argv) > 1 else '1.15'
salida = sys.argv[2] if len(sys.argv) > 2 else f'{S}/../rambam-teshuva-9.html'
open(os.path.abspath(salida), 'w', encoding='utf-8').write(
    CABEZA.replace('CUERPO', cuerpo) + MASTHEAD + ''.join(partes) + PIE)

print(f'escrito {os.path.abspath(salida)} · {len(he_crudo)} halajot · '
      f'{sum(len(h["bloques"]) for h in cap9.HALAJOT)} bloques')
