import React from 'react';

const Networks: React.FC = () => {
  const logos = [
    'Hospital Universitário Cajuru',
    'Hospital São Marcelino Champagnat',
    'Hospital Evangélico Mackenzie',
    'Santa Casa de Misericórdia de Curitiba',
    'Hospital do Trabalhador',
    'Hospital Infantil Pequeno Príncipe',
    'Hospital Nossa Senhora das Graças',
    'Hospital São Lucas',
    'Hospital Vita Curitiba',
    'Hospital Vita Batel',
    'Hospital Sugisawa',
    'Hospital da Cruz Vermelha Brasileira – Curitiba',
    'Hospital Osvaldo Cruz',
    'Hospital Pilar',
    'Hospital de Olhos do Paraná',
    'Hospital Santa Cruz',
    'Hospital Espírito de Psiquiatria Bom Retiro'
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#006d77] via-[#003f44] to-[#006d77] animate-gradient-text uppercase tracking-widest">
          Rede Credenciada de Excelência
        </h2>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap w-max gap-8 px-4">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 min-w-[240px]">
              <span className="font-bold text-gray-500 text-lg hover:text-[#006d77] transition-colors">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;