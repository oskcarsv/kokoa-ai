import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Video } from "lucide-react";

const Meetings = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-32 pb-12 px-4">
        <section className="w-full max-w-xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
          <Video className="mx-auto mb-6 h-16 w-16 text-kokoa-blue" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-kokoa-blue">Próximamente</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
            Pronto encontrarás aquí las grabaciones de los talleres de la comunidad.<br />
            ¡Mantente atento a nuestras redes sociales para no perderte ninguna actualización!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Meetings;