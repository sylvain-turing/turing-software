import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Users, Wrench, Zap, Rocket } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence web | Création de sites internet et applications",
  description: "Agence web spécialisée en création de site internet, application mobile et site e-commerce. Développement sur mesure, design moderne et accompagnement clé en main. Devis gratuit.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
                🚀 Agence web à taille humaine
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Agence web — Création de sites internet et applications sur mesure
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Nous concevons des sites web, des applications mobiles et des boutiques e-commerce qui font grandir votre activité. Une agence à taille humaine, réactive et technique, qui transforme vos idées en produits digitaux performants.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Demander un devis gratuit</Link>
                </Button>
              </div>
            </div>
            <div>
              <ImagePlaceholder 
                width={600} 
                height={500} 
                label="Agence web création sites applications"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos expertises */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos expertises
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions digitales adaptées à vos besoins
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Création de site internet */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border card-hover group">
              <div className="mb-6">
                <ImagePlaceholder label="Illustration création de site internet" height={200} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Création de site internet</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Du site vitrine au site professionnel complexe, nous concevons des sites web sur mesure, optimisés pour le référencement et pensés pour convertir vos visiteurs en clients.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Site vitrine et site professionnel</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>WordPress sur mesure</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Refonte et modernisation de site</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Développement full custom (React, Next.js, Vue.js)</span>
                </li>
              </ul>
              <Link 
                href="/creation-site-web" 
                className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all group"
              >
                Découvrir notre offre site web
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Création d'application mobile */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border card-hover group">
              <div className="mb-6">
                <ImagePlaceholder label="Illustration application mobile" height={200} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Création d&apos;application mobile</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous développons des applications mobiles disponibles sur iOS et Android avec React Native. Du MVP à l&apos;application complète, nous vous accompagnons de l&apos;idée au déploiement sur les stores.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Application mobile multiplateforme (React Native)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Application web progressive (PWA)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Développement agile et itératif</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Publication sur App Store et Google Play</span>
                </li>
              </ul>
              <Link 
                href="/application-mobile" 
                className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all group"
              >
                Découvrir notre offre application mobile
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Création de site e-commerce */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border card-hover group">
              <div className="mb-6">
                <ImagePlaceholder label="Illustration site e-commerce" height={200} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Création de site e-commerce</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Vendez en ligne avec une boutique performante et facile à gérer. Nous maîtrisons les principales plateformes du marché pour vous proposer la solution la plus adaptée.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Prestashop, Shopify, WooCommerce</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Catalogue produits, paiement sécurisé, livraison</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Design optimisé pour la conversion</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Accompagnement post-lancement</span>
                </li>
              </ul>
              <Link 
                href="/site-e-commerce" 
                className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all group"
              >
                Découvrir notre offre e-commerce
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi travailler avec nous */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pourquoi travailler avec nous ?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Rapidité */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rapidité de livraison</h3>
                <p className="text-muted-foreground">
                  Nous intégrons l&apos;intelligence artificielle dans nos processus de conception et de développement. Là où d&apos;autres agences mettent 2 à 3 mois, nous livrons en quelques semaines — sans compromis sur la qualité.
                </p>
              </div>

              {/* Interlocuteur dédié */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Un interlocuteur dédié</h3>
                <p className="text-muted-foreground">
                  Vous échangez directement avec la personne qui travaille sur votre projet. Pas de commercial intermédiaire, pas de process bureaucratique. Communication directe, décisions rapides, réactivité garantie.
                </p>
              </div>

              {/* Technologie */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">La bonne technologie pour chaque projet</h3>
                <p className="text-muted-foreground">
                  WordPress, React, Next.js, Vue.js, Node.js, PHP, React Native, Prestashop, Shopify... Nous maîtrisons un large éventail de technologies et nous choisissons celle qui correspond le mieux à votre besoin. Pas de solution unique imposée.
                </p>
              </div>

              {/* Accompagnement */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accompagnement de A à Z</h3>
                <p className="text-muted-foreground">
                  De la définition de votre projet à la mise en ligne, en passant par le design, le développement et le référencement : nous gérons l&apos;intégralité de votre projet digital. Et nous restons disponibles après le lancement pour la maintenance et les évolutions.
                </p>
              </div>

              {/* Flexibilité */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Flexibilité</h3>
                <p className="text-muted-foreground">
                  Nous sommes une agence agile. Selon l&apos;ampleur de votre projet, nous mobilisons les expertises nécessaires parmi notre réseau de développeurs, designers et product owners freelances expérimentés. Vous bénéficiez d&apos;une équipe dimensionnée pour votre projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre façon de travailler */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Notre façon de travailler
              </h2>
            </div>
            
            <div className="space-y-8">
              {/* Étape 1 */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">On échange</h3>
                  <p className="text-muted-foreground text-lg">
                    Vous nous décrivez votre projet, vos objectifs et vos contraintes. Nous vous posons les bonnes questions. À la fin de cet échange, vous recevez un devis détaillé et un planning clair.
                  </p>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">On conçoit</h3>
                  <p className="text-muted-foreground text-lg">
                    Nous créons l&apos;arborescence, les maquettes et le design de votre projet. Vous validez chaque étape avant qu&apos;on passe au développement.
                  </p>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">On développe</h3>
                  <p className="text-muted-foreground text-lg">
                    Notre équipe code votre site ou application en respectant les bonnes pratiques : performance, sécurité, SEO, accessibilité. Vous suivez l&apos;avancement en temps réel.
                  </p>
                </div>
              </div>

              {/* Étape 4 */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">On livre</h3>
                  <p className="text-muted-foreground text-lg">
                    Tests complets, mise en ligne, formation à l&apos;utilisation. Votre projet est opérationnel et vous êtes autonome.
                  </p>
                </div>
              </div>

              {/* Étape 5 */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">On reste là</h3>
                  <p className="text-muted-foreground text-lg">
                    Maintenance, mises à jour, évolutions fonctionnelles : nous restons votre partenaire technique sur la durée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos réalisations */}
      <section className="py-24 bg-gradient-bg-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nos réalisations
              </h2>
              <p className="text-xl text-muted-foreground">
                Nous accompagnons des entreprises de toutes tailles : TPE, PME, startups et indépendants. Chaque projet est une nouvelle aventure et un nouveau défi technique.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ImagePlaceholder label="Capture d'écran projet 1" height={250} />
              <ImagePlaceholder label="Capture d'écran projet 2" height={250} />
              <ImagePlaceholder label="Capture d'écran projet 3" height={250} />
              <ImagePlaceholder label="Capture d'écran projet 4" height={250} />
              <ImagePlaceholder label="Capture d'écran projet 5" height={250} />
              <ImagePlaceholder label="Capture d'écran projet 6" height={250} />
            </div>
          </div>
        </div>
      </section>

      {/* Ils nous font confiance */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ils nous font confiance
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ImagePlaceholder label="Logo client 1" height={100} />
              <ImagePlaceholder label="Logo client 2" height={100} />
              <ImagePlaceholder label="Logo client 3" height={100} />
              <ImagePlaceholder label="Logo client 4" height={100} />
              <ImagePlaceholder label="Logo client 5" height={100} />
              <ImagePlaceholder label="Logo client 6" height={100} />
              <ImagePlaceholder label="Logo client 7" height={100} />
              <ImagePlaceholder label="Logo client 8" height={100} />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technologies que nous maîtrisons
              </h2>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-bold">Domaine</th>
                      <th className="text-left py-4 px-4 font-bold">Technologies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Sites web</td>
                      <td className="py-4 px-4 text-muted-foreground">WordPress, React, Next.js, Vue.js, PHP, Node.js</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Applications mobiles</td>
                      <td className="py-4 px-4 text-muted-foreground">React Native</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">E-commerce</td>
                      <td className="py-4 px-4 text-muted-foreground">Prestashop, Shopify, WooCommerce</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Hébergement</td>
                      <td className="py-4 px-4 text-muted-foreground">Vercel, OVH, AWS</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">Outils</td>
                      <td className="py-4 px-4 text-muted-foreground">Git, Figma, VS Code, CI/CD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous avez un projet ?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Que vous ayez une idée précise ou simplement l&apos;envie de vous lancer, nous sommes là pour en discuter. Décrivez-nous votre besoin et recevez un devis gratuit sous 24h.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Demander un devis gratuit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
