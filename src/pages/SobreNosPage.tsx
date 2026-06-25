import type { ReactNode } from "react";
import cloritoImg from "../assets/cloritoDeSodio.jpeg";
import estoque3Img from "../assets/new/estoque3.jpeg";
import logo from "../assets/logo.png";
import { contactInfo } from "../content/site";

const highlights = [
	{ value: "25+", label: "anos de experiência" },
	{ value: "SP", label: "base em Sertãozinho" },
	{ value: "24h", label: "canal técnico ativo" }
];

const pillars = [
	{
		title: "Missão",
		text: "Fornecer soluções químicas de alta performance para processos industriais, com atendimento técnico, qualidade no produto e foco em resultado operacional.",
		icon: (
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 21s7-4.25 7-11a7 7 0 1 0-14 0c0 6.75 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
			/>
		)
	},
	{
		title: "Visão",
		text: "Ser reconhecida pela confiança técnica no setor sucroenergético e por parcerias consistentes com indústrias que buscam produtividade e segurança.",
		icon: (
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Zm9 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
			/>
		)
	},
	{
		title: "Valores",
		text: "Responsabilidade, transparência, melhoria contínua, respeito aos clientes e compromisso com práticas seguras em toda a cadeia de fornecimento.",
		icon: (
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3 4.5 6.5v5.25c0 4.7 3.2 8.95 7.5 10.25 4.3-1.3 7.5-5.55 7.5-10.25V6.5L12 3Zm-3 9 2 2 4-4"
			/>
		)
	}
];

const timeline = [
	{
		year: "Origem",
		title: "Experiência aplicada ao setor industrial",
		text: "A Race Química nasceu da vivência técnica de profissionais com mais de duas décadas em processos de fermentação, controle microbiológico e tratamento."
	},
	{
		year: "Hoje",
		title: "Atendimento próximo e fornecimento confiável",
		text: "Com base em Sertãozinho-SP, a empresa atende usinas e indústrias com produtos selecionados, suporte comercial direto e acompanhamento das necessidades de campo."
	},
	{
		year: "Futuro",
		title: "Pesquisa, qualidade e evolução contínua",
		text: "O foco é ampliar soluções que reduzem perdas, melhoram estabilidade operacional e sustentam relações técnicas de longo prazo."
	}
];

