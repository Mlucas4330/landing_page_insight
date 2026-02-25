import { useState } from 'react';
import { submitToHubSpot } from '../utils/hubspotService';

const formatPhone = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length <= 2) return cleaned;
  if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
};

const formatCNPJ = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length <= 2) return cleaned;
  if (cleaned.length <= 5) return `${cleaned.slice(0, 2)}.${cleaned.slice(2)}`;
  if (cleaned.length <= 8) return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5)}`;
  return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5, 8)}/${cleaned.slice(8, 12)}-${cleaned.slice(12, 14)}`;
};

const emptyForm = { nome: '', email: '', telefone: '', cnpj: '', motivosite: '' };

const Hero = ({ formRef }: { formRef: React.RefObject<HTMLElement | null> }) => {
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'telefone') {
      setFormData(prev => ({ ...prev, [id]: formatPhone(value) }));
    } else if (id === 'cnpj') {
      setFormData(prev => ({ ...prev, [id]: formatCNPJ(value) }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const success = await submitToHubSpot(formData);
    setLoading(false);
    if (success) setFormData(emptyForm);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-8 py-12 md:py-16">
      <section className="space-y-8 md:space-y-12">
        <div className="text-8xl lg:text-9xl font-bold leading-none">
          Agile<br />
          <span className="relative inline-block">
            Insig
            <span className="relative inline-block">
              <button className="absolute -top-10 sm:-top-12 md:-top-14 left-0 shadow-lg rounded-full backdrop-blur-xs p-3 md:p-4 transition-all duration-300 hover:scale-110">
                <img
                  src="/icone_legnet.png"
                  alt="Legnet"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-[0_0_10px_#c5ff00]"
                />
              </button>
              ht
            </span>
          </span>
        </div>

        <p className="text-base sm:text-lg md:text-xl font-light">
          O especialista digital que trabalha 24h para a sua empresa.
        </p>

        <div className="space-y-3 md:space-y-4">
          {[
            'O Insight analisa o contexto do requisito',
            'Sugere evidências aderentes à legislação',
            'Cria automaticamente planos de ação e documentos',
            'Reduz drasticamente o risco de evidência fraca ou inválida',
            'O sistema orienta antes, durante e depois, não apenas valida no final',
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[#c5ff00] font-normal text-sm md:text-base">{i + 1}.</span>
              <p className="font-light text-sm md:text-base">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={formRef} className="bg-white space-y-6 md:space-y-8 shadow-lg rounded-xl p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-center">Solicite uma Proposta</h2>

        <a
          href="https://wa.me/5521997279076"
          target="_blank"
          rel="noopener noreferrer"
          className="block shadow-md bg-white rounded-full w-full py-3 text-center text-black text-sm md:text-base"
        >
          WhatsApp
        </a>

        <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
          {[
            { id: 'nome', label: 'Nome*', type: 'text', placeholder: 'Nome', required: true },
            { id: 'email', label: 'E-mail*', type: 'email', placeholder: 'email@exemplo.com', required: true },
            { id: 'telefone', label: 'Telefone*', type: 'text', placeholder: '(00) 00000-0000', required: true },
            { id: 'cnpj', label: 'CNPJ*', type: 'text', placeholder: 'CNPJ da Empresa', required: true },
            { id: 'motivosite', label: 'Motivo', type: 'text', placeholder: 'Como podemos ajudar?', required: false },
          ].map(({ id, label, type, placeholder, required }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-xs md:text-sm font-normal mb-1">{label}</label>
              <input
                type={type}
                id={id}
                value={formData[id as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-full p-3 pl-6 shadow-md bg-white transition-all duration-300 hover:scale-105 cursor-pointer rounded-full text-black text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#c5ff00]"
                placeholder={placeholder}
                required={required}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 text-base md:text-lg transition-all duration-300 font-medium cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_10px_#c5ff00] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Hero;