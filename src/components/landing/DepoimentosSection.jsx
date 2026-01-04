import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const depoimentos = [
  {
    id: 1,
    nome: 'Marina & Lucas',
    cidade: 'Cuiabá, MT',
    texto: 'A experiência foi incrível do início ao fim. O atendimento personalizado fez toda a diferença. Nossas alianças ficaram exatamente como sonhamos!',
    estrelas: 5,
    imagem: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=200&q=80',
  },
  {
    id: 2,
    nome: 'Carla & Pedro',
    cidade: 'Várzea Grande, MT',
    texto: 'Qualidade impecável! O ouro 18k é realmente diferente. Estamos casados há 3 anos e as alianças continuam perfeitas.',
    estrelas: 5,
    imagem: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=200&q=80',
  },
  {
    id: 3,
    nome: 'Fernanda & André',
    cidade: 'Cuiabá, MT',
    texto: 'A gravação interna ficou linda! O detalhe do diamante tornou nossa aliança única. Super recomendamos!',
    estrelas: 5,
    imagem: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&q=80',
  },
  {
    id: 4,
    nome: 'Juliana & Marcos',
    cidade: 'Rondonópolis, MT',
    texto: 'Fizemos as alianças personalizadas e o resultado superou todas as expectativas. Profissionais de verdade!',
    estrelas: 5,
    imagem: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=200&q=80',
  },
];

export default function DepoimentosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  }, []);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  }, []);

  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#D4AF37] tracking-widest uppercase">
            Histórias Reais
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Casais que Confiam em{' '}
            <span className="font-semibold text-[#D4AF37]">Nós</span>
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#D4AF37]/30">
                    <img
                      src={depoimentos[currentIndex].imagem}
                      alt={`Depoimento de ${depoimentos[currentIndex].nome} - Cliente satisfeito Aliança Joias Várzea Grande MT`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-10 h-10 text-[#D4AF37]/30 mb-4 mx-auto md:mx-0" />
                  
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 italic">
                    "{depoimentos[currentIndex].texto}"
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 justify-center md:justify-start mb-4">
                    {Array.from({ length: depoimentos[currentIndex].estrelas }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-white text-lg">
                      {depoimentos[currentIndex].nome}
                    </p>
                    <p className="text-sm text-gray-400">
                      {depoimentos[currentIndex].cidade}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10 hover:border-[#D4AF37]"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-[#D4AF37]'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10 hover:border-[#D4AF37]"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
            <span>5 estrelas no Google</span>
          </div>
          <div className="w-px h-6 bg-white/20 hidden sm:block" />
          <div className="text-gray-400">
            +500 avaliações positivas
          </div>
          <div className="w-px h-6 bg-white/20 hidden sm:block" />
          <div className="text-gray-400">
            100% de satisfação
          </div>
        </motion.div>
      </div>
    </section>
  );
}