import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import FooterSection from '../components/landing/FooterSection';

const categorias = [
  { valor: 'todas', label: 'Todas' },
  { valor: 'classicas', label: 'Clássicas' },
  { valor: 'tradicionais', label: 'Tradicionais' },
  { valor: 'quadradas', label: 'Quadradas' },
  { valor: 'trabalhadas', label: 'Trabalhadas' },
  { valor: 'com-pedras', label: 'Com Pedras' },
  { valor: 'personalizadas', label: 'Personalizadas' }
];

const formatarPreco = (valor) => {
  return parseFloat(valor).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export default function Catalogo() {
  const [busca, setBusca] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('todas');
  const [drawerAberto, setDrawerAberto] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Catálogo de Alianças em Ouro 18k - Joalheria Aliança Joias';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Explore nosso catálogo completo de alianças em ouro 18k. Modelos clássicos, trabalhados, com pedras e personalizados. Fabricação própria em Várzea Grande MT.';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (drawerAberto) {
        setDrawerAberto(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [drawerAberto]);

  const { data: modelos = [], isLoading } = useQuery({
    queryKey: ['modelos-joia'],
    queryFn: () => base44.entities.ModeloJoia.list('-created_date', 200),
    initialData: [],
  });

  const { data: configuracoes = [] } = useQuery({
    queryKey: ['configuracoes'],
    queryFn: () => base44.entities.Configuracao.list(),
    initialData: [],
  });

  const precoGrama = parseFloat(
    configuracoes.find(c => c.chave === 'preco_grama_ouro')?.valor || '950'
  );

  const modelosFiltrados = modelos.filter(modelo => {
    if (!modelo.disponivel) return false;
    
    const matchCategoria = categoriaFiltro === 'todas' || modelo.categoria === categoriaFiltro;
    
    return matchCategoria;
  });

  const calcularPreco = (modelo) => {
    const precoBase = modelo.peso_base_gramas * precoGrama;
    const precoTotal = precoBase + (modelo.custo_producao_adicional || 0);
    return precoTotal.toFixed(2);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#4A4A4A]">Carregando catálogo...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium text-[#D4AF37] tracking-widest uppercase"
          >
            Coleção Completa
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-2xl sm:text-3xl font-light text-white"
          >
            Explore Todos os <span className="font-semibold text-[#D4AF37]">Modelos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm text-gray-300 max-w-xl mx-auto"
          >
            Conheça nossa coleção completa de alianças em ouro 18k. Cada modelo é único e pode ser totalmente personalizado.
          </motion.p>
        </div>
      </section>

      {/* Botão de Categorias Centralizado */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-center">
            <button
              onClick={() => setDrawerAberto(!drawerAberto)}
              className={`
                relative flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm
                transition-all duration-300 transform hover:scale-105
                ${categoriaFiltro !== 'todas'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-white shadow-lg shadow-[#D4AF37]/30'
                  : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg hover:shadow-xl'
                }
              `}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>
                {categoriaFiltro === 'todas' ? 'Escolher Categoria' : categorias.find(c => c.valor === categoriaFiltro)?.label}
              </span>
              <motion.div
                animate={{ rotate: drawerAberto ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
              {categoriaFiltro !== 'todas' && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold shadow-md">
                  1
                </span>
              )}
            </button>
          </div>

          {/* Menu de Categorias em Cascata */}
          {drawerAberto && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-3">
                <div className="grid grid-cols-4 gap-3">
                  {categorias.map((cat, index) => (
                    <motion.button
                      key={cat.valor}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        setCategoriaFiltro(cat.valor);
                        setDrawerAberto(false);
                      }}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 hover:bg-gray-50 group"
                    >
                      <div className={`
                        relative w-14 h-14 rounded-full flex items-center justify-center text-xl
                        transition-all duration-300 transform group-hover:scale-110
                        ${categoriaFiltro === cat.valor 
                          ? 'bg-gradient-to-br from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] shadow-lg shadow-[#D4AF37]/30 scale-105' 
                          : 'bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 group-hover:border-[#D4AF37]'
                        }
                      `}>
                        {categoriaFiltro === cat.valor && (
                          <span className="absolute inset-2 rounded-full border border-white/40 animate-pulse" />
                        )}
                        <span>
                          {cat.valor === 'todas' && '✨'}
                          {cat.valor === 'classicas' && '💍'}
                          {cat.valor === 'tradicionais' && '👑'}
                          {cat.valor === 'quadradas' && '⬜'}
                          {cat.valor === 'trabalhadas' && '💎'}
                          {cat.valor === 'com-pedras' && '💠'}
                          {cat.valor === 'personalizadas' && '⭐'}
                        </span>
                      </div>
                      <span className={`
                        text-[10px] font-medium text-center leading-tight
                        ${categoriaFiltro === cat.valor ? 'text-[#D4AF37] font-semibold' : 'text-gray-600 group-hover:text-[#D4AF37]'}
                      `}>
                        {cat.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-500">
                    {modelosFiltrados.length} {modelosFiltrados.length === 1 ? 'modelo disponível' : 'modelos disponíveis'}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Grid de Modelos */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {modelosFiltrados.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">Nenhum modelo encontrado</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {modelosFiltrados.map((modelo, index) => (
                <motion.div
                  key={modelo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={createPageUrl(`Modelo?slug=${modelo.slug}`)}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="relative aspect-square bg-gradient-to-br from-[#F5E6C8] to-[#E8D5A3]">
                        {modelo.imagens && modelo.imagens.length > 0 ? (
                          <img
                            src={modelo.imagens[0]}
                            alt={modelo.nome}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-6xl">
                            💍
                          </div>
                        )}
                        {modelo.destaque && (
                          <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Destaque
                          </div>
                        )}
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 line-clamp-2">
                          {modelo.nome}
                        </h3>
                        
                        {modelo.descricao && (
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {modelo.descricao}
                          </p>
                        )}

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-500">A partir de</p>
                            <p className="text-xl font-bold text-[#D4AF37]">
                              R$ {formatarPreco(calcularPreco(modelo))}
                            </p>
                          </div>
                          <Button 
                            variant="outline" 
                            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                          >
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}