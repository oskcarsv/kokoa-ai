import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-kokoa-blue text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            {t('cta.subtitle')}
          </p>
          <Button asChild size="lg" className="bg-kokoa-orange text-white font-bold shadow-lg hover:bg-kokoa-orange/90 transform hover:scale-105 transition-transform duration-300 rounded-full px-10 py-7 text-xl">
            <a href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" target="_blank" rel="noopener noreferrer">
              {t('cta.button')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
