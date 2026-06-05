import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="rounded-3xl border border-[#c4ccdb] bg-linear-to-br from-white to-[#e9eef6] p-8 text-center shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5b6578]">404</p>
      <h1 className="mt-3 font-['Outfit',sans-serif] text-4xl text-[#102b63]">Pagina nao encontrada</h1>
      <p className="mx-auto mt-3 max-w-xl text-sm text-[#566277]">
        A rota que voce tentou acessar ainda nao existe nesta fase inicial do projeto.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-[#8bc53f] px-6 py-3 text-sm font-semibold text-[#10223f] transition hover:bg-[#9ed45f]"
      >
        Voltar para Home
      </Link>
    </section>
  );
}
