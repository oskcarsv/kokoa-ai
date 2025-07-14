import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import EventsSection from "@/components/EventsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <AboutSection />
        <WorkshopsSection />
        <EventsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;