import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Función para calcular horarios basados en la hora de Guatemala (6:00 PM)
const getWorkshopTimes = () => {
  // Hora de referencia: 6:00 PM en Guatemala
  const baseTime = '6:00 PM';
  
  // Diferencias horarias conocidas (en horas) desde Guatemala
  const timeZones = [
    { name: "Guatemala & México", flag: "\u{1F1EC}\u{1F1F9} \u{1F1F2}\u{1F1FD}", offset: 0 },
    { name: "Colombia", flag: "\u{1F1E8}\u{1F1F4}", offset: 1 },
    { name: "Chile", flag: "\u{1F1E8}\u{1F1F1}", offset: 2 },
    { name: "Argentina", flag: "\u{1F1E6}\u{1F1F7}", offset: 3 },
  ];

  return timeZones.map(({ name, flag, offset }) => {
    if (offset === 0) {
      return { name, flag, time: baseTime };
    }
    
    // Calcular hora local
    let [time, period] = baseTime.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    let newHours = hours + offset;
    
    if (newHours > 12) {
      newHours -= 12;
      period = period === 'PM' ? 'AM' : 'PM';
    }
    
    return { 
      name, 
      flag,
      time: `${newHours}:${minutes.toString().padStart(2, '0')} ${period}` 
    };
  });
};

const WorkshopsSection = () => {
  const { t } = useLanguage();
  const countryTimes = getWorkshopTimes();

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
          <h2 className="text-4xl font-bold mb-4">{t('workshops.title')}</h2>
          <p className="text-lg leading-relaxed mb-4 opacity-90">
            {t('workshops.subtitle')}
          </p>
          <p className="text-base opacity-80">
            {t('workshops.description')}
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
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl">{country.flag}</span>
                  <p className="font-bold text-lg text-white">{country.name}</p>
                </div>
                <p className="text-white font-semibold text-xl">{country.time}</p>
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
