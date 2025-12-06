import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../services/whatsappService';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image with Slow Zoom Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920" 
          alt="Família feliz e saudável"
          className="w-full h-full object-cover object-center animate-slow-zoom"
          loading="eager"
        />
        {/* Advanced Gradient Overlay for better depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003f44] via-[#006d77]/80 to-transparent opacity-90"></div>
        {/* Subtle texture/noise overlay (optional) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl text-white space-y-8">
          
          {/* Badge with Slide Down Animation */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-[#d9ed92] px-5 py-2 rounded-full text-sm font-bold shadow-lg opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <CheckCircle2 size={16} className="text-[#d9ed92]" />
            <span className="tracking-wide uppercase text-xs sm:text-sm">Planos a partir de R$ 150/mês</span>
          </div>
          
          {/* Main Headline with Staggered Animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            Seu Plano de Saúde Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9ed92] to-white relative">
              Está Aqui!
              {/* Underline accent */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#d9ed92] opacity-70" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00024 6.99999C28.5002 3.49999 87.0002 -2.00001 198 3.49999" stroke="currentColor" strokeWidth="3"/></svg>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-100 max-w-xl leading-relaxed drop-shadow-md font-light opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
            Cobertura completa para consultas, exames, cirurgias e internações. 
            Cuidamos da sua saúde e da sua família.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
            <button
              onClick={() => openWhatsApp()}
              className="group relative overflow-hidden bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
            >
              {/* Shimmer Effect Container */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
              
              <span className="relative z-10">COTAR VIA WHATSAPP</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="#planos"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center hover:-translate-y-1"
            >
              Ver Nossos Planos
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-8 flex items-center gap-6 text-sm text-gray-300 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
            <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-[#003f44] bg-gray-300 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
            <div>
              <div className="flex text-yellow-400">★★★★★</div>
              <p>+10.000 vidas seguradas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 cursor-pointer hover:text-white transition-colors">
        <a href="#beneficios" className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em]">Descubra Mais</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-pulse"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;