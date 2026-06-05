import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { contactInfo, navigationItems } from '../content/site';
import { SiteLogo } from './SiteLogo';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-white/15 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18),0_1px_3px_rgba(0,0,0,0.25)]'
        : 'text-[#c8d5e8] hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/* Topbar */}
      <div
        className="border-b border-[#b2bece]/60 transition-all duration-300"
        style={{
          background: 'linear-gradient(90deg, #c3cad7 0%, #eaf0f8 50%, #cdd4e0 100%)',
        }}
      >
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0b1f58]/80">
            {contactInfo.slogan}
          </p>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#8bc53f] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#071846] shadow-sm transition-all duration-200 hover:bg-[#9dd05d] hover:shadow-[0_2px_8px_rgba(139,197,63,0.45)] active:scale-95"
          >
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.122 1.532 5.852L0 24l6.294-1.612A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.682-.497-5.228-1.368l-.374-.218-3.886.996 1.032-3.78-.24-.39A9.964 9.964 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b border-[#8bc53f]/40 text-white transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_4px_24px_rgba(7,24,70,0.35)] backdrop-blur-md'
            : 'shadow-[0_2px_12px_rgba(7,24,70,0.2)]'
        }`}
        style={{
          background: scrolled
            ? 'rgba(7,25,69,0.96)'
            : 'linear-gradient(135deg, #071945 0%, #0e2b66 60%, #1e3460 100%)',
        }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <SiteLogo />

          {/* Desktop nav pill */}
          <nav className="hidden flex-1 justify-center md:flex" aria-label="Navegação principal">
            <div
              className="flex items-center gap-0.5 rounded-full p-1"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {navigationItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Social icons */}
          <div className="hidden items-center gap-2 md:flex">
            <SocialIcon href={contactInfo.instagram} label="Instagram">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
            </SocialIcon>
            <SocialIcon href={contactInfo.linkedin} label="LinkedIn">
              <path d="M4.75 3a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.25 8h3V21h-3V8ZM9 8h2.88v1.84h.04c.4-.76 1.38-1.84 2.84-1.84 3.04 0 3.6 2 3.6 4.6V21h-3v-6.94c0-1.66-.03-3.8-2.32-3.8-2.33 0-2.69 1.82-2.69 3.68V21H9V8Z" />
            </SocialIcon>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition hover:bg-white/12 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="main-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menu</span>
            <span className="flex flex-col items-center gap-1.5" aria-hidden="true">
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="main-nav"
          className={`mx-auto w-full max-w-7xl overflow-hidden px-4 transition-all duration-300 ease-in-out md:hidden ${
            mobileOpen ? 'max-h-96 border-t border-white/10 py-4' : 'max-h-0 py-0'
          }`}
        >
          <nav
            className="flex flex-col gap-1 rounded-2xl border border-[#bcc5d2]/30 bg-white/8 p-3 shadow-xl backdrop-blur-sm"
            aria-label="Navegação mobile"
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/15 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]'
                      : 'text-[#c8d5e8] hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
              <SocialIcon href={contactInfo.instagram} label="Instagram" small>
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </SocialIcon>
              <SocialIcon href={contactInfo.linkedin} label="LinkedIn" small>
                <path d="M4.75 3a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.25 8h3V21h-3V8ZM9 8h2.88v1.84h.04c.4-.76 1.38-1.84 2.84-1.84 3.04 0 3.6 2 3.6 4.6V21h-3v-6.94c0-1.66-.03-3.8-2.32-3.8-2.33 0-2.69 1.82-2.69 3.68V21H9V8Z" />
              </SocialIcon>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function SocialIcon({
  href,
  label,
  children,
  small,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-full border border-white/20 text-[#c8d5e8] transition-all duration-200 hover:border-[#8bc53f] hover:text-[#8bc53f] hover:shadow-[0_0_12px_rgba(139,197,63,0.25)] ${
        small ? 'h-9 w-9' : 'h-10 w-10'
      }`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-current">
        {children}
      </svg>
    </a>
  );
}
