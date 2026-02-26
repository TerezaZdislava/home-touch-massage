import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Info, ShieldCheck, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Reservation = () => {
  const { t } = useLanguage();

  const steps = [
    t("reservation.step1"),
    t("reservation.step2"),
    t("reservation.step3"),
    t("reservation.step4"),
    t("reservation.step5"),
  ];

  const expectations = [
    t("reservation.expect1"),
    t("reservation.expect2"),
    t("reservation.expect3"),
    t("reservation.expect4"),
    t("reservation.expect5"),
  ];

  const policies = [
    t("reservation.policy1"),
    t("reservation.policy2"),
    t("reservation.policy3"),
  ];

  return (
    <section id="rezervace" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("reservation.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            {t("reservation.subtitle")}
            <br />
            {t("reservation.subtitleLine2")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[hsl(142,70%,41%)] hover:bg-[hsl(142,70%,36%)] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-10 py-7 h-auto gap-3 rounded-xl"
          >
            <a
              href="https://wa.me/31642940546"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6" />
              {t("reservation.whatsappBtn")}
            </a>
          </Button>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
            {t("reservation.howTitle")}
          </h3>

          <div className="hidden md:grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <span className="w-10 h-10 rounded-full bg-accent/15 text-accent font-bold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div className="w-px h-4 bg-border" />
                <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <ol className="md:hidden space-y-5 max-w-md mx-auto">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-accent/15 text-accent font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-foreground text-base leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-border pt-14">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
              {t("reservation.expectTitle")}
            </h3>
            <ul className="space-y-3">
              {expectations.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent shrink-0" />
              {t("reservation.policyTitle")}
            </h3>
            <ul className="space-y-3">
              {policies.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 text-accent/70 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
