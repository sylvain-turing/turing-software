import { ApplicationMobileContent } from "@/components/application-mobile-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création d'application mobile sur mesure | iOS & Android",
  description: "Agence de création d'application mobile : développement iOS, Android et multiplateforme en React Native. Application mobile sur mesure pour votre entreprise. Devis gratuit.",
};

export default function ApplicationMobile() {
  return <ApplicationMobileContent />;
}
