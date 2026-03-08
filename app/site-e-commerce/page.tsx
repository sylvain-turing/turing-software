import { SiteEcommerceContent } from "@/components/site-e-commerce-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site e-commerce | Prestashop, Shopify, WooCommerce",
  description: "Agence de création de site e-commerce : boutique en ligne Prestashop, Shopify et WooCommerce. Développement sur mesure, optimisation des conversions et accompagnement complet. Devis gratuit.",
};

export default function EcommercePage() {
  return <SiteEcommerceContent />;
}
