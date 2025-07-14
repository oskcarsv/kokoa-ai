import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="bg-kokoa-blue text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-4">¿Listo para transformar el futuro?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Únete a la comunidad de mentes creativas y técnicas que están redefiniendo lo posible con AI en Latinoamérica.
          </p>
          <Button asChild size="lg" className="bg-kokoa-orange text-white hover:bg-kokoa-orange/90 transform hover:scale-105 transition-transform duration-300 px-8 py-6 text-lg">
            <a href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" target="_blank" rel="noopener noreferrer">
              Únete a la Comunidad
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
