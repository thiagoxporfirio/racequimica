import { Link, Navigate, useParams } from "react-router-dom";
import { SectorStrip } from "../components/SectorStrip";
import { sectors } from "../content/sectors";

export function SetorPage() {
	const { key } = useParams<{ key: string }>();
	const sector = sectors.find(s => s.key === key);

	if (!sector) return <Navigate to="/" replace />;

	const multiLine = sector.subLines.length > 1;

	return (
		<div>
			{/* ── Header da página ── */}
			<section className="pb-10 pt-8">
				<p className="text-sm font-semibold text-[#1a4db8]">
					Conheça nossa linha de produtos em
				</p>
				<h1 className="mt-1 font-['Outfit',sans-serif] text-4xl font-bold text-[#0f3316] sm:text-5xl">
					{sector.label}
				</h1>
			</section>

			{multiLine ? (
				/* ── Grid de sub-linhas (ex: Tratamento de Água) ── */
				<section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{sector.subLines.map(sub => (
						<Link
							key={sub.key}
							to={`/setor/${sector.key}/${sub.key}`}
							className="group overflow-hidden rounded-2xl border border-[#c3ccda]/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(7,28,11,0.13)]"
						>
							<div className="relative h-52 overflow-hidden bg-[#eef3f6]">
								<img
									src={sub.image}
									alt={sub.label}
									className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
								/>
								<div
									className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white/90 to-transparent"
									aria-hidden="true"
								/>
							</div>
							<div className="px-6 pb-6 pt-5">
								<h2 className="font-['Outfit',sans-serif] text-lg font-bold leading-snug text-[#0f3316]">
									{sub.label}
								</h2>
								<span className="mt-4 block h-px w-full bg-[#dfe3e8]" aria-hidden="true" />
								<span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#1a4db8] transition hover:text-[#0f3316]">
									Ver produto
									<svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
										<path d="M7.2 4.4 12.8 10l-5.6 5.6 1.4 1.4 7-7-7-7-1.4 1.4Z" />
									</svg>
								</span>
							</div>
						</Link>
					))}
				</section>
			) : (
				/* ── Setor com uma única sub-linha: exibe lista + foto ── */
				<section className="grid gap-12 lg:grid-cols-2 lg:items-start">
					<div>
						<ul className="space-y-3">
							{sector.subLines[0].products.map(product => (
								<li key={product} className="flex items-center gap-3">
									<svg
										className="h-5 w-5 shrink-0 text-[#1a4db8]"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="text-base text-[#2d3a2e]">{product}</span>
								</li>
							))}
						</ul>

						<Link
							to="/contato"
							className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1a4db8] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(26,77,184,0.35)] transition-all duration-200 hover:bg-[#2560d4] hover:shadow-[0_4px_20px_rgba(26,77,184,0.5)] active:scale-95"
						>
							Solicitar proposta
							<svg className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
								<path d="M7.2 4.4 12.8 10l-5.6 5.6 1.4 1.4 7-7-7-7-1.4 1.4Z" />
							</svg>
						</Link>
					</div>

					<div className="relative">
						<div className="overflow-hidden rounded-2xl shadow-2xl">
							<img
								src={sector.image}
								alt={sector.label}
								className="h-full w-full object-cover"
								style={{ maxHeight: "520px" }}
							/>
						</div>
						<div
							className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl"
							style={{ background: "rgba(26,77,184,0.12)", border: "1px solid rgba(26,77,184,0.15)" }}
							aria-hidden="true"
						/>
					</div>
				</section>
			)}

			{/* ── Veja Também ── */}
			<div className="mt-20 mb-4">
				<p className="text-sm font-semibold text-[#1a4db8]">Veja</p>
				<h2 className="mt-0.5 font-['Outfit',sans-serif] text-2xl font-bold text-[#0f3316]">
					Também
				</h2>
			</div>

			<SectorStrip />
		</div>
	);
}
