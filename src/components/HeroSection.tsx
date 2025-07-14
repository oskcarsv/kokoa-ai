import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
      </div>

      <div className="relative z-10 section-kokoa text-center max-w-5xl">
        {/* Logo Hero */}
        <div className="mb-8 flex justify-center animate-bounce-gentle">
          <img 
            src="/lovable-uploads/8e2e8027-a5b0-443d-85c0-d545ab8824a2.png" 
            alt="Kokoa Logo" 
            className="h-20 w-20 md:h-28 md:w-28"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-hero mb-6 animate-fade-in-up">
          Construyendo el futuro desde 
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {" "}Latinoamérica
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-subhead text-muted-foreground mb-4 animate-fade-in-up delay-200">
          La comunidad de builders, creativos e innovadores que está cambiando el mundo con inteligencia artificial
        </p>

        {/* Additional text */}
        <p className="text-body-large text-muted-foreground/80 mb-12 italic animate-fade-in-up delay-400">
          "Demostramos que en Latinoamérica hay talento de talla mundial, creando soluciones que trascienden fronteras"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
          <Button 
            asChild
            size="lg"
            className="btn-primary text-lg px-8 py-6 group"
          >
            <a 
              href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              Únete a la Comunidad
              <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button 
            variant="outline"
            size="lg"
            asChild
            className="text-lg px-8 py-6 border-2 hover:bg-secondary/50 group"
          >
            <a 
              href="#eventos" 
              className="inline-flex items-center gap-3"
            >
              Ver Próximos Eventos
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-muted-foreground/60">
            <span className="text-sm mb-2">Descubre más</span>
            <ArrowRight className="h-4 w-4 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;