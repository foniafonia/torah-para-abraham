# Boletín Yediat Retzonó nº 5 — Ki Tetsé 5786 (hebreo / castellano)

Edición bilingüe a dos columnas del boletín del Rab Moshé Bitán:
**hebreo a la derecha, castellano a la izquierda**, párrafo con párrafo.

Dedicado a la *refuá shelemá* de todos los enfermos del pueblo de Israel.

## Archivos

| Archivo | Qué es |
|---|---|
| `boletin-05-ki-tetse-he-es.pdf` | El PDF final. A4, 4 páginas = 2 folios a doble cara. |
| `boletin-05-ki-tetse.html` | El documento fuente. |
| `estilo.css` | Maquetación e impresión. |
| `fonts/` | David Libre y Frank Ruhl Libre (hebreo), EB Garamond (castellano). Todas con licencia OFL. |
| `generar.mjs` | Regenera el PDF a partir del HTML y dibuja el pie numerado. Necesita Node 22+. |
| `generar.sh` | Atajo: llama a `generar.mjs`. |

## Regenerar el PDF

```sh
./generar.sh                       # usa /opt/pw-browsers/chromium
CHROME=/ruta/a/chrome ./generar.sh # o indica tu navegador
```

Los márgenes y el pie de página los fija `generar.mjs`, no el CSS: Chromium solo
deja numerar las páginas a través del `footerTemplate` de `Page.printToPDF`, que
se pasa por el protocolo de depuración. Por eso `@page` en el CSS no lleva
márgenes.

## Impresión

A4, a doble cara, borde largo. Salen 2 folios: página 1–2 en el primero, 3–4 en el segundo.
Cada página lleva su número al pie, en castellano a la izquierda y en hebreo a la derecha.

## Sobre el texto

- El hebreo se reproduce **literalmente**, sin adaptaciones ni correcciones. Se conserva
  incluso `וחומרא היאולא מדינא` (por `היא ולא`), tal como aparece en el original.
- La traducción castellana es literal, no una paráfrasis. Los términos halájicos
  (*lejatjilá*, *bli neder*, *yeush*, *borer*…) se transliteran y se explican la primera vez.
- Las referencias abreviadas del original (שו"ע, רמ"א, יבי"א…) se dan desarrolladas
  en castellano: Shulján Aruj, Ramá, Yabía Omer, etc.
