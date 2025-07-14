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
    <section id="contacto" className="section-kokoa bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
            <MessageCircle className="h-8 w-8 text-primary" />
            <h2 className="text-headline">
              Conecta con 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Nosotros
              </span>
            </h2>
          </div>
          
          <p className="text-body-large text-muted-foreground animate-fade-in-up delay-200">
            ¿Tienes una idea ambiciosa? ¿Quieres colaborar? ¿Necesitas más información? 
            Estamos aquí para ayudarte a construir el futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-up delay-300">
            <div className="card-kokoa bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                Hablemos
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">🚀 ¿Listo para unirte?</h4>
                  <p className="text-muted-foreground mb-4">
                    La forma más rápida de formar parte de nuestra comunidad es a través de WhatsApp:
                  </p>
                  <a 
                    href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    💬 Únete al WhatsApp
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">📅 Próximo Workshop</h4>
                  <p className="text-muted-foreground">
                    Cada miércoles a las 7:00 PM (hora Guatemala)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🌎 Desde toda LATAM</h4>
                  <p className="text-muted-foreground">
                    Builders conectando desde México hasta Argentina
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "En Kokoa creemos que las mejores ideas surgen cuando mentes brillantes 
                    se conectan sin fronteras."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-400">
            <div className="card-kokoa">
              <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-600 mb-2">¡Mensaje enviado!</h4>
                  <p className="text-muted-foreground">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <label htmlFor="country" className="block text-sm font-medium mb-2">
                      País
                    </label>
                    <Input
                      id="country"
                      type="text"
                      placeholder="¿Desde qué país nos escribes?"
                      className="w-full"
                    />
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
                      className="w-full min-h-[120px]"
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
      </div>
    </section>
  );
};

export default ContactSection;