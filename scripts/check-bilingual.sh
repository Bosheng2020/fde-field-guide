#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

status=0

for english in docs/en/*.md; do
  name="$(basename "$english")"
  chinese="docs/zh-CN/$name"
  if [[ ! -s "$chinese" ]]; then
    echo "Missing or empty Chinese counterpart: $chinese"
    status=1
  fi
done

for chinese in docs/zh-CN/*.md; do
  name="$(basename "$chinese")"
  english="docs/en/$name"
  if [[ ! -s "$english" ]]; then
    echo "Missing or empty English counterpart: $english"
    status=1
  fi
done

for english in templates/*.md examples/*.md; do
  [[ "$english" == *.zh-CN.md ]] && continue
  [[ "$(basename "$english")" == "README.md" ]] && continue
  chinese="${english%.md}.zh-CN.md"
  if [[ ! -s "$chinese" ]]; then
    echo "Missing or empty Chinese counterpart: $chinese"
    status=1
  fi
done

if [[ ! -s README.md || ! -s README.zh-CN.md ]]; then
  echo "Root bilingual README pair is incomplete"
  status=1
fi

if [[ "$status" -eq 0 ]]; then
  echo "Bilingual content pairs are complete."
fi

exit "$status"

