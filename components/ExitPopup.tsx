import React, { useState, useEffect } from 'react';
import { X, Clock, Gift } from 'lucide-react';
import { openWhatsApp } from '../services/whatsappService';

const ExitPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const sessionShown = sessionStorage.getItem('ehs-exit-popup-shown');
    if (sessionShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !sessionStorage.getItem('ehs-exit-popup-shown')) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('ehs-exit-popup-shown', 'true');
      }
    };

    // Fallback for mobile (time based)
    const timer = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem('ehs-exit-popup-shown')) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('ehs-exit-popup-shown', 'true');
      }
    }, 15000); // Show after 15 seconds

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  // Countdown timer
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleClaim = () => {
    openWhatsApp("Olá! Vi o POPUP de Desconto Especial no site e quero garantir minha condição exclusiva antes que o tempo acabe!");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden animate-[scaleUp_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-white/80 rounded-full p-1 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-[#e63946] p-6 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center gap-2">
            <Gift size={48} className="animate-bounce" />
            <h3 className="text-2xl font-bold uppercase tracking-wide">Espere! Não vá embora ainda</h3>
            <p className="font-medium text-red-100">Temos uma condição exclusiva para você</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-center space-y-6">
          <div>
            <p className="text-gray-600 text-lg mb-2">Solicite sua cotação agora e ganhe:</p>
            <h4 className="text-2xl font-bold text-[#006d77]">50% DE DESCONTO*</h4>
            <p className="text-sm text-gray-500 mt-1">Na primeira mensalidade (consulte condições)</p>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-center justify-center gap-3">
            <Clock size={20} className="text-[#e63946] animate-pulse" />
            <span className="text-[#e63946] font-bold font-mono text-xl">
              Oferta expira em: {formatTime(timeLeft)}
            </span>
          </div>

          <button
            onClick={handleClaim}
            className="w-full bg-[#25D366] hover:bg-[#1dbf52] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-2"
          >
            QUERO MEU DESCONTO AGORA
          </button>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 text-sm hover:text-gray-600 underline"
          >
            Não, obrigado. Prefiro pagar o preço normal.
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;