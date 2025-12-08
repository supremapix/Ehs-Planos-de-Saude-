import React from 'react';
import { Lightbulb, Heart, Apple, Activity } from 'lucide-react';

const Curiosities: React.FC = () => {
  const curiosities = [
    {
      icon: <Heart className="w-8 h-8 text-[#e63946]" />,
      title: "Coração Forte",
      text: "Rir faz bem ao coração! O riso relaxa os vasos sanguíneos e aumenta o fluxo sanguíneo por até 45 minutos após a risada."
    },
    {
      icon: <Apple className="w-8 h-8 text-[#d9ed92]" />,
      title: "Alimentação",
      text: "Beber água antes das refeições pode ajudar na digestão e aumentar a sensação de saciedade, auxiliando no controle de peso."
    },
    {
      icon: <Activity className="w-8 h-8 text-[#006d77]" />,
      title: "Atividade Física",
      text: "Apenas 30 minutos de caminhada diária podem reduzir significativamente o risco de doenças cardiovasculares e depressão."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#e63946]" />,
      title: "Prevenção",
      text: "Exames de rotina (check-ups) podem detectar problemas de saúde silenciosos em estágios iniciais, aumentando as chances de cura."
    }
  ];

  return (
    <section id="curiosidades" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#006d77] font-bold text-sm tracking-widest uppercase">Você Sabia?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#006d77] via-[#003f44] to-[#006d77] animate-gradient-text">
            Curiosidades sobre Saúde
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {curiosities.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:scale-105 duration-300">
              <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curiosities;