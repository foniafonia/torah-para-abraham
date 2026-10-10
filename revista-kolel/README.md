# Revista Kolel Kol Yaakov (Melilla)

Remaquetación de la revista del Kolel. **El texto no se toca**: sale del PDF
original y se vuelve a componer con otra tipografía y otra retícula. Las
imágenes son las mismas, recortadas del original.

```
comun/
  estilo.css        la maqueta
  generar.mjs       imprime el PDF (márgenes y pie numerado)
bereshit-5787/
  revista-bereshit-5787.html   generado, no se edita a mano
  revista-bereshit-5787.pdf
  img/              las imágenes del original, ya recortadas
  fuente/
    original.pdf    el PDF de partida
    extraer.py      saca el texto con sus estilos -> estructura.json
    voltear.py      arregla el hebreo, que viene en orden visual
    estructura.json el texto, en bloques con estilo
    construir.py    monta el HTML
```

## Rehacer el número

```sh
python3 revista-kolel/bereshit-5787/fuente/extraer.py     # desde fuente/
python3 revista-kolel/bereshit-5787/fuente/construir.py 0.97
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  node revista-kolel/comun/generar.mjs \
  revista-kolel/bereshit-5787/revista-bereshit-5787.html
```

El argumento de `construir.py` es el cuerpo de texto: con 0.97 entra en 4
páginas y con 0.99 se va a 5.

## Lo que hay que saber del PDF de origen

Lo hizo «Microsoft: Print To PDF» y eso deja tres trampas:

**Tres glifos sin mapa a Unicode.** Las ligaduras `ti`, `tí` y `tz` salen como
`(cid:415)`, `(cid:417)` y `(cid:309)`, así que «entidad» se extrae como
«en dad» y «Yitzchak» como «Yichak». `extraer.py` las traduce. pdftotext no
avisa: se come el glifo y deja un hueco, de modo que el fallo pasa inadvertido
si uno se fía de la extracción a ojo.

**El hebreo viene en orden visual.** Hay que darle la vuelta, y por racimos
—letra más sus puntos de vocalización—, no carácter a carácter. Además mezcla
hebreo normal (U+0590–05FF) con formas precompuestas del bloque de
presentación (U+FB1D–FB4F: `שׁ`, `יּ`, `נּ`), y si el rango no las contempla el
tramo se parte por la mitad y sale una ensalada. Está en `voltear.py`.

**Los párrafos vienen partidos.** Los dos primeros artículos van justificados,
así que una línea que acaba corta cierra párrafo; pero el tercero va en
bandera y ahí esa regla falla. Para ese caso vale otra: un bloque que empieza
en minúscula es continuación del anterior.

La portada es una sola imagen rasterizada partida en 32 teselas de 1024×1024,
así que las imágenes no se extraen con `pdfimages` (salen a trozos): se
recortan de un render a 300 dpi.

## Comprobación

El PDF nuevo tiene **exactamente los mismos caracteres** que el original:
17.987, ni uno de más ni de menos, comparando los dos PDF con pdfplumber tras
quitar espacios, guiones de partición y pies de página, y normalizando las
formas precompuestas del hebreo.

Del texto de los artículos no se cambió nada. Lo único que se añade es
mobiliario de revista, y es todo lo que hay:

* el nombre de la cabecera, **Kolel Kol Yaakov / כולל קול יעקב**, y la línea
  de número **Melilla · Parashat Bereshit · 5787** (palabras que ya estaban
  en el logo, en el cartel y en el pie del original);
* el rótulo **«En este número»** del sumario —las tres únicas palabras
  nuevas de toda la revista—, con los títulos tal cual;
* los numerales **1, 2, 3** que abren cada artículo;
* tres **destacados**, que no escriben nada: repiten en grande una frase que
  ya está dentro del propio artículo.

Al comparar los dos PDF, descontando los destacados, lo único que sobra son
esos tres numerales.
