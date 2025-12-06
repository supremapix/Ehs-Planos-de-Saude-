import React from 'react';

const Networks: React.FC = () => {
  // Using picsum just as placeholders for logos since I cannot upload assets
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
        <h3 className="text-xl font-semibold text-gray-500 uppercase tracking-widest">
          Rede Credenciada de Excelência
        </h3>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap w-max gap-16 px-4">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 min-w-[200px]">
              <span className="font-bold text-gray-400 text-lg">{logo}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Networks;