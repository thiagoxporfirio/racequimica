import { useEffect, useRef, useState } from 'react';
import estoqueImg from '../assets/estoqueFabrica.jpeg';
import antiespumanteImg from '../assets/Antiespumante.jpeg';
import cloritoImg from '../assets/cloritoDeSodio.jpeg';
import monenImg from '../assets/MONEN-PRO.jpg';
import rcFlokImg from '../assets/rcFlok.jpg';
import antibioticosImg from '../assets/antibioticos.jpeg';

const sectors = [
  {
    key: 'etanol',
    label: 'Etanol',
    image: rcFlokImg,
    description: 'Floculação e fermentação sucroalcooleira',
    tint: 'rgba(7,24,70,0.48)',
  },
  {
    key: 'acucar',
    label: 'Açúcar',
    image: monenImg,
    description: 'Controle de inibidores e rendimento',
    tint: 'rgba(7,24,70,0.42)',
  },
  {
    key: 'organicos',
    label: 'Orgânicos',
    image: antibioticosImg,
    description: 'Biocidas e antibióticos industriais',
    tint: 'rgba(7,24,70,0.50)',
  },
  {
    key: 'aguas',
    label: 'Águas',
    image: cloritoImg,
    description: 'Tratamento e controle microbiológico',
    tint: 'rgba(4,18,58,0.52)',
  },
  {
    key: 'industrial',
    label: 'Industrial',
    image: estoqueImg,
    description: 'Soluções para processos industriais',
    tint: 'rgba(7,24,70,0.44)',
  },
  {
    key: 'agricolas',
    label: 'Agrícolas',
    image: antiespumanteImg,
    description: 'Antiespumantes e dispersantes de campo',
    tint: 'rgba(7,40,20,0.46)',
  },
];

export function SectorStrip() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Setores de atuação"
      className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #071846 0%, #0d2558 50%, #0a1f3f 100%)' }}
    >
      {/* Top fade edge */}
      <div
        className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(7,24,70,0.7), transparent)' }}
        aria-hidden="true"
      />

      {/* Background aerial image with blue wash */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src={estoqueImg}
          alt=""
          className="h-full w-full object-cover opacity-10 scale-110 blur-sm"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(7,24,70,0.92) 0%, rgba(10,31,65,0.85) 100%)' }}
        />
      </div>

      {/* Header text */}
      <div className="relative z-10 px-4 pt-12 pb-6 sm:px-8 lg:px-10">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.28em]"
          style={{ color: '#8bc53f' }}
        >
          Onde atuamos
        </p>
        <h2
          className="mt-2 font-['Outfit',sans-serif] text-3xl font-semibold leading-tight sm:text-4xl"
          style={{ color: '#e8f0fb' }}
        >
          Setores de atuação
        </h2>
      </div>

      {/* Strip grid */}
      <div
        className="relative z-10 grid"
        style={{ gridTemplateColumns: 'repeat(6, 1fr)', minHeight: '340px' }}
        role="list"
      >
        {sectors.map((s, i) => (
          <div
            key={s.key}
            role="listitem"
            className="group relative overflow-hidden cursor-default"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
            }}
          >
            {/* Photo */}
            <img
              src={s.image}
              alt={s.label}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Base tint */}
            <div
              className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
              style={{ background: s.tint }}
            />

            {/* Subtle side divider */}
            {i < sectors.length - 1 && (
              <div
                className="absolute right-0 inset-y-0 w-px z-10 pointer-events-none"
                style={{ background: 'rgba(255,255,255,0.12)' }}
                aria-hidden="true"
              />
            )}

            {/* Content — slides up on hover */}
            <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col items-center text-center">
              {/* Accent bar */}
              <span
                className="block h-[3px] w-8 rounded-full mb-3 transition-all duration-300 group-hover:w-14"
                style={{ background: 'linear-gradient(90deg, #8bc53f, #bedd8c)' }}
                aria-hidden="true"
              />

              <span
                className="font-['Outfit',sans-serif] text-sm font-bold uppercase tracking-[0.14em] text-white"
              >
                {s.label}
              </span>

              {/* Description — visible only on hover */}
              <p
                className="mt-1.5 text-[11px] leading-snug text-white/75 max-w-[120px] transition-all duration-400 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
              >
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom fade edge */}
      <div
        className="absolute inset-x-0 bottom-0 h-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(7,24,70,0.6), transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
