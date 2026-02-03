import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales de l'entreprise - Informations légales et hébergement du site",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
          <p>
            <strong>Raison sociale :</strong> {COMPANY_INFO.name}
            <br />
            <strong>SIRET :</strong> {COMPANY_INFO.siret}
            <br />
            <strong>Adresse :</strong> {COMPANY_INFO.address.street},{" "}
            {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city} - {COMPANY_INFO.address.country}
            <br />
            <strong>Téléphone :</strong> {COMPANY_INFO.phone}
            <br />
            <strong>Email :</strong> {COMPANY_INFO.email}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Directeur de publication</h2>
          <p>Le directeur de la publication du site est le représentant légal de {COMPANY_INFO.name}.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.
            <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, USA
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit
            d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés,
            y compris pour les documents téléchargeables et les représentations iconographiques et
            photographiques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Liens hypertextes</h2>
          <p>
            Les liens hypertextes mis en place dans le cadre du présent site internet en direction
            d'autres ressources présentes sur le réseau Internet ne sauraient engager la
            responsabilité de {COMPANY_INFO.name}.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Responsabilité</h2>
          <p>
            {COMPANY_INFO.name} ne pourra être tenue responsable des dommages directs et indirects
            causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de
            l'utilisation d'un matériel ne répondant pas aux spécifications, soit de l'apparition
            d'un bug ou d'une incompatibilité.
          </p>
        </section>
      </div>
    </div>
  );
}
