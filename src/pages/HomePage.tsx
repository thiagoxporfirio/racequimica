import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import rcCatVideo from "../assets/Polímero cationico RC CAT.mp4";
import rcCat2Video from "../assets/new/rccat2.mp4";
import rcFlokVideo from "../assets/RC FLOK polímero anionico.mp4";
import carroselDImg from "../assets/new/carroselD.jpeg";
import carroselFImg from "../assets/new/carroselF.jpeg";
import carroselGImg from "../assets/new/CarroselG.jpeg";
import carroselHImg from "../assets/new/carroselH.jpeg";
import estoque2Img from "../assets/new/estoque2.jpeg";
import estoque3Img from "../assets/new/estoque3.jpeg";
import estoque5Img from "../assets/new/estoque5.jpeg";
import { CtaBanner } from "../components/CtaBanner";
import { HeroCarousel } from "../components/HeroCarousel";
import { LinhaAguas } from "../components/LinhaAguas";
import { NossaHistoriaBanner } from "../components/NossaHistoriaBanner";
import { SectorStrip } from "../components/SectorStrip";
import { contactInfo } from "../content/site";

const GALLERY_IMAGES = [
	carroselDImg,
	carroselFImg,
	carroselGImg,
	carroselHImg,
	estoque2Img,
	estoque3Img,
	estoque5Img,
];

const GALLERY_INTERVAL = 3500;

