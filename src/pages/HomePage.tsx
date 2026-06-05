import { Link } from 'react-router-dom';
import antiespumanteImg from '../assets/Antiespumante.jpeg';
import antibioticosImg from '../assets/antibioticos.jpeg';
import cloritoImg from '../assets/cloritoDeSodio.jpeg';
import estoqueImg from '../assets/estoqueFabrica.jpeg';
import monenImg from '../assets/MONEN-PRO.jpg';
import rcFlokImg from '../assets/rcFlok.jpg';
import rcCatVideo from '../assets/Polímero cationico RC CAT.mp4';
import rcFlokVideo from '../assets/RC FLOK polímero anionico.mp4';
import { PageHero } from '../components/PageHero';
import { SolucoesQuimicas } from '../components/SolucoesQuimicas';
import { contactInfo, fakeStats } from '../content/site';

const videos = [
  {
    src: rcCatVideo,
    title: 'Polímero Catiônico RC CAT',
    description: 'Floculante catiônico de alta eficiência para decantação e tratamento de efluentes.',
    tag: 'Floculação',
  },
  {
    src: rcFlokVideo,
    title: 'RC FLOK — Polímero Aniônico',
    description: 'Polímero aniônico desenvolvido para processos de decantação na fermentação sucroalcooleira.',
    tag: 'Fermentação',
  },
];

const products = [
  { title: 'Clorito de Sódio', image: cloritoImg, tag: 'Controle microbiológico' },
  { title: 'Antibióticos Sólidos e Líquidos', image: antibioticosImg, tag: 'Fermentação' },
  { title: 'Linha MONEN-PRO', image: monenImg, tag: 'Alta performance' },
  { title: 'RC FLOK', image: rcFlokImg, tag: 'Floculação' },
  { title: 'Antiespumante e Dispersante', image: antiespumanteImg, tag: 'Eficiência operacional' },
];

