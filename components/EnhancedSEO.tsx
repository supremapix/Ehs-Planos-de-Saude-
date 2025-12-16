import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  schemaData?: object | object[];
  noindex?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonicalUrl,
  keywords = 'planos de saúde, EHS saúde, cotação plano saúde, plano saúde acessível, convênio médico curitiba',
  ogImage = `${COMPANY_INFO.siteUrl}/logo-dark.png`,
  ogType = 'website',
  schemaData,
  noindex = false,
}) => {
  const fullTitle = `${title} | ${COMPANY_INFO.name}`;
  
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": COMPANY_INFO.name,
    "description": description,
    "url": canonicalUrl,
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
      "latitude": "-25.4284",
      "longitude": "-49.2733"
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
    "sameAs": [
      COMPANY_INFO.socialMedia.instagram,
      COMPANY_INFO.socialMedia.facebook
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "url": COMPANY_INFO.siteUrl,
    "logo": `${COMPANY_INFO.siteUrl}/logo-dark.png`,
    "description": "Planos de saúde completos com preços acessíveis. Cote agora via WhatsApp!",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phoneFormatted,
      "contactType": "Customer Service",
      "availableLanguage": "Portuguese",
      "areaServed": "BR"
    },
    "sameAs": [
      COMPANY_INFO.socialMedia.facebook,
      COMPANY_INFO.socialMedia.instagram
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": COMPANY_INFO.siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": canonicalUrl
      }
    ]
  };

  const renderSchemaData = () => {
    if (Array.isArray(schemaData)) {
      return schemaData.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ));
    }
    return (
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchema)}
      </script>
    );
  };

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={COMPANY_INFO.name} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4284;-49.2733" />
      <meta name="ICBM" content="-25.4284, -49.2733" />
      
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#0f0f23" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {renderSchemaData()}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
