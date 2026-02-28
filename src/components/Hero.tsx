import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-sea-sunset.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="domov" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Serene sunset over calm ocean waves representing relaxation and peace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-8">{t("hero.subtitle")}</h3>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-sm">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{t("hero.val1")}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-sm">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{t("hero.val2")}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{t("hero.val3")}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" onClick={() => scrollTo("#rezervace")}>
              {t("hero.cta1")}
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollTo("#sluzby")}>
              {t("hero.cta2")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
