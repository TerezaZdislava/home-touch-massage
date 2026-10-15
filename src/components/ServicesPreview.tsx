import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, User, Check, Car, MessageCircle, Armchair, BedSingle, Layers } from "lucide-react";

// Section copy, keyed by language (uses the existing CZ/EN switcher state).
const copy = {
  cz: {
    eyebrow: "PRO KOHO JE EL SOL",
    title: "Masáž na míru",
    subtitle: "Kde se potkáme",
    intro: "Ať potřebujete regeneraci pro celý tým, nebo individuální péči pro sebe, přijedu za vámi nebo se domluvíme na masáži v masérně.",
    b2bTitle: "Firmy a týmy",
    b2bDesc: "Krátká masáž na židli přímo ve vaší kanceláři. Zaměstnanci nemusí nikam odcházet — přijedu s vlastním vybavením a postarám se o celý průběh.",
    b2bBenefits: ["20minutová masáž na židli na osobu", "Přes oblečení, bez oleje", "Veškeré vybavení zajistím", "Minimální rezervace: 3 hodiny", "Vhodné pro kanceláře, týmy a firemní wellbeing"],
    b2bCta: "Firemní nabídka a ceník",
    b2cTitle: "Individuální klienti",
    b2cDesc: "Masáž u vás doma nebo v masérně dle domluvy. Přivezu vlastní lehátko a oleje a přístup přizpůsobím tomu, v jakém stavu je vaše tělo právě ten den.",
    b2cBenefits: ["Masáž přizpůsobená vašim aktuálním potřebám", "Výjezd k vám domů s vlastním vybavením", "Masáže v délce 30, 60 nebo 90 minut dle místa a dostupnosti", "Masérna k dispozici dle domluvy"],
    b2cCta: "Individuální masáže a ceník",
    roomNote: "Masérna je k dispozici dle domluvy.",
    b2bHeading: "Regenerace přímo na pracovišti",
    b2bIntro: "Krátká, cílená masáž na židli, přes oblečení a bez oleje. Zaměstnanci nemusí nikam odcházet — přijedu přímo k vám s vlastním vybavením a postarám se o celý průběh.",
    b2bFeatures: ["Masáž vsedě na židli, přes oblečení a bez oleje", "20 minut na osobu", "Vlastní vybavení, bez nutnosti cokoliv zajišťovat", "Minimální délka výjezdu: 3 hodiny"],
    durationCol: "Délka výjezdu",
    priceCol: "Cena",
    capacityCol: "Kapacita",
    b2bRows: [
      ["3 hodiny", "7 000 Kč", "přibližně 8–9 osob"],
      ["4 hodiny", "8 500 Kč", "přibližně 10–11 osob"],
      ["5 hodin", "10 000 Kč", "přibližně 13–14 osob"],
    ],
    fromPrice: "Od 7 000 Kč / minimálně 3hodinový blok",
    b2bDisclaimer: "Ceny jsou za jeden výjezd. Doprava se účtuje podle vzdálenosti. Skutečný počet obsloužených zaměstnanců závisí na organizaci programu a střídání jednotlivých osob.",
    quoteCta: "Nezávazná poptávka",
    quoteNote: "Domluvíme rozsah programu, termín a lokalitu.",
    gearHeading: "Vlastní vybavení, přímo u vás",
    gearDesc: "Na masáž přijíždím se vším potřebným. Podle typu masáže mám k dispozici přenosnou masérskou židli, masérské lehátko, thajskou podložku i doplňky na baňkování. Nemusíte nic zajišťovat.",
    gear: ["Masérská židle", "Masérské lehátko", "Thajská podložka"],
    indHeading: "Individuální masáže",
    ind: [
      ["30 min", "750 Kč", "Cílená masáž jedné konkrétní oblasti, například nohou, šíje nebo lopatek, případně krátký strečink. Pouze v masérně – výjezdy k vám domů se u 30minutové masáže nenabízejí."],
      ["60 min", "990 Kč", "Cílená práce na konkrétní oblasti nebo udržovací masáž."],
      ["90 min", "1 390 Kč", "Vyvážená varianta s dostatkem času na důkladné ošetření i celkové uvolnění."],
    ],
    book: "Rezervovat",
    surchargeTitle: "Příplatek za mobilní výjezd podle vzdálenosti",
    surcharge: [["Do přibližně 7 km", "+100 Kč"], ["Přibližně 7–16 km", "+200 Kč"], ["Nad přibližně 16 km / vzdálenější lokality", "+300 Kč"]],
    statement: "„Masáž je vždy přizpůsobena vašemu aktuálnímu stavu. Délka určuje pouze množství času, které tělu věnujeme. Styl masáže a přístup zůstávají stejné.“",
  },
  en: {
    eyebrow: "WHO IS EL SOL FOR?",
    title: "Massage Tailored to You",
    subtitle: "Where We Meet",
    intro: "Whether you're looking for recovery sessions for your team or a personalized massage for yourself, I can come to you or arrange a session in the massage room.",
    b2bTitle: "Businesses & Teams",
    b2bDesc: "Short chair massages delivered directly at your workplace. Employees don't need to go anywhere — I bring my own equipment and take care of the entire process.",
    b2bBenefits: ["20-minute chair massage per person", "Performed over clothing, without oil", "All necessary equipment provided", "Minimum booking: 3 hours", "Suitable for offices, teams, and workplace wellbeing initiatives"],
    b2bCta: "Corporate Services & Pricing",
    b2cTitle: "Individual Clients",
    b2cDesc: "Enjoy a massage at home or arrange a session in the massage room. I bring my own massage table and oils, adapting each session to how your body feels that day.",
    b2cBenefits: ["Personalized massage tailored to your current needs", "Home visits with my own equipment", "Massage sessions of 30, 60, or 90 minutes, subject to location and availability", "Massage room available by arrangement"],
    b2cCta: "Individual Massages & Pricing",
    roomNote: "Massage room appointments are available by arrangement.",
    b2bHeading: "Recovery at Your Workplace",
    b2bIntro: "Short, targeted chair massages performed over clothing and without oil. Employees don't need to leave the workplace — I come directly to you with my own equipment and manage the entire process.",
    b2bFeatures: ["Chair massage performed over clothing, without oil", "20 minutes per person", "All equipment provided", "Minimum booking: 3 hours"],
    durationCol: "Duration",
    priceCol: "Price",
    capacityCol: "Capacity",
    b2bRows: [
      ["3 hours", "CZK 7,000", "approximately 8–9 people"],
      ["4 hours", "CZK 8,500", "approximately 10–11 people"],
      ["5 hours", "CZK 10,000", "approximately 13–14 people"],
    ],
    fromPrice: "From CZK 7,000 / minimum 3-hour booking",
    b2bDisclaimer: "Prices are per visit. Travel is charged according to distance. The actual number of employees served depends on the schedule and how participants are rotated.",
    quoteCta: "Request a Quote",
    quoteNote: "We'll discuss the program, timing, and location.",
    gearHeading: "My Equipment, Delivered to You",
    gearDesc: "I arrive with everything needed for your session. Depending on the type of massage, I can bring a portable massage chair, massage table, Thai massage mat, and cupping accessories. You don't need to arrange any equipment.",
    gear: ["Massage Chair", "Massage Table", "Thai Massage Mat"],
    indHeading: "Individual Massages",
    ind: [
      ["30 min", "CZK 750", "Targeted massage of one specific area, such as the legs, neck, or shoulder blades, or a short stretching session. Available only in the massage room; home visits are not offered for 30-minute sessions."],
      ["60 min", "CZK 990", "Focused work on a specific area or a maintenance massage."],
      ["90 min", "CZK 1,390", "A balanced option with enough time for thorough treatment and overall relaxation."],
    ],
    book: "Book",
    surchargeTitle: "Home visit surcharge based on distance",
    surcharge: [["Up to approximately 7 km", "+CZK 100"], ["Approximately 7–16 km", "+CZK 200"], ["Over approximately 16 km / more distant locations", "+CZK 300"]],
    statement: "“Every massage is tailored to how your body feels that day. The duration determines how much time we can dedicate to your body. The massage style and approach remain the same.”",
  },
};

