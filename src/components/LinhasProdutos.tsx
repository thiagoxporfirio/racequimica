import { useState } from "react";
import { Link } from "react-router-dom";
import antiespumanteImg from "../assets/Antiespumante.jpeg";
import antibioticosImg from "../assets/antibioticos.jpeg";
import cloritoImg from "../assets/cloritoDeSodio.jpeg";
import monenImg from "../assets/MONEN-PRO.jpg";
import rcFlokImg from "../assets/rcFlok.jpg";
import rcCatImg from "../assets/rc-cat.jpeg";
import rcFlok2Img from "../assets/rc-flok2.jpeg";
import rcFlotImg from "../assets/rc-flot.jpeg";
import rcFlok100Img from "../assets/rcflok-100.jpeg";
import estoque5Img from "../assets/new/estoque5.jpeg";
import rc2000Img from "../assets/rc2000.jpeg";

type Product = { name: string; image?: string };
type Line = { key: string; label: string; index: string; products: Product[] };

const lines: Line[] = [
	{
		key: "acucar",
		label: "Linha Açúcar",
		index: "01",
		products: [
			{ name: "Polímeros", image: rcCatImg },
			{ name: "Clarificantes", image: rcFlok2Img },
			{ name: "Lubrificantes de massa" },
			{ name: "Neutralizante de vapor" },
			{ name: "Anticrustante" }
		]
	},
	{
		key: "fermentacao",
		label: "Linha Fermentação",
		index: "02",
		products: [
			{ name: "Dispersantes", image: rcFlotImg },
			{ name: "Antiespumante", image: antiespumanteImg },
			{ name: "Antibióticos", image: antibioticosImg },
			{ name: "Multifuncional", image: rcFlokImg },
			{ name: "Neutralizante de Álcool" },
			{ name: "Nutriente" }
		]
	},
	{
		key: "eta",
		label: "Linha ETA",
		index: "03",
		products: [
			{ name: "Policloreto de Alumínio", image: estoque5Img },
			{ name: "Polímero", image: rcFlok100Img },
			{ name: "Pastilha de Cloro", image: cloritoImg },
			{ name: "Soda" },
			{ name: "Peróxido de Hidrogênio" }
		]
	},
	{
		key: "moenda",
		label: "Linha Moenda",
		index: "04",
		products: [
			{ name: "Quaternário de Amônia", image: rc2000Img },
			{ name: "Bactericida Base Tanino" },
			{ name: "Organo Sulforoso" },
			{ name: "MONEN-PRO", image: monenImg }
		]
	}
];

