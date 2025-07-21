import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-kokoa-blue/10">
      <motion.div
        className="text-center bg-white/90 rounded-2xl shadow-xl px-8 py-12 max-w-lg mx-auto border border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.2 }}
        >
          <img src="/img/blue-a.png" alt="Kokoa.lat Logo" className="h-20 w-20 mx-auto mb-6 drop-shadow-lg" />
        </motion.div>
        <motion.h1
          className="text-5xl font-extrabold text-kokoa-blue mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          ¡Ups! No encontramos la página que buscas.<br />
          <span className="text-base text-gray-500">¿Seguro que escribiste bien la dirección?</span>
        </motion.p>
        <motion.a
          href="/"
          className="inline-block bg-kokoa-blue text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-kokoa-blue/90 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          Ir al inicio
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
