import { Link } from "react-router-dom";

const productLines = [
	{ label: "Torres Resfriamento", to: "/contato" },
	{ label: "Antiespumantes", to: "/contato" },
	{ label: "Biocida não oxidante", to: "/contato" },
	{ label: "Biocida oxidante líquido", to: "/contato" },
	{ label: "Biocida oxidante tablete", to: "/contato" },
	{ label: "Dispersante inorgânico", to: "/contato" },
	{ label: "Dispersante orgânico", to: "/contato" },
	{ label: "Gerador de dióxido de cloro", to: "/contato" },
	{ label: "Gerador de NaClO", to: "/contato" },
	{ label: "Inibidor de corrosão", to: "/contato" }
];

export function LinhasProdutos() {
	return (
		<section
			id="linha-de-produtos"
			className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
			style={{
				background: "linear-gradient(170deg, #071c0b 0%, #0d2e13 55%, #071c0b 100%)"
			}}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.025]"
				style={{
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")"
				}}
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
				<div className="mb-12">
					<p
						className="text-[10px] font-bold uppercase tracking-[0.3em]"
						style={{ color: "#8bc53f" }}
					>
						Conheça nossa linha de produtos em
					</p>
					<h2
						className="mt-2 font-['Outfit',sans-serif] text-4xl font-semibold leading-tight text-white sm:text-5xl"
					>
						Linha de produtos
					</h2>
				</div>

				<ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{productLines.map((item, i) => (
						<li key={item.label}>
							<Link
								to={item.to}
								className="group flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200"
								style={{
									background: "rgba(255,255,255,0.04)",
									border: "1px solid rgba(255,255,255,0.07)",
									animation: `lp-card 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 55}ms both`
								}}
								onMouseEnter={e => {
									(e.currentTarget as HTMLElement).style.background = "rgba(139,197,63,0.10)";
									(e.currentTarget as HTMLElement).style.border = "1px solid rgba(139,197,63,0.35)";
								}}
								onMouseLeave={e => {
									(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
									(e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)";
								}}
							>
								<span
									className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
									style={{
										background: "rgba(139,197,63,0.12)",
										color: "#8bc53f",
										border: "1px solid rgba(139,197,63,0.25)"
									}}
								>
									{String(i + 1).padStart(2, "0")}
								</span>
								<span className="flex-1 font-['Outfit',sans-serif] text-sm font-semibold text-white leading-snug">
									{item.label}
								</span>
								<svg
									className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
									style={{ color: "#8bc53f" }}
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M7.2 4.4 12.8 10l-5.6 5.6 1.4 1.4 7-7-7-7-1.4 1.4Z" />
								</svg>
							</Link>
						</li>
					))}
				</ul>
			</div>

			<style>{`
				@keyframes lp-card {
					from { opacity: 0; transform: translateY(16px); }
					to   { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</section>
	);
}
