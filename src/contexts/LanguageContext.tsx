import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.workshops': 'Workshops',
    'nav.join': 'Únete',
    'nav.contact': 'Contacto',
    'nav.meetings': 'Meetings',
    
    // Hero Section
    'hero.title': 'La comunidad de',
    'hero.title.end': 'latinoamericanos que crean con AI',
    'hero.subtitle': 'Conectamos builders, emprendedores y creativos que están transformando el mundo con inteligencia artificial desde Latinoamérica.',
    'hero.cta': 'Únete a la comunidad',
    'hero.whatsapp': 'WhatsApp',
    
    // About Section
    'about.title': 'Sobre nosotros',
    'about.subtitle': 'Somos un equipo de personas apasionadas por enseñar, compartir y aportar al ecosistema de inteligencia artificial en Latinoamérica.',
    'about.description': 'Creemos en el poder de la colaboración, la educación y la creatividad para transformar realidades. Nuestra misión es demostrar que desde Guatemala y la región, podemos exportar tecnología de nivel mundial, inspirando a la próxima generación de makers y líderes en AI.',
    
    // Pillars Section
    'pillars.title': 'Pilares de la Comunidad',
    'pillars.subtitle': 'Nuestros principios fundamentales que guían cada proyecto e idea.',
    'pillars.creativity.title': 'Creatividad',
    'pillars.creativity.description': 'Desbloqueamos tu potencial sin límites técnicos',
    'pillars.innovation.title': 'Innovación',
    'pillars.innovation.description': 'Creamos soluciones que no existían',
    'pillars.impact.title': 'Impacto',
    'pillars.impact.description': 'Lo que construimos transforma el mundo',
    'pillars.think.title': 'Think Outside the Box',
    'pillars.think.description': 'Pensamos, creamos y resolvemos diferente',
    
    // Workshops Section
    'workshops.title': 'Workshops Semanales',
    'workshops.subtitle': 'Nos reunimos virtualmente cada jueves para aprender, construir y conectar desde toda Latinoamérica.',
    'workshops.description': 'Consulta los horarios y accede a los próximos workshops en el calendario.',
    
    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.what.question': '¿Qué es Kokoa y cómo funciona?',
    'faq.what.answer.title': 'Kokoa es una comunidad gratuita de builders, emprendedores y creativos latinoamericanos.',
    'faq.what.answer.point1': 'No es un curso tradicional.',
    'faq.what.answer.point2': 'Aprendes haciendo proyectos reales, compartiendo y colaborando.',
    'faq.what.answer.point3': 'El valor está en la práctica y la comunidad.',
    'faq.payment.question': '¿Tengo que pagar o aplicar para unirme?',
    'faq.payment.answer.title': 'No, es 100% gratis y abierto.',
    'faq.payment.answer.point1': 'No hay membresía ni proceso de aplicación.',
    'faq.payment.answer.point2': 'Solo únete al grupo de WhatsApp y participa.',
    'faq.experience.question': '¿Necesito experiencia técnica o saber programar?',
    'faq.experience.answer.title': 'No necesitas experiencia previa ni saber programar.',
    'faq.experience.answer.point1': 'Usamos herramientas no-code y low-code.',
    'faq.experience.answer.point2': 'Lo importante son las ganas de crear y aprender.',
    'faq.activities.question': '¿Qué tipo de actividades y proyectos hacen?',
    'faq.activities.answer.title': 'Todos los jueves a las 6:00 PM (hora Guatemala) hacemos workshops virtuales.',
    'faq.activities.answer.point1': 'Automatizaciones para negocios',
    'faq.activities.answer.point2': 'Validadores de ideas',
    'faq.activities.answer.point3': 'Herramientas con AI',
    'faq.activities.answer.point4': 'Prototipos sin código',
    'faq.activities.answer.schedule': 'Horarios de referencia:',
    'faq.activities.answer.week': 'Entre semana, la comunidad colabora y comparte avances en WhatsApp.',
    'faq.miss.question': '¿Qué pasa si no puedo asistir en vivo o quiero repasar?',
    'faq.miss.answer.title': '¡No te preocupes!',
    'faq.miss.answer.point1': 'Los workshops se graban y se comparten en la comunidad.',
    'faq.miss.answer.point2': 'Miembros suelen hacer resúmenes y dar seguimiento.',
    'faq.miss.answer.point3': 'Siempre puedes ponerte al día.',
    
    // Final CTA Section
    'cta.title': '¿Listo para transformar el futuro?',
    'cta.subtitle': 'Únete a la comunidad de mentes creativas y técnicas que están redefiniendo lo posible con AI en Latinoamérica.',
    'cta.button': 'Únete a la Comunidad',
    
    // Unete Page
    'unete.title': 'Únete a Kokoa.lat',
    'unete.subtitle': 'Forma parte de la comunidad que está construyendo el futuro de LATAM con inteligencia artificial.',
    'unete.description': 'Únete a nuestro grupo de WhatsApp y síguenos en redes sociales para no perderte nada.',
    'unete.benefit1': 'Aprende sobre inteligencia artificial y tecnología de vanguardia.',
    'unete.benefit2': 'Conecta y haz networking con otros makers y creativos de LATAM.',
    'unete.benefit3': 'Accede a recursos exclusivos, talleres y oportunidades únicas.',
    'unete.button': 'Únete al grupo de WhatsApp',
    
    // Meetings Page
    'meetings.title': 'Próximamente',
    'meetings.subtitle': 'Pronto encontrarás aquí las grabaciones de los talleres de la comunidad.',
    'meetings.description': '¡Mantente atento a nuestras redes sociales para no perderte ninguna actualización!',
    'meetings.button': 'Únete a la comunidad',
    
    // Footer
    'footer.description': 'La comunidad que está construyendo el futuro desde Latinoamérica',
    'footer.navigation': 'Navegación',
    'footer.contact': 'Contacto',
    'footer.copyright': '© 2024 Kokoa.lat Todos los derechos reservados.',
    'footer.made': 'Hecho con ♥️ desde Guatemala',
    
    // Community Section
    'community.title': 'Únete a Nosotros',
    'community.subtitle': 'Conecta con makers, creativos y emprendedores que comparten tu ambición de crear con AI. Aprende, construye y colabora en una comunidad auténtica que está redefiniendo lo que significa ser innovador en Latinoamérica.',
    'community.learn.title': 'Aprende',
    'community.learn.description': 'Workshops semanales con las últimas herramientas de AI',
    'community.collaborate.title': 'Colabora',
    'community.collaborate.description': 'Únete a equipos para crear soluciones de impacto',
    'community.grow.title': 'Crece',
    'community.grow.description': 'Conecta con mentores y desarrolla tu perfil profesional',
    'community.latam.title': 'Orgullosamente Latinoamericano',
    'community.latam.description': 'Celebramos la diversidad, creatividad y resiliencia que nos caracteriza como región. makers de México hasta Argentina, todos unidos por demostrar que desde LATAM podemos construir soluciones de clase mundial.',
    'community.button': 'Únete a la Comunidad',
    
    // Contact Section
    'contact.title': 'Conecta con Nosotros',
    'contact.subtitle': '¿Tienes una idea ambiciosa? ¿Quieres colaborar? Estamos aquí para ayudarte a construir el futuro.',
    'contact.talk.title': 'Hablemos',
    'contact.ready.title': '🚀 ¿Listo para unirte?',
    'contact.ready.subtitle': 'La forma más rápida de formar parte de nuestra comunidad:',
    'contact.whatsapp': '💬 Únete al WhatsApp',
    'contact.workshop.title': '📅 Próximo Workshop',
    'contact.workshop.time': 'Cada jueves a las 6:00 PM (hora Guatemala)',
    'contact.latam.title': '🌎 Desde toda LATAM',
    'contact.latam.description': 'makers conectando desde México hasta Argentina',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.success.title': '¡Mensaje enviado!',
    'contact.form.success.description': 'Gracias por contactarnos. Te responderemos pronto.',
    'contact.form.name': 'Nombre *',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email': 'Email *',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.subject': 'Asunto *',
    'contact.form.subject.placeholder': '¿En qué podemos ayudarte?',
    'contact.form.message': 'Mensaje *',
    'contact.form.message.placeholder': 'Cuéntanos sobre tu idea, proyecto, o cómo quieres formar parte de Kokoa.lat...',
    'contact.form.sending': 'Enviando...',
    'contact.form.send': 'Enviar Mensaje',
    
    // Language Selector
    'language.es': 'Español',
    'language.en': 'English',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.workshops': 'Workshops',
    'nav.join': 'Join',
    'nav.contact': 'Contact',
    'nav.meetings': 'Meetings',
    
    // Hero Section
    'hero.title': 'The community of',
    'hero.title.end': 'Latin Americans who create with AI',
    'hero.subtitle': 'We connect builders, entrepreneurs and creatives who are transforming the world with artificial intelligence from Latin America.',
    'hero.cta': 'Join the community',
    'hero.whatsapp': 'WhatsApp',
    
    // About Section
    'about.title': 'About us',
    'about.subtitle': 'We are a team of people passionate about teaching, sharing and contributing to the artificial intelligence ecosystem in Latin America.',
    'about.description': 'We believe in the power of collaboration, education and creativity to transform realities. Our mission is to demonstrate that from Guatemala and the region, we can export world-class technology, inspiring the next generation of AI makers and leaders.',
    
    // Pillars Section
    'pillars.title': 'Community Pillars',
    'pillars.subtitle': 'Our fundamental principles that guide every project and idea.',
    'pillars.creativity.title': 'Creativity',
    'pillars.creativity.description': 'We unlock your potential without technical limits',
    'pillars.innovation.title': 'Innovation',
    'pillars.innovation.description': 'We create solutions that didn\'t exist',
    'pillars.impact.title': 'Impact',
    'pillars.impact.description': 'What we build transforms the world',
    'pillars.think.title': 'Think Outside the Box',
    'pillars.think.description': 'We think, create and solve differently',
    
    // Workshops Section
    'workshops.title': 'Weekly Workshops',
    'workshops.subtitle': 'We meet virtually every Thursday to learn, build and connect from all over Latin America.',
    'workshops.description': 'Check the schedules and access upcoming workshops in the calendar.',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.what.question': 'What is Kokoa and how does it work?',
    'faq.what.answer.title': 'Kokoa is a free community of Latin American builders, entrepreneurs and creatives.',
    'faq.what.answer.point1': 'It\'s not a traditional course.',
    'faq.what.answer.point2': 'You learn by doing real projects, sharing and collaborating.',
    'faq.what.answer.point3': 'The value is in practice and community.',
    'faq.payment.question': 'Do I have to pay or apply to join?',
    'faq.payment.answer.title': 'No, it\'s 100% free and open.',
    'faq.payment.answer.point1': 'There\'s no membership or application process.',
    'faq.payment.answer.point2': 'Just join the WhatsApp group and participate.',
    'faq.experience.question': 'Do I need technical experience or know how to program?',
    'faq.experience.answer.title': 'You don\'t need previous experience or know how to program.',
    'faq.experience.answer.point1': 'We use no-code and low-code tools.',
    'faq.experience.answer.point2': 'What matters is the desire to create and learn.',
    'faq.activities.question': 'What kind of activities and projects do you do?',
    'faq.activities.answer.title': 'Every Thursday at 6:00 PM (Guatemala time) we do virtual workshops.',
    'faq.activities.answer.point1': 'Business automations',
    'faq.activities.answer.point2': 'Idea validators',
    'faq.activities.answer.point3': 'AI tools',
    'faq.activities.answer.point4': 'No-code prototypes',
    'faq.activities.answer.schedule': 'Reference schedules:',
    'faq.activities.answer.week': 'During the week, the community collaborates and shares progress on WhatsApp.',
    'faq.miss.question': 'What if I can\'t attend live or want to review?',
    'faq.miss.answer.title': 'Don\'t worry!',
    'faq.miss.answer.point1': 'Workshops are recorded and shared in the community.',
    'faq.miss.answer.point2': 'Members usually make summaries and follow up.',
    'faq.miss.answer.point3': 'You can always catch up.',
    
    // Final CTA Section
    'cta.title': 'Ready to transform the future?',
    'cta.subtitle': 'Join the community of creative and technical minds who are redefining what\'s possible with AI in Latin America.',
    'cta.button': 'Join the Community',
    
    // Unete Page
    'unete.title': 'Join Kokoa.lat',
    'unete.subtitle': 'Be part of the community that is building the future of LATAM with artificial intelligence.',
    'unete.description': 'Join our WhatsApp group and follow us on social media to not miss anything.',
    'unete.benefit1': 'Learn about artificial intelligence and cutting-edge technology.',
    'unete.benefit2': 'Connect and network with other makers and creatives from LATAM.',
    'unete.benefit3': 'Access exclusive resources, workshops and unique opportunities.',
    'unete.button': 'Join WhatsApp Group',
    
    // Community Section
    'community.title': 'Join Us',
    'community.subtitle': 'Connect with makers, creatives and entrepreneurs who share your ambition to create with AI. Learn, build and collaborate in an authentic community that is redefining what it means to be an innovator in Latin America.',
    'community.learn.title': 'Learn',
    'community.learn.description': 'Weekly workshops with the latest AI tools',
    'community.collaborate.title': 'Collaborate',
    'community.collaborate.description': 'Join teams to create impactful solutions',
    'community.grow.title': 'Grow',
    'community.grow.description': 'Connect with mentors and develop your professional profile',
    'community.latam.title': 'Proudly Latin American',
    'community.latam.description': 'We celebrate the diversity, creativity and resilience that characterizes us as a region. makers from Mexico to Argentina, all united to demonstrate that from LATAM we can build world-class solutions.',
    'community.button': 'Join the Community',
    
    // Meetings Page
    'meetings.title': 'Coming Soon',
    'meetings.subtitle': 'Soon you will find here the recordings of the community workshops.',
    'meetings.description': 'Stay tuned to our social media to not miss any updates!',
    'meetings.button': 'Join the community',
    
    // Footer
    'footer.description': 'The community that is building the future from Latin America',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 Kokoa.lat All rights reserved.',
    'footer.made': 'Made with ♥️ from Guatemala',
    
    // Contact Section
    'contact.title': 'Connect with Us',
    'contact.subtitle': 'Do you have an ambitious idea? Want to collaborate? We\'re here to help you build the future.',
    'contact.talk.title': 'Let\'s Talk',
    'contact.ready.title': '🚀 Ready to join?',
    'contact.ready.subtitle': 'The fastest way to be part of our community:',
    'contact.whatsapp': '💬 Join WhatsApp',
    'contact.workshop.title': '📅 Next Workshop',
    'contact.workshop.time': 'Every Thursday at 6:00 PM (Guatemala time)',
    'contact.latam.title': '🌎 From all over LATAM',
    'contact.latam.description': 'makers connecting from Mexico to Argentina',
    'contact.form.title': 'Send us a message',
    'contact.form.success.title': 'Message sent!',
    'contact.form.success.description': 'Thanks for contacting us. We\'ll get back to you soon.',
    'contact.form.name': 'Name *',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email *',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': 'Subject *',
    'contact.form.subject.placeholder': 'How can we help you?',
    'contact.form.message': 'Message *',
    'contact.form.message.placeholder': 'Tell us about your idea, project, or how you want to be part of Kokoa.lat...',
    'contact.form.sending': 'Sending...',
    'contact.form.send': 'Send Message',
    
    // Language Selector
    'language.es': 'Español',
    'language.en': 'English',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 