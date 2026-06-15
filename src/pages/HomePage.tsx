import { Link } from "react-router-dom";
import antiespumanteImg from "../assets/Antiespumante.jpeg";
import antibioticosImg from "../assets/antibioticos.jpeg";
import cloritoImg from "../assets/cloritoDeSodio.jpeg";
import estoque3Img from "../assets/new/estoque3.jpeg";
import estoque5Img from "../assets/new/estoque5.jpeg";
import estoquImg from "../assets/new/estoqu.jpeg";
import usinaImg from "../assets/new/usina.jpeg";
import monenImg from "../assets/MONEN-PRO.jpg";
import rcFlokImg from "../assets/rcFlok.jpg";
import rcCatVideo from "../assets/Polímero cationico RC CAT.mp4";
import rcCat2Video from "../assets/new/rccat2.mp4";
import rcFlokVideo from "../assets/RC FLOK polímero anionico.mp4";
import { HeroCarousel } from "../components/HeroCarousel";
import { SectorStrip } from "../components/SectorStrip";
import { SolucoesQuimicas } from "../components/SolucoesQuimicas";
import { contactInfo } from "../content/site";

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

const products = [
	{
		title: "Clorito de Sódio",
		image: cloritoImg,
		tag: "Controle microbiológico"
	},
	{
		title: "Antibióticos Sólidos e Líquidos",
		image: antibioticosImg,
		tag: "Fermentação"
	},
	{ title: "Linha MONEN-PRO", image: monenImg, tag: "Alta performance" },
	{ title: "RC FLOK", image: rcFlokImg, tag: "Floculação" },
	{
		title: "Antiespumante e Dispersante",
		image: antiespumanteImg,
		tag: "Eficiência operacional"
	}
];

const applicationCards = [
	{ title: "Osmose Reversa e Ultra filtração", image: usinaImg },
	{ title: "Torres Resfriamento", image: estoquImg },
	{ title: "Processo de Efluentes", image: estoque5Img },
	{ title: "Caldeiras", image: estoque3Img }
];

