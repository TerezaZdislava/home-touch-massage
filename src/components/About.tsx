import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Calendar, Shield } from "lucide-react";
import therapistProfile from "@/assets/therapist-profile.jpg";

const About = () => {
  const qualities = [
    { icon: Shield, text: "Odborná praxe a vzdělání" },
    { icon: CheckCircle2, text: "Zkušenosti z lázní i soukromé praxe" },
    { icon: CheckCircle2, text: "Respekt k tělu a jeho hranicím" },
    { icon: Clock, text: "Flexibilní termíny" },
  ];

  return (
    <>
      {/* Main About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-garamond font-bold text-foreground mb-12 text-center">
              Jak pracuji
            </h2>
            
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-8 text-center">
                Masáž, která má smysl
              </h3>
              
              {/* Side-by-side layout: Photo + Text */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
                {/* Profile Photo */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative group">
                    <img 
                      src={therapistProfile}
                      alt="Professional massage therapist portrait"
                      className="w-full max-w-sm rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                      style={{
                        boxShadow: '0 10px 40px -10px hsl(var(--primary) / 0.3)'
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-6 text-lg text-foreground leading-relaxed">
                  <p>
                    Pracuji cíleně tam, kde je tělo ztuhlé, přetížené nebo omezené v pohybu.
                    Pokud není potřeba řešit konkrétní problém, dopřeji mu klidnou, plynulou péči, která umožní hluboké uvolnění.
                  </p>
                  <p>
                    Každé ošetření přizpůsobuji aktuálnímu stavu – ne podle šablony, ale podle reality daného dne.
                    Mým cílem je, aby masáž nebyla jen krátkou úlevou, ale prostorem pro obnovu, rovnováhu a dlouhodobou péči.
                  </p>
                  <p>Vítejte v mém světě odpočinku a obnovy. ☀️</p>
                  <p>
                    Vycházím z praxe v salonech a lázních, vlastní zkušenosti s pohybem a práce s různými typy těl.
                    Každé ošetření přizpůsobuji tomu, co tělo skutečně potřebuje v daný den – někdy je to cílená práce se ztuhlostí, jindy zpomalení a prostor pro regeneraci.
                  </p>
                  <p>
                    Respektuji hranice těla, pracuji soustředěně a s důrazem na skutečný účinek – ne jen krátkodobý pocit úlevy.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {qualities.map((quality, index) => {
                const Icon = quality.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground font-medium leading-relaxed">{quality.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-garamond italic text-center text-muted-foreground py-8 border-t border-b border-border">
              „Regenerace není únik od výkonu. Je jeho předpokladem."
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
