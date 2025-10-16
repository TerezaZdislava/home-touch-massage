import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Gift, Heart, Clock } from "lucide-react";

const discounts = [
  {
    icon: GraduationCap,
    title: "Student Discount",
    discount: "10% OFF",
    description: "Valid student ID required",
    color: "text-blue-600",
  },
  {
    icon: Gift,
    title: "Loyalty Reward",
    discount: "50% OFF",
    description: "Every 5th massage",
    color: "text-accent",
  },
  {
    icon: Heart,
    title: "Couples Deal",
    discount: "50% OFF",
    description: "Second person discount",
    color: "text-pink-600",
  },
  {
    icon: Clock,
    title: "Extended Session",
    discount: "15% OFF",
    description: "90-minute massages",
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
                  <p className="text-sm text-muted-foreground">{discount.description}</p>
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