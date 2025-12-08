import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import { openWhatsApp } from '../services/whatsappService';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-200 py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2 group cursor-pointer shrink-0">
          <a href="/">
            {isScrolled ? (
              <img src={COMPANY_INFO.logo} alt={COMPANY_INFO.name} className="h-10 md:h-12 lg:h-14 object-contain" />
            ) : (
               <div className="flex items-center">
                 <img src={COMPANY_INFO.logoWhite} alt={COMPANY_INFO.name} className="h-10 md:h-12 lg:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity" />
               </div>
            )}
          </a>
        </div>

        {/* Desktop Nav - Optimized Spacing */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10">
          <div className="flex items-center gap-4 lg:gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs lg:text-sm font-medium transition-colors relative group py-2 whitespace-nowrap ${
                  isScrolled ? 'text-gray-700 hover:text-[#006d77]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-[#006d77]' : 'bg-[#d9ed92]'
                }`}></span>
              </a>
            ))}
          </div>
          
          <button
            onClick={() => openWhatsApp()}
            className="flex items-center gap-2 bg-[#e63946] hover:bg-[#c92a37] text-white px-4 py-2 lg:px-5 lg:py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 active:translate-y-0 text-xs lg:text-sm whitespace-nowrap"
          >
            <Phone size={16} className="lg:w-[18px] lg:h-[18px]" />
            <span className="hidden xl:inline">{COMPANY_INFO.whatsappDisplay}</span>
            <span className="xl:hidden">WhatsApp</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#006d77]/98 backdrop-blur-xl z-50 transform transition-transform duration-500 md:hidden flex flex-col items-center justify-center space-y-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        {NAV_LINKS.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-[#d9ed92] transition-colors transform hover:scale-105"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {link.name}
          </a>
        ))}
        
        <button
          onClick={() => {
            openWhatsApp();
            setIsMobileMenuOpen(false);
          }}
          className="bg-white text-[#006d77] px-8 py-4 rounded-full font-bold text-lg mt-8 shadow-xl hover:shadow-2xl transition-all active:scale-95"
        >
          Falar no WhatsApp
        </button>
      </div>
    </header>
  );
};

export default Header;