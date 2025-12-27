import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ModelosDupla({ modelos }) {
  const handleWhatsAppClick = (modelo) => {
    const modeloId = `modelo-${modelo.id}`;
    const modeloUrl = `${window.location.origin}${window.location.pathname}#${modeloId}`;
    const mensagem = `Olá! Tenho interesse no modelo *${modelo.nome}*. Gostaria de mais informações e um orçamento personalizado.\n\nVer modelo: ${modeloUrl}`;
    const whatsappUrl = `https://wa.me/5565993122777?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-8">
          {modelos.map((modelo, index) => (
            <motion.div
              key={modelo.id}
              id={`modelo-${modelo.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group scroll-mt-20"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#D4AF37]/10">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#D4AF37] shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    {modelo.destaque}
                  </span>
                </div>

                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={modelo.imagem}
                    alt={modelo.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {modelo.nome}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
                    {modelo.descricao}
                  </p>
                  <Button
                    onClick={() => handleWhatsAppClick(modelo)}
                    className="w-full bg-[#1A1A1A] hover:bg-[#D4AF37] text-white py-5 rounded-full font-medium transition-all duration-300 group/btn"
                  >
                    <span>Quero Este Modelo</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}