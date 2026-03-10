
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F4D4A] text-white py-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="white" fillRule="evenodd"></path>
              </svg>
              <h2 className="text-xl font-bold font-fraunces">Cláudia Cruz</h2>
            </div>
            <p className="text-white/70 text-sm">
              Terapeuta com estudos em Psicanálise, Especialista em Terapia Cognitivo Comportamental e Saúde Mental Organizacional.
            </p>
            <div className="pt-4">
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#c46a3a] mb-4">Siga nas redes</h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c46a3a] transition-all">
                   <span className="material-symbols-outlined text-sm">public</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c46a3a] transition-all">
                   <span className="material-symbols-outlined text-sm">share</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-left">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#c46a3a]">Navegação</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/sobre" className="hover:text-[#c46a3a] transition-colors">Sobre Cláudia</Link></li>
              <li><Link to="/atendimentos" className="hover:text-[#c46a3a] transition-colors">Serviços Terapêuticos</Link></li>
              <li><Link to="/conteudos" className="hover:text-[#c46a3a] transition-colors">Artigos e Blog</Link></li>
              <li><Link to="/contato" className="hover:text-[#c46a3a] transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          <div className="space-y-6 text-left">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#c46a3a]">Contato</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">mail</span>
                contato@claudiacruz.com.br
              </li>
              <li className="flex items-center gap-3 text-[#c46a3a] font-semibold">
                <span className="material-symbols-outlined text-lg">chat</span>
                (51) 98765-4321
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">location_on</span>
                Atendimento Online e Presencial
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2024 Cláudia Cruz Terapeuta. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/termos" className="hover:text-white">Privacidade</Link>
            <Link to="/termos" className="hover:text-white">Cookies</Link>
            <Link to="/termos" className="hover:text-white">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
