import Link from "next/link";
import { ArrowRight, CheckCircle2, Smartphone, Zap, Users } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création d'application mobile sur mesure | iOS & Android",
  description: "Agence de création d'application mobile : développement iOS, Android et multiplateforme en React Native. Application mobile sur mesure pour votre entreprise. Devis gratuit.",
};

export default function ApplicationMobile() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Création d&apos;application mobile sur mesure
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Vous avez une idée d&apos;application mobile ou un besoin métier qui nécessite une app performante ? Nous développons des applications mobiles disponibles sur iOS et Android, conçues pour offrir une expérience utilisateur fluide et engageante. De la définition de votre projet au déploiement sur les stores, notre agence vous accompagne dans toutes les phases de développement de votre application.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Discutons de votre projet</Link>
                </Button>
              </div>
            </div>
            <div>
              <ImagePlaceholder 
                width={600} 
                height={500} 
                label="Création application mobile iOS Android"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre accompagnement */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Notre accompagnement en développement d&apos;application
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Développement complet</h3>
                <p className="text-muted-foreground mb-4">
                  Vous partez de zéro ? Nous prenons en charge l&apos;intégralité de votre projet :
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cadrage fonctionnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>UX/UI Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Développement et tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Déploiement sur les stores</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Refonte d&apos;application</h3>
                <p className="text-muted-foreground mb-4">
                  Votre application actuelle est vieillissante ? Nous vous accompagnons dans sa refonte :
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Audit technique complet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Migration technologique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Redesign de l&apos;interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Optimisation des performances</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Renfort d&apos;équipe</h3>
                <p className="text-muted-foreground mb-4">
                  Vous avez déjà une équipe technique mais vous manquez de ressources ?
                </p>
                <p className="text-muted-foreground text-sm">
                  Nous pouvons intégrer des développeurs mobiles expérimentés directement dans votre équipe, en mode collaboratif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* React Native */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Application mobile multiplateforme avec React Native
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Pour la majorité des projets, nous recommandons React Native, le framework créé par Meta (Facebook) pour développer des applications mobiles multiplateformes.
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Pourquoi React Native ?</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Un seul code, deux plateformes</strong> : votre application fonctionne sur iOS et Android à partir d&apos;une base de code unique. Cela divise par deux les coûts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Performances natives</strong> : contrairement aux solutions hybrides classiques, React Native utilise les composants natifs de chaque plateforme.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Écosystème mature</strong> : utilisé par Facebook, Instagram, Airbnb, Discord, Uber Eats.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Itérations rapides</strong> : le hot reloading permet de tester les modifications en temps réel.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Accès aux fonctionnalités natives</strong> : caméra, GPS, notifications push, Bluetooth...</span>
                  </li>
                </ul>
                
                <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
                  <p className="text-sm font-semibold text-primary mb-2">Notre expertise React Native</p>
                  <p className="text-muted-foreground">
                    React Native est notre technologie de prédilection pour le développement mobile. Nous maîtrisons l&apos;ensemble de son écosystème : navigation, gestion d&apos;état, animations, intégration d&apos;API, notifications push et déploiement automatisé sur les stores.
                  </p>
                </div>
              </div>
              
              <div>
                <ImagePlaceholder label="Application React Native exemple" height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PWA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <ImagePlaceholder label="Progressive Web App exemple" height={400} />
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Application web progressive (PWA)
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Tous les projets ne nécessitent pas une application native sur les stores. Dans certains cas, une application web progressive (PWA) est la solution la plus adaptée.
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;une PWA ?</h3>
                <p className="text-muted-foreground mb-6">
                  Une PWA est un site web qui se comporte comme une application mobile : elle peut être installée sur l&apos;écran d&apos;accueil, fonctionner hors ligne et envoyer des notifications push. Elle est accessible via un navigateur web, sans passer par les stores.
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Quand choisir une PWA ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Votre budget est limité et vous souhaitez une solution accessible sur mobile sans les coûts d&apos;un développement natif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Votre application est principalement basée sur du contenu (catalogue, réservation, tableau de bord...)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Vous voulez éviter les contraintes de validation des stores (Apple, Google)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Vous avez besoin d&apos;une mise en production rapide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 bg-gradient-bg-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Notre processus de développement
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Définition du projet</h3>
                  <p className="text-muted-foreground text-lg">
                    Nous échangeons sur votre vision, vos objectifs business et vos utilisateurs cibles. Nous rédigeons un cahier des charges fonctionnel et définissons ensemble le périmètre du MVP (Minimum Viable Product). Plutôt que de tout développer d&apos;un coup, nous livrons d&apos;abord une version avec les fonctionnalités essentielles.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Design UX/UI</h3>
                  <p className="text-muted-foreground text-lg">
                    Nos designers créent les maquettes de votre application : wireframes (structure), design system (composants réutilisables), et maquettes haute fidélité (rendu final). Vous validez chaque étape avant que le développement ne commence.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Développement agile</h3>
                  <p className="text-muted-foreground text-lg">
                    Nous développons en sprints de 2 semaines. À chaque fin de sprint, vous recevez une version fonctionnelle de votre application que vous pouvez tester. Cela vous donne une visibilité constante sur l&apos;avancement.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Tests et qualité</h3>
                  <p className="text-muted-foreground text-lg">
                    Tests automatisés (unitaires et d&apos;intégration), tests manuels sur de vrais appareils (iPhone, Android, différentes tailles d&apos;écran), tests de performance et de stabilité, revue de code systématique.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Publication et lancement</h3>
                  <p className="text-muted-foreground text-lg">
                    Nous gérons la soumission de votre application sur l&apos;App Store et le Google Play Store : configuration des comptes développeur, préparation des fiches stores, soumission et gestion des retours Apple/Google, suivi post-lancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Technologies maîtrisées
            </h2>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-bold">Technologie</th>
                      <th className="text-left py-4 px-4 font-bold">Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">React Native</td>
                      <td className="py-4 px-4 text-muted-foreground">Applications multiplateformes iOS + Android (recommandé)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">React / Next.js</td>
                      <td className="py-4 px-4 text-muted-foreground">Applications web et PWA</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Node.js</td>
                      <td className="py-4 px-4 text-muted-foreground">API et back-end des applications</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Firebase</td>
                      <td className="py-4 px-4 text-muted-foreground">Authentification, base de données temps réel, notifications push</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">REST / GraphQL</td>
                      <td className="py-4 px-4 text-muted-foreground">Communication entre l&apos;app et vos services</td>
                    </tr>
                  </tbody>
                </table>
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
                <h3 className="text-2xl font-bold mb-3">Rapidité grâce à l&apos;IA</h3>
                <p className="text-muted-foreground">
                  Nous intégrons l&apos;intelligence artificielle dans nos processus de développement : génération de code, tests automatisés, prototypage rapide. Résultat : des délais de livraison réduits sans compromis sur la qualité.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Un interlocuteur unique</h3>
                <p className="text-muted-foreground">
                  Pas de commercial, pas de chef de projet intermédiaire. Vous échangez directement avec le développeur en charge de votre application. Communication directe, décisions rapides.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Flexibilité d&apos;équipe</h3>
                <p className="text-muted-foreground">
                  Nous sommes une agence agile. Selon la taille de votre projet, nous mobilisons les profils nécessaires parmi notre réseau de développeurs et designers freelances experts.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <Smartphone className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Tarifs compétitifs</h3>
                <p className="text-muted-foreground">
                  Notre structure légère et notre productivité boostée par l&apos;IA nous permettent de proposer des tarifs compétitifs par rapport aux grandes agences, avec la même qualité de livrable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples de projets */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Exemples de projets d&apos;application mobile
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Voici des types de projets que nous réalisons régulièrement
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Application métier</h3>
                <p className="text-muted-foreground text-sm">Outil interne pour vos équipes terrain (relevés, rapports, planification)</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Application de réservation</h3>
                <p className="text-muted-foreground text-sm">Prise de rendez-vous, réservation de services ou de créneaux</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Application e-commerce mobile</h3>
                <p className="text-muted-foreground text-sm">Catalogue produits, panier, paiement, suivi de commande</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Application communautaire</h3>
                <p className="text-muted-foreground text-sm">Réseau social, messagerie, partage de contenu</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Application de livraison</h3>
                <p className="text-muted-foreground text-sm">Suivi en temps réel, notifications, géolocalisation</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">MVP / Proof of concept</h3>
                <p className="text-muted-foreground text-sm">Pour tester rapidement une idée avant d&apos;investir massivement</p>
              </div>
            </div>
            
            <div className="mt-12">
              <ImagePlaceholder label="Screenshots exemples applications mobiles" height={300} />
            </div>
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
                  Combien coûte le développement d&apos;une application mobile ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Le coût dépend de la complexité : nombre d&apos;écrans, fonctionnalités, intégrations tierces, design sur mesure. Une application simple (MVP) démarre autour de 5 000 EUR HT. Une application complète peut aller de 10 000 à 30 000 EUR HT. Nous établissons un devis détaillé après avoir cadré votre projet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Combien de temps faut-il pour créer une application ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Un MVP peut être livré en 4 à 6 semaines. Une application complète prend généralement entre 2 et 4 mois. Nous vous communiquons un planning détaillé dès le démarrage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Mon application sera-t-elle disponible sur iOS et Android ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oui. Grâce à React Native, nous développons votre application une seule fois et la déployons sur les deux plateformes. Cela réduit les coûts et les délais par rapport à un développement natif séparé.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Est-ce que je serai propriétaire du code ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolument. À la livraison, vous êtes propriétaire de l&apos;intégralité du code source. Nous vous donnons accès au repository Git et à toute la documentation technique.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Proposez-vous la maintenance après le lancement ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oui. Nous proposons des forfaits de maintenance incluant : corrections de bugs, mises à jour de sécurité, compatibilité avec les nouvelles versions iOS/Android, et évolutions fonctionnelles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Quelle est la différence entre une application native et une PWA ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Une application native est installée depuis les stores (App Store, Google Play) et offre un accès complet aux fonctionnalités du téléphone. Une PWA est accessible via le navigateur et peut être installée sur l&apos;écran d&apos;accueil, mais avec un accès plus limité au matériel. Le choix dépend de votre budget et de vos besoins fonctionnels.
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
              Prêt à créer votre application mobile ?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Décrivez-nous votre projet et recevez un devis gratuit sous 24h. Que vous ayez un cahier des charges détaillé ou simplement une idée, nous sommes là pour la concrétiser.
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
