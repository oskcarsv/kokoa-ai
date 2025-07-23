import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram, Youtube, Linkedin, Users, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Unete = () => {
  const { t } = useLanguage();
  
  const beneficios = [
    {
      icon: <BookOpen className="h-6 w-6 text-kokoa-blue" />, 
      texto: t('unete.benefit1')
    },
    {
      icon: <Users className="h-6 w-6 text-kokoa-blue" />, 
      texto: t('unete.benefit2')
    },
    {
      icon: <Star className="h-6 w-6 text-kokoa-blue" />, 
      texto: t('unete.benefit3')
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-16 relative">
        {/* Fondo animado */}
        <motion.div
          className="absolute -z-10 top-1/2 left-1/2 w-[32rem] h-[32rem] bg-kokoa-blue/10 rounded-full filter blur-3xl opacity-40"
          animate={{ x: [-80, 80, -80], y: [-80, 80, -80], rotate: [0, 180, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{ transform: "translate(-50%, -50%)" }}
        />
        {/* Título animado */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-kokoa-blue text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {t('unete.title')}
        </motion.h1>
        {/* Texto animado */}
        <motion.p
          className="text-lg mb-8 text-gray-700 max-w-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {t('unete.subtitle')}<br />
          {t('unete.description')}
        </motion.p>
        {/* Beneficios animados */}
        <motion.ul
          className="mb-8 w-full max-w-md mx-auto space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18
              }
            }
          }}
        >
          {beneficios.map((b, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px 0 rgba(60,67,251,0.10)" }}
            >
              {b.icon}
              <span className="text-gray-800 text-base">{b.texto}</span>
            </motion.li>
          ))}
        </motion.ul>
        {/* Botón animado */}
        <motion.a
          href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-kokoa-orange text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-kokoa-orange/90 transition mb-8 inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          {t('unete.button')}
        </motion.a>
        {/* Redes sociales animadas */}
        <motion.div
          className="flex justify-center items-center gap-8 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
        >
          <a href="https://instagram.com/kokoa.lat" target="_blank" rel="noopener noreferrer" className="text-kokoa-blue hover:scale-110 transition-transform" aria-label="Instagram">
            <Instagram className="h-8 w-8" />
          </a>
          <a href="https://www.youtube.com/@kokoa-lat" target="_blank" rel="noopener noreferrer" className="text-kokoa-blue hover:scale-110 transition-transform" aria-label="YouTube">
            <Youtube className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/company/kokoa-lat/" target="_blank" rel="noopener noreferrer" className="text-kokoa-blue hover:scale-110 transition-transform" aria-label="LinkedIn">
            <Linkedin className="h-8 w-8" />
          </a>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Unete;
