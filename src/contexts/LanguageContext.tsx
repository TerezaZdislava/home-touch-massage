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
  "nav.brand": { cz: "Mobilní masáže", en: "Mobile Massage" },

  // Hero
  "hero.title": { cz: "Masáže pro funkční a vyvážené tělo", en: "Massage for a Functional and Balanced Body" },
  "hero.subtitle": { cz: "Úleva, regenerace a návrat do pohybu – přímo u Vás doma", en: "Relief, recovery and return to movement – right at your doorstep" },
  "hero.val1": { cz: "Přijedu za vámi", en: "I come to you" },
  "hero.val2": { cz: "Vlastní vybavení", en: "Own equipment" },
  "hero.val3": { cz: "Individuální přístup", en: "Individual approach" },
  "hero.cta1": { cz: "Rezervovat masáž", en: "Book a Massage" },
  "hero.cta2": { cz: "Všechny služby", en: "All Services" },

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
  "about.aboutMe": { cz: "O mně", en: "About Me" },
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
    cz: "Od dětství mě fascinovalo, co všechno lidské tělo dokáže – jeho síla, adaptabilita, odolnost i schopnost precizně reagovat na dotyk, dech či pohyb. Pozoroval jsem lidi kolem sebe: sportovce, tanečníky, jogíny i bojovníky. Zajímal mě jejich skrytý potenciál i to, jakým způsobem propojují tělo s myslí. Postupně jsem začal vnímat lidskou schránku jako dar, který si zaslouží hlubokou péči, údržbu a neutuchající respekt.",
    en: "Since childhood, I've been fascinated by what the human body can do – its strength, adaptability, resilience and ability to respond precisely to touch, breath and movement. I observed people around me: athletes, dancers, yogis and fighters. I was interested in their hidden potential and how they connect body with mind. Gradually, I began to perceive the human body as a gift that deserves deep care, maintenance and unwavering respect.",
  },
  "about.storyP2": {
    cz: "V mládí jsem prozkoumával nejrůznější formy pohybu a cvičení, čímž jsem přirozeně objevoval i svět masáží a strečinku. Intuitivně jsem začal uvolňovat svalové napětí sobě i ostatním. Pozitivní ohlasy okolí mě utvrdily v tom, že mám pro dotyk přirozený cit. To mě ve dvaceti letech přivedlo k prvnímu masérskému kurzu, kde jsem poprvé pocítil, že tato cesta se mnou skutečně rezonuje.",
    en: "In my youth, I explored various forms of movement and exercise, naturally discovering the world of massage and stretching. Intuitively, I began releasing muscle tension for myself and others. Positive feedback confirmed my natural sense of touch. At twenty, this led me to my first massage course, where I first felt this path truly resonated with me.",
  },
  "about.storyP3": {
    cz: "Moje první zásadní profesní zkušenost přišla v pivních lázních. Tam jsem se učil pracovat s rozmanitými typy postav, různými stupni únavy i specifickými blokádami. Získal jsem zde potřebnou jistotu, rytmus a schopnost naslouchat potřebám klienta.",
    en: "My first significant professional experience came at beer spas. There I learned to work with diverse body types, varying levels of fatigue and specific blockages. I gained the necessary confidence, rhythm and ability to listen to the client's needs.",
  },
  "about.storyP4": {
    cz: "Následně mě život zavedl na Island – do proslulé Modré laguny. Práce v tomto unikátním prostředí mě seznámila s úplně jinou dimenzí péče. Vodní masáže mě naučily ještě větší citlivosti, vnitřnímu klidu a preciznosti.",
    en: "Life then took me to Iceland – to the famous Blue Lagoon. Working in this unique environment introduced me to a completely different dimension of care. Water massages taught me even greater sensitivity, inner calm and precision.",
  },
  "about.storyP5": {
    cz: "Cennou zkušeností byla také spolupráce s lektorkou tradiční čínské medicíny, která mě posunula k hlubšímu porozumění energetice těla.",
    en: "Valuable experience also came from collaboration with a traditional Chinese medicine instructor, which deepened my understanding of the body's energy.",
  },
  "about.storyP6": {
    cz: "Lidé se ke mně začali vracet a jejich zpětná vazba mě utvrdila v tom, že masáž není jen služba, ale rituál, který navrací tělu lehkost a funkčnost.",
    en: "People started coming back, and their feedback confirmed that massage is not just a service, but a ritual that restores lightness and function to the body.",
  },
  "about.storyP7": {
    cz: "Dnes všechny tyto zkušenosti propojuji ve vlastní praxi El Sol. Ta vychází z principů jednoduchosti, plné pozornosti a respektu k individuálním potřebám každého těla. Masáž vnímám jako harmonickou kombinaci techniky, vjemu a intuice. Mým cílem je, aby uvolněné tělo přineslo hluboký klid i vaší mysli.",
    en: "Today I combine all these experiences in my own practice El Sol. It is based on principles of simplicity, full attention and respect for the individual needs of each body. I see massage as a harmonious combination of technique, sensation and intuition. My goal is for a relaxed body to bring deep calm to your mind as well.",
  },
  "about.quote": {
    cz: "\u201ERegenerace nen\u00ED \u00FAnik od v\u00FDkonu. Je jeho p\u0159edpokladem.\u201C",
    en: "\u201CRecovery is not an escape from performance. It is its prerequisite.\u201D",
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
