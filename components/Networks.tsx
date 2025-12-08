import React from 'react';

const Networks: React.FC = () => {
  const logos = [
    'Hospital Albert Einstein',
    'Hospital Alemão Oswaldo Cruz',
    'Lavoisier',
    'IPQ',
    'Fleury',
    'Sírio-Libanês'
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#006d77] via-[#003f44] to-[#006d77] animate-gradient-text uppercase tracking-widest">
          Rede Credenciada de Excelência
        </h2>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap w-max gap-16 px-4">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 min-w-[200px]">
              <span className="font-bold text-gray-400 text-lg">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;