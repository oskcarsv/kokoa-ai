const AboutSection = () => {
  return (
    <section className="section-kokoa bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-headline mb-8 animate-fade-in-up">
          ¿Qué es 
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {" "}Kokoa
          </span>
          ?
        </h2>
        
        <div className="card-kokoa animate-fade-in-up delay-200">
          <p className="text-body-large leading-relaxed text-center">
            Kokoa es el <strong className="text-primary">epicentro de innovación LATAM</strong> donde la creatividad humana se encuentra con la inteligencia artificial para crear impacto global. 
            Somos builders que no se conforman con lo que existe — <strong className="text-accent">creamos lo que debería existir.</strong>
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: "🎨",
              title: "Creatividad",
              description: "Desbloqueamos tu potencial creativo sin límites técnicos",
              delay: "delay-300"
            },
            {
              icon: "💡",
              title: "Innovación",
              description: "Creamos soluciones originales que no existían antes",
              delay: "delay-400"
            },
            {
              icon: "🌍",
              title: "Impacto",
              description: "Cada idea que materializamos busca cambiar el mundo",
              delay: "delay-500"
            },
            {
              icon: "🚀",
              title: "Think Outside the Box",
              description: "Pensamos diferente, construimos diferente, innovamos diferente",
              delay: "delay-600"
            }
          ].map((pillar, index) => (
            <div 
              key={index}
              className={`card-kokoa text-center group hover:scale-105 transition-transform duration-300 animate-fade-in-up ${pillar.delay}`}
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
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