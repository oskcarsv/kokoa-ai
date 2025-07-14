import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Video } from "lucide-react";
import { motion } from "framer-motion";

const Meetings = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-32 pb-12 px-4">
        <section className="w-full max-w-xl mx-auto flex flex-col items-center justify-center min-h-[60vh] relative">
          {/* Fondo animado */}
          <motion.div
            className="absolute -z-10 top-1/2 left-1/2 w-96 h-96 bg-kokoa-blue/10 rounded-full filter blur-3xl opacity-40"
            animate={{ x: [-60, 60, -60], y: [-60, 60, -60], rotate: [0, 180, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{ transform: "translate(-50%, -50%)" }}
          />
          {/* Ícono animado */}
          <motion.div
            initial={{ scale: 0, rotate: -30, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.2 }}
          >
            <Video className="mx-auto mb-6 h-16 w-16 text-kokoa-blue drop-shadow-lg" />
          </motion.div>
          {/* Título animado */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 text-kokoa-blue text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            Próximamente
          </motion.h1>
          {/* Texto animado */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          >
            Pronto encontrarás aquí las grabaciones de los talleres de la comunidad.<br />
            ¡Mantente atento a nuestras redes sociales para no perderte ninguna actualización!
          </motion.p>
          {/* Botón animado */}
          <motion.a
            href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-kokoa-orange text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-kokoa-orange/90 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            Únete a la comunidad
          </motion.a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Meetings;