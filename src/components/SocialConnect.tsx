import { Star, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialConnect = () => {
  return (
    <section className="py-24 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
          Zůstaňme ve spojení
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg mx-auto">
          Na sociálních sítích sdílím ukázky práce, tipy k regeneraci a péči o tělo.
          <br className="hidden sm:block" />
          Na Google najdete hodnocení a zkušenosti klientů.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="https://share.google/esqnxP77XkDHBDhED" target="_blank" rel="noopener noreferrer">
              <Star className="w-4 h-4" />
              Google recenze
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="https://www.instagram.com/elsol.mindbody.alchemy/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="https://www.facebook.com/elsol.massages" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;
