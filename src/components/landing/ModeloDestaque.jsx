import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ModeloDestaque({ modelo, invertido = false }) {
  const modeloId = `modelo-${modelo.id}`;
  const modeloUrl = `${window.location.origin}${window.location.pathname}#${modeloId}`;
  
  const handleWhatsAppClick = () => {
    const mensagem = `Olá! Tenho interesse no modelo *${modelo.nome}*. Gostaria de mais informações e um orçamento personalizado.\n\nVer modelo: ${modeloUrl}`;
    const whatsappUrl = `https://wa.me/5565993122777?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id={modeloId} className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${invertido ? 'lg:flex-row-reverse' : ''}`}>
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: invertido ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative ${invertido ? 'lg:order-2' : ''}`}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={modelo.imagem}
                alt={modelo.nome}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-sm font-medium text-[#D4AF37] shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  {modelo.destaque}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: invertido ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={invertido ? 'lg:order-1' : ''}
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-widest uppercase">
              Modelo em Destaque
            </span>
            <h3 className="mt-4 text-3xl sm:text-4xl font-light text-[#1A1A1A]">
              {modelo.nome}
            </h3>
            <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
              {modelo.descricao}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-[#D4AF37] to-[#C9A227] hover:from-[#C9A227] hover:to-[#B8960C] text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 group"
              >
                <span>Quero Este Modelo</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#D4AF37]/30 text-[#1A1A1A] px-8 py-6 text-lg font-medium rounded-full hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-300"
                onClick={() => document.getElementById('modelos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Todos os Modelos
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}