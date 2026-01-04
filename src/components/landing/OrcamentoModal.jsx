import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function OrcamentoModal({ isOpen, onClose, modeloSelecionado }) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    modelo: modeloSelecionado || '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = React.useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset após alguns segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nome: '', telefone: '', email: '', modelo: '', mensagem: '' });
      onClose();
    }, 3000);
  }, [onClose]);

  const handleChange = React.useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  React.useEffect(() => {
    if (modeloSelecionado) {
      setFormData(prev => ({ ...prev, modelo: modeloSelecionado }));
    }
  }, [modeloSelecionado]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full sm:max-w-lg"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#C9A227] p-6 text-white">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h2 className="text-2xl font-semibold">Solicitar Orçamento</h2>
                <p className="text-white/80 mt-1">
                  Preencha o formulário e entraremos em contato
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                      Solicitação Enviada!
                    </h3>
                    <p className="text-[#4A4A4A]">
                      Entraremos em contato em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="nome" className="text-[#1A1A1A] font-medium">
                        Nome completo *
                      </Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => handleChange('nome', e.target.value)}
                        required
                        placeholder="Digite seu nome"
                        className="mt-1.5 rounded-xl border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="telefone" className="text-[#1A1A1A] font-medium">
                          WhatsApp *
                        </Label>
                        <Input
                          id="telefone"
                          value={formData.telefone}
                          onChange={(e) => handleChange('telefone', e.target.value)}
                          required
                          placeholder="(65) 99999-9999"
                          className="mt-1.5 rounded-xl border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-[#1A1A1A] font-medium">
                          E-mail
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="seu@email.com"
                          className="mt-1.5 rounded-xl border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="modelo" className="text-[#1A1A1A] font-medium">
                        Modelo de interesse
                      </Label>
                      <Select
                        value={formData.modelo}
                        onValueChange={(value) => handleChange('modelo', value)}
                      >
                        <SelectTrigger className="mt-1.5 rounded-xl border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]">
                          <SelectValue placeholder="Selecione um modelo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="classica">Clássica Polida</SelectItem>
                          <SelectItem value="contemporanea">Contemporânea Fosca</SelectItem>
                          <SelectItem value="diamante">Diamante Solitário</SelectItem>
                          <SelectItem value="anatomica">Anatômica Confort</SelectItem>
                          <SelectItem value="duo">Duo Texturizada</SelectItem>
                          <SelectItem value="personalizada">Personalizada</SelectItem>
                          <SelectItem value="outro">Outro / Não sei ainda</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensagem" className="text-[#1A1A1A] font-medium">
                        Mensagem
                      </Label>
                      <Textarea
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={(e) => handleChange('mensagem', e.target.value)}
                        placeholder="Conte-nos mais sobre o que procura..."
                        rows={3}
                        className="mt-1.5 rounded-xl border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C9A227] hover:from-[#C9A227] hover:to-[#B8960C] text-white py-6 rounded-xl font-medium text-lg shadow-lg shadow-[#D4AF37]/20 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Solicitação
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-gray-400">
                      Responderemos em até 24 horas úteis
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}