export function LinhasProdutos() {
	const [active, setActive] = useState(0);
	const line = lines[active];

	return (
		<section
			id="linha-de-produtos"
			className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
			style={{
				background: "linear-gradient(170deg, #071c0b 0%, #0d2e13 55%, #071c0b 100%)"
			}}
		>
			{/* Noise / texture */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.025]"
				style={{
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")"
				}}
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 sm:px-10 lg:px-16 py-14 lg:py-20">

				{/* ── Top header ── */}
				<div className="flex items-end justify-between mb-12">
					<div>
						<p
							className="text-[10px] font-bold uppercase tracking-[0.3em]"
							style={{ color: "#8bc53f" }}
						>
							Portfólio técnico
						</p>
						<h2
							className="mt-2 font-['Outfit',sans-serif] text-4xl font-semibold leading-tight text-white sm:text-5xl"
						>
							Linha de produtos
						</h2>
					</div>
					<Link
						to="/contato"
						className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-200"
						style={{
							background: "rgba(139,197,63,0.12)",
							border: "1px solid rgba(139,197,63,0.35)",
							color: "#bedd8c"
						}}
						onMouseEnter={e => {
							(e.currentTarget as HTMLElement).style.background = "rgba(139,197,63,0.22)";
						}}
						onMouseLeave={e => {
							(e.currentTarget as HTMLElement).style.background = "rgba(139,197,63,0.12)";
						}}
					>
						Solicitar catálogo
						<svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" aria-hidden="true">
							<path d="M7.2 4.4 12.8 10l-5.6 5.6 1.4 1.4 7-7-7-7-1.4 1.4Z" />
						</svg>
					</Link>
				</div>

				{/* ── Layout: sidebar + content ── */}
				<div className="flex flex-col gap-8 lg:flex-row lg:gap-12">

					{/* ── Linha selector sidebar ── */}
					<nav
						className="flex flex-row gap-2 lg:flex-col lg:w-52 lg:shrink-0"
						aria-label="Selecionar linha"
					>
						{lines.map((l, i) => {
							const isActive = i === active;
							return (
								<button
									key={l.key}
									onClick={() => setActive(i)}
									className="group relative flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 w-full"
									style={{
										background: isActive
											? "linear-gradient(90deg, rgba(139,197,63,0.18), rgba(139,197,63,0.06))"
											: "rgba(255,255,255,0.04)",
										border: isActive
											? "1px solid rgba(139,197,63,0.4)"
											: "1px solid rgba(255,255,255,0.07)",
									}}
								>
									{/* Active bar */}
									{isActive && (
										<span
											className="absolute left-0 top-3 bottom-3 w-0.75 rounded-full"
											style={{ background: "linear-gradient(180deg, #8bc53f, #bedd8c)" }}
											aria-hidden="true"
										/>
									)}

									<span
										className="font-['Outfit',sans-serif] text-[10px] font-bold shrink-0"
										style={{ color: isActive ? "#8bc53f" : "rgba(255,255,255,0.3)" }}
									>
										{l.index}
									</span>

									<span
										className="font-['Outfit',sans-serif] text-sm font-semibold leading-snug"
										style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)" }}
									>
										{l.label}
									</span>

									<span
										className="ml-auto shrink-0 text-[10px] font-bold hidden lg:block"
										style={{ color: isActive ? "#8bc53f" : "rgba(255,255,255,0.2)" }}
									>
										{l.products.length}
									</span>
								</button>
							);
						})}
					</nav>

					{/* ── Cards grid ── */}
					<div className="flex-1 min-w-0">
						{/* Line title strip */}
						<div className="flex items-center gap-3 mb-6">
							<span
								className="font-['Outfit',sans-serif] text-5xl font-bold leading-none select-none"
								style={{ color: "rgba(139,197,63,0.15)" }}
								aria-hidden="true"
							>
								{line.index}
							</span>
							<div>
								<p
									className="font-['Outfit',sans-serif] text-xl font-semibold text-white"
								>
									{line.label}
								</p>
								<p
									className="text-[10px] font-bold uppercase tracking-widest mt-0.5"
									style={{ color: "#8bc53f" }}
								>
									{line.products.length} produtos disponíveis
								</p>
							</div>
						</div>

						{/* Grid */}
						<div
							key={line.key}
							className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4"
							style={{ animation: "lp-in 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
						>
							{line.products.map((product, i) => (
								<Link
									key={product.name}
									to="/contato"
									className="group relative overflow-hidden rounded-xl"
									style={{
										animation: `lp-card 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 55}ms both`
									}}
								>
									{/* Photo or placeholder */}
									<div className="relative overflow-hidden" style={{ paddingBottom: "125%" }}>
										<div className="absolute inset-0">
											{product.image ? (
												<img
													src={product.image}
													alt={product.name}
													className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
												/>
											) : (
												<div
													className="h-full w-full flex items-center justify-center relative"
													style={{
														background: "linear-gradient(145deg, #0d2e13 0%, #163820 50%, #0a2410 100%)"
													}}
												>
													{/* Decorative circle */}
													<div
														className="absolute inset-0 opacity-30"
														style={{
															backgroundImage: "radial-gradient(circle at 35% 35%, rgba(139,197,63,0.25) 0%, transparent 65%)"
														}}
														aria-hidden="true"
													/>
													<span
														className="font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-widest text-center px-3"
														style={{ color: "rgba(139,197,63,0.4)" }}
														aria-hidden="true"
													>
														{line.label}
													</span>
												</div>
											)}

											{/* Bottom gradient — always */}
											<div
												className="absolute inset-x-0 bottom-0 h-3/5"
												style={{
													background: "linear-gradient(to top, rgba(5,18,8,0.97) 0%, rgba(5,18,8,0.5) 55%, transparent 100%)"
												}}
												aria-hidden="true"
											/>

											{/* Hover overlay */}
											<div
												className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
												style={{ background: "rgba(7,28,11,0.45)" }}
												aria-hidden="true"
											/>

											{/* CTA button */}
											<div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
												<span
													className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-xl"
													style={{ background: "#8bc53f", color: "#071c0b" }}
												>
													Orçamento
												</span>
											</div>

											{/* Product name */}
											<div className="absolute inset-x-0 bottom-0 p-3.5">
												<span
													className="block h-0.5 w-4 rounded-full mb-1.5 transition-all duration-300 group-hover:w-8"
													style={{ background: "#8bc53f" }}
													aria-hidden="true"
												/>
												<h4
													className="font-['Outfit',sans-serif] text-sm font-semibold leading-snug text-white"
												>
													{product.name}
												</h4>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			<style>{`
				@keyframes lp-in {
					from { opacity: 0; }
					to   { opacity: 1; }
				}
				@keyframes lp-card {
					from { opacity: 0; transform: translateY(16px); }
					to   { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</section>
	);
}
