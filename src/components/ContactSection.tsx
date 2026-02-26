import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Máte dotazy? Neváhejte se ozvat.
          </p>
        </div>

        {/* Main Contact Block */}
        <div className="bg-secondary/70 rounded-[22px] px-8 py-16 md:px-16 md:py-20 mb-0 text-center" style={{ boxShadow: '0 6px 40px -10px hsl(25 70% 47% / 0.08)' }}>
          <span className="text-xs text-muted-foreground/70 uppercase tracking-[0.2em] mb-4 block">Telefon</span>
          <a
            href="tel:+31642940546"
            className="block text-[32px] md:text-[36px] font-bold text-foreground hover:text-accent tracking-[0.04em] transition-colors duration-500 mb-10"
          >
            +31 6 4294 0546
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-10 transition-all duration-500 hover:shadow-md">
              <a href="tel:+31642940546">
                <Phone className="w-4 h-4 opacity-70" />
                Zavolat
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-10 border-border/80 transition-all duration-500 hover:shadow-md">
              <a href="mailto:info@mobilemassage.com">
                <Mail className="w-4 h-4 opacity-70" />
                Napsat email
              </a>
            </Button>
          </div>

          <div className="border-t border-border/40 pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:info@mobilemassage.com" className="flex items-center gap-2 hover:text-accent transition-colors duration-400">
              <Mail className="w-3.5 h-3.5 opacity-50" />
              info@mobilemassage.com
            </a>
            <span className="hidden sm:inline text-border/60">·</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 opacity-50" />
              Rotterdam & omgeving
            </span>
          </div>
        </div>

        {/* Info Row */}
        <div className="pt-24 md:pt-28 grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Opening Hours */}
          <div className="space-y-5">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-[0.15em]">Jsem tu pro vás v těchto časech</p>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 opacity-40" />
              Pracovní doba
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between max-w-xs">
                <span className="text-muted-foreground">Pondělí – Sobota</span>
                <span className="font-semibold text-foreground">9:00 – 21:00</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span className="text-muted-foreground">Neděle</span>
                <span className="font-semibold text-foreground">10:00 – 18:00</span>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="space-y-5">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-[0.15em]">&nbsp;</p>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5 opacity-40" />
              Doba odpovědi
            </h3>
            <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
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
