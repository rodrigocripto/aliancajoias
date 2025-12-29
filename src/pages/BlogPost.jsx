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
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header Elegante */}
      <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to={createPageUrl('Blog')}>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <a
            href="https://wa.me/5565993122777?text=Olá! Vi o artigo no blog e gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Imagem de Capa */}
      {post.imagem_capa && (
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
          <img
            src={post.imagem_capa}
            alt={post.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl mx-auto px-4"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-[#D4AF37] text-white text-sm font-medium mb-4">
                {post.categoria.charAt(0).toUpperCase() + post.categoria.slice(1)}
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Conteúdo do Post */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Título Centralizado */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center text-[#1A1A1A] mb-4 leading-tight">
            {post.titulo}
          </h1>

          {/* Meta Info Centralizada */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-gray-600 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              {new Date(post.created_date).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#D4AF37]" />
              {post.visualizacoes || 0} visualizações
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="text-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar
            </Button>
          </div>

          {/* Linha Decorativa */}
          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] mx-4"></div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>

          {/* Resumo Elegante */}
          {post.resumo && (
            <div className="text-center mb-12">
              <p className="text-xl text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
                "{post.resumo}"
              </p>
            </div>
          )}

          {/* CTA WhatsApp Topo */}
          <div className="mb-12 p-6 bg-gradient-to-r from-[#25D366]/10 to-[#20BA5A]/10 rounded-2xl border-2 border-[#25D366]/30 text-center">
            <p className="text-gray-700 mb-4 font-medium">
              📱 Tire suas dúvidas agora mesmo com nossos especialistas
            </p>
            <a
              href="https://wa.me/5565993122777?text=Olá! Estou lendo o artigo sobre alianças e gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-lg">Falar no WhatsApp</span>
            </a>
          </div>

          {/* Linha Separadora */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>

          {/* Conteúdo Principal */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-center prose-headings:text-[#1A1A1A] prose-headings:font-light
              prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-[#D4AF37]/30
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-6 prose-h3:text-[#D4AF37]
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-justify
              prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#D4AF37] prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-2 prose-ul:pl-6
              prose-ol:my-6 prose-ol:space-y-2 prose-ol:pl-6
              prose-li:text-gray-700
              prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-10"
            dangerouslySetInnerHTML={{ __html: post.conteudo }}
          />

          {/* Linha Separadora Antes do CTA */}
          <div className="flex items-center justify-center my-16">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] mx-4"></div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>

          {/* CTA WhatsApp Final - Destaque Máximo */}
          <div className="my-12 p-8 bg-gradient-to-br from-[#25D366] via-[#20BA5A] to-[#1EA952] rounded-3xl text-white text-center shadow-2xl relative overflow-hidden">
            {/* Decoração de Fundo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block p-3 bg-white/20 rounded-full mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                💍 Pronto para Encontrar sua Aliança Perfeita?
              </h2>
              <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto leading-relaxed">
                Fale agora com nossos especialistas e receba atendimento personalizado. 
                Estamos prontos para tirar todas as suas dúvidas!
              </p>
              <a
                href="https://wa.me/5565993122777?text=Olá! Li o artigo no blog e quero saber mais sobre alianças personalizadas em ouro 18k."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#25D366] font-bold text-lg rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>CHAMAR NO WHATSAPP AGORA</span>
              </a>
              <p className="mt-6 text-sm text-white/80">
                📍 Várzea Grande - MT | ⏰ Atendimento Seg-Sex 9h-18h, Sáb 9h-13h
              </p>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 text-center">
              <h3 className="text-sm font-semibold text-gray-500 mb-4 flex items-center justify-center gap-2">
                <Tag className="w-4 h-4" />
                Tópicos Relacionados
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-all cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Voltar ao Blog */}
          <div className="mt-16 text-center">
            <Link to={createPageUrl('Blog')}>
              <Button size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ver Mais Artigos
              </Button>
            </Link>
          </div>
        </motion.div>
      </article>

      <FooterSection />
    </div>
  );
}