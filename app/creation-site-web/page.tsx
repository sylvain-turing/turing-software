import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock, Users, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";
import { PostHogPageView } from "@/components/posthog-page-view";

export const metadata: Metadata = {
  title: "Création de site internet professionnel | Agence web sur mesure",
  description: "Agence de création de site internet : site vitrine, site professionnel, WordPress, refonte. Conception de site web sur mesure avec un accompagnement clé en main. Devis gratuit.",
};

export default function CreationSiteWeb() {
  return (
    <div className="flex flex-col">
      <PostHogPageView event="web_creation_page_viewed" properties={{ service: "creation_site_web" }} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Création de site internet professionnel
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Vous avez besoin d&apos;un site internet qui reflète votre activité, attire vos clients et génère des résultats concrets ? Nous concevons des sites web sur mesure, pensés pour convertir vos visiteurs en clients. De la conception au déploiement, notre agence de création de site web vous accompagne à chaque étape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Demander un devis gratuit</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image 
                src="/images/photos/web-development.jpg"
                alt="Création site internet professionnel"
                width={600} 
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi une agence */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Pourquoi faire appel à une agence de création de site web ?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Votre site internet est souvent le premier point de contact entre votre entreprise et vos futurs clients. Un site amateur ou vieillissant peut faire fuir vos prospects en quelques secondes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Un site conçu pour convertir</h3>
                <p className="text-muted-foreground">
                  Chaque page, chaque bouton, chaque texte est pensé pour guider vos visiteurs vers l&apos;action (contact, demande de devis, achat).
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Un design professionnel et moderne</h3>
                <p className="text-muted-foreground">
                  Une identité visuelle qui inspire confiance et reflète votre expertise.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Un site optimisé pour le référencement</h3>
                <p className="text-muted-foreground">
                  Visible sur Google dès sa mise en ligne, grâce à une structure technique et un contenu optimisés SEO.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Un gain de temps considérable</h3>
                <p className="text-muted-foreground">
                  Nous gérons l&apos;intégralité du projet pendant que vous vous concentrez sur votre activité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site vitrine */}
      <section className="py-24 bg-gradient-bg-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Création de site vitrine
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Le site vitrine est la solution idéale pour présenter votre activité, vos services et vos coordonnées sur internet. C&apos;est votre carte de visite digitale, accessible 24h/24.
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Ce que nous livrons</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Design sur mesure adapté à votre charte graphique et votre secteur d&apos;activité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Pages essentielles : accueil, services, à propos, contact, mentions légales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Responsive design : votre site s&apos;affiche parfaitement sur mobile, tablette et ordinateur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Formulaire de contact intégré pour recevoir les demandes de vos prospects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Optimisation SEO de base : balises, structure, vitesse de chargement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Intégration Google Analytics pour suivre votre trafic</span>
                  </li>
                </ul>
                
                <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
                  <p className="text-sm font-semibold text-primary mb-2">Pour qui ?</p>
                  <p className="text-muted-foreground">
                    Le site vitrine convient parfaitement aux artisans, professions libérales, TPE/PME, associations et entrepreneurs qui souhaitent une présence en ligne professionnelle sans la complexité d&apos;une boutique en ligne.
                  </p>
                </div>
              </div>
              
              <div>
                <Image 
                  src="/images/photos/modern-website.jpg"
                  alt="Exemple de site vitrine moderne"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site professionnel */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image 
                  src="/images/photos/professional-workspace.jpg"
                  alt="Site professionnel avec fonctionnalités avancées"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Site professionnel pour entreprise
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Votre entreprise a des besoins spécifiques ? Nous développons des sites web professionnels qui vont au-delà du simple site vitrine.
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Fonctionnalités avancées</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Espace client sécurisé avec authentification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Système de réservation en ligne (pour les restaurants, hôtels, cabinets...)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Multi-langue pour une audience internationale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Intégration CRM pour centraliser vos contacts et prospects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Blog intégré pour améliorer votre référencement naturel et partager votre expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Formulaires complexes avec devis automatisé, calculs en ligne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Création de site WordPress
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  WordPress propulse plus de 40% des sites internet dans le monde. C&apos;est le CMS que nous recommandons pour la plupart des projets de site vitrine et de site professionnel.
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Pourquoi WordPress ?</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Autonomie totale</strong> : vous pouvez modifier vos contenus (textes, images, pages) sans aucune compétence technique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Écosystème riche</strong> : des milliers d&apos;extensions pour ajouter des fonctionnalités (formulaires, SEO, sécurité, cache...)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Performant en SEO</strong> : WordPress est naturellement bien structuré pour le référencement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Évolutif</strong> : votre site peut grandir avec votre activité (ajout de pages, blog, e-commerce léger avec WooCommerce)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Coût maîtrisé</strong> : le CMS est gratuit et open source, vous ne payez que la conception et l&apos;hébergement</span>
                  </li>
                </ul>
                
                <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
                  <p className="text-sm font-semibold text-primary mb-2">Notre expertise WordPress</p>
                  <p className="text-muted-foreground">
                    Nous ne travaillons pas avec des thèmes achetés sur le web. Chaque site WordPress que nous développons est construit sur mesure, avec un code propre et optimisé. Le résultat : un site rapide, sécurisé et facile à maintenir.
                  </p>
                </div>
              </div>
              
              <div>
                <Image 
                  src="/images/photos/wordpress-design.jpg"
                  alt="Interface WordPress personnalisée"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refonte */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Refonte de site web
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Votre site actuel date de plusieurs années ? Il ne reflète plus votre image ? Il est lent, mal référencé ou difficile à mettre à jour ? Il est temps d&apos;envisager une refonte.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <Image 
                  src="/images/photos/website-redesign.jpg"
                  alt="Avant/après refonte de site web"
                  width={600}
                  height={350}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Ce que comprend une refonte</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Audit de l&apos;existant : analyse technique, SEO et ergonomique de votre site actuel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Redéfinition de l&apos;arborescence : restructuration des pages et du parcours utilisateur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Nouveau design : une identité visuelle rafraîchie et moderne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Migration du contenu : récupération et optimisation de vos textes, images et documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Redirections SEO : pour ne perdre aucun positionnement acquis sur Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Tests complets : vérification sur tous les navigateurs et appareils avant la mise en ligne</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Quand refondre son site ?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Votre site a plus de 3 ans et son design paraît daté</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Il n&apos;est pas adapté au mobile (responsive)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Vous ne pouvez pas modifier facilement le contenu</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Votre site est lent ou mal sécurisé</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Vous n&apos;apparaissez pas dans les premiers résultats Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sur mesure */}
      <section className="py-24 bg-gradient-bg-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Site sur mesure et développement web
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Pour les projets plus ambitieux, nous développons des sites web entièrement sur mesure, sans les contraintes d&apos;un CMS classique.
            </p>
            
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Notre stack technique</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-bold">Besoin</th>
                      <th className="text-left py-4 px-4 font-bold">Technologies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Front-end</td>
                      <td className="py-4 px-4 text-muted-foreground">React, Next.js, Vue.js</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Back-end</td>
                      <td className="py-4 px-4 text-muted-foreground">Node.js, PHP</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">CMS</td>
                      <td className="py-4 px-4 text-muted-foreground">WordPress, Headless CMS</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">Hébergement</td>
                      <td className="py-4 px-4 text-muted-foreground">Vercel, OVH, AWS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Quand choisir le sur mesure ?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Vous avez des fonctionnalités très spécifiques qui ne rentrent pas dans un CMS</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Vous avez besoin de performances maximales (temps de chargement, volume de trafic)</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Votre site doit s&apos;intégrer avec des outils métier existants (API, ERP, CRM...)</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Vous visez une expérience utilisateur unique et différenciante</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Notre processus de création de site internet
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Nous suivons une méthodologie claire et éprouvée pour chaque projet
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Cadrage et stratégie</h3>
                  <p className="text-muted-foreground text-lg">
                    Nous échangeons sur votre projet, vos objectifs et votre cible. Nous définissons ensemble l&apos;arborescence du site, les fonctionnalités nécessaires et le planning.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Maquettage et design</h3>
                  <p className="text-muted-foreground text-lg">
                    Nous créons les maquettes graphiques de votre site. Vous validez le design avant que nous passions au développement. Pas de mauvaise surprise.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Développement et intégration</h3>
                  <p className="text-muted-foreground text-lg">
                    Notre équipe développe votre site en respectant les bonnes pratiques : code propre, performance, sécurité, accessibilité et SEO technique.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Tests et mise en ligne</h3>
                  <p className="text-muted-foreground text-lg">
                    Nous testons votre site sur tous les supports (mobile, tablette, desktop) et tous les navigateurs. Une fois validé, nous gérons la mise en ligne et la configuration de votre nom de domaine.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Formation et autonomie</h3>
                  <p className="text-muted-foreground text-lg">
                    Nous vous formons à l&apos;utilisation de votre site pour que vous puissiez modifier vos contenus en toute autonomie. Un guide d&apos;utilisation est inclus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Différenciateurs */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Ce qui nous différencie
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Rapidité de livraison</h3>
                <p className="text-muted-foreground">
                  Nous utilisons l&apos;intelligence artificielle dans nos processus de conception et de développement. Résultat : des délais de livraison réduits, sans compromis sur la qualité. Là où d&apos;autres agences mettent 2-3 mois, nous livrons en quelques semaines.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Flexibilité et réactivité</h3>
                <p className="text-muted-foreground">
                  Nous sommes une agence à taille humaine. Vous avez un interlocuteur dédié, joignable et réactif. Pas de process bureaucratique ni de niveaux de validation interminables.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <Wrench className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Multi-stack, pas enfermé dans un outil</h3>
                <p className="text-muted-foreground">
                  Nous maîtrisons WordPress, React, Next.js, Vue.js, Node.js et PHP. Nous choisissons la technologie la plus adaptée à votre projet, pas celle qu&apos;on a l&apos;habitude de vendre.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Optimisation SEO intégrée</h3>
                <p className="text-muted-foreground">
                  Chaque site que nous créons est optimisé pour le référencement naturel dès sa conception : structure technique, balisage, vitesse de chargement, contenus optimisés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Nos tarifs pour la création de site internet
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Chaque projet est unique. Voici des fourchettes indicatives pour vous donner une idée :
            </p>
            
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="text-left py-4 px-6 font-bold">Type de site</th>
                      <th className="text-left py-4 px-6 font-bold">Fourchette de prix</th>
                      <th className="text-left py-4 px-6 font-bold">Délai moyen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-semibold">Site vitrine (5-7 pages)</td>
                      <td className="py-4 px-6 text-muted-foreground">À partir de 1 500 EUR HT</td>
                      <td className="py-4 px-6 text-muted-foreground">2-3 semaines</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-semibold">Site professionnel (10-15 pages)</td>
                      <td className="py-4 px-6 text-muted-foreground">À partir de 3 000 EUR HT</td>
                      <td className="py-4 px-6 text-muted-foreground">3-5 semaines</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-semibold">Site WordPress sur mesure</td>
                      <td className="py-4 px-6 text-muted-foreground">À partir de 2 500 EUR HT</td>
                      <td className="py-4 px-6 text-muted-foreground">3-4 semaines</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-semibold">Refonte de site</td>
                      <td className="py-4 px-6 text-muted-foreground">À partir de 2 000 EUR HT</td>
                      <td className="py-4 px-6 text-muted-foreground">2-4 semaines</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold">Site full custom (React/Next.js)</td>
                      <td className="py-4 px-6 text-muted-foreground">Sur devis</td>
                      <td className="py-4 px-6 text-muted-foreground">4-8 semaines</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <p className="text-center text-muted-foreground mt-6">
              Ces tarifs incluent : conception, design, développement, optimisation SEO, formation et mise en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-bg-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Questions fréquentes
            </h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Combien coûte la création d&apos;un site internet ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Le coût dépend de la complexité du projet : nombre de pages, fonctionnalités, design sur mesure ou non. Un site vitrine démarre à partir de 1 500 EUR HT. Nous établissons un devis gratuit et détaillé après avoir échangé sur votre projet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Combien de temps faut-il pour créer un site web ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  En moyenne, un site vitrine est livré en 2 à 3 semaines. Un site plus complexe avec des fonctionnalités spécifiques peut prendre 4 à 8 semaines. Nous nous engageons sur un planning précis dès le démarrage du projet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Mon site sera-t-il visible sur Google ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oui. Chaque site que nous créons intègre les bonnes pratiques du référencement naturel : structure technique optimisée, balisage sémantique, vitesse de chargement, compatibilité mobile. C&apos;est la base pour un bon positionnement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Pourrai-je modifier mon site moi-même ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolument. Tous nos sites sont livrés avec un back-office intuitif (WordPress ou CMS sur mesure). Nous vous formons à son utilisation et nous restons disponibles si vous avez des questions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Proposez-vous la maintenance et l&apos;hébergement ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oui, nous proposons des forfaits de maintenance incluant les mises à jour, la sauvegarde, la sécurité et le support technique. L&apos;hébergement peut être inclus ou géré de votre côté selon votre préférence.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Quelle est la différence entre un site vitrine et un site e-commerce ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Un site vitrine présente votre activité et génère des contacts (formulaire, téléphone). Un site e-commerce permet de vendre des produits en ligne avec un panier, un paiement sécurisé et une gestion des commandes. <Link href="/site-e-commerce" className="text-primary hover:underline">Découvrez notre offre e-commerce</Link>.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Décrivez-nous votre besoin et recevez un devis gratuit sous 24h. Que vous ayez une idée précise ou simplement l&apos;envie de vous lancer, nous sommes là pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Demander un devis gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
