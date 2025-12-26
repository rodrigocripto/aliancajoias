import React, { useState } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import AutoridadeSection from '@/components/landing/AutoridadeSection';
import EmocionalSection from '@/components/landing/EmocionalSection';
import ModelosSection from '@/components/landing/ModelosSection';
import PersonalizacaoSection from '@/components/landing/PersonalizacaoSection';
import ProcessoSection from '@/components/landing/ProcessoSection';
import DepoimentosSection from '@/components/landing/DepoimentosSection';
import CTAFinalSection from '@/components/landing/CTAFinalSection';
import FooterSection from '@/components/landing/FooterSection';
import OrcamentoModal from '@/components/landing/OrcamentoModal';
import FloatingWhatsApp from '@/components/landing/FloatingWhatsApp';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modeloSelecionado, setModeloSelecionado] = useState('');

  const handleCtaClick = () => {
    setModeloSelecionado('');
    setIsModalOpen(true);
  };

  const handleModeloClick = (modelo) => {
    setModeloSelecionado(modelo);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <HeroSection onCtaClick={handleCtaClick} />
      <AutoridadeSection />
      <EmocionalSection />
      <ModelosSection onModeloClick={handleModeloClick} />
      <PersonalizacaoSection />
      <ProcessoSection />
      <DepoimentosSection />
      <CTAFinalSection onCtaClick={handleCtaClick} />
      <FooterSection />
      
      <OrcamentoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        modeloSelecionado={modeloSelecionado}
      />
      
      <FloatingWhatsApp />
    </div>
  );
}