import React from 'react';
import { ArrowRight, CheckCircle2, Flame } from 'lucide-react';
import { openWhatsApp } from '../services/whatsappService';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/Zy_8fLfC51Q?autoplay=1&mute=1&loop=1&playlist=Zy_8fLfC51Q&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            title="EHS Saúde Video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[180%] md:h-[180%] min-w-full min-h-full object-cover pointer-events-none"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Navy blue gradient overlay matching brand */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f23]/90 via-[#1a1a2e]/80 to-[#0f0f23]/70"></div>
        {/* Subtle texture/noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-28 pb-12 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-3/5 space-y-6 lg:space-y-8 text-white text-center lg:text-left">
            
            {/* Badge with Slide Down Animation */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-[#22c55e] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg">
                <CheckCircle2 size={16} className="text-[#22c55e]" />
                <span className="tracking-wide uppercase">Planos a partir de R$ 150/mês</span>
              </div>
              
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 bg-[#22c55e] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg animate-pulse">
                <Flame size={16} />
                <span className="tracking-wide uppercase">Tabela congela em 24h</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              Seu Plano de Saúde Ideal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-white relative inline-block">
                Está Aqui!
                {/* Underline accent */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#22c55e] opacity-70" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00024 6.99999C28.5002 3.49999 87.0002 -2.00001 198 3.49999" stroke="currentColor" strokeWidth="3"/></svg>
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md font-light opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
              Cobertura completa para consultas, exames, cirurgias e internações. 
              Cuidamos da sua saúde e da sua família com o melhor custo-benefício.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
              <button
                onClick={() => openWhatsApp("Olá! Quero falar com um especialista via WhatsApp conforme vi na capa do site.")}
                className="group relative overflow-hidden bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-center w-full sm:w-auto"
              >
                {/* Intermittent Shimmer Wave Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shimmer-wave"></div>
                
                <span className="relative z-10">Falar com especialista via WhatsApp</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#planos"
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center hover:-translate-y-1 w-full sm:w-auto"
              >
                Ver todos os planos disponíveis
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-300 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0f0f23] bg-gray-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex justify-center sm:justify-start text-yellow-400">★★★★★</div>
                <p>+10.000 vidas seguradas</p>
              </div>
            </div>
          </div>

          {/* Right Column: Logo Display */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards] mt-8 lg:mt-0">
            <div className="relative group">
              {/* Logo Container */}
              <div className="relative bg-[#0f0f23]/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl">
                <img 
                  src={COMPANY_INFO.logoWhite} 
                  alt={COMPANY_INFO.name}
                  className="w-[280px] md:w-[320px] lg:w-[380px] h-auto object-contain"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 -right-4 w-full h-full bg-[#22c55e]/20 rounded-3xl blur-xl"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-20 h-20 bg-[#22c55e]/30 rounded-full blur-xl"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 cursor-pointer hover:text-white transition-colors hidden md:block z-20">
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