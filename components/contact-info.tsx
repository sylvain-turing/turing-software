import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function ContactInfo() {
  return (
    <Card className="rounded-2xl shadow-sm border">
      <CardHeader>
        <CardTitle className="text-xl font-black text-brand-text">Nos coordonnées</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold mb-1 text-brand-text">Téléphone</p>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="text-muted-foreground hover:text-brand-primary transition-colors"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center flex-shrink-0">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold mb-1 text-brand-text">Email</p>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-muted-foreground hover:text-brand-primary transition-colors break-all"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold mb-1 text-brand-text">Réponse rapide</p>
            <p className="text-muted-foreground">
              Nous répondons sous 24h maximum
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
