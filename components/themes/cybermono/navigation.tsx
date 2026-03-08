"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { Menu, X } from "lucide-react";
import { layout } from "./shared";

const poppins = Poppins({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const navLinks = [
  { href: "/creation-site-web", label: "Création site web", gap: false },
  { href: "/sur-mesure", label: "Sur-mesure", gap: false },
  { href: "/application-mobile", label: "Application mobile", gap: false },
  { href: "/site-e-commerce", label: "E-commerce", gap: true },
  { href: "/portfolio", label: "Portfolio", gap: false },
  { href: "/a-propos", label: "L'agence", gap: false },
];

export function CybermonoNavigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop / tablet bar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
        }}
      >
        <nav className={`${layout.container} flex items-center justify-between h-20`}>
          {/* Logo */}
          <Link
            href="/"
            className={`relative z-10 tracking-normal text-3xl select-none transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}
            style={{ fontFamily: poppins.style.fontFamily, fontWeight: 900 }}
          >
            TURING
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-2 min-[1350px]:gap-5 2xl:gap-8">
            {navLinks.map((l) => {
              const isActive = pathname.startsWith(l.href);
              return (
                <li key={l.href} className={`flex items-center${l.gap ? " mr-0 min-[1350px]:mr-2 2xl:mr-4" : ""}`}>
                  <Link
                    href={l.href}
                    className={`relative text-[11px] min-[1350px]:text-[12px] 2xl:text-[13px] uppercase tracking-[0.06em] min-[1350px]:tracking-[0.12em] 2xl:tracking-[0.18em] transition-all duration-300 group overflow-hidden inline-flex items-center ${isActive ? (scrolled ? "text-black" : "text-white") : (scrolled ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white")}`}
                    style={{ fontFamily: "system-ui, sans-serif", height: "16px", lineHeight: "16px", fontWeight: 700 }}
                  >
                    {/* Invisible bold text to reserve width */}
                    <span className="invisible font-black">{l.label}</span>
                    <span className={`absolute left-0 top-0 z-10 inline-block transition-transform duration-300 font-bold ${isActive ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                      {l.label}
                    </span>
                    <span
                      className={`absolute left-0 top-0 z-10 inline-block transition-transform duration-300 font-black ${isActive ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"} ${scrolled ? "text-black" : "text-white"}`}
                      aria-hidden
                    >
                      {l.label}
                    </span>
                  </Link>
                </li>
              );
            })}

            {/* Contact CTA */}
            <li>
              <Link
                href="/contact"
                className={`ml-0 min-[1350px]:ml-1 2xl:ml-2 inline-flex items-center px-3 min-[1350px]:px-4 2xl:px-6 py-2 2xl:py-2.5 text-[11px] min-[1350px]:text-[12px] 2xl:text-[13px] uppercase tracking-[0.08em] min-[1350px]:tracking-[0.14em] 2xl:tracking-[0.2em] border-2 transition-all duration-300 ${pathname === "/contact" ? (scrolled ? "bg-black text-white border-black" : "bg-white text-black border-white") : (scrolled ? "text-black border-black/40 hover:bg-black hover:text-white hover:border-black" : "text-white border-white/40 hover:bg-white hover:text-black hover:border-white")}`}
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 600,
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden relative z-10 p-2 transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* ── Mobile fullscreen overlay ── */}
      <div
        className="fixed inset-0 z-[100] flex flex-col transition-all duration-500 lg:pointer-events-none"
        style={{
          backgroundColor: "#0A0A0A",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          visibility: mobileOpen ? "visible" : "hidden",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 h-20">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-white tracking-normal text-3xl"
            style={{ fontFamily: poppins.style.fontFamily, fontWeight: 900 }}
          >
            TURING
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white p-2"
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* Links */}
        <nav className="flex-1 flex flex-col px-6 pt-4">
          <div className="space-y-0">
            {[...navLinks, { href: "/contact", label: "Contact", gap: false }].map((l, i) => {
              const isActive = pathname.startsWith(l.href);
              const isServices = i < 4;
              return (
                <div key={l.href}>
                  {i === 4 && <div className="h-px bg-white/10 my-4" />}
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 uppercase text-white"
                    style={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: isActive ? 800 : 600,
                      fontSize: "1.3rem",
                      letterSpacing: isActive ? "0.15em" : "0.08em",
                      transform: mobileOpen ? "translateX(0)" : "translateX(-20px)",
                      opacity: mobileOpen ? 1 : 0,
                      transition: `all 0.4s cubic-bezier(0.22,1,0.36,1) ${mobileOpen ? i * 40 : 0}ms`,
                    }}
                  >
                    {l.label}
                  </Link>
                </div>
              );
            })}

            <div className="h-px bg-white/10 my-4" />
            <a
              href="tel:+33123456789"
              className="block py-1.5 text-white"
              style={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
              }}
            >
              +33 1 23 45 67 89
            </a>
            <a
              href="mailto:contact@turing-software.com"
              className="block py-1.5 text-white"
              style={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
              }}
            >
              contact@turing-software.com
            </a>
          </div>
        </nav>

        {/* Bottom info */}
        <div className="px-6 pb-8">
          <div className="h-px bg-white/10 mb-6" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30" style={{ fontFamily: "monospace" }}>
            &copy; 2026 Turing Software
          </p>
        </div>
      </div>
    </>
  );
}
