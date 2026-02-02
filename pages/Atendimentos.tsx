
import React from 'react';
import { Link } from 'react-router-dom';

const Atendimentos: React.FC = () => {
  return (
    <div className="bg-[#f7f4ee]">
      <main className="max-w-[1200px] mx-auto w-full px-6 py-12 md:py-20">
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h1 className="text-4xl md:text-5xl font-fraunces font-medium text-[#1f4d4a] leading-tight tracking-tight text-left">
              Como eu posso te ajudar na prática:
            </h1>
          </div>
          <div className="lg:col-span-6">
            <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed text-left">
              Com escuta ativa e sem julgamentos, eu te ajudo a entender o que está pesando hoje e a construir um caminho possível. A terapia é um espaço para fortalecer vínculos, se reconectar com a sua identidade, estabelecer limites com mais clareza e reconhecer fragilidades com respeito — sem culpa e sem rótulos. Aos poucos, você desenvolve repertório para lidar melhor com emoções, conversas difíceis e escolhas do cotidiano.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              title: 'Terapia Familiar', 
              desc: 'Reconstruindo laços e melhorando a comunicação através de um processo de diálogo mediado e acolhimento estruturado.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSTsd1X1rq3jMCrGEdsC6jETZEZSuyan7hAsrRQ7Zi0s_BEZ-mtvflLFlLp6HfzjoRyLTvon0FlW6255rEs9LwTMLnqZGSeFqQYH5mWrfnMhLVR49fhwvg8DwVVwF2WqpvJRv9_itDin2VbiiT64nAEvMwopFZJp78x0uuFb3V-qjN2KB9dKvf9MNpLvp9U0VPT4vUz1ssg142TcOs7PfD9QSWBKBJOsCQP9u8YHLNMmNWOPqKa_VkXWMucJMRVU1z4ZrKZMhabTGo' 
            },
            { 
              title: 'Atendimento para Adolescentes', 
              desc: 'Suporte emocional especializado para lidar com os desafios únicos das fases de transição, identidade e desenvolvimento.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHJs1oOBg1wdV4snDC2CWLe6w2Ioo1Iw2Uvvd6gFSLonwDk7YvgtetYZU5EK7HVwKVFnViq8uN2Gls1BcWNekwesMtYqUgi9fYaIieoFyae82FeB_nhokcfIaBiUpOEOk0ILqNoT-ppxRSjxTv4sJAoOwMeimAi0APHvGuw0ZgDZ_q5mcnjagV6qLsiXqNWHTxZoEcstjKDRSfo6U-s2RXw4GQe1xpIXNMFHPA985ndpfp_fq4RsYsblLzpTAJbnxGwVwdhmUF1Qde' 
            },
            { 
              title: 'Soluções Corporativas', 
              desc: 'Programas estratégicos de bem-estar mental e saúde emocional para potencializar o capital humano em empresas.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVnPXPVARiI4Wn8ULWsyL2xIalumgtiBwlv9kSs3wSOYjjdeBtQC4HWp4YmTDAmGAe3mRlO73nN1L4769d0ZJnyJhPYfLTn3lHef7w3gWsKyFu1dM0L86-PBnhRJoFYMLzDDqp4X_N2dwbLOd_5DPwKRJinwOUceQIthkDFLPwYYRaYCKIDdX7ilXSG5ad3CV0BiAjwK8LKAJsclXSCkNvItyhO4CnFN7_IqXk6v1nHi2Kp5Vlqrk1u1wsbkhT6HWu2jP0meAmnqaB' 
            }
          ].map((item) => (
            <div key={item.title} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 transition-all hover:shadow-xl hover:border-[#1f4d4a]/30">
              <div className="aspect-[4/3] w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url("${item.img}")` }}></div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-left font-fraunces">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 text-left">
                  {item.desc}
                </p>
                <Link to="/como-funciona" className="flex items-center gap-2 text-[#1f4d4a] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Saiba mais <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-8 md:p-12 rounded-2xl bg-[#1f4d4a]/5 border border-[#1f4d4a]/10">
            <div className="max-w-2xl text-left">
              <h2 className="text-2xl font-fraunces font-medium text-[#1f4d4a] mb-2">Um processo com direção</h2>
              <p className="text-slate-700 text-lg">
                Entenda como funciona nossa metodologia clínica e os passos fundamentais para iniciar sua jornada de cuidado e autoconhecimento.
              </p>
            </div>
            <Link to="/como-funciona" className="bg-[#1f4d4a] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#1f4d4a]/90 transition-all shadow-md shrink-0">
              Como Funciona
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Atendimentos;
