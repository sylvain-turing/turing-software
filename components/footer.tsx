import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted to-muted/50 border-t-2 border-primary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Nous concevons des solutions digitales sur-mesure qui transforment vos enjeux métier en avantages concurrentiels.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            >
              Démarrer un projet
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="break-all">{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Link
                href="/mentions-legales"
                className="hover:text-primary transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:text-primary transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
            <p className="text-center md:text-right text-sm text-muted-foreground">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

