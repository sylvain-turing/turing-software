import { PortfolioContent } from "@/components/portfolio-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Réalisations | Turing Software",
  description: "Découvrez nos projets web, applications mobiles et sites e-commerce réalisés pour nos clients.",
};

export default function Portfolio() {
  return <PortfolioContent />;
}
