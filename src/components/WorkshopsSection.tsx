import { Clock } from "lucide-react";

const WorkshopsSection = () => {
  return (
    <section className="section-clean bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-primary" />
            <h2 className="text-headline text-foreground">
              Workshops Semanales
            </h2>
          </div>
          
          <div className="card-clean">
            <p className="text-subhead leading-relaxed text-muted-foreground">
              Cada miércoles a las <span className="text-primary font-semibold">7:00 PM (hora Guatemala)</span> nos reunimos virtualmente para aprender y construir juntos.
            </p>
          </div>
        </div>

        {/* Country Times */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {[
            { name: "Guatemala", time: "7:00 PM", flag: "🇬🇹" },
            { name: "México", time: "8:00 PM", flag: "🇲🇽" },
            { name: "Colombia", time: "9:00 PM", flag: "🇨🇴" },
            { name: "Argentina", time: "11:00 PM", flag: "🇦🇷" },
            { name: "Brasil", time: "11:00 PM", flag: "🇧🇷" },
            { name: "Chile", time: "10:00 PM", flag: "🇨🇱" },
          ].map((country) => (
            <div 
              key={country.name}
              className="bg-background border border-border rounded-lg p-4 hover:border-primary/50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{country.flag}</span>
                  <span className="font-medium text-foreground">{country.name}</span>
                </div>
                <span className="text-primary font-semibold">{country.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="card-clean">
          <p className="text-muted-foreground mb-4">
            Conecta con builders de toda Latinoamérica y forma parte de la innovación regional.
          </p>
          <a 
            href="#eventos" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground 
                     rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Ver Próximos Eventos
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;