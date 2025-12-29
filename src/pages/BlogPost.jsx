import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Calendar, Eye, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import FooterSection from '../components/landing/FooterSection';
import { toast } from 'sonner';

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  const { data: post, isLoading } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: async () => {
      const posts = await base44.entities.BlogPost.filter({ slug, publicado: true });
      if (posts.length === 0) return null;
      
      // Incrementar visualizações
      const post = posts[0];
      await base44.entities.BlogPost.update(post.id, {
        visualizacoes: (post.visualizacoes || 0) + 1
      });
      
      return post;
    },
    enabled: !!slug,
  });

  useEffect(() => {
    if (post) {
      document.title = `${post.titulo} - Blog Aliança Joias`;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = post.meta_description || post.resumo || post.titulo;
    }
  }, [post]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.titulo,
        text: post.resumo,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copiado para a área de transferência!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post não encontrado</h1>
          <Link to={createPageUrl('Blog')}>
            <Button className="bg-[#D4AF37] hover:bg-[#C9A227]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header com Breadcrumb */}
      <div className="bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={createPageUrl('Blog')}>
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Imagem de Capa */}
      {post.imagem_capa && (
        <div className="relative w-full h-[400px] sm:h-[500px]">
          <img
            src={post.imagem_capa}
            alt={post.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      {/* Conteúdo do Post */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Título */}
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            {post.titulo}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <span className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              {new Date(post.created_date).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <Eye className="w-5 h-5" />
              {post.visualizacoes || 0} visualizações
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="ml-auto"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar
            </Button>
          </div>

          {/* Resumo */}
          {post.resumo && (
            <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] p-6 rounded-r-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                {post.resumo}
              </p>
            </div>
          )}

          {/* Conteúdo Principal */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-[#1A1A1A] prose-headings:font-semibold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#D4AF37] prose-strong:font-semibold
              prose-ul:my-6 prose-li:my-2
              prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: post.conteudo }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Tags:
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#D4AF37]/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Final */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] rounded-3xl text-white text-center">
            <h2 className="text-3xl font-semibold mb-4">Gostou do que leu?</h2>
            <p className="text-lg mb-6 text-white/90">
              Entre em contato e encontre a aliança perfeita para o seu momento especial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5565993122777?text=Olá! Vi o blog e gostaria de mais informações sobre alianças."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-[#D4AF37] hover:bg-gray-100 w-full sm:w-auto">
                  Falar no WhatsApp
                </Button>
              </a>
              <Link to={createPageUrl('Home')}>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 w-full sm:w-auto">
                  Ver Modelos
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </article>

      <FooterSection />
    </div>
  );
}