export function SobreNosPage() {
	return (
		<div className="space-y-16">
			<section className="rq-fade-up relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#071c0b] text-white shadow-[0_18px_50px_rgba(7,28,11,0.3)]">
				<img
					src={estoque3Img}
					alt="Estrutura de estoque e operação da Race Química"
					className="absolute inset-0 h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-[#071c0b]/62" aria-hidden="true" />
				<div
					className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071c0b] to-transparent"
					aria-hidden="true"
				/>

				<div className="relative flex min-h-[520px] flex-col justify-end px-6 py-10 sm:px-10 lg:px-14">
					<div className="mb-10 flex items-center justify-between gap-6">
						<img
							src={logo}
							alt="Race Química"
							className="h-14 w-auto rounded-md p-2 shadow-lg sm:h-16"
						/>
						<span
							className="hidden h-px flex-1 bg-[#8bc53f] sm:block"
							aria-hidden="true"
						/>
					</div>

					<p className="rq-slide-right text-sm font-semibold uppercase tracking-[0.32em] text-[#bedd8c]">
						Sobre Nós
					</p>
					<h1 className="mt-4 max-w-4xl font-['Outfit',sans-serif] text-4xl font-semibold leading-tight sm:text-6xl">
						Química de alta performance para processos industriais.
					</h1>
					<p className="mt-5 max-w-2xl text-base leading-relaxed text-white/82">
						A Race Química combina experiência de mercado, atendimento direto e
						soluções voltadas à eficiência produtiva no setor sucroenergético.
					</p>

					<div className="mt-10 grid gap-3 sm:grid-cols-3">
						{highlights.map((item, index) => (
							<div
								key={item.label}
								className={`rq-fade-up rq-d${(index + 1) * 100} border-l-4 border-[#8bc53f] bg-white/95 px-5 py-4 text-[#071c0b] shadow-lg`}
							>
								<p className="font-['Outfit',sans-serif] text-3xl font-semibold">
									{item.value}
								</p>
								<p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#40506a]">
									{item.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
				<div className="rq-fade-up space-y-4">
					<p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8bc53f]">
						Nossa História
					</p>
					<h2 className="font-['Outfit',sans-serif] text-3xl font-semibold leading-tight text-[#0f3316] sm:text-4xl">
						Experiência técnica, presença regional e compromisso com qualidade.
					</h2>
					<p className="text-sm leading-relaxed text-[#4f5f77]">
						{contactInfo.title} atua em {contactInfo.slogan.toLowerCase()}, com
						profissionais que acumulam mais de 25 anos de experiência em
						operações industriais. A empresa está instalada em Sertãozinho, um
						dos principais polos do setor sucroenergético brasileiro.
					</p>
					<p className="text-sm leading-relaxed text-[#4f5f77]">
						O trabalho é conduzido com proximidade comercial, leitura técnica
						dos processos e busca constante por produtos que melhorem
						estabilidade, segurança e custo-benefício para clientes e parceiros.
					</p>
				</div>

				<div className="space-y-4">
					{timeline.map((item, index) => (
						<article
							key={item.title}
							className={`rq-fade-up rq-d${Math.min((index + 1) * 150, 400)} grid gap-4 border-l-4 border-[#8bc53f] bg-white px-5 py-5 shadow-sm sm:grid-cols-[110px_1fr]`}
						>
							<p className="font-['Outfit',sans-serif] text-xl font-semibold text-[#0f3316]">
								{item.year}
							</p>
							<div>
								<h3 className="font-['Outfit',sans-serif] text-lg font-semibold text-[#1a4db8]">
									{item.title}
								</h3>
								<p className="mt-1.5 text-sm leading-relaxed text-[#5a6478]">
									{item.text}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="space-y-7">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8bc53f]">
							Princípios
						</p>
						<h2 className="mt-1 font-['Outfit',sans-serif] text-3xl font-semibold text-[#0f3316]">
							Missão, visão e valores
						</h2>
					</div>
					<span
						className="hidden h-px flex-1 bg-[#8bc53f]/45 sm:block"
						aria-hidden="true"
					/>
				</div>

				<div className="grid gap-5 md:grid-cols-3">
					{pillars.map((pillar, index) => (
						<PillarCard
							key={pillar.title}
							delay={Math.min((index + 1) * 150, 400)}
							title={pillar.title}
							icon={pillar.icon}
						>
							{pillar.text}
						</PillarCard>
					))}
				</div>
			</section>

			<section className="relative overflow-hidden rounded-[28px] bg-[#071c0b] text-white shadow-[0_16px_45px_rgba(7,28,11,0.28)]">
				<img
					src={cloritoImg}
					alt="Produto químico Race Química"
					className="absolute right-0 top-0 hidden h-full w-1/2 object-cover opacity-35 lg:block"
				/>
				<div
					className="absolute inset-0 bg-gradient-to-r from-[#071c0b] via-[#071c0b]/95 to-[#071c0b]/72"
					aria-hidden="true"
				/>
				<div className="relative grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-14">
					<div>
						<p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#bedd8c]">
							Política da Qualidade
						</p>
						<h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-semibold leading-tight sm:text-4xl">
							Responsabilidade documentada em cada etapa.
						</h2>
					</div>
					<div className="space-y-5 text-sm leading-relaxed text-white/84">
						<p>
							Atender aos requisitos dos clientes e demais requisitos
							aplicáveis, mantendo controles que sustentem qualidade,
							rastreabilidade e confiança no fornecimento.
						</p>
						<ul className="grid gap-3 sm:grid-cols-2">
							<QualityItem>
								Melhoria contínua dos processos e controles internos.
							</QualityItem>
							<QualityItem>
								Produtos direcionados à eficiência em processos industriais.
							</QualityItem>
							<QualityItem>
								Equipe capacitada para atendimento técnico e comercial.
							</QualityItem>
							<QualityItem>
								Conduta responsável nas relações com clientes e parceiros.
							</QualityItem>
						</ul>
						<p className="border-t border-white/15 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#bedd8c]">
							Departamento de Qualidade Race Química
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

function PillarCard({
	title,
	icon,
	delay,
	children
}: {
	title: string;
	icon: ReactNode;
	delay: number;
	children: ReactNode;
}) {
	return (
		<article
			className={`rq-fade-up rq-d${delay} bg-white p-7 shadow-sm ring-1 ring-[#d1d8e3]`}
		>
			<div className="mb-8 flex items-center gap-4">
				<span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f3316] text-white shadow-[0_8px_22px_rgba(15,51,22,0.25)]">
					<svg
						className="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1.8}
						aria-hidden="true"
					>
						{icon}
					</svg>
				</span>
				<span className="h-px flex-1 bg-[#8bc53f]/45" aria-hidden="true" />
			</div>
			<h3 className="font-['Outfit',sans-serif] text-2xl font-semibold text-[#0f3316]">
				{title}
			</h3>
			<p className="mt-3 text-sm leading-relaxed text-[#5a6478]">{children}</p>
		</article>
	);
}

function QualityItem({ children }: { children: ReactNode }) {
	return (
		<li className="flex items-start gap-3">
			<span
				className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#8bc53f]"
				aria-hidden="true"
			/>
			<span>{children}</span>
		</li>
	);
}
