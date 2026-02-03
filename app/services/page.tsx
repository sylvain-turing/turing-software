import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Wrench, Globe, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d4a73] via-[#116cb1] to-[#0f5f9e] py-24 md:py-32">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold shadow-lg">
              💼 Nos Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Des solutions digitales pensées pour votre métier
            </h1>
            <p className="text-xl text-white leading-relaxed drop-shadow-md">
              Nous proposons des solutions sur-mesure, conçues pour répondre à des besoins métiers précis. Chaque projet commence par une phase de compréhension approfondie pour concevoir un outil réellement utile, aligné avec vos objectifs et vos contraintes opérationnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1 - SaaS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Construction de SaaS sur-mesure
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Transformez votre idée ou votre expertise métier en produit SaaS fonctionnel, exploitable et rentable.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Que vous souhaitiez lancer un nouveau produit digital, internaliser un outil métier stratégique ou tester un concept via un MVP, nous vous accompagnons de la définition du produit jusqu'à sa mise en ligne et au-delà.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Nous concevons des applications <strong>fiables, évolutives et pensées pour l'usage réel</strong> des utilisateurs, avec une attention particulière portée à l'expérience, à la performance et à la maintenabilité du code.
                </p>
                
                <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
                  <p className="text-sm font-semibold text-primary mb-2">Idéal pour :</p>
                  <p className="text-muted-foreground">
                    Entrepreneurs qui veulent lancer un SaaS • Entreprises qui internalisent des outils stratégiques • Startups en phase de validation produit
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="mb-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8">
                  <Image 
                    src="/images/undraw_analytics-setup_ptrz.svg" 
                    alt="SaaS Analytics" 
                    width={320} 
                    height={224} 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">MVP & Validation rapide</h3>
                  <p className="text-muted-foreground">
                    Testez votre concept rapidement avec un produit minimum viable. Validez l&apos;adéquation produit-marché avant d&apos;investir massivement.
                  </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Produit digital complet</h3>
                  <p className="text-muted-foreground">
                    De l&apos;idée à la mise en production d&apos;un SaaS exploitable avec authentification, paiements, tableaux de bord et toutes les fonctionnalités nécessaires.
                  </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Architecture scalable</h3>
                      <p className="text-muted-foreground">
                        Code propre, architecture modulaire et infrastructure pensée pour supporter la croissance de votre produit sur le long terme.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 - ERP */}
      <section className="py-24 bg-gradient-bg-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <div className="mb-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-8">
                  <Image 
                    src="/images/undraw_scrum-board_7bgh.svg" 
                    alt="ERP Workflow" 
                    width={320} 
                    height={224} 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Centralisation des données</h3>
                      <p className="text-muted-foreground">
                        Regroupez toutes vos informations métier dans un système unique et cohérent. Fini les tableurs éparpillés et les doublons.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Processus sur-mesure</h3>
                  <p className="text-muted-foreground">
                    Un outil qui s&apos;adapte à votre organisation et vos workflows spécifiques, pas un logiciel générique qui vous impose sa logique.
                  </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Efficacité opérationnelle</h3>
                      <p className="text-muted-foreground">
                        Automatisez les tâches répétitives, réduisez les erreurs de saisie et gagnez un temps précieux sur vos opérations quotidiennes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6">
                  <Wrench className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Construction d'ERP métier sur-mesure
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Un ERP conçu pour s&apos;adapter à votre façon de travailler, et non l&apos;inverse.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Lorsque les solutions du marché sont trop rigides, trop complexes ou inadaptées à vos processus métier, nous concevons des <strong>ERP sur-mesure</strong> pour centraliser vos données, structurer vos opérations et gagner en efficacité.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Gestion interne, suivi des opérations, facturation, reporting, CRM : nous développons des outils simples à utiliser, parfaitement alignés avec votre organisation et vos enjeux quotidiens.
                </p>
                
                <div className="bg-accent/5 rounded-2xl p-6 border-l-4 border-accent">
                  <p className="text-sm font-semibold text-accent mb-2">Idéal pour :</p>
                  <p className="text-muted-foreground">
                    PME avec des processus métier spécifiques • Entreprises déçues par les ERP génériques • Organisations en forte croissance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 - Sites web */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Site web sur-mesure orienté business
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Un site web pensé comme un véritable outil au service de votre activité et de vos objectifs commerciaux.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous concevons des sites sur-mesure qui vont bien au-delà du simple aspect visuel : <strong>génération de leads</strong>, mise en valeur de votre offre, tunnels de conversion optimisés ou espaces clients dédiés.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Chaque site est conçu pour être rapide, clair, évolutif et aligné avec vos objectifs business, afin de maximiser son impact et sa rentabilité pour votre entreprise.
                </p>
                
                <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
                  <p className="text-sm font-semibold text-primary mb-2">Idéal pour :</p>
                  <p className="text-muted-foreground">
                    Entreprises B2B cherchant des leads qualifiés • Services professionnels • Agences et consultants • Entreprises SaaS
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="mb-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8">
                  <Image 
                    src="/images/undraw_landing-page_zc5e.svg" 
                    alt="Sites Web" 
                    width={320} 
                    height={224} 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Génération de leads</h3>
                      <p className="text-muted-foreground">
                        Convertissez vos visiteurs en prospects qualifiés avec des formulaires optimisés, des CTA stratégiques et des parcours de conversion pensés.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Performance & SEO premium</h3>
                      <p className="text-muted-foreground">
                        Sites ultra-rapides, bien référencés sur Google et optimisés pour maximiser votre visibilité organique et votre taux de conversion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Évolutivité garantie</h3>
                      <p className="text-muted-foreground">
                        Architecture modulaire qui permet d'ajouter facilement de nouvelles fonctionnalités au fil de la croissance de votre entreprise.
                      </p>
                    </div>
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
              Un projet en tête ?
            </h2>
            <p className="text-xl mb-10 text-white max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Échangeons sur vos besoins et trouvons ensemble la solution adaptée à votre entreprise. Premier rendez-vous sans engagement.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#116cb1] rounded-xl font-bold hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl"
            >
              Discutons de votre projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            {/* Additional info */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Devis détaillé gratuit</span>
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

