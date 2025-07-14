import { Clock, Globe, Users } from "lucide-react";

const WorkshopsSection = () => {
  const countries = [
    { name: "Guatemala", time: "7:00 PM", flag: "🇬🇹" },
    { name: "México", time: "8:00 PM", flag: "🇲🇽" },
    { name: "Colombia", time: "9:00 PM", flag: "🇨🇴" },
    { name: "Argentina", time: "11:00 PM", flag: "🇦🇷" },
    { name: "Brasil", time: "11:00 PM", flag: "🇧🇷" },
    { name: "Chile", time: "10:00 PM", flag: "🇨🇱" },
  ];

  return (
    <section className="section-kokoa bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
            <Clock className="h-8 w-8 text-primary" />
            <h2 className="text-headline">
              Nos Reunimos Cada 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Miércoles
              </span>
            </h2>
          </div>
          
          <div className="card-kokoa max-w-3xl mx-auto animate-fade-in-up delay-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <Users className="h-6 w-6 text-accent" />
              Workshops Semanales
            </h3>
            <p className="text-body-large leading-relaxed">
              Cada miércoles a las <strong className="text-primary">7:00 PM (hora Guatemala)</strong> nos reunimos virtualmente para aprender, crear y colaborar. 
              Builders de toda Latinoamérica: México, Colombia, Argentina, Brasil, Chile y más países se conectan para 
              <strong className="text-accent"> construir el futuro juntos.</strong>
            </p>
          </div>
        </div>

        {/* Country Times Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up delay-300">
            <Globe className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Horarios por País</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((country, index) => (
              <div 
                key={country.name}
                className={`bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 
                          hover:bg-primary/5 transition-all duration-300 group
                          animate-fade-in-up delay-${400 + index * 100}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:animate-bounce-gentle">
                      {country.flag}
                    </span>
                    <span className="font-medium text-foreground">
                      {country.name}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-primary">
                    {country.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up delay-700">
          <div className="card-kokoa bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <p className="text-body-large mb-6">
              🌟 <strong>¡Conecta con builders de toda LATAM!</strong> 🌟
            </p>
            <p className="text-muted-foreground mb-8">
              Cada sesión es una oportunidad para aprender algo nuevo, colaborar en proyectos reales, 
              y formar parte de una comunidad que está redefiniendo la innovación en nuestra región.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#eventos" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground 
                         rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 group"
              >
                Ver Próximos Eventos
                <Clock className="ml-2 h-4 w-4 group-hover:animate-bounce-gentle" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;