const gearImages = ["/images/gear-chair.jpg", "/images/gear-table.jpg", "/images/gear-mat.jpg"];
const gearIcons = [Armchair, BedSingle, Layers];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const GearImage = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const [failed, setFailed] = useState(false);
  const Icon = gearIcons[index];
  if (failed) {
    return (
      <div className="aspect-[4/3] rounded-[18px] bg-secondary/60 flex items-center justify-center" aria-hidden="true">
        <Icon className="w-10 h-10 text-accent/70" />
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className="aspect-[4/3] w-full object-cover rounded-[18px] border border-border" />;
};

const cardShadow = "shadow-[0_4px_24px_-6px_hsl(25_70%_47%/0.08)]";

const BenefitList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((b) => (
      <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
        <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
        <span>{b}</span>
      </li>
    ))}
  </ul>
);

const ServicesPreview = () => {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section id="sluzby" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Intro */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] font-semibold text-accent mb-3">{c.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{c.title}</h2>
          <p className="text-xl text-foreground/80 mb-4">{c.subtitle}</p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">{c.intro}</p>
        </div>

        {/* Two primary options */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { Icon: Briefcase, title: c.b2bTitle, desc: c.b2bDesc, list: c.b2bBenefits, cta: c.b2bCta, target: "firmy", bg: "bg-secondary/70" },
            { Icon: User, title: c.b2cTitle, desc: c.b2cDesc, list: c.b2cBenefits, cta: c.b2cCta, target: "individualni", bg: "bg-background" },
          ].map(({ Icon, title, desc, list, cta, target, bg }) => (
            <article key={target} className={`${bg} rounded-[18px] p-8 md:p-10 ${cardShadow} flex flex-col`}>
              <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
              <div className="flex-1"><BenefitList items={list} /></div>
              <Button className="mt-8 w-full sm:w-auto self-start rounded-full px-8" onClick={() => scrollTo(target)}>
                {cta}
              </Button>
            </article>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6">{c.roomNote}</p>

        {/* B2B detail */}
        <div id="firmy" className="scroll-mt-24 mt-24">
          <p className="text-xs tracking-[0.2em] font-semibold text-accent mb-2">B2B</p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.b2bHeading}</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">{c.b2bIntro}</p>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2"><BenefitList items={c.b2bFeatures} /></div>
            <div className={`lg:col-span-3 bg-background rounded-[18px] p-6 md:p-8 ${cardShadow}`}>
              <p className="text-lg font-semibold text-primary mb-5">{c.fromPrice}</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground border-b border-border">
                    <th className="py-2 font-medium">{c.durationCol}</th>
                    <th className="py-2 font-medium text-right">{c.priceCol}</th>
                    <th className="py-2 font-medium text-right hidden sm:table-cell">{c.capacityCol}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.b2bRows.map(([d, p, cap]) => (
                    <tr key={d} className="border-b border-border/60 last:border-0">
                      <td className="py-3 text-foreground">
                        {d}
                        <span className="block sm:hidden text-xs text-muted-foreground">{cap}</span>
                      </td>
                      <td className="py-3 text-right font-semibold text-foreground whitespace-nowrap">{p}</td>
                      <td className="py-3 text-right text-muted-foreground hidden sm:table-cell">{cap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground leading-relaxed mt-5">{c.b2bDisclaimer}</p>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <Button asChild className="rounded-full px-8">
                  <a href="https://wa.me/31642940546" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                    {c.quoteCta}
                  </a>
                </Button>
                <span className="text-sm text-muted-foreground">{c.quoteNote}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment */}
        <div className="mt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.gearHeading}</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">{c.gearDesc}</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {c.gear.map((name, i) => (
              <figure key={name}>
                <GearImage src={gearImages[i]} alt={name} index={i} />
                <figcaption className="mt-3 text-sm font-medium text-foreground">{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Individual pricing */}
        <div id="individualni" className="scroll-mt-24 mt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{c.indHeading}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {c.ind.map(([d, p, desc], i) => (
              <article key={d} className={`${i === 2 ? "bg-secondary/70" : "bg-background"} rounded-[18px] p-8 ${cardShadow} flex flex-col`}>
                <h4 className="text-3xl font-bold text-foreground mb-1">{d}</h4>
                <p className="text-xl font-semibold text-primary/80 mb-5">{p}</p>
                <div className="w-12 border-t border-border mb-5" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <Button variant="outline" size="sm" className="mt-6 self-start rounded-full px-8" onClick={() => scrollTo("rezervace")}>
                  {c.book}
                </Button>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[18px] border border-border p-6 md:p-8">
            <p className="flex items-center gap-2 font-semibold text-foreground mb-4">
              <Car className="w-4 h-4 text-accent" aria-hidden="true" />
              {c.surchargeTitle}
            </p>
            <ul className="space-y-2 text-sm">
              {c.surcharge.map(([range, fee]) => (
                <li key={range} className="flex justify-between gap-4 text-muted-foreground">
                  <span>{range}</span>
                  <span className="font-semibold text-foreground whitespace-nowrap">{fee}</span>
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="mt-10 border-l-2 border-accent/50 pl-6 italic text-lg text-foreground/80 leading-relaxed max-w-3xl">
            {c.statement}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
