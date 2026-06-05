import estoqueImg from '../assets/estoqueFabrica.jpeg';
import { PageHero } from '../components/PageHero';
import { contactInfo } from '../content/site';

const pillars = [
  {
    title: 'Compromisso tecnico',
    text: 'Quimica de alta performance para melhorar estabilidade e produtividade dos processos.',
  },
  {
    title: 'Relacao de longo prazo',
    text: 'Atendimento proximo com foco em resultado, qualidade e confianca no fornecimento.',
  },
  {
    title: 'Experiencia de mercado',
    text: 'Time com mais de 25 anos de experiencia em operacoes e processos industriais.',
  },
];

export function SobreNosPage() {
  return (
    <div className="space-y-12">
      <PageHero
        eyebrow="Sobre Nos"
        title="Race Quimica: alta performance com experiencia de mercado"
        description="Empresa de Sertaozinho-SP com foco tecnico em produtos e suporte para processos industriais de fermentacao e tratamento."
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-[#c2cad8] bg-linear-to-br from-white to-[#ebf0f6] p-7">
          <h2 className="font-['Outfit',sans-serif] text-3xl text-[#0f2a62]">Quem somos</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#566277]">
            {contactInfo.title} e uma empresa focada em {contactInfo.slogan.toLowerCase()}, com
            atendimento tecnico e comercial construido ao longo de decadas de experiencia.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#566277]">
            Endereco: {contactInfo.address}
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl">
            <img src={estoqueImg} alt="Centro de estoque Race Quimica" className="h-72 w-full object-cover" />
          </div>
        </article>

        <div className="space-y-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-[#c5cedd] bg-white p-5 shadow-sm">
              <span className="mb-3 block h-1.5 w-12 rounded-full bg-[#8bc53f]" />
              <h3 className="font-['Outfit',sans-serif] text-xl text-[#112d66]">{pillar.title}</h3>
              <p className="mt-2 text-sm text-[#586378]">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
