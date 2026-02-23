import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import FooterSection from '../components/landing/FooterSection';
import { Heart, Award, Gem, Users, Shield, Sparkles, Factory, Clock, Target } from 'lucide-react';

const valores = [
  {
    icon: Heart,
    titulo: 'Paixão pelo Ofício',
    descricao: 'Cada aliança é criada com dedicação e amor, entendendo a importância do momento único que ela representa.',
  },
  {
    icon: Gem,
    titulo: 'Qualidade Incomparável',
    descricao: 'Trabalhamos exclusivamente com ouro 18k certificado e materiais nobres, garantindo durabilidade e beleza eterna.',
  },
  {
    icon: Users,
    titulo: 'Atendimento Humanizado',
    descricao: 'Cada casal é único. Nosso atendimento personalizado transforma sonhos em realidade, respeitando desejos e orçamento.',
  },
  {
    icon: Shield,
    titulo: 'Transparência e Confiança',
    descricao: 'Honestidade em cada detalhe. Prezamos pela clareza nas informações, prazos e valores.',
  },
];

const diferenciais = [
  {
    icon: Factory,
    titulo: 'Fabricação Própria',
    descricao: 'Todo o processo acontece em nossa oficina, do design à finalização. Isso garante controle total de qualidade e possibilita personalizações exclusivas.',
  },
  {
    icon: Award,
    titulo: 'Experiência de 30+ Anos',
    descricao: 'Três décadas aperfeiçoando técnicas artesanais e atendendo milhares de casais. Nossa expertise é reconhecida em toda região.',
  },
  {
    icon: Sparkles,
    titulo: 'Acabamento Artesanal',
    descricao: 'Cada peça recebe atenção individual de nossos mestres joalheiros, resultando em detalhes impecáveis que fazem toda diferença.',
  },
  {
    icon: Clock,
    titulo: 'Polimento Vitalício*',
    descricao: 'Garantimos polimento gratuito 1x por mês para suas alianças brilharem para sempre. *Consultar regulamento na loja.',
  },
];

export default function SobreNos() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sobre Nós - Joalheria Aliança Joias | +30 Anos de Tradição em Várzea Grande MT';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Conheça a história da Joalheria Aliança Joias em Várzea Grande e Cuiabá MT. Mais de 30 anos de experiência em alianças de ouro 18k com fabricação própria e atendimento personalizado.';
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <Link to={createPageUrl('Home')}>
            <Button variant="ghost" className="text-white hover:bg-white/10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">Voltar à Home</span>
            </Button>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-6">
              💍 Nossa História
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">
              Sobre <span className="font-bold text-[#D4AF37]">Aliança Joias</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Mais de 30 anos transformando sonhos em realidade através de alianças únicas em ouro 18k
            </p>
            <p className="text-sm text-[#D4AF37]">
              📍 Várzea Grande e Cuiabá - Mato Grosso
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-[#D4AF37] tracking-widest uppercase">
                Desde 1993
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-light text-[#1A1A1A] mb-6">
                Nossa <span className="font-semibold text-[#D4AF37]">História</span>
              </h2>
              <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-lg">
                <p>
                  A <strong className="text-[#D4AF37]">Joalheria Aliança Joias</strong> nasceu do sonho de criar joias que simbolizassem o amor eterno. Fundada em 1993 em Várzea Grande, Mato Grosso, começamos como uma pequena oficina artesanal, dedicada exclusivamente à fabricação de alianças de casamento e noivado.
                </p>
                <p>
                  Com o passar dos anos, conquistamos a confiança de milhares de casais em toda região metropolitana de Cuiabá e Várzea Grande. Nosso compromisso sempre foi o mesmo: <strong>qualidade absoluta, atendimento personalizado e preços justos</strong>.
                </p>
                <p>
                  Hoje, com mais de <strong className="text-[#D4AF37]">30 anos de experiência</strong> e <strong className="text-[#D4AF37]">2.500+ casais atendidos</strong>, continuamos mantendo a tradição artesanal aliada às técnicas mais modernas de ourivesaria. Cada aliança que sai de nossa oficina carrega não apenas ouro 18k certificado, mas também história, dedicação e amor.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/63c708746_CpiadeFOTO2.jpg"
                  alt="Joalheria Aliança Joias - Várzea Grande MT"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="text-4xl font-bold text-[#D4AF37]">30+</div>
                <div className="text-sm text-[#4A4A4A] mt-1">Anos de Tradição e Excelência</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-widest uppercase">
              Nosso Propósito
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-light text-[#1A1A1A]">
              Missão e <span className="font-semibold text-[#D4AF37]">Visão</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-[#D4AF37]/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Nossa Missão</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-lg">
                Criar alianças únicas em ouro 18k que simbolizem o amor eterno de cada casal, oferecendo qualidade excepcional, atendimento personalizado e preços justos. Transformamos sonhos em joias que contam histórias e perpetuam momentos especiais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-[#D4AF37]/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Nossa Visão</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-lg">
                Ser reconhecida como a joalheria de referência em Mato Grosso para alianças de casamento e noivado, mantendo a tradição artesanal e excelência no atendimento, enquanto expandimos nossa presença e impactamos positivamente a vida de cada vez mais casais.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-widest uppercase">
              O Que Nos Move
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-light text-[#1A1A1A]">
              Nossos <span className="font-semibold text-[#D4AF37]">Valores</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#FDFBF7] rounded-3xl p-6 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-4">
                  <valor.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                  {valor.titulo}
                </h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  {valor.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-widest uppercase">
              Por Que Nos Escolher
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-light text-[#1A1A1A]">
              Nossos <span className="font-semibold text-[#D4AF37]">Diferenciais</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {diferenciais.map((diferencial, index) => (
              <motion.div
                key={diferencial.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-[#D4AF37]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                    <diferencial.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                      {diferencial.titulo}
                    </h3>
                    <p className="text-[#4A4A4A] leading-relaxed">
                      {diferencial.descricao}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Números que Comprovam */}
      <section className="py-20 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Números que <span className="font-semibold text-[#D4AF37]">Comprovam</span>
            </h2>
            <p className="text-white/80 text-lg">
              Nossa trajetória em números que refletem confiança e excelência
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { numero: '30+', label: 'Anos de Experiência', icon: Clock },
              { numero: '2.500+', label: 'Casais Atendidos', icon: Heart },
              { numero: '100%', label: 'Ouro 18k Certificado', icon: Gem },
              { numero: '5★', label: 'Avaliação Média', icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-2">
                  {stat.numero}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A1A] mb-6">
              Pronto para Criar sua <span className="font-semibold text-[#D4AF37]">Aliança dos Sonhos?</span>
            </h2>
            <p className="text-lg text-[#4A4A4A] mb-8 leading-relaxed">
              Venha nos conhecer pessoalmente ou entre em contato pelo WhatsApp. Será um prazer atender você!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1EA952] text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                <a href="https://wa.me/5565993122777?text=Olá! Gostaria de saber mais sobre as alianças da Joalheria Aliança Joias." target="_blank" rel="noopener noreferrer">
                  💬 Falar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-6 text-lg font-medium rounded-full hover:bg-[#D4AF37]/5 transition-all duration-300"
              >
                <Link to={createPageUrl('Home')}>
                  Ver Nossos Modelos
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}