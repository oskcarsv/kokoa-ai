import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const siteLinks = [
    { to: "/", label: "Inicio" },
    { to: "/meetings", label: "Meetings" },
    { to: "/events", label: "Eventos" },
    { to: "/unete", label: "Únete" },
  ];

  const socialLinks = [
    { href: "https://instagram.com/kokoa.lat", icon: <Instagram className="h-6 w-6" /> },
    { href: "https://www.youtube.com/@kokoa-lat", icon: <Youtube className="h-6 w-6" /> },
    { href: "https://www.linkedin.com/company/kokoa-lat/", icon: <Linkedin className="h-6 w-6" /> },
  ];

  return (
    <footer className="bg-white border-t border-gray-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Logo & Mission */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link to="/" className="flex items-center space-x-3 mb-5">
              <img 
                src="/img/blue-without-a.png"
                alt="Kokoa Logo" 
                className="h-10 w-auto"
              />
              <span className="text-3xl font-bold text-gray-900">Kokoa</span>
            </Link>
            <p className="text-gray-600 max-w-sm">
              Construyendo el futuro desde Latinoamérica con inteligencia artificial.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start space-x-5">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-kokoa-blue transition-all duration-300 hover:scale-110">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-2"></div>

          {/* Column 2: Site Links */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-5">Navegación</h3>
            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-600 hover:text-kokoa-blue transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-5">Contacto</h3>
            <a href="mailto:info@kokoa.lat" className="text-gray-600 hover:text-kokoa-blue transition-colors duration-300">info@kokoa.lat</a>
          </div>

        </div>

        <div className="border-t border-gray-200/80 mt-12 pt-8 text-center text-base text-gray-500">
          <p>© {new Date().getFullYear()} Kokoa | AI & Innovation Studio LATAM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
