import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import About from "@/components/About";
import Discounts from "@/components/Discounts";
import Reservation from "@/components/Reservation";
import ContactSection from "@/components/ContactSection";
import SocialConnect from "@/components/SocialConnect";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <ServicesPreview />
        <Discounts />
        <Reservation />
        <ContactSection />
        <SocialConnect />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
