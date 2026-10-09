# -*- coding: utf-8 -*-
"""Da la vuelta a los tramos hebreos, que pdfplumber lee en orden visual."""
import unicodedata as ud


def _racimos(s):
    out = []
    for ch in s:
        if out and ud.combining(ch):
            out[-1] += ch
        else:
            out.append(ch)
    return out


def voltea_hebreo(s):
    cl = _racimos(s)
    out, buf = [], []

    def descarga():
        if not buf:
            return
        cola = []
        while buf and buf[-1].isspace():
            cola.insert(0, buf.pop())
        out.extend(reversed(buf))
        out.extend(cola)
        buf.clear()

    for c in cl:
        # El PDF mezcla hebreo normal (U+0590–05FF) con formas precompuestas
        # del bloque de presentación (U+FB1D–FB4F): שׁ, יּ, נּ…
        heb = '֐' <= c[0] <= '׿' or 'יִ' <= c[0] <= 'ﭏ'
        if heb or (buf and c.isspace()):
            buf.append(c)
        else:
            descarga()
            out.append(c)
    descarga()
    return ''.join(out)


if __name__ == '__main__':
    for p in ['("רמֶאֹיּוַ שׁחָנָּהַ")? Abrabanel',
              'Bereshit, איהש הנשה תותבש לכל הנכה , es una preparación',
              'el Pyiut ופסאנ רשא םינומא tres veces',
              'la primera letra, la ב de la palabra']:
        print(repr(voltea_hebreo(p)))
