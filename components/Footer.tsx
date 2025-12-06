import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Clock, Mail } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';
import { generateWhatsAppLink } from '../services/whatsappService';

const Footer: React.FC = () => {
  const socialLink = generateWhatsAppLink();

  return (
    <footer className="bg-[#002f35] text-gray-300 pt-16 pb-8 border-t border-[#003f44]">
      {/* Inline styles for the heartbeat animation */}
      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
        }
        .heart-beat {
          animation: heartbeat 1.5s linear infinite;
          display: inline-block;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">EHS <span className="font-light">Saúde</span></h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Sua parceira ideal em gestão de saúde. Oferecemos as melhores soluções em planos de saúde com transparência e ética.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href={socialLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006d77] transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={socialLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006d77] transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={socialLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006d77] transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#d9ed92] transition-colors flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#e63946] rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#e63946] mt-1 shrink-0" size={18} />
                <span className="text-sm hover:text-white transition-colors">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#e63946] shrink-0" size={18} />
                <span className="text-sm hover:text-white transition-colors">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#e63946] shrink-0" size={18} />
                <span className="text-sm hover:text-white transition-colors">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Horário de Atendimento</h4>
            <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-[#d9ed92]">
                <Clock size={16} />
                <span className="text-sm font-semibold">Horários</span>
              </div>
              <div className="flex justify-between text-sm mb-2 border-b border-white/10 pb-2">
                <span>Seg - Sex</span>
                <span className="text-white font-medium">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sábado</span>
                <span className="text-white font-medium">08:00 - 12:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Credits */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <div className="text-center md:text-left">
            <p>© 2025 EHS Planos de Saúde. Todos os direitos reservados.</p>
            <div className="flex gap-4 justify-center md:justify-start mt-2">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="flex flex-col md:flex-row items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:bg-white/10 transition-colors">
            <span className="text-gray-400">Desenvolvido com</span>
            <span className="heart-beat text-red-500 mx-0.5 text-sm">❤️</span>
            <span className="text-gray-400">pela</span>
            <a 
              href="https://www.supremasite.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#d9ed92] hover:text-white font-bold tracking-wide transition-colors uppercase text-[10px] md:text-xs"
            >
              Suprema Sites Express
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;