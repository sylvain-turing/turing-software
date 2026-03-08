"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { poppins, ACCENT, GRAY, layout, scanlineStyle, circuitGrid, circuitGridLight, scanlineStyleLight, HudBrackets } from "./shared";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    cat: "SITE WEB",
    title: "NOVACORP",
    desc: "Refonte complete du site corporate avec un design editorial premium et une architecture de contenu optimisee.",
    tags: ["Next.js", "Tailwind", "CMS"],
  },
  {
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    cat: "E-COMMERCE",
    title: "MAISON BLANC",
    desc: "Boutique en ligne pour une marque de luxe avec configurateur produit 3D et paiement multi-devises.",
    tags: ["React", "Stripe", "Three.js"],
  },
  {
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    cat: "APPLICATION",
    title: "FITPULSE",
    desc: "Application mobile de coaching sportif avec suivi en temps reel, plans personnalises et communaute integree.",
    tags: ["React Native", "Firebase", "IA"],
  },
  {
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    cat: "DESIGN",
    title: "ARTFLOW STUDIO",
    desc: "Plateforme creative pour artistes digitaux avec galerie interactive et systeme de commissions en ligne.",
    tags: ["Vue.js", "Supabase", "WebGL"],
  },
  {
    img: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    cat: "SAAS",
    title: "DATASTREAM",
    desc: "Dashboard analytics en temps reel pour startups avec visualisation de donnees avancee et alertes intelligentes.",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    cat: "E-COMMERCE",
    title: "URBAN ROOTS",
    desc: "Marketplace bio et local avec systeme de livraison par zone geographique et abonnements paniers.",
    tags: ["Next.js", "Stripe", "Maps API"],
  },
];

export function CybermonoPortfolio() {
  return (
    <main className={poppins.className} style={{ fontFamily: `${poppins.style.fontFamily}, sans-serif` }}>
      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden -mt-20 pt-20"
        style={{ background: "#000000" }}
      >
        <div className="absolute inset-0" style={circuitGridLight} />
        <div className="absolute inset-0" style={scanlineStyleLight} />
        <Image
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&q=80"
          alt="Portfolio"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:pl-[10%] py-14 md:py-24 lg:py-0">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-white" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60" style={{ fontFamily: "monospace" }}>ARCHIVE.WORK — PORTFOLIO</span>
              <div className="w-12 h-px bg-white/20" />
            </div>
            <h1
              className="text-white leading-[0.9] tracking-tight mb-6"
              style={{ fontFamily: poppins.style.fontFamily, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900 }}
            >
              <span className="block text-[0.5em] text-white/60 mb-2">DECOUVREZ</span>
              NOS REALISATIONS
            </h1>
            <p className="text-white/60 max-w-lg text-lg leading-relaxed" style={{ fontFamily: "system-ui, sans-serif" }}>
              Chaque projet est une histoire unique. Decouvrez comment nous avons aide nos clients a atteindre leurs objectifs digitaux.
            </p>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)" }} />
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className={`relative ${layout.sectionPy}`} style={{ backgroundColor: "#F7F7F7" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="absolute inset-0" style={scanlineStyle} />
        <div className={`${layout.container} relative z-10`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 150, suffix: "+", label: "PROJETS LIVRES" },
              { value: 98, suffix: "%", label: "SATISFACTION" },
              { value: 12, suffix: "", label: "SECTEURS" },
              { value: 8, suffix: "ANS", label: "EXPERIENCE" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-baseline justify-center gap-0">
                  <span className="text-3xl md:text-4xl" style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}>
                    <AnimatedCounter target={stat.value} duration={2000} />
                  </span>
                  <span className="text-xl" style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}>
                    {stat.suffix}
                  </span>
                </div>
                <span className="text-xs tracking-[0.2em] mt-1 block" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.4, fontWeight: 500 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROJECTS GRID ═══════════ */}
      <section className={`relative ${layout.sectionPyLg}`} style={{ backgroundColor: "white" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className={`${layout.container} relative z-10`}>
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <span className="text-[10px] uppercase tracking-[0.4em] block mb-4" style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}>GRID.VIEW — ALL_PROJECTS</span>
              <h2 className="text-4xl md:text-5xl tracking-tight mb-3" style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}>
                PROJETS SELECTIONNES
              </h2>
              <div className="w-12 h-1 mx-auto mb-4 bg-black" />
              <p className="text-xl" style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}>
                nos meilleurs travaux
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} direction="up" delay={i * 100}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[16/10] mb-6" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 transition-all duration-500"
                      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0" style={scanlineStyle} />
                    <HudBrackets color="#FFFFFF" />

                    <span
                      className="absolute top-4 right-4 px-3 py-1 text-xs tracking-[0.2em] text-white bg-black"
                      style={{ fontFamily: "monospace", fontWeight: 600 }}
                    >
                      {project.cat}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="w-14 h-14 flex items-center justify-center border border-white text-white transition-all duration-300 hover:bg-white hover:text-black">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl mb-2 tracking-normal transition-all duration-500 group-hover:tracking-[0.08em]"
                    style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.45 }}>
                    {project.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] uppercase tracking-[0.15em]"
                        style={{ fontFamily: "monospace", color: ACCENT, opacity: 0.5, border: "1px solid rgba(0,0,0,0.1)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative" style={{ backgroundColor: "white" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className={`${layout.container} pb-20 pt-8 relative z-10`}>
          <ScrollReveal direction="up">
            <Link href="/contact" className="relative block overflow-hidden group" style={{ minHeight: "280px" }}>
              <div className="absolute inset-0 transition-colors duration-500" style={{ backgroundColor: "#F7F7F7" }} />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0" style={circuitGrid} />
              <HudBrackets />
              <div className="relative z-10 p-10 flex flex-col justify-start pt-14 h-full transition-transform duration-500 group-hover:translate-x-3" style={{ minHeight: "280px" }}>
                <div className="w-10 h-1 mb-4 bg-black transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
                <h3
                  className="text-4xl md:text-5xl tracking-tight mb-2 transition-all duration-500 text-[#111111] group-hover:!text-white group-hover:tracking-wide"
                  style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
                >
                  VOTRE PROJET EST LE PROCHAIN
                </h3>
                <p className="text-lg mb-6 transition-colors duration-500 text-[#888888] group-hover:!text-white/60" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}>
                  discutons de vos ambitions
                </p>
                <div className="inline-flex items-center justify-center w-12 h-12 transition-all duration-300 border border-black text-black group-hover:border-white group-hover:text-white">
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
