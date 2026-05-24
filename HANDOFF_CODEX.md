# Handoff para Codex (Proyecto Perashá Interactiva)

## Ruta del proyecto
- `/Users/joseaserraf/Documents/torah para abraham/index.html`
- `/Users/joseaserraf/Documents/torah para abraham/styles.css`
- `/Users/joseaserraf/Documents/torah para abraham/script.js`

## Estado actual (sí funciona)
- Pasuk completo de `שמות י״ח:א׳` visible.
- Todas las palabras del pasuk son clicables (`data-lemma`) y abren popup.
- Popup con pestañas: Traducción, Raíz, Conjugación, Rashi.
- Rashi está dentro del popup (no abajo), con índice a la derecha.
- En Rashi:
  - Línea completa en plano (lectura corrida).
  - Palabras clicables que alimentan una tarjeta literal giratoria.
- Toggles activos: nikud, taamim, traducción.

## Problemas históricos a vigilar
1. Bidi/RTL mezclado con español (LTR) en conjugación y construcción morfológica.
2. Render de hebreo con niqqud/taamim al combinar tokens coloreados.
3. En versiones previas, algunas palabras verdes dejaron de abrir popup.
4. Evitar romper lo que ya funciona al refactorizar Rashi.

## Qué revisar ahora
1. Verificar visualmente RTL perfecto en:
   - pestaña `Conjugación`
   - tarjeta de construcción (`וַ + י + שְׁמַע`)
2. Confirmar que **todas** las palabras del pasuk abren ficha (sin excepciones).
3. Validar que en Rashi:
   - frase plana aparece antes de las clicables
   - clic en palabra actualiza tarjeta literal correctamente
4. Mantener arquitectura incremental (no eliminar features estables).

## Petición funcional pendiente del usuario
- Si el niño pincha cualquier palabra del pasuk, debe ver traducción.
- En Rashi, estudiar palabra por palabra con tarjeta giratoria literal.

