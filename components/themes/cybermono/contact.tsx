"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { COMPANY_INFO } from "@/lib/constants";
import { poppins, ACCENT, GRAY, scanlineStyle, circuitGrid, circuitGridLight, scanlineStyleLight, HudBrackets } from "./shared";

const contactInfo = [
  { icon: MapPin, label: "ADRESSE", value: `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.postalCode} ${COMPANY_INFO.address.city}`, href: `https://maps.google.com/?q=${encodeURIComponent(`${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.postalCode} ${COMPANY_INFO.address.city}`)}` },
  { icon: Phone, label: "TELEPHONE", value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "EMAIL", value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
  { icon: Clock, label: "HORAIRES", value: "Lun - Ven : 9h00 - 18h00", href: undefined },
];

export function CybermonoContact() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/contact/merci");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    fontFamily: "system-ui, sans-serif",
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.1)",
    color: ACCENT,
    fontSize: "14px",
  };

  return (
    <main className={poppins.className} style={{ fontFamily: `${poppins.style.fontFamily}, sans-serif` }}>
      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden -mt-20 pt-20"
        style={{ background: "#000000" }}
      >
        <div className="absolute inset-0" style={circuitGridLight} />
        <div className="absolute inset-0" style={scanlineStyleLight} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:pl-[10%] py-24 lg:py-0">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-white" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60" style={{ fontFamily: "monospace" }}>COMM.SYS — CONTACT</span>
              <div className="w-12 h-px bg-white/20" />
            </div>
            <h1
              className="text-white leading-[0.9] tracking-tight mb-6"
              style={{ fontFamily: poppins.style.fontFamily, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900 }}
            >
              <span className="block text-[0.5em] text-white/60 mb-2">PARLONS DE</span>
              VOTRE PROJET
            </h1>
            <p className="text-white/60 max-w-lg text-lg leading-relaxed" style={{ fontFamily: "system-ui, sans-serif" }}>
              Une idee, un projet, une question ? Contactez-nous et recevez une reponse sous 24 heures.
            </p>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)" }} />
      </section>

      {/* ═══════════ FORM + INFO ═══════════ */}
      <section className="relative py-24 md:py-32" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="absolute inset-0" style={circuitGrid} />
        <div className="absolute inset-0" style={scanlineStyle} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <div className="relative p-8 md:p-12 bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <HudBrackets />
                  <div className="mb-8">
                    <span className="text-[10px] uppercase tracking-[0.4em] block mb-3" style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}>FORM.INPUT — MESSAGE</span>
                    <h2 className="text-3xl md:text-4xl tracking-tight mb-2" style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}>
                      ENVOYEZ-NOUS UN MESSAGE
                    </h2>
                    <div className="w-12 h-1 bg-black" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs uppercase tracking-[0.2em] block mb-2" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.5, fontWeight: 600 }}>
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 outline-none transition-all duration-300 focus:border-black"
                          style={inputStyle}
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-[0.2em] block mb-2" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.5, fontWeight: 600 }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 outline-none transition-all duration-300 focus:border-black"
                          style={inputStyle}
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] block mb-2" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.5, fontWeight: 600 }}>
                        Telephone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 outline-none transition-all duration-300 focus:border-black"
                        style={inputStyle}
                        placeholder="06 00 00 00 00"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] block mb-2" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, opacity: 0.5, fontWeight: 600 }}>
                        Votre message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 outline-none transition-all duration-300 focus:border-black resize-none"
                        style={inputStyle}
                        placeholder="Decrivez votre projet..."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm" style={{ color: "#DC2626", fontFamily: "system-ui, sans-serif" }}>
                        Une erreur est survenue. Veuillez reessayer.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-3 px-8 py-4 uppercase tracking-[0.2em] text-sm transition-all duration-300 group border border-black text-white bg-black hover:bg-white hover:text-black hover:tracking-[0.3em] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
                    >
                      {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const Wrapper = info.href ? "a" : "div";
                    return (
                      <Wrapper
                        key={info.label}
                        {...(info.href ? { href: info.href, target: info.href.startsWith("http") ? "_blank" : undefined, rel: info.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                        className="relative block p-6 bg-white group cursor-pointer no-underline"
                        style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                      >
                        <div className="flex gap-5 items-start">
                          <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-black/10 transition-all duration-300 group-hover:bg-black group-hover:border-black">
                            <info.icon className="w-5 h-5 transition-colors duration-300 text-[#111111] group-hover:!text-white" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-[0.3em] block mb-1" style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}>
                              {info.label}
                            </span>
                            <p className="text-sm" style={{ fontFamily: "system-ui, sans-serif", color: ACCENT, fontWeight: 500 }}>
                              {info.value}
                            </p>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
                      </Wrapper>
                    );
                  })}

                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
