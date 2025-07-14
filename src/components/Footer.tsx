import { ExternalLink } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "YouTube", url: "#", icon: "📺", label: "Canal de YouTube" },
    { name: "LinkedIn", url: "#", icon: "💼", label: "Perfil de LinkedIn" },
    { name: "Instagram", url: "#", icon: "📸", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-t from-secondary/30 to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="/lovable-uploads/8e2e8027-a5b0-443d-85c0-d545ab8824a2.png" 
              alt="Kokoa Logo" 
              className="h-12 w-12"
            />
            <div className="text-left">
              <h3 className="text-2xl font-bold">Kokoa</h3>
              <p className="text-sm text-muted-foreground">AI & Innovation Studio</p>
            </div>
          </div>

          {/* Mission Statement */}
          <p className="text-lg font-medium text-primary mb-8 max-w-2xl mx-auto">
            "Construyendo el futuro desde Latinoamérica"
          </p>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-8 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary 
                         transition-colors duration-200 group"
                aria-label={social.label}
              >
                <span className="text-2xl group-hover:animate-bounce-gentle">
                  {social.icon}
                </span>
                <span className="font-medium">{social.name}</span>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="card-kokoa bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto mb-12">
            <h4 className="text-xl font-bold mb-4">¿Listo para construir el futuro?</h4>
            <p className="text-muted-foreground mb-6">
              Únete a nuestra comunidad de innovadores y demuestra que desde LATAM podemos cambiar el mundo
            </p>
            <a 
              href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground 
                       rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 group"
            >
              🚀 Únete a la Comunidad
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            {/* Copyright */}
            <p>© 2024 Kokoa | AI & Innovation Studio. Todos los derechos reservados.</p>
            
            {/* Additional Links */}
            <div className="flex items-center gap-6">
              <a 
                href="#contacto" 
                className="hover:text-primary transition-colors duration-200"
              >
                Contacto
              </a>
              <span className="text-xs">•</span>
              <span className="italic">Hecho con ❤️ en LATAM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;