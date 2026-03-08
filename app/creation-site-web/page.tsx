import { CreationSiteWebContent } from "@/components/creation-site-web-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site internet professionnel | Agence web sur mesure",
  description: "Agence de création de site internet : site vitrine, site professionnel, WordPress, refonte. Conception de site web sur mesure avec un accompagnement clé en main. Devis gratuit.",
};

export default function CreationSiteWeb() {
  return <CreationSiteWebContent />;
}
