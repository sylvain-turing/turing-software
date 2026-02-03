import Link from "next/link";
import { ArrowRight, Code, Wrench, Globe, CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Nous proposons des solutions digitales sur-mesure, conçues pour répondre à des besoins métiers précis. Chaque projet commence par une phase de compréhension et de cadrage afin de concevoir un outil réellement utile, aligné avec vos objectifs et vos contraintes opérationnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1 - SaaS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Construction de SaaS sur-mesure
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous transformons votre idée ou votre expertise métier en produit SaaS fonctionnel et exploitable.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Que vous souhaitiez lancer un nouveau produit digital, internaliser un outil métier ou tester un concept via un MVP, nous vous accompagnons de la définition du produit jusqu'à sa mise en ligne.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nous concevons des applications fiables, évolutives et pensées pour l'usage réel des utilisateurs, avec une attention particulière portée à l'expérience, à la performance et à la maintenabilité.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">MVP & Validation</h3>
                      <p className="text-muted-foreground">
                        Testez votre concept rapidement avec un produit minimum viable
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Produit digital complet</h3>
                      <p className="text-muted-foreground">
                        De l'idée à la mise en production d'un SaaS exploitable
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Internalisation d'outils</h3>
                      <p className="text-muted-foreground">
                        Reprenez le contrôle de vos outils métiers stratégiques
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Centralisation des données</h3>
                      <p className="text-muted-foreground">
                        Regroupez vos informations dans un système unique et cohérent
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Processus sur-mesure</h3>
                      <p className="text-muted-foreground">
                        Un outil adapté à votre organisation, pas l'inverse
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Efficacité opérationnelle</h3>
                      <p className="text-muted-foreground">
                        Gagnez du temps sur vos tâches quotidiennes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Wrench className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Construction d'ERP métier sur-mesure
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Un ERP conçu pour s'adapter à votre façon de travailler, et non l'inverse.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Lorsque les solutions du marché sont trop rigides ou inadaptées à vos processus, nous concevons des ERP métiers sur-mesure pour centraliser vos données, structurer vos opérations et gagner en efficacité.
                </p>
                <p className="text-lg text-muted-foreground">
                  Gestion interne, suivi des opérations, facturation, reporting : nous développons des outils simples à utiliser, parfaitement alignés avec votre organisation et vos enjeux quotidiens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 - Sites web */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Site web sur-mesure orienté business
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Un site web pensé comme un véritable outil au service de votre activité.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous concevons des sites sur-mesure qui vont au-delà du simple aspect visuel : génération de leads, mise en valeur de votre offre, tunnels de conversion ou espaces dédiés.
                </p>
                <p className="text-lg text-muted-foreground">
                  Chaque site est conçu pour être rapide, clair, évolutif et aligné avec vos objectifs business, afin de maximiser son impact et sa rentabilité.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Génération de leads</h3>
                      <p className="text-muted-foreground">
                        Convertissez vos visiteurs en prospects qualifiés
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Tunnels de conversion</h3>
                      <p className="text-muted-foreground">
                        Optimisez le parcours utilisateur pour maximiser les résultats
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Performance & SEO</h3>
                      <p className="text-muted-foreground">
                        Sites rapides et bien référencés pour un impact maximal
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
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un projet en tête ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Échangeons sur vos besoins et trouvons ensemble la solution adaptée à votre entreprise.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Discutons de votre projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

