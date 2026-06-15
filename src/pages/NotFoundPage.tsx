import { Link } from "react-router-dom";

export function NotFoundPage() {
	return (
		<section
			className="rq-scale-in relative overflow-hidden rounded-3xl p-12 text-center shadow-sm"
			style={{
				background: "linear-gradient(135deg, #f5f8fc 0%, #edf2f8 100%)",
				border: "1px solid rgba(194,202,216,0.7)"
			}}
		>
			<div
				className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
				style={{ background: "rgba(139,197,63,0.1)" }}
				aria-hidden="true"
			/>
			<div className="relative">
				<p
					className="font-['Outfit',sans-serif] text-7xl font-bold"
					style={{
						background: "linear-gradient(135deg, #0e2b66 0%, #8bc53f 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text"
					}}
				>
					404
				</p>
				<h1 className="mt-3 font-['Outfit',sans-serif] text-3xl font-semibold text-[#102b63]">
					Página não encontrada
				</h1>
				<p className="mx-auto mt-3 max-w-xl text-sm text-[#566277]">
					A rota que você tentou acessar ainda não existe nesta fase inicial do
					projeto.
				</p>
				<Link
					to="/"
					className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#8bc53f] px-6 py-3 text-sm font-semibold text-[#071846] shadow-[0_2px_12px_rgba(139,197,63,0.3)] transition-all duration-200 hover:bg-[#9ed45f] hover:shadow-[0_4px_20px_rgba(139,197,63,0.45)] active:scale-95"
				>
					← Voltar para Home
				</Link>
			</div>
		</section>
	);
}
