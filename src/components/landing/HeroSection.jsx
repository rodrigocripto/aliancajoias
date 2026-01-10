import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const carouselImages = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/09dbba98e_CpiadeFOTO3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/5920f1e7c_FOTO42.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/24b8b389c_CpiadeFOTO3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/b1170de7f_CpiadeFOTO3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/336ec9b9e_CpiadeFOTO2.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/65a937b4d_CpiadeFOTO3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/5fd91be22_CpiadeCpiadeCpiadeac528577-5da3-4403-a670-2a5a6cc24208.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/a9f8d548e_CpiadeFOTO3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/b20d43345_CpiadeFOTO3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/723deb426_CpiadeFOTO3.jpg"
];

export default function HeroSection({ onCtaClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textPosition, setTextPosition] = useState(true); // true = normal, false = invertido

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextPosition((prev) => !prev);
    }, 7000);

    return () => clearInterval(textInterval);
  }, []);
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
              <span className="text-sm font-medium text-[#B8960C] tracking-wide uppercase" translate="no">
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
                asChild
                className="bg-gradient-to-r from-[#D4AF37] to-[#C9A227] hover:from-[#C9A227] hover:to-[#B8960C] text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105"
              >
                <a href="https://wa.me/5565993122777?text=Olá! Gostaria de solicitar um orçamento personalizado para alianças em ouro 18k." target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento Personalizado
                </a>
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 text-center lg:text-left"
            >
              <div className="inline-flex flex-col items-center gap-2 px-6 py-4 bg-gradient-to-r from-[#D4AF37]/8 via-[#C9A227]/8 to-[#D4AF37]/8 rounded-2xl border border-[#D4AF37]/30">
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  <span className="text-[#D4AF37] font-bold text-lg">+100 Modelos Exclusivos</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-[#1A1A1A] font-semibold text-lg">Criação Sob Medida</span>
                </div>
                <span className="text-[#4A4A4A] text-sm font-medium">✨ Transforme seu sonho em realidade</span>
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
              <AnimatePresence mode="wait">
                {textPosition ? (
                  <React.Fragment key="normal">
                    {/* Texto Curvado Superior - Preço */}
                    <motion.div 
                      className="absolute -inset-20 sm:-inset-24 md:-inset-28 pointer-events-none z-20"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ 
                        opacity: 1,
                        y: 0,
                        scale: [1, 1.03, 1],
                        filter: [
                          "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
                          "drop-shadow(0 4px 8px rgba(212, 175, 55, 0.4))",
                          "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"
                        ]
                      }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 700 700">
                        <defs>
                          <path id="curveTop1" d="M 135,350 A 215,215 0 0,1 565,350" fill="none" />
                        </defs>
                        <text className="font-bold" style={{ fontSize: '24px', letterSpacing: '3px', fill: '#FF6B00', stroke: '#FFA500', strokeWidth: '0.5px' }}>
                          <textPath href="#curveTop1" startOffset="50%" textAnchor="middle">
                            A PARTIR DE R$ 697,00 O GRAMA
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>

                    {/* Texto Curvado Inferior - Parcelamento */}
                    <motion.div 
                      className="absolute -inset-20 sm:-inset-28 md:-inset-32 pointer-events-none z-20"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: 1,
                        y: 0,
                        scale: [1, 1.05, 1],
                        filter: [
                          "drop-shadow(0 0 6px rgba(26, 26, 26, 0.4))",
                          "drop-shadow(0 0 12px rgba(26, 26, 26, 0.7))",
                          "drop-shadow(0 0 6px rgba(26, 26, 26, 0.4))"
                        ]
                      }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8, scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 700 700">
                        <defs>
                          <path id="curveBottom1" d="M 120,350 A 230,230 0 0,0 580,350" fill="none" />
                          <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1A1A1A" />
                            <stop offset="50%" stopColor="#2D2D2D" />
                            <stop offset="100%" stopColor="#1A1A1A" />
                          </linearGradient>
                        </defs>
                        <text className="font-bold" style={{ fontSize: '24px', letterSpacing: '3px', fill: 'url(#darkGradient)' }}>
                          <textPath href="#curveBottom1" startOffset="50%" textAnchor="middle">
                            EM ATÉ 10X SEM JUROS NOS CARTÕES
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>
                  </React.Fragment>
                ) : (
                  <React.Fragment key="inverted">
                    {/* Texto Curvado Superior - Parcelamento */}
                    <motion.div 
                      className="absolute -inset-20 sm:-inset-24 md:-inset-28 pointer-events-none z-20"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ 
                        opacity: 1,
                        y: 0,
                        scale: [1, 1.05, 1],
                        filter: [
                          "drop-shadow(0 0 6px rgba(26, 26, 26, 0.4))",
                          "drop-shadow(0 0 12px rgba(26, 26, 26, 0.7))",
                          "drop-shadow(0 0 6px rgba(26, 26, 26, 0.4))"
                        ]
                      }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 700 700">
                        <defs>
                          <path id="curveTop2" d="M 135,350 A 215,215 0 0,1 565,350" fill="none" />
                          <linearGradient id="darkGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1A1A1A" />
                            <stop offset="50%" stopColor="#2D2D2D" />
                            <stop offset="100%" stopColor="#1A1A1A" />
                          </linearGradient>
                        </defs>
                        <text className="font-bold" style={{ fontSize: '24px', letterSpacing: '3px', fill: 'url(#darkGradient2)' }}>
                          <textPath href="#curveTop2" startOffset="50%" textAnchor="middle">
                            EM ATÉ 10X SEM JUROS NOS CARTÕES
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>

                    {/* Texto Curvado Inferior - Preço */}
                    <motion.div 
                      className="absolute -inset-20 sm:-inset-28 md:-inset-32 pointer-events-none z-20"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: 1,
                        y: 0,
                        scale: [1, 1.03, 1],
                        filter: [
                          "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
                          "drop-shadow(0 4px 8px rgba(212, 175, 55, 0.4))",
                          "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"
                        ]
                      }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8, scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 700 700">
                        <defs>
                          <path id="curveBottom2" d="M 120,350 A 230,230 0 0,0 580,350" fill="none" />
                        </defs>
                        <text className="font-bold" style={{ fontSize: '24px', letterSpacing: '3px', fill: '#FF6B00', stroke: '#FFA500', strokeWidth: '0.5px' }}>
                          <textPath href="#curveBottom2" startOffset="50%" textAnchor="middle">
                            A PARTIR DE R$ 697,00 O GRAMA
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>
                  </React.Fragment>
                )}
              </AnimatePresence>

              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-[#D4AF37]/10" />
              
              {/* Main Image Container - Carousel */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-[#F5E6C8] to-[#E8D5A3] shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={carouselImages[currentImageIndex]}
                    alt="Alianças de ouro 18k personalizadas Várzea Grande MT - Joalheria Aliança Joias fabricação própria"
                    loading="eager"
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: '50% 45%' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 right-4 md:-top-4 md:right-8 bg-white rounded-2xl shadow-xl p-4 z-10"
              >
                <div className="text-center">
                  <span className="text-2xl">💎</span>
                  <p className="text-xs text-[#4A4A4A] mt-1">Premium</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 left-4 md:-bottom-4 md:left-8 bg-white rounded-2xl shadow-xl p-4 z-10"
              >
                <div className="text-center">
                  <span className="text-2xl">✨</span>
                  <p className="text-xs text-[#4A4A4A] mt-1 leading-tight">
                    <span className="font-semibold">+100</span><br/>Modelos
                  </p>
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