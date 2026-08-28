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
| `generar.mjs` | Regenera el PDF, dibuja el pie numerado y ajusta el glosario de cierre. Necesita Node 22+. |
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

## El glosario

La columna hebrea es más corta que la castellana, así que al final de cada
párrafo queda un hueco. Un guion incrustado en el HTML los mide cuando las
fuentes ya están cargadas y los rellena:

- Hueco de 13 mm o más, en un párrafo marcado con `data-glosa`: una ficha con
  el término hebreo en grande, su transliteración y una definición.
- Hueco de 9 mm o más: una filigrana dorada.
- La ficha nunca hace crecer la fila. Si no cabe entera, se queda en versión
  compacta; si tampoco, se retira.

Al final del boletín va una tira con los términos del número. Cuántos caben
depende de por dónde parta las páginas el motor de impresión, así que no se
calcula: `generar.mjs` imprime, cuenta las páginas y quita una fila hasta que
el boletín entra en cuatro. Los términos van en la plantilla `#glosario` por
orden de prioridad, porque el recorte muerde por el final.

Para añadir o cambiar un término basta con editar esa plantilla.

## Sobre el texto

- El hebreo se reproduce **literalmente**, sin adaptaciones ni correcciones. Se conserva
  incluso `וחומרא היאולא מדינא` (por `היא ולא`), tal como aparece en el original.
- La traducción castellana es literal, no una paráfrasis. Los términos halájicos
  (*lejatjilá*, *bli neder*, *yeush*, *borer*…) se transliteran y se explican la primera vez.
- Las referencias abreviadas del original (שו"ע, רמ"א, יבי"א…) se dan desarrolladas
  en castellano: Shulján Aruj, Ramá, Yabía Omer, etc.

## El nikud

Lleva vocales solo lo que se puede vocalizar sin arriesgar:

- Todos los titulares: cabecera, dedicatoria, título del tema, encabezados de
  sección, cabeceras de la tabla, acertijo, cierre y pie.
- Los 16 términos del glosario.
- Tres bloques del cuerpo que son palabras del propio rab y de vocabulario
  claro: el resumen inicial, las cuatro conclusiones y los dos acertijos.

Queda **sin vocalizar** todo lo demás, y es a propósito:

- Las citas literales de los *poskim* (la sección de fuentes entera) y la tabla
  de halajot, que son casi transcripción del Shulján Aruj.
- Las abreviaturas con gershayim: שו"ע, רמ"א, יבי"א, ר"ה, בס"ד, קי"ל…
  No se vocalizan nunca.
- Las referencias entre paréntesis y los números en letras hebreas.
- Cualquier palabra con más de una lectura posible.

Se conservan las letras del original (ktiv male), así que la vocalización se
apoya en la grafía tal como está: לְכַתְּחִילָּה y no לְכַתְּחִלָּה.

### Comprobación

El nikud no debe alterar ni una letra. Para verificarlo se quitan los puntos
(U+0591–U+05C7, sin tocar el maqaf) del HTML y se comparan las consonantes con
las del PDF original, palabra por palabra. La comprobación tiene que salir
vacía salvo por la dedicatoria y el glosario, que son texto añadido.

No sirve hacer esa comprobación sobre el PDF generado: `pdftotext` mete
espacios dentro de las palabras vocalizadas porque posiciona cada glifo por
separado. Es un artefacto de la extracción, no del PDF.
