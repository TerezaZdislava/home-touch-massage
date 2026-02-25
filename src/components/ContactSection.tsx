import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Máte dotazy? Neváhejte se ozvat. Odpovídám obvykle během 24 hodin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-border shadow-md">
            <CardContent className="p-6 space-y-4">
              <a href="tel:+31642940546" className="flex items-start gap-3 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <div className="font-medium">+31 6 4294 0546</div>
                </div>
              </a>

              <a href="mailto:info@mobilemassage.com" className="flex items-start gap-3 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">info@mobilemassage.com</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Oblast působení</div>
                  <div className="font-medium">Rotterdam & omgeving</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Pracovní doba
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pondělí – Sobota</span>
                <span className="font-medium">9:00 – 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Neděle</span>
                <span className="font-medium">10:00 – 18:00</span>
              </div>
              <p className="text-muted-foreground pt-2">Na vyžádání je možné domluvit i termín mimo pracovní dobu.</p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-md bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Doba odpovědi</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Na všechny dotazy odpovídám obvykle do 24 hodin. V případě urgentní rezervace zavolejte přímo.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
