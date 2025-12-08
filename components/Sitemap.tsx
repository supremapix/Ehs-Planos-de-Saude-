import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BAIRROS_CURITIBA, CIDADES_RMC } from '../constants';

const Sitemap: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Mapa do Site - Todas as Localidades | EHS Planos de Saúde</title>
        <meta name="description" content="Encontre planos de saúde em seu bairro ou cidade. Lista completa de localidades atendidas em Curitiba e Região Metropolitana." />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#006d77] mb-8 text-center">Mapa do Site</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Cidades */}
          <div>
            <h2 className="text-2xl font-bold text-[#003f44] mb-6 pb-2 border-b-2 border-[#d9ed92]">
              Cidades da Região Metropolitana
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CIDADES_RMC.sort().map((cidade, index) => (
                <Link 
                  key={index} 
                  to={`/cidade/${cidade.toLowerCase().replace(/ /g, '-')}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#006d77] hover:bg-gray-50 p-2 rounded transition-colors text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-[#e63946] rounded-full"></span>
                  Plano de Saúde em {cidade}
                </Link>
              ))}
            </div>
          </div>

          {/* Bairros */}
          <div>
            <h2 className="text-2xl font-bold text-[#003f44] mb-6 pb-2 border-b-2 border-[#d9ed92]">
              Bairros de Curitiba
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BAIRROS_CURITIBA.sort().map((bairro, index) => (
                <Link 
                  key={index} 
                  to={`/plano-de-saude/${bairro.toLowerCase().replace(/ /g, '-')}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#006d77] hover:bg-gray-50 p-2 rounded transition-colors text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-[#006d77] rounded-full"></span>
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