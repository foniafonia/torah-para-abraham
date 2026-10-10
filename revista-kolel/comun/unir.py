# -*- coding: utf-8 -*-
"""Junta portada e interior en un solo PDF.

    python3 comun/unir.py <portada.pdf> <interior.pdf> <salida.pdf>

La portada se imprime sin márgenes (para que la imagen llegue al borde) y el
interior con ellos, así que salen de dos pasadas distintas y hay que unirlos.
"""
import sys
from pypdf import PdfWriter, PdfReader

if len(sys.argv) != 4:
    print(__doc__)
    raise SystemExit(2)

portada, interior, salida = sys.argv[1:]
w = PdfWriter()
for pag in PdfReader(portada).pages:
    w.add_page(pag)
# El interior lleva delante una página en blanco, solo para que los folios
# salgan numerados 2, 3 y 4 de 4. Aquí se descarta.
for pag in PdfReader(interior).pages[1:]:
    w.add_page(pag)
with open(salida, 'wb') as f:
    w.write(f)
print(f'{len(w.pages)} páginas en {salida}')
