import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesPreview = () => {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "services.box1.title",
      descKey: "services.box1.desc",
      price: "75 €",
      bgClass: "bg-secondary/50",
    },
    {
      titleKey: "services.box2.title",
      descKey: "services.box2.desc",
      price: "100 €",
      bgClass: "bg-secondary/70",
    },
    {
      titleKey: "services.box3.title",
      descKey: "services.box3.desc",
      price: "130 €",
      bgClass: "bg-[hsl(30_25%_88%)]",
    },
  ];

  return (
    <section id="sluzby" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("services.subtitle")}<br />
            {t("services.subtitleLine2")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgClass} rounded-[18px] p-10 md:p-12 shadow-[0_4px_24px_-6px_hsl(25_70%_47%/0.08)] hover:shadow-[0_8px_32px_-6px_hsl(25_70%_47%/0.12)] transition-shadow duration-500`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-xl md:text-2xl font-semibold text-primary/80 mb-6">
                {service.price}
              </p>

              <div className="w-12 border-t border-border mb-6" />

              <p className="text-muted-foreground leading-relaxed mb-8">
                {t(service.descKey)}
              </p>

              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8 hover:bg-primary/5 transition-all duration-500"
                onClick={() => {
                  document.getElementById("rezervace")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("services.bookBtn")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
