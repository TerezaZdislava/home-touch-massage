import { Award, Sparkles, Waves, Mountain, BookOpen, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const items = [
  { key: "bg.i1", icon: Award, featured: true },
  { key: "bg.i2", icon: Sparkles, featured: true },
  { key: "bg.i3", icon: Waves },
  { key: "bg.i4", icon: Mountain },
  { key: "bg.i5", icon: BookOpen },
  { key: "bg.i6", icon: GraduationCap },
];

const Background = () => {
  const { t } = useLanguage();
  const featured = items.filter((i) => i.featured);
  const rest = items.filter((i) => !i.featured);

  return (
    <section id="vzdelani" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{t("bg.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("bg.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featured.map(({ key, icon: Icon }) => (
            <article key={key} className="bg-secondary/50 rounded-[18px] p-8 md:p-10 shadow-[0_4px_24px_-6px_hsl(25_70%_47%/0.08)]">
              <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{t(`${key}.title`)}</h3>
              <div className="w-12 border-t border-border mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`${key}.desc`)}</p>
            </article>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rest.map(({ key, icon: Icon }) => (
            <article key={key} className="border-t border-border pt-6">
              <Icon className="w-5 h-5 text-accent/80 mb-4" />
              <h3 className="text-base font-semibold text-foreground mb-2">{t(`${key}.title`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`${key}.desc`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background;
