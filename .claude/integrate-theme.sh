#!/bin/bash
# Usage: ./integrate-theme.sh <worktree-path> <theme-id> <PascalName> <display-name> <emoji> <num> <prev-id> <PrevPascal>
# Example: ./integrate-theme.sh .worktrees/theme-velvet velvet Velvet "Velours Theatre" 🎭 41 cipher Cipher

WORKTREE="$1"
ID="$2"
PASCAL="$3"
DISPLAY="$4"
EMOJI="$5"
NUM="$6"
PREV_ID="$7"
PREV_PASCAL="$8"

cd "$WORKTREE" || exit 1

# --- globals.css: add import after prev theme ---
PREV_CSS_LINE=$(grep -n "@import.*${PREV_ID}.css" app/globals.css | tail -1 | cut -d: -f1)
if [ -n "$PREV_CSS_LINE" ]; then
  sed -i "${PREV_CSS_LINE}a\\@import \"../styles/themes/${ID}.css\";" app/globals.css
fi

# --- theme-provider.tsx: add to THEMES array ---
sed -i "s/{ id: \"${PREV_ID}\",.*num: [0-9]* },/&\n  { id: \"${ID}\", name: \"${DISPLAY}\", emoji: \"${EMOJI}\", num: ${NUM} },/" components/theme-provider.tsx

# --- 9 resolver files ---
declare -A RESOLVERS=(
  ["navigation"]="Navigation"
  ["footer"]="Footer"
  ["home-content"]="Home"
  ["creation-site-web-content"]="CreationSiteWeb"
  ["application-mobile-content"]="ApplicationMobile"
  ["site-e-commerce-content"]="SiteEcommerce"
  ["portfolio-content"]="Portfolio"
  ["a-propos-content"]="APropos"
  ["contact-content"]="Contact"
)

# Map resolver file to component file name
declare -A FILE_MAP=(
  ["navigation"]="navigation"
  ["footer"]="footer"
  ["home-content"]="home"
  ["creation-site-web-content"]="creation-site-web"
  ["application-mobile-content"]="application-mobile"
  ["site-e-commerce-content"]="site-e-commerce"
  ["portfolio-content"]="portfolio"
  ["a-propos-content"]="a-propos"
  ["contact-content"]="contact"
)

for resolver in "${!RESOLVERS[@]}"; do
  COMP="${RESOLVERS[$resolver]}"
  FILE="${FILE_MAP[$resolver]}"
  RESOLVER_FILE="components/${resolver}.tsx"

  # Add import after prev theme import
  PREV_IMPORT_LINE=$(grep -n "import { ${PREV_PASCAL}${COMP} }" "$RESOLVER_FILE" | tail -1 | cut -d: -f1)
  if [ -n "$PREV_IMPORT_LINE" ]; then
    sed -i "${PREV_IMPORT_LINE}a\\import { ${PASCAL}${COMP} } from \"@/components/themes/${ID}/${FILE}\";" "$RESOLVER_FILE"
  fi

  # Add to themeComponents map after prev theme entry
  PREV_MAP_LINE=$(grep -n "${PREV_ID}: ${PREV_PASCAL}${COMP}," "$RESOLVER_FILE" | tail -1 | cut -d: -f1)
  if [ -n "$PREV_MAP_LINE" ]; then
    sed -i "${PREV_MAP_LINE}a\\  ${ID}: ${PASCAL}${COMP}," "$RESOLVER_FILE"
  fi
done

echo "Integration complete for theme: $ID"
