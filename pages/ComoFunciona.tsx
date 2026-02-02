
import React from 'react';
import { Link } from 'react-router-dom';

const ComoFunciona: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <main className="max-w-[1140px] mx-auto px-6 lg:px-12 py-12 md:py-20">
        <section className="max-w-[800px] mb-8 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1f4d4a] leading-[1.1] mb-6 font-fraunces">
            Começar é mais simples do que parece
          </h1>
          <p className="text-lg md:text-xl text-[#5C6664] leading-relaxed mb-8 max-w-[60ch]">
            Um processo estruturado para entender o que está pesando hoje, definir um caminho possível e aplicar estratégias no cotidiano — com acolhimento, clareza e continuidade.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link to="/contato" className="bg-[#c46a3a] text-white px-8 py-4 rounded font-bold hover:shadow-lg transition-all">
              Agendar consulta
            </Link>
            <a href="https://wa.me/5551987654321" className="flex items-center gap-2 border-2 border-[#1f4d4a] text-[#1f4d4a] px-8 py-4 rounded font-bold hover:bg-[#1f4d4a] hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">chat</span>
              Falar no WhatsApp
            </a>
          </div>
          <p className="text-sm text-[#5C6664] font-medium italic">
            Atendimento presencial em Viamão e online.
          </p>
        </section>

        {/* Process Steps Cards */}
        <section className="mb-10 text-left">
          <h2 className="text-2xl font-bold text-[#1f4d4a] mb-8 font-fraunces">Etapas do processo</h2>
          <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">
            {[
              { id: '01', title: 'Primeiro contato', desc: 'Dúvidas práticas e alinhamento inicial.' },
              { id: '02', title: 'Primeira conversa', desc: 'Entendimento do contexto e acolhimento.' },
              { id: '03', title: 'Planejamento', desc: 'Definição de metas e objetivos claros.' },
              { id: '04', title: 'Sessões e prática', desc: 'Estratégias aplicadas ao cotidiano.' },
              { id: '05', title: 'Revisão e Progresso', desc: 'Acompanhamento da evolução e autonomia.' }
            ].map((step, idx, arr) => (
              <React.Fragment key={step.id}>
                <div className="flex-1 bg-white p-6 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[140px]">
                  <span className="absolute right-2 bottom-0 text-7xl font-black text-[#1f4d4a] opacity-[0.10] pointer-events-none">{step.id}</span>
                  <h3 className="font-bold text-[#1f4d4a] mb-2 relative z-10 uppercase text-sm tracking-wide">{step.title}</h3>
                  <p className="text-xs text-[#5C6664] leading-snug relative z-10 max-w-[18ch]">{step.desc}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden lg:flex items-center px-2">
                    <span className="text-[#1f4d4a]/40 font-light text-xl">→</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="mb-16 text-left">
          <h2 className="text-xl font-bold text-[#1f4d4a] mb-8 border-b border-[#1f4d4a]/10 pb-2 font-fraunces">O que acontece em cada etapa</h2>
          <div className="flex flex-col gap-y-10">
            {[
              { title: 'Primeiro Contato', text: 'Neste primeiro momento, esclarecemos dúvidas práticas sobre horários, valores e o funcionamento geral. É o início de um espaço seguro onde você será ouvido sem julgamentos.' },
              { title: 'A Primeira Conversa', text: 'Um encontro inicial para você compartilhar o que te trouxe até aqui. É onde entendemos o seu contexto atual e como a minha forma de trabalho pode te ajudar.' },
              { title: 'Planejamento e Objetivos', text: 'Definitivamente juntos quais aspectos da sua vida precisam de mais atenção e estabelecemos as metas iniciais do processo, garantindo clareza sobre o caminho a seguir.' },
              { title: 'Sessões e Estratégias', text: 'Os encontros semanais são o espaço para aprofundar reflexões e, principalmente, desenvolver ferramentas práticas para aplicar nas situações desafiadoras do seu dia a dia.' },
              { title: 'Acompanhamento e Revisão', text: 'Periodicamente avaliamos o que mudou e o que ainda precisa ser trabalhado. O foco é sempre na sua autonomia e na consolidação das mudanças alcançadas.' }
            ].map((section) => (
              <div key={section.title} className="max-w-3xl">
                <h3 className="text-lg font-bold text-[#1f4d4a] mb-1 font-fraunces">{section.title}</h3>
                <p className="text-[#5C6664] leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-[#c46a3a] mb-4">devices</span>
            <h4 className="font-bold text-[#1f4d4a] mb-3 font-fraunces">Modalidade</h4>
            <p className="text-sm text-[#5C6664] leading-relaxed">
              Atendimento online para todo o Brasil ou presencial no consultório em Viamão/RS. Ambas com o mesmo rigor ético e acolhimento.
            </p>
          </div>
          <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-[#c46a3a] mb-4">timer</span>
            <h4 className="font-bold text-[#1f4d4a] mb-3 font-fraunces">Duração e Frequência</h4>
            <p className="text-sm text-[#5C6664] leading-relaxed">
              As sessões duram 50 minutos e acontecem semanalmente. A regularidade é fundamental para que o processo flua e os resultados apareçam.
            </p>
          </div>
          <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-[#c46a3a] mb-4">lock</span>
            <h4 className="font-bold text-[#1f4d4a] mb-3 font-fraunces">Confidencialidade</h4>
            <p className="text-sm text-[#5C6664] leading-relaxed">
              Tudo o que é conversado em sessão é protegido por sigilo absoluto. Um compromisso ético central para que você se sinta seguro(a) para se expressar.
            </p>
          </div>
        </section>

        {/* Commitments */}
        <section className="mb-16 bg-white border border-gray-100 p-8 md:p-12 text-left">
          <h2 className="text-2xl font-bold text-[#1f4d4a] mb-10 font-fraunces">Compromissos do Atendimento</h2>
          <div className="space-y-6">
            {[
              { label: 'Pontualidade', text: 'Respeitamos o tempo de cada paciente. A tolerância para atrasos é de 10 minutos. Caso ocorra um atraso, a sessão precisará ser encerrada no horário previsto para não comprometer o próximo atendimento.' },
              { label: 'Cancelamento', text: 'Para reagendamentos ou cancelamentos sem cobrança, é necessário o aviso com no mínimo 24 horas de antecedência. Em caso de ausência sem aviso prévio, o valor da sessão será devido.' },
              { label: 'Pagamento', text: 'O investimento nas sessões pode ser realizado de forma individual ou via pacotes mensais, com desconto. O acerto pode ser feito por PIX ou cartão crédito (parcelado), antes da realização da consulta, priorizando a transparência e a organização mútua.' }
            ].map((comp) => (
              <div key={comp.label} className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                <div className="font-bold text-[#1f4d4a] uppercase text-xs tracking-widest pt-1">{comp.label}</div>
                <div className="text-[#5C6664] text-sm leading-relaxed">{comp.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Critical Information */}
        <section className="mb-16 text-left">
          <div className="border-l-4 border-[#1f4d4a]/20 bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#1f4d4a]">info</span>
              <div>
                <h4 className="font-bold text-[#1f4d4a] mb-1 font-fraunces">Informação Importante</h4>
                <p className="text-sm text-[#5C6664]">
                  O atendimento psicoterapêutico não é um serviço de emergência. Em situações de crise imediata ou risco à vida, entre em contato com o <strong>CVV pelo telefone 188</strong> ou procure a unidade de saúde mais próxima.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1f4d4a] p-10 md:p-20 text-white rounded-lg text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6 font-fraunces">Vamos dar o primeiro passo?</h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Se você sente que é o momento de olhar para suas questões com clareza e acolhimento, agende uma conversa inicial. Estou à disposição para te acompanhar.
            </p>
            <Link to="/contato" className="bg-white text-[#1f4d4a] px-10 py-4 rounded font-bold hover:bg-white/90 transition-all inline-block">
              Agendar minha primeira sessão
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComoFunciona;
