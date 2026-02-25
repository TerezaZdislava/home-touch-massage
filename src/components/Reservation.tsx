import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Info, ShieldCheck, Clock } from "lucide-react";

const steps = [
  { num: "1", text: "Napíšete mi přes WhatsApp" },
  { num: "2", text: "Společně vybereme termín a délku masáže" },
  { num: "3", text: "Upřesníme adresu a zaměření péče" },
  { num: "4", text: "Přijedu s kompletním vybavením" },
  { num: "5", text: "Platba probíhá po masáži" },
];

const expectations = [
  "Přivážím lehátko, ručníky i oleje",
  "Masáž je vždy přizpůsobena vašemu aktuálnímu stavu",
  'Pracuji cíleně – nejedná se o „hlazení bez účinku"',
  "Doporučuji si po masáži dopřát klid a hydrataci",
  "Respektuji hranice těla i osobní prostor",
];

const policies = [
  "Termín je vhodné domluvit alespoň 24 hodin předem",
  "Zrušení méně než 24 hodin předem může být účtováno dle domluvy",
  "Poskytuji výhradně profesionální masérské služby. Služby intimního charakteru nenabízím.",
];

const Reservation = () => {
  return (
    <section id="rezervace" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero — centered heading + WhatsApp CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Rezervace
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            Pro rychlou a osobní domluvu využívám WhatsApp.
            <br />
            Odpovídám obvykle během dne.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[hsl(142,70%,41%)] hover:bg-[hsl(142,70%,36%)] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-10 py-7 h-auto gap-3 rounded-xl"
          >
            <a
              href="https://wa.me/31642940546"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6" />
              Rezervovat přes WhatsApp
            </a>
          </Button>
        </div>

        {/* Timeline — Jak probíhá rezervace */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
            Jak probíhá rezervace
          </h3>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:grid grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-3">
                <span className="w-10 h-10 rounded-full bg-accent/15 text-accent font-bold text-sm flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <div className="w-px h-4 bg-border" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical stack */}
          <ol className="md:hidden space-y-5 max-w-md mx-auto">
            {steps.map((step) => (
              <li key={step.num} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-accent/15 text-accent font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {step.num}
                </span>
                <span className="text-foreground text-base leading-relaxed">
                  {step.text}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Two-column: Co očekávat + Rezervační podmínky */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-border pt-14">
          {/* Co očekávat */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
              Co očekávat
            </h3>
            <ul className="space-y-3">
              {expectations.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rezervační podmínky */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent shrink-0" />
              Rezervační podmínky
            </h3>
            <ul className="space-y-3">
              {policies.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 text-accent/70 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
