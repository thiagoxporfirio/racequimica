import estoqueImg from '../assets/estoqueFabrica.jpeg';
import { PageHero } from '../components/PageHero';
import { contactInfo } from '../content/site';

const pillars = [
  {
    title: 'Compromisso técnico',
    text: 'Química de alta performance para melhorar estabilidade e produtividade dos processos.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.5l.106.402c.368 1.38-.128 2.844-1.228 3.72L17 20.25m-10.5 0L5.322 18.672c-1.1-.876-1.596-2.34-1.228-3.72L4.2 14.5" />
      </svg>
    ),
  },
  {
    title: 'Relação de longo prazo',
    text: 'Atendimento próximo com foco em resultado, qualidade e confiança no fornecimento.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Experiência de mercado',
    text: 'Time com mais de 25 anos de experiência em operações e processos industriais.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

export function SobreNosPage() {
  return (
    <div className="space-y-14">
      <PageHero
        eyebrow="Sobre Nós"
        title="Race Química: alta performance com experiência de mercado"
        description="Empresa de Sertãozinho-SP com foco técnico em produtos e suporte para processos industriais de fermentação e tratamento."
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Main card */}
        <article
          className="rq-scale-in overflow-hidden rounded-3xl border border-[#c2cad8]/70 bg-white shadow-sm"
        >
          <div className="p-7 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">Quem somos</p>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-semibold text-[#0f2a62]">
              Nossa história
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#566277]">
              {contactInfo.title} é uma empresa focada em {contactInfo.slogan.toLowerCase()}, com
              atendimento técnico e comercial construído ao longo de décadas de experiência no setor industrial.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#566277]">
              Localizados em Sertãozinho — o polo sucroenergético mais importante do Brasil — atendemos
              usinas, indústrias de fermentação e plantas de tratamento com produtos de alto padrão técnico.
            </p>
            <div className="mt-4 inline-flex items-start gap-2 rounded-xl border border-[#c5cedb]/60 bg-[#f0f4f9] px-4 py-3 text-xs text-[#4d5e78]">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#0e2b66]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {contactInfo.address}
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src={estoqueImg}
              alt="Centro de estoque Race Química"
              className="h-64 w-full object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>
        </article>

        {/* Pillars */}
        <div className="flex flex-col gap-4">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className={`rq-fade-up rq-d${(i + 1) * 150} group relative overflow-hidden rounded-2xl border border-[#c5cedd]/70 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#8bc53f]/30 hover:shadow-md`}
            >
              <span
                className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'rgba(139,197,63,0.12)' }}
                aria-hidden="true"
              />
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#071846] text-[#8bc53f] shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="font-['Outfit',sans-serif] text-lg font-semibold text-[#112d66]">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#586378]">{pillar.text}</p>
              <span
                className="mt-4 block h-[2px] w-10 rounded-full transition-all duration-300 group-hover:w-14"
                style={{ background: 'linear-gradient(90deg, #8bc53f, #bedd8c)' }}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
