import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Gem, Heart, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Ouro 18k Certificado',
    description: 'Garantia de pureza e qualidade em cada peça, com certificação oficial.',
  },
  {
    icon: Award,
    title: 'Fabricação Própria',
    description: 'Controle total do processo, do design à finalização artesanal.',
  },
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    description: 'Cada casal é único. Criamos juntos a aliança dos seus sonhos.',
  },
  {
    icon: Clock,
    title: '+30 Anos de Tradição',
    description: 'Experiência consolidada em criar joias que contam histórias.',
  },
  {
    icon: Sparkles,
    title: 'Acabamento Impecável',
    description: 'Detalhes refinados que fazem toda a diferença.',
  },
  {
    icon: Shield,
    title: 'Polimento Vitalício',
    description: 'Polimento gratuito 1x por mês para manter suas alianças sempre brilhantes.',
  },
];

export default function AutoridadeSection() {
  return (
    <section id="autoridade" className="py-24 bg-white">
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
            Por que nos escolher
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A]">
            Tradição e Excelência em{' '}
            <span className="font-semibold text-[#D4AF37]">Cada Detalhe</span>
          </h2>
          <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
            Somos especialistas em alianças em ouro 18k, unindo técnica artesanal, 
            materiais nobres e um atendimento que entende a importância desse momento único.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl bg-[#FDFBF7] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '2.500+', label: 'Casais Atendidos' },
            { number: '30+', label: 'Anos de Experiência' },
            { number: '100%', label: 'Ouro Certificado' },
            { number: '5★', label: 'Avaliação dos Clientes' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8960C] bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="mt-2 text-sm text-[#4A4A4A]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}