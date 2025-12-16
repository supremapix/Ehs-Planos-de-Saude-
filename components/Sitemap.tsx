import React from 'react';
import { Link } from 'react-router-dom';
import { BAIRROS_CURITIBA, CIDADES_RMC, COMPANY_INFO } from '../constants';
import EnhancedSEO from './EnhancedSEO';
import { slugify } from '../utils/slugify';

const Sitemap: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <EnhancedSEO
        title="Mapa do Site - Todas as Localidades"
        description="Encontre planos de saúde em seu bairro ou cidade. Lista completa de localidades atendidas em Curitiba e Região Metropolitana."
        canonicalUrl={`${COMPANY_INFO.siteUrl}/sitemap`}
        keywords="mapa do site, localidades, bairros curitiba, cidades região metropolitana, plano de saúde"
      />

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#0f0f23] mb-8 text-center">Mapa do Site</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Cidades */}
          <div>
            <h2 className="text-2xl font-bold text-[#0f0f23] mb-6 pb-2 border-b-2 border-[#22c55e]">
              Cidades da Região Metropolitana
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CIDADES_RMC.sort().map((cidade, index) => (
                <Link 
                  key={index} 
                  to={`/cidade/${slugify(cidade)}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#22c55e] hover:bg-gray-50 p-2 rounded transition-colors text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full"></span>
                  Plano de Saúde em {cidade}
                </Link>
              ))}
            </div>
          </div>

          {/* Bairros */}
          <div>
            <h2 className="text-2xl font-bold text-[#0f0f23] mb-6 pb-2 border-b-2 border-[#22c55e]">
              Bairros de Curitiba
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BAIRROS_CURITIBA.sort().map((bairro, index) => (
                <Link 
                  key={index} 
                  to={`/plano-de-saude/${slugify(bairro)}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#22c55e] hover:bg-gray-50 p-2 rounded transition-colors text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full"></span>
                  Planos no {bairro}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sitemap;