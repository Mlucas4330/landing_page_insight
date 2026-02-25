import { ChevronDown, LucideX, FileSearch, BookOpen, Cpu } from 'lucide-react';
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
            Gestor, serviço humano valida o passado. O Insight constrói e mantém a conformidade no presente e no futuro.
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            Validar evidência manualmente é uma fotografia do passado. Conformidade legal exige monitoramento vivo, orientação contínua e tomada de decisão assistida.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Serviço humano valida o que já aconteceu.</h3>
              <p className="font-light text-sm md:text-base">
                O Insight evita que a não conformidade aconteça, orientando antes, durante e depois, e reduzindo a dependência de validação humana.
              </p>
            </div>

            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Múltiplos requisitos atendidos em apenas dois cliques</h3>
              <p className="font-light text-sm md:text-base">
                Uma única evidência pode responder simultaneamente a requisitos ambientais, trabalhistas e de saúde e segurança. O Insight identifica essas conexões automaticamente.
              </p>
            </div>
          </div>
        </section>

        {/* Seção de features */}
        <section className="py-10 md:py-16 px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            O que você realmente ganha com o Insight?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            O especialista digital que trabalha 24h para a sua empresa.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <FileSearch size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">Avaliação e Validação Inteligente</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base">
                O sistema orienta antes, durante e depois — não apenas valida no final.
              </p>
              <p className="font-light text-sm md:text-base">
                O Insight analisa o contexto do requisito, sugere evidências aderentes à legislação, cria automaticamente planos de ação e documentos, e reduz drasticamente o risco de evidência fraca ou inválida.
              </p>
            </div>

            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <BookOpen size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">Biblioteca viva com 33 anos de evidências</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base">
                O usuário não precisa saber o que provar. O sistema já sabe.
              </p>
              <p className="font-light text-sm md:text-base">
                Evidências construídas ao longo de 33 anos de prática legal, atualizadas conforme mudanças de leis e interpretações. Elimina tentativa e erro do usuário.
              </p>
            </div>

            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4">
                <Cpu size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">A máquina trabalha para o usuário</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base">
                Enquanto outros sistemas pedem trabalho, o Insight entrega decisão.
              </p>
              <p className="font-light text-sm md:text-base">
                O usuário não alimenta o sistema. O sistema alerta, sugere, organiza, valida e direciona — com linguagem não jurídica, fluxo guiado e ideal para quem não é advogado nem consultor.
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
                  <span className="text-base md:text-lg font-bold">Qual a diferença entre o Insight e um serviço humano de validação?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  Serviços humanos validam o que já aconteceu — olham o passado. O Insight atua preventivamente, orientando antes, durante e depois da conformidade. Ele alerta, sugere evidências, organiza planos de ação e direciona o usuário em tempo real, sem depender de agenda humana ou custo variável.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-4">
              <details className="group">
                <summary className="flex justify-between items-center font-normal cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Preciso ter conhecimento jurídico para usar o Insight?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  Não. O Insight foi desenvolvido com linguagem não jurídica e fluxo orientado por perguntas inteligentes. O usuário não precisa saber o que provar — o sistema já sabe. É ideal para gestores, equipes operacionais e qualquer profissional que precise garantir conformidade sem depender de advogados ou consultores externos.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
              <details className="group">
                <summary className="flex justify-between items-center font-normal cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Como o Insight garante conformidade em múltiplos requisitos ao mesmo tempo?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  O Insight identifica automaticamente as conexões entre requisitos legais. Uma única evidência pode responder simultaneamente a requisitos ambientais, trabalhistas e de saúde e segurança. Enquanto o serviço humano valida um requisito por vez, o Insight cruza dados e entrega conformidade em escala — com padrão técnico e replicável.
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
                <LucideX size={14} />
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