import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Clock, Mail } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002f35] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">EHS <span className="font-light">Saúde</span></h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Sua parceira ideal em gestão de saúde. Oferecemos as melhores soluções em planos de saúde com transparência e ética.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006d77] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006d77] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006d77] transition-colors">
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
                  <a href={link.href} className="hover:text-[#d9ed92] transition-colors flex items-center gap-2">
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
                <span className="text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#e63946] shrink-0" size={18} />
                <span className="text-sm">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#e63946] shrink-0" size={18} />
                <span className="text-sm">{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[#e63946] shrink-0" size={18} />
                <span className="text-sm">{COMPANY_INFO.schedule}</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Horário de Atendimento</h4>
            <p className="text-sm text-gray-400 mb-6">
              Nossa equipe está disponível para tirar suas dúvidas nos horários abaixo:
            </p>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="flex justify-between text-sm mb-2">
                <span>Seg - Sex</span>
                <span className="text-white">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sábado</span>
                <span className="text-white">08:00 - 12:00</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 EHS Planos de Saúde. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;