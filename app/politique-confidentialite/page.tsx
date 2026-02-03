import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et protection des données personnelles",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>

        <p className="text-muted-foreground">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Collecte des données</h2>
          <p>
            {COMPANY_INFO.name} collecte des données personnelles uniquement dans le cadre de
            demandes de devis ou de contact via le formulaire présent sur le site.
          </p>
          <p>Les données collectées sont :</p>
          <ul>
            <li>Nom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Message</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données</h2>
          <p>Les données collectées sont utilisées uniquement pour :</p>
          <ul>
            <li>Répondre à vos demandes de devis</li>
            <li>Vous contacter concernant nos services</li>
            <li>Améliorer la qualité de nos prestations</li>
          </ul>
          <p>
            Vos données ne sont jamais vendues, louées ou partagées avec des tiers à des fins
            commerciales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Durée de conservation</h2>
          <p>
            Les données personnelles sont conservées pendant une durée de 3 ans à compter du dernier
            contact avec vous, conformément aux recommandations de la CNIL.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Sécurité</h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées
            pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès
            non autorisé, la divulgation, l'altération ou la destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d'opposition au traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous par email à {COMPANY_INFO.email} ou par courrier
            à l'adresse : {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode}{" "}
            {COMPANY_INFO.address.city}.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
          <p>
            Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie
            de traçage ou publicitaire n'est utilisé.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Informations légales</h2>
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
      </div>
    </div>
  );
}
