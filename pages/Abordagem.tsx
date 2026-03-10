
import React from 'react';
import { Link } from 'react-router-dom';

const Abordagem: React.FC = () => {
  return (
    <div className="bg-[#f6f6f8]">
      <section className="w-full max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-[#c46a3a]/5 group-hover:bg-transparent transition-colors"></div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCInrTIcUc8WOMPkhTTjpTG9X8Od0pxMWhhCBcynw5e5kQ-c_yvU12ayGtV5yMRvfzlxbexs97b3lHrHkI310xjaJSnUKRbQvgmPWrrixGCM2141j-XKyFul9ZzOEVeyN9U5G5xk4w3UlNX0c-LcrzywCOZzmPnuRAK9w6mwa1g96CRbkclsa4e0fYZOzkp78snMt4fWyhBg0u9h9lLq7MOYyYg1lHrt9fXDS5bjyT4HvwkvVepTZVcsDrZ21ucweZVskvwfz4Gz7Xh" alt="Cláudia Cruz" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 font-display">
              Método para dar direção. <span className="text-[#c46a3a]">Acolhimento</span> para dar sustentação.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Conheça as abordagens e ferramentas que utilizo para apoiar sua jornada de autoconhecimento e desenvolvimento profissional através de uma base científica sólida.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link to="/contato" className="bg-[#c46a3a] text-white px-8 py-4 rounded-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                Começar minha jornada
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 border-y border-slate-100">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 font-display">Minha Abordagem Terapêutica</h2>
          <div className="h-1.5 w-20 bg-[#c46a3a] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            A Terapia Cognitivo-Comportamental (TCC) é uma abordagem prática e estruturada que ajuda a compreender a relação entre pensamentos, emoções e comportamentos, para que você consiga fazer mudanças possíveis no dia a dia. Trabalho com um processo focado no presente e no que é possível mudar no cotidiano. A partir da sua história e do que está acontecendo hoje, organizamos objetivos claros e um caminho prático: identificar padrões, fortalecer recursos internos, ajustar limites e construir formas mais saudáveis de se relacionar com consistência e no seu tempo.
          </p>
        </div>
      </section>

      {/* Grid of approaches */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { 
              title: 'TCC na prática', 
              icon: 'psychology', 
              desc: 'Foco em padrões de pensamento e comportamento para soluções práticas no presente.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNiidmK7ZFUwiD90Hqg3tErUQCyc8-7GikmvcTir479paffr45ADGDT7szRxc_yZ4SfG30LV9iszmu8d2hXZDV8gZmbXqPtkmEHizfyA2tGifRtocDoDu28RAr9H-8wJQQbkqg4flPJdVmaKEvamaoyZALIOa_ShdNKTjhYxB_LDCfqOfb_cp-zmLHQs8JnrPsVLUwvzkF-3A_y6e_8FZ4H5-sHbHmgmR6V6fEZAQOkMaNQizJdxPPR4c3Ljt_mF9BhSLdO7oCN2dz'
            },
            { 
              title: 'TRG', 
              icon: 'healing', 
              desc: 'Reprocessamento emocional generativo para libertação de traumas e bloqueios emocionais profundos.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_8S8tCdLTxYMBsosD-cwijP_cTd41GupzNOlPl06em8AZOP1LUBU91FgOGeVfWA8ph8DGvF4hGkBSyeYtRERSfBVicHWu1MC6NOmPNgAq0iwK_tG36llxct-5800j6Mtg_rDqO_8zDIO_g0N0RLMxYKokcmsNJfDJhAhKKYEh7mHRX4U3R36E8ndJ6FtDgDIbbUkKBZfHZSUFjvl7fZAjWZuvj6UlOJmgxecyQ4-8jxLKp-Em4scqYo0Luc4zZ0BE4avi16mBr9r6'
            },
            { 
              title: 'Lente Psicanalítica', 
              icon: 'menu_book', 
              desc: 'Lente complementar para insights profundos sobre as raízes inconscientes das nossas escolhas.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnDE9_aJMK_Q2DMjOHP3_Bm5Mej6_bI1EDS-WGS-rqOGAx7H6_mUJJWu1I9KEI4ousz4xULhYHX0msYqjkhprxGfG10kIEjhA3kZs39z_0cxEKta6EsNDlVXw_HaM_5aMt2FYruc-gn--iB-biVABdIU-XcFk5g0stADReUFFYtpE4a4vwhrCzTFqJMr6eH-fT5m0bXTBySL0xhF1cJJWpivcykI-BOcXMpB5gjEYZSjL-1RXy5_titeqwXVyjt0YlFz_9JIYELqJo'
            },
            { 
              title: 'Recursos Sistêmicos', 
              icon: 'hub', 
              desc: 'Compreensão das dinâmicas familiares e relacionais que moldam nossa forma de estar no mundo.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNMbXCMUYHc4ZDiqgADmIbA7FP0dGuBYxkDusu5evFreUBsgq8Y53yU4d3oWwUcLbLg_W4LIiTqvtw-QuN3O4axFxvoTpuKBrxEYrIZIcBNwcHSmTBfu-91WJx6Qo7OxlXTgYoEarM0dMoz9BwVpMlZuk770woLOnE-oN7gspWIxYfXDneRExJNVCL-CRmYk3jpPHoZOnnXzS2AHgh-BoxEvMoO1Gk1BbE9IEMD3Xjmo2rrnGpeS5tagYJb3-yPXGiyHG0_Kt5wQCD'
            },
            { 
              title: 'Coach de Carreira', 
              icon: 'trending_up', 
              desc: 'Orientação profissional estratégica e definição de metas para uma vida profissional realizada.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1rCCs1eEOfdnKm8NqnuDhlSrpHUzGrIAuybtDuX9MkdSuEGXbnKbSBiJKbN_pEu36xLtpZNlqrG5t58pQoxY_4aV8hrwNL3hQSMjy9WLBHVdv-eHZKs-fvdCAzX6ZC6GvarTcj-rwqsHvwTt57FvGlAQ1I1Cu3xcqtX98ItzdHzy8l6j8vEOqIw4ZnBV-ouMbpqzg3ldcwh03kIBfyxsoRM8NrvyE6bO_3Uua98labfMpsCrdSV9wzS9jaqJcU2xw3DwFZ2PVbbvk'
            },
            {
              title: 'Pronto para começar?',
              isCta: true
            }
          ].map((item, idx) => (
            item.isCta ? (
              <div key={idx} className="flex flex-col items-center justify-center text-center gap-6 p-8 bg-[#c46a3a] rounded-2xl shadow-lg shadow-[#c46a3a]/30 text-white">
                <span className="material-symbols-outlined text-5xl">calendar_month</span>
                <h3 className="text-2xl font-bold font-display">Pronto para começar?</h3>
                <p className="text-white/80 font-light">Agende uma primeira conversa e descubra qual abordagem melhor se adapta ao seu momento.</p>
                <Link to="/contato" className="w-full bg-white text-[#c46a3a] font-bold py-4 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                  Agendar agora
                </Link>
              </div>
            ) : (
              <div key={idx} className="flex flex-col gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-full h-48 bg-slate-100 rounded-xl overflow-hidden shadow-inner">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-90" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[#c46a3a]">{item.icon}</span>
                    <h3 className="text-xl font-bold text-slate-900 font-display">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-normal">{item.desc}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Ethics/Privacy */}
      <section className="w-full bg-[#f8f9fa] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-xl border border-slate-100">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <div className="size-20 bg-[#c46a3a]/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6">
                <span className="material-symbols-outlined text-[#c46a3a] text-4xl">verified_user</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Ética, Sigilo e Limites</h2>
              <p className="text-slate-500">O pilar fundamental da prática terapêutica segura.</p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              {[
                { icon: 'lock', title: 'Sigilo Profissional', text: 'Tudo o que é compartilhado em sessão é estritamente confidencial, garantindo um espaço de total liberdade e segurança.' },
                { icon: 'gavel', title: 'Ética Profissional', text: 'Prática conduzida com responsabilidade, respeito e integridade, priorizando a dignidade humana e o cuidado com cada pessoa atendida.' },
                { icon: 'history_edu', title: 'Base Científica', text: 'Ferramentas e métodos validados por pesquisas e em constante atualização acadêmica.' },
                { icon: 'handshake', title: 'Limites Terapêuticos', text: 'Clareza sobre o papel do terapeuta e do paciente, estabelecendo um contrato de confiança mútua.' }
              ].map((f) => (
                <div key={f.title} className="flex flex-col gap-3">
                  <h4 className="font-bold text-lg flex items-center gap-2 text-slate-900 font-display">
                    <span className="material-symbols-outlined text-[#c46a3a]">{f.icon}</span>
                    {f.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abordagem;
