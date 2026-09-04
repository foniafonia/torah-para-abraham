#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Comprueba que el hebreo del boletín no se ha alterado.

    python3 comun/verificar.py <boletin.html> <original.pdf|original.txt>

Quita el nikud y las marcas de dirección de ambos lados y compara las
consonantes palabra por palabra. Lo que falte del original es un error: al
vocalizar es fácil comerse una yod o un vav pasando de ktiv male a la forma
clásica. Lo que sobre debería ser solo el texto añadido (dedicatoria,
glosario, pie), y conviene mirarlo.

No sirve comparar contra el PDF generado: pdftotext mete espacios dentro de
las palabras vocalizadas porque posiciona cada glifo por separado.
"""
import re
import subprocess
import sys
import unicodedata
from collections import Counter

NIKUD = re.compile('[֑-ׇֽֿׁׂׅׄ]')          # puntos y cantilación, sin el maqaf
BIDI = re.compile('[‎‏‪-‮⁦-⁩]')
HEBREO = re.compile(r'[֐-׿]+')


def texto(ruta):
    if ruta.lower().endswith('.pdf'):
        return subprocess.run(['pdftotext', '-layout', '-enc', 'UTF-8', ruta, '-'],
                              capture_output=True, text=True, check=True).stdout
    with open(ruta, encoding='utf-8') as f:
        crudo = f.read()
    if ruta.lower().endswith(('.html', '.htm')):
        crudo = re.sub(r'<script.*?</script>', '', crudo, flags=re.S)
        crudo = re.sub(r'<[^>]+>', ' ', crudo)
    return crudo


def limpio(t):
    # NFKC deshace las formas de presentación (U+FB4B y compañía) que pdftotext
    # emite en las palabras que ya vienen vocalizadas en el original.
    return NIKUD.sub('', unicodedata.normalize('NFKC', BIDI.sub('', t)))


def consonantes(t):
    return HEBREO.findall(limpio(t))


def letras(t):
    """Todas las letras hebreas seguidas, sin cortes de palabra.

    Sirve para distinguir un cambio real de un artefacto de extracción:
    pdftotext mete espacios dentro de las palabras vocalizadas, así que el
    recuento por palabras puede fallar aunque no falte ni una letra.
    """
    return re.sub(r'[^֐-׿]', '', limpio(t))


def main():
    if len(sys.argv) != 3:
        print(__doc__)
        return 2
    html, original = sys.argv[1], sys.argv[2]
    nuevo, viejo = texto(html), texto(original)

    a, b = Counter(consonantes(viejo)), Counter(consonantes(nuevo))
    falta, sobra = sorted((a - b).elements()), sorted((b - a).elements())

    print(f'palabras hebreas en el original: {sum(a.values())}')
    print(f'palabras hebreas en el boletín:  {sum(b.values())}')
    print()
    if falta:
        # ¿Faltan letras de verdad, o solo se han movido los cortes de palabra?
        la, lb = Counter(letras(viejo)), Counter(letras(nuevo))
        perdidas = la - lb
        if perdidas:
            print(f'ERROR: {len(falta)} palabras del original no aparecen,')
            print(f'       y faltan {sum(perdidas.values())} letras:'
                  f' {" ".join(sorted(perdidas.elements()))}')
        else:
            print(f'AVISO: {len(falta)} palabras no cuadran, pero no falta ninguna')
            print('       letra: son cortes de palabra, artefacto de la extracción.')
        for w in falta:
            print(f'   {w}')
        falta = perdidas
    else:
        print('OK: no falta ninguna consonante del original.')
    print()
    print(f'añadidas ({len(sobra)}): {" ".join(sobra) if sobra else "ninguna"}')

    # cobertura de nikud, contando solo lo que lleva letras hebreas
    crudo = BIDI.sub('', texto(html))
    pals = [w for w in re.findall(r'[֐-׿"”׳’\'0-9]+', crudo) if re.search(r'[א-ת]', w)]
    if pals:
        con = sum(1 for w in pals if NIKUD.search(w))
        print(f'nikud: {con}/{len(pals)} = {100 * con // len(pals)}%')

    return 1 if falta else 0


if __name__ == '__main__':
    sys.exit(main())
