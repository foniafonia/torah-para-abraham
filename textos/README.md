# Textos bilingües

Textos que no son boletines, con la misma maqueta: hebreo a la derecha,
castellano a la izquierda, alineados párrafo con párrafo.

Reutilizan lo de `boletin/comun/` (estilo, fuentes, generador, verificación),
así que se generan igual:

```sh
PAGINAS=3 node boletin/comun/generar.mjs textos/rambam-teshuva-4/rambam-teshuva-4.html
python3 boletin/comun/verificar.py textos/rambam-teshuva-4/rambam-teshuva-4.html fuente.txt
```

`PAGINAS` marca el objetivo de páginas y `--cuerpo` (en el `<style>` de cada
texto) ajusta el llenado.

## rambam-teshuva-4

Rambam, Mishné Torá, Hiljot Teshuvá, capítulo 4: las veinticuatro cosas que
impiden la teshuvá. 3 páginas.

El hebreo viene ya vocalizado de origen y se reproduce tal cual; solo llevan
nikud añadido por mí los encabezados que no están en el texto del Rambam
(«פֶּרֶק ד», «הֲלָכָה א»…). Comprobado contra la fuente: no falta ninguna letra.

## rambam-teshuva-9

Rambam, Mishné Torá, Hiljot Teshuvá, capítulo 9: la recompensa de las mitzvot
en este mundo y en el venidero. 2 halajot, 2 páginas.

El hebreo vocalizado **no se teclea**: viene de `fuente/ram9.json` (versión
Torat Emet, descargada de la API de Sefaria). Las dos halajot son muy largas,
así que se parten en bloques para poder alinearlas con la traducción; el
reparto está en `fuente/cap9.py` (`frases` = cuántas oraciones del original
lleva cada bloque) y `construir.py` comprueba al montar que la suma cuadra y
que al reunir los trozos sale el original letra por letra.

```sh
python3 textos/rambam-teshuva-9/fuente/construir.py 1.10
PAGINAS=2 node boletin/comun/generar.mjs textos/rambam-teshuva-9/rambam-teshuva-9.html
python3 boletin/comun/verificar.py textos/rambam-teshuva-9/rambam-teshuva-9.html \
        textos/rambam-teshuva-9/rambam-teshuva-9-original.txt
```

Comprobado contra el JSON de origen: no falta ninguna letra; las diez de más
son los rótulos «הלכה א» y «הלכה ב», que no están en el texto del Rambam. Con
cuerpo 1.10 entra en 2 páginas y el glosario del cierre sale entero; subiendo
a 1.15 el glosario se recorta solo hasta dejar una entrada.

## rambam-sucot

Rambam, Mishné Torá, Hiljot Shofar, Sucá y Lulav, **capítulos 4 a 8 completos**:
99 halajot, 8 páginas (4 folios a doble cara).

El hebreo vocalizado no se teclea a mano: viene de la edición impresa, en
`fuente/ram4.json` … `ram8.json`. Las traducciones están en `fuente/cap4.py` …
`cap8.py`, una por halajá y en el mismo orden. Para rehacer el HTML:

```sh
python3 textos/rambam-sucot/fuente/construir.py 0.92
PAGINAS=8 node boletin/comun/generar.mjs textos/rambam-sucot/rambam-sucot.html
python3 boletin/comun/verificar.py textos/rambam-sucot/rambam-sucot.html \
        textos/rambam-sucot/rambam-sucot-original.txt
```

El argumento de `construir.py` es el cuerpo de texto: con 0.92 entra en 8
páginas y con 0.96 se va a 9. Lo que el verificador cuenta como añadido son
solo las letras de numeración de las halajás y las palabras del encabezado.
