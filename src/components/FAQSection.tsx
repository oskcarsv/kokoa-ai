import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Función para calcular horarios basados en la hora de Guatemala (6:00 PM)
const getWorkshopTimes = () => {
  // Hora de referencia: 6:00 PM en Guatemala
  const baseTime = '6:00 PM';
  
  // Diferencias horarias conocidas (en horas) desde Guatemala
  const timeZones = [
    { name: "México", offset: 0 },
    { name: "Colombia", offset: 1 },
    { name: "Chile", offset: 2 },
    { name: "Argentina", offset: 3 },
  ];

  return timeZones.map(({ name, offset }) => {
    // Calcular hora local
    let [time, period] = baseTime.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    let newHours = hours + offset;
    
    if (newHours > 12) {
      newHours -= 12;
      period = period === 'PM' ? 'AM' : 'PM';
    }
    
    return { 
      name, 
      time: `${newHours}:${minutes.toString().padStart(2, '0')} ${period}` 
    };
  });
};

const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('faq.what.question'),
      answer: (
        <>
          <strong>{t('faq.what.answer.title')}</strong><br />
          <ul className="list-disc pl-5 mt-2">
            <li>{t('faq.what.answer.point1')}</li>
            <li>{t('faq.what.answer.point2')}</li>
            <li>{t('faq.what.answer.point3')}</li>
          </ul>
        </>
      ),
    },
    {
      question: t('faq.payment.question'),
      answer: (
        <>
          <strong>{t('faq.payment.answer.title')}</strong><br />
          <ul className="list-disc pl-5 mt-2">
            <li>{t('faq.payment.answer.point1')}</li>
            <li>{t('faq.payment.answer.point2')}</li>
          </ul>
        </>
      ),
    },
    {
      question: t('faq.experience.question'),
      answer: (
        <>
          <strong>{t('faq.experience.answer.title')}</strong><br />
          <ul className="list-disc pl-5 mt-2">
            <li>{t('faq.experience.answer.point1')}</li>
            <li>{t('faq.experience.answer.point2')}</li>
          </ul>
        </>
      ),
    },
    {
      question: t('faq.activities.question'),
      answer: (
        <>
          <strong>{t('faq.activities.answer.title')}</strong><br />
          <ul className="list-disc pl-5 mt-2">
            <li>{t('faq.activities.answer.point1')}</li>
            <li>{t('faq.activities.answer.point2')}</li>
            <li>{t('faq.activities.answer.point3')}</li>
            <li>{t('faq.activities.answer.point4')}</li>
          </ul>
          <div className="mt-3">
            <span className="font-semibold">{t('faq.activities.answer.schedule')}</span>
            <ul className="list-disc pl-5 mt-1">
              {getWorkshopTimes().map((country) => (
                <li key={country.name}>{country.name}: {country.time}</li>
              ))}
            </ul>
          </div>
          <span className="block mt-2">{t('faq.activities.answer.week')}</span>
        </>
      ),
    },
    {
      question: t('faq.miss.question'),
      answer: (
        <>
          <strong>{t('faq.miss.answer.title')}</strong><br />
          <ul className="list-disc pl-5 mt-2">
            <li>{t('faq.miss.answer.point1')}</li>
            <li>{t('faq.miss.answer.point2')}</li>
            <li>{t('faq.miss.answer.point3')}</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="max-w-2xl mx-auto my-16 px-4" id="faq">
      <div className="flex flex-col items-center mb-2">
        <HelpCircle className="h-10 w-10 text-kokoa-blue mb-2" />
        <h2 className="text-3xl font-bold mb-8 text-center">{t('faq.title')}</h2>
      </div>
      <Accordion type="single" collapsible>
        {faqs.map((faq, idx) => (
          <AccordionItem value={"faq-" + idx} key={idx}>
            <AccordionTrigger className="text-lg font-semibold text-kokoa-blue">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection; 