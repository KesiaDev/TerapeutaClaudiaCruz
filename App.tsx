
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Atendimentos from './pages/Atendimentos';
import ComoFunciona from './pages/ComoFunciona';
import Sobre from './pages/Sobre';
import Abordagem from './pages/Abordagem';
import Conteudos from './pages/Conteudos';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import TerapiaFamiliar from './pages/TerapiaFamiliar';
import AtendimentoAdolescentes from './pages/AtendimentoAdolescentes';
import SolucoesCorporativas from './pages/SolucoesCorporativas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atendimentos" element={<Atendimentos />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/abordagem" element={<Abordagem />} />
            <Route path="/conteudos" element={<Conteudos />} />
            <Route path="/terapia-familiar" element={<TerapiaFamiliar />} />
            <Route path="/adolescentes" element={<AtendimentoAdolescentes />} />
            <Route path="/solucoes-corporativas" element={<SolucoesCorporativas />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/termos" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
