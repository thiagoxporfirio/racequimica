import { useState } from 'react';
import { Link } from 'react-router-dom';
import antiespumanteImg from '../assets/Antiespumante.jpeg';
import antibioticosImg from '../assets/antibioticos.jpeg';
import cloritoImg from '../assets/cloritoDeSodio.jpeg';
import monenImg from '../assets/MONEN-PRO.jpg';
import rcFlokImg from '../assets/rcFlok.jpg';

type Segment = { id: string; label: string; color: string; icon: React.ReactNode };
type Product = { title: string; image: string; segments: string[]; description: string };

function WaterDropIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <path
        d="M24 6C24 6 10 20 10 30a14 14 0 0028 0C38 20 24 6 24 6z"
        stroke="white" strokeWidth="2.5" fill="rgba(255,255,255,0.15)"
      />
      <path d="M17 31c1 3 4 5 7 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <path
        d="M18 6v16L10 36a4 4 0 003.5 6h21a4 4 0 003.5-6L30 22V6"
        stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"
      />
      <path d="M16 6h16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="33" r="2" fill="white" opacity="0.8" />
      <circle cx="26" cy="37" r="1.5" fill="white" opacity="0.6" />
    </svg>
  );
}

function FunnelIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <path
        d="M8 10h32l-12 16v12l-8-4V26L8 10z"
        stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <path
        d="M28 6L14 26h14l-8 16 20-24H26L28 6z"
        stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"
      />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2.5" fill="rgba(255,255,255,0.15)" />
      <path
        d="M24 8v4M24 36v4M8 24h4M36 24h4M12.7 12.7l2.8 2.8M32.5 32.5l2.8 2.8M35.3 12.7l-2.8 2.8M15.5 32.5l-2.8 2.8"
        stroke="white" strokeWidth="2.5" strokeLinecap="round"
      />
    </svg>
  );
}

const segments: Segment[] = [
  { id: 'microbiologico', label: 'Controle Microbiológico', color: '#0f3316', icon: <WaterDropIcon /> },
  { id: 'fermentacao',    label: 'Fermentação',             color: '#1a5c24', icon: <FlaskIcon /> },
  { id: 'floculacao',     label: 'Floculação',              color: '#1a4db8', icon: <FunnelIcon /> },
  { id: 'performance',    label: 'Alta Performance',         color: '#1f7a2e', icon: <BoltIcon /> },
  { id: 'eficiencia',     label: 'Eficiência Industrial',   color: '#163d1e', icon: <GearIcon /> },
];

const products: Product[] = [
  {
    title: 'Clorito de Sódio',
    image: cloritoImg,
    segments: ['microbiologico', 'performance'],
    description: 'Controle eficiente de microrganismos nos processos industriais.',
  },
  {
    title: 'Antibióticos Sólidos e Líquidos',
    image: antibioticosImg,
    segments: ['fermentacao'],
    description: 'Especialidade para fermentação de alta performance.',
  },
  {
    title: 'Linha MONEN-PRO',
    image: monenImg,
    segments: ['fermentacao', 'performance'],
    description: 'Linha completa para máxima eficiência nos processos.',
  },
  {
    title: 'RC FLOK',
    image: rcFlokImg,
    segments: ['floculacao', 'eficiencia'],
    description: 'Floculação otimizada para tratamento de efluentes.',
  },
  {
    title: 'Antiespumante e Dispersante',
    image: antiespumanteImg,
    segments: ['microbiologico', 'eficiencia'],
    description: 'Controle de espuma e dispersão para processos industriais.',
  },
];

export function SolucoesQuimicas() {
  const [activeSegment, setActiveSegment] = useState(segments[0].id);

  const activeColor = segments.find((s) => s.id === activeSegment)?.color ?? '#0f3316';
  const filtered = products.filter((p) => p.segments.includes(activeSegment));

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">Aplicações</p>
        <h2 className="mt-1 font-['Outfit',sans-serif] text-3xl font-semibold text-[#0f3316]">
          Soluções Químicas
        </h2>
      </div>

      {/* Segment tabs */}
      <div className="overflow-x-auto">
        <div className="flex min-w-max rounded-2xl overflow-hidden shadow-md">
          {segments.map((seg, i) => {
            const isActive = seg.id === activeSegment;
            return (
              <button
                key={seg.id}
                onClick={() => setActiveSegment(seg.id)}
                className={`relative flex flex-1 flex-col items-center gap-2 px-6 py-5 text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                  i === 0 ? '' : 'border-l border-white/10'
                }`}
                style={{
                  background: isActive
                    ? seg.color
                    : `color-mix(in srgb, ${seg.color} 80%, black 20%)`,
                  opacity: isActive ? 1 : 0.82,
                }}
                aria-pressed={isActive}
              >
                {seg.icon}
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white leading-tight">
                  {seg.label}
                </span>
                {isActive && (
                  <span
                    className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 h-0 w-0"
                    style={{
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      borderTop: `10px solid ${seg.color}`,
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product cards */}
      <div className="pt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product, index) => (
          <article
            key={product.title}
            className={`rq-fade-up rq-d${(index + 1) * 100} group relative overflow-hidden rounded-2xl border border-[#c3ccda]/70 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#0f3316]/10`}
            style={{ '--hover-color': activeColor } as React.CSSProperties}
          >
            <div className="relative h-52 overflow-hidden bg-[#f0f4f8]">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-[#071c0b]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>

            <div className="p-5">
              <h3 className="font-['Outfit',sans-serif] text-lg font-semibold text-[#0f3316] transition-colors group-hover:text-[#1a4db8] leading-snug">
                {product.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#5a6478]">{product.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <span
                  className="block h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ background: `linear-gradient(90deg, ${activeColor}, #8bc53f)` }}
                />
                <Link
                  to="/contato"
                  className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a4db8] transition-colors duration-200 hover:text-[#0f3316]"
                  aria-label={`Ver produto ${product.title}`}
                >
                  Ver produto
                  <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center pt-2">
        <a
          href="#linha-de-produtos"
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#1a4db8]/30 px-8 py-3.5 text-sm font-semibold text-[#1a4db8] transition-all duration-200 hover:border-[#8bc53f] hover:bg-[#8bc53f]/8 hover:text-[#0f3316] active:scale-95"
        >
          Ver todos os produtos
        </a>
      </div>
    </section>
  );
}
