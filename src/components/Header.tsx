import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { to: "/", label: t('nav.home') },
    { to: "/meetings", label: t('nav.meetings') },
    { to: "/unete", label: t('nav.join') },
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
            <Button asChild className="bg-kokoa-orange text-white font-semibold shadow-md hover:bg-kokoa-orange/90 transform hover:scale-105 transition-transform duration-300 rounded-full px-6 py-2">
              <a href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            {/* Selector de idioma */}
            <LanguageSelector />
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
              <Button asChild className="bg-kokoa-orange text-white hover:bg-kokoa-orange/90 w-full">
                <a href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  WhatsApp
                </a>
              </Button>
              {/* Selector de idioma en móvil */}
              <div className="flex justify-center">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
