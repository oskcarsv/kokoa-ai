import { Heart, Users, Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="section-kokoa bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
            <Heart className="h-8 w-8 text-accent" />
            <h2 className="text-headline">
              Únete a 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Nosotros
              </span>
            </h2>
          </div>
        </div>

        {/* Main Message */}
        <div className="card-kokoa text-center mb-16 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-fade-in-up delay-200">
          <p className="text-body-large leading-relaxed mb-6">
            Conecta con <strong className="text-primary">builders, creativos y emprendedores</strong> que comparten tu ambición de crear con AI. 
            Aprende, construye y colabora en una comunidad auténtica que está redefiniendo lo que significa ser 
            <strong className="text-accent"> innovador en Latinoamérica.</strong>
          </p>
          
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground mt-8">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>+500 Builders</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              <span>+50 Proyectos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🌎</span>
              <span>15+ Países</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "🎓",
              title: "Aprende Continuamente",
              description: "Workshops semanales con las últimas herramientas de AI y tecnologías emergentes",
              delay: "delay-300"
            },
            {
              icon: "🤝",
              title: "Colabora en Proyectos Reales",
              description: "Únete a equipos multidisciplinarios para crear soluciones que impacten el mundo",
              delay: "delay-400"
            },
            {
              icon: "🌟",
              title: "Impulsa tu Carrera",
              description: "Conecta con mentores, encuentra colaboradores y desarrolla tu perfil profesional",
              delay: "delay-500"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className={`card-kokoa text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up ${benefit.delay}`}
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* LATAM Pride Section */}
        <div className="card-kokoa bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-primary/20 animate-fade-in-up delay-600">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
              <span className="text-3xl">🌎</span>
              Orgullosamente Latinoamericano
            </h3>
            
            <p className="text-body-large leading-relaxed mb-8">
              En Kokoa celebramos la <strong className="text-primary">diversidad, creatividad y resiliencia</strong> que nos caracteriza como región. 
              Aquí encuentras builders de México hasta Argentina, todos unidos por la misión de demostrar que 
              <strong className="text-accent"> desde LATAM podemos construir soluciones de clase mundial.</strong>
            </p>

            {/* Countries representation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["🇲🇽", "🇬🇹", "🇨🇴", "🇦🇷", "🇧🇷", "🇨🇱", "🇵🇪", "🇪🇨", "🇺🇾", "🇻🇪"].map((flag, index) => (
                <span 
                  key={index} 
                  className="text-2xl hover:animate-bounce-gentle cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {flag}
                </span>
              ))}
            </div>

            <Button 
              asChild
              size="lg"
              className="btn-primary text-lg px-10 py-6"
            >
              <a 
                href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                🚀 Únete a la Revolución LATAM
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;