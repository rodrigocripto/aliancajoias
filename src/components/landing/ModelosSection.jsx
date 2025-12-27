import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const modelos = [
  {
    id: 1,
    nome: 'Clássica Polida',
    descricao: 'A elegância atemporal do ouro 18k com acabamento espelhado. Perfeita para quem aprecia a tradição e sofisticação.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/63c708746_CpiadeFOTO2.jpg',
    destaque: 'Mais Vendida',
  },
  {
    id: 2,
    nome: 'Reta Chanfrada',
    descricao: 'Design contemporâneo com quinas chanfradas que criam um visual único e marcante. Linhas retas que simbolizam solidez e modernidade.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/2cfa1ba59_CpiadeFOTO3.jpg',
    destaque: 'Tendência',
  },
  {
    id: 3,
    nome: 'Cravejada Luxury',
    descricao: 'Sofisticação máxima com pedras cravejadas e detalhes torcidos em ouro branco. O equilíbrio perfeito entre brilho e elegância para casais que não abrem mão do luxo.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/3baa6ee1a_CpiadeFOTO3.jpg',
    destaque: 'Premium',
  },
  {
    id: 4,
    nome: 'Anatômica Confort',
    descricao: 'Design côncavo e anatômico que se molda perfeitamente ao dedo. Máximo conforto para uso diário com elegância refinada.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/68c6261fe_MODELOCV1632.jpg',
    destaque: 'Conforto',
  },
  {
    id: 5,
    nome: 'Duo Texturizada',
    descricao: 'Contraste sofisticado entre acabamento fosco centralizado e frisos laterais polidos. A harmonia perfeita entre texturas para casais que celebram suas diferenças.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/60ab96161_CpiadeFOTO2.jpg',
    destaque: 'Exclusiva',
  },
  {
    id: 6,
    nome: 'Personalizada',
    descricao: 'Desenhe sua própria aliança. Cada detalhe sob medida para tornar seu momento ainda mais especial.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/65717288d_CpiadeFOTO2.jpg',
    destaque: 'Sob Medida',
  },
];

export default function ModelosSection() {
  const handleWhatsAppClick = (modeloNome) => {
    const mensagem = `Olá! Tenho interesse no modelo *${modeloNome}*. Gostaria de mais informações e um orçamento personalizado.`;
    const whatsappUrl = `https://wa.me/5565993122777?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="modelos" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#D4AF37] tracking-widest uppercase">
            Coleção Exclusiva
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A]">
            Modelos que Inspiram{' '}
            <span className="font-semibold text-[#D4AF37]">Amor</span>
          </h2>
          <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
            Descubra nossa seleção de alianças em ouro 18k. Cada modelo é uma 
            obra-prima pensada para celebrar histórias únicas como a sua.
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modelos.map((modelo, index) => (
            <motion.div
              key={modelo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
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
                    onClick={() => handleWhatsAppClick(modelo.nome)}
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