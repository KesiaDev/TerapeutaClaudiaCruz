
import React from 'react';
import { Link } from 'react-router-dom';

const Sobre: React.FC = () => {
  return (
    <div className="bg-[#f7f4ee]">
      {/* Hero with overlapping text */}
      <section className="relative w-full h-[75vh] min-h-[600px] overflow-hidden flex items-center bg-right bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3cOcpGILIX2u0c2xqybkVMWXFBGXXcXu77FE0mzjiudFUuLFswY9msjpPY2QKk7PRujpDrulJOMzzfCMlrmSpWtdIhKqHmMOXYRdzExwTV70-JgXrJlTc-T4yn3X-o38NGIBh5EnWrB-tf56cMxmMmHRaxWz_n3oewfY62SgK2snLSyzZiq7_LitI6AOQ1TDfepusqxES10kws1a94Bsc3vMc2ZHT-IHYUdl8W_2SQDHPYD47EGIZq5mA2EedXk6TxzPnKxZWgJmu')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent"></div>
        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
          <div className="w-full md:max-w-[620px] bg-white/40 backdrop-blur-xl p-8 md:p-14 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col items-center md:items-start text-center md:text-left transition-all">
            <span className="inline-block text-[#c46a3a] text-sm font-bold uppercase tracking-widest mb-4">Sobre Mim</span>
            <h1 className="text-[#2d5a57] text-4xl lg:text-5xl font-bold leading-tight mb-6 font-fraunces">
              Escuta experiente e humanidade no centro do seu processo.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-[540px]">
              Olá, sou Cláudia Cruz. Minha trajetória é pautada pelo acolhimento técnico e sensível, onde cada paciente encontra o suporte necessário para navegar suas emoções e construir uma vida mais equilibrada.
            </p>
            <button className="flex items-center justify-center rounded h-12 px-10 bg-[#c46a3a] text-white font-bold hover:brightness-110 transition-all shadow-md">
              Minha Trajetória
            </button>
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
            {/* Map Placeholder */}
            <div className="flex-1 h-[450px] rounded border-4 border-white shadow-lg overflow-hidden grayscale contrast-125 opacity-70">
              <div className="w-full h-full bg-[#d8dcd1] flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#2d5a57 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
                <div className="text-center z-10 p-10 bg-white/80 backdrop-blur-sm rounded">
                  <span className="material-symbols-outlined !text-5xl text-[#2d5a57] mb-4">map</span>
                  <p className="text-sm font-semibold text-[#2d5a57] uppercase tracking-widest">Mapa de Atendimento</p>
                  <p className="text-xs text-gray-600 mt-2">Presença e Conectividade</p>
                </div>
              </div>
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
            <Link to="/contato" className="flex items-center justify-center rounded h-14 px-10 bg-[#c46a3a] text-white font-bold hover:brightness-110 transition-all shadow-lg">
              Agendar via WhatsApp
            </Link>
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
