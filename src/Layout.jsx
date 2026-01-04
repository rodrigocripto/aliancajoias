import React, { useEffect } from 'react';

export default function Layout({ children, currentPageName }) {
  useEffect(() => {
    // Favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💍</text></svg>';

    // SEO Meta Tags - Local SEO Otimizado
    document.title = 'Alianças de Ouro 18k Várzea Grande MT | Joalheria Aliança Joias Cuiabá';
    
    // Meta Description com SEO Local
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Joalheria em Várzea Grande e Cuiabá MT especializada em alianças de ouro 18k. Fabricação própria, +30 anos de tradição. Atendemos toda região metropolitana. Orçamento grátis!';
    
    // Meta Keywords com foco local
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'joalheria várzea grande, aliança ouro 18k cuiabá, alianças personalizadas várzea grande mt, joalheria cuiabá, aliança de casamento várzea grande, aliança de noivado cuiabá mt, joias ouro 18k mato grosso';
    
    // Geo Tags
    const geoTags = [
      { name: 'geo.region', content: 'BR-MT' },
      { name: 'geo.placename', content: 'Várzea Grande' },
      { name: 'geo.position', content: '-15.646765;-56.132415' }
    ];
    
    geoTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = tag.name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: 'Alianças de Ouro 18k Várzea Grande MT | Aliança Joias' },
      { property: 'og:description', content: 'Joalheria em Várzea Grande e Cuiabá MT. Alianças de ouro 18k com fabricação própria e +30 anos de tradição.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Joalheria Aliança Joias' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:url', content: 'https://app.base44.com/apps/694ef32b4b63ebef73cd51c8' }
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Twitter Card Tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Alianças de Ouro 18k Várzea Grande MT | Aliança Joias' },
      { name: 'twitter:description', content: 'Joalheria em Várzea Grande e Cuiabá MT especializada em alianças de ouro 18k.' }
    ];
    
    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = tag.name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // JSON-LD Schema para Negócio Local
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "JewelryStore",
      "name": "Joalheria Aliança Joias",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/63c708746_CpiadeFOTO2.jpg",
      "description": "Joalheria em Várzea Grande e Cuiabá MT especializada em alianças de ouro 18k com fabricação própria. Mais de 30 anos de tradição.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Sen. Filinto Müller, 1900",
        "addressLocality": "Várzea Grande",
        "addressRegion": "MT",
        "postalCode": "78000-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-15.646765",
        "longitude": "-56.132415"
      },
      "telephone": "+55-65-99312-2777",
      "email": "aliancajoiasmarket@gmail.com",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Várzea Grande"
        },
        {
          "@type": "City",
          "name": "Cuiabá"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Alianças de Ouro 18k",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Alianças de Ouro 18k Personalizadas",
              "description": "Alianças em ouro 18k certificado com fabricação própria"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "500"
      },
      "founder": "Aliança Joias",
      "foundingDate": "1993",
      "slogan": "O Símbolo do Seu Amor Eterno"
    };
    
    schemaScript.textContent = JSON.stringify(localBusinessSchema);
  }, []);

  return <>{children}</>;
}