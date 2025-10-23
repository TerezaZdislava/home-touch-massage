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
    title: "Sports Massage",
    description: "Targeted muscle relief designed specifically for athletes and physically active individuals. This intensive treatment focuses on problem areas, helping with post-exercise recovery and injury prevention. Perfect for runners, gym enthusiasts, and anyone with an active lifestyle.",
    duration: "60 min",
    price: "$80",
    image: sportsImage,
    benefits: ["Muscle recovery", "Injury prevention", "Increased flexibility", "Pain relief"],
  },
  {
    icon: Wind,
    title: "Anti-Stress Massage",
    description: "Gentle, flowing techniques combined with aromatherapy to promote complete mental and physical relaxation. This massage helps reduce anxiety, improve sleep quality, and restore inner balance. Ideal for busy professionals and anyone seeking stress relief.",
    duration: "60 min",
    price: "$75",
    image: antiStressImage,
    benefits: ["Stress reduction", "Better sleep", "Mental clarity", "Emotional balance"],
  },
  {
    icon: Sparkles,
    title: "Custom Massage",
    description: "A personalized treatment tailored to your unique needs. I'll combine various techniques based on your preferences and problem areas. This flexible approach ensures you get exactly what your body needs each session.",
    duration: "60 min",
    price: "$85",
    image: swedishImage,
    benefits: ["Personalized approach", "Flexible techniques", "Addresses specific issues", "Evolves with your needs"],
  },
  {
    icon: Users,
    title: "Couples Massage",
    description: "Share the relaxation experience with your partner, friend, or family member. Two massages performed back-to-back or simultaneously in your home. A perfect way to bond while enjoying professional therapeutic care together.",
    duration: "60 min each",
    price: "$120 (50% off 2nd person)",
    image: couplesImage,
    benefits: ["Shared experience", "Quality time together", "50% discount", "Convenient scheduling"],
  },
  {
    icon: Dumbbell,
    title: "Deep Tissue Regeneration",
    description: "An extended 90-minute session focused on deep muscle work and comprehensive body regeneration. Ideal for those with chronic tension, physically demanding jobs, or high stress levels. This treatment goes beyond surface relaxation to create lasting change.",
    duration: "90 min",
    price: "$110 (15% off)",
    image: deepTissueImage,
    benefits: ["Deep muscle work", "Chronic pain relief", "Extended session", "Comprehensive treatment"],
  },
  {
    icon: Leaf,
    title: "Aroma Relax Massage",
    description: "A deeply calming experience using carefully selected essential oils to enhance relaxation. This gentle massage combines aromatherapy benefits with soothing techniques, perfect for evening sessions to promote restful sleep and complete unwinding.",
    duration: "60 min",
    price: "$80",
    image: aromaImage,
    benefits: ["Essential oils included", "Deep relaxation", "Better sleep", "Aromatherapy benefits"],
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
                Massage Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional therapeutic massages tailored to your wellness goals. 
                All treatments performed in the comfort of your home with premium equipment and oils.
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
                          <h3 className="text-sm font-semibold text-foreground mb-2">Key Benefits:</h3>
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
                            Book This Service
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
                Mobile Service Convenience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I bring the spa experience to you. Every session includes a professional massage table, 
                fresh towels, premium oils, and calming music. You provide the space, I provide everything else.
                No travel stress, no parking hassles – just pure relaxation in your own home.
              </p>
              <Link to="/booking">
                <Button variant="hero" size="lg">
                  Book Your Home Session
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