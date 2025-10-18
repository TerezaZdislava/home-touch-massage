import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Calendar, Shield } from "lucide-react";

const About = () => {
  const qualities = [
    { icon: Shield, text: "Certified Professional – Licensed & insured" },
    { icon: CheckCircle2, text: "500+ Clients – Long-term relationships" },
    { icon: CheckCircle2, text: "Empathetic Care – Your wellness matters" },
    { icon: Clock, text: "Flexible Hours – Evening & weekends" },
  ];

  return (
    <>
      {/* Main About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-garamond font-bold text-foreground mb-8 text-center">
              Where Healing Begins
            </h2>
            
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-6 text-center">
                Healing Hands, Caring Heart
              </h3>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  My journey into massage therapy began with a simple belief: everyone deserves to feel 
                  their best, without having to leave the comfort of their home.
                </p>
                <p>
                  For over 8 years, I've been dedicated to bringing professional, therapeutic massage 
                  services directly to my clients. I understand that life can be hectic, and finding time 
                  for self-care isn't always easy. That's why I created Serene Touch – to make wellness 
                  accessible, convenient, and deeply personal.
                </p>
                <p>
                  My approach is empathetic and client-centered. I take the time to understand your unique 
                  needs, whether you're recovering from an injury, managing stress, or simply seeking deep 
                  relaxation. Each session is tailored to you, because your body deserves consistency and care.
                </p>
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
              "A massage that keeps you coming back. Because your body deserves consistency."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Booking Policy Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-garamond font-bold text-foreground mb-8 text-center">
              Booking Policy
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-background border-none shadow-sm">
                <CardContent className="p-6">
                  <Calendar className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-garamond font-semibold mb-3">Scheduling</h3>
                  <p className="text-foreground leading-relaxed">
                    Book at least 24 hours in advance. Same-day appointments may be available upon request.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background border-none shadow-sm">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-garamond font-semibold mb-3">Cancellations</h3>
                  <p className="text-foreground leading-relaxed">
                    Please provide 24-hour notice for cancellations to avoid a 50% cancellation fee.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-garamond font-bold text-foreground mb-6">
              Service Area
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              I proudly serve the greater metropolitan area and surrounding communities within a 30-mile radius. 
              Not sure if you're in the service area? Contact me and I'll let you know!
            </p>
            <p className="text-muted-foreground italic">
              Travel fees may apply for locations beyond 20 miles from downtown.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-garamond font-bold text-foreground mb-8 text-center">
              Service Area Map
            </h2>
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-foreground leading-relaxed">
                I serve the greater metropolitan area and surrounding communities. Contact me to confirm I serve your location!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Guarantee Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-garamond font-bold text-foreground mb-6">
              Quick Response Guarantee
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              I respond to all inquiries within 24 hours, usually much faster. Your wellness is my priority!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;