import { useState } from "react";
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: t('contact.form.success.title'),
      description: t('contact.form.success.description'),
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
              {t('contact.title')}
            </h2>
          </div>
          
          <p className="text-subhead text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="card-clean">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              {t('contact.talk.title')}
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">{t('contact.ready.title')}</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  {t('contact.ready.subtitle')}
                </p>
                <a 
                  href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                >
                  {t('contact.whatsapp')}
                </a>
              </div>

              <div>
                <h4 className="font-medium mb-2">{t('contact.workshop.title')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('contact.workshop.time')}
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">{t('contact.latam.title')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('contact.latam.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-clean">
            <h3 className="text-xl font-semibold mb-6">{t('contact.form.title')}</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-green-600 mb-2">{t('contact.form.success.title')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('contact.form.success.description')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder={t('contact.form.name.placeholder')}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder={t('contact.form.email.placeholder')}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    placeholder={t('contact.form.subject.placeholder')}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder={t('contact.form.message.placeholder')}
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
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t('contact.form.send')}
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