import { Button } from "@/components/ui/button";
import { User, UserCheck, UserCog, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const faces = [User, UserCheck, UserCog, UserPlus];

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50 to-white flex items-center justify-center min-h-[60vh]">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <motion.div
          className="flex gap-4 sm:gap-8 mb-8 sm:mb-10 flex-wrap justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {faces.map((Icon, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.12, boxShadow: "0 8px 32px 0 rgba(60,67,251,0.15)" }}
              className="rounded-full bg-white shadow-lg p-3 sm:p-4 transition-all duration-300"
            >
              <Icon className="h-14 w-14 sm:h-20 sm:w-20 text-kokoa-blue/90" />
            </motion.div>
          ))}
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 text-center">{t('about.title')}</h2>
        <p className="text-base sm:text-xl text-gray-700 mb-4 text-center max-w-lg sm:max-w-2xl leading-relaxed">
          {t('about.subtitle')}<br /><br />
          {t('about.description')}<br /><br />
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
