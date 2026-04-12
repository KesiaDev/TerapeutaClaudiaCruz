import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AtendimentoAdolescentes: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const demandasEsq = [
    'Ansiedade e pressões sociais internas',
    'Desafios de adaptação no ambiente escolar',
    'Organização da rotina e busca por autonomia',
  ];
  const demandasDir = [
    'Gestão de crises e sobrecarga sensorial',
    'Comunicação e relacionamentos interpessoais',
    'Exploração da identidade e autoimagem',
  ];

  const tccCards = [
    {
      icon: 'bolt',
      title: 'Gatilhos',
      desc: 'Identificação consciente de situações, pensamentos ou estímulos que geram desequilíbrio emocional ou crises.',
    },
    {
      icon: 'trending_up',
      title: 'Autorregulação',
      desc: 'Desenvolvimento de estratégias práticas para retomar o equilíbrio e lidar com a intensidade emocional de forma saudável.',
    },
    {
      icon: 'handshake',
      title: 'Combinados',
      desc: 'Criação de acordos funcionais entre o adolescente, família e escola para promover convivência e previsibilidade.',
    },
  ];

  const faqItems = [
    {
      pergunta: 'Como funciona o sigilo terapêutico com adolescentes?',
      resposta:
        'O sigilo é um pilar ético. O que é falado em sessão fica entre o adolescente e a terapeuta, com exceções legais (risco à vida, etc.). Em alguns casos, combinamos com o adolescente e a família como fazer pontes de comunicação sem quebrar a confiança.',
    },
    {
      pergunta: 'As sessões são apenas para o adolescente ou os pais participam?',
      resposta:
        'A maior parte das sessões é individual com o adolescente. Quando faz sentido, fazemos encontros com os pais ou responsáveis para alinhar expectativas, combinados e apoio em casa, sempre com o consentimento e o acordo do adolescente.',
    },
    {
      pergunta: 'Vocês atendem online ou presencial?',
      resposta:
        'Atendimento presencial em Viamão/RS e online para todo o Brasil. A escolha depende da disponibilidade e do que for mais confortável para o adolescente e a família.',
    },
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen text-[#1f4d4a]">
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-fraunces leading-tight text-[#1f4d4a] mb-6">
              Intensidade Emocional e Organização na Adolescência
            </h1>
            <p className="text-lg text-[#1f4d4a]/90 leading-relaxed mb-8">
              Apoio terapêutico especializado para adolescentes neurodivergentes e com altas habilidades. Um espaço seguro para se entender e desenvolver autonomia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/como-funciona"
                className="bg-[#c46a3a] text-white px-8 py-3.5 rounded-md font-bold hover:bg-[#c46a3a]/90 transition-all"
              >
                Saber mais
              </Link>
              <button
                type="button"
                onClick={() => document.getElementById('faq-adolescente')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white border-2 border-[#c46a3a] text-[#c46a3a] px-8 py-3.5 rounded-md font-bold hover:bg-[#c46a3a]/5 transition-all"
              >
                Ver FAQ
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-[#e8d5cc] bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUbxkca4IdfGntkPUlx2ya0oJ4nJ0IYKbKjw8d9ml0lBxmcrVcY0Es4Qj3vhIdwcGHV0Ez-VnizbuUCeIYdat-fnwkgq25yiQfNWXEPBt3AoqMlDhW9IrZkJNhsBPkZ2RCNktIK59Pu7e02-97_kQokmW4S5x21jHGoaKGQFBwPZtABCvQ-nSN2qqSkDeWs7_qt_3h1rG33ll13AmNOtG0EsSdRRJKrAj1FZHxNTwwDoqI-H_6aECJENIKSVrccQ_aLfZzNfKUQ9wM")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Demandas Comuns */}
      <section className="bg-[#EEF3F1] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4d4a] mb-10 font-fraunces">Demandas Comuns</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <ul className="space-y-4">
              {demandasEsq.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#c46a3a] mt-1">
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </span>
                  <span className="text-[#1f4d4a]">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {demandasDir.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#c46a3a] mt-1">
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </span>
                  <span className="text-[#1f4d4a]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Neurodiversidade e Altas Habilidades */}
      <section className="py-16 md:py-20 bg-[#F7F4EE]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Coluna esquerda: título, subtítulo e texto */}
            <div className="space-y-5 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1f4d4a] font-fraunces leading-tight">
                Neurodiversidade e Altas Habilidades
              </h2>
              <p className="text-lg md:text-xl text-[#1f4d4a] font-fraunces font-normal leading-relaxed">
                O caminho para o desenvolvimento passa pelo reconhecimento da singularidade.
              </p>
              <p className="text-[#2c2c2c] text-base md:text-lg leading-relaxed">
                Entender o funcionamento cerebral único é o primeiro passo para o bem-estar. Trabalhamos com um olhar cuidadoso e humanizado para o autismo, TDAH e as altas habilidades/superdotação, reconhecendo que cada mente processa o mundo de forma distinta. A terapia foca em potencializar recursos internos enquanto se desenvolve estratégias para os desafios externos.
              </p>
            </div>
            {/* Coluna direita: quadro de citação */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border-l-4 md:border-l-[6px] border-[#c46a3a] shadow-md flex flex-col justify-center min-h-[280px] md:min-h-[320px]">
              <span className="text-5xl md:text-6xl font-serif text-[#c46a3a] leading-none select-none" aria-hidden="true">&ldquo;&rdquo;</span>
              <p className="text-[#2c2c2c] mt-2 mb-6 text-base md:text-lg leading-relaxed italic">
                O objetivo não é normalizar, mas sim fornecer ferramentas para que o adolescente navegue o mundo sem perder sua autenticidade.
              </p>
              <div className="w-12 h-0.5 bg-[#c46a3a] mb-4" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-widest text-[#c46a3a]">Metodologia Integrativa</p>
            </div>
          </div>
        </div>
      </section>

      {/* TCC no Cotidiano */}
      <section className="bg-[#EEF3F1] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4d4a] mb-10 font-fraunces">TCC no Cotidiano</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tccCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-[#1f4d4a]/5 hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-[#c46a3a] text-4xl mb-4">{card.icon}</span>
                <h3 className="text-xl font-bold text-[#1f4d4a] mb-3 font-fraunces">{card.title}</h3>
                <p className="text-[#1f4d4a]/80 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dúvidas Frequentes */}
      <section id="faq-adolescente" className="py-16 bg-[#F7F4EE]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4d4a] mb-10 font-fraunces">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#1f4d4a]/10 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-6 text-left font-medium text-[#1f4d4a] hover:bg-white/80 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {item.pergunta}
                  <span
                    className={`material-symbols-outlined text-[#1f4d4a] transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-[#1f4d4a]/80 text-sm leading-relaxed border-t border-[#1f4d4a]/10 pt-4">
                    {item.resposta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1f4d4a] py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-fraunces">Vamos conversar com calma?</h2>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto">
            Agende uma conversa inicial e descubra um espaço seguro para essa fase.
          </p>
          <Link
            to="/contato"
            className="inline-block bg-[#c46a3a] text-white px-10 py-4 rounded-md font-bold hover:bg-[#c46a3a]/90 transition-all"
          >
            Agendar agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AtendimentoAdolescentes;
