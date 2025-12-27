import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Layers, Paintbrush, PenTool, Gem } from 'lucide-react';

const opcoes = [
  {
    icon: Ruler,
    titulo: 'Largura',
    descricao: 'De delicadas a largas, você escolhe a proporção ideal.',
  },
  {
    icon: Layers,
    titulo: 'Perfil',
    descricao: 'Anatômico, reto ou abaulado — conforto sob medida.',
  },
  {
    icon: Paintbrush,
    titulo: 'Acabamento',
    descricao: 'Polido, fosco, escovado ou combinações exclusivas.',
  },
  {
    icon: PenTool,
    titulo: 'Gravação',
    descricao: 'Eternize nomes, datas ou mensagens especiais.',
  },
  {
    icon: Gem,
    titulo: 'Pedras',
    descricao: 'Diamantes, safiras ou outras gemas preciosas.',
  },
];

export default function PersonalizacaoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-widest uppercase">
              Totalmente Sob Medida
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] leading-tight">
              Sua Aliança,
              <span className="block font-semibold text-[#D4AF37]">
                Seu Jeito
              </span>
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
              Cada amor é único. Por isso, oferecemos personalização completa 
              para que sua aliança reflita exatamente a essência da sua história.
            </p>

            {/* Options */}
            <div className="mt-10 space-y-4">
              {opcoes.map((opcao, index) => (
                <motion.div
                  key={opcao.titulo}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#FDFBF7] transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                    <opcao.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">
                      {opcao.titulo}
                    </h3>
                    <p className="text-sm text-[#4A4A4A]">
                      {opcao.descricao}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/92e0943fa_pedido_de_casamento_surpresa_emocionante_em_holambra_-_natalia_e_caue-34.jpg"
                  alt="Casal feliz mostrando alianças após pedido de casamento"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-[#D4AF37]/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <span className="text-lg">✍️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">Gravação</p>
                    <p className="text-xs text-[#4A4A4A]">"Para sempre, Ana"</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-[#D4AF37]/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <span className="text-lg">💍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">Seu Momento</p>
                    <p className="text-xs text-[#4A4A4A]">Aliança dos Sonhos</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Ring */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-[#D4AF37]/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}