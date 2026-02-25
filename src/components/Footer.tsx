import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "#domov") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-semibold text-lg text-foreground">Mobilní masáže</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dopřejte si prvotřídní péči bez nutnosti kamkoliv cestovat. Přináším relaxaci přímo do vašeho obývacího pokoje, abyste si mohli odpočinek vychutnat v maximálním pohodlí.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Odkazy</h3>
            <ul className="space-y-2">
              <li>
                <a href="#domov" onClick={(e) => scrollTo(e, "#domov")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Domů
                </a>
              </li>
              <li>
                <a href="#sluzby" onClick={(e) => scrollTo(e, "#sluzby")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Služby
                </a>
              </li>
              <li>
                <a href="#rezervace" onClick={(e) => scrollTo(e, "#rezervace")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Rezervace
                </a>
              </li>
              <li>
                <a href="#kontakt" onClick={(e) => scrollTo(e, "#kontakt")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+31642940546" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +31 6 4294 0546
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@mobilemassage.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@mobilemassage.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Rotterdam & omgeving
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Pracovní doba</h3>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p>Pondělí - sobota</p>
                <p className="font-medium">9:00 – 21:00</p>
                <p className="mt-2">Neděle</p>
                <p className="font-medium">10:00 – 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mobilní masáže. Všechna práva vyhrazena. Profesionální masérské služby.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
