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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d4a73] via-[#116cb1] to-[#0f5f9e] py-24 md:py-32">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle2 className="h-20 w-20 text-white mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Merci pour votre message !
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto drop-shadow-md">
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
