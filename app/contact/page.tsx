import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, formatAddress } from "@/lib/constants";

export default function Contact() {
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
              💬 Parlons de votre projet
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Démarrons la conversation
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Vous avez un projet en tête ? Partagez-nous vos besoins et vos objectifs. Nous vous répondons rapidement avec une proposition adaptée.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-2">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">
                    Demande de devis gratuit
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">
                    Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h avec un premier retour sur votre projet
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Nos coordonnées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Téléphone</p>
                      <a
                        href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {COMPANY_INFO.address.street && COMPANY_INFO.address.street !== "Adresse de l'entreprise" && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Adresse</p>
                        <p className="text-muted-foreground">
                          {formatAddress(COMPANY_INFO.address)}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Réponse rapide</p>
                      <p className="text-muted-foreground">
                        Nous répondons sous 24h maximum
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Reassurance */}
              <Card className="bg-gradient-bg-soft border-2 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Ce qui vous attend</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Premier échange gratuit pour comprendre votre besoin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Devis détaillé et transparent sous 48h</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Accompagnement personnalisé du début à la fin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Zéro engagement jusqu'à la signature</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

