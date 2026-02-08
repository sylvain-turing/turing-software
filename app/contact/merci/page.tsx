import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { ContactInfo } from "@/components/contact-info";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Merci pour votre message",
  description: "Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Merci pour votre message !
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Nous avons bien reçu votre demande. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Contact Info */}
            <ContactInfo />

            {/* Next Steps */}
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Et maintenant ?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous analysons votre demande et vous proposerons un premier échange gratuit pour mieux comprendre votre projet. 
                En attendant, n'hésitez pas à explorer nos services ou à revenir sur notre site.
              </p>
              <Button asChild size="lg">
                <Link href="/" className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Retour à l'accueil
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
