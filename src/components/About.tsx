import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Calendar, Shield } from "lucide-react";
import therapistProfile from "@/assets/therapist-profile.jpg";

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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-garamond font-bold text-foreground mb-12 text-center">
              Where Healing Begins
            </h2>
            
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-8 text-center">
                Healing Hands, Caring Heart
              </h3>
              
              {/* Side-by-side layout: Photo + Text */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
                {/* Profile Photo */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative group">
                    <img 
                      src={therapistProfile}
                      alt="Professional massage therapist portrait"
                      className="w-full max-w-sm rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                      style={{
                        boxShadow: '0 10px 40px -10px hsl(var(--primary) / 0.3)'
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10"></div>
                  </div>
                </div>

                {/* Text Content */}
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
    </>
  );
};

export default About;