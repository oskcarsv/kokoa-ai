import { useState } from "react";
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto. ¡Gracias por tu interés en Kokoa!",
    });

    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="section-clean">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h2 className="text-headline text-foreground">
              Conecta con Nosotros
            </h2>
          </div>
          
          <p className="text-subhead text-muted-foreground">
            ¿Tienes una idea ambiciosa? ¿Quieres colaborar? Estamos aquí para ayudarte a construir el futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="card-clean">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              Hablemos
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">🚀 ¿Listo para unirte?</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  La forma más rápida de formar parte de nuestra comunidad:
                </p>
                <a 
                  href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                >
                  💬 Únete al WhatsApp
                </a>
              </div>

              <div>
                <h4 className="font-medium mb-2">📅 Próximo Workshop</h4>
                <p className="text-muted-foreground text-sm">
                  Cada jueves a las 6:00 PM (hora Guatemala)
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">🌎 Desde toda LATAM</h4>
                <p className="text-muted-foreground text-sm">
                  Builders conectando desde México hasta Argentina
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-clean">
            <h3 className="text-xl font-semibold mb-6">Envíanos un mensaje</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-green-600 mb-2">¡Mensaje enviado!</h4>
                <p className="text-muted-foreground text-sm">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Cuéntanos sobre tu idea, proyecto, o cómo quieres formar parte de Kokoa..."
                    className="w-full min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;