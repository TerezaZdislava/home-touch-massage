import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Calendar, Shield } from "lucide-react";
import therapistProfile from "@/assets/therapist-profile.jpg";

const About = () => {
  const qualities = [
    { icon: Shield, text: "Certifikovaný profesionál" },
    { icon: CheckCircle2, text: "500+ klientů a stálých zákazníků" },
    { icon: CheckCircle2, text: "Empatický přístup – Vaše pohodlí je prioritou" },
    { icon: Clock, text: "Časově flexibilní – Večery & víkendy" },
  ];

  return (
    <>
      {/* Main About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-garamond font-bold text-foreground mb-12 text-center">
              Místo, kde začíná úleva
            </h2>
            
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-8 text-center">
                Síla doteku, hloubka pozornosti
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
                    Od dětství mě fascinovalo, co všechno lidské tělo dokáže – jeho síla, adaptabilita, odolnost i schopnost precizně reagovat na dotyk, dech či pohyb. Pozoroval jsem lidi kolem sebe: sportovce, tanečníky, jogíny i bojovníky. Zajímal mě jejich skrytý potenciál i to, jakým způsobem propojují tělo s myslí. Postupně jsem začal vnímat lidskou schránku jako dar, který si zaslouží hlubokou péči, údržbu a neutuchající respekt.
                  </p>
                  <p>
                    V mládí jsem prozkoumával nejrůznější formy pohybu a cvičení, čímž jsem přirozeně objevoval i svět masáží a strečinku. Intuitivně jsem začal uvolňovat svalové napětí sobě i ostatním. Pozitivní ohlasy okolí mě utvrdily v tom, že mám pro dotyk přirozený cit. To mě ve dvaceti letech přivedlo k prvnímu masérskému kurzu, kde jsem poprvé pocítil, že tato cesta se mnou skutečně rezonuje.
                  </p>
                  <p>
                    Moje první zásadní profesní zkušenost přišla v pivních lázních. Tam jsem se učil pracovat s rozmanitými typy postav, různými stupni únavy i specifickými blokádami. Získal jsem zde potřebnou jistotu, rytmus a schopnost naslouchat potřebám klienta. Následně mě život zavedl na Island – do proslulé Modré laguny. Práce v tomto unikátním prostředí mě seznámila s úplně jinou dimenzí péče. Vodní masáže mě naučily ještě větší citlivosti, vnitřnímu klidu a preciznosti.
                  </p>
                  <p>Cennou zkušeností byla také spolupráce s lektorkou tradiční čínské medicíny, která mě posunula k hlubšímu porozumění energetice těla. Lidé se ke mně začali vracet a jejich zpětná vazba mě utvrdila v tom, že masáž není jen služba, ale rituál, který navrací tělu lehkost a funkčnost.</p>
                  <p>Dnes všechny tyto zkušenosti propojuji ve vlastní praxi El Sol. Ta vychází z principů jednoduchosti, plné pozornosti a respektu k individuálním potřebám každého těla. Masáž vnímám jako harmonickou kombinaci techniky, vjemu a intuice. Mým cílem je, aby uvolněné tělo přineslo hluboký klid i vaší mysli.</p>
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
              „Masáž, ke které se budete chtít vracet. Protože pravidelnost je to, co vaše tělo skutečně ocení."
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
