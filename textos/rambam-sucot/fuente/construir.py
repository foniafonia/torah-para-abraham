# -*- coding: utf-8 -*-
"""Monta el documento bilingüe del Rambam a partir del texto vocalizado y de
las traducciones de cap4..cap8.py. El hebreo no se toca: solo se quitan las
etiquetas de la fuente."""
import json, re, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import cap4, cap5, cap6, cap7, cap8

S = os.path.dirname(os.path.abspath(__file__))
UNI = ['','א','ב','ג','ד','ה','ו','ז','ח','ט']
DEC = ['','י','כ','ל']
def heb(n):
    if n == 15: return 'טו'   # no se escribe יה
    if n == 16: return 'טז'   # no se escribe יו
    d, u = divmod(n, 10)
    return DEC[d] + UNI[u]

def limpia(t):
    t = re.sub(r'</?small>', '', t)
    t = re.sub(r'<[^>]+>', '', t)
    return re.sub(r'\s+', ' ', t).strip()

partes = []
hebreo_plano = []
for mod in (cap4, cap5, cap6, cap7, cap8):
    he = [limpia(x) for x in json.load(open(f'{S}/ram{mod.CAP}.json'))['he']]
    assert len(he) == len(mod.ES), f'cap {mod.CAP}: {len(he)} hebreas vs {len(mod.ES)} traducidas'
    partes.append(f'''
<div class="par h-sec"><div class="in">
  <div class="he">פֶּרֶק {heb(mod.CAP)}</div>
  <div class="es">Capítulo {mod.CAP} · {mod.TITULO}</div>
</div></div>''')
    for i, (h, e) in enumerate(zip(he, mod.ES), 1):
        hebreo_plano.append(h)
        partes.append(f'''<div class="par">
  <div class="he"><span class="num">{heb(i)}.</span> {h}</div>
  <div class="es"><span class="num">{i}.</span> {e}</div>
</div>''')

open(f'{S}/../rambam-sucot-original.txt', 'w', encoding='utf-8').write('\n'.join(hebreo_plano))

CABEZA = '''<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Rambam · Hiljot Sucá y Lulav · Capítulos 4–8</title>
<link rel="stylesheet" href="../../boletin/comun/estilo.css">
<style>
  /* Texto largo: 99 halajot. El cuerpo baja para que quepa en pocas hojas
     sin partir ninguna halajá entre el hebreo y su traducción. */
  :root{ --cuerpo:CUERPO; }
  .masthead{ padding:4mm 5mm 3.5mm; margin-bottom:2mm; }
  .mh-title .he{ font-size:21pt; }
  .par{ margin-bottom:1.15mm; }
  .he, .es{ line-height:1.28; }
  .par.h-sec{ margin:2.6mm 0 1.6mm; break-after:avoid; }
  .par.h-sec .in{ padding:.9mm 0; }
  .par.h-sec .in .he{ font-size:12.5pt; }
  .par.h-sec .in .es{ font-size:8pt; }
  /* Número de halajá: oro, para poder saltar de una a otra de un vistazo. */
  .num{ font-weight:700; color:var(--oro); }
  .he .num{ font-family:'FrankRuhl',serif; }
  .nota{ margin-top:3mm; }
</style>
</head>
<body>

<div class="masthead">
  <div class="mh-top">
    <div class="mh-num">
      <b>מִשְׁנֵה תּוֹרָה · הִלְכוֹת שׁוֹפָר סוּכָּה וְלוּלָב</b>
      <span class="es">Mishné Torá · Hiljot Shofar, Sucá y Lulav</span>
    </div>
    <div class="mh-aut">
      <b>הָרַמְבַּ״ם</b><br>
      רַבֵּנוּ מֹשֶׁה בֶּן מַימוֹן
      <span class="es">Rabenu Moshé ben Maimón</span>
    </div>
  </div>
  <div class="mh-title">
    <div class="he">פְּרָקִים ד–ח <small>– הִלְכוֹת סוּכָּה וְלוּלָב</small></div>
    <div class="es">Capítulos 4 a 8 · Las leyes de la sucá y del lulav, completas</div>
  </div>
</div>
'''

PIE = '''
<div class="nota">Mishné Torá, Hiljot Shofar, Sucá y Lulav, capítulos 4 a 8, completos.
El hebreo se reproduce literalmente, con la vocalización de la edición impresa;
la traducción es literal, y los términos halájicos van transliterados en cursiva.</div>

</body>
</html>
'''

cuerpo = sys.argv[1] if len(sys.argv) > 1 else '0.85'
salida = f'{S}/../rambam-sucot.html'
salida = os.path.abspath(sys.argv[2]) if len(sys.argv) > 2 else salida
open(salida, 'w', encoding='utf-8').write(CABEZA.replace('CUERPO', cuerpo) + '\n'.join(partes) + PIE)
print('escrito', salida, '·', len(hebreo_plano), 'halajot')
