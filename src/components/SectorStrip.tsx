import { useEffect, useRef, useState } from "react";

const sectors = [
	{
		key: "etanol",
		label: "Etanol",
		image:
			"https://imagens-cdn.canalrural.com.br/2026/06/preco-do-etanol-cai-em-18-estados-e-media-nacional-recua-para-r-4-18-por-litro-1024x576.png",
		description: "Floculação e fermentação sucroalcooleira",
		tint: "rgba(7,28,11,0.50)"
	},
	{
		key: "acucar",
		label: "Açúcar",
		image:
			"https://siamigbioenergia.com.br/wp-content/uploads/2025/01/post1-corpo1-1024x682px.png",
		description: "Controle de inibidores e rendimento",
		tint: "rgba(7,28,11,0.44)"
	},
	{
		key: "organicos",
		label: "Orgânicos",
		image:
			"https://www.cetap.org.br/site/wp-content/uploads/2020/05/250520-semana-alimento-organico-750x460.jpg",
		description: "Biocidas e antibióticos industriais",
		tint: "rgba(7,28,11,0.52)"
	},
	{
		key: "aguas",
		label: "Águas",
		image:
			"https://images.ecycle.com.br/wp-content/uploads/2021/10/07121825/drop-of-water-gee46e2eb0_1920.jpg.webp",
		description: "Tratamento e controle microbiológico",
		tint: "rgba(4,20,8,0.54)"
	},
	{
		key: "industrial",
		label: "Industrial",
		image:
			"https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/estatisticas_economicas/2023_07/PIM-Br_HOME_joao_paulo_ceglinski-PETROBRAS.jpg",
		description: "Soluções para processos industriais",
		tint: "rgba(7,28,11,0.46)"
	},
	{
		key: "agricolas",
		label: "Agrícolas",
		image:
			"https://goias.gov.br/agrodefesa/wp-content/uploads/sites/49/2024/03/52227342824_0f3c43b916_o.jpg",
		description: "Antiespumantes e dispersantes de campo",
		tint: "rgba(7,28,11,0.48)"
	}
];

export function SectorStrip() {
	const ref = useRef<HTMLElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					obs.disconnect();
				}
			},
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
			style={{
				background:
					"linear-gradient(160deg, #071c0b 0%, #0f3316 50%, #0a2410 100%)"
			}}
		>
			{/* Top fade edge */}
			<div
				className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none"
				style={{
					background:
						"linear-gradient(to bottom, rgba(7,28,11,0.7), transparent)"
				}}
				aria-hidden="true"
			/>

			{/* Background image with green wash */}
			<div className="absolute inset-0 overflow-hidden" aria-hidden="true">
				<img
					src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=60"
					alt=""
					className="h-full w-full object-cover opacity-10 scale-110 blur-sm"
				/>
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(160deg, rgba(7,28,11,0.92) 0%, rgba(10,36,16,0.88) 100%)"
					}}
				/>
			</div>

			{/* Header text */}
			<div className="relative z-10 px-4 pt-12 pb-6 sm:px-8 lg:px-10">
				<p
					className="text-[10px] font-bold uppercase tracking-[0.28em]"
					style={{ color: "#8bc53f" }}
				>
					Onde atuamos
				</p>
				<h2
					className="mt-2 font-['Outfit',sans-serif] text-3xl font-semibold leading-tight sm:text-4xl"
					style={{ color: "#e8f8e0" }}
				>
					Setores de atuação
				</h2>
			</div>

			{/* Strip grid */}
			<div
				className="relative z-10 grid"
				style={{ gridTemplateColumns: "repeat(6, 1fr)", minHeight: "340px" }}
				role="list"
			>
				{sectors.map((s, i) => (
					<div
						key={s.key}
						role="listitem"
						className="group relative overflow-hidden cursor-default"
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? "translateY(0)" : "translateY(32px)",
							transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`
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
								style={{ background: "rgba(255,255,255,0.10)" }}
								aria-hidden="true"
							/>
						)}

						{/* Content — slides up on hover */}
						<div className="absolute inset-x-0 bottom-0 p-4 flex flex-col items-center text-center">
							{/* Accent bar */}
							<span
								className="block h-0.75 w-8 rounded-full mb-3 transition-all duration-300 group-hover:w-14"
								style={{
									background: "linear-gradient(90deg, #8bc53f, #bedd8c)"
								}}
								aria-hidden="true"
							/>

							<span className="font-['Outfit',sans-serif] text-sm font-bold uppercase tracking-[0.14em] text-white">
								{s.label}
							</span>

							{/* Description — visible only on hover */}
							<p className="mt-1.5 text-[11px] leading-snug text-white/75 max-w-30 transition-all duration-400 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
								{s.description}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Bottom fade edge */}
			<div
				className="absolute inset-x-0 bottom-0 h-8 z-10 pointer-events-none"
				style={{
					background: "linear-gradient(to top, rgba(7,28,11,0.6), transparent)"
				}}
				aria-hidden="true"
			/>
		</section>
	);
}
