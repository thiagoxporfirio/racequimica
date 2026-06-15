import { NavLink } from "react-router-dom";
import { contactInfo, navigationItems } from "../content/site";
import { SiteLogo } from "./SiteLogo";

export function Footer() {
	return (
		<footer
			className="relative mt-24 overflow-hidden text-slate-100"
			style={{
				background:
					"linear-gradient(155deg, #071c0b 0%, #0f3316 45%, #0a2410 80%, #112a14 100%)",
				borderTop: "1px solid rgba(139,197,63,0.35)"
			}}
		>
			{/* Decorative glows */}
			<div
				className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full blur-3xl"
				style={{ background: "rgba(26,77,184,0.12)" }}
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full blur-3xl"
				style={{ background: "rgba(139,197,63,0.10)" }}
				aria-hidden="true"
			/>
			{/* Top accent line */}
			<span
				className="absolute left-0 top-0 block h-[2px] w-full"
				style={{
					background:
						"linear-gradient(90deg, transparent 0%, #8bc53f 30%, #bedd8c 60%, transparent 100%)"
				}}
				aria-hidden="true"
			/>

			<div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
				{/* Brand column */}
				<div className="space-y-5">
					<SiteLogo />
					<p className="max-w-sm text-sm leading-relaxed text-slate-300/80">
						{contactInfo.title} — {contactInfo.slogan}. {contactInfo.about}
					</p>
					<div className="flex flex-wrap gap-3 pt-1">
						<a
							href={contactInfo.whatsapp}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-full bg-[#1a4db8] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(26,77,184,0.3)] transition-all duration-200 hover:bg-[#2560d4] hover:shadow-[0_4px_18px_rgba(26,77,184,0.45)] active:scale-95"
						>
							<svg
								className="h-4 w-4"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
								<path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.122 1.532 5.852L0 24l6.294-1.612A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.682-.497-5.228-1.368l-.374-.218-3.886.996 1.032-3.78-.24-.39A9.964 9.964 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
							</svg>
							WhatsApp
						</a>
						<a
							href={contactInfo.instagram}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 rounded-full border border-[#8bc53f]/35 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-[#8bc53f]/70 hover:text-[#bedd8c] active:scale-95"
						>
							Instagram
						</a>
					</div>
				</div>

				{/* Nav column */}
				<nav className="space-y-3" aria-label="Menu no rodapé">
					<h3
						className="font-['Outfit',sans-serif] text-[11px] font-bold uppercase tracking-[0.22em]"
						style={{ color: "#8bc53f" }}
					>
						Navegação
					</h3>
					<ul className="space-y-2">
						{navigationItems.map(item => (
							<li key={item.to}>
								<NavLink
									to={item.to}
									className={({ isActive }) =>
										`group flex items-center gap-2 text-sm transition-all duration-200 ${
											isActive
												? "text-[#bedd8c]"
												: "text-slate-300/80 hover:text-slate-100"
										}`
									}
								>
									<span
										className="inline-block h-px w-4 bg-current opacity-40 transition-all duration-200 group-hover:w-6 group-hover:opacity-80"
										aria-hidden="true"
									/>
									{item.label}
								</NavLink>
							</li>
						))}
						<li>
							<a
								href="#"
								className="group flex items-center gap-2 text-sm text-slate-300/80 transition-all duration-200 hover:text-slate-100"
							>
								<span
									className="inline-block h-px w-4 bg-current opacity-40 transition-all duration-200 group-hover:w-6 group-hover:opacity-80"
									aria-hidden="true"
								/>
								Política de Privacidade
							</a>
						</li>
					</ul>
				</nav>

				{/* Contact column */}
				<div
					className="space-y-4 rounded-2xl p-5"
					style={{
						background: "rgba(255,255,255,0.04)",
						border: "1px solid rgba(139,197,63,0.15)",
						boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)"
					}}
				>
					<h3
						className="font-['Outfit',sans-serif] text-[11px] font-bold uppercase tracking-[0.22em]"
						style={{ color: "#8bc53f" }}
					>
						Contato
					</h3>
					<div className="space-y-2.5 text-sm">
						<p className="flex items-center gap-2 text-slate-200">
							<svg
								className="h-4 w-4 shrink-0 text-[#8bc53f]"
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
							{contactInfo.phone}
						</p>
						<p className="flex items-start gap-2 text-slate-300/75 leading-relaxed">
							<svg
								className="mt-0.5 h-4 w-4 shrink-0 text-[#8bc53f]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
							{contactInfo.address}
						</p>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="relative border-t border-white/8">
				<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
					<p className="text-xs text-slate-400/60">
						© {new Date().getFullYear()} Race Química. Todos os direitos
						reservados.
					</p>
					<p className="text-xs text-slate-400/40">Sertãozinho — SP</p>
				</div>
			</div>
		</footer>
	);
}
