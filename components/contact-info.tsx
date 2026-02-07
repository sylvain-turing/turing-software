import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function ContactInfo() {
  return (
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
  );
}
