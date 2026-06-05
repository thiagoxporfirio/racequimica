import { Link } from 'react-router-dom';
import antiespumanteImg from '../assets/Antiespumante.jpeg';
import antibioticosImg from '../assets/antibioticos.jpeg';
import cloritoImg from '../assets/cloritoDeSodio.jpeg';
import estoqueImg from '../assets/estoqueFabrica.jpeg';
import monenImg from '../assets/MONEN-PRO.jpg';
import rcFlokImg from '../assets/rcFlok.jpg';
import { PageHero } from '../components/PageHero';
import { contactInfo, fakeStats } from '../content/site';

const products = [
  { title: 'Clorito de Sodio', image: cloritoImg },
  { title: 'Antibioticos Solidos e Liquidos', image: antibioticosImg },
  { title: 'Linha MONEN-PRO', image: monenImg },
  { title: 'RC FLOK', image: rcFlokImg },
  { title: 'Antiespumante e Dispersante', image: antiespumanteImg },
];

export function HomePage() {
  return (
    <div className="space-y-14">
      <PageHero
        eyebrow="Race Quimica"
        title="Quimica de alta performance para fermentacao e processos industriais"
        description="Profissionais com mais de 25 anos de experiencia, operacao em Sertaozinho-SP e linha completa para performance tecnica no campo e na industria."
      />

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="relative overflow-hidden rounded-3xl border border-[#8bc53f]/35 bg-linear-to-br from-[#071846] via-[#0e2d67] to-[#2d3952] p-7 text-white shadow-xl shadow-[#0f2350]/30">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#d4dbe7]/40" aria-hidden="true" />
          <div className="absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-[#8bc53f]/22 blur-3xl" aria-hidden="true" />
          <p className="relative text-sm uppercase tracking-[0.2em] text-[#bbdb8f]">Visao geral</p>
          <h2 className="relative mt-3 font-['Outfit',sans-serif] text-3xl">{contactInfo.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#e7edf6]">
            {contactInfo.slogan}. {contactInfo.about} Especialidade em linhas para fermentacao, controle
            microbiologico e ganho de eficiencia operacional.
          </p>
          <p className="relative mt-4 text-sm text-[#d7e0ee]">{contactInfo.address}</p>
          <div className="relative mt-6 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="rounded-full bg-[#8bc53f] px-6 py-3 text-sm font-semibold text-[#10223f] transition hover:bg-[#9fd362]"
            >
              Solicitar proposta
            </Link>
            <Link
              to="/sobre-nos"
              className="rounded-full border border-[#d4dbe7]/45 px-6 py-3 text-sm font-semibold text-[#e5ebf5] transition hover:border-[#8bc53f] hover:bg-white/10"
            >
              Conhecer a historia
            </Link>
          </div>
        </article>

        <aside className="overflow-hidden rounded-3xl border border-[#c5cedb] bg-white p-2 shadow-lg shadow-[#55688f]/15">
          <img src={estoqueImg} alt="Estoque e logistica Race Quimica" className="h-full w-full rounded-2xl object-cover" />
        </aside>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {fakeStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-[#c7cfdd] bg-linear-to-br from-white to-[#e9eef5] p-5 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#4c5970]">{stat.label}</p>
            <p className="mt-3 font-['Outfit',sans-serif] text-3xl text-[#0f2b64]">{stat.value}</p>
            <span className="mt-4 block h-1 w-14 rounded-full bg-[#8bc53f]" />
          </article>
        ))}
      </section>

      <section className="space-y-5">
        <h2 className="font-['Outfit',sans-serif] text-3xl text-[#0e2b64]">Linha de produtos</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.title} className="group overflow-hidden rounded-2xl border border-[#c3ccda] bg-white">
              <div className="h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#5a6478]">Produto 0{index + 1}</p>
                <h3 className="mt-1 font-['Outfit',sans-serif] text-xl text-[#102b62]">{product.title}</h3>
                <p className="mt-2 text-sm text-[#59647a]">Imagem real da linha Race Quimica.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
