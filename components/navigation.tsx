"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <Image
              src="/logo.png"
              alt={`${COMPANY_INFO.name} Logo`}
              width={100}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href!}
                className={`text-base font-semibold transition-all relative group ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 text-base font-semibold text-primary hover:text-primary/80 transition-all hover:gap-3"
            >
              <Phone className="h-4 w-4" />
              {COMPANY_INFO.phone}
            </a>
            <Button asChild size="lg" className="ml-4 group shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">
                Demande de devis
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile Phone & Menu */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`text-base font-semibold transition-colors px-4 py-2 rounded-lg ${
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-base font-semibold text-primary hover:text-primary/80 transition-colors px-4 py-2"
              >
                <Phone className="h-4 w-4" />
                {COMPANY_INFO.phone}
              </a>
              <Button asChild size="lg" className="w-full group">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Demande de devis
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

