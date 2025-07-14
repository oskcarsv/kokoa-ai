import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  return (
    <section id="eventos" className="section-kokoa bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
            <Calendar className="h-8 w-8 text-accent" />
            <h2 className="text-headline">
              Próximos 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Eventos
              </span>
            </h2>
          </div>
          
          <p className="text-body-large text-muted-foreground mb-8 animate-fade-in-up delay-200">
            Mantente al día con nuestros workshops, colaboraciones y eventos especiales
          </p>
        </div>

        {/* Calendar Embed */}
        <div className="mb-16 animate-fade-in-up delay-300">
          <div className="card-kokoa bg-gradient-to-br from-card/80 to-secondary/30 border-2 border-primary/10">
            <div className="flex justify-center">
              <iframe
                src="https://lu.ma/embed/calendar/cal-qFP1xRyYpq6y7Pu/events?lt=light"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "12px",
                  maxWidth: "800px"
                }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up delay-400">
          <div className="card-kokoa hover:bg-primary/5 group transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="text-3xl group-hover:animate-bounce-gentle">📅</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Workshops Regulares</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada miércoles nos reunimos para aprender nuevas herramientas de AI, 
                  trabajar en proyectos colaborativos y compartir conocimiento.
                </p>
              </div>
            </div>
          </div>

          <div className="card-kokoa hover:bg-accent/5 group transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="text-3xl group-hover:animate-bounce-gentle">🎯</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Eventos Especiales</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hackathons, charlas con expertos, demostraciones de proyectos 
                  y colaboraciones con otras comunidades de innovación.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-500">
          <div className="card-kokoa bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <h3 className="text-2xl font-bold mb-4">¿Listo para formar parte?</h3>
            <p className="text-muted-foreground mb-8">
              No te pierdas ningún evento. Únete a nuestra comunidad y recibe notificaciones 
              de todos los workshops y eventos especiales.
            </p>
            <Button 
              asChild
              size="lg"
              className="btn-accent"
            >
              <a 
                href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                Únete a la Comunidad
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;