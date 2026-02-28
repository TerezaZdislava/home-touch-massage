import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSvg from "@/assets/logo.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "#domov", label: t("nav.home") },
    { href: "#sluzby", label: t("nav.services") },
    { href: "#rezervace", label: t("nav.reservation") },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (href === "#domov") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#domov"
            onClick={(e) => handleNavClick(e, "#domov")}
            className="flex items-center space-x-2 text-foreground"
          >
            <img src={logoSvg} alt="El Sol logo" className="w-10 h-10" />
            <span className="font-semibold text-lg text-foreground hidden sm:inline">{t("nav.brand")}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Switcher + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <button
                onClick={() => setLang("cz")}
                className={`transition-colors hover:text-foreground ${lang === "cz" ? "font-bold text-foreground" : ""}`}
              >
                CZ
              </button>
              <span className="mx-1.5 text-border">|</span>
              <button
                onClick={() => setLang("en")}
                className={`transition-colors hover:text-foreground ${lang === "en" ? "font-bold text-foreground" : ""}`}
              >
                EN
              </button>
            </div>

            <a href="tel:+31642940546" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">+31 6 4294 0546</span>
            </a>
            <a href="#rezervace" onClick={(e) => handleNavClick(e, "#rezervace")}>
              <Button variant="default" size="default">{t("nav.bookNow")}</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <button
                onClick={() => setLang("cz")}
                className={`transition-colors ${lang === "cz" ? "font-bold text-foreground" : ""}`}
              >
                CZ
              </button>
              <span className="mx-1 text-border">|</span>
              <button
                onClick={() => setLang("en")}
                className={`transition-colors ${lang === "en" ? "font-bold text-foreground" : ""}`}
              >
                EN
              </button>
            </div>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+31642940546" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">+31 6 4294 0546</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
