import { Phone, Mail, MapPin, Clock, FileUser, House } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSvg from "@/assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

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
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoSvg} alt="El Sol logo" className="w-10 h-10" />
              <span className="font-semibold text-lg text-foreground">{t("footer.brand")}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.brandDesc")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#domov" onClick={(e) => scrollTo(e, "#domov")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#sluzby" onClick={(e) => scrollTo(e, "#sluzby")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#rezervace" onClick={(e) => scrollTo(e, "#rezervace")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.reservation")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FileUser className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  IČO 02931621
                </a>
              </li>
              <li className="flex items-start gap-2">
                <House className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Revoluční 504, 357 34 Nové Sedlo (OSVČ)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+420720634900" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +420 720 634 900
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:elsol.masaze@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  elsol.masaze@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Služby poskytovány v Praze a okolí</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.hours")}</h3>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p>{t("footer.monSat")}</p>
                <p className="font-medium">9:00 – 21:00</p>
                <p className="mt-2">{t("footer.sun")}</p>
                <p className="font-medium">10:00 – 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
