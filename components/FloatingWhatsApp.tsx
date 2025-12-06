import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../services/whatsappService';

const FloatingWhatsApp: React.FC = () => {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 pulse-ring animate-heartbeat flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Fale conosco agora!
      </span>
    </button>
  );
};

export default FloatingWhatsApp;