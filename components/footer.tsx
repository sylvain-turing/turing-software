import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, formatAddress } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                {COMPANY_INFO.email}
              </a>
              {COMPANY_INFO.address.street && COMPANY_INFO.address.street !== "Adresse de l'entreprise" && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {formatAddress(COMPANY_INFO.address)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
              © {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