export function HomePage() {
  return (
    <div className="space-y-16">
      <PageHero
        eyebrow="Race Química"
        title="Química de alta performance para fermentação e processos industriais"
        description="Profissionais com mais de 25 anos de experiência, operação em Sertaozinho-SP e linha completa para performance técnica no campo e na indústria."
        showLogo
      />

      {/* Hero grid: brand card + image */}
      <section className="rq-scale-in rq-d200 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <article
          className="relative overflow-hidden rounded-3xl p-8 text-white"
          style={{
            background: 'linear-gradient(135deg, #071846 0%, #0e2d67 60%, #2d3952 100%)',
            boxShadow: '0 6px 32px rgba(7,24,70,0.28), inset 0 1px 0 rgba(255,255,255,0.07)',
          }}
        >
          {/* Decorative blobs */}
          <div
            className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full border border-white/8"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full blur-3xl"
            style={{ background: 'rgba(139,197,63,0.18)' }}
            aria-hidden="true"
          />
          <span
            className="mb-6 inline-block rounded-full border border-[#8bc53f]/40 bg-[#8bc53f]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#bedd8c]"
          >
            Visão geral
          </span>
          <h2 className="relative font-['Outfit',sans-serif] text-3xl font-semibold leading-tight tracking-[-0.01em]">
            {contactInfo.title}
          </h2>
          <p className="relative mt-4 text-sm leading-relaxed text-[#c8d8ee]">
            {contactInfo.slogan}. {contactInfo.about} Especialidade em linhas para fermentação,
            controle microbiológico e ganho de eficiência operacional.
          </p>
          <p className="relative mt-3 flex items-start gap-2 text-xs text-[#8fa8cc]">
            <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8bc53f]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
            </svg>
            {contactInfo.address}
          </p>
          <div className="relative mt-7 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#8bc53f] px-6 py-3 text-sm font-semibold text-[#071846] shadow-[0_2px_12px_rgba(139,197,63,0.35)] transition-all duration-200 hover:bg-[#9fd362] hover:shadow-[0_4px_20px_rgba(139,197,63,0.5)] active:scale-95"
            >
              Solicitar proposta
            </Link>
            <Link
              to="/sobre-nos"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-[#e0ebf7] transition-all duration-200 hover:border-[#8bc53f]/60 hover:bg-white/8 hover:text-white active:scale-95"
            >
              Conhecer a história
            </Link>
          </div>
        </article>

        <aside
          className="overflow-hidden rounded-3xl border border-[#c5cedb]/70 p-1.5 shadow-lg"
          style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}
        >
          <img
            src={estoqueImg}
            alt="Estoque e logística Race Química"
            className="h-full w-full rounded-2xl object-cover transition duration-500 hover:scale-[1.02]"
          />
        </aside>
      </section>

      {/* Stats */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {fakeStats.map((stat, i) => (
          <article
            key={stat.label}
            className={`rq-fade-up rq-d${(i + 1) * 100} group relative overflow-hidden rounded-2xl border border-[#c7cfdd]/70 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#8bc53f]/40 hover:shadow-md hover:shadow-[#8bc53f]/10`}
          >
            <span
              className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: 'rgba(139,197,63,0.15)' }}
              aria-hidden="true"
            />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4c5970]">{stat.label}</p>
            <p className="mt-3 font-['Outfit',sans-serif] text-3xl font-semibold text-[#0f2b64]">{stat.value}</p>
            <span
              className="rq-line-grow mt-4 block h-[3px] w-14 rounded-full"
              style={{ background: 'linear-gradient(90deg, #8bc53f, #bedd8c)' }}
            />
          </article>
        ))}
      </section>

      {/* Videos */}
      <section className="space-y-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">Em ação</p>
          <h2 className="mt-1 font-['Outfit',sans-serif] text-3xl font-semibold text-[#0e2b64]">
            Nossos produtos
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {videos.map((video, i) => (
            <article
              key={video.title}
              className={`rq-fade-up rq-d${(i + 1) * 100} group overflow-hidden rounded-2xl border border-[#c3ccda]/70 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#071846]/10`}
            >
              <div className="relative overflow-hidden rounded-t-2xl bg-[#071846]">
                <video
                  src={video.src}
                  controls
                  playsInline
                  className="w-full"
                  aria-label={video.title}
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-[#8bc53f]/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4a7a1e]">
                  {video.tag}
                </span>
                <h3 className="mt-2 font-['Outfit',sans-serif] text-xl font-semibold text-[#102b62]">
                  {video.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5a6478]">{video.description}</p>
                <span
                  className="mt-4 block h-[2px] w-10 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #8bc53f, #bedd8c)' }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Solucoes Quimicas */}
      <SolucoesQuimicas />

      {/* Products */}
      <section id="linha-de-produtos" className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">Portfólio</p>
            <h2 className="mt-1 font-['Outfit',sans-serif] text-3xl font-semibold text-[#0e2b64]">
              Linha de produtos
            </h2>
          </div>
          <Link
            to="/contato"
            className="hidden text-sm font-medium text-[#0e2b64] underline-offset-4 transition hover:text-[#8bc53f] hover:underline sm:block"
          >
            Solicitar catálogo →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.title}
              className={`rq-fade-up rq-d${Math.min((index + 1) * 100, 500)} group relative overflow-hidden rounded-2xl border border-[#c3ccda]/70 bg-white shadow-sm transition-all duration-300 hover:border-[#8bc53f]/30 hover:shadow-lg hover:shadow-[#071846]/10`}
            >
              <div className="relative h-64 overflow-hidden bg-[#f0f4f8]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-[#071846]/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-2xl"
                  aria-hidden="true"
                />
                <span className="absolute right-3 top-3 rounded-full border border-[#0e2b64]/20 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0e2b64] backdrop-blur-sm">
                  {product.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5a6478]">
                  Produto {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1.5 font-['Outfit',sans-serif] text-xl font-semibold text-[#102b62] transition-colors group-hover:text-[#0e2b64]">
                  {product.title}
                </h3>
                <span
                  className="mt-3 block h-[2px] w-10 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ background: 'linear-gradient(90deg, #8bc53f, #bedd8c)' }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
