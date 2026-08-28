#!/usr/bin/env bash
# Genera el PDF del boletín bilingüe (A4, 4 páginas = 2 folios a doble cara).
set -euo pipefail
cd "$(dirname "$0")"
exec node generar.mjs "$@"
