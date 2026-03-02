import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PostHogPageView } from "@/components/posthog-page-view";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ShoppingCart, 
  CreditCard, 
  TrendingUp, 
  Globe, 
  Clock, 
  BarChart,
  Package,
  Truck,
  Shield,
  Zap,
  Target,
  Search,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Création de site e-commerce | Prestashop, Shopify, WooCommerce",
  description: "Agence de création de site e-commerce : boutique en ligne Prestashop, Shopify et WooCommerce. Développement sur mesure, optimisation des conversions et accompagnement complet. Devis gratuit.",
};

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      <PostHogPageView event="ecommerce_page_viewed" properties={{ service: "site_ecommerce" }} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Création de site e-commerce
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Vous souhaitez vendre vos produits en ligne et développer votre chiffre d'affaires sur internet ? 
                Nous concevons des boutiques en ligne performantes, pensées pour convertir vos visiteurs en acheteurs.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                De la mise en place de votre catalogue produits à la configuration des paiements et de la livraison, 
                notre agence e-commerce vous accompagne dans la création d'une boutique en ligne rentable et facile à gérer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Demander un devis gratuit</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image 
                src="/images/photos/ecommerce-store.jpg"
                alt="Illustration boutique e-commerce moderne"
                width={600} 
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why E-commerce Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Pourquoi créer un site e-commerce ?
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Le commerce en ligne ne cesse de croître. Avoir une boutique en ligne, c'est :
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Clock className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Vendre 24h/24, 7j/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vos clients achètent quand ils veulent, même la nuit et le week-end
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Élargir votre zone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vendez dans toute la France, en Europe ou à l'international
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Réduire vos coûts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pas de local commercial supplémentaire, pas de personnel en caisse
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Connaître vos clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Analytics, données de vente, comportement d'achat... tout est mesurable
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ShoppingCart className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Compléter votre boutique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Le click and collect et l'omnicanal boostent vos ventes globales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom E-commerce Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Boutique en ligne sur mesure
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Chaque activité a ses spécificités. Nous ne proposons pas de solutions toutes faites : 
                votre site e-commerce est conçu pour s'adapter à votre métier et à vos clients.
              </p>

              <h3 className="text-2xl font-bold mb-4">Ce que nous prenons en charge</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Catalogue produits</h4>
                    <p className="text-muted-foreground">
                      Fiches produits complètes (photos, descriptions, déclinaisons, stocks), catégories et filtres de recherche
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <ShoppingCart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Panier et tunnel de commande</h4>
                    <p className="text-muted-foreground">
                      Un parcours d'achat fluide et optimisé pour réduire les abandons de panier
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CreditCard className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Paiement sécurisé</h4>
                    <p className="text-muted-foreground">
                      Carte bancaire, PayPal, Stripe, Apple Pay, paiement en plusieurs fois...
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Livraison et logistique</h4>
                    <p className="text-muted-foreground">
                      Configuration des transporteurs, frais de port, suivi de commande, click and collect
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <BarChart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Gestion des commandes</h4>
                    <p className="text-muted-foreground">
                      Back-office complet pour gérer vos commandes, générer les factures et suivre vos ventes
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Conformité légale</h4>
                    <p className="text-muted-foreground">
                      CGV, politique de confidentialité, mentions légales et droit de rétractation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image 
                src="/images/photos/dashboard-analytics.jpg"
                alt="Interface back-office e-commerce"
                width={600} 
                height={700}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nos solutions e-commerce
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Nous maîtrisons les principales plateformes du marché et vous orientons vers celle qui correspond le mieux à votre projet.
          </p>

          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Prestashop */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Prestashop</CardTitle>
                    <CardDescription className="text-base">
                      CMS e-commerce open source français, adapté aux PME et commerçants
                    </CardDescription>
                  </div>
                  <Image 
                    src="/images/logos/prestashop.svg"
                    alt="Logo Prestashop"
                    width={120} 
                    height={60}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-4">Pourquoi choisir Prestashop ?</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Solution 100% dédiée au e-commerce</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Open source : pas d'abonnement mensuel</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Personnalisation totale</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Gestion avancée du catalogue</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Multi-boutique</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Communauté active et marketplace</p>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-primary">
                  Idéal pour : les commerçants avec un catalogue de 50 à 10 000+ produits
                </p>
              </CardContent>
            </Card>

            {/* Shopify */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Shopify</CardTitle>
                    <CardDescription className="text-base">
                      Solution SaaS hébergée pour lancer une boutique rapidement
                    </CardDescription>
                  </div>
                  <Image 
                    src="/images/logos/shopify.svg"
                    alt="Logo Shopify"
                    width={120} 
                    height={60}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-4">Pourquoi choisir Shopify ?</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Mise en ligne rapide (quelques jours)</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Hébergement et sécurité inclus</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Thèmes personnalisables</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Paiement intégré Shopify Payments</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Écosystème de milliers d'applications</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Vente omnicanale (Instagram, Facebook, TikTok)</p>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-primary">
                  Idéal pour : les entrepreneurs qui veulent lancer rapidement sans gérer l'infrastructure
                </p>
              </CardContent>
            </Card>

            {/* WooCommerce */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">WooCommerce</CardTitle>
                    <CardDescription className="text-base">
                      Extension e-commerce de WordPress
                    </CardDescription>
                  </div>
                  <Image 
                    src="/images/logos/woocommerce.svg"
                    alt="Logo WooCommerce"
                    width={120} 
                    height={60}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-4">Pourquoi choisir WooCommerce ?</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Gratuit et open source</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Intégration parfaite avec WordPress</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Milliers d'extensions disponibles</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Idéal pour les petits catalogues</p>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-primary">
                  Idéal pour : ajouter une fonctionnalité e-commerce à un site vitrine existant
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quelle solution choisir ?
          </h2>

          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-4 text-left font-semibold">Critère</th>
                  <th className="border p-4 text-left font-semibold">Prestashop</th>
                  <th className="border p-4 text-left font-semibold">Shopify</th>
                  <th className="border p-4 text-left font-semibold">WooCommerce</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-4 font-medium">Taille du catalogue</td>
                  <td className="border p-4">Moyen à très grand</td>
                  <td className="border p-4">Petit à moyen</td>
                  <td className="border p-4">Petit</td>
                </tr>
                <tr>
                  <td className="border p-4 font-medium">Budget démarrage</td>
                  <td className="border p-4">Moyen</td>
                  <td className="border p-4">Faible</td>
                  <td className="border p-4">Faible</td>
                </tr>
                <tr>
                  <td className="border p-4 font-medium">Coût mensuel</td>
                  <td className="border p-4">Hébergement seul</td>
                  <td className="border p-4">Abonnement (30-300 EUR/mois)</td>
                  <td className="border p-4">Hébergement seul</td>
                </tr>
                <tr>
                  <td className="border p-4 font-medium">Personnalisation</td>
                  <td className="border p-4">Totale</td>
                  <td className="border p-4">Moyenne</td>
                  <td className="border p-4">Bonne</td>
                </tr>
                <tr>
                  <td className="border p-4 font-medium">Complexité technique</td>
                  <td className="border p-4">Moyenne</td>
                  <td className="border p-4">Faible</td>
                  <td className="border p-4">Faible</td>
                </tr>
                <tr>
                  <td className="border p-4 font-medium">SEO</td>
                  <td className="border p-4">Excellent</td>
                  <td className="border p-4">Bon</td>
                  <td className="border p-4">Excellent</td>
                </tr>
                <tr>
                  <td className="border p-4 font-medium">Propriété des données</td>
                  <td className="border p-4">Oui</td>
                  <td className="border p-4">Non (SaaS)</td>
                  <td className="border p-4">Oui</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center mt-8 text-lg">
            <strong>Pas sûr de votre choix ?</strong> Nous analysons votre projet et vous recommandons 
            la solution la plus adaptée à vos besoins, votre budget et vos ambitions de croissance.
          </p>
        </div>
      </section>

      {/* Optimization Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="/images/photos/analytics-data.jpg"
                alt="Dashboard conversion e-commerce"
                width={600} 
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Optimisation et conversion
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Créer une boutique en ligne ne suffit pas. Il faut qu'elle convertisse. 
                Nous optimisons chaque aspect de votre site e-commerce pour maximiser vos ventes.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Design qui convertit
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fiches produits claires et engageantes avec photos de qualité</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Boutons d'action (CTA) visibles et incitatifs</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Avis clients et preuves sociales pour rassurer</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Navigation intuitive : trouvez ce que vous cherchez en 2 clics</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-primary" />
                    Performance technique
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Temps de chargement optimisé (chaque seconde = -7% de conversion)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Site 100% responsive (mobile, tablette, desktop)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sécurité SSL et conformité RGPD</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Search className="w-6 h-6 text-primary" />
                    Référencement e-commerce
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Structure technique optimisée pour le SEO</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Balises produits (Schema.org) pour résultats enrichis Google</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>URLs propres et descriptives</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Contenu optimisé des fiches produits et catégories</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Notre processus de création e-commerce
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Une méthodologie éprouvée pour livrer votre boutique en ligne dans les meilleurs délais
          </p>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <CardTitle>Analyse et stratégie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous étudions votre marché, vos concurrents et vos clients cibles. Nous définissons ensemble la plateforme et les fonctionnalités.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <CardTitle>Design et UX</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Design sur mesure ou personnalisation de thème. Le parcours d'achat est optimisé pour maximiser les conversions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <CardTitle>Développement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous développons votre boutique, configurons le catalogue, les paiements, les transporteurs et toutes les fonctionnalités.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <CardTitle>Tests et mise en ligne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tests complets du tunnel d'achat, des paiements, de la livraison et de la compatibilité mobile avant production.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  5
                </div>
                <CardTitle>Formation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Formation à la gestion quotidienne : ajout de produits, gestion des commandes, suivi des ventes. Vous êtes autonome.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ce qui nous différencie
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Expertise multi-plateforme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous ne sommes pas enfermés dans une seule technologie. Nous maîtrisons Prestashop, Shopify et WooCommerce, 
                  ce qui nous permet de vous recommander objectivement la solution la plus adaptée.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Approche business
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Notre objectif n'est pas de livrer un site, mais de vous aider à vendre. 
                  Chaque décision de conception est guidée par la conversion et la rentabilité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Rapidité de mise en marché
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Grâce à notre expérience et à l'utilisation de l'IA dans nos processus, nous livrons votre boutique 
                  dans des délais compétitifs. Un site Shopify peut être opérationnel en 1 à 2 semaines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Accompagnement post-lancement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  La mise en ligne n'est que le début. Nous vous accompagnons dans l'optimisation continue : 
                  A/B testing, analyse des données de vente, ajustement du parcours d'achat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur la création d'un site e-commerce
          </p>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Combien coûte la création d'un site e-commerce ?
              </AccordionTrigger>
              <AccordionContent>
                Le coût varie selon la plateforme et la complexité. Un site Shopify simple démarre autour de 2 000 EUR HT. 
                Un Prestashop sur mesure avec un catalogue important peut aller de 5 000 à 15 000 EUR HT. 
                Nous établissons un devis gratuit adapté à votre projet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Site vitrine ou site e-commerce : lequel choisir ?
              </AccordionTrigger>
              <AccordionContent>
                Si vous vendez des produits physiques ou numériques, un site e-commerce est indispensable. 
                Si vous vendez des services et que vous souhaitez simplement recevoir des demandes de contact, un site vitrine suffit. 
                Découvrez notre offre de <Link href="/creation-site-web" className="text-primary hover:underline">création de site web</Link>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Puis-je gérer ma boutique moi-même ?
              </AccordionTrigger>
              <AccordionContent>
                Oui. Les trois plateformes (Prestashop, Shopify, WooCommerce) disposent d'un back-office intuitif. 
                Nous vous formons à l'ajout de produits, la gestion des commandes et le suivi des ventes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Comment gérer les paiements en ligne ?
              </AccordionTrigger>
              <AccordionContent>
                Nous configurons les solutions de paiement sécurisées adaptées à votre activité : Stripe, PayPal, 
                paiement par carte bancaire, virement, paiement en plusieurs fois (Alma, Klarna). 
                Toutes les transactions sont sécurisées par SSL.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Mon site e-commerce sera-t-il bien référencé sur Google ?
              </AccordionTrigger>
              <AccordionContent>
                Oui. Nous optimisons la structure technique, les fiches produits et les catégories pour le référencement naturel. 
                Un bon positionnement sur Google est essentiel pour générer du trafic qualifié sans dépendre uniquement de la publicité.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Proposez-vous un accompagnement marketing ?
              </AccordionTrigger>
              <AccordionContent>
                Notre expertise se concentre sur la création et l'optimisation technique de votre boutique. 
                Pour le marketing (Google Ads, réseaux sociaux), nous pouvons vous orienter vers des partenaires de confiance 
                ou vous accompagner sur la partie Google Ads.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre boutique en ligne ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Décrivez-nous votre projet et recevez un devis gratuit sous 24h. 
            Que vous ayez déjà un catalogue prêt ou que vous partiez de zéro, nous vous accompagnons à chaque étape.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Demander un devis gratuit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
