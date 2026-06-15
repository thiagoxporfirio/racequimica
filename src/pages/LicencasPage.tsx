import { PageHero } from '../components/PageHero';
import { certificateItems } from '../content/site';

export function LicencasPage() {
  return (
    <div className="space-y-14">
      <PageHero
        eyebrow="Licenças e Certificados"
        title="Confiança técnica com processos documentados"
        description="Evidências da qualidade operacional e conformidade regulatória da Race Química — licenças, certificados e controles auditáveis."
      />

      {/* Certificate grid */}
      <section className="space-y-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">Documentação</p>
          <h2 className="mt-1 font-['Outfit',sans-serif] text-3xl font-semibold text-[#0f3316]">
            Nossos certificados
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificateItems.map((item, i) => (
            <article
              key={item}
              className={`rq-fade-up rq-d${Math.min((i + 1) * 100, 600)} group relative overflow-hidden rounded-2xl border border-[#c2cbda]/70 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#8bc53f]/35 hover:shadow-md hover:shadow-[#8bc53f]/8`}
            >
              <span
                className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'rgba(26,77,184,0.10)' }}
                aria-hidden="true"
              />
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl font-['Outfit',sans-serif] text-sm font-bold text-[#8bc53f] shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #071c0b 0%, #0f3316 100%)',
                  boxShadow: '0 2px 8px rgba(7,28,11,0.3)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h2 className="font-['Outfit',sans-serif] text-lg font-semibold text-[#0f3316]">{item}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#576278]">
                Documento com validade, rastreabilidade de lote e observações técnicas aplicáveis.
              </p>
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
