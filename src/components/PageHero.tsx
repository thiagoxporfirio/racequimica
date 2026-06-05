type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section
      className="rq-fade-up relative overflow-hidden rounded-3xl px-7 py-14 text-white shadow-2xl sm:px-12 sm:py-16"
      style={{
        background: 'linear-gradient(135deg, #071846 0%, #0f2c65 55%, #1a3358 85%, #283d56 100%)',
        boxShadow: '0 8px 40px rgba(7,24,70,0.35), 0 2px 8px rgba(7,24,70,0.2)',
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10"
        aria-hidden="true"
      />
      <div
        className="absolute right-10 top-10 h-28 w-28 rounded-full border border-white/6"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full blur-3xl"
        style={{ background: 'rgba(139,197,63,0.16)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 right-1/3 h-40 w-40 rounded-full blur-2xl"
        style={{ background: 'rgba(139,197,63,0.08)' }}
        aria-hidden="true"
      />

      {/* Accent line */}
      <span
        className="rq-line-grow rq-d100 absolute left-0 top-0 block h-[3px] w-full rounded-t-3xl"
        style={{ background: 'linear-gradient(90deg, #8bc53f 0%, #bedd8c 50%, transparent 100%)' }}
        aria-hidden="true"
      />

      <div className="relative">
        <p className="rq-slide-right rq-d50 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#bedd8c]">
          <span className="inline-block h-px w-6 bg-[#8bc53f]" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="rq-fade-up rq-d150 relative mt-4 max-w-3xl font-['Outfit',sans-serif] text-3xl font-semibold leading-[1.15] tracking-[-0.01em] sm:text-5xl">
          {title}
        </h1>
        <p className="rq-fade-up rq-d300 relative mt-5 max-w-2xl text-sm leading-relaxed text-[#c8d8ee] sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
