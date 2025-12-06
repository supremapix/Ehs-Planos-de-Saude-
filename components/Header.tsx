import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import { openWhatsApp } from '../services/whatsappService';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className={`font-bold text-2xl ${isScrolled ? 'text-[#006d77]' : 'text-white'}`}>
            EHS <span className="font-light">Saúde</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#e63946] ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2 bg-[#e63946] text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            <Phone size={18} />
            <span className="hidden lg:inline">{COMPANY_INFO.phone}</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#006d77] z-50 transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-[#d9ed92] transition-colors"
          >
            {link.name}
          </a>
        ))}
        
        <button
          onClick={() => {
            openWhatsApp();
            setIsMobileMenuOpen(false);
          }}
          className="bg-white text-[#006d77] px-8 py-3 rounded-full font-bold text-lg mt-8 shadow-xl"
        >
          Falar no WhatsApp
        </button>
      </div>
    </header>
  );
};

export default Header;