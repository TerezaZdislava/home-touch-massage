import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-sea-sunset.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Serene sunset over calm ocean waves representing relaxation and peace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Profesionální mobilní masáže
            <span className="block text-primary mt-2">Přímo u vás doma</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Dopřejte si luxus odborné masážní terapie v důvěrném pohodlí vlastního domova. O vše se postarám – přivezu masážní lehátko, ručníky, oleje v bio kvalitě i relaxační hudbu.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Hluboká regenerace</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Profesionalita</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Uvolnění těla i mysli</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/booking">
              <Button variant="hero" size="lg">
                Rezervovat masáž
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Všechny služby
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
