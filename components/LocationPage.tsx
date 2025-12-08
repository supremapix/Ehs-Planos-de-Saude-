import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, CheckCircle, Star } from 'lucide-react';
import { COMPANY_INFO, PLANS } from '../constants';
import { openWhatsApp } from '../services/whatsappService';
import ContactForm from './ContactForm';

interface LocationPageProps {
  type: 'bairro' | 'cidade';
}

const LocationPage: React.FC<LocationPageProps> = ({ type }) => {
  const { slug } = useParams<{ slug: string }>();
  
  const formatName = (str: string | undefined) => {
    if (!str) return '';
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const locationName = formatName(slug);
  const locationType = type === 'bairro' ? 'Bairro' : 'Cidade';
  const fullName = `${locationName}`;
  const titleSEO = `Plano de Saúde em ${fullName} | Cotação Online EHS Saúde`;
  const descSEO = `Procurando Plano de Saúde em ${fullName}? Tabelas com até 40% de desconto, carência reduzida e ampla rede credenciada em ${fullName}. Cote agora pelo WhatsApp!`;
  const canonicalUrl = `${COMPANY_INFO.siteUrl}/${type === 'bairro' ? 'plano-de-saude' : 'cidade'}/${slug}`;

  // Schema JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": `EHS Planos de Saúde - ${fullName}`,
    "description": descSEO,
    "url": canonicalUrl,
    "telephone": COMPANY_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.address,
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "areaServed": fullName,
    "priceRange": "$$"
  };

  const heroImage = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920";
  const contentImage1 = "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800";
  const contentImage2 = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800";

  const sections = [
    {
      title: `Planos de Saúde em ${fullName}: O que você precisa saber`,
      content: `Moradores e empresas de ${fullName} agora contam com uma consultoria especializada para encontrar o plano de saúde ideal. A escolha de um convênio médico na região requer atenção à rede credenciada local, garantindo que você tenha atendimento rápido e próximo de sua residência ou trabalho. Nossa equipe mapeou as melhores opções que atendem especificamente ${fullName} e arredores.`
    },
    {
      title: `Melhores Operadoras que atendem em ${fullName}`,
      content: `Ao contratar um plano em ${fullName}, é crucial escolher operadoras com forte presença local. Trabalhamos com Unimed, Amil, Bradesco Saúde, SulAmérica, NotreDame Intermédica, entre outras, que oferecem hospitais, clínicas e laboratórios de excelência na região de ${locationName}. Analisamos o perfil de cada cliente para indicar a seguradora com o melhor custo-benefício.`
    },
    {
      title: `Redução de Carência para moradores de ${fullName}`,
      content: `Você sabia que residindo em ${fullName} você pode conseguir redução de carência? Se você já possui um plano de saúde anterior, realizamos o processo de portabilidade ou compra de carência. Isso permite que você utilize consultas e exames muito mais rápido no seu novo plano. Nossa equipe cuida de toda a burocracia para você.`
    },
    {
      title: `Planos Empresariais para empresas de ${fullName}`,
      content: `O comércio e as empresas de ${fullName} têm acesso a tabelas exclusivas. Com um CNPJ (inclusive MEI), é possível contratar planos de saúde empresariais com custos até 40% menores que os planos individuais. Ofereça mais qualidade de vida aos seus colaboradores e sócios com um investimento inteligente.`
    },
    {
      title: `Atendimento Hospitalar em ${fullName}`,
      content: `A infraestrutura de saúde em ${fullName} é um fator decisivo. Nossos planos garantem acesso aos principais hospitais e prontos-socorros que servem a região. Em casos de urgência e emergência, ter um hospital credenciado próximo faz toda a diferença para a segurança da sua família.`
    },
    {
      title: `Planos Familiares: Proteção para sua família em ${fullName}`,
      content: `Para as famílias de ${fullName}, oferecemos planos com descontos progressivos conforme o número de vidas. Cuidar da saúde dos filhos e cônjuges nunca foi tão acessível. Inclua dependentes e garanta pediatria, obstetrícia e todas as especialidades médicas com a segurança que seu lar merece.`
    },
    {
      title: `Plano de Saúde para Idosos em ${fullName}`,
      content: `A terceira idade em ${fullName} merece atenção especial. Temos planos sênior focados em medicina preventiva e acompanhamento contínuo (Geriatria). Buscamos opções que equilibram reajustes por faixa etária com redes de atendimento que oferecem conforto e acessibilidade para os idosos da região.`
    },
    {
      title: `Plano Odontológico em ${fullName}`,
      content: `Além da saúde médica, o sorriso dos moradores de ${fullName} é importante. Oferecemos a opção de contratação conjugada de plano de saúde + odonto, ou apenas o plano odontológico, cobrindo limpezas, canais, restaurações e cirurgias com dentistas credenciados no bairro.`
    },
    {
      title: `Coparticipação: Vale a pena em ${fullName}?`,
      content: `Explicamos detalhadamente como funcionam os planos com e sem coparticipação para clientes de ${fullName}. Para quem usa pouco o plano, a coparticipação pode gerar uma economia mensal significativa na mensalidade fixa. Analisamos seu histórico de uso para recomendar a modalidade financeira mais vantajosa.`
    },
    {
      title: `Maternidade e Obstetrícia em ${fullName}`,
      content: `Futuras mamães de ${fullName} podem contar com os melhores hospitais maternidade. Orientamos sobre os períodos de carência para parto e quais planos oferecem a melhor hotelaria e suporte neonatal, garantindo tranquilidade total no momento mais importante da vida.`
    },
    {
      title: `Reembolso de Consultas`,
      content: `Prefere um médico particular em ${fullName} que não atende convênio? Com os planos de livre escolha que oferecemos, você pode consultar com seu médico de confiança e solicitar o reembolso do valor conforme a tabela do plano contratado. Flexibilidade total para sua saúde.`
    },
    {
      title: `Telemedicina: Saúde na palma da mão`,
      content: `Evite filas em prontos-socorros de ${fullName} para casos simples. Todos os nossos planos modernos incluem serviço de Telemedicina 24h, onde você consulta com médicos via vídeo chamada pelo celular, recebe receitas e atestados sem sair de casa.`
    },
    {
      title: `Diferenciais da EHS Saúde em ${fullName}`,
      content: `Atuamos fortemente em ${fullName} oferecendo um pós-venda diferenciado. Não apenas vendemos o plano, mas auxiliamos na liberação de guias, dúvidas sobre rede credenciada e questões financeiras. Somos seus parceiros de longo prazo na gestão da saúde.`
    },
    {
      title: `Planos para MEI em ${fullName}`,
      content: `Microempreendedores Individuais de ${fullName} podem contratar planos a partir de 1 vida (o titular). Basta ter o MEI ativo há 6 meses. É a maneira mais barata e inteligente de ter acesso à saúde privada de qualidade, com nota fiscal para abater no imposto de renda.`
    },
    {
      title: `Hospitais de Referência na Região`,
      content: `Morar em ${fullName} permite acesso fácil a grandes centros médicos de Curitiba e RMC. Nossos consultores listam exatamente quais hospitais de referência (como Hospital Marcelino Champagnat, Santa Cruz, Pilar, etc.) estão cobertos em cada categoria de plano apresentada.`
    },
    {
      title: `Exames Laboratoriais e de Imagem`,
      content: `A rede de diagnósticos em ${fullName} e arredores é vasta. Garanta acesso a laboratórios renomados como Frischmann Aisengart, Lanac e outros para exames de sangue, ressonância, tomografia e ultrassom com agilidade na entrega de resultados.`
    },
    {
      title: `Cotação Online Rápida para ${fullName}`,
      content: `Não perca tempo ligando para várias operadoras. Em nosso site, você solicita uma cotação unificada e recebe um comparativo completo de preços e coberturas para ${fullName} diretamente no seu WhatsApp ou E-mail. Transparência total nos valores.`
    },
    {
      title: `Conclusão: Invista na sua saúde em ${fullName}`,
      content: `Viver em ${fullName} é ótimo, e viver com saúde é ainda melhor. Não deixe para depois. Proteja você, sua família ou seus colaboradores contra imprevistos médicos. A EHS Planos de Saúde está pronta para atender ${fullName} com as melhores ofertas do mercado.`
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>{titleSEO}</title>
        <meta name="description" content={descSEO} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Helmet>

      {/* Hero Local */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt={`Plano de Saúde em ${fullName}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003f44]/90 to-[#006d77]/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-[#d9ed92] text-[#003f44] px-4 py-1 rounded-full font-bold text-sm mb-6 animate-fade-in-up">
            <MapPin size={16} /> Atendimento em {fullName}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
            Plano de Saúde em <br/> <span className="text-[#d9ed92]">{fullName}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
            Cotação personalizada com os melhores preços e rede credenciada da região.
          </p>
          <button 
            onClick={() => openWhatsApp(`Olá, gostaria de uma cotação de plano de saúde para ${fullName}.`)}
            className="bg-[#25D366] hover:bg-[#1ebd56] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 mx-auto animate-fade-in-up delay-300"
          >
            Cotar Agora via WhatsApp
          </button>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 border-b">
        <div className="container mx-auto px-4 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#006d77]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-bold">Planos em {fullName}</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Content Column */}
            <div className="lg:w-2/3 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                   <h2 className="text-3xl font-bold text-[#006d77] mb-6">{sections[0].title}</h2>
                   <p className="leading-relaxed mb-6">{sections[0].content}</p>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                     <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><CheckCircle size={18} className="text-[#25D366]" /> Atendimento Rápido</li>
                     <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><CheckCircle size={18} className="text-[#25D366]" /> Redução de Carência</li>
                     <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><CheckCircle size={18} className="text-[#25D366]" /> Suporte Especializado</li>
                     <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><CheckCircle size={18} className="text-[#25D366]" /> Melhores Operadoras</li>
                   </ul>
                </div>

                <div className="my-12">
                  <img src={contentImage1} alt={`Saúde em ${fullName}`} className="w-full h-80 object-cover rounded-2xl shadow-lg mb-8" />
                  {sections.slice(1, 6).map((section, idx) => (
                    <div key={idx} className="mb-10">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-2 h-8 bg-[#e63946] rounded-full"></span>
                        {section.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-justify">{section.content}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#003f44] text-white p-10 rounded-3xl shadow-xl my-12 text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Mora em {fullName}?</h3>
                    <p className="mb-8 text-gray-200">Temos condições especiais para o seu endereço hoje. Consulte tabela atualizada.</p>
                    <button 
                       onClick={() => openWhatsApp(`Sou de ${fullName} e quero a tabela de preços.`)}
                       className="bg-white text-[#003f44] px-8 py-3 rounded-full font-bold hover:bg-[#d9ed92] transition-colors"
                    >
                      Ver Preços para {fullName}
                    </button>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="my-12">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <img src={contentImage2} alt={`Família em ${fullName}`} className="w-full h-full object-cover rounded-2xl shadow-lg min-h-[300px]" />
                      <div className="space-y-8">
                        {sections.slice(6, 9).map((section, idx) => (
                          <div key={idx}>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
                          </div>
                        ))}
                      </div>
                   </div>
                   
                   {sections.slice(9, 18).map((section, idx) => (
                    <div key={idx} className="mb-8 p-6 bg-gray-50 rounded-xl border-l-4 border-[#006d77] hover:bg-white transition-colors">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-justify">{section.content}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-[#006d77] mb-4">Cotação Rápida</h3>
                  <p className="text-sm text-gray-500 mb-6">Preencha para receber valores para {fullName}.</p>
                  <button 
                    onClick={() => openWhatsApp(`Cotação rápida para ${fullName}`)}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-bold hover:bg-[#1dbf52] transition-colors mb-3"
                  >
                    Chamar no WhatsApp
                  </button>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                  >
                    <Phone size={18} /> Ligar Agora
                  </a>
                </div>

                <div className="bg-[#006d77] text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Star size={18} className="text-[#d9ed92] fill-[#d9ed92]" /> Planos Populares</h3>
                  <ul className="space-y-4">
                    {PLANS.slice(0, 4).map(plan => (
                      <li key={plan.id} className="flex items-center gap-3 pb-3 border-b border-white/10 last:border-0">
                         <div className="bg-white/10 p-2 rounded-lg">{plan.icon}</div>
                         <div>
                           <div className="font-bold text-sm">{plan.title}</div>
                           <div className="text-xs text-gray-300">Tabelas para {locationType}</div>
                         </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default LocationPage;