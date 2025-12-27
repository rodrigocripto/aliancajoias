import React from 'react';
import { motion } from 'framer-motion';

export default function EmocionalSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#D4AF37] blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#D4AF37] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                alt="Casal com alianças"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:right-8 max-w-xs bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-3xl text-[#D4AF37] mb-2">"</div>
              <p className="text-[#1A1A1A] italic leading-relaxed">
                Uma aliança não é apenas uma joia. É a promessa silenciosa que 
                brilha em cada gesto de amor.
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium tracking-wide uppercase mb-6">
              Mais que uma Joia
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
              O Início de uma
              <span className="block font-semibold text-[#D4AF37] mt-2">
                História de Amor
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Cada aliança carrega consigo um universo de significados. É o 
                <span className="text-[#D4AF37] font-medium"> compromisso </span> 
                que se renova a cada amanhecer, a 
                <span className="text-[#D4AF37] font-medium"> cumplicidade </span> 
                construída dia após dia.
              </p>

              <p>
                Quando dois corações decidem caminhar juntos, a aliança se torna 
                testemunha silenciosa de cada conquista, cada desafio superado, 
                cada momento de pura 
                <span className="text-[#D4AF37] font-medium"> felicidade</span>.
              </p>

              <p>
                Não criamos apenas joias. Damos forma ao 
                <span className="text-[#D4AF37] font-medium"> símbolo eterno </span> 
                do seu amor — uma peça que acompanhará vocês em todos os capítulos 
                dessa história única que estão escrevendo juntos.
              </p>
            </div>

            {/* Emotional Points */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { emoji: '💕', text: 'Amor Infinito' },
                { emoji: '🤝', text: 'Compromisso' },
                { emoji: '✨', text: 'União Eterna' },
                { emoji: '🌟', text: 'Memórias' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <span className="text-xl sm:text-2xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-white font-medium text-sm sm:text-base">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}