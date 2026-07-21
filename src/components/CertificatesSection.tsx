import { certificateItems } from "../content/site";

export function CertificatesSection() {
	return (
		<section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white">
			<div
				className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8bc53f]/50 to-transparent"
				aria-hidden="true"
			/>
			<div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-10 lg:px-16">
				<div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
					<div className="rq-slide-right">
						<p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a4db8]">
							Certificações
						</p>
						<h2 className="mt-2 max-w-xl font-['Outfit',sans-serif] text-3xl font-semibold leading-tight text-[#0f3316] sm:text-4xl">
							Qualidade documentada para mercados com requisitos específicos
						</h2>
						<p className="mt-4 max-w-xl text-sm leading-relaxed text-[#576278]">
							A Race Química disponibiliza certificados para consulta técnica,
							apoiando auditorias, homologações e processos de compra com
							documentação rastreável.
						</p>
					</div>

					<div className="grid gap-5 sm:grid-cols-2">
						{certificateItems.map((item, i) => (
							<a
								key={item.title}
								href={item.file}
								target="_blank"
								rel="noreferrer"
								className={`rq-fade-up rq-d${Math.min((i + 2) * 100, 600)} group block rounded-lg border border-[#d9e2ef] bg-[#f8fbff] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8bc53f]/60 hover:bg-white hover:shadow-lg hover:shadow-[#0f3316]/8`}
							>
								<div className="flex items-start gap-5">
									<div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-[10px] border-[#07a64b] bg-white shadow-[0_8px_24px_rgba(7,166,75,0.12)] transition-transform duration-300 group-hover:scale-105">
										<div className="flex h-[74px] w-[74px] items-center justify-center overflow-hidden rounded-full bg-white">
											<img
												src={item.icon}
												alt={`Selo ${item.label}`}
												className="h-16 w-16 object-contain"
												loading="lazy"
											/>
										</div>
									</div>
									<div className="min-w-0 pt-2">
										<span className="inline-flex rounded-full bg-[#8bc53f]/14 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a6b2a]">
											PDF disponível
										</span>
										<h3 className="mt-3 font-['Outfit',sans-serif] text-xl font-semibold text-[#0f3316]">
											{item.title}
										</h3>
										<p className="mt-2 text-sm leading-relaxed text-[#576278]">
											{item.description}
										</p>
										<span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1a4db8]">
											Ver certificado
											<svg
												className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M13 7l5 5m0 0l-5 5m5-5H6"
												/>
											</svg>
										</span>
									</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
