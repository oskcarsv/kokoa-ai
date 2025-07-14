import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="section-clean text-center max-w-4xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/8e2e8027-a5b0-443d-85c0-d545ab8824a2.png" 
            alt="Kokoa Logo" 
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-hero mb-6 text-foreground">
          Construyendo el futuro desde{" "}
          <span className="text-primary">Latinoamérica</span>
        </h1>

        {/* Subheadline */}
        <p className="text-subhead text-muted-foreground mb-12 max-w-2xl mx-auto">
          Una comunidad de builders y creativos que usan AI para transformar ideas en impacto global.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            asChild
            size="lg"
            className="btn-primary text-base px-8 py-4"
          >
            <a 
              href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Únete a la Comunidad
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;