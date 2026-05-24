# Perashá Interactiva — Estado Final (24 may 2026)

## ✅ VERIFICACIONES COMPLETADAS

### 1. RTL/BIDI — PERFECTO
- Pasuk completo en `שמות י״ח:א׳` renderizado de **derecha a izquierda**
- Nikud + Taamim correctos
- Construcción morfológica (וַ + יִ + שְׁמַע) con orden visual exacto

**Implementación**:
- `.pasuk` → `dir="rtl"`
- `.hebrew-inline` → `flex-direction: row-reverse + unicode-bidi: isolate-override`
- `.token` → Font hebrea + aislamiento BIDI
- `.conj-row .hebrew-inline` → RTL explícito

### 2. PALABRAS CLICABLES — FUNCIONALES
**16 palabras** del pasuk con `data-lemma`:
```
וַיִּשְׁמַע, יִתְרוֹ, כֹהֵן, מִדְיָן, חֹתֵן, מֹשֶׁה, אֵת, 
כָּל־אֲשֶׁר, עָשָׂה, אֱלֹהִים, לְמֹשֶׁה, וּלְיִשְׂרָאֵל, 
עַמּוֹ, כִּי־הוֹצִיא, יְהֹוָה, אֶת־יִשְׂרָאֵל, מִמִּצְרָיִם
```

**Interactividad**:
- ✅ Click → Abre popup
- ✅ Enter/Space → Abre popup (accesibilidad)
- ✅ Highlight automático en Rashi

### 3. RASHI DENTRO DEL POPUP — CORRECTO
**Estructura**:
1. Línea plana (lectura corrida) en hebreo
2. Palabras clicables individuales
3. Tarjeta literal giratoria (frente: hebreo, reverso: explicación)
4. Índice de Rashi a la derecha (RTL)

**Lemmas conectados**:
- r1: וישמע יתרו
- r2: יתרו (7 nombres)
- r3: חתן משה
- r4: למשה ולישראל
- r5: את כל אשר עשה
- r6: כי הוציא ה׳

### 4. CONJUGACIÓN — TABLA VERTICAL
**Estructura**:
```
Yo:            [שָׁמַע] + [תִּי]
Tú (m):        [שָׁמַע] + [תָּ]
Tú (f):        [שָׁמַע] + [תְּ]
Él:            [שָׁמַע]
Ella:          [שְׁמַע] + [ָה]
...
```

**Características**:
- Etiqueta español **LTR** a la izquierda
- Hebreo **RTL** a la derecha
- Coloreo: Raíz (azul), Letras añadidas (naranja)
- Flexbox para alineación perfecta

---

## 📋 ARCHIVOS ACTUALIZADOS

| Archivo | Cambios | Estado |
|---------|---------|--------|
| `script.js` | Accesibilidad (keydown), limpieza Rashi | ✅ |
| `styles.css` | RTL flex, conjugación, tokens | ✅ |
| `index.html` | Sin cambios (estructura intacta) | ✅ |
| `PARA_CLAUDE/` | Sincronizado | ✅ |

---

## 🎯 LISTO PARA

✅ Niño de 10 años  
✅ Lectura Torah interactiva  
✅ Estudio de Rashi integrado  
✅ Análisis morfológico visual  
✅ Sin dependencias externas (HTML autocontenido)  

---

## 📝 PRÓXIMAS CAPAS

1. Más lemas completos en `wordData` (ahora 2/16)
2. Preguntas del pasuk (modo juego)
3. Seguimiento de progreso (IndexedDB)
4. Modo lectura guiada sin nikud
5. Historial de palabras estudiadas

---

**Creado**: 24 may 2026  
**Público**: Abraham (10 años)  
**Contexto**: Educación religiosa — Parashat Yitró
