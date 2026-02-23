import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import FooterSection from '../components/landing/FooterSection';

const tamanhos = Array.from({ length: 27 }, (_, i) => i + 10); // 10 a 36

const formatarPreco = (valor) => {
  return parseFloat(valor).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export default function Modelo() {
  const [quantidade, setQuantidade] = useState(2);
  const [tamanho1, setTamanho1] = useState('');
  const [tamanho2, setTamanho2] = useState('');
  const [nome1, setNome1] = useState('');
  const [nome2, setNome2] = useState('');
  const [imagemAtual, setImagemAtual] = useState(0);
  const [formaPagamento, setFormaPagamento] = useState('');

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: modelos = [] } = useQuery({
    queryKey: ['modelos-joia'],
    queryFn: () => base44.entities.ModeloJoia.list(),
    initialData: [],
  });

  const { data: configuracoes = [] } = useQuery({
    queryKey: ['configuracoes'],
    queryFn: () => base44.entities.Configuracao.list(),
    initialData: [],
  });

  const modelo = modelos.find(m => m.slug === slug);

  const precoGrama = parseFloat(
    configuracoes.find(c => c.chave === 'preco_grama_ouro')?.valor || '950'
  );

  useEffect(() => {
    if (modelo) {
      document.title = `${modelo.nome} - Joalheria Aliança Joias`;
    }
  }, [modelo]);

  if (!modelo) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Modelo não encontrado</h2>
          <Link to={createPageUrl('Catalogo')}>
            <Button>Voltar ao Catálogo</Button>
          </Link>
        </div>
      </div>
    );
  }

  const calcularPrecoTotal = () => {
    const precoBase = modelo.peso_base_gramas * precoGrama;
    const precoUnitario = precoBase + (modelo.custo_producao_adicional || 0);
    const precoTotal = precoUnitario * quantidade;
    
    if (formaPagamento === 'pix') {
      return (precoTotal * 0.95).toFixed(2); // 5% desconto
    }
    
    return precoTotal.toFixed(2);
  };

  const calcularPrecoUnitario = () => {
    const precoBase = modelo.peso_base_gramas * precoGrama;
    return (precoBase + (modelo.custo_producao_adicional || 0)).toFixed(2);
  };

  const handleWhatsApp = () => {
    const imagemPrincipal = imagens[imagemAtual];
    
    let mensagem = `Olá! Tenho interesse no modelo *${modelo.nome}*\n\n`;
    
    mensagem += `📊 *Detalhes do Pedido:*\n`;
    mensagem += `• Quantidade: ${quantidade} ${quantidade === 1 ? 'aliança' : 'alianças (par)'}\n`;
    
    if (tamanho1) {
      mensagem += `• Tamanho${quantidade === 2 ? ' 1' : ''}: ${tamanho1}\n`;
    }
    
    if (quantidade === 2 && tamanho2) {
      mensagem += `• Tamanho 2: ${tamanho2}\n`;
    }
    
    if (nome1.trim()) {
      mensagem += `• Nome${quantidade === 2 ? ' 1' : ''} para gravação: ${nome1}\n`;
    }
    
    if (quantidade === 2 && nome2.trim()) {
      mensagem += `• Nome 2 para gravação: ${nome2}\n`;
    }
    
    mensagem += `\n💳 *Forma de Pagamento:* `;
    if (formaPagamento === 'cartao') {
      mensagem += `Cartão em até 12x sem juros\n`;
    } else if (formaPagamento === 'pix') {
      mensagem += `PIX com 5% de desconto\n`;
    }
    
    mensagem += `\n💰 *Valor Total:* R$ ${calcularPrecoTotal()}`;
    if (formaPagamento === 'pix') {
      mensagem += ` (com 5% de desconto)`;
    }
    mensagem += `\n`;
    
    mensagem += `\n📷 *Foto do Modelo:* ${imagemPrincipal}\n`;
    mensagem += `\nGostaria de mais informações e finalizar o pedido!`;
    
    const whatsappUrl = `https://wa.me/5565993122777?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const podeEnviar = () => {
    if (!tamanho1) return false;
    if (quantidade === 2 && !tamanho2) return false;
    if (!formaPagamento) return false;
    return true;
  };

  const imagens = modelo.imagens && modelo.imagens.length > 0 
    ? modelo.imagens 
    : ['https://via.placeholder.com/600x600?text=Sem+Imagem'];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to={createPageUrl('Catalogo')}>
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Voltar ao Catálogo
            </Button>
          </Link>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square bg-gradient-to-br from-[#F5E6C8] to-[#E8D5A3] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={imagens[imagemAtual]}
                alt={modelo.nome}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {imagens.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {imagens.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setImagemAtual(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      imagemAtual === index ? 'border-[#D4AF37]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${modelo.nome} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações e Personalização */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-[#1A1A1A] mb-2">
                {modelo.nome}
              </h1>
              
              {modelo.descricao && (
                <p className="text-lg text-gray-600 leading-relaxed">
                  {modelo.descricao}
                </p>
              )}
            </div>

            {/* Preço */}
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A227]/10 rounded-2xl p-6 border border-[#D4AF37]/30">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-[#1A1A1A]">
                  R$ {formatarPreco(calcularPrecoTotal())}
                </span>
                <span className="text-sm text-gray-600">
                  ({quantidade} {quantidade === 1 ? 'aliança' : 'alianças'})
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Preço unitário: R$ {formatarPreco(calcularPrecoUnitario())} | Base: {modelo.peso_base_gramas}g | R$ {formatarPreco(precoGrama)}/g
              </p>
              {formaPagamento === 'pix' && (
                <p className="text-sm text-green-600 font-semibold mt-2">
                  ✓ 5% de desconto aplicado no PIX
                </p>
              )}
            </div>

            {/* Forma de Pagamento */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Forma de Pagamento</Label>
              <div className="grid gap-3">
                <button
                  type="button"
                  onClick={() => setFormaPagamento('cartao')}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    formaPagamento === 'cartao'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/5'
                      : 'border-gray-200 hover:border-[#D4AF37]/50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">💳 Cartão de Crédito</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Parcele em até 12x de R$ {formatarPreco((parseFloat(calcularPrecoTotal()) / 12).toFixed(2))}
                      </p>
                    </div>
                    {formaPagamento === 'cartao' && (
                      <span className="text-[#D4AF37] text-xl">✓</span>
                    )}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormaPagamento('pix')}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    formaPagamento === 'pix'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-500/50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">🔑 PIX</p>
                      <p className="text-sm text-green-600 font-semibold mt-1">5% de desconto à vista</p>
                    </div>
                    {formaPagamento === 'pix' && (
                      <span className="text-green-600 text-xl">✓</span>
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Quantidade */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Quantidade</Label>
              <div className="flex gap-3">
                <Button
                  variant={quantidade === 1 ? 'default' : 'outline'}
                  onClick={() => setQuantidade(1)}
                  className={`flex-1 ${quantidade === 1 ? 'bg-[#D4AF37] hover:bg-[#C9A227]' : ''}`}
                >
                  1 Aliança
                </Button>
                <Button
                  variant={quantidade === 2 ? 'default' : 'outline'}
                  onClick={() => setQuantidade(2)}
                  className={`flex-1 ${quantidade === 2 ? 'bg-[#D4AF37] hover:bg-[#C9A227]' : ''}`}
                >
                  Par (2 Alianças)
                </Button>
              </div>
            </div>

            {/* Tamanhos */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Tamanho{quantidade === 2 ? 's' : ''}</Label>
              
              <div className="grid gap-4">
                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">
                    Tamanho{quantidade === 2 ? ' 1' : ''}
                  </Label>
                  <select
                    value={tamanho1}
                    onChange={(e) => setTamanho1(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  >
                    <option value="">Selecione o tamanho</option>
                    {tamanhos.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {quantidade === 2 && (
                  <div>
                    <Label className="text-sm text-gray-600 mb-2 block">Tamanho 2</Label>
                    <select
                      value={tamanho2}
                      onChange={(e) => setTamanho2(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    >
                      <option value="">Selecione o tamanho</option>
                      {tamanhos.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Gravação de Nomes */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Gravação (Opcional)</Label>
              
              <div className="grid gap-4">
                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">
                    Nome{quantidade === 2 ? ' 1' : ''}
                  </Label>
                  <Input
                    placeholder="Digite o nome para gravação"
                    value={nome1}
                    onChange={(e) => setNome1(e.target.value)}
                    maxLength={20}
                  />
                </div>

                {quantidade === 2 && (
                  <div>
                    <Label className="text-sm text-gray-600 mb-2 block">Nome 2</Label>
                    <Input
                      placeholder="Digite o nome para gravação"
                      value={nome2}
                      onChange={(e) => setNome2(e.target.value)}
                      maxLength={20}
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500">
                ✨ A gravação é opcional e gratuita. Você pode deixar em branco se preferir.
              </p>
            </div>

            {/* Botão WhatsApp */}
            <Button
              onClick={handleWhatsApp}
              disabled={!podeEnviar()}
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-6 text-lg font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Finalizar pelo WhatsApp
            </Button>

            {!podeEnviar() && (
              <p className="text-sm text-red-600 text-center">
                {!tamanho1 || (quantidade === 2 && !tamanho2)
                  ? 'Por favor, selecione o(s) tamanho(s) antes de continuar'
                  : 'Por favor, selecione a forma de pagamento'}
              </p>
            )}

            {/* Informações Adicionais */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm text-gray-600">
              <p>✓ Ouro 18k certificado</p>
              <p>✓ Fabricação própria artesanal</p>
              <p>✓ Garantia vitalícia</p>
              <p>✓ Polimento gratuito</p>
              <p>✓ Entrega em Várzea Grande e Cuiabá</p>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}