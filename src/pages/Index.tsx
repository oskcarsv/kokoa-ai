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
        <AboutSection />
        <PillarsSection />
        <WorkshopsSection />
        <EventsSection />
        {/* Íconos sociales arriba del CTA final */}
        <div className="flex justify-center items-center gap-8 my-12">
          <a href="https://instagram.com/kokoa.lat" target="_blank" rel="noopener noreferrer" className="text-kokoa-blue hover:scale-110 transition-transform" aria-label="Instagram">
            <Instagram className="h-8 w-8" />
          </a>
          <a href="https://www.youtube.com/@kokoa-lat" target="_blank" rel="noopener noreferrer" className="text-kokoa-blue hover:scale-110 transition-transform" aria-label="YouTube">
            <Youtube className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/company/kokoa-lat/" target="_blank" rel="noopener noreferrer" className="text-kokoa-blue hover:scale-110 transition-transform" aria-label="LinkedIn">
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;