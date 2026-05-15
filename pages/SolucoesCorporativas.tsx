import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SolucoesCorporativas: React.FC = () => {
  const [email, setEmail] = useState('');

  const lideresCards = [
    {
      icon: 'forum',
      title: 'Workshops',
      desc: 'Encontros dinâmicos e experienciais sobre gestão humanizada, empatia e inteligência emocional aplicada.',
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    },
    {
      icon: 'route',
      title: 'Trilhas de Desenvolvimento',
      desc: 'Caminhos estruturados de aprendizado contínuo, com curadoria de conteúdo e mentoria especializada.',
      img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
    },
    {
      icon: 'groups',
      title: 'Rodas de Conversa',
      desc: 'Espaços seguros e mediados para escuta ativa, troca de vulnerabilidades e fortalecimento de laços.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    },
    {
      icon: 'psychology',
      title: 'Atendimentos Individuais',
      desc: 'Sessões individuais para colaboradores, com sigilo e acolhimento, apoiando autorregulação emocional, comunicação e manejo de conflitos no dia a dia.',
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
    },
  ];

  const programaSteps = [
    { num: '01', title: 'Diagnóstico Relacional', desc: 'Mapeamento do clima e identificação de gargalos de comunicação e convivência.' },
    { num: '02', title: 'Cultura de Respeito e Convivência', desc: 'Práticas para fortalecer relações, reduzir ruídos e criar acordos de convivência no dia a dia.' },
    { num: '03', title: 'Comunicação Não-Violenta', desc: 'Ferramentas para conversas difíceis, pedidos claros e feedbacks mais construtivos.' },
    { num: '04', title: 'Gestão de Conflitos', desc: 'Estratégias para lidar com tensão, divergências e alinhamentos sem escalada de desgaste.' },
    { num: '05', title: 'Liderança Compassiva', desc: 'Postura de liderança que sustenta clareza, limites e cuidado com as pessoas sem perder direção.' },
    { num: '06', title: 'Revisão de Semestre', desc: 'Ajustes de rota, reforço de combinados e consolidação do que funcionou.' },
    { num: '07', title: 'Saúde e Rotina no Trabalho', desc: 'Prevenção de sobrecarga, organização de energia e práticas de sustentação no cotidiano.' },
    { num: '08', title: 'Empatia Decisória', desc: 'Decisões mais humanas e mais claras. Impacto nas pessoas, alinhamento e responsabilidade.' },
    { num: '09', title: 'Cultura de Colaboração', desc: 'Cooperação, corresponsabilidade e rotinas simples para fortalecer espírito de equipe.' },
    { num: '10', title: 'Escuta Ativa Profunda', desc: 'Escuta, presença e comunicação que reduz ruído e aumenta entendimento real.' },
    { num: '11', title: 'Sustentabilidade Emocional', desc: 'Estratégias de longo prazo para manter consistência, autocuidado possível e relações mais estáveis.' },
    { num: '12', title: 'Celebração e Legado', desc: 'Revisão do ano, reconhecimento de avanços e plano de continuidade para o próximo ciclo.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) window.location.href = `mailto:contato@claudiacruz.com.br?subject=Contato B2B - Saúde Corporativa&body=Meu e-mail: ${email}`;
  };

  return (
    <div className="bg-[#F7F4EE] min-h-screen text-[#1f4d4a]">
      {/* Hero com imagem de fundo */}
      <section className="relative min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-[#1f4d4a]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f4d4a]/90 via-[#1f4d4a]/70 to-transparent" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <span className="inline-block text-white/90 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Saúde Corporativa & Relacional
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-fraunces text-white leading-tight mb-6 max-w-2xl">
            O Coração da Produtividade Sustentável
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
            Humanize o ambiente corporativo com metodologias focadas no bem-estar e na saúde relacional da sua liderança e equipes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contato"
              className="bg-[#c46a3a] text-white px-8 py-4 rounded-md font-bold hover:bg-[#c46a3a]/90 transition-all"
            >
              Proposta B2B
            </Link>
            <Link
              to="/atendimentos"
              className="bg-white/20 border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/30 transition-all backdrop-blur-sm"
            >
              Programas em Grupo
            </Link>
          </div>
        </div>
      </section>

      {/* Desenvolvimento para Líderes */}
      <section className="py-16 bg-[#F7F4EE]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
            <div className="flex gap-4">
              <div className="w-1 min-h-[80px] bg-[#1f4d4a] rounded-full shrink-0" />
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-[#1f4d4a] font-fraunces mb-2">
                  Desenvolvimento para Líderes
                </h2>
                <p className="text-[#1f4d4a]/80 whitespace-nowrap">
                  Soluções modulares para fortalecer convivência, comunicação e cultura de respeito.
                </p>
              </div>
            </div>
            <Link
              to="/abordagem"
              className="shrink-0 bg-[#EEF3F1] border border-[#1f4d4a]/20 text-[#1f4d4a] px-6 py-3 rounded-md font-bold hover:bg-[#1f4d4a]/10 transition-all"
            >
              Foco em soft skills
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lideresCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#1f4d4a]/10 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[4/3] w-full bg-[#EEF3F1] bg-cover bg-center shrink-0" style={{ backgroundImage: `url("${card.img}")` }} />
                <div className="p-6 flex flex-col flex-1">
                  <span className="material-symbols-outlined text-[#c46a3a] text-3xl mb-3">{card.icon}</span>
                  <h3 className="text-xl font-bold text-[#1f4d4a] mb-2 font-fraunces">{card.title}</h3>
                  <p className="text-[#1f4d4a]/80 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programa de Saúde Relacional - NR-1 */}
      <section className="py-16 bg-[#EEF3F1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[#1f4d4a] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Programa Corporativo - NR-1 (Prevenção e Bem-estar)
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#2c2c2c] font-fraunces mb-2">
            Programa de Saúde Relacional no Trabalho
          </h2>
          <p className="text-[#1f4d4a] font-bold text-lg mb-4 font-fraunces">Trilha Mensal (12 meses)</p>
          <p className="text-[#2c2c2c]/80 max-w-3xl mb-10 leading-relaxed text-base">
            Uma jornada completa de transformação relacional, com acompanhamento mensal e temas estratégicos focados na cultura de respeito.
          </p>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {programaSteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-[#F7F4EE] rounded-xl p-6 shadow-sm border border-[#1f4d4a]/10 hover:shadow-md transition-shadow"
                >
                  <p className="text-[#1f4d4a] font-bold text-2xl mb-3">{step.num}</p>
                  <h3 className="text-[#2c2c2c] font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-[#2c2c2c]/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            {/* Setas de navegação (decorativas / para carrossel futuro) */}
            <button type="button" className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-[#2c2c2c]/80 text-white items-center justify-center hover:bg-[#1f4d4a] transition-colors shadow-md" aria-label="Anterior">
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>
            <button type="button" className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-[#2c2c2c]/80 text-white items-center justify-center hover:bg-[#1f4d4a] transition-colors shadow-md" aria-label="Próximo">
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA com e-mail */}
      <section className="bg-[#1f4d4a] py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-[#c46a3a] text-5xl mb-4">person</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-fraunces">
            Pronto para humanizar sua empresa?
          </h2>
          <p className="text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Entre em contato para uma conversa diagnóstica e entenda como a saúde relacional pode alavancar seus resultados B2B.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail corporativo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-0 px-4 py-3.5 rounded-md border-0 text-[#1f4d4a] placeholder:text-gray-500 focus:ring-2 focus:ring-[#c46a3a]"
            />
            <button
              type="submit"
              className="bg-[#c46a3a] text-white px-8 py-3.5 rounded-md font-bold hover:bg-[#c46a3a]/90 transition-all shrink-0"
            >
              Enviar Contato
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SolucoesCorporativas;
