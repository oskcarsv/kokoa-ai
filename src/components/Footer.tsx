import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="/lovable-uploads/8e2e8027-a5b0-443d-85c0-d545ab8824a2.png" 
              alt="Kokoa Logo" 
              className="h-10 w-10"
            />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground">Kokoa</h3>
              <p className="text-sm text-muted-foreground">AI & Innovation Studio</p>
            </div>
          </div>

          {/* Mission Statement */}
          <p className="text-primary font-medium mb-6">
            "Construyendo el futuro desde Latinoamérica"
          </p>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mb-8 text-sm">
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

          {/* CTA Section */}
          <div className="card-clean max-w-lg mx-auto mb-8">
            <h4 className="text-lg font-semibold mb-3">¿Listo para construir el futuro?</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Únete a nuestra comunidad de innovadores y demuestra que desde LATAM podemos cambiar el mundo
            </p>
            <a 
              href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
                       rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Únete a la Comunidad
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Kokoa | AI & Innovation Studio. Todos los derechos reservados.</p>
            <span className="italic">Hecho con ❤️ en LATAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;