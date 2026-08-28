#!/usr/bin/env bash
# Genera el PDF del boletín bilingüe (A4, 4 páginas = 2 folios a doble cara).
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-/opt/pw-browsers/chromium}"
"$CHROME" --headless --disable-gpu --no-sandbox \
  --allow-file-access-from-files --virtual-time-budget=8000 \
  --no-pdf-header-footer \
  --print-to-pdf="$PWD/boletin-05-ki-tetse-he-es.pdf" \
  "file://$PWD/boletin-05-ki-tetse.html"
