import React from 'react';
import { Download, CheckCircle, FileText } from 'lucide-react';
import { openWhatsApp } from '../services/whatsappService';

const LeadMagnet: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0f0f23] to-[#1a1a2e] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          
          {/* Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#22c55e] text-white px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider">
              <FileText size={16} />
              Material Gratuito
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Baixe o Guia: <br/>
              <span className="text-[#22c55e]">5 Segredos para Reduzir Custos</span> no Plano de Saúde
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Descubra como escolher o plano ideal sem pagar por coberturas que você não usa. Um manual completo preparado por nossos especialistas.
            </p>

            <ul className="space-y-3">
              {[
                'Comparativo entre Planos Individuais e MEI',
                'Como funciona a portabilidade de carências',
                'Checklist para não cair em armadilhas'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle size={20} className="text-[#22c55e] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card CTA */}
          <div className="md:w-1/3 w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Download size={32} className="text-[#22c55e]" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Baixar Agora</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Receba o PDF completo diretamente no seu WhatsApp em instantes.
              </p>
              
              <button
                onClick={() => openWhatsApp("Olá! Gostaria de receber o *Guia Gratuito de Redução de Custos* em PDF que vi no site.")}
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                QUERO MEU GUIA GRÁTIS
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>
              
              <p className="mt-4 text-xs text-gray-400">
                🔒 Seus dados estão 100% seguros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;