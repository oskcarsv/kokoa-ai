const AboutSection = () => {
  return (
    <section className="section-clean">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-headline mb-8 text-foreground">
          Quiénes Somos
        </h2>
        
        <div className="card-clean mb-16">
          <p className="text-subhead leading-relaxed text-center text-muted-foreground">
            Somos un grupo de apasionados por la inteligencia artificial que cree en el talento latinoamericano. 
            Creamos, aprendemos y colaboramos para elevar el nivel de innovación en la región.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🎨",
              title: "Creatividad",
              description: "Desbloqueamos tu potencial sin límites técnicos"
            },
            {
              icon: "💡",
              title: "Innovación",
              description: "Creamos soluciones que no existían antes"
            },
            {
              icon: "🌍",
              title: "Impacto",
              description: "Buscamos cambiar el mundo con cada proyecto"
            },
            {
              icon: "🚀",
              title: "Think Outside the Box",
              description: "Pensamos diferente, construimos diferente, innovamos diferente"
            }
          ].map((pillar, index) => (
            <div 
              key={index}
              className="card-clean text-center group hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;