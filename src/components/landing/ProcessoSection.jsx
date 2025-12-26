import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Ruler, Hammer, Package, ArrowRight } from 'lucide-react';

const passos = [
  {
    numero: '01',
    icon: MessageSquare,
    titulo: 'Consultoria',
    descricao: 'Conversamos para entender seus desejos e apresentamos as opções ideais para vocês.',
  },
  {
    numero: '02',
    icon: Ruler,
    titulo: 'Medidas e Detalhes',
    descricao: 'Definimos medidas exatas, acabamento, largura e todos os detalhes personalizados.',
  },
  {
    numero: '03',
    icon: Hammer,
    titulo: 'Fabricação Artesanal',
    descricao: 'Suas alianças são criadas à mão por ourives experientes, com todo cuidado e precisão.',
  },
  {
    numero: '04',
    icon: Package,
    titulo: 'Entrega Especial',
    descricao: 'Receba suas alianças em embalagem premium, prontas para o momento mais especial.',
  },
];

export default function ProcessoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FDFBF7] to-white">
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
            Processo Simples
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A]">
            Do Sonho à{' '}
            <span className="font-semibold text-[#D4AF37]">Realidade</span>
          </h2>
          <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
            Transformar seu sonho em realidade é simples. Cuidamos de cada 
            detalhe para que você apenas aproveite o momento.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {passos.map((passo, index) => (
              <motion.div
                key={passo.numero}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Number & Icon */}
                  <div className="relative inline-flex">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-lg shadow-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-6 mx-auto relative z-10">
                      <passo.icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#D4AF37] text-white text-sm font-bold flex items-center justify-center shadow-lg">
                      {passo.numero.slice(-1)}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                    {passo.titulo}
                  </h3>
                  <p className="text-[#4A4A4A] leading-relaxed">
                    {passo.descricao}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < passos.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-[#D4AF37]/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#4A4A4A] mb-2">
            Prazo médio de produção:
          </p>
          <p className="text-2xl font-semibold text-[#D4AF37]">
            7 a 15 dias úteis
          </p>
        </motion.div>
      </div>
    </section>
  );
}