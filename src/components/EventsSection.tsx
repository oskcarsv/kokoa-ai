import { motion } from 'framer-motion';

const EventsSection = () => {
  return (
    <section id="eventos" className="bg-kokoa-blue text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold">Próximos Eventos</h2>
          <p className="text-lg mt-2 opacity-90 max-w-2xl mx-auto">
            Únete a nuestros workshops y eventos para aprender, crear y colaborar con la comunidad.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <iframe
            src="https://lu.ma/embed/calendar/cal-qFP1xRyYpq6y7Pu/events?lt=light"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
