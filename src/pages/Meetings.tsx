import { motion } from 'framer-motion';

const Meetings = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Grabaciones de los Talleres</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Aquí encontrarás las grabaciones de nuestras reuniones semanales. ¡Ponte al día con todo el contenido y aprendizaje de la comunidad!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Meetings;