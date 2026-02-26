import { useState } from "react";
import { ChevronDown, Dumbbell, Monitor, Wrench, Battery, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import therapistProfile from "@/assets/therapist-profile.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const [storyExpanded, setStoryExpanded] = useState(false);
  const { t } = useLanguage();

  const suitableFor = [
    { icon: Dumbbell, key: "about.suit1" },
    { icon: Wrench, key: "about.suit2" },
    { icon: Monitor, key: "about.suit3" },
    { icon: Battery, key: "about.suit4" },
    { icon: Heart, key: "about.suit5" },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* ─── SECTION 1: Jak pracuji ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-garamond font-bold text-foreground mb-4 text-center">
              {t("about.howIWork")}
            </h2>
            <p className="text-xl md:text-2xl font-garamond italic text-muted-foreground text-center mb-12">
              {t("about.subtitle")}
            </p>

            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
              <div className="md:col-span-2">
                <div className="relative group">
                  <img
                    src={therapistProfile}
                    alt="Professional massage therapist portrait"
                    className="w-full rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ boxShadow: '0 10px 40px -10px hsl(var(--primary) / 0.3)' }}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10" />
                </div>
              </div>

              <div className="md:col-span-3 space-y-5 text-lg text-foreground leading-relaxed">
                <h3 className="text-2xl font-garamond font-semibold text-primary">
                  {t("about.workTargeted")}
                </h3>
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.welcome")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: Pro koho je masáž vhodná ─── */}
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto w-max">
            <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-4">
              {t("about.suitableTitle")}
            </h3>
            <ul className="space-y-3 mb-10">
              {suitableFor.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center gap-3 text-foreground text-lg">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{t(item.key)}</span>
                  </li>
                );
              })}
            </ul>

            <Button variant="hero" size="lg" onClick={() => scrollTo("#rezervace")}>
              {t("about.bookMassage")}
            </Button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: O mně ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto w-max">
            <h3 className="text-2xl md:text-3xl font-garamond font-semibold text-primary mb-6">
              {t("about.aboutMe")}
            </h3>

            <div className="max-w-3xl space-y-5 text-lg text-foreground leading-relaxed">
              <p>{t("about.aboutP1")}</p>
              <p>{t("about.aboutP2")}</p>

              <div className="pt-2">
                <button
                  onClick={() => setStoryExpanded(!storyExpanded)}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  {t("about.readStory")}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${storyExpanded ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${storyExpanded ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
                >
                  <div className="space-y-4 text-base text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6">
                    <p>{t("about.storyP1")}</p>
                    <p>{t("about.storyP2")}</p>
                    <p>{t("about.storyP3")}</p>
                    <p>{t("about.storyP4")}</p>
                    <p>{t("about.storyP5")}</p>
                    <p>{t("about.storyP6")}</p>
                    <p>{t("about.storyP7")}</p>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl font-garamond italic text-center text-muted-foreground py-8 mt-12 border-t border-b border-border">
              {t("about.quote")}
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
