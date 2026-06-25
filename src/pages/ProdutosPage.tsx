import { SectorStrip } from "../components/SectorStrip";

export function ProdutosPage() {
	return (
		<div>
			<section className="pb-10 pt-8">
				<p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8bc53f]">
					Onde atuamos
				</p>
				<h1 className="mt-2 font-['Outfit',sans-serif] text-4xl font-bold text-[#0f3316] sm:text-5xl">
					Setores de atuação
				</h1>
				<p className="mt-4 max-w-xl text-sm leading-relaxed text-[#5a6478]">
					Selecione um setor para conhecer a linha de produtos Race Química
					desenvolvida especialmente para ele.
				</p>
			</section>

			<SectorStrip />
		</div>
	);
}
