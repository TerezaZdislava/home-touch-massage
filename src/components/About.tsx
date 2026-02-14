import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ChevronDown, Dumbbell, Monitor, Wrench, Battery, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import therapistProfile from "@/assets/therapist-profile.jpg";

const About = () => {
  const [storyExpanded, setStoryExpanded] = useState(false);

  const suitableFor = [
    { icon: Dumbbell, text: "sportujete nebo jste fyzicky aktivní" },
    { icon: Wrench, text: "pracujete manuálně" },
    { icon: Monitor, text: "trávíte dlouhé hodiny u počítače" },
    { icon: Battery, text: "cítíte ztuhlost, bolest nebo únavu" },
    { icon: Heart, text: "chcete tělu dopřát pravidelnou péči a obnovu" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-garamond font-bold text-foreground mb-16 text-center">
            Jak pracuji
          </h2>

          {/* Section 1: Masáž, která má smysl */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-6 text-center">
              Masáž, která má smysl
            </h3>
            <div className="max-w-3xl mx-auto space-y-5 text-lg text-foreground leading-relaxed text-center">
              <p>
                Pracuji cíleně tam, kde je tělo ztuhlé, přetížené nebo omezené v pohybu.
                Pokud není potřeba řešit konkrétní problém, dopřeji mu klidnou, plynulou péči, která umožní hluboké uvolnění.
              </p>
              <p>
                Každé ošetření přizpůsobuji aktuálnímu stavu – ne podle šablony, ale podle reality daného dne.
                Mým cílem je, aby masáž nebyla jen krátkou úlevou, ale prostorem pro obnovu, rovnováhu a dlouhodobou péči.
              </p>
              <p>Vítejte v mém světě odpočinku a obnovy. ☀️</p>
            </div>
          </div>

          {/* Section 2: Pro koho je masáž vhodná */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-8 text-center">
              Pro koho je masáž vhodná
            </h3>
            <p className="text-lg text-foreground text-center mb-8 max-w-2xl mx-auto">
              Masáž je vhodná pro vás, pokud:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {suitableFor.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: O mně + Photo */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-8 text-center">
              O mně
            </h3>
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
              {/* Photo */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative group">
                  <img
                    src={therapistProfile}
                    alt="Professional massage therapist portrait"
                    className="w-full max-w-xs rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ boxShadow: '0 10px 40px -10px hsl(var(--primary) / 0.3)' }}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10" />
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-3 space-y-5 text-lg text-foreground leading-relaxed">
                <p>
                  Vycházím z praxe v salonech a lázních i ze zkušeností s různými typy těl a zátěží.
                  Masáž vnímám jako nástroj, který pomáhá tělu znovu fungovat lehčeji, volněji a s menším napětím.
                </p>
                <p>
                  Respektuji hranice těla, pracuji soustředěně a s důrazem na skutečný účinek – ne jen krátkodobý pocit úlevy.
                </p>

                {/* Expandable story */}
                <div>
                  <button
                    onClick={() => setStoryExpanded(!storyExpanded)}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors mt-2"
                  >
                    👉 Přečíst celý příběh cesty El Sol
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${storyExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${storyExpanded ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="space-y-4 text-base text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6">
                      <p>
                        Od dětství mě fascinovalo, co všechno lidské tělo dokáže – jeho síla, adaptabilita, odolnost i schopnost precizně reagovat na dotyk, dech či pohyb. Pozoroval jsem lidi kolem sebe: sportovce, tanečníky, jogíny i bojovníky. Zajímal mě jejich skrytý potenciál i to, jakým způsobem propojují tělo s myslí. Postupně jsem začal vnímat lidskou schránku jako dar, který si zaslouží hlubokou péči, údržbu a neutuchající respekt.
                      </p>
                      <p>
                        V mládí jsem prozkoumával nejrůznější formy pohybu a cvičení, čímž jsem přirozeně objevoval i svět masáží a strečinku. Intuitivně jsem začal uvolňovat svalové napětí sobě i ostatním. Pozitivní ohlasy okolí mě utvrdily v tom, že mám pro dotyk přirozený cit. To mě ve dvaceti letech přivedlo k prvnímu masérskému kurzu, kde jsem poprvé pocítil, že tato cesta se mnou skutečně rezonuje.
                      </p>
                      <p>
                        Moje první zásadní profesní zkušenost přišla v pivních lázních. Tam jsem se učil pracovat s rozmanitými typy postav, různými stupni únavy i specifickými blokádami. Získal jsem zde potřebnou jistotu, rytmus a schopnost naslouchat potřebám klienta.
                      </p>
                      <p>
                        Následně mě život zavedl na Island – do proslulé Modré laguny. Práce v tomto unikátním prostředí mě seznámila s úplně jinou dimenzí péče. Vodní masáže mě naučily ještě větší citlivosti, vnitřnímu klidu a preciznosti.
                      </p>
                      <p>
                        Cennou zkušeností byla také spolupráce s lektorkou tradiční čínské medicíny, která mě posunula k hlubšímu porozumění energetice těla.
                      </p>
                      <p>
                        Lidé se ke mně začali vracet a jejich zpětná vazba mě utvrdila v tom, že masáž není jen služba, ale rituál, který navrací tělu lehkost a funkčnost.
                      </p>
                      <p>
                        Dnes všechny tyto zkušenosti propojuji ve vlastní praxi El Sol. Ta vychází z principů jednoduchosti, plné pozornosti a respektu k individuálním potřebám každého těla. Masáž vnímám jako harmonickou kombinaci techniky, vjemu a intuice. Mým cílem je, aby uvolněné tělo přineslo hluboký klid i vaší mysli.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl font-garamond italic text-center text-muted-foreground py-8 border-t border-b border-border">
            „Regenerace není únik od výkonu. Je jeho předpokladem."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
