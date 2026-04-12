
import React from 'react';
import { Link } from 'react-router-dom';
import claudiaSobre from '../src/assets/claudia-sobre.png';

const Sobre: React.FC = () => {
  return (
    <div className="bg-[#f7f4ee] overflow-x-hidden">
      {/* Banner alto: mais área vertical para cabeça + mãos; object-position prioriza topo do cabelo e corpo inteiro */}
      <section
        className="relative w-screen max-w-[100vw] -translate-x-1/2 left-1/2 overflow-hidden bg-[#e8ebe7]"
        aria-label="Sobre Mim"
      >
        <div className="relative min-h-[480px] h-[clamp(480px,min(62vh,900px),920px)] w-full sm:min-h-[520px]">
          <img
            src={claudiaSobre}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[24%_22%] sm:object-[23%_20%] md:object-[22%_19%] lg:object-[21%_18%]"
            loading="eager"
            decoding="async"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f7f4ee]/95 via-[#f7f4ee]/55 to-transparent sm:via-[#f7f4ee]/40 md:via-[#f7f4ee]/28 md:to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="mx-auto flex w-full max-w-[1200px] px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12">
              <div className="max-w-lg md:max-w-xl lg:max-w-[26rem] text-left drop-shadow-[0_1px_1px_rgba(247,244,238,0.8)]">
                <span className="inline-block text-[#c46a3a] text-sm font-bold uppercase tracking-widest mb-4">Sobre Mim</span>
                <h1 className="text-[#2d5a57] text-3xl font-bold leading-tight mb-5 font-fraunces sm:text-4xl lg:text-[2.5rem]">
                  Escuta experiente e humanidade no centro do seu processo.
                </h1>
                <p className="text-[#3d4f4d] text-base leading-relaxed md:text-lg mb-8">
                  Olá, sou Cláudia Cruz. Minha trajetória é pautada pelo acolhimento técnico e sensível, onde cada paciente encontra o suporte necessário para navegar suas emoções e construir uma vida mais equilibrada.
                </p>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center rounded-lg h-12 px-8 md:px-10 bg-[#c46a3a] text-white text-sm md:text-base font-bold shadow-md transition-all hover:brightness-110"
                >
                  Minha Trajetória
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#f1f3f0] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h3 className="text-[#2d5a57] text-xs font-bold uppercase tracking-[0.2em] mb-10 text-left opacity-80">Credenciais & Especialidades</h3>
          <div className="flex flex-wrap justify-start gap-4">
            {['TCC', 'TRG', 'Estudos em Psicanálise', 'Teologia', 'Saúde Mental Organizacional', 'Neurodiversidade', 'Altas Habilidades', 'Regulação Emocional e Comportamental', 'Desenvolvimento de Liderança'].map((item) => (
              <div key={item} className="flex items-center justify-center rounded bg-white border border-gray-300/40 px-6 py-2 shadow-sm">
                <p className="text-[#2d5a57] text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-left">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-[#2d5a57] text-3xl md:text-5xl font-bold leading-tight font-fraunces">Valores</h2>
            <p className="text-gray-600 text-lg font-normal leading-relaxed max-w-[720px]">
              Princípios que orientam cada atendimento com acolhimento, método e respeito à sua história.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'favorite', title: 'Acolhimento', desc: 'Espaço de escuta, com respeito e sem julgamentos, para você falar com liberdade e segurança.' },
              { icon: 'description', title: 'Método', desc: 'Abordagem estruturada e baseada em método, com foco em prática no cotidiano.' },
              { icon: 'person_search', title: 'Singularidade', desc: 'Cuidado personalizado, respeitando seu tempo, seu contexto e a sua forma de sentir e se relacionar.' },
              { icon: 'verified_user', title: 'Ética', desc: 'Compromisso com confidencialidade, limites claros e condução responsável do processo.' }
            ].map((v) => (
              <div key={v.title} className="flex flex-col gap-4">
                <div className="size-12 flex items-center justify-center text-[#c46a3a]">
                  <span className="material-symbols-outlined !text-4xl">{v.icon}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#2d5a57] text-xl font-bold font-fraunces">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-[#f1f3f0] py-24 border-y border-[#e5e0d8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1 text-left">
              <h2 className="text-[#2d5a57] text-3xl font-bold mb-2 font-fraunces">Onde atendo</h2>
              <br />
              <p className="text-gray-600 text-sm font-normal leading-relaxed mb-8 max-w-[720px]">
                Modalidades para atender sua rotina: presencial, online e ações para equipes.
              </p>
              <div className="grid grid-cols-1 gap-8">
                {[
                  { icon: 'location_on', title: 'Viamão', desc: 'Consultório particular para atendimento presencial.' },
                  { icon: 'medical_services', title: 'Aba Neuro Clinic', desc: 'Ambiente clínico multidisciplinar de excelência.' },
                  { icon: 'videocam', title: 'Online (Brasil)', desc: 'Sessões remotas seguras e eficazes em todo território nacional.' },
                  { icon: 'business', title: 'Empresas', desc: 'Programa de Saúde Relacional no Trabalho: trilha mensal em grupo + workshops sob demanda + plano de continuidade.' }
                ].map((loc) => (
                  <div key={loc.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#c46a3a]">{loc.icon}</span>
                    <div>
                      <h4 className="font-bold text-[#2d5a57] font-fraunces">{loc.title}</h4>
                      <p className="text-sm text-gray-600">{loc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Google Maps - Aba Neuro Clinic */}
            <div className="flex-1 h-[450px] rounded-xl border border-white shadow-lg overflow-hidden bg-[#d8dcd1]">
              <iframe
                title="Mapa de Atendimento - Aba Neuro Clinic"
                src="https://www.google.com/maps?q=Rua+Cirurgi%C3%A3o+Vaz+Ferreira,+591,+Bairro+Centro,+Viam%C3%A3o+-+RS&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Transform */}
      <section className="py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 text-left">
          <h2 className="text-[#2d5a57] text-4xl lg:text-5xl font-bold mb-8 font-fraunces">
            Vamos transformar repetição em caminho?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-[700px]">
            Agende uma primeira conversa e descubra como um processo estruturado pode te ajudar a retomar clareza, autonomia e relações mais saudáveis.
          </p>
          <div className="flex flex-wrap justify-start gap-6">
            <a href="https://psipro-dashboard-production.up.railway.app/calendar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded h-14 px-10 bg-[#c46a3a] text-white font-bold hover:brightness-110 transition-all shadow-lg">
              Agendar Consulta
            </a>
            <Link to="/como-funciona" className="flex items-center justify-center rounded h-14 px-10 border-2 border-[#c46a3a] text-[#c46a3a] font-bold hover:bg-[#c46a3a] hover:text-white transition-all">
              Ver horários
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
