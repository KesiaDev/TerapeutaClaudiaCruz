
import React from 'react';
import { Link } from 'react-router-dom';

const Conteudos: React.FC = () => {
  return (
    <div className="bg-[#FDFCF8]">
      <section className="pt-16 pb-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 text-left">
          <nav className="flex items-center gap-2 text-xs font-medium text-[#6B655F] mb-8 uppercase tracking-widest">
            <Link to="/" className="hover:text-[#2C5F5A]">Home</Link>
            <span className="text-[#E8E2D9]">/</span>
            <span className="text-[#2D2A26]">Conteúdos</span>
          </nav>
          <div className="max-w-[850px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#2D2A26] mb-6 font-fraunces">
              Conteúdos para respirar, entender e reorganizar o caminho
            </h1>
            <p className="text-lg text-[#6B655F] max-w-prose leading-relaxed">
              Reflexões sobre psicologia, comportamento e bem-estar para apoiar sua jornada de autoconhecimento e desenvolvimento profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[73px] z-40 bg-[#FDFCF8]/95 backdrop-blur-sm border-b border-[#E8E2D9] mb-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            <button className="px-5 py-2 rounded-full text-sm font-semibold bg-[#C86D44] text-white">Todos</button>
            {['Relações', 'Adolescência', 'Trabalho', 'Autocuidado'].map(cat => (
              <button key={cat} className="px-5 py-2 rounded-full text-sm font-medium border border-[#E8E2D9] bg-white text-[#6B655F] hover:border-[#2C5F5A] hover:text-[#2C5F5A] transition-all">
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6B655F] text-xl">search</span>
            <input className="w-full pl-10 pr-4 py-2 text-sm bg-white border-[#E8E2D9] rounded focus:ring-[#2C5F5A] focus:border-[#2C5F5A]" placeholder="Buscar reflexão..." type="text"/>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { cat: 'Relações', title: 'Quando a conversa vira briga', desc: 'Estratégias para manter o diálogo em momentos de tensão e reconstruir pontes de comunicação através da escuta ativa.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzrwxTINv6Zh7tSSQ1rDbK_a7OC03gDnzdy8qehAzwBeFXiIffncM7eX-rqSb7NpkBOTdcVB477mOVho9nIxKXjk2DcNI4bLQsvcqUGd6TLhYYgOzvK-l1saL_8TJpDkSmUi3-xHMJ2tY2ntpMNk32bTEM_AXAzmzOwuQfKwCHGNHC_M-kdacYuD_IMfLbhYxZPef1jH6jUlgEdBUF5pXB3sgejxxVjGW4JbtLt0xelek-Di-CCpvfwkLR9DICRJ-zfJE3QQOVC1xy' },
            { cat: 'Autocuidado', title: 'Limites sem culpa', desc: 'Como estabelecer barreiras saudáveis no trabalho e na vida pessoal sem se sentir egoísta ou negligente com os outros.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-PRSWTqZyIBjMyJu0oEIuPcT8a5BOA2uzm6PY3748Bb1yRh3jGGuMeuL7kET9iQGuoWTWuoK8w5l28wydQl2oV7mZdhBH7l68AnHqFGMCIZ0L-HpwNDFirJwZ4OKihXYxwbLyoZ4V5sfCtY1jFrqb9IN-6ppjmWGsCaWO5lADAtC5qUQk5bGPYM8upKfEHaeBVyiG342Fa8vOnFaO7cmMZnGrCGRYau0eG8O6LcFB7jjd8FoHi2uqnyuZD2DwcfUpUNWP1vkWluil' },
            { cat: 'Trabalho', title: 'Burnout e propósito', desc: 'A linha tênue entre dedicação e exaustão extrema no ambiente corporativo contemporâneo e a busca por equilíbrio real.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbrGeBY25RhD9nzzniHFURbkeCOSrqd8MuMx-21jzq7GZLemDfcXqAMCdunIas8j7bRrUTjTG2gtEiYgSe_QlFJqfKFbt0hzRQIyZgbRMaPvNq_1F0T4vtcIWDdnOOHF4sHtR-tlovAh_SWDTiF17nKFJxiB5FuTa6CbZJGBVexKCjRUsyDsU-iFm9P0xXTo73ycuyQG1TIzUx8C9uhAI5KvqYy2Ue19Dq5Y4HU-9rTdwNR8k_6KJqsIblWDG43fbwrGyYkY1WCv0w' },
            { cat: 'Adolescência', title: 'Desafios da adolescência', desc: 'Entendendo as mudanças biológicas e emocionais típicas desta fase e construindo pontes de confiança entre pais e filhos.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Xu3oQKCnjGYW4nvMZ-XL2CIjOz66rBHjVs6D69-wD5zzVJex3ILxqKGEXvIBn7iIjpaqMxxL4LQ_4CS1gj1up_Uq8g2CaDdJPJPnTuJ-AWm-_YG-25fmNwb-EKd_DgARk28vTBvRQQft-Wi8aMuID7M1hbOU59zM8WGWLs4EQa4lxymWt3c0b7ryZdn3nlbBlvlsPeR804AqAXSC7kiHdaKsv23MACy5IXO5Gg99FJrXNOrLJ47uf7oBQKS4TtPddApsDHHP3Yrv' },
            { cat: 'Autocuidado', title: 'O peso do sim', desc: 'Por que temos tanta dificuldade em dizer não e como essa necessidade de agradar impacta diretamente nossa saúde mental?', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARQwZY8IcFTMmkDVxyEYVg2wzyHGEQPAIAJZb2_NLHUqWgqqh50XD6LmqH8hobjvZ-zebzraNlPBg97VO6r0qwv0Oia0na-bUnhK6I_KIvrwepqGRnsMZXW2lFuTsOnUIHfaj_uGOz1HhjeRoyS5hOPu5TSMOrhN6CB6qIoXGB6iN4WuH74jJrmjz6MzMClqvkPOGU_PeotQHtFMl95M6sqPNN0CZP6zUofo1C2kYFUxvL_0N5yQA8ZqnVRlydub6_IRrCNWOm1tdx' },
            { cat: 'Relações', title: 'Cuidando de quem cuida', desc: 'A importância vital do suporte emocional e do autocuidado estratégico para profissionais da saúde e cuidadores familiares.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmc3akxLO2PRntVRAZf_1ynDM28Z6Hb9Z-S2IztybyjPnv19at-BZGLlhR7uqbHnDPeUm17s10faEpiKXsNySJsN27c5YwNgtUnuFvlRXnKc5eWNtUbMaIl5N52ZzqCKWskgYooaJKGLviRnzuJfE-T3kZA6KUqgbsADbv_fQYKPA8t8R1yqP3tUrijExkNApvsG-u3h70-fkZILn9LRrYuWjj3mungGayp3V6ITOB_8GFzXW4rJ8Jgb3Yar7C29t48QVYhGWCJ4nx' }
          ].map((art, i) => (
            <article key={i} className="group bg-white border border-[#E8E2D9] rounded overflow-hidden hover:shadow-lg transition-all flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[#C86D44] text-xs font-bold uppercase tracking-widest mb-3">{art.cat}</span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#2C5F5A] transition-colors font-fraunces">{art.title}</h3>
                <p className="text-[#6B655F] text-sm leading-relaxed mb-6 flex-1">{art.desc}</p>
                <a className="text-[#2C5F5A] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                  Ler artigo <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 flex items-center justify-center gap-4">
          <button className="size-10 flex items-center justify-center border border-[#E8E2D9] rounded hover:bg-white text-[#6B655F]">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex gap-2">
            <button className="size-10 flex items-center justify-center bg-[#2C5F5A] text-white rounded font-semibold">1</button>
            <button className="size-10 flex items-center justify-center border border-[#E8E2D9] rounded hover:bg-white text-[#6B655F]">2</button>
            <button className="size-10 flex items-center justify-center border border-[#E8E2D9] rounded hover:bg-white text-[#6B655F]">3</button>
          </div>
          <button className="size-10 flex items-center justify-center border border-[#E8E2D9] rounded hover:bg-white text-[#6B655F]">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Corporate/Individual CTA */}
      <section className="border-t border-[#E8E2D9] py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            <div className="p-10 border border-[#E8E2D9] rounded bg-[#FDFCF8]">
              <h4 className="text-2xl font-semibold mb-4 font-fraunces">Saúde Corporativa</h4>
              <p className="text-[#6B655F] mb-8">Programas personalizados para empresas que buscam promover o bem-estar mental das suas equipes e prevenir o esgotamento profissional.</p>
              <Link to="/atendimentos" className="inline-flex items-center gap-2 text-[#2C5F5A] font-bold group">
                Palestras e consultoria <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="p-10 bg-[#2C5F5A] text-white rounded shadow-xl">
              <h4 className="text-2xl font-semibold mb-4 font-fraunces">Atendimento Individual</h4>
              <p className="text-white/80 mb-8">Inicie seu processo terapêutico com acompanhamento especializado focado no seu desenvolvimento pessoal e saúde emocional.</p>
              <Link to="/contato" className="w-full md:w-auto bg-[#C86D44] hover:bg-[#C86D44]/90 text-white font-bold py-3 px-8 rounded transition-all inline-block text-center">
                Agendar uma Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conteudos;
