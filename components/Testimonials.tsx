import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Roberto Almeida',
    role: 'Plano Familiar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    text: 'A contratação foi super rápida! O atendimento via WhatsApp me ajudou a tirar todas as dúvidas e escolhi o melhor plano para minha esposa e filhos.',
  },
  {
    id: 2,
    name: 'Ana Cláudia Souza',
    role: 'Plano MEI',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    text: 'Como microempreendedora, precisava de um custo acessível. A EHS conseguiu reduzir minha carência e o preço ficou excelente.',
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    role: 'Plano Sênior',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    text: 'Fui muito bem atendido. O respeito e a paciência da equipe em explicar os detalhes para a terceira idade fizeram toda a diferença.',
  },
  {
    id: 4,
    name: 'Mariana Costa',
    role: 'Plano Individual',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    text: 'A rede credenciada é ótima, consegui marcar meus exames no laboratório perto de casa na mesma semana que contratei.',
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#e63946] font-bold text-sm tracking-widest uppercase">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#006d77] mt-2">O que dizem nossos clientes</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden min-h-[300px] flex items-center justify-center">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`absolute w-full transition-all duration-700 ease-in-out transform ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-10 scale-95 pointer-events-none'
                }`}
              >
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 text-center mx-4">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-[#d9ed92] shadow-md"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-[#006d77] text-white p-1.5 rounded-full">
                        <Quote size={14} fill="white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">"{item.text}"</p>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                    <p className="text-[#006d77] font-medium text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#006d77] w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;