"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const ACCENT = "#111111";
export const GRAY = "#888888";

export const scanlineStyle = {
  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 4px)",
  pointerEvents: "none" as const,
};

export const scanlineStyleLight = {
  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)",
  pointerEvents: "none" as const,
};

export const circuitGrid = {
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
  `,
  backgroundSize: "60px 60px",
};

export const circuitGridLight = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
  `,
  backgroundSize: "60px 60px",
};

export function HudBrackets({ color = ACCENT }: { color?: string }) {
  return (
    <>
      <div className="absolute top-3 left-3 w-5 h-5 border-t border-l" style={{ borderColor: color, opacity: 0.2 }} />
      <div className="absolute top-3 right-3 w-5 h-5 border-t border-r" style={{ borderColor: color, opacity: 0.2 }} />
      <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l" style={{ borderColor: color, opacity: 0.2 }} />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r" style={{ borderColor: color, opacity: 0.2 }} />
    </>
  );
}

const defaultTeam = [
  { name: "ALEX MARTIN", role: "Directeur Technique", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "SARAH DUPONT", role: "Lead Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "LUCAS MOREAU", role: "Developpeur Full-Stack", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

export function TeamSection({ label, title = "NOTRE EQUIPE", subtitle = "des talents passionnes", members = defaultTeam }: {
  label?: string;
  title?: string;
  subtitle?: string;
  members?: { name: string; role: string; img: string }[];
}) {
  return (
    <section className="relative py-24 md:py-32" style={{ backgroundColor: "white" }}>
      <div className="absolute inset-0" style={circuitGrid} />
      <div className="absolute inset-0" style={scanlineStyle} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            {label && <span className="text-[10px] uppercase tracking-[0.4em] block mb-4" style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}>{label}</span>}
            <h2 className="text-4xl md:text-6xl tracking-tight mb-3" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800, color: ACCENT }}>
              {title}
            </h2>
            <div className="w-12 h-1 mx-auto mb-4 bg-black" />
            <p className="text-xl" style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}>
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 md:max-w-4xl mx-auto overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:px-0">
          {members.map((member, i) => (
            <ScrollReveal key={member.name} direction="up" delay={i * 100}>
              <div className="group relative overflow-hidden cursor-pointer min-w-[220px] snap-start md:min-w-0" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                  <div
                    className="absolute inset-x-0 bottom-0 h-full flex items-center justify-center [transform:translateY(100%)] group-hover:[transform:translateY(0)] [transition:transform_0.6s_cubic-bezier(0.16,1,0.3,1)]"
                    style={{ backgroundColor: "rgba(0,0,0,0.70)" }}
                  >
                    <div className="absolute inset-0" style={scanlineStyleLight} />
                    <div className="text-center relative z-10">
                      <div className="w-8 h-px mx-auto mb-3 bg-white/50" />
                      <h3 className="text-lg md:text-xl tracking-wide text-white" style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}>
                        {member.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.15em] mt-1 text-white/50" style={{ fontFamily: "monospace" }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <HudBrackets />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStack({ technologies, label = "STACK.TECH — TOOLS", title = "TECHNOLOGIES", subtitle = "notre stack technique" }: {
  technologies: string[];
  label?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative py-24 md:py-32" style={{ backgroundColor: "#F7F7F7" }}>
      <div className="absolute inset-0" style={circuitGrid} />
      <div className="absolute inset-0" style={scanlineStyle} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] block mb-4" style={{ fontFamily: "monospace", color: GRAY, opacity: 0.7 }}>{label}</span>
            <h2
              className="text-4xl md:text-5xl tracking-tight mb-3"
              style={{ fontFamily: poppins.style.fontFamily, color: ACCENT, fontWeight: 800 }}
            >
              {title}
            </h2>
            <div className="w-12 h-1 mx-auto mb-4 bg-black" />
            <p className="text-xl" style={{ fontFamily: poppins.style.fontFamily, color: GRAY, fontWeight: 800 }}>
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="relative p-6 text-center bg-white group cursor-pointer transition-all duration-300 hover:bg-black"
                style={{ border: "1px solid rgba(0,0,0,0.08)" }}
              >
                <span
                  className="text-sm uppercase tracking-[0.2em] transition-colors duration-300 text-[#111111] group-hover:!text-white"
                  style={{ fontFamily: poppins.style.fontFamily, fontWeight: 800 }}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
