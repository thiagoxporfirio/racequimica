import { PageHero } from "../components/PageHero";
import { contactInfo } from "../content/site";

export function ContatoPage() {
	return (
		<div className="space-y-14">
			<PageHero
				eyebrow="Contato"
				title="Entre em contato"
				description="Fale com a Race Química para conhecer produtos, condições comerciais e suporte técnico especializado."
			/>

			<section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
				{/* Info card */}
				<article className="rq-scale-in space-y-5 rounded-3xl border border-[#c2ccda]/70 bg-white p-7 shadow-sm">
					<div>
						<p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">
							Nosso time
						</p>
						<h2 className="mt-1.5 font-['Outfit',sans-serif] text-2xl font-semibold text-[#0f3316]">
							Fale com a Race Química
						</h2>
					</div>

					<div className="space-y-3 text-sm">
						<InfoRow
							icon={
								<svg
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>
							}
						>
							{contactInfo.phone}
						</InfoRow>
						<InfoRow
							icon={
								<svg
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
									/>
								</svg>
							}
						>
							{contactInfo.address}
						</InfoRow>
					</div>

					{/* Social */}
					<div className="flex items-center gap-2 pt-1">
						<ContactSocialBtn href={contactInfo.instagram} label="Instagram">
							<path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
						</ContactSocialBtn>
						<ContactSocialBtn href={contactInfo.linkedin} label="LinkedIn">
							<path d="M4.75 3a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.25 8h3V21h-3V8ZM9 8h2.88v1.84h.04c.4-.76 1.38-1.84 2.84-1.84 3.04 0 3.6 2 3.6 4.6V21h-3v-6.94c0-1.66-.03-3.8-2.32-3.8-2.33 0-2.69 1.82-2.69 3.68V21H9V8Z" />
						</ContactSocialBtn>
					</div>

					{/* Hours */}
					<div
						className="rounded-2xl border border-[#c5cfe0]/60 p-4 text-sm"
						style={{
							background: "linear-gradient(135deg, #f5f8fc 0%, #edf2f8 100%)"
						}}
					>
						<p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4d5e78]">
							Horários
						</p>
						<ul className="space-y-1.5 text-[#4f5d73]">
							<li className="flex justify-between">
								<span>Horário comercial</span>
								<span className="font-medium text-[#0f3316]">08h – 18h</span>
							</li>
							<li className="flex justify-between">
								<span>Atendimento técnico</span>
								<span className="font-medium text-[#0f3316]">Sob demanda</span>
							</li>
							<li className="flex justify-between">
								<span>Resposta média</span>
								<span className="font-medium text-[#0f3316]">
									Até 1 dia útil
								</span>
							</li>
						</ul>
						<a
							href={contactInfo.instagram}
							target="_blank"
							rel="noreferrer"
							className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#1a4db8] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#2560d4] hover:shadow-[0_2px_12px_rgba(26,77,184,0.4)] active:scale-95"
						>
							Abrir Instagram oficial →
						</a>
					</div>
				</article>

				{/* Form */}
				<form
					className="rq-fade-up rq-d200 space-y-4 rounded-3xl border border-[#c2cbda]/70 bg-white p-7 shadow-sm"
					onSubmit={e => e.preventDefault()}
				>
					<div>
						<p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">
							Mensagem
						</p>
						<h2 className="mt-1.5 font-['Outfit',sans-serif] text-2xl font-semibold text-[#0f3316]">
							Envie sua solicitação
						</h2>
					</div>

					<FormField
						label="Nome completo"
						type="text"
						placeholder="Seu nome"
						autoComplete="name"
					/>
					<FormField
						label="Email"
						type="email"
						placeholder="voce@empresa.com"
						autoComplete="email"
					/>
					<FormField
						label="Telefone"
						type="tel"
						placeholder="(16) 0000-0000"
						autoComplete="tel"
					/>

					<label className="block text-sm font-medium text-[#4f5c71]">
						Mensagem *
						<textarea
							className="mt-1.5 min-h-32 w-full rounded-xl border border-[#c3ccda] bg-white px-4 py-3 text-sm text-[#1f2d44] outline-none transition-all duration-200 focus:border-[#8bc53f] focus:ring-2 focus:ring-[#8bc53f]/25 placeholder:text-[#aab4c4]"
							placeholder="Descreva sua necessidade..."
						/>
					</label>

					<button
						type="submit"
						className="w-full rounded-full bg-[#1a4db8] px-7 py-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(26,77,184,0.3)] transition-all duration-200 hover:bg-[#2560d4] hover:shadow-[0_4px_20px_rgba(26,77,184,0.45)] active:scale-[0.98] sm:w-auto"
					>
						Enviar mensagem
					</button>
				</form>
			</section>

			{/* Map */}
			<section className="rq-fade-up rq-d300 space-y-4 rounded-3xl border border-[#c2cbda]/70 bg-white p-6 shadow-sm">
				<div>
					<p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8bc53f]">
						Localização
					</p>
					<h2 className="mt-1 font-['Outfit',sans-serif] text-2xl font-semibold text-[#0f3316]">
						Race Química — Sertãozinho, SP
					</h2>
					<p className="mt-1 text-sm text-[#566278]">{contactInfo.address}</p>
				</div>
				<div className="overflow-hidden rounded-2xl border border-[#c3ccda]/60 shadow-inner">
					<iframe
						title="Mapa da Race Química"
						src={contactInfo.mapEmbedUrl}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="h-80 w-full"
					/>
				</div>
			</section>
		</div>
	);
}

function InfoRow({
	icon,
	children
}: {
	icon: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<div className="flex items-start gap-3 rounded-xl border border-[#e0e7f0] bg-[#f5f8fc] px-3.5 py-2.5 text-[#4f5d73]">
			<span className="mt-0.5 shrink-0 text-[#0f3316]">{icon}</span>
			<span className="leading-relaxed">{children}</span>
		</div>
	);
}

function FormField({
	label,
	type,
	placeholder,
	autoComplete
}: {
	label: string;
	type: string;
	placeholder: string;
	autoComplete: string;
}) {
	return (
		<label className="block text-sm font-medium text-[#4f5c71]">
			{label} *
			<input
				type={type}
				className="mt-1.5 w-full rounded-xl border border-[#c3ccda] bg-white px-4 py-3 text-sm text-[#1f2d44] outline-none transition-all duration-200 focus:border-[#8bc53f] focus:ring-2 focus:ring-[#8bc53f]/25 placeholder:text-[#aab4c4]"
				placeholder={placeholder}
				autoComplete={autoComplete}
			/>
		</label>
	);
}

function ContactSocialBtn({
	href,
	label,
	children
}: {
	href: string;
	label: string;
	children: React.ReactNode;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			aria-label={label}
			className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9eacc3] text-[#0f3316] transition-all duration-200 hover:border-[#8bc53f] hover:text-[#8bc53f] hover:shadow-[0_0_10px_rgba(139,197,63,0.2)]"
		>
			<svg
				viewBox="0 0 24 24"
				aria-hidden="true"
				className="h-5 w-5 fill-current"
			>
				{children}
			</svg>
		</a>
	);
}
