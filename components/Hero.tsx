import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../services/whatsappService';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax-like fixed position */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://picsum.photos/id/437/1920/1080")', 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#003f44]/90 to-[#006d77]/70"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl text-white space-y-6 animate-[fadeIn_1s_ease-out]">
          <div className="inline-flex items-center gap-2 bg-[#d9ed92] text-[#003f44] px-4 py-1 rounded-full text-sm font-bold mb-4">
            <CheckCircle2 size={16} />
            <span>Planos a partir de R$ 150/mês</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Seu Plano de Saúde Ideal <br />
            <span className="text-[#d9ed92]">Está Aqui!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed">
            Cobertura completa para consultas, exames, cirurgias e internações. 
            Cuidamos da sua saúde e da sua família com preços que cabem no seu bolso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => openWhatsApp()}
              className="group bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 animate-float"
            >
              COTAR VIA WHATSAPP
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#planos"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all text-center flex items-center justify-center"
            >
              Ver Planos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <span className="text-xs uppercase tracking-widest">Role para baixo</span>
      </div>
    </section>
  );
};

export default Hero;