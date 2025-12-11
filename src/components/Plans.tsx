import React, { useRef, useState, useEffect } from 'react';
import { PLANS, TESTIMONIALS } from '../constants';
import { Check, AlertCircle, Star } from 'lucide-react';
import { openWhatsApp } from '../services/whatsappService';

const Plans: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="planos" className="py-24 bg-white" ref={sectionRef}>
      <div className={`container mx-auto px-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center mb-16">
          <span className="text-[#e63946] font-bold text-sm tracking-widest uppercase">Nossas Soluções</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#006d77] via-[#003f44] to-[#006d77] animate-gradient-text">
            Escolha o Plano Ideal
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Temos opções flexíveis que se adaptam perfeitamente à sua necessidade e ao seu momento de vida.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-20">
          {PLANS.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl ${
                plan.highlight 
                  ? 'border-[#006d77] shadow-xl bg-white scale-[1.02] z-10' 
                  : 'border-gray-200 bg-gray-50 hover:bg-white'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-[#e63946] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-3xl uppercase shadow-sm">
                  Mais Popular
                </div>
              )}

              {/* Scarcity Badge */}
              <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#e63946] bg-red-50 px-3 py-1 rounded-full w-fit">
                <AlertCircle size={12} />
                {index % 2 === 0 ? 'Últimas 3 vagas nesta tabela' : 'Preço promocional hoje'}
              </div>

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                plan.highlight ? 'bg-[#006d77] text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {plan.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">{plan.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {['Cobertura Nacional', 'Sem Coparticipação*', 'Clube de Benefícios'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-[#006d77]" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openWhatsApp({ name: '', phone: '', email: '', birthDate: '', planType: plan.title, message: `Gostaria de garantir a condição especial do *${plan.title}* antes que acabem as vagas.`, agreeTerms: true })}
                className={`w-full py-3 px-6 rounded-xl font-bold transition-colors shadow-md hover:shadow-lg ${
                  plan.highlight
                    ? 'bg-[#006d77] text-white hover:bg-[#005a63]'
                    : 'bg-white border-2 border-[#006d77] text-[#006d77] hover:bg-[#006d77] hover:text-white'
                }`}
              >
                Garantir Condição Especial
              </button>
            </div>
          ))}
        </div>

        {/* Plan Testimonials Section */}
        <div className={`max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#006d77] via-[#003f44] to-[#006d77] animate-gradient-text">
            Histórias de quem contratou
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 4).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                <div className="shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#d9ed92]"
                  />
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                     {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                  </div>
                  <p className="text-gray-600 text-sm italic mb-2">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900 text-sm">{testimonial.name}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-[#006d77] text-xs font-bold bg-[#e0f2f1] px-2 py-0.5 rounded-full">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;