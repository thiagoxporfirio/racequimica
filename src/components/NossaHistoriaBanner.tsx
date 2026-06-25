import { Link } from "react-router-dom";
import raceLogoImg from "../assets/logo.png";

export function NossaHistoriaBanner() {
	return (
		<section
			className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
			style={{ minHeight: "380px" }}
		>
			{/* Foto de fundo */}
			<img
				src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1800&q=80"
				alt=""
				className="absolute inset-0 h-full w-full object-cover"
				aria-hidden="true"
			/>

			{/* Véu claro */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(135deg, rgba(218,238,250,0.88) 0%, rgba(200,228,242,0.80) 50%, rgba(185,220,238,0.85) 100%)"
				}}
				aria-hidden="true"
			/>

			{/* Fórmulas químicas decorativas no fundo */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.06]"
				style={{
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='60' font-size='48' fill='%230f3316' font-family='monospace'%3EH₂O%3C/text%3E%3Ctext x='180' y='160' font-size='36' fill='%230f3316' font-family='monospace'%3ECl₂%3C/text%3E%3Ctext x='40' y='260' font-size='42' fill='%230f3316' font-family='monospace'%3ENaOH%3C/text%3E%3Ctext x='240' y='340' font-size='38' fill='%230f3316' font-family='monospace'%3ECO₂%3C/text%3E%3C/svg%3E\")",
					backgroundSize: "400px 400px"
				}}
				aria-hidden="true"
			/>

			{/* Conteúdo */}
			<div className="relative z-10 mx-auto grid min-h-[380px] w-full max-w-screen-xl items-center gap-10 px-8 py-16 sm:px-12 lg:grid-cols-[1fr_auto_auto] lg:gap-16 lg:px-16">

				{/* Coluna esquerda: texto */}
				<div className="max-w-md">
					<p className="font-['Outfit',sans-serif] text-base font-semibold text-[#1a4db8]">
						Conheça
					</p>
					<h2 className="mt-1 font-['Outfit',sans-serif] text-3xl font-black text-[#0f3316] sm:text-4xl">
						Nossa História
					</h2>
					<p className="mt-5 text-sm leading-relaxed text-[#2d4a35]">
						A Race Química desenvolve soluções químicas de alta performance para a
						indústria sucroalcooleira e de tratamento de água, com mais de 25 anos
						de experiência no setor sucroenergético e compromisso com excelência, ética e constante evolução
						tecnológica.
					</p>
					<Link
						to="/sobre-nos"
						className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0f3316] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_4px_18px_rgba(15,51,22,0.35)] transition-all duration-200 hover:bg-[#1a5c28] hover:shadow-[0_6px_24px_rgba(15,51,22,0.45)] active:scale-95"
					>
						Continue lendo
					</Link>
				</div>

				{/* Coluna central: logo */}
				<div
					className="flex items-center justify-center rounded-2xl px-10 py-8 shadow-lg"
					style={{
						background: "rgba(255,255,255,0.55)",
						backdropFilter: "blur(8px)",
						border: "1px solid rgba(255,255,255,0.7)"
					}}
				>
					<img
						src={raceLogoImg}
						alt="Race Química"
						className="h-24 w-auto object-contain sm:h-28"
					/>
				</div>

				{/* Coluna direita: card Sobre nós */}
				<div
					className="hidden lg:flex flex-col items-center gap-4 rounded-2xl px-8 py-8 shadow-lg"
					style={{
						background: "rgba(255,255,255,0.55)",
						backdropFilter: "blur(8px)",
						border: "1px solid rgba(255,255,255,0.7)",
						minWidth: "160px"
					}}
				>
					<svg
						className="h-14 w-14 text-[#1a4db8]"
						viewBox="0 0 48 48"
						fill="none"
						aria-hidden="true"
					>
						<circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="2.5" fill="rgba(26,77,184,0.10)" />
						<path d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
						<path d="M32 12c3 1.5 5 4.5 5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
						<path d="M16 12c-3 1.5-5 4.5-5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
					</svg>
					<p className="font-['Outfit',sans-serif] text-sm font-bold text-[#1a4db8] text-center">
						Sobre Nós
					</p>
					<Link
						to="/sobre-nos"
						className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#0f3316] transition hover:text-[#1a4db8]"
					>
						Ver mais
						<svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" aria-hidden="true">
							<path d="M7.2 4.4 12.8 10l-5.6 5.6 1.4 1.4 7-7-7-7-1.4 1.4Z" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
}
