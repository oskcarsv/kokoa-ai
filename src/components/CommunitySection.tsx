import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="section-clean bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-headline mb-6 text-foreground">
            Únete a Nosotros
          </h2>
          
          <div className="card-clean mb-8">
            <p className="text-subhead leading-relaxed text-muted-foreground">
              Conecta con makers, creativos y emprendedores que comparten tu ambición de crear con AI. 
              Aprende, construye y colabora en una comunidad auténtica que está redefiniendo lo que significa ser 
              innovador en Latinoamérica.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "🎓",
              title: "Aprende",
              description: "Workshops semanales con las últimas herramientas de AI"
            },
            {
              icon: "🤝",
              title: "Colabora",
              description: "Únete a equipos para crear soluciones de impacto"
            },
            {
              icon: "🌟",
              title: "Crece",
              description: "Conecta con mentores y desarrolla tu perfil profesional"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="card-clean text-center hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* LATAM Pride */}
        <div className="card-clean mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-3">
            <span className="text-2xl">🌎</span>
            Orgullosamente Latinoamericano
          </h3>
          
          <p className="text-subhead leading-relaxed text-muted-foreground mb-6">
            Celebramos la diversidad, creatividad y resiliencia que nos caracteriza como región. 
            makers de México hasta Argentina, todos unidos por demostrar que desde LATAM podemos construir soluciones de clase mundial.
          </p>

          {/* Countries representation */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {["🇲🇽", "🇬🇹", "🇨🇴", "🇦🇷", "🇧🇷", "🇨🇱", "🇵🇪", "🇪🇨"].map((flag, index) => (
              <span 
                key={index} 
                className="text-xl"
              >
                {flag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
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
    </section>
  );
};

export default CommunitySection;