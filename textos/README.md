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
