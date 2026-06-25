import { Link, Navigate, useParams } from "react-router-dom";
import { SectorStrip } from "../components/SectorStrip";
import { sectors } from "../content/sectors";

export function SubLinhaPage() {
	const { key, subkey } = useParams<{ key: string; subkey: string }>();
	const sector = sectors.find(s => s.key === key);
	const sub = sector?.subLines.find(sl => sl.key === subkey);

	if (!sector || !sub) return <Navigate to="/" replace />;

	return (
		<div>
			{/* ── Breadcrumb ── */}
			<nav className="mb-6 flex items-center gap-2 text-sm text-[#5a6478]">
				<Link to={`/setor/${sector.key}`} className="hover:text-[#1a4db8] transition-colors">
					{sector.label}
				</Link>
				<svg className="h-3.5 w-3.5 fill-current opacity-40" viewBox="0 0 20 20" aria-hidden="true">
					<path d="M7.2 4.4 12.8 10l-5.6 5.6 1.4 1.4 7-7-7-7-1.4 1.4Z" />
				</svg>
				<span className="text-[#0f3316] font-medium">{sub.label}</span>
			</nav>

			{/* ── Conteúdo principal ── */}
			<section className="grid gap-12 lg:grid-cols-2 lg:items-start pb-16">
				{/* Esquerda: título + lista + botão */}
				<div>
					<p className="text-sm font-semibold text-[#1a4db8]">
						Conheça nossa linha de produtos em
					</p>
					<h1 className="mt-1 font-['Outfit',sans-serif] text-4xl font-bold text-[#0f3316] sm:text-5xl">
						{sub.label}
					</h1>

					<ul className="mt-10 space-y-3">
						{sub.products.map(product => (
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

				{/* Direita: foto */}
				<div className="relative">
					<div className="overflow-hidden rounded-2xl shadow-2xl">
						<img
							src={sub.image}
							alt={sub.label}
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

			{/* ── Veja Também ── */}
			<div className="mb-4">
				<p className="text-sm font-semibold text-[#1a4db8]">Veja</p>
				<h2 className="mt-0.5 font-['Outfit',sans-serif] text-2xl font-bold text-[#0f3316]">
					Também
				</h2>
			</div>

			<SectorStrip />
		</div>
	);
}
