"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { poppins, ACCENT, GRAY, scanlineStyle, circuitGrid, circuitGridLight, scanlineStyleLight, HudBrackets, TeamSection } from "./shared";

const values = [
  { num: "01", title: "EXCELLENCE", desc: "Chaque ligne de code, chaque pixel est pense pour atteindre la perfection. Nous ne faisons pas de compromis sur la qualite." },
  { num: "02", title: "TRANSPARENCE", desc: "Communication ouverte, reporting regulier et acces complet a l'avancement de votre projet en temps reel." },
  { num: "03", title: "INNOVATION", desc: "Nous explorons constamment les nouvelles technologies pour offrir a nos clients un avantage competitif durable." },
];

const milestones = [
  { year: "2018", event: "Creation de l'agence a Paris" },
  { year: "2019", event: "Premier client international" },
  { year: "2020", event: "Equipe de 10 collaborateurs" },
  { year: "2022", event: "100e projet livre" },
  { year: "2024", event: "Expansion europeenne" },
  { year: "2026", event: "150+ projets, 375+ clients" },
];

export function CybermonoAPropos() {
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
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
          alt="Notre equipe"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:pl-[10%] py-14 md:py-24 lg:py-0">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-white" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60" style={{ fontFamily: "monospace" }}>ABOUT.SYS — IDENTITY</span>
              <div className="w-12 h-px bg-white/20" />
            </div>
            <h1
              className="text-white leading-[0.9] tracking-tight mb-6"
              style={{ fontFamily: poppins.style.fontFamily, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900 }}
            >
              <span className="block text-[0.5em] text-white/60 mb-2">QUI SOMMES</span>
              NOUS
            </h1>
            <p className="text-white/60 max-w-lg text-lg leading-relaxed" style={{ fontFamily: "system-ui, sans-serif" }}>
              Une equipe de passionnes qui transforme vos ambitions digitales en experiences memorables. Depuis 2018, nous repoussons les limites du web et du mobile.
            </p>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)" }} />
      </section>

      {/* ═══════════ MISSION ═══════════ */}
      <section className="relative py-24 md:py-32" style={{ backgroundColor: "white" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                    alt="Notre vision"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 100%)" }} />
                  <div className="absolute inset-0" style={{ ...scanlineStyle, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)" }} />
                  <HudBrackets color="#FFFFFF" />
                  <div className="absolute inset-0 flex items-center justify-center select-none">
                    <span className="text-[8rem] md:text-[12rem] leading-none font-bold text-white/10" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}>
                      TRG
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="w-12 h-1 mb-6 bg-black" />
                <h2
                  className="text-4xl md:text-5xl leading-[0.95] tracking-tight mb-4"
                  style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                >
                  NOTRE MISSION
                </h2>
                <p className="text-xl md:text-2xl mb-6 italic" style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}>
                  creer l&apos;exceptionnel
                </p>
                <p className="text-base leading-relaxed mb-6 max-w-lg" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.5 }}>
                  Chez Turing Software, nous croyons que la technologie doit servir l&apos;humain. Notre mission est de concevoir des solutions digitales qui combinent performance technique et experience utilisateur exceptionnelle.
                </p>
                <p className="text-base leading-relaxed max-w-lg" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.5 }}>
                  Chaque projet est une nouvelle aventure. Nous nous investissons pleinement dans la reussite de nos clients, en apportant expertise, creativite et rigueur a chaque etape du processus.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ VALUES ═══════════ */}
      <section className="relative py-28 md:py-36" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="absolute inset-0" style={scanlineStyle} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <span className="text-[10px] uppercase tracking-[0.4em] block mb-4" style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}>CORE.VALUES — MANIFEST</span>
              <h2 className="text-4xl md:text-5xl tracking-tight mb-3" style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}>
                NOS VALEURS
              </h2>
              <div className="w-12 h-1 mx-auto mb-4 bg-black" />
              <p className="text-xl" style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}>
                ce qui nous guide
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.num} direction="up" delay={i * 150}>
                <div
                  className="relative p-8 md:p-10 h-full transition-all duration-500 group bg-white cursor-pointer"
                  style={{ border: "1px solid rgba(0,0,0,0.08)", borderTopWidth: "2px", borderTopColor: ACCENT }}
                >
                  <HudBrackets />
                  <span className="text-5xl block mb-4" style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}>
                    {v.num}
                  </span>
                  <h3
                    className="text-2xl mb-4 tracking-normal transition-all duration-500 group-hover:tracking-[0.08em]"
                    style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.45 }}>
                    {v.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TEAM ═══════════ */}
      <TeamSection label="TEAM.SYS — MEMBERS" />

      {/* ═══════════ TIMELINE — DARK ═══════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "500px" }}>
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0" style={circuitGridLight} />
        <div className="absolute inset-0" style={scanlineStyleLight} />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-2 h-2 bg-white" />
                <div className="w-16 h-px bg-white/30" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40" style={{ fontFamily: "monospace" }}>TIMELINE.LOG — HISTORY</span>
                <div className="w-16 h-px bg-white/30" />
                <div className="w-2 h-2 bg-white" />
              </div>
              <h2 className="text-4xl md:text-5xl text-white tracking-tight mb-3" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 900 }}>
                NOTRE PARCOURS
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} direction="up" delay={i * 100}>
                <div className="group p-6 cursor-pointer" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="text-3xl block mb-2 text-white/20 transition-colors duration-300 group-hover:text-white/60" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 900 }}>
                    {m.year}
                  </span>
                  <div className="w-6 h-px bg-white/20 mb-3" />
                  <p className="text-sm text-white/50" style={{ fontFamily: "system-ui, sans-serif" }}>
                    {m.event}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)" }} />
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="relative py-24 md:py-28" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="absolute inset-0" style={scanlineStyle} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 375, suffix: "+", label: "CLIENTS" },
                { value: 150, suffix: "+", label: "PROJETS" },
                { value: 15, suffix: "", label: "EXPERTS" },
                { value: 8, suffix: "ANS", label: "EXPERIENCE" },
              ].map((stat) => (
                <div key={stat.label} className="relative p-6 bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <HudBrackets />
                  <div className="flex items-baseline justify-center gap-0">
                    <span className="text-4xl md:text-5xl" style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}>
                      <AnimatedCounter target={stat.value} duration={2000} />
                    </span>
                    <span className="text-2xl" style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}>
                      {stat.suffix}
                    </span>
                  </div>
                  <span className="text-xs tracking-[0.2em] mt-2 block" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.4, fontWeight: 500 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative" style={{ backgroundColor: "white" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20 pt-8 relative z-10">
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
                  REJOIGNEZ L&apos;AVENTURE
                </h3>
                <p className="text-lg mb-6 transition-colors duration-500 text-[#888888] group-hover:!text-white/60" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}>
                  travaillons ensemble
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
