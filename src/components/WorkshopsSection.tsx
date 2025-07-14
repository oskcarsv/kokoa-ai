import { motion } from 'framer-motion';
import { CalendarClock } from 'lucide-react';

const countryTimes = [
  { name: "Guatemala", time: "7:00 PM" },
  { name: "México", time: "8:00 PM" },
  { name: "Colombia", time: "9:00 PM" },
  { name: "Argentina", time: "11:00 PM" },
  { name: "Chile", time: "10:00 PM" },
];

const WorkshopsSection = () => {
  return (
    <section className="bg-kokoa-blue text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block mb-4 text-white"
            animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <CalendarClock className="h-16 w-16" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Workshops Semanales</h2>
          <p className="text-lg leading-relaxed mb-4 opacity-90">
            Nos reunimos virtualmente cada miércoles para aprender, construir y conectar desde toda Latinoamérica.
          </p>
          <p className="text-base opacity-80">
            Consulta los horarios y accede a los próximos workshops en el calendario.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-5xl mx-auto">
          {/* Horarios verticales */}
          <motion.div 
            className="flex-1 flex flex-col justify-center gap-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, staggerChildren: 0.1 }}
          >
            {countryTimes.map((country) => (
              <motion.div
                key={country.name}
                className="bg-white/10 border border-white/20 rounded-lg p-6 text-center shadow hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <p className="font-bold text-lg text-white mb-1">{country.name}</p>
                <p className="text-kokoa-orange font-semibold text-xl">{country.time}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Frame de Luma */}
          <motion.div 
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden max-w-xl">
              <iframe
                src="https://lu.ma/embed/calendar/cal-qFP1xRyYpq6y7Pu/events?lt=light"
                width="100%"
                height="600"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                className="w-full h-[400px] md:h-[600px]"
                style={{ minHeight: 400 }}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
