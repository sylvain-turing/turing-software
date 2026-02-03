import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Wrench, Globe, Target, Users, Zap, CheckCircle2, Lightbulb, Rocket, Cog } from "lucide-react";

import { HeroMesh } from "@/components/hero-mesh";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d4a73] via-[#116cb1] to-[#0f5f9e] py-32 md:py-40">
        <HeroMesh />
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold shadow-lg">
              🚀 Votre partenaire technologique de confiance
            </div>
            <div className="mb-4">
              <p className="text-2xl md:text-3xl font-bold text-white/90 tracking-wide drop-shadow-md">
                TURING SOFTWARE
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Transformez vos idées en <span className="text-white">solutions digitales</span> performantes
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Nous concevons des produits web sur-mesure — SaaS, ERP métier, sites business — qui s&apos;adaptent parfaitement à votre activité et vous font gagner en efficacité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#116cb1] rounded-xl font-bold hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl"
              >
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-10 py-5 border-3 border-white bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-md shadow-xl"
              >
                Découvrir nos services
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Solutions sur-mesure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Interlocuteur unique</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Livraison garantie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que nous faisons */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Une approche orientée résultats</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nous transformons vos enjeux business en solutions digitales concrètes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compréhension métier</h3>
                <p className="text-muted-foreground">
                  Nous prenons le temps de comprendre votre activité, vos processus et vos objectifs avant toute ligne de code.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Solutions sur-mesure</h3>
                <p className="text-muted-foreground">
                  Chaque projet est unique. Nous concevons des outils qui s'adaptent à votre façon de travailler, pas l'inverse.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Livraison maîtrisée</h3>
                <p className="text-muted-foreground">
                  Un interlocuteur unique, une gestion de projet claire et des livraisons régulières qui respectent vos délais.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-bg-soft rounded-3xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p className="text-foreground font-semibold text-xl">
                  Chez Turing Software, nous ne faisons pas des sites web classiques ou des logiciels génériques.
                </p>
                <p>
                  Nous concevons des <strong>produits digitaux stratégiques</strong> pour les entreprises qui ont besoin d'outils parfaitement adaptés à leur métier : que ce soit pour lancer un SaaS innovant, structurer leurs opérations avec un ERP sur-mesure, ou créer une présence web qui génère réellement des résultats.
                </p>
                <p>
                  Notre approche repose sur trois piliers : <strong>comprendre vos enjeux business</strong>, concevoir une solution claire et efficace, et <strong>livrer un produit fiable</strong>, évolutif et pensé pour durer dans le temps.
                </p>
                <p>
                  Vous bénéficiez d'un accompagnement complet, de la réflexion stratégique jusqu'à la mise en production, avec une équipe technique capable de transformer vos besoins concrets en solutions digitales performantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos expertises
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions digitales pensées pour votre réussite
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* SaaS */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border card-hover group">
              <div className="mb-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 h-48 flex items-center justify-center">
                <Image 
                  src="/images/undraw_analytics-setup_ptrz.svg" 
                  alt="Analytics et Dashboard SaaS" 
                  width={400} 
                  height={300} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">SaaS sur-mesure</h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed h-24">
                Transformez votre idée ou expertise métier en produit SaaS fonctionnel et exploitable. Du MVP à la plateforme complète.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Validation rapide avec un MVP</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Architecture évolutive et scalable</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Interface utilisateur moderne</span>
                </li>
              </ul>
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all group"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* ERP */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border card-hover group">
              <div className="mb-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-6 h-48 flex items-center justify-center">
                <Image 
                  src="/images/undraw_scrum-board_7bgh.svg" 
                  alt="Gestion de projet et workflow ERP" 
                  width={400} 
                  height={300} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">ERP métier</h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed h-24">
                Un ERP conçu pour s&apos;adapter à votre façon de travailler. Centralisez vos données et optimisez vos processus.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Gestion complète de votre activité</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Workflows personnalisés</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Reporting et analytics intégrés</span>
                </li>
              </ul>
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all group"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Sites web */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border card-hover group">
              <div className="mb-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 h-48 flex items-center justify-center">
                <Image 
                  src="/images/undraw_landing-page_zc5e.svg" 
                  alt="Création de sites web modernes" 
                  width={400} 
                  height={300} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sites web business</h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed h-24">
                Un site web pensé comme un véritable outil au service de votre activité et de votre croissance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Génération de leads qualifiés</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Optimisé pour la conversion</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Performance et SEO premium</span>
                </li>
              </ul>
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all group"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Processus */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Notre méthodologie
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Un processus éprouvé pour transformer vos idées en réalité
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {/* Étape 1 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full border-2 border-primary/20">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-4 font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Analyse & Cadrage</h3>
                  <p className="text-muted-foreground">
                    Nous explorons vos besoins, vos contraintes et vos objectifs pour définir la solution idéale.
                  </p>
                </div>
                {/* Arrow connector (hidden on mobile) */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                  <ArrowRight className="h-8 w-8" />
                </div>
              </div>
              
              {/* Étape 2 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full border-2 border-primary/20">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-4 font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Conception</h3>
                  <p className="text-muted-foreground">
                    Design de l'interface, architecture technique et spécifications détaillées du produit.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                  <ArrowRight className="h-8 w-8" />
                </div>
              </div>
              
              {/* Étape 3 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full border-2 border-primary/20">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-4 font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Développement</h3>
                  <p className="text-muted-foreground">
                    Construction itérative du produit avec des points réguliers et des livraisons progressives.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                  <ArrowRight className="h-8 w-8" />
                </div>
              </div>
              
              {/* Étape 4 */}
              <div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full border-2 border-primary/20">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-4 font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-xl font-bold mb-3">Lancement</h3>
                  <p className="text-muted-foreground">
                    Mise en production, formation de vos équipes et accompagnement post-lancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-24 bg-gradient-bg-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pourquoi choisir Turing Software ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une expertise technique au service de votre réussite
              </p>
            </div>
            
            <div className="max-w-xs mx-auto mb-12">
              <Image 
                src="/images/undraw_successful_rtc4.svg" 
                alt="Réussite de vos projets" 
                width={300} 
                height={250} 
                className="w-full h-auto" 
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Avantage 1 */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cog className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Expertise technique pointue</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Nos développeurs maîtrisent les technologies modernes et les meilleures pratiques pour construire des produits robustes, sécurisés et performants. Nous ne faisons pas de compromis sur la qualité technique.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Avantage 2 */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Approche 100% sur-mesure</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Chaque entreprise est unique. Nous concevons des solutions parfaitement adaptées à vos processus métier, sans vous imposer des outils génériques qui ne correspondent pas à vos besoins réels.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Avantage 3 */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Interlocuteur unique</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Pas de jeu de ping-pong entre commerciaux, chefs de projet et développeurs. Un seul interlocuteur suit votre projet du début à la fin pour une communication fluide et efficace.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Avantage 4 */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Livraison garantie</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Nous nous engageons sur des délais réalistes et tenons nos promesses. Gestion de projet rigoureuse, livraisons régulières et transparence totale sur l'avancement de votre projet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0d4a73] via-[#116cb1] to-[#0f5f9e]">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Prêt à donner vie à votre projet ?
            </h2>
            <p className="text-xl mb-10 text-white max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Discutons de vos besoins et découvrons ensemble comment nous pouvons vous aider à atteindre vos objectifs avec une solution digitale sur-mesure.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#116cb1] rounded-xl font-bold hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl"
            >
              Démarrer la conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            {/* Additional info */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Premier échange gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Devis sous 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
