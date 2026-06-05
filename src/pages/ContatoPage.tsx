import { PageHero } from '../components/PageHero';
import { contactInfo } from '../content/site';

export function ContatoPage() {
  return (
    <div className="space-y-12">
      <PageHero
        eyebrow="Contato"
        title="Entre em contato"
        description="Fale com a Race Quimica para conhecer produtos, condicoes comerciais e suporte tecnico."
      />

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-3xl border border-[#c2ccda] bg-linear-to-br from-white to-[#eaf0f7] p-7">
          <h2 className="font-['Outfit',sans-serif] text-3xl text-[#102b63]">Fale com nosso time</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#566278]">{contactInfo.address}</p>
          <p className="mt-4 text-sm text-[#45566f]">
            Tel: {contactInfo.phone}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9eacc3] text-[#12366f] transition hover:border-[#8bc53f] hover:text-[#8bc53f]"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9eacc3] text-[#12366f] transition hover:border-[#8bc53f] hover:text-[#8bc53f]"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M4.75 3a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.25 8h3V21h-3V8ZM9 8h2.88v1.84h.04c.4-.76 1.38-1.84 2.84-1.84 3.04 0 3.6 2 3.6 4.6V21h-3v-6.94c0-1.66-.03-3.8-2.32-3.8-2.33 0-2.69 1.82-2.69 3.68V21H9V8Z" />
              </svg>
            </a>
          </div>

          <div className="mt-8 space-y-3 rounded-2xl border border-[#c5cfe0] bg-white p-4 text-sm text-[#4f5d73]">
            <p>Horario comercial: 08h as 18h</p>
            <p>Atendimento tecnico: sob demanda</p>
            <p>Resposta media: ate 1 dia util</p>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#8bc53f] px-4 py-2 font-semibold text-[#10223f] transition hover:bg-[#a2d765]"
            >
              Abrir Instagram oficial
            </a>
          </div>
        </article>

        <form className="space-y-4 rounded-3xl border border-[#c2cbda] bg-white p-7 shadow-sm">
          <label className="block text-sm font-medium text-[#4f5c71]">
            Nome completo*
            <input
              type="text"
              className="mt-2 w-full rounded-xl border border-[#c3ccda] bg-white px-4 py-3 text-sm text-[#1f2d44] outline-none transition focus:border-[#8bc53f] focus:ring-2 focus:ring-[#8bc53f]/35"
              placeholder="Seu nome"
              autoComplete="name"
            />
          </label>

          <label className="block text-sm font-medium text-[#4f5c71]">
            Email*
            <input
              type="email"
              className="mt-2 w-full rounded-xl border border-[#c3ccda] bg-white px-4 py-3 text-sm text-[#1f2d44] outline-none transition focus:border-[#8bc53f] focus:ring-2 focus:ring-[#8bc53f]/35"
              placeholder="voce@empresa.com"
              autoComplete="email"
            />
          </label>

          <label className="block text-sm font-medium text-[#4f5c71]">
            Telefone*
            <input
              type="tel"
              className="mt-2 w-full rounded-xl border border-[#c3ccda] bg-white px-4 py-3 text-sm text-[#1f2d44] outline-none transition focus:border-[#8bc53f] focus:ring-2 focus:ring-[#8bc53f]/35"
              placeholder="(16) 0000-0000"
              autoComplete="tel"
            />
          </label>

          <label className="block text-sm font-medium text-[#4f5c71]">
            Mensagem*
            <textarea
              className="mt-2 min-h-36 w-full rounded-xl border border-[#c3ccda] bg-white px-4 py-3 text-sm text-[#1f2d44] outline-none transition focus:border-[#8bc53f] focus:ring-2 focus:ring-[#8bc53f]/35"
              placeholder="Digite sua mensagem..."
            />
          </label>

          <button
            type="button"
            className="rounded-full bg-[#8bc53f] px-7 py-3 text-sm font-semibold text-[#10223f] transition hover:bg-[#9ed35f]"
          >
            Enviar mensagem
          </button>
        </form>
      </section>

      <section className="space-y-4 rounded-3xl border border-[#c2cbda] bg-white p-6 shadow-sm">
        <h2 className="font-['Outfit',sans-serif] text-2xl text-[#102b63]">Localizacao da Race Quimica</h2>
        <p className="text-sm text-[#566278]">{contactInfo.address}</p>
        <div className="overflow-hidden rounded-2xl border border-[#c3ccda]">
          <iframe
            title="Mapa da Race Quimica"
            src={contactInfo.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-90 w-full"
          />
        </div>
      </section>
    </div>
  );
}
