import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Flame, Volume2, VolumeX } from 'lucide-react';
import { openWhatsApp } from '../services/whatsappService';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  // Video ID: MfyXF29wRwM
  // Params: autoplay, loop (requires playlist=video_id), controls=0 (hide initially), modestbranding
  const videoBaseUrl = "https://www.youtube.com/embed/MfyXF29wRwM";
  const videoParams = `?autoplay=1&loop=1&playlist=MfyXF29wRwM&controls=${isMuted ? '0' : '1'}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&mute=${isMuted ? '1' : '0'}`;
  const videoSrc = `${videoBaseUrl}${videoParams}`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Optimized Background Image with Slow Zoom Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920" 
          alt="Família feliz e saudável"
          className="w-full h-full object-cover object-center animate-slow-zoom"
          loading="eager"
        />
        {/* Advanced Gradient Overlay for better depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003f44] via-[#006d77]/90 to-[#006d77]/40 opacity-95"></div>
        {/* Subtle texture/noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-3/5 space-y-8 text-white">
            
            {/* Badge with Slide Down Animation */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-[#d9ed92] px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                <CheckCircle2 size={16} className="text-[#d9ed92]" />
                <span className="tracking-wide uppercase text-xs sm:text-sm">Planos a partir de R$ 150/mês</span>
              </div>
              
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 bg-[#e63946] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                <Flame size={16} />
                <span className="tracking-wide uppercase text-xs sm:text-sm">Tabela congela em 24h</span>
              </div>
            </div>
            
            {/* Main Headline */}
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
            <div className="flex flex-col sm:flex-row gap-5 pt-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
              <button
                onClick={() => openWhatsApp("Olá! Quero falar com um especialista via WhatsApp conforme vi na capa do site.")}
                className="group relative overflow-hidden bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-center"
              >
                {/* Shimmer Effect Container */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                
                <span className="relative z-10">Falar com especialista via WhatsApp</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#planos"
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center hover:-translate-y-1"
              >
                Ver todos os planos disponíveis
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-6 flex items-center gap-6 text-sm text-gray-300 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
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

          {/* Right Column: Video Widget */}
          <div className="lg:w-2/5 flex justify-center lg:justify-end opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
            <div className="relative group">
              {/* Phone Frame styling */}
              <div className={`relative w-[260px] md:w-[280px] h-[460px] md:h-[500px] bg-black rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden transition-all duration-500 ${isMuted ? 'lg:rotate-[-6deg] lg:hover:rotate-0' : 'rotate-0 scale-105'}`}>
                
                {/* Video Iframe */}
                <iframe 
                  src={videoSrc} 
                  title="EHS Planos de Saúde"
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                {/* Sound Control Overlay */}
                <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isMuted ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}>
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 hover:bg-[#e63946] hover:border-[#e63946] transition-all shadow-lg active:scale-95"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    <span className="text-sm font-bold">{isMuted ? 'Ativar Som' : 'Silenciar'}</span>
                  </button>
                </div>

                {/* Top Notch Decoration */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
              </div>

              {/* Decorative elements behind phone */}
              <div className="absolute -z-10 top-10 -right-4 w-full h-full bg-[#d9ed92]/20 rounded-[2.5rem] blur-xl"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-20 h-20 bg-[#e63946]/30 rounded-full blur-xl"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 cursor-pointer hover:text-white transition-colors hidden md:block">
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