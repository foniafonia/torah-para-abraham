---
name: boletin
description: Maquetar un boletín halájico bilingüe hebreo-castellano en PDF a partir del PDF original del Rab Moshé Bitán (עלון ידיעת רצונו). Úsala cuando el usuario adjunte un boletín, un עלון o una hoja de halajá en hebreo y pida traducirlo, maquetarlo a dos columnas, o hacer un PDF para entregar a las familias. También al retocar o regenerar un boletín ya hecho de boletin/.
---

# Boletín Yediat Retzonó — hebreo / castellano

Edición bilingüe a dos columnas: **hebreo a la derecha, castellano a la
izquierda**, alineados párrafo con párrafo. A4, 4 páginas = 2 folios a doble
cara, para entregar a las familias. Dedicado a la *refuá shelemá* de todos los
enfermos del pueblo de Israel.

El número 5 (Ki Tetsé 5786) está en `boletin/05-ki-tetse/` y sirve de
referencia: si dudas de cómo se resuelve algo, míralo ahí.

## Reglas que no se negocian

1. **El hebreo va literal.** Ni una letra cambia: no se corrige, no se
   moderniza, no se adapta. En el número 5 se conservó `וחומרא היאולא מדינא`,
   que en el original va pegado (por `היא ולא`). Si ves algo así, déjalo y
   avisa al usuario; no lo arregles por tu cuenta.
2. **La traducción es literal, no una paráfrasis.** Los términos halájicos se
   transliteran en cursiva (*lejatjilá*, *bli neder*, *yeush*, *borer*) y se
   explican la primera vez. Las abreviaturas del original se dan desarrolladas
   en castellano: שו"ע → Shulján Aruj, יבי"א → Yabía Omer, מנח"ש → Minjat
   Shlomó, אול"צ → Or LeTzión.
3. **No inventes nombres propios.** `מו"ר הגר"א פרץ` se dejó como «el Gaón Rab
   A. Peretz» sin desarrollar la inicial. Pregunta antes de completar un
   nombre.
4. **Verifica antes de entregar.** `comun/verificar.py` tiene que salir sin
   palabras faltantes.

## Proceso

### 1. Extraer el hebreo del PDF original

`pdftotext -layout -enc UTF-8` (instala `poppler-utils` si hace falta). El
modo `-raw` sale peor: invierte el orden de las palabras.

El PDF viene en orden visual, así que hay que arreglar la puntuación:

```python
t = re.sub('[‪-‮‎‏⁦-⁩]', '', crudo)  # marcas de dirección
t = t.translate(str.maketrans({'(': ')', ')': '('}))               # paréntesis al revés
t = re.sub(r' ([.,:;?!])', r'\1 ', t)                              # puntos pegados a la palabra siguiente
```

Quedan casos sueltos (`X(. Y)` → `X. (Y)`, corchetes invertidos, números).
Repásalos a mano contra las páginas renderizadas: `pdftoppm -r 130 -png`.

Las tablas de varias columnas salen entrelazadas. Extrae cada columna aparte
recortando: `pdftotext -x <pt> -y <pt> -W <pt> -H <pt>`.

### 2. Montar el HTML

Copia `boletin/comun/plantilla.html` a `boletin/NN-parasha/boletin-NN-parasha.html` y
rellénala. La plantilla lleva comentados el orden del DOM y las trampas.

### 3. Vocalizar (nikud)

El usuario lo quiere **al máximo sin arriesgar**: en el número 5 se llegó al
84%. Va con puntos todo el cuerpo, incluidas las citas de los *poskim*.

Se queda **sin vocalizar**:

- Abreviaturas con gershayim: שו"ע, רמ"א, ע"ש, עכ"ל, הנ"ל, תכ"ד, קי"ל…
- Referencias de siman y se'if en letras hebreas: ריא, ס"ב, תקצז, רל"ב.
- Apellidos y nombres no hebreos: ביטן, זוננפלד, וואזנר, פרץ, נספרסו.
- Fórmulas litúrgicas arameas con más de una tradición de vocalización
  (די נדירנא ודמישתבענא, דנדרנא).
- Cualquier palabra con más de una lectura posible.

**Se conservan las letras.** La vocalización se apoya en el *ktiv male* tal
como está en cada sitio, así que la misma palabra lleva puntos distintos según
su grafía: `מִצְוָוה` donde el original pone מצווה y `מִצְוָה` donde pone מצוה;
`שָׁלוֹשׁ` frente a `שָׁלֹשׁ`; `בִּתְחִילַּת` frente a `בִּתְחִלַּת`.

Al pasar de ktiv male a la forma clásica es fácil comerse una letra
(`קדושת` → `קְדֻשַּׁת` pierde el vav). Por eso el paso 5 no es opcional.

### 4. Generar

```sh
node boletin/comun/generar.mjs boletin/NN-parasha/boletin-NN-parasha.html
```

Usa el protocolo de depuración de Chromium, no el flag `--print-to-pdf`,
porque numerar las páginas exige el `footerTemplate` de `Page.printToPDF`.
Además imprime, cuenta páginas y recorta el glosario de cierre hasta que cabe
en 4. Variables: `CHROME`, `PAGINAS`, `PUERTO`.

### 5. Verificar

```sh
python3 boletin/comun/verificar.py boletin/NN-parasha/boletin-NN-parasha.html original.pdf
```

Quita el nikud de ambos lados y compara las consonantes. Tiene que decir «no
falta ninguna consonante del original». Lo que sobre debe ser solo la
dedicatoria y el glosario.

**No verifiques contra el PDF generado**: `pdftotext` mete espacios dentro de
las palabras vocalizadas porque posiciona cada glifo por separado. Es un
artefacto de la extracción.

### 6. Mirarlo

`pdftoppm -r 92 -png` y revisa las cuatro páginas antes de entregar. El
glosario y los saltos de página no siempre caen donde esperas.

## Trampas del CSS y del guion

Todas están resueltas en `comun/estilo.css`; si tocas algo, no las deshagas.

- **Los dos idiomas en la misma fila.** `.par` es un grid de dos columnas.
  Sin `grid-row: 1` explícito en `.he` y `.es`, la colocación automática manda
  el segundo hijo a una fila nueva y el castellano cae debajo del hebreo.
- **`align-self: start`** en las dos columnas: si se estiran, `scrollHeight`
  devuelve el alto de la fila y los huecos miden cero.
- **La divisoria es un `::before` absoluto** de `.par`, no un borde de `.es`,
  para abarcar toda la fila aunque las columnas midan distinto.
- **El pie va con estilos en línea.** Chromium lo renderiza en un documento
  aparte que ignora las hojas de estilo y arranca con `font-size: 0`. Un
  `<style>` dentro del `footerTemplate` no hace nada.
- **`break-before: avoid` en `.glosa` y `.filigrana`**, o la ficha se queda
  huérfana al principio de la página siguiente, lejos del párrafo que explica.
- **`@page` no lleva márgenes**: los fija `generar.mjs`, porque los del CSS
  ganarían a los del protocolo.

## Relleno de huecos

La columna hebrea es más corta, así que cada párrafo deja un hueco. El guion
del final del HTML los mide con las fuentes ya cargadas y los aprovecha:

- Hueco ≥ 13 mm en un `.par` con `data-glosa`: ficha con el término hebreo en
  grande, transliteración y definición.
- Hueco ≥ 9 mm: filigrana dorada.
- La ficha nunca hace crecer la fila: si no cabe entera se queda compacta y,
  si tampoco, se retira.

Los términos van en la plantilla `#glosario` **por orden de prioridad**,
porque la tira de cierre se recorta por el final. Que sean múltiplo de 4 para
que no quede una fila coja, y que los primeros cubran todo el boletín, no solo
el tema de la investigación.

## Tipografía

David Libre (hebreo, con buen soporte de nikud), Frank Ruhl Libre (titulares)
y EB Garamond (castellano). Todas OFL, en `comun/fonts/`. Azul tinta `#1e3a5f`
y oro `#8c6d2f`.

Si faltan en el entorno, se bajan de
`https://raw.githubusercontent.com/google/fonts/main/ofl/<familia>/<archivo>`.
