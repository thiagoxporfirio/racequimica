import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { sectors } from "../content/sectors";

const aguasSector = sectors.find(s => s.key === "aguas")!;
const subLines = aguasSector.subLines;

const VISIBLE = 4;

export function LinhaAguas() {
	const [start, setStart] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);

	const canPrev = start > 0;
	const canNext = start + VISIBLE < subLines.length;

	const prev = () => setStart(s => Math.max(0, s - 1));
	const next = () => setStart(s => Math.min(subLines.length - VISIBLE, s + 1));

	const visible = subLines.slice(start, start + VISIBLE);

	return (
		<section className="relative left-1/2 w-screen -translate-x-1/2 bg-white py-14">
			<div className="relative mx-auto w-full max-w-[1540px] px-16 sm:px-20 lg:px-24">

				{/* Título da seção */}
				<div className="mb-10">
					<p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a4db8]">
						Linha de Produtos
					</p>
					<h2 className="mt-1 font-['Outfit',sans-serif] text-3xl font-bold text-[#0f3316]">
						Tratamento de Água
					</h2>
				</div>

				{/* Grid de cards */}
				<div ref={trackRef} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
					{visible.map((sub, index) => (
						<article
							key={sub.key}
							className="group bg-white shadow-[0_4px_18px_rgba(7,28,11,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(7,28,11,0.13)] rounded-xl overflow-hidden"
							style={{ animationDelay: `${index * 80}ms` }}
						>
							<div className="relative h-60 overflow-hidden bg-[#eef3f6]">
								<img
									src={sub.image}
									alt={sub.label}
									className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
								/>
								<div
									className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/95 to-transparent"
									aria-hidden="true"
								/>
							</div>
							<div className="px-6 pb-6 pt-5">
								<h3 className="min-h-[48px] font-['Outfit',sans-serif] text-base font-bold leading-snug text-[#1a4db8]">
									{sub.label}
								</h3>
								<span className="mt-4 block h-px w-full bg-[#dfe3e8]" aria-hidden="true" />
								<Link
									to={`/setor/aguas/${sub.key}`}
									className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#1a4db8] transition hover:text-[#0f3316]"
								>
									Ver produto
									<svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
										<path d="M7.2 4.4 12.8 10l-5.6 5.6 1.4 1.4 7-7-7-7-1.4 1.4Z" />
									</svg>
								</Link>
							</div>
						</article>
					))}
				</div>

				{/* Botão ver todos */}
				<div className="mt-10 flex justify-center">
					<Link
						to="/setor/aguas"
						className="inline-flex items-center gap-2 rounded-full border border-[#c3ccda] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#0f3316] transition-all duration-200 hover:border-[#1a4db8] hover:text-[#1a4db8]"
					>
						Ver todos os produtos
					</Link>
				</div>
			</div>

			{/* Setas de navegação */}
			<button
				type="button"
				onClick={prev}
				disabled={!canPrev}
				aria-label="Anterior"
				className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-[#0f3316] transition hover:text-[#1a4db8] disabled:opacity-20 lg:flex"
			>
				<svg className="h-9 w-9 fill-current" viewBox="0 0 20 20" aria-hidden="true">
					<path d="M12.8 4.4 7.2 10l5.6 5.6-1.4 1.4-7-7 7-7 1.4 1.4Z" />
				</svg>
			</button>
			<button
				type="button"
				onClick={next}
				disabled={!canNext}
				aria-label="Próximo"
				className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-[#0f3316] transition hover:text-[#1a4db8] disabled:opacity-20 lg:flex"
			>
				<svg className="h-9 w-9 fill-current" viewBox="0 0 20 20" aria-hidden="true">
					<path d="M7.2 4.4 12.8 10l-5.6 5.6 1.4 1.4 7-7-7-7-1.4 1.4Z" />
				</svg>
			</button>
		</section>
	);
}
