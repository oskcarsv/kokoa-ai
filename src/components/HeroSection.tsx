import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, language } = useLanguage();

  // Secuencias de palabras según el idioma
  const spanishSequence = [
    'Innovadores',
    800,
    'Makers',
    2000,
    'Emprendedores',
    800,
    'Diseñadores',
    800,
    'Desarrolladores',
    800,
    'Creativos',
    800,
  ];

  const englishSequence = [
    'Innovators',
    800,
    'Makers',
    2000,
    'Entrepreneurs',
    800,
    'Designers',
    800,
    'Developers',
    800,
    'Creatives',
    800,
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>

      {/* Background shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-kokoa-blue/10 rounded-full filter blur-3xl opacity-40"
        animate={{ x: [-100, 100, -100], y: [-100, 100, -100], rotate: [0, 180, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-kokoa-orange/10 rounded-full filter blur-3xl opacity-40"
        animate={{ x: [100, -100, 100], y: [100, -100, 100], rotate: [0, -180, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 35, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tighter">
            {t('hero.title')} <br />
            <span className="text-kokoa-blue">
              <TypeAnimation
                sequence={language === 'es' ? spanishSequence : englishSequence}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="inline-block"
              />
            </span>
            <br />
            {t('hero.title.end')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-light">
            {t('hero.subtitle')}
          </p>
        {/* Íconos sociales arriba del botón principal */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <a href="https://instagram.com/kokoa.lat" target="_blank" rel="noopener noreferrer" className="text-kokoa-blue hover:scale-110 transition-transform" aria-label="Instagram">
            <Instagram className="h-8 w-8" />
          </a>
          <a href="https://www.youtube.com/@kokoa-lat" target="_blank" rel="noopener noreferrer" className="text-kokoa-blue hover:scale-110 transition-transform" aria-label="YouTube">
            <Youtube className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/company/kokoa-lat/" target="_blank" rel="noopener noreferrer" className="text-kokoa-blue hover:scale-110 transition-transform" aria-label="LinkedIn">
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
          <Button asChild size="lg" className="bg-kokoa-blue text-white font-bold shadow-lg hover:bg-kokoa-blue/90 transform hover:scale-105 transition-transform duration-300 rounded-full px-10 py-7 text-xl">
            <a href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" target="_blank" rel="noopener noreferrer">
              {t('hero.cta')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
