import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Qué es Kokoa.lat y cómo funciona?",
    answer: (
      <>
        <strong>Kokoa.lat</strong> es una <strong>comunidad gratuita</strong> de makers, emprendedores y creativos latinoamericanos.<br />
        <ul className="list-disc pl-5 mt-2">
          <li>No es un curso tradicional.</li>
          <li>Aprendes haciendo proyectos reales, compartiendo y colaborando.</li>
          <li>El valor está en la práctica y la comunidad.</li>
        </ul>
      </>
    ),
  },
  {
    question: "¿Tengo que pagar o aplicar para unirme?",
    answer: (
      <>
        <strong>No, es 100% gratis y abierto.</strong><br />
        <ul className="list-disc pl-5 mt-2">
          <li>No hay membresía ni proceso de aplicación.</li>
          <li>Solo únete al grupo de WhatsApp y participa.</li>
        </ul>
      </>
    ),
  },
  {
    question: "¿Necesito experiencia técnica o saber programar?",
    answer: (
      <>
        <strong>No necesitas experiencia previa ni saber programar.</strong><br />
        <ul className="list-disc pl-5 mt-2">
          <li>Usamos herramientas <b>no-code</b> y <b>low-code</b>.</li>
          <li>Lo importante son las ganas de crear y aprender.</li>
        </ul>
      </>
    ),
  },
  {
    question: "¿Qué tipo de actividades y proyectos hacen?",
    answer: (
      <>
        <strong>Todos los jueves a las 6:00 PM (hora Guatemala)</strong> hacemos workshops virtuales.<br />
        <ul className="list-disc pl-5 mt-2">
          <li>Automatizaciones para negocios</li>
          <li>Validadores de ideas</li>
          <li>Herramientas con AI</li>
          <li>Prototipos sin código</li>
        </ul>
        <div className="mt-3">
          <span className="font-semibold">Horarios de referencia:</span>
          <ul className="list-disc pl-5 mt-1">
            <li>México: 7:00 PM</li>
            <li>Colombia: 8:00 PM</li>
            <li>Chile: 9:00 PM</li>
            <li>Argentina: 10:00 PM</li>
          </ul>
        </div>
        <span className="block mt-2">Entre semana, la comunidad colabora y comparte avances en WhatsApp.</span>
      </>
    ),
  },
  {
    question: "¿Qué pasa si no puedo asistir en vivo o quiero repasar?",
    answer: (
      <>
        <strong>¡No te preocupes!</strong><br />
        <ul className="list-disc pl-5 mt-2">
          <li>Los workshops se graban y se comparten en la comunidad.</li>
          <li>Miembros suelen hacer resúmenes y dar seguimiento.</li>
          <li>Siempre puedes ponerte al día.</li>
        </ul>
      </>
    ),
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto my-16 px-4" id="faq">
      <div className="flex flex-col items-center mb-2">
        <HelpCircle className="h-10 w-10 text-kokoa-blue mb-2" />
        <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
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