import { ChevronRight } from "lucide-react"

const Benefits = () => {
  return (
    <section className="px-4 md:px-8 gap-14 py-10 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Transformando a Gestão de Requisitos Legais com Automação
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="shadow-md bg-white rounded-xl p-5 md:p-6">
          <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
            <span className="text-sm md:text-base">Impacto na Performance</span>
            <ChevronRight className="shrink-0" />
          </div>
          <p className="font-light text-sm md:text-base">
            O Insight elimina processos manuais e automatiza a conformidade legal, reduzindo drasticamente o tempo gasto em auditorias.
          </p>
        </div>

        <div className="shadow-md bg-white rounded-xl p-5 md:p-6">
          <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
            <span className="text-sm md:text-base">Taxa de Conformidade</span>
            <ChevronRight className="shrink-0" />
          </div>
          <p className="font-light text-sm md:text-base">
            Evite riscos e multas! Com base em 33 anos de evidências legais, o Insight mantém sua empresa sempre alinhada com a legislação.
          </p>
        </div>

        <div className="shadow-md bg-white rounded-xl p-5 md:p-6 sm:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
            <span className="text-sm md:text-base">Acesso a Informações</span>
            <ChevronRight className="shrink-0" />
          </div>
          <p className="font-light text-sm md:text-base">
            Acesse informações estratégicas em tempo real para garantir conformidade com rapidez e segurança.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits