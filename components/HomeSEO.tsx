import React from 'react';
import EnhancedSEO from './EnhancedSEO';
import { COMPANY_INFO, FAQS } from '../constants';

const HomeSEO: React.FC = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": COMPANY_INFO.name,
    "url": COMPANY_INFO.siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${COMPANY_INFO.siteUrl}/plano-de-saude/{search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": COMPANY_INFO.name,
    "image": `${COMPANY_INFO.siteUrl}/logo-dark.png`,
    "url": COMPANY_INFO.siteUrl,
    "telephone": COMPANY_INFO.phoneFormatted,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.address,
      "addressLocality": COMPANY_INFO.city,
      "addressRegion": COMPANY_INFO.state,
      "postalCode": COMPANY_INFO.postalCode,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4284,
      "longitude": -49.2733
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Curitiba"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "sameAs": [
      COMPANY_INFO.socialMedia.facebook,
      COMPANY_INFO.socialMedia.instagram
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Planos de Saúde",
    "provider": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    },
    "areaServed": "BR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planos de Saúde",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano Individual",
            "description": "Para você que busca cuidado personalizado e total atenção à sua saúde."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano Familiar",
            "description": "Proteção completa para toda a família com descontos progressivos."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano Empresarial",
            "description": "Saúde para toda sua equipe, aumentando a produtividade da sua empresa."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano MEI",
            "description": "Condições especiais e redução de carência para microempreendedores."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano Sênior",
            "description": "Atendimento especializado e carinhoso para a terceira idade."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <EnhancedSEO
      title="Planos de Saúde em Curitiba - Cotação Online"
      description="Encontre o melhor plano de saúde em Curitiba e Região Metropolitana. Cotação gratuita via WhatsApp, carência reduzida e até 40% de desconto. EHS Planos de Saúde."
      canonicalUrl={COMPANY_INFO.siteUrl}
      keywords="plano de saúde curitiba, convênio médico curitiba, plano de saúde empresarial, plano de saúde familiar, EHS planos de saúde, cotação plano de saúde, plano saúde acessível"
      schemaData={[homeSchema, localBusinessSchema, serviceSchema, faqSchema]}
    />
  );
};

export default HomeSEO;
