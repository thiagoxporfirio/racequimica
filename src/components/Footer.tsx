import { NavLink } from 'react-router-dom';
import { contactInfo, navigationItems } from '../content/site';
import { SiteLogo } from './SiteLogo';

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-[#8bc53f]/50 bg-linear-to-br from-[#071846] via-[#112b60] to-[#353f53] text-slate-100">
      <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#8bc53f]/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-[#cfd5df]/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="space-y-5">
          <SiteLogo />
          <p className="max-w-md text-sm leading-relaxed text-slate-300">
            {contactInfo.title} | {contactInfo.slogan}. {contactInfo.about}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={contactInfo.whatsapp}
              className="inline-flex rounded-full bg-[#8bc53f] px-5 py-2 text-sm font-semibold text-[#10223f] transition hover:bg-[#9dd05d]"
            >
              Conversar no WhatsApp
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-[#cbd4e0]/55 bg-[#d7dde8]/10 px-5 py-2 text-sm font-semibold text-[#e8edf5] transition hover:border-[#8bc53f] hover:text-[#b9df85]"
            >
              Instagram
            </a>
          </div>
        </div>

        <nav className="space-y-2" aria-label="Menu no rodape">
          <h3 className="font-['Outfit',sans-serif] text-lg uppercase tracking-[0.12em] text-[#b7d98b]">Navegacao</h3>
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="block text-sm text-[#dfe6f0] transition hover:text-[#8bc53f]"
            >
              {item.label}
            </NavLink>
          ))}
          <a href="#" className="block text-sm text-[#dfe6f0] transition hover:text-[#8bc53f]">
            Politica de Privacidade
          </a>
        </nav>

        <div className="space-y-3 rounded-2xl border border-[#c8d1df]/25 bg-[#d5dce8]/10 p-5">
          <h3 className="font-['Outfit',sans-serif] text-lg uppercase tracking-[0.12em] text-[#b7d98b]">Contato</h3>
          <p className="text-sm text-[#eff3f9]">{contactInfo.phone}</p>
          <p className="text-sm text-[#ced8e7]">{contactInfo.address}</p>
        </div>
      </div>
    </footer>
  );
}
