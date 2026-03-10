
import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="bg-[#FDFBF6] text-[#2D2A26] transition-colors duration-200">
      <main className="max-w-[1200px] mx-auto px-6 py-8">
        <nav className="flex items-center gap-2 mb-8">
          <Link className="text-[#2E8B57] text-sm font-medium hover:underline" to="/">Home</Link>
          <span className="material-symbols-outlined text-sm text-[#A7A196]">chevron_right</span>
          <span className="text-[#8B8479] text-sm font-medium">Políticas e Termos Legais</span>
        </nav>

        <div className="flex flex-col gap-4 mb-10 text-left">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#2D2A26] font-display">Políticas e Termos Legais</h1>
          <div className="flex items-center gap-2 text-[#8B8479]">
            <span className="material-symbols-outlined text-sm">event</span>
            <p className="text-sm font-medium">Última atualização: 24 de Outubro de 2023</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 text-left">
          <aside className="lg:w-1/4">
            <div className="sticky top-28 flex flex-col gap-1 p-2 bg-white/50 rounded-xl border border-[#E8E2D9] shadow-sm">
              <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#A7A196]">Navegação</p>
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg bg-[#2E8B57]/10 text-[#2E8B57] border-r-4 border-[#2E8B57]" href="#privacidade">
                <span className="material-symbols-outlined text-[20px]">security</span>
                Privacidade
              </a>
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#5C5852] hover:bg-[#F5F1E9] rounded-lg transition-colors" href="#termos">
                <span className="material-symbols-outlined text-[20px]">description</span>
                Termos de Uso
              </a>
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#5C5852] hover:bg-[#F5F1E9] rounded-lg transition-colors" href="#cookies">
                <span className="material-symbols-outlined text-[20px]">cookie</span>
                Cookies
              </a>
              <hr className="my-2 border-[#E8E2D9]"/>
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#5C5852] hover:bg-[#F5F1E9] rounded-lg transition-colors" href="mailto:contato@claudiacruz.com.br">
                <span className="material-symbols-outlined text-[20px]">help_center</span>
                Suporte Legal
              </a>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-16">
            <section className="scroll-mt-32" id="privacidade">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#2E8B57] rounded-lg text-white">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#2D2A26] font-fraunces">Política de Privacidade (LGPD)</h2>
              </div>
              <div className="prose max-w-none text-slate-600 leading-relaxed">
                <p>
                  A sua privacidade é uma prioridade para Cláudia Cruz. Esta política descreve como as suas informações pessoais são recolhidas, utilizadas e partilhadas quando visita ou interage com o nosso website, em total conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
                </p>
                <h3 className="text-lg font-bold text-[#2D2A26] mt-8 mb-3 font-fraunces">1. Coleta de Dados</h3>
                <p>
                  Coletamos dados que você nos fornece voluntariamente ao preencher formulários de contato, assinar nossa newsletter ou solicitar serviços. Isso pode incluir nome, e-mail, telefone e informações sobre o serviço de interesse.
                </p>
                <h3 className="text-lg font-bold text-[#2D2A26] mt-8 mb-3 font-fraunces">2. Dados Sensíveis</h3>
                <p>
                  Pela natureza dos serviços prestados por Cláudia Cruz, dados sensíveis podem ser processados com o seu consentimento explícito. Estes dados são armazenados sob rigorosos protocolos de segurança e criptografia, acessados apenas por pessoal autorizado.
                </p>
                <div className="bg-[#2E8B57]/5 border-l-4 border-[#2E8B57] p-5 my-8 rounded-r-lg">
                  <h4 className="font-bold text-[#2E8B57] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">info</span>
                    Seus Direitos
                  </h4>
                  <p className="text-sm leading-relaxed text-[#5C5852] mb-0">
                    Você tem o direito de solicitar o acesso, retificação ou exclusão de seus dados a qualquer momento através de nossos canais de atendimento oficiais.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-[#E8E2D9]"/>

            <section className="scroll-mt-32" id="termos">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#2E8B57] rounded-lg text-white">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#2D2A26] font-fraunces">Termos de Uso</h2>
              </div>
              <div className="prose max-w-none text-slate-600 leading-relaxed">
                <p>
                  Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. O conteúdo aqui disponibilizado tem caráter puramente informativo e profissional.
                </p>
                <h3 className="text-lg font-bold text-[#2D2A26] mt-8 mb-3 font-fraunces">Isenção de Responsabilidade Médica/Urgência</h3>
                <div className="flex gap-4 p-4 bg-[#FFF9E6] border border-[#E6D7A8] rounded-lg">
                  <span className="material-symbols-outlined text-[#B48400]">warning</span>
                  <p className="text-sm text-[#7D5E00] italic m-0">
                    Importante: O conteúdo deste site não substitui o diagnóstico, tratamento ou aconselhamento de urgência. Em caso de crise ou emergência, procure imediatamente o hospital mais próximo ou entre em contato com as autoridades locais.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-[#2D2A26] rounded-2xl p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-black/10">
              <div>
                <h3 className="text-xl font-bold text-[#F1EFEA] mb-2 font-fraunces">Dúvidas sobre seus dados?</h3>
                <p className="text-[#A7A196] text-sm">Entre em contato com nosso Encarregado de Dados (DPO).</p>
              </div>
              <a className="bg-[#2E8B57] text-white hover:opacity-90 px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-black/20" href="mailto:dpo@claudiacruz.com.br">
                Falar com Suporte Legal
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
