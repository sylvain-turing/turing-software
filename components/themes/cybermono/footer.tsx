"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { layout } from "./shared";

const poppins = Poppins({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const serviceLinks = [
  { href: "/creation-site-web", label: "Création site web" },
  { href: "/sur-mesure", label: "Sur-mesure" },
  { href: "/site-e-commerce", label: "E-commerce" },
];

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/a-propos", label: "L'agence" },
  { href: "/contact", label: "Contact" },
];

export function CybermonoFooter() {
  return (
    <footer>
      <div style={{ backgroundColor: "#0A0A0A" }}>
        <div className={`${layout.container} py-16 md:py-20`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* ── Column 1: Brand + contact info ── */}
            <div>
              <Link
                href="/"
                className="inline-block text-white text-4xl tracking-[0.15em] mb-8"
                style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
              >
                AGENCE TURING
              </Link>

              <div className="space-y-5">
                <div>
                  <h4
                    className="text-white text-lg tracking-[0.1em] mb-1"
                    style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
                  >
                    EMAIL
                  </h4>
                  <p className="text-white/70 text-sm" style={{ fontFamily: "system-ui, sans-serif" }}>
                    contact@turing-software.fr
                  </p>
                </div>

                <div>
                  <h4
                    className="text-white text-lg tracking-[0.1em] mb-1"
                    style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
                  >
                    TELEPHONE
                  </h4>
                  <p className="text-white/70 text-sm" style={{ fontFamily: "system-ui, sans-serif" }}>
                    +33 1 23 45 67 89
                  </p>
                </div>

                <div>
                  <h4
                    className="text-white text-lg tracking-[0.1em] mb-1"
                    style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
                  >
                    HORAIRES
                  </h4>
                  <p className="text-white/70 text-sm" style={{ fontFamily: "system-ui, sans-serif" }}>
                    Lun — Ven : 9h00 — 18h00
                  </p>
                </div>
              </div>
            </div>

            {/* ── Column 2: Nos services ── */}
            <div>
              <h4
                className="text-white text-2xl tracking-[0.1em] mb-8"
                style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
              >
                NOS SERVICES
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/70 hover:text-white text-sm uppercase tracking-[0.12em] transition-colors duration-200"
                      style={{ fontFamily: "system-ui, sans-serif", fontWeight: 500 }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 3: Navigation ── */}
            <div>
              <h4
                className="text-white text-2xl tracking-[0.1em] mb-8"
                style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
              >
                NAVIGATION
              </h4>
              <ul className="space-y-3">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/70 hover:text-white text-sm uppercase tracking-[0.12em] transition-colors duration-200"
                      style={{ fontFamily: "system-ui, sans-serif", fontWeight: 500 }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/10">
          <div className={`${layout.container} py-6`}>
            <p
              className="text-white/40 text-xs tracking-[0.1em] text-center"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              &copy; 2026 Turing Software. Tous droits r&eacute;serv&eacute;s.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
