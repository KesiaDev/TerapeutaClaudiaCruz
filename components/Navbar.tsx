import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brand } from '../lib/brandAssets';

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
      <div className="max-w-[1200px] mx-auto min-h-[5.5rem] px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <Link to="/" className="flex min-w-0 items-center shrink-0">
          <img
            src={brand.horizontal}
            alt="Cláudia Cruz Terapeuta"
            className="h-12 w-auto max-w-[min(100%,320px)] object-contain object-left sm:h-14 sm:max-w-[360px] md:h-16 md:max-w-[400px] lg:h-[4.5rem] lg:max-w-[440px] xl:h-20 xl:max-w-[480px]"
            width={480}
            height={80}
            decoding="async"
          />
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
          <div className="flex justify-center border-b border-gray-100 pb-4">
            <img
              src={brand.marca}
              alt=""
              className="h-20 w-auto max-w-[280px] object-contain sm:h-24 sm:max-w-[300px] md:max-w-[320px]"
              aria-hidden
            />
          </div>
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
