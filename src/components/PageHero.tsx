type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#071846] via-[#0f2c65] to-[#313d55] px-6 py-12 text-white shadow-2xl sm:px-10">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#d8dee8]/35" aria-hidden="true" />
      <div className="absolute -bottom-20 right-20 h-56 w-56 rounded-full bg-[#8bc53f]/18 blur-3xl" aria-hidden="true" />
      <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-[#bedd8c]">{eyebrow}</p>
      <h1 className="relative mt-4 max-w-3xl font-['Outfit',sans-serif] text-3xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h1>
      <p className="relative mt-5 max-w-2xl text-sm leading-relaxed text-[#e7edf7] sm:text-base">{description}</p>
    </section>
  );
}
