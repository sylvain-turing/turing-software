"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Facebook, Linkedin, Youtube, ChevronRight, ChevronLeft, Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { poppins, ACCENT, GRAY, scanlineStyle, circuitGrid, circuitGridLight, scanlineStyleLight, HudBrackets, TeamSection } from "./shared";

const services = [
  {
    num: "01",
    title: "INGENIERIE PRODUIT",
    items: ["Developpement web", "Consultation technique", "Architecture logicielle"],
  },
  {
    num: "02",
    title: "DESIGN UI & UX",
    items: ["Design de sites web", "Applications mobiles", "Prototypage interactif"],
  },
  {
    num: "03",
    title: "STRATEGIE DIGITALE",
    items: ["Marketing digital", "Analyse de marque", "Growth hacking"],
  },
];

const reasons = [
  {
    num: "01",
    title: "EXPERTISE SECTORIELLE",
    desc: "Une connaissance approfondie de votre industrie pour des solutions sur-mesure qui repondent a vos defis specifiques.",
  },
  {
    num: "02",
    title: "MAITRISE TECHNIQUE",
    desc: "Les dernieres technologies au service de votre performance. React, Next.js, Flutter — nous maitrisons l'ecosysteme.",
  },
  {
    num: "03",
    title: "SOLUTIONS DEDIEES",
    desc: "Pas de templates, pas de copier-coller. Chaque projet est concu sur-mesure pour maximiser votre impact.",
  },
];

const testimonials = [
  { name: "SOPHIE MARTIN", role: "CEO, TechVision", text: "Une equipe brillante qui a transforme notre vision en realite. Le resultat depasse toutes nos attentes.", source: "Google" },
  { name: "THOMAS DUBOIS", role: "Directeur Marketing, NovaCorp", text: "Leur approche strategique et leur creativite ont propulse notre presence digitale a un autre niveau.", source: "Google" },
  { name: "MARIE LECLERC", role: "Fondatrice, DesignLab", text: "Professionnalisme, reactivite et un sens du detail incroyable. Je recommande sans hesitation.", source: "Trustpilot" },
  { name: "JULIEN PEREIRA", role: "CTO, FinStack", text: "Notre application a ete livree dans les delais avec une qualite de code irreprochable. Un vrai partenaire technique.", source: "Google" },
  { name: "CAMILLE RENARD", role: "Directrice Generale, Bloom Agency", text: "Ils ont su capter l'essence de notre marque et la traduire en une experience digitale unique. Un travail remarquable. Depuis le premier rendez-vous jusqu'a la livraison finale, chaque etape a ete menee avec un professionnalisme exemplaire. L'equipe a toujours ete a l'ecoute de nos besoins et a su proposer des solutions creatives auxquelles nous n'avions meme pas pense. Le site genere aujourd'hui trois fois plus de leads qu'avant.", source: "Trustpilot" },
  { name: "ANTOINE VASSEUR", role: "Fondateur, GreenLogic", text: "De la strategie au deploiement, tout a ete fluide. Notre taux de conversion a augmente de 40% en trois mois.", source: "Google" },
];


function TestimonialCard({ t, onClick }: { t: typeof testimonials[number]; onClick?: () => void }) {
  return (
    <div
      className="relative p-8 md:p-10 group bg-white h-[320px] flex flex-col justify-between overflow-hidden cursor-pointer"
      style={{ border: "1px solid rgba(0,0,0,0.08)" }}
      onClick={onClick}
    >
      <HudBrackets />
      <p
        className="text-base leading-relaxed overflow-hidden"
        style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.5, display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical" }}
      >
        {t.text}
      </p>
      <div className="mt-8">
        <div className="w-8 h-[2px] mb-4 bg-black" />
        <p
          className="text-sm tracking-[0.15em] mb-1"
          style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800, color: ACCENT }}
        >
          {t.name}
        </p>
        <p
          className="text-xs mb-3"
          style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}
        >
          {t.role}
        </p>
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-[#111111] fill-[#111111]" />
            ))}
          </div>
          <span
            className="text-[10px] uppercase tracking-[0.2em]"
            style={{ fontFamily: "monospace", color: ACCENT, opacity: 0.5 }}
          >
            {t.source}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

