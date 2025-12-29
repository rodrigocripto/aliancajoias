import React, { useEffect } from 'react';

export default function Layout({ children, currentPageName }) {
  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Aliança Joias - Alianças de Ouro 18k Personalizadas | Fabricação Própria';
    
    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Alianças de ouro 18k certificado com fabricação própria e garantia vitalícia. Mais de 30 anos criando alianças personalizadas para eternizar seu amor. Orçamento grátis!';
    
    // Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'alianças de ouro, aliança 18k, alianças personalizadas, joalheria, alianças de casamento, alianças de noivado, ouro certificado, fabricação própria';
    
    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: 'Aliança Joias - Alianças de Ouro 18k Personalizadas' },
      { property: 'og:description', content: 'Alianças de ouro 18k certificado com fabricação própria e garantia vitalícia. Orçamento grátis!' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Aliança Joias' },
      { property: 'og:locale', content: 'pt_BR' }
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
      { name: 'twitter:title', content: 'Aliança Joias - Alianças de Ouro 18k Personalizadas' },
      { name: 'twitter:description', content: 'Alianças de ouro 18k certificado com fabricação própria e garantia vitalícia.' }
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
  }, []);

  return <>{children}</>;
}