function GalleryCarousel() {
	const [active, setActive] = useState(0);
	const next = useCallback(() => setActive(a => (a + 1) % GALLERY_IMAGES.length), []);
	const prev = useCallback(() => setActive(a => (a - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length), []);

	useEffect(() => {
		const id = setInterval(next, GALLERY_INTERVAL);
		return () => clearInterval(id);
	}, [next]);

	return (
		<div className="relative h-full w-full overflow-hidden">
			{GALLERY_IMAGES.map((src, i) => (
				<img
					key={i}
					src={src}
					alt=""
					aria-hidden="true"
					className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
				/>
			))}
			{/* Dots */}
			<div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
				{GALLERY_IMAGES.map((_, i) => (
					<button
						key={i}
						onClick={() => setActive(i)}
						aria-label={`Foto ${i + 1}`}
						className={`rounded-full transition-all duration-300 ${i === active ? "h-2 w-6 bg-[#8bc53f]" : "h-2 w-2 bg-white/40 hover:bg-white/70"}`}
					/>
				))}
			</div>
			{/* Arrows */}
			<button
				onClick={prev}
				aria-label="Foto anterior"
				className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
			>
				<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
				</svg>
			</button>
			<button
				onClick={next}
				aria-label="Próxima foto"
				className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
			>
				<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	);
}

const videos = [
	{
		src: rcCatVideo,
		title: "Polímero Catiônico RC CAT",
		description:
			"Floculante catiônico de alta eficiência para decantação e tratamento de efluentes.",
		tag: "Floculação"
	},
	{
		src: rcFlokVideo,
		title: "RC FLOK — Polímero Aniônico",
		description:
			"Polímero aniônico desenvolvido para processos de decantação na fermentação sucroalcooleira.",
		tag: "Fermentação"
	},
	{
		src: rcCat2Video,
		title: "RC CAT em Operação",
		description:
			"Demonstração do polímero catiônico RC CAT aplicado em campo com resultados técnicos comprovados.",
		tag: "Demonstração"
	}
];

export function HomePage() {
	return (
		<div className="space-y-16">
			<HeroCarousel />

			<SectorStrip />

			{/* Visão geral — full width com carrossel */}
			<section className="rq-scale-in rq-d200 relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#071c0b] text-white">
				<div className="mx-auto grid min-h-130 w-full max-w-screen-2xl lg:grid-cols-[1fr_1fr]">
					{/* Coluna esquerda: texto */}
					<div className="relative flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16">
						{/* Decorative blob */}
						<div
							className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full blur-3xl"
							style={{ background: "rgba(26,77,184,0.12)" }}
							aria-hidden="true"
						/>
						<div
							className="pointer-events-none absolute inset-0 opacity-[0.03]"
							style={{
								backgroundImage:
									"linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
								backgroundSize: "48px 48px"
							}}
							aria-hidden="true"
						/>
						<span className="relative mb-5 inline-block w-fit rounded-full border border-[#8bc53f]/40 bg-[#8bc53f]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#bedd8c]">
							Visão geral
						</span>
						<h2 className="relative font-['Outfit',sans-serif] text-4xl font-semibold leading-tight tracking-[-0.01em] sm:text-5xl">
							{contactInfo.title}
						</h2>
						<p className="relative mt-5 max-w-lg text-base leading-relaxed text-[#c8e0c0]">
							{contactInfo.slogan}. {contactInfo.about} Especialidade em linhas
							para fermentação, controle microbiológico e ganho de eficiência
							operacional.
						</p>
						<p className="relative mt-4 flex items-start gap-2 text-sm text-[#8abf80]">
							<svg
								className="mt-0.5 h-4 w-4 shrink-0 text-[#8bc53f]"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
									clipRule="evenodd"
								/>
							</svg>
							{contactInfo.address}
						</p>
						<div className="relative mt-8 flex flex-wrap gap-3">
							<Link
								to="/contato"
								className="inline-flex items-center gap-1.5 rounded-full bg-[#1a4db8] px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(26,77,184,0.4)] transition-all duration-200 hover:bg-[#2560d4] hover:shadow-[0_4px_20px_rgba(26,77,184,0.55)] active:scale-95"
							>
								Solicitar proposta
							</Link>
							<Link
								to="/sobre-nos"
								className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-[#cce0c4] transition-all duration-200 hover:border-[#8bc53f]/60 hover:bg-white/8 hover:text-white active:scale-95"
							>
								Conhecer a história
							</Link>
						</div>
					</div>

					{/* Coluna direita: carrossel */}
					<div className="relative min-h-85 lg:min-h-0">
						<GalleryCarousel />
						{/* Gradiente de transição esquerda */}
						<div
							className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-24"
							style={{ background: "linear-gradient(to right, #071c0b, transparent)" }}
							aria-hidden="true"
						/>
					</div>
				</div>
			</section>

			<LinhaAguas />

			<NossaHistoriaBanner />

			{/* Videos */}
			<section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#071c0b] text-white">
				{/* Grid overlay */}
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage:
							"linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
						backgroundSize: "48px 48px"
					}}
					aria-hidden="true"
				/>

				<div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-10 lg:px-16">
					{/* Header row */}
					<div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">
								Em ação
							</p>
							<h2 className="mt-2 font-['Outfit',sans-serif] text-4xl font-semibold leading-tight">
								Nossos produtos
							</h2>
							<p className="mt-3 max-w-lg text-sm leading-relaxed text-[#c8e0c0]">
								Demonstrações rápidas das linhas técnicas Race Química, em um
								formato mais compacto para leitura e navegação.
							</p>
						</div>
						<Link
							to="/contato"
							className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#1a4db8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2560d4]"
						>
							Solicitar orientação
						</Link>
					</div>

					{/* Video grid */}
					<div className="grid gap-6 md:grid-cols-3">
						{videos.map((video, i) => (
							<article
								key={video.title}
								className={`rq-fade-up rq-d${(i + 1) * 100} overflow-hidden rounded-2xl border border-white/12 bg-white/8 shadow-sm backdrop-blur-sm`}
							>
								<div className="w-full overflow-hidden bg-black" style={{ aspectRatio: "16/10" }}>
									<video
										src={video.src}
										controls
										playsInline
										preload="metadata"
										className="h-full w-full object-cover"
										aria-label={video.title}
									/>
								</div>
								<div className="p-5">
									<span className="inline-block rounded-full bg-[#8bc53f]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#bedd8c]">
										{video.tag}
									</span>
									<h3 className="mt-2 font-['Outfit',sans-serif] text-xl font-semibold text-white">
										{video.title}
									</h3>
									<p className="mt-1.5 text-sm leading-relaxed text-[#c8e0c0]">
										{video.description}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<CtaBanner />

		</div>
	);
}
