import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Code, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SEODebugPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [seoData, setSeoData] = useState({});

  useEffect(() => {
    const updateSEOData = () => {
      const data = {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content || 'N/A',
        keywords: document.querySelector('meta[name="keywords"]')?.content || 'N/A',
        ogTitle: document.querySelector('meta[property="og:title"]')?.content || 'N/A',
        ogDescription: document.querySelector('meta[property="og:description"]')?.content || 'N/A',
        canonical: document.querySelector('link[rel="canonical"]')?.href || 'N/A',
        h1: document.querySelector('h1')?.textContent || 'N/A',
        geoRegion: document.querySelector('meta[name="geo.region"]')?.content || 'N/A',
        geoPlacename: document.querySelector('meta[name="geo.placename"]')?.content || 'N/A',
      };

      // Schema.org data
      const schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (schemaScript) {
        try {
          data.schema = JSON.parse(schemaScript.textContent);
        } catch (e) {
          data.schema = 'Error parsing schema';
        }
      }

      setSeoData(data);
    };

    updateSEOData();
    const interval = setInterval(updateSEOData, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-2"
        title="Ver Informações de SEO"
      >
        <Search className="w-5 h-5" />
        <span className="text-xs font-bold">SEO</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-h-[600px] bg-white rounded-2xl shadow-2xl border-2 border-green-500 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5" />
          <span className="font-bold">Debug SEO</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-white/20 p-1 rounded-lg transition-colors"
        >
          <EyeOff className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-blue-900 font-semibold mb-2 flex items-center gap-2">
            <Code className="w-4 h-4" />
            Meta Tags Principais
          </p>
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-semibold text-gray-700">Title:</span>
              <p className="text-gray-600 mt-1 bg-white p-2 rounded">{seoData.title}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Description:</span>
              <p className="text-gray-600 mt-1 bg-white p-2 rounded">{seoData.description}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Keywords:</span>
              <p className="text-gray-600 mt-1 bg-white p-2 rounded">{seoData.keywords}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">H1:</span>
              <p className="text-gray-600 mt-1 bg-white p-2 rounded">{seoData.h1}</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <p className="text-purple-900 font-semibold mb-2">Open Graph (Redes Sociais)</p>
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-semibold text-gray-700">OG Title:</span>
              <p className="text-gray-600 mt-1 bg-white p-2 rounded">{seoData.ogTitle}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">OG Description:</span>
              <p className="text-gray-600 mt-1 bg-white p-2 rounded">{seoData.ogDescription}</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-green-900 font-semibold mb-2">SEO Local</p>
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-semibold text-gray-700">Região:</span>
              <p className="text-gray-600 mt-1 bg-white p-2 rounded">{seoData.geoRegion}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Local:</span>
              <p className="text-gray-600 mt-1 bg-white p-2 rounded">{seoData.geoPlacename}</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
          <p className="text-orange-900 font-semibold mb-2">Canonical URL</p>
          <p className="text-xs text-gray-600 bg-white p-2 rounded break-all">{seoData.canonical}</p>
        </div>

        {seoData.schema && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
            <p className="text-indigo-900 font-semibold mb-2">Schema.org (JSON-LD)</p>
            <pre className="text-[10px] text-gray-700 bg-white p-2 rounded overflow-x-auto max-h-40">
              {JSON.stringify(seoData.schema, null, 2)}
            </pre>
          </div>
        )}

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <p className="text-yellow-900 font-semibold mb-2">💡 Como Verificar</p>
          <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
            <li>Clique com botão direito → "Inspecionar"</li>
            <li>Vá até a aba "Elements" e veja o &lt;head&gt;</li>
            <li>Use Google Search Console</li>
            <li>Use PageSpeed Insights do Google</li>
            <li>Extensão: SEO Meta in 1 Click</li>
          </ul>
        </div>
      </div>
    </div>
  );
}