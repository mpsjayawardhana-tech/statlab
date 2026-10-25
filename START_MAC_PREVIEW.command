#!/bin/bash
cd "$(dirname "$0")" || exit 1
if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 not found. Install Python 3, or run the deployed Vercel version."
  read -r -p "Press Enter to close."
  exit 1
fi
printf '\nPCG STATLAB local preview (no cloud backend): http://localhost:8000/\n\n'
(sleep 1; open 'http://localhost:8000/') &
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
