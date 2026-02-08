import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
              💬 Parlons de votre projet
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Démarrons la conversation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
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
              <ContactInfo />
              
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

