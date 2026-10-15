import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "cz" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navigation
  "nav.home": { cz: "Domů", en: "Home" },
  "nav.services": { cz: "Služby", en: "Services" },
  "nav.reservation": { cz: "Rezervace", en: "Reservation" },
  "nav.contact": { cz: "Kontakt", en: "Contact" },
  "nav.bookNow": { cz: "Rezervovat nyní", en: "Book Now" },
  "nav.brand": { cz: "El Sol Massages", en: "El Sol Massages" },

  // Hero
  "hero.title": { cz: "Každé tělo je jiné. Masáž by měla být taky.", en: "Every body is different. Massage should be too." },
  "hero.subtitle": { cz: "Mobilní a firemní masáže v Praze. Vnímám, co tělo potřebuje, a hledám souvislosti mezi pohybem, zatížením a potížemi.", en: "Mobile and corporate massages in Prague. I perceive what the body needs and look for connections between movement, load and problems." },
  "hero.val1": { cz: "Přijedu za vámi", en: "I come to you" },
  "hero.val2": { cz: "Firemní masáže", en: "Corporate massages" },
  "hero.val3": { cz: "Individuální přístup", en: "Individual approach" },
  "hero.cta1": { cz: "Rezervovat masáž", en: "Book a Massage" },
  "hero.cta2": { cz: "Nabídka pro firmy", en: "Corporate Offer" },

  // About - Section 1
  "about.howIWork": { cz: "Jak pracuji", en: "How I Work" },
  "about.subtitle": { cz: "Masáž, která má smysl", en: "Massage that makes sense" },
  "about.workTargeted": { cz: "Pracuji cíleně", en: "I work with purpose" },
  "about.p1": {
    cz: "Pracuji cíleně tam, kde je tělo ztuhlé, přetížené nebo omezené v pohybu. Pokud není potřeba řešit konkrétní problém, dopřeji mu klidnou, plynulou péči, která umožní hluboké uvolnění.",
    en: "I work precisely where the body is stiff, overloaded or restricted in movement. When there's no specific problem to address, I provide calm, flowing care that allows deep relaxation.",
  },
  "about.p2": {
    cz: "Každé ošetření přizpůsobuji aktuálnímu stavu – ne podle šablony, ale podle reality daného dne. Mým cílem je, aby masáž nebyla jen krátkou úlevou, ale prostorem pro obnovu, rovnováhu a dlouhodobou péči.",
    en: "I adapt each treatment to the current state – not by template, but by the reality of the day. My goal is for the massage to be not just a brief relief, but a space for renewal, balance and long-term care.",
  },
  "about.welcome": { cz: "Vítejte v mém světě odpočinku a obnovy. ☀️", en: "Welcome to my world of rest and renewal. ☀️" },

  // About - Section 2
  "about.suitableTitle": { cz: "Masáž je vhodná pro vás, pokud:", en: "Massage is right for you if:" },
  "about.suit1": { cz: "sportujete nebo jste fyzicky aktivní", en: "you exercise or are physically active" },
  "about.suit2": { cz: "pracujete manuálně", en: "you do manual work" },
  "about.suit3": { cz: "trávíte dlouhé hodiny u počítače", en: "you spend long hours at a computer" },
  "about.suit4": { cz: "cítíte ztuhlost, bolest nebo únavu", en: "you feel stiffness, pain or fatigue" },
  "about.suit5": { cz: "chcete tělu dopřát pravidelnou péči a obnovu", en: "you want to give your body regular care and renewal" },
  "about.bookMassage": { cz: "Objednat masáž", en: "Book a Massage" },

  // About - Section 3
  "about.aboutMe": { cz: "Cesta k El Sol", en: "The Journey to El Sol" },
  "about.aboutP1": {
    cz: "Vycházím z praxe v salonech a lázních i ze zkušeností s různými typy těl a zátěží. Masáž vnímám jako nástroj, který pomáhá tělu znovu fungovat lehčeji, volněji a s menším napětím.",
    en: "I draw from experience in salons and spas and from working with various body types and loads. I see massage as a tool that helps the body function more easily, freely and with less tension.",
  },
  "about.aboutP2": {
    cz: "Respektuji hranice těla, pracuji soustředěně a s důrazem na skutečný účinek – ne jen krátkodobý pocit úlevy.",
    en: "I respect the body's limits, work with focus and emphasis on real effect – not just short-term relief.",
  },
  "about.readStory": { cz: "👉 Přečíst celý příběh cesty El Sol", en: "👉 Read the full El Sol journey" },
  "about.storyP1": {
    cz: "Lidské tělo mě fascinuje od dětství. Koukal jsem na sportovce, tanečníky, jogíny i bojovníky a chtěl jsem vědět, co všechno dokážou. Věnoval jsem se breakdance, akrobacii a kung-fu. Mistrem jsem nebyl, ale vyzkoušel jsem různé způsoby, jak tělo používat a rozvíjet. A hlavně jsem zjistil, že čím lépe regeneruje, tím víc se můžu hýbat. To mě přivedlo k masážím a kolem dvaceti jsem absolvoval první masérský kurz. Bylo mi jasné, že tohle chci dělat.",
    en: "I've been fascinated by the human body since childhood. I watched athletes, dancers, yogis and fighters and wanted to know what they could do. I practiced breakdancing, acrobatics and kung fu. I wasn't a master, but I tried different ways to use and develop the body. And most importantly, I realized that the better it regenerates, the more I can move. This led me to massages and around the age of twenty I completed my first massage course. It was clear to me that this is what I wanted to do.", 
  },
  "about.storyP2": {
    cz: "První praxi jsem získal v pivních lázních, kde jsem hostům po koupeli dělal dvacetiminutové masáže. Naučil jsem se pracovat s lidmi různého věku, postavy i životního stylu a poznal jsem, jak funguje wellness provoz.",
    en: "I gained my first practice in beer spas, where I gave guests twenty-minute massages after their bath. I learned to work with people of different ages, body types and lifestyles, and I got to know how a wellness operation works.",  
},
  "about.storyP3": {
    cz: "Pak mě cesta zavedla na Island do Modré laguny, kde jsem při masážích ve vodě rozvíjel cit pro dotek a vnímání těla. Později mi spolupráce s lektorkou tradiční čínské medicíny otevřela pohled na energetiku těla.",
    en: "Then my journey took me to Iceland to the Blue Lagoon, where I developed a sense of touch and body awareness through massages in the water. Later, collaboration with a traditional Chinese medicine instructor opened my view on the body's energy.",
  },
  "about.storyP4": {
    cz: "Dnes všechno spojuju v El Sol, kde hledám, odkud tělu vzniká napětí, a pomáhám mu se uvolnit.",
    en: "Today I combine everything in El Sol, where I look for the source of tension in the body and help it relax.",
  },
  
  "about.quote": {
    cz: "\u201ERegenerace nen\u00ED \u00FAnik od v\u00FDkonu. Je jeho p\u0159edpokladem.\u201C",
    en: "\u201CRecovery is not an escape from performance. It is its prerequisite.\u201D",
  },

  // Background
  "bg.title": { cz: "Co mám za sebou", en: "My Background" },
  "bg.subtitle": { cz: "Vzdělání & certifikace", en: "Education & Professional Development" },
  "bg.i1.title": { cz: "Odborná kvalifikace – masér", en: "Professional Massage Qualification" },
  "bg.i1.desc": {
    cz: "Osvědčení o odborné způsobilosti k výkonu zdravotnického povolání v oboru Masér, Ministerstvo zdravotnictví ČR, 2014. Absolvováno v Centru rekvalifikačního vzdělávání RAFAEL v Karlových Varech.",
    en: "Certificate of professional competence for the healthcare profession of massage therapist, issued by the Czech Ministry of Health in 2014. Training completed at the RAFAEL Vocational Retraining Education Centre in Karlovy Vary, Czech Republic.",
  },
  "bg.i2.title": { cz: "Rozšiřování masérských technik", en: "Expanding My Massage Techniques" },
  "bg.i2.desc": {
    cz: "V roce 2026 jsem prakticky rozšířil své dovednosti o základy thajské a havajské masáže. Jedná se o praktické rozšíření technik, nikoli o formální certifikaci.",
    en: "In 2026, I expanded my practical skills to include the fundamentals of Thai and Hawaiian massage. This represents practical skills development, not a formal certification.",
  },
  "bg.i3.title": { cz: "Zkušenosti z pivních lázní", en: "Experience in Beer Spa Wellness" },
  "bg.i3.desc": {
    cz: "Praktická zkušenost s masážemi a péčí o klienty v prostředí pivních lázní.",
    en: "Practical experience with massage and client care in a beer spa environment.",
  },
  "bg.i4.title": { cz: "Zkušenost z Islandu", en: "Experience in Iceland" },
  "bg.i4.desc": {
    cz: "Zkušenost z Modré laguny na Islandu, známé svým unikátním prostředím a wellness atmosférou.",
    en: "Experience at the Blue Lagoon in Iceland, known for its distinctive setting and wellness atmosphere.",
  },
  "bg.i5.title": { cz: "Vlastní anatomický a klinický atlas", en: "My Own Anatomy and Clinical Reference Atlas" },
  "bg.i5.desc": {
    cz: "Vytvářím a rozvíjím vlastní odborné materiály, které zahrnují svalové karty, pohybové testy a pracovní protokoly.",
    en: "I develop my own professional reference materials, including muscle reference cards, movement tests, and working protocols.",
  },
  "bg.i6.title": { cz: "Průběžné vzdělávání", en: "Continuous Learning" },
  "bg.i6.desc": {
    cz: "Průběžně studuji anatomii a pohybové vzorce, abych dále rozvíjel své znalosti a lépe rozuměl lidskému tělu a pohybu.",
    en: "I continue to study anatomy and movement patterns to deepen my knowledge and understanding of the human body and movement.",
  },

  // Services
  "services.title": { cz: "Masáž na míru", en: "Tailored Massage" },
  "services.subtitle": {
    cz: "Masáž je vždy přizpůsobena vašemu aktuálnímu stavu.",
    en: "The massage is always adapted to your current condition.",
  },
  "services.subtitleLine2": {
    cz: "Délka určuje pouze množství času, který tělu věnujeme – styl masáže a přístup zůstávají stejné.",
    en: "Duration only determines the amount of time we dedicate to your body – the massage style and approach remain the same.",
  },
  "services.box1.title": { cz: "60 minut", en: "60 minutes" },
  "services.box1.desc": {
    cz: "Cílená práce na konkrétní oblasti nebo udržovací péče. Vhodné při omezení pohybu, napětí nebo jako pravidelná regenerace.",
    en: "Targeted work on specific areas or maintenance care. Suitable for movement restrictions, tension or regular recovery.",
  },
  "services.box2.title": { cz: "90 minut", en: "90 minutes" },
  "services.box2.desc": {
    cz: "Nejvyváženější varianta. Dostatek času na důkladnou práci i celkové uvolnění.",
    en: "The most balanced option. Enough time for thorough work and overall relaxation.",
  },
  "services.box3.title": { cz: "120 minut", en: "120 minutes" },
  "services.box3.desc": {
    cz: "Prostor bez spěchu. Kombinace cílené práce, uvolnění a hlubší regenerace.",
    en: "Space without rush. A combination of targeted work, relaxation and deeper recovery.",
  },
  "services.bookBtn": { cz: "Rezervovat", en: "Book" },

  // Discounts
  "discounts.badge": { cz: "Speciální nabídky", en: "Special Offers" },
  "discounts.title": { cz: "Pravidelná péče o tělo", en: "Regular Body Care" },
  "discounts.subtitle": {
    cz: "Tělo funguje nejlépe tehdy, když mu věnujeme péči dlouhodobě. Pravidelné návštěvy umožňují kontinuitu práce, lepší výsledky a stabilnější rovnováhu.",
    en: "The body works best when we take care of it long-term. Regular visits enable continuity of work, better results and more stable balance.",
  },
  "discounts.rhythm": { cz: "Pravidelný rytmus", en: "Regular Rhythm" },
  "discounts.rhythmSub": {
    cz: "Pro klienty, kteří berou regeneraci jako součást životního stylu",
    en: "For clients who see recovery as part of their lifestyle",
  },
  "discounts.rhythmBenefit1": { cz: "Zvýhodněné ceny při koupi balíčku", en: "Discounted prices when purchasing a package" },
  "discounts.rhythmBenefit2": { cz: "Přednostní rezervace termínů", en: "Priority booking" },
  "discounts.rhythmBenefit3": { cz: "Kontinuita práce s tělem a sledování pokroku", en: "Continuity of bodywork and progress tracking" },
  "discounts.showPackages": { cz: "Zobrazit balíčky", en: "Show Packages" },
  "discounts.packageValidity": { cz: "📌 Platnost balíčku: 6 měsíců", en: "📌 Package validity: 6 months" },
  "discounts.reserve": { cz: "Rezervovat", en: "Book" },
  "discounts.learnMore": { cz: "Zjistit více", en: "Learn More" },
  "discounts.sharedCare": { cz: "Sdílená péče", en: "Shared Care" },
  "discounts.sharedSub": { cz: "Masáž pro dva na jednom místě", en: "Massage for two at one location" },
  "discounts.sharedBenefit1": {
    cz: "Masáž pro dva lidi na stejném místě po sobě (partneři, přátelé, kolegové)",
    en: "Massage for two people at the same location consecutively (partners, friends, colleagues)",
  },
  "discounts.sharedBenefit2": {
    cz: "Každý má vlastní masáž přizpůsobenou na míru",
    en: "Each person gets a customized massage",
  },
  "discounts.sharedBenefit3": {
    cz: "Výhoda: plynulý průběh a jednodušší organizace",
    en: "Advantage: smooth flow and easier organization",
  },
  "discounts.sharedNote": {
    cz: "Podmínky a načasování se domlouvají individuálně.",
    en: "Terms and timing are arranged individually.",
  },
  "discounts.trustQuote": {
    cz: "\u201ETělo si pamatuje péči.\u201C",
    en: "\u201CThe body remembers care.\u201D",
  },

  // Reservation
  "reservation.title": { cz: "Rezervace", en: "Reservation" },
  "reservation.subtitle": {
    cz: "Pro rychlou a osobní domluvu využívám WhatsApp.",
    en: "For quick and personal communication I use WhatsApp.",
  },
  "reservation.subtitleLine2": {
    cz: "Odpovídám obvykle během dne.",
    en: "I usually respond within the day.",
  },
  "reservation.whatsappBtn": { cz: "Rezervovat přes WhatsApp", en: "Book via WhatsApp" },
  "reservation.howTitle": { cz: "Jak probíhá rezervace", en: "How Booking Works" },
  "reservation.step1": { cz: "Napíšete mi přes WhatsApp", en: "Message me on WhatsApp" },
  "reservation.step2": { cz: "Společně vybereme termín a délku masáže", en: "We choose a date and duration together" },
  "reservation.step3": { cz: "Upřesníme adresu a zaměření péče", en: "We confirm address and focus of care" },
  "reservation.step4": { cz: "Přijedu s kompletním vybavením", en: "I arrive with full equipment" },
  "reservation.step5": { cz: "Platba probíhá po masáži", en: "Payment is made after the massage" },
  "reservation.expectTitle": { cz: "Co očekávat", en: "What to Expect" },
  "reservation.expect1": { cz: "Přivážím lehátko, ručníky i oleje", en: "I bring a massage table, towels and oils" },
  "reservation.expect2": { cz: "Masáž je vždy přizpůsobena vašemu aktuálnímu stavu", en: "The massage is always adapted to your current condition" },
  "reservation.expect3": { cz: 'Pracuji cíleně – nejedná se o „hlazení bez účinku"', en: "I work with purpose – this is not just gentle stroking" },
  "reservation.expect4": { cz: "Doporučuji si po masáži dopřát klid a hydrataci", en: "I recommend rest and hydration after the massage" },
  "reservation.expect5": { cz: "Respektuji hranice těla i osobní prostor", en: "I respect body boundaries and personal space" },
  "reservation.policyTitle": { cz: "Rezervační podmínky", en: "Booking Terms" },
  "reservation.policy1": { cz: "Termín je vhodné domluvit alespoň 24 hodin předem", en: "It's best to arrange at least 24 hours in advance" },
  "reservation.policy2": { cz: "Zrušení méně než 24 hodin předem může být účtováno dle domluvy", en: "Cancellation less than 24 hours in advance may be charged by agreement" },
  "reservation.policy3": {
    cz: "Poskytuji výhradně profesionální masérské služby. Služby intimního charakteru nenabízím.",
    en: "I provide exclusively professional massage services. Intimate services are not offered.",
  },

  // Contact
  "contact.title": { cz: "Kontakt", en: "Contact" },
  "contact.subtitle": { cz: "Máte dotazy? Neváhejte se ozvat.", en: "Have questions? Don't hesitate to reach out." },
  "contact.phoneLabel": { cz: "Telefon", en: "Phone" },
  "contact.callBtn": { cz: "Zavolat", en: "Call" },
  "contact.emailBtn": { cz: "Napsat email", en: "Send Email" },
  "contact.hoursIntro": { cz: "Jsem tu pro vás v těchto časech", en: "I'm available at these times" },
  "contact.hoursTitle": { cz: "Pracovní doba", en: "Working Hours" },
  "contact.monSat": { cz: "Pondělí – Sobota", en: "Monday – Saturday" },
  "contact.sun": { cz: "Neděle", en: "Sunday" },
  "contact.responseTitle": { cz: "Doba odpovědi", en: "Response Time" },
  "contact.responseP1": { cz: "Na dotazy odpovídám obvykle do 24 hodin.", en: "I usually respond to inquiries within 24 hours." },
  "contact.responseP2": { cz: "V případě urgentní rezervace zavolejte přímo.", en: "For urgent bookings, please call directly." },

  // Social
  "social.title": { cz: "Zůstaňme ve spojení", en: "Let's Stay Connected" },
  "social.p1": {
    cz: "Na sociálních sítích sdílím ukázky práce, tipy k regeneraci a péči o tělo.",
    en: "On social media I share work samples, recovery tips and body care advice.",
  },
  "social.p2": {
    cz: "Na Google najdete hodnocení a zkušenosti klientů.",
    en: "On Google you can find ratings and client experiences.",
  },
  "social.google": { cz: "Google recenze", en: "Google Reviews" },

  // Footer
  "footer.brand": { cz: "Mobilní masáže", en: "Mobile Massage" },
  "footer.brandDesc": {
    cz: "Dopřejte si prvotřídní péči bez nutnosti kamkoliv cestovat. Přináším relaxaci přímo do vašeho obývacího pokoje, abyste si mohli odpočinek vychutnat v maximálním pohodlí.",
    en: "Treat yourself to first-class care without having to travel anywhere. I bring relaxation directly to your living room so you can enjoy rest in maximum comfort.",
  },
  "footer.links": { cz: "Odkazy", en: "Links" },
  "footer.contact": { cz: "Kontakt", en: "Contact" },
  "footer.hours": { cz: "Pracovní doba", en: "Working Hours" },
  "footer.monSat": { cz: "Pondělí - sobota", en: "Monday - Saturday" },
  "footer.sun": { cz: "Neděle", en: "Sunday" },
  //"footer.copyright": {
    //cz: "Mobilní masáže. Všechna práva vyhrazena. Profesionální masérské služby.",
    //en: "Mobile Massage. All rights reserved. Professional massage services.",
  //},
  "footer.copyright": { cz: "Web under construction", en: "Web under construction" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang");
    return (stored === "en" ? "en" : "cz") as Lang;
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
