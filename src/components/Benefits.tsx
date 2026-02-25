import { ChevronRight } from "lucide-react"

const Benefits = () => {
  return (
    <section className="px-4 md:px-8 gap-14 py-10 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Avaliação e Validação Inteligente de Evidências Legais
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="shadow-md bg-white rounded-xl p-5 md:p-6">
          <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
            <span className="text-sm md:text-base">O Insight analisa o contexto do requisito</span>
            <ChevronRight className="shrink-0" />
          </div>
          <p className="font-light text-sm md:text-base">
            O sistema orienta antes, durante e depois, não apenas valida no final, evitando evidência fraca ou inválida.
          </p>
        </div>

        <div className="shadow-md bg-white rounded-xl p-5 md:p-6">
          <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
            <span className="text-sm md:text-base">Biblioteca viva com 33 anos de evidências legais</span>
            <ChevronRight className="shrink-0" />
          </div>
          <p className="font-light text-sm md:text-base">
            Evidências construídas ao longo de 33 anos, atualizadas conforme mudança de leis e interpretações.
          </p>
        </div>

        <div className="shadow-md bg-white rounded-xl p-5 md:p-6 sm:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
            <span className="text-sm md:text-base">A máquina trabalha para o usuário</span>
            <ChevronRight className="shrink-0" />
          </div>
          <p className="font-light text-sm md:text-base">
            Enquanto outros sistemas pedem trabalho, o Insight entrega decisão: alerta, sugere, organiza e valida.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits