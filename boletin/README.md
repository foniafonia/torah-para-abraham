# Boletín Yediat Retzonó — hebreo / castellano

Edición bilingüe del boletín del Rab Moshé Bitán: **hebreo a la derecha,
castellano a la izquierda**, párrafo con párrafo. A4, 4 páginas = 2 folios a
doble cara. Dedicado a la *refuá shelemá* de todos los enfermos del pueblo de
Israel.

## Estructura

```
comun/            lo compartido entre números
  plantilla.html    esqueleto para un número nuevo
  estilo.css        maquetación e impresión
  generar.mjs       genera el PDF, numera páginas y ajusta el glosario
  verificar.py      comprueba que el hebreo no se ha alterado
  fonts/            David Libre, Frank Ruhl Libre, EB Garamond (OFL)
05-ki-tetse/      número 5 — Ki Tetsé 5786
  boletin-05-ki-tetse.html
  boletin-05-ki-tetse.pdf
```

## Un número nuevo

```sh
mkdir boletin/06-parasha
cp boletin/comun/plantilla.html boletin/06-parasha/boletin-06-parasha.html
# rellenar el HTML
node boletin/comun/generar.mjs boletin/06-parasha/boletin-06-parasha.html
python3 boletin/comun/verificar.py boletin/06-parasha/boletin-06-parasha.html original.pdf
```

El PDF toma el nombre del HTML, así que el HTML lleva el del número.

`generar.mjs` necesita Node 22+ y un Chromium; se le indica con `CHROME=`.
El objetivo de páginas se cambia con `PAGINAS=`.

El proceso completo, con las trampas de extracción, traducción y nikud, está
en la skill del proyecto: `.claude/skills/boletin/SKILL.md`.

## Impresión

A4, a doble cara, borde largo. Salen 2 folios: página 1–2 en el primero, 3–4
en el segundo. Cada página lleva su número al pie, en castellano a la
izquierda y en hebreo a la derecha.

## El texto

- El hebreo se reproduce **literalmente**, sin adaptaciones ni correcciones.
  Se conserva incluso `וחומרא היאולא מדינא` (por `היא ולא`), tal como aparece
  en el original.
- La traducción castellana es literal, no una paráfrasis. Los términos
  halájicos se transliteran y se explican la primera vez, y las referencias
  abreviadas se dan desarrolladas: Shulján Aruj, Ramá, Yabía Omer, etc.

## El nikud

Lleva vocales **el 84% de las palabras hebreas**: los titulares, el glosario y
el cuerpo entero, incluidas las citas de los *poskim*.

Queda sin vocalizar solo lo que no debe llevarlas o no admite una lectura
única: las abreviaturas con gershayim (שו"ע, רמ"א, ע"ש, עכ"ל…), las
referencias de siman en letras hebreas, los apellidos y nombres no hebreos, la
fórmula aramea de Kol Nidré que cita la Mishná Berurá, `היאולא` —que en el
original va pegado— y `בחינוך`, que puede leerse *be-* o *ba-*.

Se conservan las letras del original (ktiv male), así que la vocalización se
apoya en la grafía tal como está. Por eso la misma palabra lleva puntos
distintos según cómo esté escrita en cada sitio: `מִצְוָוה` donde el original
pone מצווה y `מִצְוָה` donde pone מצוה.

### Comprobación

`verificar.py` quita los puntos de ambos lados y compara las consonantes
palabra por palabra. Tiene que salir sin faltantes: al vocalizar es fácil
comerse una yod o un vav pasando de ktiv male a la forma clásica.

No sirve comprobar contra el PDF generado: `pdftotext` mete espacios dentro de
las palabras vocalizadas porque posiciona cada glifo por separado.

## El glosario

La columna hebrea es más corta que la castellana, así que al final de cada
párrafo queda un hueco. Un guion incrustado en el HTML los mide cuando las
fuentes ya están cargadas y los rellena: ficha de término en los huecos de
13 mm o más marcados con `data-glosa`, filigrana dorada en los de 9 mm. La
ficha nunca hace crecer la fila; si no cabe, se compacta o se retira.

Al final va una tira con los términos del número. Cuántos caben depende de por
dónde parta las páginas el motor de impresión, así que no se calcula:
`generar.mjs` imprime, cuenta páginas y quita una fila hasta que entra. Los
términos van en la plantilla `#glosario` por orden de prioridad, porque el
recorte muerde por el final.