export function HomePage() {
	return (
		<div className="space-y-16">
			<HeroCarousel />

			{/* Hero grid: brand card + image */}
			<section className="rq-scale-in rq-d200 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
				<article
					className="relative overflow-hidden rounded-3xl p-8 text-white"
					style={{
						background:
							"linear-gradient(135deg, #071c0b 0%, #0f3316 60%, #1a4a1e 100%)",
						boxShadow:
							"0 6px 32px rgba(7,28,11,0.32), inset 0 1px 0 rgba(255,255,255,0.07)"
					}}
				>
					{/* Decorative blobs */}
					<div
						className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full border border-white/8"
						aria-hidden="true"
					/>
					<div
						className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full blur-3xl"
						style={{ background: "rgba(26,77,184,0.15)" }}
						aria-hidden="true"
					/>
					<span className="mb-6 inline-block rounded-full border border-[#8bc53f]/40 bg-[#8bc53f]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#bedd8c]">
						Visão geral
					</span>
					<h2 className="relative font-['Outfit',sans-serif] text-3xl font-semibold leading-tight tracking-[-0.01em]">
						{contactInfo.title}
					</h2>
					<p className="relative mt-4 text-sm leading-relaxed text-[#c8e0c0]">
						{contactInfo.slogan}. {contactInfo.about} Especialidade em linhas
						para fermentação, controle microbiológico e ganho de eficiência
						operacional.
					</p>
					<p className="relative mt-3 flex items-start gap-2 text-xs text-[#8abf80]">
						<svg
							className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8bc53f]"
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
					<div className="relative mt-7 flex flex-wrap gap-3">
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
				</article>

				<aside
					className="overflow-hidden rounded-3xl border border-[#c5cedb]/70 p-1.5 shadow-lg"
					style={{
						background: "rgba(255,255,255,0.7)",
						backdropFilter: "blur(8px)"
					}}
				>
					<img
						src={estoque3Img}
						alt="Estoque e logística Race Química"
						className="h-full w-full rounded-2xl object-cover transition duration-500 hover:scale-[1.02]"
					/>
				</aside>
			</section>

			<section className="relative left-1/2 w-screen -translate-x-1/2 bg-white py-14">
				<div className="mx-auto w-full max-w-[1540px] px-16 sm:px-20 lg:px-24">
					<div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
						{applicationCards.map((item, index) => (
							<article
								key={item.title}
								className={`rq-fade-up rq-d${Math.min((index + 1) * 100, 400)} group bg-white shadow-[0_4px_18px_rgba(7,28,11,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(7,28,11,0.13)]`}
							>
								<div className="relative h-72 overflow-hidden bg-[#eef3f6]">
									<img
										src={item.image}
										alt={item.title}
										className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
									/>
									<div
										className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/95 to-transparent"
										aria-hidden="true"
									/>
								</div>
								<div className="px-8 pb-7 pt-9 text-center">
									<h2 className="min-h-[56px] font-['Outfit',sans-serif] text-lg font-bold leading-snug text-[#0f3316]">
										{item.title}
									</h2>
									<span
										className="mt-8 block h-px w-full bg-[#dfe3e8]"
										aria-hidden="true"
									/>
									<Link
										to="/contato"
										className="mt-6 inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#1a4db8] transition hover:text-[#0f3316]"
									>
										Ver produto
										<svg
											className="h-3.5 w-3.5 fill-current"
											viewBox="0 0 20 20"
											aria-hidden="true"
										>
											<path d="M7.2 4.4 12.8 10l-5.6 5.6 1.4 1.4 7-7-7-7-1.4 1.4Z" />
										</svg>
									</Link>
								</div>
							</article>
						))}
					</div>
				</div>

				<button
					type="button"
					aria-label="Aplicações anteriores"
					className="absolute left-5 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-[#0f3316] transition hover:text-[#8bc53f] lg:flex"
				>
					<svg
						className="h-9 w-9 fill-current"
						viewBox="0 0 20 20"
						aria-hidden="true"
					>
						<path d="M12.8 4.4 7.2 10l5.6 5.6-1.4 1.4-7-7 7-7 1.4 1.4Z" />
					</svg>
				</button>
				<button
					type="button"
					aria-label="Próximas aplicações"
					className="absolute right-5 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-[#0f3316] transition hover:text-[#8bc53f] lg:flex"
				>
					<svg
						className="h-9 w-9 fill-current"
						viewBox="0 0 20 20"
						aria-hidden="true"
					>
						<path d="M7.2 4.4 12.8 10l-5.6 5.6 1.4 1.4 7-7-7-7-1.4 1.4Z" />
					</svg>
				</button>
			</section>

			{/* Sector strip */}
			<SectorStrip />

			{/* Videos */}
			<section className="relative overflow-hidden rounded-3xl bg-[#071c0b] px-6 py-8 text-white shadow-[0_10px_35px_rgba(7,28,11,0.3)] sm:px-8 lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage:
							"linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
						backgroundSize: "48px 48px"
					}}
					aria-hidden="true"
				/>
				<div className="relative flex flex-col justify-between pb-6 lg:pb-0">
					<div>
						<p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">
							Em ação
						</p>
						<h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-semibold leading-tight">
							Nossos produtos
						</h2>
						<p className="mt-3 max-w-sm text-sm leading-relaxed text-[#c8e0c0]">
							Demonstrações rápidas das linhas técnicas Race Química, em um
							formato mais compacto para leitura e navegação.
						</p>
					</div>
					<Link
						to="/contato"
						className="mt-6 inline-flex w-fit items-center rounded-full bg-[#1a4db8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2560d4]"
					>
						Solicitar orientação
					</Link>
				</div>

				<div className="relative grid gap-4 md:grid-cols-3">
					{videos.map((video, i) => (
						<article
							key={video.title}
							className={`rq-fade-up rq-d${(i + 1) * 100} overflow-hidden rounded-2xl border border-white/12 bg-white/8 shadow-sm backdrop-blur-sm`}
						>
							<div className="aspect-video w-full overflow-hidden bg-black">
								<video
									src={video.src}
									controls
									playsInline
									preload="metadata"
									className="h-full w-full object-cover"
									aria-label={video.title}
								/>
							</div>
							<div className="p-4">
								<span className="inline-block rounded-full bg-[#8bc53f]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#bedd8c]">
									{video.tag}
								</span>
								<h3 className="mt-2 font-['Outfit',sans-serif] text-lg font-semibold text-white">
									{video.title}
								</h3>
								<p className="mt-1 text-sm leading-relaxed text-[#c8e0c0]">
									{video.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* Solucoes Quimicas */}
			<SolucoesQuimicas />

			{/* Products */}
			<section id="linha-de-produtos" className="space-y-6">
				<div className="flex items-end justify-between">
					<div>
						<p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">
							Portfólio
						</p>
						<h2 className="mt-1 font-['Outfit',sans-serif] text-3xl font-semibold text-[#0f3316]">
							Linha de produtos
						</h2>
					</div>
					<Link
						to="/contato"
						className="hidden text-sm font-medium text-[#0f3316] underline-offset-4 transition hover:text-[#1a4db8] hover:underline sm:block"
					>
						Solicitar catálogo →
					</Link>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{products.map((product, index) => (
						<article
							key={product.title}
							className={`rq-fade-up rq-d${Math.min((index + 1) * 100, 500)} group relative overflow-hidden rounded-2xl border border-[#c3ccda]/70 bg-white shadow-sm transition-all duration-300 hover:border-[#8bc53f]/30 hover:shadow-lg hover:shadow-[#0f3316]/10`}
						>
							<div className="relative h-64 overflow-hidden bg-[#f0f4f8]">
								<img
									src={product.image}
									alt={product.title}
									className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
								/>
								<div
									className="absolute inset-0 bg-[#071c0b]/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-2xl"
									aria-hidden="true"
								/>
								<span className="absolute right-3 top-3 rounded-full border border-[#0f3316]/20 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0f3316] backdrop-blur-sm">
									{product.tag}
								</span>
							</div>
							<div className="p-5">
								<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5a6478]">
									Produto {String(index + 1).padStart(2, "0")}
								</p>
								<h3 className="mt-1.5 font-['Outfit',sans-serif] text-xl font-semibold text-[#0f3316] transition-colors group-hover:text-[#1a4db8]">
									{product.title}
								</h3>
								<span
									className="mt-3 block h-[2px] w-10 rounded-full transition-all duration-300 group-hover:w-16"
									style={{
										background: "linear-gradient(90deg, #8bc53f, #bedd8c)"
									}}
								/>
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