function TestimonialsSection() {
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<typeof testimonials[number] | null>(null);
  const [modalContent, setModalContent] = useState<typeof testimonials[number] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (t: typeof testimonials[number]) => {
    setModalContent(t);
    setSelected(t);
    requestAnimationFrame(() => setModalOpen(true));
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSelected(null);
      setModalContent(null);
    }, 300);
  };

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#F7F7F7" }}>
      <div className="absolute inset-0" style={circuitGrid} />
      <div className="absolute inset-0" style={scanlineStyle} />
      <div className="relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 px-6">
            <h2
              className="text-4xl md:text-5xl tracking-tight mb-3"
              style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800, color: ACCENT }}
            >
              TEMOIGNAGES CLIENTS
            </h2>
            <div className="w-12 h-1 mx-auto mb-4 bg-black" />
            <p
              className="text-xl"
              style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}
            >
              ce qu&apos;ils disent de nous
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide md:hidden" style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
          {testimonials.map((t) => (
            <div key={t.name} className="shrink-0 w-[85vw]" style={{ scrollSnapAlign: "start" }}>
              <TestimonialCard t={t} onClick={() => openModal(t)} />
            </div>
          ))}
        </div>

        {/* Desktop: paginated with arrows on sides */}
        <div className="hidden md:flex items-center max-w-[1400px] mx-auto px-6">
          <button
            onClick={prev}
            disabled={page === 0}
            className={`shrink-0 inline-flex items-center justify-center w-12 h-12 border transition-all duration-300 mr-6 ${page === 0 ? "invisible" : "border-black text-black hover:bg-black hover:text-white cursor-pointer"}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-3 gap-8 flex-1" style={{ height: "320px" }}>
            {visible.map((t) => (
              <TestimonialCard key={t.name} t={t} onClick={() => openModal(t)} />
            ))}
          </div>

          <button
            onClick={next}
            disabled={page === totalPages - 1}
            className={`shrink-0 inline-flex items-center justify-center w-12 h-12 border transition-all duration-300 ml-6 ${page === totalPages - 1 ? "invisible" : "border-black text-black hover:bg-black hover:text-white cursor-pointer"}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-[200] flex items-center justify-center px-6 transition-all duration-300 ${modalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} ${!selected && !modalContent ? "hidden" : ""}`}
        style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        onClick={closeModal}
      >
        <div
          className={`relative bg-white max-w-lg w-full p-10 md:p-12 transition-all duration-300 ${modalOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}
          style={{ border: "1px solid rgba(0,0,0,0.08)" }}
          onClick={(e) => e.stopPropagation()}
        >
            <HudBrackets />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-black/40 hover:text-black transition-colors"
              style={{ fontFamily: "system-ui, sans-serif", fontSize: "20px" }}
            >
              &times;
            </button>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.6 }}
            >
              {modalContent?.text}
            </p>
            <div className="w-8 h-[2px] mb-4 bg-black" />
            <p
              className="text-sm tracking-[0.15em] mb-1"
              style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800, color: ACCENT }}
            >
              {modalContent?.name}
            </p>
            <p
              className="text-xs mb-3"
              style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}
            >
              {modalContent?.role}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#111111] fill-[#111111]" />
                ))}
              </div>
              <span
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ fontFamily: "monospace", color: ACCENT, opacity: 0.5 }}
              >
                {modalContent?.source}
              </span>
            </div>
          </div>
        </div>
    </section>
  );
}

