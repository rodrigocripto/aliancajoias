import React, { useState } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import FallingHearts from '@/components/FallingHearts';
import AutoridadeSection from '@/components/landing/AutoridadeSection';
import EmocionalSection from '@/components/landing/EmocionalSection';
import ModelosSection from '@/components/landing/ModelosSection';
import ModeloDestaque from '@/components/landing/ModeloDestaque';
import ModelosDupla from '@/components/landing/ModelosDupla';
import PersonalizacaoSection from '@/components/landing/PersonalizacaoSection';
import ProcessoSection from '@/components/landing/ProcessoSection';
import DepoimentosSection from '@/components/landing/DepoimentosSection';
import CTAFinalSection from '@/components/landing/CTAFinalSection';
import FooterSection from '@/components/landing/FooterSection';
import OrcamentoModal from '@/components/landing/OrcamentoModal';
import FloatingWhatsApp from '@/components/landing/FloatingWhatsApp';

// Mover modelos para fora do componente para evitar re-criação
const modelos = [
  {
    id: 1,
    nome: 'Clássica Polida',
    descricao: 'A elegância atemporal do ouro 18k com acabamento espelhado. Perfeita para quem aprecia a tradição e sofisticação.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/63c708746_CpiadeFOTO2.jpg',
    destaque: 'Mais Vendida',
  },
  {
    id: 2,
    nome: 'Reta Chanfrada',
    descricao: 'Design contemporâneo com quinas chanfradas que criam um visual único e marcante. Linhas retas que simbolizam solidez e modernidade.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/2cfa1ba59_CpiadeFOTO3.jpg',
    destaque: 'Tendência',
  },
  {
    id: 3,
    nome: 'Cravejada Luxury',
    descricao: 'Sofisticação máxima com pedras cravejadas e detalhes torcidos em ouro branco. O equilíbrio perfeito entre brilho e elegância para casais que não abrem mão do luxo.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/3baa6ee1a_CpiadeFOTO3.jpg',
    destaque: 'Premium',
  },
  {
    id: 4,
    nome: 'Anatômica Confort',
    descricao: 'Design côncavo e anatômico que se molda perfeitamente ao dedo. Máximo conforto para uso diário com elegância refinada.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/68c6261fe_MODELOCV1632.jpg',
    destaque: 'Conforto',
  },
  {
    id: 5,
    nome: 'Duo Texturizada',
    descricao: 'Contraste sofisticado entre acabamento fosco centralizado e frisos laterais polidos. A harmonia perfeita entre texturas para casais que celebram suas diferenças.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/60ab96161_CpiadeFOTO2.jpg',
    destaque: 'Exclusiva',
  },
  {
    id: 6,
    nome: 'Personalizada',
    descricao: 'Desenhe sua própria aliança. Cada detalhe sob medida para tornar seu momento ainda mais especial.',
    imagem: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ef32b4b63ebef73cd51c8/65717288d_CpiadeFOTO2.jpg',
    destaque: 'Sob Medida',
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modeloSelecionado, setModeloSelecionado] = useState('');

  const handleCtaClick = React.useCallback(() => {
    setModeloSelecionado('');
    setIsModalOpen(true);
  }, []);

  const handleModeloClick = React.useCallback((modelo) => {
    setModeloSelecionado(modelo);
    setIsModalOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] overflow-x-hidden">
      <FallingHearts />
      <HeroSection onCtaClick={handleCtaClick} />
      <ModeloDestaque modelo={modelos[0]} />
      <AutoridadeSection />
      <ModeloDestaque modelo={modelos[1]} invertido />
      <PersonalizacaoSection />
      <ModeloDestaque modelo={modelos[5]} />
      <EmocionalSection />
      <ModeloDestaque modelo={modelos[3]} invertido />
      <ProcessoSection />
      <ModelosDupla modelos={[modelos[2], modelos[4]]} />
      <DepoimentosSection />
      <ModelosSection onModeloClick={handleModeloClick} />
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