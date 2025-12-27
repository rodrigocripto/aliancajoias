import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, Phone, MessageCircle } from 'lucide-react';

export default function CTAFinalSection({ onCtaClick }) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/90 to-[#1A1A1A]/80" />
      </div>

      {/* Decorative Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full border border-[#D4AF37]/20 flex items-center justify-center"
      >
        <span className="text-4xl">💍</span>
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full border border-[#D4AF37]/10 flex items-center justify-center hidden lg:flex"
      >
        <span className="text-5xl">✨</span>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/20 mb-8"
          >
            <Heart className="w-10 h-10 text-[#D4AF37]" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-6">
            Transforme Seu Compromisso em
            <span className="block font-semibold bg-gradient-to-r from-[#D4AF37] via-[#E5C76B] to-[#D4AF37] bg-clip-text text-transparent mt-2">
              Uma Joia Eterna
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Sua história de amor merece ser eternizada em ouro 18k. 
            Converse com nossos especialistas e descubra a aliança perfeita para vocês.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#C9A227] hover:from-[#C9A227] hover:to-[#B8960C] text-white px-10 py-7 text-lg font-medium rounded-full shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 group"
            >
              <span>Solicitar Orçamento Personalizado</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300">
            <a
              href="https://wa.me/5565993122777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <div className="w-px h-6 bg-white/20 hidden sm:block" />
            <a
              href="tel:+5565993122777"
              className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>(65) 99312-2777</span>
            </a>
          </div>

          {/* Urgency */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 text-sm text-gray-400"
          >
            🎁 <span className="text-[#D4AF37]">Brinde especial</span> para orçamentos 
            solicitados esta semana
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}