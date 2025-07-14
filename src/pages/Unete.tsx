import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram, Youtube, Linkedin, Users, BookOpen, Star } from "lucide-react";

const beneficios = [
  {
    icon: <BookOpen className="h-6 w-6 text-kokoa-blue" />, 
    texto: "Aprende sobre inteligencia artificial y tecnología de vanguardia."
  },
  {
    icon: <Users className="h-6 w-6 text-kokoa-blue" />, 
    texto: "Conecta y haz networking con otros builders y creativos de LATAM."
  },
  {
    icon: <Star className="h-6 w-6 text-kokoa-blue" />, 
    texto: "Accede a recursos exclusivos, talleres y oportunidades únicas."
  }
];

const Unete = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-4 text-kokoa-blue">Únete a Kokoa</h1>
        <p className="text-lg mb-8 text-gray-700 max-w-xl text-center">
          Forma parte de la comunidad que está construyendo el futuro de LATAM con inteligencia artificial.<br />
          Únete a nuestro grupo de WhatsApp y síguenos en redes sociales para no perderte nada.
        </p>
        <ul className="mb-8 w-full max-w-md mx-auto space-y-4">
          {beneficios.map((b, i) => (
            <li key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 shadow-sm">
              {b.icon}
              <span className="text-gray-800 text-base">{b.texto}</span>
            </li>
          ))}
        </ul>
        <a href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" target="_blank" rel="noopener noreferrer" className="bg-kokoa-orange text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-kokoa-orange/90 transition mb-8">
          Únete al grupo de WhatsApp
        </a>
        <div className="flex justify-center items-center gap-8 mt-4">
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
      </main>
      <Footer />
    </div>
  );
};

export default Unete;
