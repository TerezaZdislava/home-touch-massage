import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle, ArrowRight, ShieldCheck, Clock, Info } from "lucide-react";

const steps = [
  "Napíšete mi přes WhatsApp",
  "Společně vybereme termín a délku masáže",
  "Upřesníme adresu a zaměření péče",
  "Přijedu s kompletním vybavením",
  "Platba probíhá po masáži",
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header + WhatsApp CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Rezervace
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Pro rychlou a osobní domluvu využívám WhatsApp.
            <br />
            Odpovídám obvykle během dne.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[hsl(142,70%,41%)] hover:bg-[hsl(142,70%,36%)] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base px-8 py-6 h-auto gap-2"
          >
            <a
              href="https://wa.me/31642940546"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Rezervovat přes WhatsApp
            </a>
          </Button>
        </div>

        {/* Jak probíhá rezervace */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <ArrowRight className="w-6 h-6 text-accent shrink-0" />
            Jak probíhá rezervace
          </h3>
          <ol className="space-y-4 pl-2">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/15 text-accent font-bold text-sm shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-foreground text-base leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Co očekávat + Rezervační podmínky */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Co očekávat */}
          <Card className="border-border shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                Co očekávat
              </h3>
              <ul className="space-y-3">
                {expectations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Rezervační podmínky */}
          <Card className="border-border shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                Rezervační podmínky
              </h3>
              <ul className="space-y-3">
                {policies.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
