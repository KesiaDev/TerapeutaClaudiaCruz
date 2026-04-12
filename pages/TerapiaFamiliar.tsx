import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TerapiaFamiliar: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const paraQuemItems = [
    {
      title: 'Dificuldades de Comunicação',
      desc: 'Casais que sentem que não são ouvidos ou que brigam constantemente.',
    },
    {
      title: 'Transições Familiares',
      desc: 'Chegada de filhos, luto, mudanças de cidade ou divórcio.',
    },
    {
      title: 'Conflitos Geracionais',
      desc: 'Desafios na educação dos filhos ou convivência entre pais e adolescentes.',
    },
    {
      title: 'Reconstrução de Confiança',
      desc: 'Trabalho terapêutico após quebras de expectativas ou infidelidade.',
    },
  ];

  const tccAjudaCards = [
    {
      icon: 'insights',
      title: 'Identificação de Padrões',
      desc: 'Trabalhamos para identificar crenças e comportamentos repetitivos que geram conflitos automáticos no dia a dia familiar.',
    },
    {
      icon: 'forum',
      title: 'Treino de Comunicação',
      desc: 'Desenvolvimento de habilidades de escuta ativa e comunicação assertiva, salientando o diálogo construtivo em vez da crítica.',
    },
    {
      icon: 'groups',
      title: 'Resolução de Conflitos',
      desc: 'Foco em técnicas práticas para negociar diferenças e encontrar soluções que respeitem as necessidades de todos os membros.',
    },
  ];

  const etapas = [
    { num: '1', title: 'Acolhimento', desc: 'Criamos um ambiente seguro para o casal/família, onde as necessidades de cada um são ouvidas.' },
    { num: '2', title: 'Avaliação', desc: 'Análise profunda da dinâmica familiar e mapeamento dos principais desafios.' },
    { num: '3', title: 'Intervenção', desc: 'Desenvolvimento de estratégias e técnicas terapêuticas para promover a mudança.' },
    { num: '4', title: 'Acompanhamento', desc: 'Consolidação dos ganhos e manutenção de um estilo de vida mais saudável.' },
  ];

  const faqItems = [
    {
      pergunta: 'Qual a duração das sessões?',
      resposta:
        'As sessões de terapia para casais e famílias geralmente duram entre 50 a 60 minutos, podendo ser estendidas em casos específicos sob acordo prévio.',
    },
    {
      pergunta: 'É necessário que todos os membros participem?',
      resposta:
        'Não necessariamente. O formato é definido conforme a demanda: às vezes começamos com o casal ou com parte da família e, quando faz sentido, incluímos outros membros. O importante é alinhar isso na avaliação inicial.',
    },
    {
      pergunta: 'Quantas sessões são necessárias?',
      resposta:
        'Não há um número fixo. Depende dos objetivos, da complexidade da situação e do ritmo de cada família. Definimos metas e revisamos o processo periodicamente.',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#1f4d4a]">
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#1f4d4a]/70 mb-4">
              Especialidade de Clínica
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-fraunces leading-tight text-[#1f4d4a] mb-6">
              Terapia para Famílias e Casais
            </h1>
            <p className="text-lg text-[#1f4d4a]/90 leading-relaxed mb-8">
              Restaure a harmonia, melhore a comunicação e fortaleça os vínculos afetivos através de uma abordagem acolhedora e baseada em evidências científicas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://psipro-dashboard-production.up.railway.app/calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1f4d4a] text-white px-8 py-3.5 rounded-md font-bold hover:bg-[#1f4d4a]/90 transition-all"
              >
                Agendar Consulta
              </a>
              <Link
                to="/como-funciona"
                className="bg-white border-2 border-[#1f4d4a] text-[#1f4d4a] px-8 py-3.5 rounded-md font-bold hover:bg-[#1f4d4a]/5 transition-all"
              >
                Saber mais
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#EEF3F1] bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCe3T5scxx0CCvvO3h7qisjRHGDs0z4MrtPuOQBoJqJGl6qLZcKg7r4vA5PyPjerZGHMoyWoWEGnBviIizFjMmQtmLO0Q5x720GDJrto6nTUt6QSG1_zrhG8rwCf43pdUw1VdwuUJLI1k1O0zvNy2hKZh8hwnoDBCpaUP0xnfz2BmbWWCuEVkO2ohc8HyghQ0WH4geQF6h6h5MWTFc1vfXZ8qHc5R3mM_Em1zodOAc9nxRJk4eeabHPXZ-qBrwtlEWgeiaG80SQvCmo")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Para quem é + Por que TCC */}
      <section className="bg-[#F7F4EE] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-[#1f4d4a]/5 overflow-hidden p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Coluna esquerda */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-6 font-fraunces">
                  Para quem é este atendimento?
                </h2>
                <p className="text-[#2c2c2c]/90 mb-8 leading-relaxed text-base md:text-lg">
                  A terapia é um espaço seguro para lidar com as complexidades das relações humanas. Se você se identifica com algum destes pontos, eu posso ajudar:
                </p>
                <ul className="space-y-6">
                  {paraQuemItems.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-[#EEF3F1] hover:shadow-sm cursor-default group"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#1f4d4a]/15 flex items-center justify-center shrink-0 group-hover:bg-[#1f4d4a]/25 transition-colors">
                        <span className="material-symbols-outlined text-[#1f4d4a] text-lg">check</span>
                      </span>
                      <div>
                        <h4 className="font-bold text-[#2c2c2c] text-base md:text-lg mb-1 group-hover:text-[#1f4d4a] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[#2c2c2c]/70 text-sm md:text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Coluna direita */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-6 font-fraunces">
                  Por que escolher a TCC?
                </h3>
                <p className="text-[#2c2c2c]/90 leading-relaxed mb-8 text-base md:text-lg">
                  A Terapia Cognitivo-Comportamental (TCC) é focada em soluções práticas, ajudando a identificar padrões de pensamento que prejudicam as relações.
                </p>
                <div className="bg-[#EEF3F1] rounded-xl p-8 border border-[#1f4d4a]/5">
                  <p className="text-[#2c2c2c] text-lg md:text-xl leading-relaxed italic text-justify">
                    &ldquo;Mudar a forma como nos comunicamos é o primeiro passo para mudar a forma como amamos.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como a TCC ajuda */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4d4a] mb-4 font-fraunces">
            Como a TCC ajuda o casal e a família
          </h2>
          <div className="w-20 h-1 bg-[#c46a3a] mb-10" />
          <div className="grid md:grid-cols-3 gap-8">
            {tccAjudaCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#F7F4EE] rounded-xl p-8 border border-[#1f4d4a]/5 hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-[#c46a3a] text-4xl mb-4">{card.icon}</span>
                <h3 className="text-xl font-bold text-[#1f4d4a] mb-3 font-fraunces">{card.title}</h3>
                <p className="text-[#1f4d4a]/80 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Etapas do Processo */}
      <section className="bg-[#EEF3F1] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4d4a] mb-12 font-fraunces">
            Etapas do Processo Terapêutico
          </h2>
          <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-4">
            {etapas.map((e, idx) => (
              <React.Fragment key={e.num}>
                <div className="flex-1 bg-white rounded-xl p-6 border border-[#1f4d4a]/10 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#1f4d4a] text-white flex items-center justify-center font-bold text-lg mb-4">
                    {e.num}
                  </div>
                  <h3 className="font-bold text-[#1f4d4a] mb-2 font-fraunces">{e.title}</h3>
                  <p className="text-sm text-[#1f4d4a]/80 leading-relaxed">{e.desc}</p>
                </div>
                {idx < etapas.length - 1 && (
                  <div className="hidden md:flex items-center px-2">
                    <span className="text-[#1f4d4a]/40 text-2xl">→</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4d4a] mb-10 font-fraunces">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F4EE] rounded-xl border border-[#1f4d4a]/10 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-6 text-left font-medium text-[#1f4d4a] hover:bg-[#F7F4EE]/80 transition-colors"
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

      {/* CTA Banner */}
      <section className="bg-[#1f4d4a] py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-white/90 text-sm uppercase tracking-wider mb-2">Atendimento Presencial e Online</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-fraunces">
            Prontos para começar uma nova etapa?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://psipro-dashboard-production.up.railway.app/calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#1f4d4a] px-10 py-4 rounded-md font-bold hover:bg-white/90 transition-all"
            >
              Agendar minha consulta
            </a>
            <a
              href="https://wa.me/5551987654321"
              className="inline-flex items-center gap-2 bg-[#1f4d4a] border-2 border-white text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-[#1f4d4a] transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TerapiaFamiliar;
