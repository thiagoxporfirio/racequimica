import antiespumanteImg from '../assets/Antiespumante.jpeg';
import cloritoImg from '../assets/cloritoDeSodio.jpeg';
import { PageHero } from '../components/PageHero';
import { certificateItems } from '../content/site';

export function LicencasPage() {
  return (
    <div className="space-y-12">
      <PageHero
        eyebrow="Licencas e Certificados"
        title="Confianca tecnica com processos documentados"
        description="Bloco institucional para apresentar licencas, certificados e evidencias da qualidade operacional da Race Quimica."
      />

      <section className="grid gap-4 sm:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-[#c2cad7] bg-white">
          <img src={cloritoImg} alt="Material tecnico Clorito de Sodio" className="h-72 w-full object-cover" />
        </article>
        <article className="overflow-hidden rounded-2xl border border-[#c2cad7] bg-white">
          <img
            src={antiespumanteImg}
            alt="Material tecnico Antiespumante e Dispersante"
            className="h-72 w-full object-cover"
          />
        </article>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificateItems.map((item) => (
          <article key={item} className="rounded-2xl border border-[#c2cbda] bg-linear-to-br from-white to-[#e8edf5] p-5 shadow-sm">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#132f68] font-semibold text-[#bbdb8f]">
              OK
            </div>
            <h2 className="font-['Outfit',sans-serif] text-xl text-[#0f2a62]">{item}</h2>
            <p className="mt-2 text-sm text-[#576278]">Placeholder para documento, validade e observacoes tecnicas.</p>
          </article>
        ))}
      </section>
    </div>
  );
}
