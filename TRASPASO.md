# Traspaso — Torá bilingüe hebreo/castellano

Documento para retomar el trabajo en una sesión nueva sin contexto previo.
Escrito el 4 de septiembre de 2026.

- **Repo:** `foniafonia/torah-para-abraham`
- **Rama:** `claude/hebrew-spanish-translation-pdf-v20urs` (todo empujado)
- **Usuario:** globalizafonia@gmail.com

---

## Qué es esto

El Rab Moshé Bitán publica cada semana un boletín halájico en hebreo
(עלון ידיעת רצונו). El usuario los traduce y maqueta en edición bilingüe para
repartir a las familias de su comunidad: **hebreo a la derecha, castellano a
la izquierda**, alineados párrafo con párrafo, A4, 4 páginas = 2 folios a
doble cara. Dedicado a la *refuá shelemá* de todos los enfermos del pueblo de
Israel.

El usuario adjunta el PDF original y pide el bilingüe. Ya hay dos números
hechos y un texto suelto del Rambam.

## Qué hay hecho

| Entregable | Dónde | Estado |
|---|---|---|
| Boletín nº5 — Ki Tetsé 5786, *hatarat nedarim* de erev Rosh HaShaná | `boletin/05-ki-tetse/` | 4 págs, nikud 84% |
| Boletín nº6 — Nitzavim-Vayélej 5786, *shiur hatekiot* | `boletin/06-nitzavim-vayelej/` | 4 págs, nikud 83% |
| Rambam, Hiljot Teshuvá 4 (las 24 cosas que impiden la teshuvá) | `textos/rambam-teshuva-4/` | 3 págs |

Los tres PDF se le entregaron ya por el chat, más un zip
(`Torá bilingüe/`) con los PDFs y las fuentes editables listo para arrastrar
a iCloud Drive.

## Estructura

```
boletin/
  comun/            compartido entre números
    plantilla.html    esqueleto para un número nuevo
    estilo.css        maquetación e impresión
    generar.mjs       genera el PDF, numera páginas, ajusta el glosario
    verificar.py      comprueba que el hebreo no se ha alterado
    fonts/            David Libre, Frank Ruhl Libre, EB Garamond (OFL)
  05-ki-tetse/
  06-nitzavim-vayelej/
textos/             textos que no son boletines, misma maqueta
  rambam-teshuva-4/
.claude/skills/boletin/SKILL.md    el proceso entero, paso a paso
```

**Lee `.claude/skills/boletin/SKILL.md` antes de tocar nada.** Recoge la
extracción del hebreo, el criterio de traducción, la política de nikud y las
trampas de CSS y de Chromium, cada una de las cuales costó un intento.

## Órdenes

```sh
# número nuevo
cp boletin/comun/plantilla.html boletin/07-parasha/boletin-07-parasha.html
node boletin/comun/generar.mjs boletin/07-parasha/boletin-07-parasha.html
python3 boletin/comun/verificar.py boletin/07-parasha/boletin-07-parasha.html original.pdf

# revisar antes de entregar
pdftoppm -r 92 -png boletin/07-parasha/boletin-07-parasha.pdf /tmp/v
```

`generar.mjs` necesita Node 22+ y un Chromium (`CHROME=`). `PAGINAS=` cambia
el objetivo de páginas. En el `<style>` de cada número, `--cuerpo` ajusta el
llenado: el generador recorta cuando sobra, pero no estira cuando falta.

## Las reglas del usuario

Dichas por él, no inferidas:

1. **El hebreo va literal.** Ni una letra cambia. En el nº5 se conserva
   `וחומרא היאולא מדינא`, que en el original va pegado (por `היא ולא`). Si
   aparece algo así, se deja y se le avisa.
2. **La traducción es literal, nada de adaptaciones.** Términos halájicos
   transliterados en cursiva y explicados la primera vez; abreviaturas
   desarrolladas en castellano.
3. **Nikud al máximo sin arriesgar.** Textual suyo: «no lo uses en citas
   literales ni abreviaturas, solo en las palabras fáciles, el resto que veas
   con dudas lo dejas como está». Luego: «te podías haber mojado mucho más».
   El resultado es 83–84%: va vocalizado todo el cuerpo, incluidas las citas
   de los *poskim*. Queda sin puntos lo que no debe llevarlos (abreviaturas
   con gershayim, referencias de siman en letras hebreas, apellidos, fórmulas
   arameas con varias tradiciones de lectura).
4. **No inventar nombres propios.** `מו"ר הגר"א פרץ` quedó como «el Gaón Rab
   A. Peretz», sin desarrollar la inicial. Preguntar antes de completar.
5. Le gusta que los huecos se aprovechen: pidió «palabras en grande bonitas»
   donde la columna hebrea queda corta. De ahí las fichas de glosario y la
   tira de términos del cierre.

## Lo que NO se puede dar por bueno sin comprobar

`verificar.py` quita el nikud de ambos lados y compara consonantes. **Fíate
del script, no de la lectura.** En el nº6 pilló cinco cosas que se me habían
pasado releyendo, incluida una lista de autores entera sin traducir.

Distingue dos salidas: **ERROR** (faltan letras de verdad, hay que
arreglarlo) y **AVISO** (solo se han movido los cortes de palabra, artefacto
de pdftotext donde el original ya viene vocalizado).

## Pendiente

**Crear una carpeta en la nube con estos materiales, sincronizada.** El
usuario pidió iCloud. En la sesión anterior no se pudo: contenedor remoto, sin
conector de iCloud. Se le entregó el zip para que lo arrastre él a iCloud
Drive, y se le ofreció Google Drive como alternativa —ese conector sí estaba
disponible— pero abrió un hilo nuevo para ver si desde ahí se puede con
iCloud.

**Si en la sesión nueva hay acceso a iCloud:** montar la carpeta con la misma
estructura del zip (`PDFs listos/` y `Fuentes editables/`, más el `LÉEME.md`)
y dejarla sincronizando. Si no lo hay, decírselo claro y ofrecer Google Drive
o seguir con el zip.

## Contexto de trabajo

Trabaja en castellano. Prefiere respuestas directas, sin relleno, y que se le
diga claramente lo que no se puede hacer en vez de rodearlo. Cuando algo no
sale a la primera, quiere saber qué falló y por qué.
