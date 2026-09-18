# Material para niños

Resúmenes con actividades para chicos y chicas, a partir de textos para
adultos. A4, páginas fijas: cada `<section class="pag">` es una página.

```
fonts/          Nunito y Fredoka (OFL); el hebreo usa David Libre de boletin/comun/fonts
imprimir.mjs    imprime la hoja a PDF y avisa si alguna página se desborda
kipur/          Yom Kipur, a partir de «Reflexiones para Kipur» (10 años, 4 págs.)
```

```sh
node ninos/imprimir.mjs ninos/kipur/kipur-ninos.html
```

Imprime `desborde: ninguno` cuando todo cabe. Si no, dice qué página se
pasa y por cuántos píxeles: hay que recortar texto en esa página, no
achicar la letra, que ya está al mínimo cómodo para leer a esa edad.
`huecos` es el alto libre que queda en cada página, por si hay que rellenar.
