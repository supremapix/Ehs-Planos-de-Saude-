import React from 'react';
import { Timer, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../services/whatsappService';

const Urgency: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f0f23] to-[#1a1a2e] text-white py-12 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-6">
          <div className="bg-white/20 p-4 rounded-full animate-pulse">
            <Timer size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">Promoção Especial - Vagas Limitadas!</h3>
            <p className="text-red-100">
              Garanta isenção de carência para consultas e exames simples nas próximas 48h.
            </p>
          </div>
        </div>
        
        <button 
          onClick={() => openWhatsApp()}
          className="bg-[#22c55e] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          GARANTIR MINHA VAGA
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Urgency;