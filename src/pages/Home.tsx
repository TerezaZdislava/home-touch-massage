import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import About from "@/components/About";
import Discounts from "@/components/Discounts";
import Reservation from "@/components/Reservation";
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
      </main>
      <Footer />
    </div>
  );
};

export default Home;