import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, CalendarCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Discounts = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Speciální nabídky</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pravidelná péče o tělo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tělo funguje nejlépe tehdy, když mu věnujeme péči dlouhodobě. Pravidelné návštěvy umožňují kontinuitu práce, lepší výsledky a stabilnější rovnováhu.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Offer 1: Regular Rhythm */}
          <Card className="border-accent/30 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-2 bg-accent" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Pravidelný rytmus</h3>
                  <span className="text-sm text-muted-foreground">Pro klienty, kteří berou regeneraci jako součást životního stylu</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Zvýhodněné ceny při koupi balíčku</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Přednostní rezervace termínů</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Kontinuita práce s tělem a sledování pokroku</span>
                </li>
              </ul>

              {/* Packages - Accordion for mobile friendliness */}
              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="packages" className="border-border/50">
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <CalendarCheck className="w-4 h-4 text-accent" />
                      Zobrazit balíčky
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-1">
                      <div className="flex justify-between items-center py-2 px-3 rounded-md bg-accent/5">
                        <span className="text-sm text-foreground font-medium">5× 60 min</span>
                        <span className="text-sm font-bold text-accent">4 500 CZK</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 rounded-md bg-accent/5">
                        <span className="text-sm text-foreground font-medium">5× 90 min</span>
                        <span className="text-sm font-bold text-accent">6 300 CZK</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 rounded-md bg-accent/5">
                        <span className="text-sm text-foreground font-medium">5× 120 min</span>
                        <span className="text-sm font-bold text-accent">8 000 CZK</span>
                      </div>
                      <p className="text-xs text-muted-foreground italic mt-2">📌 Platnost balíčku: 6 měsíců</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm" className="gap-1">
                  <Link to="/booking">Rezervovat <ArrowRight className="w-3.5 h-3.5" /></Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/services">Zjistit více</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Offer 2: Shared Care */}
          <Card className="border-primary/30 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-2 bg-primary" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Sdílená péče</h3>
                  <span className="text-sm text-muted-foreground">Masáž pro dva na jednom místě</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Masáž pro dva lidi na stejném místě po sobě (partneři, přátelé, kolegové)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Každý má vlastní masáž přizpůsobenou na míru</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Výhoda: plynulý průběh a jednodušší organizace</span>
                </li>
              </ul>

              <p className="text-sm text-muted-foreground italic mb-6 border-l-2 border-primary/30 pl-3">
                Podmínky a načasování se domlouvají individuálně.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm" className="gap-1">
                  <Link to="/booking">Rezervovat <ArrowRight className="w-3.5 h-3.5" /></Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/services">Zjistit více</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Message */}
        <div className="mt-16 text-center">
          <p className="text-lg italic text-muted-foreground max-w-xl mx-auto">
            "Tělo si pamatuje péči."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
