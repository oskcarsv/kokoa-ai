import { Calendar } from "lucide-react";

const EventsSection = () => {
  return (
    <section id="eventos" className="section-clean">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-headline text-foreground">
              Próximos Eventos
            </h2>
          </div>
          
          <p className="text-subhead text-muted-foreground max-w-2xl mx-auto">
            Únete a nuestros workshops y eventos para aprender, crear y colaborar con la comunidad.
          </p>
        </div>

        {/* Calendar Iframe */}
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="w-full overflow-hidden rounded-lg">
            <iframe
              src="https://lu.ma/embed/calendar/cal-qFP1xRyYpq6y7Pu/events?lt=light"
              width="100%"
              height="450"
              frameBorder="0"
              className="border border-border/50 rounded-lg"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;