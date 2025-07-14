import { motion } from 'framer-motion';

const AboutSection = () => {
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">¿Quiénes Somos?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Somos una comunidad apasionada por la inteligencia artificial que cree en el poder creativo y técnico de Latinoamérica. Juntos construimos, colaboramos e innovamos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
