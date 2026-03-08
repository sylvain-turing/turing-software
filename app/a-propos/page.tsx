import { AProposContent } from "@/components/a-propos-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Turing Software",
  description: "Découvrez l'équipe et les valeurs de Turing Software, agence web sur-mesure à Paris.",
};

export default function APropos() {
  return <AProposContent />;
}
