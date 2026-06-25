import { Link } from "react-router-dom";

export function CtaBanner() {
	return (
		<section
			className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
			style={{ minHeight: "360px" }}
		>
			{/* Foto de fundo */}
			<img
				src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1800&q=80"
				alt=""
				className="absolute inset-0 h-full w-full object-cover"
				aria-hidden="true"
			/>

			{/* Véu claro sobre a foto */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(135deg, rgba(232,243,255,0.82) 0%, rgba(210,232,245,0.75) 50%, rgba(195,225,240,0.80) 100%)"
				}}
				aria-hidden="true"
			/>

			{/* Letras decorativas de fundo */}
			<span
				className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 select-none font-['Outfit',sans-serif] text-[22vw] font-black leading-none text-[#0f3316]/[0.05]"
				aria-hidden="true"
			>
				RQ
			</span>

			{/* Conteúdo central */}
			<div className="relative z-10 flex min-h-[360px] flex-col items-center justify-center px-6 py-20 text-center">
				<h2 className="font-['Outfit',sans-serif] text-5xl font-black uppercase leading-tight tracking-tight text-[#0f3316] sm:text-6xl lg:text-7xl">
					Apaixonados
				</h2>
				<p
					className="mt-1 font-['Outfit',sans-serif] text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl lg:text-5xl"
					style={{
						color: "transparent",
						WebkitTextStroke: "2px #1a6b2a"
					}}
				>
					por química de qualidade
				</p>

				<p className="mt-5 text-sm font-medium text-[#2d4a35] underline underline-offset-4 decoration-[#1a6b2a]/40">
					Excelência na fabricação e constante evolução
				</p>

				<Link
					to="/contato"
					className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0f3316] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_20px_rgba(15,51,22,0.35)] transition-all duration-200 hover:bg-[#1a5c28] hover:shadow-[0_6px_28px_rgba(15,51,22,0.45)] active:scale-95"
				>
					Fale com a Race Química
				</Link>
			</div>
		</section>
	);
}
