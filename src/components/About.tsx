import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const qualities = [
    "Long-term client relationships",
    "Empathetic, personalized approach",
    "Professional certification & experience",
    "Highest quality oils and equipment",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Your Therapist
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 10 years of experience in massage therapy, I've dedicated my practice to 
              bringing professional wellness services directly to your home. My journey began with 
              a simple belief: everyone deserves access to quality therapeutic massage without 
              the stress of travel.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I specialize in creating personalized treatment plans that address your unique needs, 
              whether you're recovering from sports injuries, managing stress, or simply seeking 
              regular self-care. Your comfort and well-being are always my top priorities.
            </p>

            {/* Qualities */}
            <div className="space-y-3">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{quality}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="border-border shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="border-border shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </CardContent>
            </Card>
            <Card className="border-border shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Return Rate</div>
              </CardContent>
            </Card>
            <Card className="border-border shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Booking Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;