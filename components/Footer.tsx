import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Clock, Mail, ChevronRight, Heart } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, BAIRROS_CURITIBA, CIDADES_RMC } from '../constants';
import { generateWhatsAppLink } from '../services/whatsappService';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLink = generateWhatsAppLink();
  const currentYear = new Date().getFullYear();
  
  // Limitar a exibição de links no footer para não ficar gigante visualmente, mas manter estrutura
  const topBairros = BAIRROS_CURITIBA.slice(0, 10);
  const topCidades = CIDADES_RMC.slice(0, 8);

  return (
    <footer className="bg-[#002f35] text-gray-300 pt-16 border-t border-[#003f44]">
      <div className="container mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Social */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img src={COMPANY_INFO.logoWhite} alt={COMPANY_INFO.name} className="h-14 object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Sua parceira ideal em gestão de saúde. Oferecemos as melhores soluções em planos de saúde com transparência e ética para Curitiba e Região.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={socialLink} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006d77] transition-colors"><Instagram size={20} /></a>
              <a href={socialLink} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006d77] transition-colors"><Facebook size={20} /></a>
              <a href={socialLink} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006d77] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-2 bg-[#003f44] p-6 rounded-2xl border border-white/5">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Mail size={18} className="text-[#e63946]" /> Contato Rápido
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-lg transition-colors">
                <div className="bg-[#e63946] p-2 rounded-full"><Phone size={16} className="text-white" /></div>
                <div>
                  <div className="text-xs text-gray-400">Ligue Agora</div>
                  <div className="text-white font-bold text-sm">{COMPANY_INFO.phone}</div>
                </div>
              </a>
              <a href={socialLink} target="_blank" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-lg transition-colors">
                <div className="bg-[#25D366] p-2 rounded-full"><Heart size={16} className="text-white" /></div>
                <div>
                  <div className="text-xs text-gray-400">WhatsApp</div>
                  <div className="text-white font-bold text-sm">Iniciar Conversa</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Atendimento</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#e63946] mt-1 shrink-0" size={18} />
                <span className="text-sm hover:text-white transition-colors">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[#e63946] shrink-0" size={18} />
                <span className="text-sm hover:text-white transition-colors">{COMPANY_INFO.schedule}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Links (Internal Linking) */}
        <div className="border-t border-gray-700 py-8">
          <h5 className="text-sm font-bold text-[#d9ed92] mb-4 uppercase tracking-wider">Atendemos em toda região</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs text-gray-500">
             {topBairros.map((bairro, i) => (
               <Link key={i} to={`/plano-de-saude/${bairro.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors truncate">
                 Planos em {bairro}
               </Link>
             ))}
             {topCidades.map((cidade, i) => (
               <Link key={i} to={`/cidade/${cidade.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors truncate">
                 Planos em {cidade}
               </Link>
             ))}
             <Link to="/sitemap" className="col-span-2 text-[#e63946] font-bold hover:underline flex items-center gap-1">
               Ver todas as localidades <ChevronRight size={12} />
             </Link>
          </div>
        </div>

        {/* Bottom Bar / Credits */}
        <div className="bg-[#00252a] -mx-4 px-4 py-6 mt-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
            <div className="text-center md:text-left">
              <p>© {currentYear} EHS Planos de Saúde. Todos os direitos reservados. (v2.1)</p>
              <div className="flex gap-4 justify-center md:justify-start mt-2">
                <Link to="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
                <span className="text-gray-700">|</span>
                <Link to="#" className="hover:text-white transition-colors">Termos de Uso</Link>
              </div>
            </div>
            
            {/* Developer Credit - Giant Heart */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-400 text-[10px] uppercase tracking-widest">Desenvolvido por</span>
              <a 
                href="https://www.supremamidia.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 group bg-white/5 px-6 py-2 rounded-full border border-white/10 hover:border-[#e63946]/50 hover:bg-white/10 transition-all"
              >
                <span className="text-white font-bold text-base tracking-wide group-hover:text-[#d9ed92] transition-colors">SUPREMA MÍDIA</span>
                <Heart size={24} className="heart-beat-giant fill-red-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;