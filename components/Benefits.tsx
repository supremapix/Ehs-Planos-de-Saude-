import React, { useRef, useEffect, useState } from 'react';
import { ShieldCheck, Wallet, Clock, Trophy, FileText, MessageSquare } from 'lucide-react';

const benefits = [
  { icon: <ShieldCheck size={32} />, title: 'Cobertura Completa', desc: 'Atendimento hospitalar, ambulatorial e obstétrico.' },
  { icon: <Wallet size={32} />, title: 'Preços Acessíveis', desc: 'Planos desenhados para caber no seu orçamento.' },
  { icon: <Clock size={32} />, title: 'Atendimento Rápido', desc: 'Agilidade na marcação de consultas e exames.' },
  { icon: <Trophy size={32} />, title: 'Rede Premium', desc: 'Acesso aos melhores hospitais e laboratórios.' },
  { icon: <FileText size={32} />, title: 'Sem Burocracia', desc: 'Contratação 100% digital e simplificada.' },
  { icon: <MessageSquare size={32} />, title: 'Suporte 24h', desc: 'Nossa equipe pronta para te ajudar sempre.' },
];

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="beneficios" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#006d77] via-[#003f44] to-[#006d77] animate-gradient-text">
            Por Que Escolher a EHS?
          </h2>
          <div className="w-20 h-1 bg-[#e63946] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#e0f2f1] rounded-full flex items-center justify-center text-[#006d77] mb-6 group-hover:bg-[#006d77] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;