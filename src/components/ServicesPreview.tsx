import { Card, CardContent } from "@/components/ui/card";
import { Activity, Wind, Users, Clock } from "lucide-react";
import sportsImage from "@/assets/sports-massage.jpg";
import antiStressImage from "@/assets/antistress-massage.jpg";
import couplesImage from "@/assets/couples-massage.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesPreview = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Activity,
      titleKey: "services.box1.title",
      descKey: "services.box1.desc",
      duration: "60 min",
      price: "990 Kč",
      image: sportsImage,
    },
    {
      icon: Wind,
      titleKey: "services.box2.title",
      descKey: "services.box2.desc",
      duration: "90 min",
      price: "1 390 Kč",
      image: antiStressImage,
    },
    {
      icon: Users,
      titleKey: "services.box3.title",
      descKey: "services.box3.desc",
      duration: "120 min",
      price: "1 790 Kč",
      image: couplesImage,
    },
  ];

  return (
    <section id="sluzby" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}<br />
            {t("services.subtitleLine2")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${t(service.titleKey)} therapy session`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{t(service.titleKey)}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
