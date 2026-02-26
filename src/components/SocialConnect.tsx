import { Star, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const SocialConnect = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-28 pb-24 md:pt-32 md:pb-28 bg-background">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-2xl md:text-[28px] font-semibold text-foreground mb-7 tracking-wide">
          {t("social.title")}
        </h2>

        <p className="text-muted-foreground leading-[1.9] mb-14 max-w-md mx-auto text-[15px]">
          {t("social.p1")}
          <br className="hidden sm:block" />
          {t("social.p2")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-10 border-border/80 transition-all duration-500 hover:shadow-md">
            <a href="https://share.google/esqnxP77XkDHBDhED" target="_blank" rel="noopener noreferrer">
              <Star className="w-4 h-4 opacity-60" />
              {t("social.google")}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-10 border-border/80 transition-all duration-500 hover:shadow-md">
            <a href="https://www.instagram.com/elsol.mindbody.alchemy/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4 opacity-60" />
              Instagram
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-10 border-border/80 transition-all duration-500 hover:shadow-md">
            <a href="https://www.facebook.com/elsol.massages" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4 opacity-60" />
              Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;
