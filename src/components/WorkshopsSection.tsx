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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block mb-4 text-kokoa-blue"
            animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <CalendarClock className="h-16 w-16" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Workshops Semanales</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Nos reunimos virtualmente cada miércoles para aprender, construir y conectar desde toda Latinoamérica.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {countryTimes.map((country) => (
            <motion.div
              key={country.name}
              className="text-center bg-gray-100 p-4 rounded-lg border border-transparent hover:border-kokoa-blue hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <p className="font-bold text-gray-800">{country.name}</p>
              <p className="text-kokoa-blue font-semibold">{country.time}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
