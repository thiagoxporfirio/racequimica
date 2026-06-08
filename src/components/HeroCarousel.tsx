import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import raceLogo from '../assets/racelogo.png';

// Imagens do Unsplash representando os setores de aplicação
const IMG_FERMENTACAO = 'https://images.unsplash.com/photo-1586315776885-a176ffccbe01?auto=format&fit=crop&w=900&q=80'; // usina de cana / etanol
const IMG_EFLUENTES   = 'https://images.unsplash.com/photo-1533077162801-86490c593afb?auto=format&fit=crop&w=900&q=80'; // tratamento de efluentes / ETE

const INTERVAL_MS = 5500;

type SlideData = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; to: string };
  secondary: { label: string; to: string };
  showLogo?: boolean;
  image?: string;
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
  },
  {
    id: 1,
    eyebrow: 'Linha de polímeros',
    title: 'Soluções para\nFermentação Sucroalcooleira',
    description:
      'RC FLOK e RC CAT — polímeros aniônico e catiônico de alta eficiência para decantação e tratamento de efluentes nos processos fermentativos.',
    cta: { label: 'Ver portfólio', to: '/#linha-de-produtos' },
    secondary: { label: 'Solicitar proposta', to: '/contato' },
    image: IMG_FERMENTACAO,
    stats: [
      { value: '99%', label: 'Eficiência' },
      { value: '48h', label: 'Entrega express' },
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
    image: IMG_EFLUENTES,
    stats: [
      { value: '+200', label: 'Clientes ativos' },
      { value: 'SP', label: 'Sertãozinho' },
    ],
  },
];

// Molecular network data
const NODES: [number, number, number][] = [
  [100, 78, 6],   [278, 154, 9],  [420, 84, 5],   [580, 174, 10],
  [700, 74, 5],   [850, 134, 8],  [978, 54, 5],   [1100, 114, 5],
  [1158, 274, 6], [350, 294, 6],  [500, 394, 7],  [650, 314, 8],
  [800, 414, 7],  [920, 274, 8],  [1050, 374, 5], [150, 374, 5],
  [448, 490, 4],  [780, 492, 4],  [200, 224, 4],  [740, 214, 5],
  [60, 200, 4],   [1180, 180, 4],
];

const EDGES: [number, number][] = [
  [0,1],[1,2],[1,3],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],
  [1,18],[0,15],[15,10],[10,9],[9,3],[3,11],[11,12],[12,13],
  [13,8],[13,14],[14,8],[10,16],[12,17],[4,19],[5,13],[0,20],
  [7,21],[3,19],
];

function MolecularNetwork() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none select-none"
      viewBox="0 0 1200 560"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="rgba(139,197,63,0.13)" strokeWidth="1">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]} y1={NODES[a][1]}
            x2={NODES[b][0]} y2={NODES[b][1]}
          />
        ))}
      </g>

      {NODES.map(([x, y, r], i) => (
        <g key={i}>
          <circle
            cx={x} cy={y} r={r}
            fill="rgba(139,197,63,0.18)"
            stroke="rgba(139,197,63,0.38)"
            strokeWidth="0.8"
          />
          {r >= 8 && (
            <circle
              cx={x} cy={y} r={r * 2}
              fill="none"
              stroke="rgba(139,197,63,0.1)"
              strokeWidth="0.7"
            >
              <animate
                attributeName="r"
                values={`${r * 1.5};${r * 2.8};${r * 1.5}`}
                dur={`${3.5 + (i % 3) * 0.9}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.5;0.04;0.5"
                dur={`${3.5 + (i % 3) * 0.9}s`}
                repeatCount="indefinite"
              />
            </circle>
          )}
        </g>
      ))}
    </svg>
  );
}

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
      className="rq-scale-in relative overflow-hidden rounded-3xl h-[500px] sm:h-[560px]"
      style={{
        background: 'linear-gradient(135deg, #071846 0%, #0f2c65 55%, #1a3358 85%, #283d56 100%)',
        boxShadow: '0 8px 40px rgba(7,24,70,0.35), 0 2px 8px rgba(7,24,70,0.2)',
      }}
      aria-label="Race Química — apresentação da empresa"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <MolecularNetwork />

      {/* Top accent line */}
      <span
        className="rq-line-grow rq-d100 absolute left-0 top-0 z-10 block h-[3px] w-full rounded-t-3xl"
        style={{ background: 'linear-gradient(90deg, #8bc53f 0%, #bedd8c 50%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Decorative corner blob */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/6"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full blur-3xl"
        style={{ background: 'rgba(139,197,63,0.12)' }}
        aria-hidden="true"
      />

      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center px-8 py-14 sm:px-14 transition-opacity duration-700 ease-in-out ${
            i === active ? 'opacity-100 z-[2]' : 'opacity-0 z-[1] pointer-events-none'
          }`}
          aria-hidden={i !== active}
        >
          <div className="relative z-10 flex w-full items-center gap-10 lg:gap-16">
            {/* Text */}
            <div className="flex-1 min-w-0 text-white">
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#bedd8c]">
                <span className="inline-block h-px w-6 bg-[#8bc53f]" aria-hidden="true" />
                {slide.eyebrow}
              </p>
              <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-semibold leading-[1.15] tracking-[-0.01em] sm:text-5xl whitespace-pre-line">
                {slide.title}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#c8d8ee] sm:text-base">
                {slide.description}
              </p>

              {slide.stats && (
                <div className="mt-6 flex gap-8">
                  {slide.stats.map(stat => (
                    <div key={stat.label}>
                      <p className="font-['Outfit',sans-serif] text-2xl font-semibold text-[#8bc53f]">
                        {stat.value}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa8cc]">
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

            {/* Visual */}
            <div className="hidden lg:block shrink-0">
              {slide.showLogo ? (
                <div
                  className="flex h-52 w-52 items-center justify-center rounded-2xl p-7"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 4px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
                  }}
                >
                  <img
                    src={raceLogo}
                    alt="Race Química"
                    className="h-full w-full object-contain drop-shadow-[0_4px_20px_rgba(139,197,63,0.5)]"
                  />
                </div>
              ) : (
                slide.image && (
                  <div
                    className="w-80 h-56 overflow-hidden rounded-2xl"
                    style={{
                      border: '1px solid rgba(255,255,255,0.12)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                    }}
                  >
                    <img
                      src={slide.image}
                      alt=""
                      className="w-full h-full object-cover"
                      aria-hidden="true"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Dot navigation */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
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
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-200 hover:border-[#8bc53f]/50 hover:bg-black/35 sm:left-5"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-200 hover:border-[#8bc53f]/50 hover:bg-black/35 sm:right-5"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 z-10 h-[2px] w-full bg-white/5">
        <div
          key={`progress-${active}-${paused}`}
          className={`h-full bg-[#8bc53f]/40 ${!paused ? 'rq-carousel-progress' : ''}`}
        />
      </div>
    </section>
  );
}