export function CybermonoHome() {
  return (
    <main className={poppins.className} style={{ fontFamily: `${poppins.style.fontFamily}, sans-serif` }}>
      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden -mt-20 pt-20"
        style={{
          background: `#000000`,
        }}
      >
        {/* Circuit grid overlay */}
        <div className="absolute inset-0" style={circuitGridLight} />
        {/* Scanlines */}
        <div className="absolute inset-0" style={scanlineStyleLight} />
        {/* Hero image — full background */}
        <Image
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80"
          alt="Digital creative"
          fill
          className="object-cover opacity-25"
          priority
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:pl-[10%] py-32 lg:py-0">
          <ScrollReveal direction="up">
            {/* HUD data annotation */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-white" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60" style={{ fontFamily: "monospace" }}>SYS.ONLINE — PARIS.FR — 2026</span>
              <div className="w-12 h-px bg-white/20" />
            </div>
            <h1
              className="text-white leading-[0.9] tracking-tight mb-6"
              style={{ fontFamily: poppins.style.fontFamily, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 900 }}
            >
              <span className="block text-[0.6em] text-white/70">NOUS SOMMES</span>
              AGENCE TURING
            </h1>
            <p className="text-white/70 max-w-lg text-lg leading-relaxed mb-10" style={{ fontFamily: "system-ui, sans-serif" }}>
              Nous concevons des experiences numeriques exceptionnelles qui propulsent votre marque vers de nouveaux horizons.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-white uppercase tracking-[0.2em] text-sm transition-all duration-300 group border border-white hover:bg-white hover:text-black hover:tracking-[0.3em]"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 600,
              }}
            >
              <span className="transition-colors">Nous contacter</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

          {/* Social icons */}
          <div className="flex items-center gap-5 mt-20 lg:mt-32">
            <div className="w-8 h-px mr-2 bg-white/40" />
            {[Facebook, Linkedin, Youtube].map((Icon, i) => (
              <button key={i} className="text-white/50 hover:text-white transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)" }} />
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section
        className="relative py-28 md:py-36"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="absolute inset-0" style={scanlineStyle} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {services.map((s) => (
                <div key={s.num} className="relative group p-6 bg-white cursor-pointer" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <HudBrackets />
                  <div className="flex gap-4">
                    <div className="flex items-start gap-3 shrink-0">
                      <span
                        className="text-3xl font-bold"
                        style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                      >
                        {s.num}
                      </span>
                      <div className="w-[3px] h-14 mt-1 bg-black" />
                    </div>
                    <div>
                      <h3
                        className="text-2xl md:text-3xl mb-5 tracking-normal transition-all duration-500 group-hover:tracking-[0.08em]"
                        style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                      >
                        {s.title}
                      </h3>
                      <ul className="space-y-3">
                        {s.items.map((item) => (
                          <li key={item}>
                            <Link
                              href="/creation-site-web"
                              className="text-sm uppercase tracking-[0.15em] transition-all duration-300"
                              style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.45, fontWeight: 500 }}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ ABOUT / WE BRING IDEAS TO LIFE — 20 variants ═══════════ */}
      {[
        "photo-1522071820081-009f0129c71c", // 1 — team collaboration
        "photo-1553877522-43269d4ea984", // 4 — team meeting
        "photo-1542744173-8e7e53415bb0", // 8 — business meeting
        "photo-1551434678-e076c223a692", // 9 — dev working
        "photo-1559136555-9303baea8ebd", // 16 — abstract tech
      ].map((photoId, idx) => (
      <section key={idx} className="relative py-24 md:py-32" style={{ backgroundColor: "white" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-4">
            <span className="text-2xl font-bold px-4 py-2 bg-black text-white inline-block" style={{ fontFamily: "monospace" }}>IMAGE {idx + 1}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                  <Image
                    src={`https://images.unsplash.com/${photoId}?w=800&q=80`}
                    alt={`Option ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 100%)" }}
                  />
                  <div className="absolute inset-0" style={{ ...scanlineStyle, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)" }} />
                  <HudBrackets color="#FFFFFF" />
                  <div className="absolute inset-0 flex items-center justify-center select-none">
                    <span
                      className="text-[10rem] md:text-[14rem] leading-none font-bold text-white/10"
                      style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
                    >
                      TRG
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/60" style={{ fontFamily: "monospace" }}>IMG.REF_{String(idx + 1).padStart(3, "0")} — RENDER</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="w-12 h-1 mb-6 bg-black" />
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-4"
                  style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                >
                  NOUS DONNONS VIE
                  <br />
                  A VOS IDEES
                </h2>
                <p
                  className="text-xl md:text-2xl mb-6 italic"
                  style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}
                >
                  nous aimons creer
                </p>
                <p
                  className="text-base leading-relaxed mb-8 max-w-lg"
                  style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.5 }}
                >
                  Notre passion pour l&apos;innovation et le design nous pousse a repousser les limites du possible.
                  Chaque projet est une nouvelle opportunite de creer quelque chose d&apos;extraordinaire, en combinant
                  strategie, creativite et technologie de pointe.
                </p>
                <Link
                  href="/a-propos"
                  className="relative inline-flex items-center gap-3 px-8 py-4 uppercase tracking-[0.2em] text-sm transition-all duration-300 group overflow-hidden border border-black text-[#111111] hover:bg-black hover:!text-white hover:tracking-[0.3em]"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      ))}

      {/* ═══════════ STATS ═══════════ */}
      <section
        className="relative py-24 md:py-32"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="absolute inset-0" style={scanlineStyle} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-[0.4em] block mb-4" style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}>ANALYTICS.MODULE — LIVE_DATA</span>
              <h2
                className="text-4xl md:text-5xl tracking-tight mb-3"
                style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
              >
                NOS RESULTATS EN CHIFFRES
              </h2>
              <div className="w-12 h-1 mx-auto mb-4 bg-black" />
              <p
                className="text-xl"
                style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}
              >
                nos realisations
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { value: 375, label: "CLIENTS SATISFAITS" },
                { value: 150, label: "PROJETS LIVRES" },
                { value: 155, label: "PARTENAIRES DANS LE MONDE" },
              ].map((stat) => (
                <div key={stat.label} className="relative flex flex-col items-center p-8 bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <HudBrackets />
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-5xl md:text-6xl"
                      style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                    >
                      <AnimatedCounter target={stat.value} duration={2500} />
                    </span>
                    <span
                      className="text-3xl"
                      style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                    >
                      +
                    </span>
                  </div>
                  <span
                    className="text-sm tracking-[0.2em] mt-3"
                    style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.4, fontWeight: 500 }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
      </section>

      {/* ═══════════ WHY US ═══════════ */}
      <section className="relative py-28 md:py-36" style={{ backgroundColor: "white" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2
                className="text-4xl md:text-6xl tracking-tight mb-3"
                style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
              >
                POURQUOI NOUS CHOISIR
              </h2>
              <div className="w-12 h-1 mx-auto mb-4 bg-black" />
              <p
                className="text-xl"
                style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}
              >
                la difference
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.num} direction="up" delay={i * 150}>
                <div
                  className="relative p-8 md:p-10 h-full transition-all duration-500 group bg-white cursor-pointer"
                  style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderTopWidth: "2px",
                    borderTopColor: ACCENT,
                  }}
                >
                  <HudBrackets />
                  <span
                    className="text-5xl block mb-4"
                    style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                  >
                    {r.num}
                  </span>
                  <h3
                    className="text-2xl mb-4 tracking-normal transition-all duration-500 group-hover:tracking-[0.08em]"
                    style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.45 }}
                  >
                    {r.desc}
                  </p>
                  <Link
                    href="/a-propos"
                    className="inline-flex items-center justify-center w-12 h-12 transition-all duration-300 border border-black text-black group-hover:bg-black group-hover:text-white"
                  >
                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CLIENTS LOGOS ═══════════ */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ backgroundColor: "#F7F7F7", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex shrink-0">
              {["TechFlow", "NovaSys", "DigitalPulse", "CloudArk", "DataVibe", "PixelForge", "SynthWave", "Nexora", "VoltStack", "Kaleido"].map((name) => (
                <span
                  key={`${loop}-${name}`}
                  className="mx-10 md:mx-16 text-xl md:text-2xl tracking-[0.1em] uppercase select-none cursor-default transition-all duration-300 hover:scale-110"
                  style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800, color: "rgba(0,0,0,0.1)" }}
                >
                  <span className="hover:text-black transition-colors duration-300">
                    {name}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ PHILOSOPHY / VISION ═══════════ */}
      <section>
        <div className="relative overflow-hidden" style={{ minHeight: "600px" }}>
          <Image src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1600&q=80" alt="" fill className="object-cover " />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.94) 0%, rgba(20,20,20,0.88) 50%, rgba(0,0,0,0.94) 100%)" }} />
          <div className="absolute inset-0" style={circuitGridLight} />
          <div className="absolute inset-0" style={scanlineStyleLight} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center h-full py-20" style={{ minHeight: "600px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-2 bg-white" />
                  <div className="w-16 h-px bg-white/30" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/40" style={{ fontFamily: "monospace" }}>CORE.BELIEFS — MANIFEST</span>
                </div>
                <h2 className="text-5xl md:text-7xl text-white tracking-tight mb-6 leading-[0.9]" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 900 }}>
                  TECHNO
                  <span className="block" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)", WebkitTextFillColor: "transparent" }}>LOGIE.</span>
                  CREA
                  <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)", WebkitTextFillColor: "transparent" }}>TIVITE.</span>
                </h2>
              </div>
              <div>
                <div className="space-y-8">
                  {[
                    { label: "Innovation", value: "Repousser les frontieres du possible" },
                    { label: "Precision", value: "Chaque pixel, chaque milliseconde compte" },
                    { label: "Impact", value: "Des resultats mesurables et durables" },
                  ].map((item, i) => (
                    <div key={item.label} className="flex gap-6 items-start group cursor-pointer">
                      <span className="text-3xl shrink-0 transition-colors duration-300 text-white/10" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 900 }}>0{i + 1}</span>
                      <div className="pt-4 flex-1 transition-all duration-300" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                        <h4 className="text-sm uppercase tracking-[0.2em] text-white mb-1 group-hover:text-white transition-colors" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}>{item.label}</h4>
                        <p className="text-white/60 text-sm" style={{ fontFamily: "system-ui, sans-serif" }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Top & bottom lines */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)" }} />
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <TestimonialsSection />

      {/* ═══════════ TEAM ═══════════ */}
      <TeamSection />

      {/* ═══════════ BLOG / ARTICLES ═══════════ */}
      <section className="relative py-14 md:py-18" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="absolute inset-0" style={scanlineStyle} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl tracking-tight mb-3"
                style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800, color: ACCENT }}
              >
                NOTRE BLOG
              </h2>
              <div className="w-12 h-1 mx-auto mb-4 bg-black" />
              <p
                className="text-xl"
                style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}
              >
                nous ecrivons aussi
              </p>
            </div>
          </ScrollReveal>

          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory flex-nowrap">
            {[
              {
                img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
                cat: "DESIGN",
                title: "Les tendances UI/UX qui domineront 2026",
                excerpt: "Decouvrez les directions creatives qui redefinissent l'experience utilisateur cette annee.",
              },
              {
                img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
                cat: "MOBILE",
                title: "Flutter vs React Native : le guide definitif",
                excerpt: "Analyse comparative pour choisir le meilleur framework mobile pour votre projet.",
              },
              {
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
                cat: "STRATEGIE",
                title: "Multiplier son ROI grace au design systeme",
                excerpt: "Comment un design system bien structure peut reduire vos couts et accelerer vos livraisons.",
              },
            ].map((post, i) => (
              <ScrollReveal key={post.title} direction="up" delay={i * 150} className="shrink-0 md:shrink snap-start">
                <article className="group cursor-pointer w-[280px] md:w-auto">
                  <div className="relative overflow-hidden mb-5 aspect-[4/3]" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={scanlineStyle} />
                    <HudBrackets />
                    <span
                      className="absolute top-4 right-4 px-3 py-1 text-xs tracking-[0.2em] text-white bg-black"
                      style={{ fontFamily: "monospace", fontWeight: 600 }}
                    >
                      {post.cat}
                    </span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl mb-3 tracking-wide transition-colors"
                    style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800, color: ACCENT }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.45 }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center justify-center w-10 h-10 transition-all duration-300 border border-black text-black hover:bg-black hover:text-white">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ DUAL CTA ═══════════ */}
      <section className="relative" style={{ backgroundColor: "white" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="max-w-none md:max-w-[1800px] mx-auto px-0 md:px-12 pb-8 md:pb-28 pt-14 md:pt-18 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[2px]">
          <ScrollReveal direction="left">
            <Link href="/portfolio" className="relative block overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80"
                alt="Nos realisations"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 transition-all duration-500 group-hover:bg-black/80" style={{ backgroundColor: "rgba(0,0,0,0.65)" }} />
              <div className="absolute inset-0" style={scanlineStyleLight} />
              <HudBrackets color="#FFFFFF" />
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-start pt-10 md:pt-20 pb-10 md:pb-24 h-full transition-transform duration-500 group-hover:translate-x-3">
                <div className="w-10 h-1 mb-4 bg-white transition-all duration-500 group-hover:w-16" />
                <h3
                  className="text-3xl md:text-5xl text-white tracking-tight mb-2 transition-all duration-500 group-hover:tracking-wide"
                  style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
                >
                  NOS REALISATIONS
                </h3>
                <p className="text-base md:text-lg text-white/40 mb-4 md:mb-6 transition-colors duration-500 group-hover:text-white/70" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 600 }}>
                  design & qualite
                </p>
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-white transition-all duration-300 border border-white/40 group-hover:bg-white group-hover:text-black group-hover:border-white">
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Link href="/contact" className="relative block overflow-hidden group">
              <div className="absolute inset-0 transition-colors duration-500 bg-black md:bg-[#F7F7F7]" />
              <div className="absolute inset-0 bg-black opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
              <div className="absolute inset-0 hidden md:block" style={circuitGrid} />
              <div className="absolute inset-0 md:hidden" style={circuitGridLight} />
              <HudBrackets color="md:hidden ? #FFFFFF : undefined" />
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-start pt-10 md:pt-20 pb-10 md:pb-24 h-full transition-transform duration-500 group-hover:translate-x-3">
                <div className="w-10 h-1 mb-4 bg-white md:bg-black transition-all duration-500 group-hover:w-16 md:group-hover:bg-white" />
                <h3
                  className="text-3xl md:text-5xl tracking-tight mb-2 transition-all duration-500 text-white md:text-[#111111] md:group-hover:!text-white group-hover:tracking-wide"
                  style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
                >
                  NOUS CONTACTER
                </h3>
                <p className="text-base md:text-lg mb-4 md:mb-6 transition-colors duration-500 text-white/60 md:text-[#888888] md:group-hover:!text-white/60" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}>
                  travaillons ensemble
                </p>
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition-all duration-300 border border-white/40 text-white md:border-black md:text-black md:group-hover:border-white md:group-hover:text-white">
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
        </div>
      </section>
    </main>
  );
}
