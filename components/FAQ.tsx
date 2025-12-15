import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('.faq-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#22c55e]/20 text-[#0f0f23] rounded-full mb-6 shadow-sm">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0f0f23] via-[#22c55e] to-[#0f0f23] animate-gradient-text">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Separamos as perguntas mais comuns para te ajudar a entender melhor como funciona a contratação do seu plano.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              data-index={index}
              className={`faq-item group border rounded-2xl transition-all duration-700 overflow-hidden ${
                openIndex === index 
                  ? 'border-[#22c55e] shadow-lg bg-white ring-1 ring-[#22c55e]/20' 
                  : 'border-gray-200 hover:border-[#22c55e]/50 hover:bg-gray-50'
              } ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-4">
                  <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    openIndex === index ? 'bg-[#22c55e] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-[#22c55e]/10'
                  }`}>
                    {index + 1}
                  </span>
                  <span className={`font-semibold text-lg pr-4 ${openIndex === index ? 'text-[#22c55e]' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                </div>
                
                <ChevronDown 
                  className={`flex-shrink-0 text-[#22c55e] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`} 
                  size={24}
                />
              </button>
              
              <div 
                className={`transition-[max-height,opacity] duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-[4.5rem] text-gray-600 leading-relaxed text-base">
                  <div className="pt-2 border-t border-dashed border-gray-200">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">Ainda tem dúvidas?</p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-2 text-[#22c55e] font-bold hover:underline inline-flex items-center gap-1"
          >
            Fale com um especialista <MessageCircleQuestion size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;