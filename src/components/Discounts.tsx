import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Gift, Heart, Users } from "lucide-react";

const discounts = [
  {
    icon: Gift,
    title: "Pravidelný rytmus",
    discount: "50% OFF",
    description: "Every 5th massage",
    details: "Because consistency deserves gratitude",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Sdílená péče",
    discount: "€10 OFF",
    description: "Each person saves €10",
    details: "Bring a friend",
    color: "text-primary",
  },
];

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

        {/* Discounts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {discounts.map((discount, index) => {
            const Icon = discount.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center ${discount.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{discount.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{discount.discount}</div>
                  <p className="text-sm text-muted-foreground mb-1">{discount.description}</p>
                  <p className="text-xs italic text-muted-foreground">{discount.details}</p>
                </CardContent>
              </Card>
            );
          })}
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
