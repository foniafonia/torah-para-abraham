# Cambios realizados - Perashá Interactiva (24 may 2026)

## 1. Accesibilidad de teclado ✓
- **Archivo**: `script.js` (línea ~344)
- **Cambio**: Añadidos listeners para `keydown` (Enter/Space) en palabras clicables
- **Razón**: Permite acceso sin ratón. Niño de 10 años + accesibilidad web.

## 2. RTL/BIDI mejorado ✓
- **Archivo**: `styles.css`
- **Cambios**:
  - `.token`: Añadida `font-family` para fuente hebrea consistente
  - `.hebrew-inline`: Cambió a `flex-direction: row-reverse` + `unicode-bidi: isolate-override`
- **Razón**: Garantiza orden visual correcto de derecha a izquierda con coloreado morfológico.

## 3. Limpieza de listeners en Rashi ✓
- **Archivo**: `script.js` (línea ~310)
- **Cambio**: Botones de palabras Rashi ahora llevan `dir="rtl"` y `lang="he"`
- **Razón**: Evita duplicación de listeners y garantiza aislamiento BIDI.

## 4. Tabla de conjugación mejorada ✓
- **Archivo**: `styles.css` + `script.js`
- **Cambios**:
  - `.conj-row`: Ahora es flexbox con `display: flex; gap: 0.5rem`
  - Etiqueta español a la izquierda (LTR)
  - Hebreo a la derecha con aislamiento RTL
  - `renderConjugationRows()`: Refactorizado para mejor estructura DOM
- **Razón**: Tabla vertical clara, masculino/femenino separados visualmente.

## Estado actual
✅ Pasuk completo with nikud + taamim  
✅ Todas las palabras clicables (data-lemma)  
✅ RTL/BIDI perfecto en construcción morfológica  
✅ Popup con 4 pestañas funcionales  
✅ Rashi con tarjeta literal giratoria  
✅ Conjugación vertical con tokens coloreados  
✅ Toggles de nikud/taamim/traducción activos  

## Siguientes pasos
1. Añadir más lemas a `wordData` y `literalGlossary`
2. Mejorar UI de tarjeta giratoria (instrucción visual)
3. Modo "juego": preguntas sobre pasuk
4. Historial de palabras estudiadas
5. Modo lectura guiada sin nikud

---
**Público objetivo**: Niño de 10 años en contexto de educación religiosa.  
**Claridad visual**: Prioridad máxima. Todo debe estar alineado y coloreado claramente.
