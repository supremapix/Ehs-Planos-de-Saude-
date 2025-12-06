import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#e0f2f1] text-[#006d77] rounded-full mb-6 shadow-sm">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#006d77] via-[#003f44] to-[#006d77] animate-gradient-text">
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
              className={`group border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-[#006d77] shadow-lg bg-white ring-1 ring-[#006d77]/20' 
                  : 'border-gray-200 hover:border-[#006d77]/50 hover:bg-gray-50'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-4">
                  <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    openIndex === index ? 'bg-[#006d77] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-[#006d77]/10'
                  }`}>
                    {index + 1}
                  </span>
                  <span className={`font-semibold text-lg pr-4 ${openIndex === index ? 'text-[#006d77]' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                </div>
                
                <ChevronDown 
                  className={`flex-shrink-0 text-[#006d77] transition-transform duration-300 ${
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
            className="mt-2 text-[#006d77] font-bold hover:underline inline-flex items-center gap-1"
          >
            Fale com um especialista <MessageCircleQuestion size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;