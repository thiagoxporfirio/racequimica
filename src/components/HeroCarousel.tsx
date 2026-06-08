import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import antibioticosImg from '../assets/antibioticos.jpeg';
import cloritoImg from '../assets/cloritoDeSodio.jpeg';
import estoqueImg from '../assets/estoqueFabrica.jpeg';
import raceLogo from '../assets/logo.png';

const INTERVAL_MS = 5500;

type SlideData = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; to: string };
  secondary: { label: string; to: string };
  showLogo?: boolean;
  image: string;
  stats?: { value: string; label: string }[];
};

const SLIDES: SlideData[] = [
  {
    id: 0,
    eyebrow: '25 anos de experiência',
    title: 'Química de Alta\nPerformance Industrial',
    description:
      'Especialistas em soluções para fermentação, tratamento de efluentes e controle microbiológico. Presença em Sertãozinho-SP com mais de 25 anos entregando resultado.',
    cta: { label: 'Conhecer a empresa', to: '/sobre-nos' },
    secondary: { label: 'Falar com especialista', to: '/contato' },
    showLogo: true,
    image: estoqueImg,
    stats: [
      { value: '25+', label: 'Anos de mercado' },
      { value: 'SP', label: 'Sertãozinho' },
    ],
  },
  {
    id: 1,
    eyebrow: 'Linha de polímeros',
    title: 'Soluções para\nFermentação Sucroalcooleira',
    description:
      'RC FLOK e RC CAT — polímeros aniônico e catiônico de alta eficiência para decantação e tratamento de efluentes nos processos fermentativos.',
    cta: { label: 'Ver portfólio', to: '/#linha-de-produtos' },
    secondary: { label: 'Solicitar proposta', to: '/contato' },
    image: cloritoImg,
    stats: [
      { value: 'RC', label: 'Linha técnica' },
      { value: 'Alta', label: 'Performance' },
    ],
  },
  {
    id: 2,
    eyebrow: 'Controle microbiológico',
    title: 'Precisão em Cada\nEtapa do Processo',
    description:
      'Clorito de sódio, antibióticos sólidos e líquidos, e linha MONEN-PRO para controle rigoroso de contaminantes. Performance técnica do campo à indústria.',
    cta: { label: 'Linha de controle', to: '/#linha-de-produtos' },
    secondary: { label: 'Solicitar catálogo', to: '/contato' },
    image: antibioticosImg,
    stats: [
      { value: 'FISPQ', label: 'Documentação' },
      { value: 'Lote', label: 'Rastreável' },
    ],
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive(a => (a + 1) % SLIDES.length), []);
  const prev = useCallback(() => setActive(a => (a - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className="rq-scale-in relative left-1/2 -mt-10 min-h-[calc(100svh-92px)] w-screen -translate-x-1/2 overflow-hidden bg-[#071846]"
      aria-label="Race Química — apresentação da empresa"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span
        className="rq-line-grow rq-d100 absolute left-0 top-0 z-20 block h-[4px] w-full"
        style={{ background: 'linear-gradient(90deg, #8bc53f 0%, #bedd8c 42%, transparent 78%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.055]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === active ? 'opacity-100 z-[2]' : 'opacity-0 z-[1] pointer-events-none'
          }`}
          aria-hidden={i !== active}
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out"
            style={{ transform: i === active ? 'scale(1.04)' : 'scale(1)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#071846]/58" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06143d]/95 via-[#071846]/70 to-[#071846]/25" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#071846] to-transparent" aria-hidden="true" />

          <div className="relative z-20 mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#bedd8c]">
                <span className="inline-block h-px w-6 bg-[#8bc53f]" aria-hidden="true" />
                {slide.eyebrow}
              </p>
              <h2 className="mt-5 font-['Outfit',sans-serif] text-4xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl whitespace-pre-line">
                {slide.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#d8e4f3] sm:text-lg">
                {slide.description}
              </p>

              {slide.stats && (
                <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                  {slide.stats.map(stat => (
                    <div key={stat.label} className="border-l-4 border-[#8bc53f] bg-white/10 px-4 py-3 backdrop-blur-sm">
                      <p className="font-['Outfit',sans-serif] text-2xl font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#bedd8c]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to={slide.cta.to}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#8bc53f] px-6 py-3 text-sm font-semibold text-[#071846] shadow-[0_2px_12px_rgba(139,197,63,0.35)] transition-all duration-200 hover:bg-[#9fd362] hover:shadow-[0_4px_20px_rgba(139,197,63,0.5)] active:scale-95"
                >
                  {slide.cta.label}
                </Link>
                <Link
                  to={slide.secondary.to}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-[#e0ebf7] transition-all duration-200 hover:border-[#8bc53f]/60 hover:bg-white/8 hover:text-white active:scale-95"
                >
                  {slide.secondary.label}
                </Link>
              </div>
            </div>

            {slide.showLogo && (
              <div className="absolute bottom-20 right-8 hidden lg:block xl:right-14">
                <div className="p-8 shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
                  <img src={raceLogo} alt="Race Química" className="h-40 w-40 object-contain xl:h-48 xl:w-48" />
                </div>
                <span className="mt-5 block h-[3px] w-64 bg-[#8bc53f] xl:w-72" aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Ir para slide ${i + 1}`}
            aria-current={i === active ? 'true' : undefined}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? 'h-2 w-8 bg-[#8bc53f]'
                : 'h-2 w-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition-all duration-200 hover:border-[#8bc53f]/60 hover:bg-black/40 sm:left-6"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition-all duration-200 hover:border-[#8bc53f]/60 hover:bg-black/40 sm:right-6"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-0 left-0 z-30 h-[3px] w-full bg-white/10">
        <div
          key={`progress-${active}-${paused}`}
          className={`h-full bg-[#8bc53f] ${!paused ? 'rq-carousel-progress' : ''}`}
        />
      </div>
    </section>
  );
}
