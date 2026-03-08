import { HomeContent } from "@/components/home-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turing Software | Agence web sur-mesure à Paris",
  description: "Agence web spécialisée en création de site internet, application mobile et site e-commerce. Design moderne, développement sur mesure. Devis gratuit.",
};

export default function Home() {
  return <HomeContent />;
}
