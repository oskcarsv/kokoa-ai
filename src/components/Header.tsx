import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/8e2e8027-a5b0-443d-85c0-d545ab8824a2.png" 
              alt="Kokoa Logo" 
              className="h-8 w-8"
            />
            <div>
              <h1 className="text-lg font-semibold text-foreground">Kokoa</h1>
              <p className="text-xs text-muted-foreground -mt-1">AI & Innovation Studio</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                YouTube
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>

            {/* CTA Button */}
            <Button 
              asChild
              className="btn-primary"
            >
              <a 
                href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Únete
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  YouTube
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </div>

              <Button 
                asChild
                className="btn-primary w-full"
              >
                <a 
                  href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Únete a la Comunidad
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;