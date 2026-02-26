import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-muted-foreground text-lg">
            Máte dotazy? Neváhejte se ozvat.
          </p>
        </div>

        {/* Main Contact Block */}
        <div className="bg-muted/40 rounded-2xl px-8 py-12 md:px-14 md:py-16 mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Telefon</span>
          </div>
          <a
            href="tel:+31642940546"
            className="block text-[26px] md:text-[30px] font-bold text-foreground hover:text-primary transition-colors mb-8"
          >
            +31 6 4294 0546
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="tel:+31642940546">
                <Phone className="w-4 h-4" />
                Zavolat
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="mailto:info@mobilemassage.com">
                <Mail className="w-4 h-4" />
                Napsat email
              </a>
            </Button>
          </div>

          <div className="border-t border-border/60 pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:info@mobilemassage.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary/70" />
              info@mobilemassage.com
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary/70" />
              Rotterdam & omgeving
            </span>
          </div>
        </div>

        {/* Info Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Opening Hours */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-primary/70" />
              <h3 className="text-lg font-semibold text-foreground">Pracovní doba</h3>
            </div>
            <div className="space-y-2 text-sm pl-6">
              <div className="flex justify-between max-w-xs">
                <span className="text-muted-foreground">Pondělí – Sobota</span>
                <span className="font-medium text-foreground">9:00 – 21:00</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span className="text-muted-foreground">Neděle</span>
                <span className="font-medium text-foreground">10:00 – 18:00</span>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-4 h-4 text-primary/70" />
              <h3 className="text-lg font-semibold text-foreground">Doba odpovědi</h3>
            </div>
            <div className="text-sm text-muted-foreground pl-6 space-y-1">
              <p>Na dotazy odpovídám obvykle do 24 hodin.</p>
              <p>V případě urgentní rezervace zavolejte přímo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
