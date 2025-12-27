import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Youtube } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#0D0D0D] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-light text-white mb-4">
              <span className="font-semibold text-[#D4AF37]">Joalheria</span> Aliança Joias
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Especialistas em alianças em ouro 18k, unindo tradição artesanal 
              e design contemporâneo. Cada peça é criada com amor e dedicação.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/aliancajoias.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-[#D4AF37]" />
              </a>
              <a
                href="https://www.facebook.com/aliancajoias.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-[#D4AF37]" />
              </a>
              <a
                href="https://www.tiktok.com/@aliancajoias.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@AliancaJoias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5 text-gray-400 hover:text-[#D4AF37]" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <a
                href="tel:+5565993122777"
                className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>(65) 99312-2777</span>
              </a>
              <a
                href="mailto:aliancajoiasmarket@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>aliancajoiasmarket@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Av. Sen. Filinto Müller, 1900 - Centro Norte, Várzea Grande - MT, 78110-302</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-6">Horário</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                <span>Atendimento</span>
              </div>
              <p>Seg - Sex: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p className="text-sm text-[#D4AF37]">
                Agendamento recomendado
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Joalheria Aliança Joias. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Feito com <span className="text-[#D4AF37]">♥</span> para casais apaixonados
          </p>
        </div>
      </div>
    </footer>
  );
}