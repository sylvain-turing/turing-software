import Link from "next/link";
import { ArrowRight, Code, Wrench, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Turing Software
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Nous concevons des produits web sur-mesure (SaaS, ERP, sites) adaptés à votre métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que nous faisons */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ce que nous faisons
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Nous concevons des produits web sur-mesure pour les entreprises qui ont besoin d'outils adaptés à leur métier.
              </p>
              <p>
                Qu'il s'agisse de lancer un produit SaaS, de structurer vos opérations avec un ERP métier ou de créer un site web réellement utile à votre activité, nous vous accompagnons de la réflexion stratégique jusqu'à la mise en production.
              </p>
              <p>
                Notre approche est simple : comprendre vos enjeux business, concevoir une solution claire et efficace, et livrer un produit fiable, évolutif et pensé pour durer. Vous bénéficiez d'un interlocuteur unique, d'une gestion de projet maîtrisée et d'une équipe technique capable de transformer vos besoins concrets en solutions digitales performantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Nos services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* SaaS */}
            <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">SaaS sur-mesure</h3>
              <p className="text-muted-foreground mb-6">
                Transformez votre idée ou expertise métier en produit SaaS fonctionnel et exploitable.
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* ERP */}
            <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ERP métier</h3>
              <p className="text-muted-foreground mb-6">
                Un ERP conçu pour s'adapter à votre façon de travailler, et non l'inverse.
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Sites web */}
            <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sites web business</h3>
              <p className="text-muted-foreground mb-6">
                Un site web pensé comme un véritable outil au service de votre activité.
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Parlons de vos besoins et de la solution adaptée à votre entreprise.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Nous contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
