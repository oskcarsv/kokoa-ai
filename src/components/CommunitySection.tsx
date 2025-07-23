import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CommunitySection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section-clean bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-headline mb-6 text-foreground">
            {t('community.title')}
          </h2>
          
          <div className="card-clean mb-8">
            <p className="text-subhead leading-relaxed text-muted-foreground">
              {t('community.subtitle')}
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "🎓",
              title: t('community.learn.title'),
              description: t('community.learn.description')
            },
            {
              icon: "🤝",
              title: t('community.collaborate.title'),
              description: t('community.collaborate.description')
            },
            {
              icon: "🌟",
              title: t('community.grow.title'),
              description: t('community.grow.description')
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="card-clean text-center hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* LATAM Pride */}
        <div className="card-clean mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-3">
            <span className="text-2xl">🌎</span>
            {t('community.latam.title')}
          </h3>
          
          <p className="text-subhead leading-relaxed text-muted-foreground mb-6">
            {t('community.latam.description')}
          </p>

          {/* Countries representation */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {["🇲🇽", "🇬🇹", "🇨🇴", "🇦🇷", "🇧🇷", "🇨🇱", "🇵🇪", "🇪🇨"].map((flag, index) => (
              <span 
                key={index} 
                className="text-xl"
              >
                {flag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Button 
          asChild
          size="lg"
          className="btn-primary text-base px-8 py-4"
        >
          <a 
            href="https://chat.whatsapp.com/JqT60S7eCMwLHtLG5ZHHzr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            {t('community.button')}
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CommunitySection;