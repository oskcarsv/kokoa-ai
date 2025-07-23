import { motion } from 'framer-motion';
import { BrainCircuit, Zap, Rocket, Box } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PillarsSection = () => {
  const { t } = useLanguage();
  
  const pillars = [
    {
      icon: <BrainCircuit className="h-12 w-12 text-white" />,
      title: t('pillars.creativity.title'),
      description: t('pillars.creativity.description'),
    },
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: t('pillars.innovation.title'),
      description: t('pillars.innovation.description'),
    },
    {
      icon: <Rocket className="h-12 w-12 text-white" />,
      title: t('pillars.impact.title'),
      description: t('pillars.impact.description'),
    },
    {
      icon: <Box className="h-12 w-12 text-white" />,
      title: t('pillars.think.title'),
      description: t('pillars.think.description'),
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut" as const
      },
    }),
  };

  const iconHover = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="bg-kokoa-blue text-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{t('pillars.title')}</h2>
          <p className="text-lg sm:text-xl mt-4 opacity-90 max-w-2xl mx-auto">{t('pillars.subtitle')}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="text-center p-8 bg-white/10 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ y: -12, boxShadow: "0px 25px 40px rgba(0,0,0,0.25)", transition: { duration: 0.3 } }}
            >
              <motion.div className="inline-block mb-5 p-4 bg-white/20 rounded-full" variants={iconHover} whileHover="hover">
                {pillar.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
              <p className="opacity-90 text-base">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
