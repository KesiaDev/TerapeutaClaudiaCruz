
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<'b2c' | 'b2b'>('b2c');

  return (
    <div className="bg-[#f6f7f7]">
      <main className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col items-start text-left">
        {/* Hero Section */}
        <div className="w-full mb-10">
          <p className="text-[#1f4c4a] font-bold uppercase tracking-widest text-xs mb-3">Contato e Agendamento</p>
          <h1 className="text-[#111818] text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-4 font-display">
            Vamos dar o <br/> primeiro passo?
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Escolha a melhor forma de entrar em contato. Atendimento personalizado para indivíduos e soluções estratégicas para empresas.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://wa.me/5551987654321" className="flex items-center gap-2 min-w-[180px] cursor-pointer justify-center rounded-lg h-12 px-6 bg-[#1f4c4a] text-white text-base font-bold transition-transform hover:scale-105">
            <span className="material-symbols-outlined">chat</span>
            WhatsApp
          </a>
          <button className="flex items-center gap-2 min-w-[180px] cursor-pointer justify-center rounded-lg h-12 px-6 bg-white border-2 border-[#1f4c4a]/10 text-[#1f4c4a] text-base font-bold transition-transform hover:scale-105">
            <span className="material-symbols-outlined">calendar_today</span>
            Agenda Online
          </button>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-2 w-full bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-[#111818] text-2xl font-bold mb-6 font-fraunces">Formulário de Contato</h2>
            <div className="flex mb-8">
              <div className="flex h-12 w-full max-w-md items-center justify-center rounded-xl bg-slate-100 p-1.5">
                <button 
                  onClick={() => setFormType('b2c')}
                  className={`flex h-full grow items-center justify-center rounded-lg px-4 transition-all text-sm font-semibold ${formType === 'b2c' ? 'bg-white shadow-sm text-[#1f4c4a]' : 'text-slate-500'}`}
                >
                  Para Você
                </button>
                <button 
                  onClick={() => setFormType('b2b')}
                  className={`flex h-full grow items-center justify-center rounded-lg px-4 transition-all text-sm font-semibold ${formType === 'b2b' ? 'bg-white shadow-sm text-[#1f4c4a]' : 'text-slate-500'}`}
                >
                  Para sua Empresa
                </button>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">Nome Completo</label>
                  <input className="rounded-lg border-slate-300 bg-transparent focus:ring-[#1f4c4a] focus:border-[#1f4c4a] px-4 h-12" placeholder="Seu nome" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">E-mail Corporativo</label>
                  <input className="rounded-lg border-slate-300 bg-transparent focus:ring-[#1f4c4a] focus:border-[#1f4c4a] px-4 h-12" placeholder="seu@email.com" type="email"/>
                </div>
              </div>

              {formType === 'b2b' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">Nome da Empresa</label>
                    <input className="rounded-lg border-slate-300 bg-transparent focus:ring-[#1f4c4a] focus:border-[#1f4c4a] px-4 h-12" placeholder="Empresa Ltda" type="text"/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">Nº de Colaboradores</label>
                    <select className="rounded-lg border-slate-300 bg-transparent focus:ring-[#1f4c4a] focus:border-[#1f4c4a] px-4 h-12">
                      <option>1-10</option>
                      <option>11-50</option>
                      <option>51-200</option>
                      <option>200+</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Como posso ajudar?</label>
                <textarea className="rounded-lg border-slate-300 bg-transparent focus:ring-[#1f4c4a] focus:border-[#1f4c4a] px-4 py-3" placeholder="Escreva sua mensagem aqui..." rows={4}></textarea>
              </div>
              <button className="flex w-full md:w-auto min-w-[200px] items-center justify-center rounded-lg h-12 px-8 bg-[#1f4c4a] text-white text-base font-bold shadow-lg hover:shadow-[#1f4c4a]/20 transition-all" type="submit">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#1f4c4a]">
                  <span className="material-symbols-outlined">location_on</span>
                  <h3 className="text-lg font-bold font-fraunces">Atendimento Presencial</h3>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900">Unidade Centro</p>
                    <p className="text-sm text-slate-600">Av. Rio Branco, 156 - Sala 1204</p>
                    <p className="text-sm text-slate-600">Rio de Janeiro, RJ</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900">Unidade Barra</p>
                    <p className="text-sm text-slate-600">Av. das Américas, 4200 - Bloco 9</p>
                    <p className="text-sm text-slate-600">Rio de Janeiro, RJ</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#1f4c4a]">
                  <span className="material-symbols-outlined">public</span>
                  <h3 className="text-lg font-bold font-fraunces">Atendimento Online</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  Disponível para todo o Brasil e brasileiros no exterior via plataformas seguras (Zoom, Meet, WhatsApp).
                </p>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden h-48 border border-slate-200 relative grayscale opacity-80">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnv5imfnuCpTgl40Ww9_OuHoMgN-9m7WDCvx0IWaeLU7PBjoqqayRZUa6F_-JEIuWV-UQxt27kCvU11kzXvwUNFLx7oNZl-383lrjvawsn4OTM89i_40jBx2KPlk0_Ukz43faM4LEVAY85pl3BeVSNvURh14AxXCoQhbEdA3PzuLJips8EHu4_F7oIWHle8jrZ3r36IxTGYPZ8rWze1UDAeOfi8cMvhV_0SwO2K6571mHGuAMkO7-vY2tv_hH--sP43PtEFIB2BoVc" className="w-full h-full object-cover" alt="Mapa" />
               <div className="absolute inset-0 bg-[#1f4c4a]/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
