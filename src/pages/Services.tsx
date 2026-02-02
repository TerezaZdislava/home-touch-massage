import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, Wind, Sparkles, Users, Dumbbell, Leaf, Clock } from "lucide-react";
import sportsImage from "@/assets/sports-massage.jpg";
import antiStressImage from "@/assets/antistress-massage.jpg";
import couplesImage from "@/assets/couples-massage.jpg";
import swedishImage from "@/assets/swedish-massage.jpg";
import deepTissueImage from "@/assets/deep-tissue-massage.jpg";
import aromaImage from "@/assets/aroma-massage.jpg";

const allServices = [
  {
    icon: Activity,
    title: "Sportovní a regenerační péče",
    description: "Cílená úleva pro svaly sportovců a aktivních lidí. Tato intenzivní péče se zaměřuje na problematické partie, napomáhá regeneraci po výkonu a slouží jako účinná prevence zranění. Ideální volba pro běžce, fitness nadšence a každého, kdo žije v pohybu.“,
    duration: "60 min",
    price: "$80",
    image: sportsImage,
    benefits: ["Svalová regenerace", "Prevence zranění", "Zvýšení flexibility", "Úleva od bolesti"],
  },
  {
    icon: Wind,
    title: "Antistresová masáž",
    description: "Jemné, plynulé techniky v kombinaci s aromaterapií pro hluboké uvolnění těla i mysli. Tato masáž pomáhá zmírňovat úzkost, zlepšuje kvalitu spánku a navrací vnitřní rovnováhu. Je ideální volbou pro vytížené profesionály i pro každého, kdo hledá únik od každodenního stresu.“,
    duration: "60 min",
    price: "$75",
    image: antiStressImage,
    benefits: ["Snížení stresu", "Kvalitnější spánek", "Jasná mysl", "Emoční rovnováha"],
  },
  {
    icon: Sparkles,
    title: "Masáž na míru",
    description: "Osobní přístup a péče přizpůsobená vašim jedinečným potřebám. Při každém setkání kombinuji různé techniky podle vašich preferencí a aktuálních problematických partií. Tento flexibilní přístup zajišťuje, že vaše tělo dostane přesně to, co v danou chvíli nejvíce potřebuje.“,
    duration: "60 min",
    price: "$85",
    image: swedishImage,
    benefits: ["Osobní přístup", "Kombinace technik na míru", "Řešení konkrétních potíží", "Péče, která se vyvíjí s vámi"],
  },
  {
    icon: Users,
    title: "Masáž pro dva",
    description: "Sdílejte zážitek hluboké relaxace se svým partnerem, blízkým přítelem nebo členem rodiny. Dvě masáže probíhající po sobě nebo současně přímo u vás doma. Ideální způsob, jak prohloubit vzájemné pouto a společně si vychutnat profesionální terapeutickou péči.",
    duration: "60 min each",
    price: "$120 (50% sleva pro druhou osobu)",
    image: couplesImage,
    benefits: ["Sdílený zážitek", "Společně strávený čas", "Sleva 50 % na druhou masáž", "Flexibilní plánování"],
  },
  {
    icon: Dumbbell,
    title: "Hloubková regenerace tkání",
    description: "Intenzivní 90minutová terapie zaměřená na hloubkovou práci se svaly a celkovou obnovu těla. Tato masáž je ideální pro ty, kteří se potýkají s chronickým napětím, mají fyzicky náročné povolání nebo procházejí obdobím vysokého stresu. Ošetření nejde jen po povrchu, ale proniká do hloubky, aby přineslo skutečnou a trvalou úlevu.“,
    duration: "90 min",
    price: "$110 (15% off)",
    image: deepTissueImage,
    benefits: ["Hloubkové uvolnění svalů", "Úleva od chronické bolesti", "Prodloužená délka terapie", "Komplexní regenerace těla"],
  },
  {
    icon: Leaf,
    title: "Masáž s aromaterapií",
    description: "Hluboce uklidňující prožitek využívající pečlivě vybrané esenciální oleje pro umocnění celkové relaxace. Tato jemná masáž propojuje sílu aromaterapie s konejšivými technikami. Je ideální volbou pro večerní hodiny, kdy napomáhá ke klidnému spánku a úplnému vypnutí po náročném dni.“,
    duration: "60 min",
    price: "$80",
    image: aromaImage,
    benefits: ["Včetně esenciálních olejů", "Hluboké uvolnění", "Kvalitnější spánek", "Blahodárné účinky aromaterapie"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Masérské služby na míru vašim cílům
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Profesionální masáže, které naslouchají vašim potřebám. Kompletní péči včetně špičkového vybavení a olejů přivezu přímo k vám domů.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {allServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
                    <div className="grid md:grid-cols-5 gap-6">
                      {/* Image */}
                      <div className="md:col-span-2 h-64 md:h-auto overflow-hidden">
                        <img
                          src={service.image}
                          alt={`${service.title} therapy`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <CardContent className="md:col-span-3 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {service.duration}
                              </span>
                              <span className="text-lg font-semibold text-primary">{service.price}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-foreground mb-2">Výhody:</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.benefits.map((benefit, i) => (
                              <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link to="/booking">
                          <Button variant="default" className="mt-2">
                            Rezervovat službu
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mobile Service Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mobilní masérské služby
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Přináším atmosféru lázní přímo k vám. Ke každé masáži zajišťuji profesionální lehátko, čisté ručníky, oleje v bio kvalitě i uklidňující hudbu. Vy připravíte pouze prostor, o vše ostatní se postarám já.
                Místo stresu z cestování nebo hledání parkování vás čeká jen ničím nerušená relaxace v bezpečí vašeho domova.
              </p>
              <Link to="/booking">
                <Button variant="hero" size="lg">
                  Rezervujte si domácí masáž
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
