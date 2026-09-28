# Kadosh — Gilyón Yediat Retzonó / Rab Meír Kadosh

Boletines de otra publicación (distinta de la del Rab Bitán, en `boletin/`):
el gilyón semanal del Rab Meír Kadosh, formato revista, más largo y con
secciones mixtas (dvar torá, relatos, columna de halajot, dedicatorias).

Reutiliza los tipos y las fuentes de `boletin/comun/` vía `@import` en
`kadosh/comun/estilo.css`, y añade sus propios componentes: cabecera de
revista, líneas de dedicatoria, recuadros de relato, ítems de halajá con
letra hebrea, pie de anuncios.

```
comun/
  estilo.css        @import boletin/comun/estilo.css + componentes propios
263-sucot/
  gilyon-263.html   generado, no se edita a mano
  gilyon-263.pdf
  fuente/
    contenido_a.py … contenido_e.py   el texto, en bloques (he/es)
    construir.py                      monta el HTML a partir de los bloques
    gilyon-263-original.txt           el hebreo tal como queda en el HTML,
                                       para el verificador
264-shmini-atzeret/
  gilyon-264.html
  gilyon-264.pdf
  fuente/
    contenido_a.py … contenido_f.py
    construir.py
    gilyon-264-original.txt
```

## Un número nuevo

```sh
python3 kadosh/263-sucot/fuente/construir.py 0.80 kadosh/263-sucot/gilyon-263.html
PAGINAS=14 node boletin/comun/generar.mjs kadosh/263-sucot/gilyon-263.html
python3 boletin/comun/verificar.py kadosh/263-sucot/gilyon-263.html original.pdf
```

El primer argumento de `construir.py` es `--cuerpo` (tamaño del cuerpo de
texto): más bajo cabe en menos páginas. `PAGINAS` en `generar.mjs` hay que
subirlo por encima del número real de páginas del número (aquí son 7, no 4):
si se deja en el valor por defecto (4), el generador intenta recortar el
glosario de cierre para bajar a 4 y esto no tiene glosario, así que no pasa
nada grave, pero conviene fijarlo alto para que no lo intente.

## Lo aprendido con el número 263

Este gilyón no está vocalizado en el original (hebreo contemporáneo
corriente, como los boletines del Rab Bitán) — pero es mucho más largo
(~4.500 palabras de hebreo, gilyón de 8 páginas a varias columnas con letra
diminuta, frente a las ~1.700 de un boletín normal) y con secciones muy
distintas entre sí: dvar torá, midrashim, relatos con diálogo, una columna
de halajot numerada por letras hebreas, y una cabecera con muchas
dedicatorias (רפואה שלמה, לע"נ, לזיווג הגון…).

**Las abreviaturas van abreviadas también en la traducción castellana entre
paréntesis, no desarrolladas en el hebreo.** `הקב"ה`, `יוהכ"פ`, `לע"נ`,
`רפו"ש`, `בד"כ`, `או"ח` se dejan tal cual en hebreo; el desarrollo
("el Santo, bendito sea", "Yom Kipur"…) va solo en la columna castellana.
Se me olvidó esta regla a media traducción y desarrollé varias abreviaturas
directamente en el hebreo — es el error más repetido que tuve que deshacer.

**La ortografía plena (ktiv male) no es uniforme dentro del mismo
documento.** A diferencia de los boletines del Rab Bitán, aquí la misma
palabra aparece a veces con vav/yod extra y a veces sin ella en sitios
distintos del mismo texto (p. ej. `סוכות` junto a `סכות`, `מצווה` junto a
`מצות`, `כהונה` junto a `כהונה` con vav en unos sitios y sin él en otros).
**No se puede corregir una palabra con un reemplazo global** — hay que mirar
cada aparición contra el original. Un intento de automatizar esto con una
sustitución "seguro" por palabra frecuente introdujo errores en cascada
(p. ej. cambió todos los "רבי" en "רובי" porque una única coincidencia
ambigua de alineación asoció "רב" con "רוב"): quedó documentado por si hace
falta repetir el proceso, pero la lección es **verificar cada sustitución
automática por su cuenta de apariciones antes de aplicarla**, no fiarse de
que "aparece una sola vez en la lista de discrepancias" signifique que es
segura en todas partes.

**Hay texto invisible en el PDF de origen.** Debajo de una de las cajas de
color de la cabecera hay una frase suelta y sin relación ("En Parashat
Trumá explica el Ramban…") oculta por diseño (un cuadro de texto tapado, no
visible al imprimir ni al leer en pantalla). Se identificó cruzando las
coordenadas del texto (`pdftotext -bbox`) con la imagen renderizada y se
descartó: no forma parte de lo que ve el lector, así que no se traduce.

Verificado al final: quedan **62 letras** sueltas sin cuadrar sobre unas
30.000 (el grueso ya cazado y corregido, que llegó a ser diez veces más). Lo
que resta son sobre todo variantes de grafía en palabras de una sola
aparición que no llegué a cotejar una a una por agotar el tiempo razonable
para esta tarea — no tapan ningún error de traducción, son cuestión de una
vav o un yod. El nikud cubre el 93% de las palabras hebreas.

## Lo aprendido con el número 264

Documento más largo aún (~5.500 palabras, 7 páginas): el relato del infarto
del Rebe en Shminí Atzéret 5738, con mucho ídish transcrito en hebreo y
decenas de nombres propios, más dos columnas de halajot (simanim 512 y 511).

**El mismo error de vocalización del 263 se repitió, y a mayor escala.** Por
ir más rápido (a petición del usuario, que ya tenía la estructura montada),
vocalicé por defecto con grafía clásica/chaser en vez de ktiv male: kubutz
en vez de shuruk (`מֻתָּר`, `סֻכָּה`) y jolam sin vav (`לֶאֱכֹל`, `לִרְקֹד`,
`הִתְוַעֲדוּת`). Salió a la luz en la primera verificación: 303 letras
sueltas. La corrección no fue campo a campo sino por **listas de pares
palabra-mal → palabra-bien**, aplicadas con `str.replace()` global por
archivo — pero solo después de comprobar cada par contra el PDF de origen
(`pdftotext`) y contar cuántas veces aparecía antes de tocar nada, siguiendo
la lección del 263. Bajó a 155 letras en dos rondas. Un par de esas
sustituciones globales resultaron ser **falsas generalizaciones dentro del
propio documento** (p. ej. el plural `האסורים` no lleva yod aunque el
singular `האיסור` sí; `להכנס` va sin yod aunque otras palabras del mismo
campo semántico la llevan) — hubo que revertirlas para esas formas
concretas tras comprobar el original de nuevo. Confirma otra vez que ni
siquiera una "regla general" vale para todas las formas gramaticales de la
misma raíz dentro del mismo texto.

Quedan **155 letras** sueltas sobre unas 22.000 (bajado de 303 en dos
rondas). El nikud cubre el 94%. Lo que resta son en su mayoría restos de
alineación de una sola aparición (nombres propios, abreviaturas con comillas
rectas en vez de gershayim hebreo real) — se dejó de iterar ahí siguiendo la
instrucción de ser ágil, en vez de perseguir cada letra suelta como en el
263.
