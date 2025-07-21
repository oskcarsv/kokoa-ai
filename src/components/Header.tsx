import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/meetings", label: "Meetings" },
    { to: "/unete", label: "Únete" },
  ];

  const socialLinks = [
    { href: "https://instagram.com/kokoa.lat", icon: <Instagram className="h-5 w-5" /> },
    { href: "https://www.youtube.com/@kokoa-lat", icon: <Youtube className="h-5 w-5" /> },
    { href: "https://www.linkedin.com/company/kokoa-lat/", icon: <Linkedin className="h-5 w-5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/img/blue-without-a.png"
              alt="Kokoa.lat Logo" 
              className="h-9 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900">Kokoa.lat</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-300 ${isActive ? 'text-kokoa-blue' : 'text-gray-700 hover:text-kokoa-blue'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            {/* Íconos sociales eliminados */}
            <Button asChild className="bg-kokoa-orange text-white font-semibold shadow-md hover:bg-kokoa-orange/90 transform hover:scale-105 transition-transform duration-300 rounded-full px-6 py-2">
              <a href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" target="_blank" rel="noopener noreferrer">
                Únete
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium text-center ${isActive ? 'text-kokoa-blue' : 'text-gray-700 hover:text-kokoa-blue'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            {/* Íconos sociales eliminados en mobile */}
            <Button asChild className="bg-kokoa-orange text-white hover:bg-kokoa-orange/90 w-full">
              <a href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                Únete a la Comunidad
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
