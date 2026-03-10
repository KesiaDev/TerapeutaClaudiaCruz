
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#F7F4EE] py-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start gap-8">
              <div className="space-y-4">
                <span className="text-[#c46a3a] font-semibold tracking-widest text-xs uppercase">Estudos em Psicanálise</span>
                <h1 className="text-[#1F4D4A] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-fraunces">
                  Quando as emoções apertam e as relações pesam, você não precisa atravessar isso sozinho(a).
                </h1>
                <p className="text-[#141616]/80 text-lg">
                  Acolhimento humanizado para famílias, casais, adolescentes e empresas. Transforme sua jornada com uma abordagem técnica, sensível e focada na sua evolução.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-4">
                  <Link to="/contato" className="bg-[#c46a3a] text-white px-8 py-4 rounded-md font-bold hover:bg-opacity-90 transition-all">
                    Agendar Atendimento
                  </Link>
                  <a href="https://wa.me/5551987654321" className="border border-[#c46a3a] text-[#c46a3a] px-8 py-4 rounded-md font-bold hover:bg-[#c46a3a]/5 transition-all">
                    Falar no Whatsapp
                  </a>
                </div>
                <p className="text-[#141616]/60 text-xs italic">
                  Atendimento presencial em Viamão e online. Agenda organizada por disponibilidade.
                </p>
              </div>
            </div>
            <div className="relative">
              <div 
                className="aspect-[4/5] bg-cover bg-center rounded-lg shadow-xl" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXIL09v0sWWsRX4uwxPkgkSW8nj1Y-ELsKjis6f50kzZo9zNXmcOdSbuvYtr-SNXJVx1PcEEIyV6G6PrpPcBD0nWb-UFIwCPd1dpi5v9m3nMyg75-fnxphKt4s0IoZX80lJWNp8TACBZ5pmnrLx-DVuzzxORoG1exwtfs_Ngd7lKXf7gwUGMeya9w3nIk52NMSrQphXxlKIhy2zBm0Pxr3CNx7SKGuLwF94l7JslLd1Ase4wGU1l4rCjQTvyeIL-SdQYdda_Q7zjy5")' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#EEF3F1] py-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Famílias', desc: 'Mediação e harmonia no lar através de diálogos construtivos.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe3T5scxx0CCvvO3h7qisjRHGDs0z4MrtPuOQBoJqJGl6qLZcKg7r4vA5PyPjerZGHMoyWoWEGnBviIizFjMmQtmLO0Q5x720GDJrto6nTUt6QSG1_zrhG8rwCf43pdUw1VdwuUJLI1k1O0zvNy2hKZh8hwnoDBCpaUP0xnfz2BmbWWCuEVkO2ohc8HyghQ0WH4geQF6h6h5MWTFc1vfXZ8qHc5R3mM_Em1zodOAc9nxRJk4eeabHPXZ-qBrwtlEWgeiaG80SQvCmo' },
              { title: 'Casais', desc: 'Fortalecendo conexões, intimidade e o diálogo do casal.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6EAkHEBsW0odhBI3CHZdXBFCO6US0ba7cpbNVhmjX3gFh1LCH5Sq7PLydJUyOTZvhTKnePROsv7LDG0iiL8dG8icE6Lhgoa3M-hGbfDIb79c8Lm6_bjEbX_TrIVZLyteS5ckJOdgjMZODiao0xpmk-GpURT48icG4_aGCRBReilMZeQU6gb66IEEZzlMZdNF7ekohBEJ5eEvUQTf6kuWXmbxrbqFKZV04cCswenz_I_8XLKALuoOLM5v5rzJnNKZFB9AXRnDZByi2' },
              { title: 'Adolescentes', desc: 'Suporte emocional e escuta ativa em fases de transição.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUbxkca4IdfGntkPUlx2ya0oJ4nJ0IYKbKjw8d9ml0lBxmcrVcY0Es4Qj3vhIdwcGHV0Ez-VnizbuUCeIYdat-fnwkgq25yiQfNWXEPBt3AoqMlDhW9IrZkJNhsBPkZ2RCNktIK59Pu7e02-97_kQokmW4S5x21jHGoaKGQFBwPZtABCvQ-nSN2qqSkDeWs7_qt_3h1rG33ll13AmNOtG0EsSdRRJKrAj1FZHxNTwwDoqI-H_6aECJENIKSVrccQ_aLfZzNfKUQ9wM' },
              { title: 'Empresas', desc: 'Palestras e saúde mental no ambiente corporativo.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmGsHPoAN7pN8wKa33wftCXmCeVW7IKbfE9b5K0bENgyC-wdPSvbg2pYLVKCf75LXHiv8weLaJd2hJRuif_ImmI5kgH7GwG5TfkXrBWf9QK7JZNQKN0WzJ12oQiIgsuWr6B5YRH3UQAjRJWYSmr6j4g_YVZv-A87dS2SwE3cSFmJqeXIHGIczvJWIXFfbVSJTrx6JLEWz9dEBbpdpyWVd0T3sd7t15yZI9EeJjkfy8qGdB6NbNfsAwqbb0Un18FhhnqKW2CIcWsTmY' }
            ].map((service) => (
              <div key={service.title} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 shadow-sm">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-[#1F4D4A] mb-2 font-fraunces">{service.title}</h3>
                <p className="text-sm text-[#141616]/70 mb-4">{service.desc}</p>
                <Link to="/como-funciona" className="text-xs font-semibold text-[#c46a3a] uppercase tracking-wider flex items-center gap-1 group-hover:opacity-80 transition-opacity">
                  VER COMO FUNCIONA <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations Section */}
      <section className="bg-[#F7F4EE] py-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-left mb-16">
            <p className="text-[#c46a3a] font-bold mb-4 text-lg">Reconhecer o momento de buscar ajuda é o primeiro passo para a mudança. Você se identifica com alguma dessas situações?</p>
            <h2 className="text-4xl text-[#1F4D4A] font-bold mb-6 font-fraunces">Talvez você esteja vivendo algo assim</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Ansiedade Constante', desc: 'A sensação de que algo ruim vai acontecer, dificultando o foco no agora.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcXKEbB72xkMcaPqL6RvW4koT7bfH3ZXKO12Eb-HAjVFpqc1pBkXlx4bI1nzLlDtMMicyYjnXgYwIvDKgVwFjEH_YNGpHNl3Ls5-XVHZ3f-n9wJs87S4B5LWk_r_KSikJawZaLWpVP8lM5tr2ZljuDMiPJW6O8fXaJgELOPty-vz7j1uGCb8mErs5BSaUsnx0woMhMK_nfE7Co-JKHX1UaqkJXVgRS6coGN9tIML_SiDv-AvXMW-sNl7XinxWoGyMx3Pk1KuA_lHv6' },
              { title: 'Conflitos Familiares', desc: 'Dificuldade em ser ouvido ou compreender o outro em ambiente doméstico.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0Ad17ZvwiHcL8LhqJtHyoWmjmQtSKQpE8EM1vw9b7h4GLziTay4yNpTdehHWxCFEt4xrAhqSjVisia9dLfi8uLt1nbYR-eM5EGXYNEBI4BHCua_M-pbarASEaWQ8bviOHbKptP_NEKA5SrfMP9EvjCDU43IkUUR4L_pozh0lFSyWQfMTlBM2mCE2PUb_v2T0GJQG2U2Qh9-86wmNAncWWpihH2HP14N2HSILl1qEalamjQ77anIyv6KU32DCIMnohgYx6DbMhsDlj' },
              { title: 'Esgotamento Profissional e Burnout', desc: 'Fadiga extrema relacionada ao trabalho e Burnout que afeta sua saúde física e mental.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwjl1JEjy4SDKITWFmms8ivi6PxuAJ-OzEnKjXBMLHjMiOD7XgIy-XaEMDy4nCVgalYk85FjugvuRsniFLVbgmhsVGhEopdidnPDjDtKRMKw0USvzzMzBJv2UfUbpIUcSyyXjLDXnlbxGeJwFdY9GIGaCbd0qDZui6GBeVWQfd4Wl277xSYtXUkA4_ASAhm2IZOaPPq0Zy6xmEC_vhv9ICren80_qByVt22yTW1dZl4dcEnZIff3pMbCBy2UJIe1ek9A8kWNUEs89u' },
              { title: 'Perda de Propósito', desc: 'Sentimento de desorientação e falta de prazer em atividades rotineiras.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr_3gDivl1HzAavkr_fihqduacjgX0UXIyFGG1qydkcZ-2_JBEsVG4OAycZzN2OsIV42Ck9_sJjClyYgTCqopWFS0nWjM2QW0dQy9tM-Gq2iSBXr5xcSuCACazRqjxAYrS71uXU3QxNa_Lc2hzo1ShfFvnyr0ROIpeEPvizlHAKGVG74RDLOZGIKdEYxTT_iaDMdVl3pHxmyNhtybDVoawrRcjyBfoJHLxHKNygvh92tp8G-PyKo0EwQ6tqhcoS4_kSZq_tMwxmlOO' }
            ].map((item) => (
              <div key={item.title} className="flex flex-col sm:flex-row gap-6 p-6 bg-[#EEF3F1] rounded-lg border border-[#1F4D4A]/5 hover:border-[#c46a3a]/20 transition-all">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center text-left">
                  <h4 className="text-xl font-bold mb-2 text-[#1F4D4A] font-fraunces">{item.title}</h4>
                  <p className="text-sm text-[#141616]/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Summary */}
      <section className="bg-[#EEF3F1] py-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="/abordagem-sessao.png" 
                alt="Sessão de terapia - Cláudia Cruz" 
                className="w-full aspect-square object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="flex flex-col gap-8 order-1 md:order-2 items-start">
              <div className="space-y-4 text-left">
                <h2 className="text-4xl text-[#1F4D4A] font-bold font-fraunces">Minha Abordagem</h2>
                <p className="text-[#141616]/80 text-lg">
                  Utilizo a <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, uma abordagem estruturada, focada no presente, que visa identificar e modificar padrões de pensamento disfuncionais.
                </p>
              </div>
              <div className="space-y-6 text-left">
                {[
                  { icon: 'verified', title: 'Base Evidenciada', desc: 'Tratamentos com eficácia comprovada pela ciência psicológica.' },
                  { icon: 'trending_up', title: 'Foco em Resultados', desc: 'Metas terapêuticas claras e acompanhamento contínuo do progresso.' },
                  { icon: 'lock', title: 'Ambiente Seguro', desc: 'Sigilo absoluto e acolhimento empático livre de julgamentos.' }
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#c46a3a] mt-1">{feature.icon}</span>
                    <div>
                      <h5 className="font-bold text-[#1F4D4A] font-fraunces">{feature.title}</h5>
                      <p className="text-sm text-[#141616]/70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/abordagem" className="w-fit text-[#c46a3a] font-bold border-b-2 border-[#c46a3a] pb-1 hover:opacity-80 transition-all">
                Conheça os benefícios da TCC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
