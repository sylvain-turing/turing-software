"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Layers, Server, Shield, GitBranch, Cpu, Database, Cloud, Settings, BarChart3, Lock, Workflow, Users } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { poppins, ACCENT, GRAY, layout, scanlineStyle, circuitGrid, circuitGridLight, scanlineStyleLight, HudBrackets, TechStack } from "./shared";

const solutions = [
  {
    icon: Layers,
    title: "APPLICATION METIER",
    desc: "Des outils internes sur-mesure qui automatisent vos processus, centralisent vos donnees et boostent la productivite de vos equipes.",
  },
  {
    icon: Server,
    title: "PLATEFORME SaaS",
    desc: "Architecture multi-tenant scalable, gestion des abonnements, tableaux de bord et APIs robustes pour votre produit digital.",
  },
  {
    icon: Shield,
    title: "PORTAIL CLIENT",
    desc: "Espaces securises avec authentification, gestion de roles et workflows personnalises pour vos clients et partenaires.",
  },
  {
    icon: GitBranch,
    title: "INTEGRATION & API",
    desc: "Connexion de vos outils existants : ERP, CRM, comptabilite, logistique. Des APIs performantes et documentees.",
  },
];

const process = [
  {
    num: "01",
    title: "AUDIT & CADRAGE",
    desc: "Analyse approfondie de votre ecosysteme, vos contraintes techniques et vos objectifs business. Cahier des charges detaille.",
  },
  {
    num: "02",
    title: "ARCHITECTURE",
    desc: "Conception technique, choix technologiques, modelisation des donnees et prototypage des interfaces critiques.",
  },
  {
    num: "03",
    title: "DEVELOPPEMENT AGILE",
    desc: "Sprints iteratifs avec demos regulieres. Vous validez chaque fonctionnalite avant de passer a la suivante.",
  },
  {
    num: "04",
    title: "DEPLOIEMENT & SUIVI",
    desc: "Mise en production progressive, migration des donnees, formation des equipes et maintenance evolutive.",
  },
];

const advantages = [
  { icon: Cpu, label: "Performance", value: "Applications optimisees pour gerer des milliers d'utilisateurs simultanement" },
  { icon: Database, label: "Donnees Securisees", value: "Chiffrement, sauvegardes automatiques et conformite RGPD garantie" },
  { icon: Cloud, label: "Cloud Native", value: "Infrastructure scalable qui s'adapte a votre croissance sans interruption" },
  { icon: Settings, label: "Evolutivite", value: "Architecture modulaire pensee pour integrer de nouvelles fonctionnalites" },
];

const useCases = [
  { icon: BarChart3, title: "TABLEAU DE BORD", desc: "Visualisation en temps reel de vos KPIs, rapports automatises et alertes intelligentes." },
  { icon: Lock, title: "EXTRANET SECURISE", desc: "Espace prive pour vos collaborateurs, clients ou fournisseurs avec gestion fine des acces." },
  { icon: Workflow, title: "AUTOMATISATION", desc: "Workflows automatises pour eliminer les taches repetitives et reduire les erreurs humaines." },
  { icon: Users, title: "CRM SUR-MESURE", desc: "Gestion de la relation client adaptee a votre metier, pas un outil generique de plus." },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS",
];

