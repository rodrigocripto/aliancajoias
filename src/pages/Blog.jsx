import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Eye, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import FooterSection from '../components/landing/FooterSection';

const categorias = [
  { value: 'all', label: 'Todos os Posts' },
  { value: 'namoro', label: 'Namoro' },
  { value: 'noivado', label: 'Noivado' },
  { value: 'casamento', label: 'Casamento' },
  { value: 'aliancas', label: 'Alianças' },
  { value: 'anel-solitario', label: 'Anel Solitário' },
  { value: 'aparadores', label: 'Aparadores' },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('all');

  useEffect(() => {
    // SEO para página do blog
    document.title = 'Blog - Aliança Joias Várzea Grande e Cuiabá | Dicas sobre Alianças e Joias';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Blog da Aliança Joias em Várzea Grande e Cuiabá - MT. Dicas sobre alianças de casamento, noivado, anéis solitários e aparadores. Guia completo para escolher a joia perfeita.';
  }, []);

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      const allPosts = await base44.entities.BlogPost.filter({ publicado: true }, '-created_date');
      return allPosts;
    },
  });

  const postsFiltrados = posts.filter(post => {
    const matchSearch = post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.resumo?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategoria = categoriaFiltro === 'all' || post.categoria === categoriaFiltro;
    return matchSearch && matchCategoria;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">
              Blog <span className="font-semibold">Aliança Joias</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Dicas, inspirações e guias completos sobre alianças de casamento, noivado e joias exclusivas em Várzea Grande e Cuiabá - MT
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-6 rounded-full text-lg bg-white text-gray-800"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categorias.map((cat) => (
              <Button
                key={cat.value}
                variant={categoriaFiltro === cat.value ? 'default' : 'outline'}
                onClick={() => setCategoriaFiltro(cat.value)}
                className={`whitespace-nowrap rounded-full ${
                  categoriaFiltro === cat.value 
                    ? 'bg-[#D4AF37] hover:bg-[#C9A227]' 
                    : 'hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-video rounded-2xl mb-4" />
                  <div className="h-6 bg-gray-200 rounded mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : postsFiltrados.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">Nenhum post encontrado</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsFiltrados.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={createPageUrl(`BlogPost?slug=${post.slug}`)}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                      {/* Imagem */}
                      {post.imagem_capa && (
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={post.imagem_capa}
                            alt={post.titulo}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-white text-xs font-medium">
                              {categorias.find(c => c.value === post.categoria)?.label || post.categoria}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {/* Conteúdo */}
                      <div className="p-6">
                        <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                          {post.titulo}
                        </h2>
                        
                        {post.resumo && (
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                            {post.resumo}
                          </p>
                        )}
                        
                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.created_date).toLocaleDateString('pt-BR')}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.visualizacoes || 0}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                        
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                            {post.tags.slice(0, 3).map((tag, i) => (
                              <span key={i} className="flex items-center gap-1 text-xs text-gray-500">
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}