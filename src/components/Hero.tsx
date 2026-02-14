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
            Masáže pro funkční a vyvážené tělo
          </h1>
          <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-8">Úleva, regenerace a návrat do pohybu – přímo u Vás doma</h3>

          {/* Value Props */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Přijedu za vámi</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Vlastní vybavení</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Individuální přístup</span>
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