export function CybermonoSurMesure() {
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
          src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80"
          alt="Custom development"
          fill
          className="object-cover opacity-15"
          priority
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:pl-[10%] py-14 md:py-24 lg:py-0">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-white" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60" style={{ fontFamily: "monospace" }}>CUSTOM.DEV — SUR-MESURE</span>
              <div className="w-12 h-px bg-white/20" />
            </div>
            <h1
              className="text-white leading-[0.9] tracking-tight mb-6"
              style={{ fontFamily: poppins.style.fontFamily, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900 }}
            >
              <span className="block text-[0.5em] text-white/60 mb-2">DEVELOPPEMENT</span>
              SUR-MESURE
            </h1>
            <p className="text-white/60 max-w-lg text-lg leading-relaxed mb-10" style={{ fontFamily: "system-ui, sans-serif" }}>
              Applications d&apos;entreprise, plateformes complexes, outils metier. Nous concevons des solutions logicielles taillees pour vos besoins specifiques.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-white uppercase tracking-[0.2em] text-sm transition-all duration-300 group border border-white hover:bg-white hover:text-black hover:tracking-[0.3em]"
                style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
              >
                Discuter de votre projet
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)" }} />
      </section>

      {/* ═══════════ SOLUTIONS ═══════════ */}
      <section className={`relative ${layout.sectionPyLg}`} style={{ backgroundColor: "#F7F7F7" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="absolute inset-0" style={scanlineStyle} />
        <div className={`${layout.container} relative z-10`}>
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <span className="text-[10px] uppercase tracking-[0.4em] block mb-4" style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}>CATALOG.CUSTOM — SOLUTIONS</span>
              <h2
                className="text-4xl md:text-5xl tracking-tight mb-3"
                style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
              >
                NOS EXPERTISES
              </h2>
              <div className="w-12 h-1 mx-auto mb-4 bg-black" />
              <p className="text-xl" style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}>
                des solutions qui vous ressemblent
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <ScrollReveal key={s.title} direction="up" delay={i * 100}>
                <div
                  className="relative p-8 md:p-10 h-full transition-all duration-500 group bg-white cursor-pointer"
                  style={{ border: "1px solid rgba(0,0,0,0.08)", borderTopWidth: "2px", borderTopColor: ACCENT }}
                >
                  <HudBrackets />
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-14 h-14 flex items-center justify-center border border-black/10 transition-all duration-300 group-hover:bg-black group-hover:border-black">
                        <s.icon className="w-6 h-6 transition-colors duration-300 text-[#111111] group-hover:!text-white" />
                      </div>
                    </div>
                    <div>
                      <h3
                        className="text-xl md:text-2xl mb-3 tracking-normal transition-all duration-500 group-hover:tracking-[0.08em]"
                        style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.45 }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ USE CASES ═══════════ */}
      <section className={`relative ${layout.sectionPyLg}`} style={{ backgroundColor: "white" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className={`${layout.container} relative z-10`}>
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <span className="text-[10px] uppercase tracking-[0.4em] block mb-4" style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}>USE.CASES — EXEMPLES</span>
              <h2
                className="text-4xl md:text-5xl tracking-tight mb-3"
                style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
              >
                CAS D&apos;USAGE
              </h2>
              <div className="w-12 h-1 mx-auto mb-4 bg-black" />
              <p className="text-xl" style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}>
                ce que nous pouvons construire pour vous
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.title} direction="up" delay={i * 100}>
                <div className="relative p-8 h-full group bg-white cursor-pointer" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <HudBrackets />
                  <div className="w-12 h-12 flex items-center justify-center border border-black/10 transition-all duration-300 group-hover:bg-black group-hover:border-black mb-5">
                    <uc.icon className="w-5 h-5 transition-colors duration-300 text-[#111111] group-hover:!text-white" />
                  </div>
                  <h3
                    className="text-lg mb-3 tracking-normal transition-all duration-500 group-hover:tracking-[0.08em]"
                    style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                  >
                    {uc.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.45 }}>
                    {uc.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section className={`relative ${layout.sectionPyLg}`} style={{ backgroundColor: "#F7F7F7" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="absolute inset-0" style={scanlineStyle} />
        <div className={`${layout.container} relative z-10`}>
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <span className="text-[10px] uppercase tracking-[0.4em] block mb-4" style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}>WORKFLOW.SYS — PROCESS</span>
              <h2
                className="text-4xl md:text-5xl tracking-tight mb-3"
                style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
              >
                NOTRE APPROCHE
              </h2>
              <div className="w-12 h-1 mx-auto mb-4 bg-black" />
              <p className="text-xl" style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}>
                methodologie eprouvee
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <ScrollReveal key={step.num} direction="up" delay={i * 100}>
                <div className="relative p-8 h-full group bg-white cursor-pointer" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <HudBrackets />
                  <span
                    className="text-5xl block mb-4"
                    style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                  >
                    {step.num}
                  </span>
                  <div className="w-8 h-[2px] mb-4 bg-black" />
                  <h3
                    className="text-lg mb-3 tracking-normal transition-all duration-500 group-hover:tracking-[0.08em]"
                    style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.45 }}>
                    {step.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ADVANTAGES — DARK BAND ═══════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "500px" }}>
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0" style={circuitGridLight} />
        <div className="absolute inset-0" style={scanlineStyleLight} />
        <div className={`relative z-10 ${layout.container} ${layout.sectionPyLg}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-2 bg-white" />
                  <div className="w-16 h-px bg-white/30" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/40" style={{ fontFamily: "monospace" }}>ADV.MODULE — GARANTIES</span>
                </div>
                <h2 className="text-4xl md:text-6xl text-white tracking-tight mb-6 leading-[0.9]" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 900 }}>
                  POURQUOI
                  <br />
                  <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)", WebkitTextFillColor: "transparent" }}>LE SUR-MESURE ?</span>
                </h2>
                <p className="text-white/50 text-base leading-relaxed max-w-md" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Les solutions generiques vous limitent. Le developpement sur-mesure vous donne exactement ce dont vous avez besoin, sans compromis ni fonctionnalites superflues.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                {advantages.map((item) => (
                  <div key={item.label} className="flex gap-5 items-start group cursor-pointer">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:border-white">
                      <item.icon className="w-4 h-4 text-white/60 transition-colors duration-300 group-hover:text-black" />
                    </div>
                    <div className="pt-1 flex-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-white mb-1" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}>{item.label}</h4>
                      <p className="text-white/40 text-sm pb-5" style={{ fontFamily: "system-ui, sans-serif" }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)" }} />
      </section>

      {/* ═══════════ TECHNOLOGIES ═══════════ */}
      <TechStack technologies={technologies} label="STACK.TECH — BACKEND & INFRA" subtitle="des technologies robustes" />

      {/* ═══════════ STATS ═══════════ */}
      <section className={`relative ${layout.sectionPyLg}`} style={{ backgroundColor: "white" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className={`${layout.container} relative z-10`}>
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 40, suffix: "+", label: "PROJETS SUR-MESURE" },
                { value: 99, suffix: "%", label: "UPTIME GARANTI" },
                { value: 12, suffix: "K", label: "UTILISATEURS ACTIFS" },
                { value: 24, suffix: "/7", label: "SUPPORT TECHNIQUE" },
              ].map((stat) => (
                <div key={stat.label} className="relative p-6 bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <HudBrackets />
                  <div className="flex items-baseline justify-center gap-0">
                    <span
                      className="text-4xl md:text-5xl"
                      style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                    >
                      <AnimatedCounter target={stat.value} duration={2000} />
                    </span>
                    <span
                      className="text-2xl"
                      style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                    >
                      {stat.suffix}
                    </span>
                  </div>
                  <span
                    className="text-xs tracking-[0.2em] mt-2 block"
                    style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.4, fontWeight: 500 }}
                  >
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
        <div className={`${layout.container} pb-20 pt-8 relative z-10`}>
          <ScrollReveal direction="up">
            <Link
              href="/contact"
              className="relative block overflow-hidden group"
              style={{ minHeight: "280px" }}
            >
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
                  LANCER VOTRE PROJET
                </h3>
                <p className="text-lg mb-6 transition-colors duration-500 text-[#888888] group-hover:!text-white/60" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}>
                  parlons de votre application sur-mesure
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
