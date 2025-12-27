import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ onCtaClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF7]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#B8960C] tracking-wide uppercase">
                Joalheria Aliança Joias
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A1A] leading-tight mb-6"
            >
              O Símbolo do
              <span className="block font-semibold bg-gradient-to-r from-[#D4AF37] via-[#C9A227] to-[#B8960C] bg-clip-text text-transparent">
                Seu Amor Eterno
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Alianças em ouro 18k fabricadas artesanalmente, com a exclusividade 
              e perfeição que seu momento merece. Tradição, qualidade e atendimento 
              personalizado em cada detalhe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={onCtaClick}
                className="bg-gradient-to-r from-[#D4AF37] to-[#C9A227] hover:from-[#C9A227] hover:to-[#B8960C] text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105"
              >
                Solicitar Orçamento Personalizado
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#D4AF37]/30 text-[#1A1A1A] px-8 py-6 text-lg font-medium rounded-full hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-300"
                onClick={() => document.getElementById('modelos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Modelos
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-[#4A4A4A]"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <span className="text-[#D4AF37]">✓</span>
                </div>
                <span>Ouro 18k Certificado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <span className="text-[#D4AF37]">✓</span>
                </div>
                <span>Fabricação Própria</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <span className="text-[#D4AF37]">✓</span>
                </div>
                <span>Garantia Vitalícia</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-[#D4AF37]/10" />
              
              {/* Main Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-[#F5E6C8] to-[#E8D5A3] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
                  alt="Alianças em Ouro 18k"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-8 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="text-center">
                  <span className="text-2xl">💎</span>
                  <p className="text-xs text-[#4A4A4A] mt-1">Premium</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-8 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="text-center">
                  <span className="text-2xl">🏆</span>
                  <p className="text-xs text-[#4A4A4A] mt-1">+30 Anos</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#4A4A4A]/60 cursor-pointer"
          onClick={() => document.getElementById('autoridade')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs uppercase tracking-widest">Descubra</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}