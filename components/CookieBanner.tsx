import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consented = localStorage.getItem('ehs-cookie-consent');
    if (!consented) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('ehs-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-200 p-4 md:p-6 animate-[slideUp_0.5s_ease-out]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          Utilizamos cookies para oferecer a melhor experiência. Ao continuar navegando, você concorda com nossa 
          <a href="#" className="text-[#006d77] underline ml-1">Política de Privacidade</a>.
        </p>
        <div className="flex gap-3">
          <button 
            onClick={acceptCookies}
            className="bg-[#006d77] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#005a63] transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;