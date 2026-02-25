import { ChevronDown, LucideX } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import TryLegnet from './components/TryLegnet';
import Carousel from './components/Carousel';
import isos from './assets/isos.png';
import criativo_vertical from './assets/criativo_vertical.mp4';

function App() {
  const formRef = useRef<HTMLElement>(null);
  const [showFloatingVideo, setShowFloatingVideo] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingVideo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <div className="bg-[#f5f5f5] text-black">
        <Header scrollToForm={scrollToForm} />

        <Hero formRef={formRef} />

        <Benefits />

        <TryLegnet scrollToForm={scrollToForm} />

        <Carousel />

        <TryLegnet scrollToForm={scrollToForm} />

        {/* Seção para empresas */}
        <section className="mx-4 md:mx-8 px-4 md:px-8 my-10 md:my-16 py-10 md:py-16 bg-white rounded-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            Para empresas, gestores e profissionais de conformidade legal
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            Empresas que precisam garantir conformidade legal de forma simples, rápida e automatizada agora têm uma solução definitiva.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Atendimento 24 Horas</h3>
              <p className="font-light text-sm md:text-base">
                O Insight acessa a maior base de evidências legais do Brasil para indicar as melhores práticas e garantir conformidade sem esforço.
              </p>
            </div>

            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Automação Inteligente</h3>
              <p className="font-light text-sm md:text-base">
                Elimine processos manuais, gere planos de ação e atenda requisitos legais com apenas dois cliques.
              </p>
            </div>
          </div>
        </section>

        {/* Seção de features */}
        <section className="py-10 md:py-16 px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            O Insight transforma a gestão de requisitos legais<br className="hidden sm:block" />
            em um processo simples e automatizado
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            Tudo isso dentro de um ambiente seguro e confiável para sua empresa.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                  <path d="M12 3v12"></path>
                  <path d="m8 11 4 4 4-4"></path>
                  <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">Automação sem complicações</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base">
                Automação que qualquer equipe pode usar
              </p>
              <p className="font-light text-sm md:text-base">
                O Insight automatiza a conformidade legal da sua empresa, eliminando processos manuais e reduzindo esforço, sem necessidade de expertise técnica.
              </p>
            </div>

            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                  <path d="M12 22v-5"></path>
                  <path d="M9 8V2"></path>
                  <path d="M15 8V2"></path>
                  <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                  <path d="M12 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                  <path d="M20 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                  <path d="M4 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                  <path d="M12 16a4 4 0 0 1 0-8"></path>
                  <path d="M9 17.93a4 4 0 0 1-5 0"></path>
                  <path d="M20 17.93a4 4 0 0 1-5 0"></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">Regularização com dois cliques</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base">
                Acelere seus processos de regularização
              </p>
              <p className="font-light text-sm md:text-base">
                O Insight utiliza 33 anos de evidências legais para criar planos de ação e indicar documentos necessários em segundos, garantindo conformidade sem incertezas.
              </p>
            </div>

            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">Decisões Seguras</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base">
                Garanta segurança jurídica e evite multas
              </p>
              <p className="font-light text-sm md:text-base">
                Com a maior base de evidências legais do Brasil, o Insight sugere as melhores práticas para garantir conformidade de forma automática e segura.
              </p>
            </div>
          </div>
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* Seção ISO */}
        <section className="mx-4 md:mx-8 my-10 md:my-16 p-6 md:p-8 bg-[#c2c0c0] rounded-3xl">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mx-auto max-w-3xl leading-relaxed">
            Atuamos com padrões reconhecidos mundialmente, garantindo qualidade, segurança e eficácia em todos os processos.
          </p>

          <img
            src={isos}
            alt="Certificações ISO e ONU"
            className="w-full max-w-2xl h-auto object-contain mx-auto"
          />
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* FAQ */}
        <section className="py-10 md:py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-4">
              <details className="group">
                <summary className="flex justify-between items-center font-normal cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Como o Insight ajuda no atendimento à legislação?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  O Insight automatiza a identificação de requisitos legais aplicáveis à sua empresa, sugere planos de ação e cria documentos necessários para garantir conformidade, tudo isso com base em uma extensa biblioteca de evidências legais acumuladas ao longo de 33 anos.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-4">
              <details className="group">
                <summary className="flex justify-between items-center font-normal cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">O Insight realmente funciona para qualquer empresa?</span>
                  <span className="transition group-open:rotate-180 shrink-0 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  Sim, o Insight foi desenvolvido para atender empresas de todos os portes e segmentos. Sua base de conhecimento abrangente permite adaptação às necessidades específicas de cada organização, independentemente do setor de atuação. O sistema é flexível e personaliza suas recomendações de acordo com o perfil da empresa, garantindo relevância e eficácia para qualquer negócio que precise gerenciar conformidade legal.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
              <details className="group">
                <summary className="flex justify-between items-center font-normal cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Quais tipos de requisitos legais o Insight atende?</span>
                  <span className="transition group-open:rotate-180 shrink-0 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  O Insight atende a uma ampla gama de requisitos legais, incluindo normas trabalhistas, ambientais, de saúde e segurança ocupacional, regulamentações setoriais específicas, exigências fiscais e tributárias, entre outros. A plataforma é constantemente atualizada para incorporar novas legislações e mudanças regulatórias, garantindo que sua empresa esteja sempre em conformidade com as mais recentes exigências legais aplicáveis ao seu negócio.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Vídeo flutuante */}
        {showFloatingVideo && (
          <div className="fixed bottom-24 right-4 z-50">
            <div className="relative">
              <video
                className="object-cover rounded-lg shadow-lg w-36 h-56 sm:w-44 sm:h-64 md:w-[180px] md:h-[280px]"
                controls
                controlsList="nodownload nofullscreen"
                disablePictureInPicture
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={criativo_vertical} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <button
                className="absolute -top-2 -right-2 bg-gray-800 cursor-pointer duration-300 transition-all hover:scale-105 text-white rounded-full w-6 h-6 p-1 flex items-center justify-center"
                onClick={() => setShowFloatingVideo(false)}
              >
                <LucideX />
              </button>
            </div>
          </div>
        )}

        <footer className="px-4 pb-8">
          <p className="text-gray-600 text-center font-light mb-4 text-sm md:text-base">
            © 2025 Agile Insight. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;