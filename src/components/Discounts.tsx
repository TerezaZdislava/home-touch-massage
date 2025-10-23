import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Gift, Heart, Users } from "lucide-react";

const discounts = [
  {
    icon: Gift,
    title: "Loyalty Reward",
    discount: "50% OFF",
    description: "Every 5th massage",
    details: "Because consistency deserves gratitude",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Duo/Group Discount",
    discount: "€10 OFF",
    description: "Each person saves €10",
    details: "Bring a friend",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "Regular Packages",
    discount: "SAVE €35-45",
    description: "5 × 60 min = €265 | 5 × 90 min = €355",
    details: "Best value for regular care",
    color: "text-accent",
  },
  {
    icon: GraduationCap,
    title: "Student Deal",
    discount: "€5 OFF",
    description: "Each session + 5 × 60 min = €270",
    details: "Show your student ID - shareable offer",
    color: "text-primary",
  },
];

const Discounts = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Special Offers</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Current Promotions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our special discounts and make regular self-care more affordable
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
            "Trust built through touch. A massage that keeps you coming back. 
            Because your body deserves consistency."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discounts;