import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, Wind, Sparkles, Users, Leaf, Clock } from "lucide-react";
import sportsImage from "@/assets/sports-massage.jpg";
import antiStressImage from "@/assets/antistress-massage.jpg";
import couplesImage from "@/assets/couples-massage.jpg";
import swedishImage from "@/assets/swedish-massage.jpg";
import deepTissueImage from "@/assets/deep-tissue-massage.jpg";
import aromaImage from "@/assets/aroma-massage.jpg";

const services = [
  {
    icon: Activity,
    title: "Sportovní a regenerační péče",
    description: "Cílená úleva pro sportovce a aktivní životní styl. Ideální volba pro regeneraci po tréninku i jako účinná prevence zranění. Pomáhám vašim svalům k rychlejší obnově a lepšímu výkonu.",
    duration: "60 min",
    price: "$80",
    image: sportsImage,
  },
  {
    icon: Wind,
    title: "Antistresová terapie",
    description: "Jemné techniky v doprovodu aromaterapie pro hluboké uvolnění těla i mysli. Kombinace citlivého doteku a esenciálních olejů, která vás zbaví napětí a navrátí vám pocit vnitřního klidu.",
    duration: "60 min",
    price: "$75",
    image: antiStressImage,
  },
  {
    icon: Users,
    title: "Masáže pro páry",
    description: "Masáž pro dva: Sdílejte zážitek relaxace se svým partnerem. Dvě masáže, jeden společný okamžik klidu. Prožijte uvolnění bok po boku a odneste si společný pocit harmonie.",
    duration: "60 min each",
    price: "$120 (50% off 2nd person)",
    image: couplesImage,
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Péče na míru: Masáž navržená přesně pro vaše potřeby. 
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Věřím v jedinečnost každého těla. Proto každé ošetření přizpůsobuji vašemu aktuálnímu stavu a cílům, kterých chcete dosáhnout.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} therapy session`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="default" size="lg">
              Všechny služby
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
