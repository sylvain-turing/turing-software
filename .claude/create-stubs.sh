#!/bin/bash
# Usage: ./create-stubs.sh <worktree-path> <theme-id> <PascalName> <bg> <fg> <muted> <primary> <font>
WORKTREE="$1"
ID="$2"
PASCAL="$3"
BG="$4"
FG="$5"
MUT="$6"
PRI="$7"
FONT="$8"

DIR="$WORKTREE/components/themes/$ID"

for args in \
  "creation-site-web|CreationSiteWeb|Creation de Sites Web|Des sites web d'exception, conçus sur mesure." \
  "application-mobile|ApplicationMobile|Applications Mobiles|Applications natives performantes et elegantes." \
  "site-e-commerce|SiteEcommerce|Site E-Commerce|Boutiques en ligne optimisees pour la conversion." \
  "portfolio|Portfolio|Portfolio|Decouvrez nos realisations et projets recents." \
  "a-propos|APropos|A Propos|Notre equipe et notre vision du developpement digital." \
  "contact|Contact|Contact|Parlons de votre projet. Nous sommes a votre ecoute."; do
  IFS='|' read -r file export title desc <<< "$args"
  cat > "$DIR/$file.tsx" << EOF
"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export function ${PASCAL}${export}() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "${BG}", color: "${FG}" }}>
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "${FONT}" }}>${title}</h1>
        <p className="mb-8" style={{ color: "${MUT}" }}>${desc}</p>
        <Link href="/" className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all" style={{ color: "${PRI}" }}>
          <ArrowLeft className="w-4 h-4" /> Retour
        </Link>
      </div>
    </div>
  );
}
EOF
done
echo "Stubs created for $ID"
