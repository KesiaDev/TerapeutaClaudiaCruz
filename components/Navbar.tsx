
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Atendimentos', path: '/atendimentos' },
    { label: 'Como Funciona', path: '/como-funciona' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Abordagem', path: '/abordagem' },
    { label: 'Conteúdos', path: '/conteudos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#F7F4EE]/90 backdrop-blur-md border-b border-[#1F4D4A]/10">
      <div className="max-w-[1200px] mx-auto h-20 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-[#1F4D4A]">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-[#1F4D4A] text-xl font-bold tracking-tight font-fraunces">
            Cláudia Cruz <span className="font-normal opacity-80 italic">Terapeuta</span>
          </h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                isActive(item.path) ? 'text-[#1F4D4A] border-b-2 border-[#1F4D4A]' : 'text-[#141616] hover:text-[#1F4D4A]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contato" className="bg-[#c46a3a] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all shadow-sm ml-2">
            Agendar Consulta
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#1F4D4A]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium ${isActive(item.path) ? 'text-[#1F4D4A]' : 'text-gray-600'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#c46a3a] text-white px-5 py-3 rounded-md text-center font-bold"
          >
            Agendar Agora
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
