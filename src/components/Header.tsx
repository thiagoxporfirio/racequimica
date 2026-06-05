import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { contactInfo, navigationItems } from '../content/site';
import { SiteLogo } from './SiteLogo';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-[#d7dde8] text-[#0b1f58] shadow-[inset_0_0_0_1px_rgba(130,145,170,0.32)]'
        : 'text-[#e4ebf4] hover:bg-white/12 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-[#b9c2d1] bg-linear-to-r from-[#c7ceda] via-[#edf1f7] to-[#d0d7e3] text-[11px] uppercase tracking-[0.2em] text-[#0b1f58]">
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p>{contactInfo.slogan}</p>
          <a
            href={contactInfo.whatsapp}
            className="rounded-full bg-[#8bc53f] px-3 py-1 font-semibold text-[#10223f] transition hover:bg-[#9ed35d]"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-b border-[#8bc53f]/45 bg-linear-to-r from-[#071945]/95 via-[#0e2b66]/95 to-[#23375f]/95 text-white shadow-lg backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <SiteLogo />

          <nav className="hidden flex-1 justify-center md:flex" aria-label="Navegacao principal desktop">
            <div className="flex items-center gap-1 rounded-full border border-[#b8c2d2]/45 bg-[#d7dde8]/10 p-1 shadow-[inset_0_0_0_1px_rgba(213,222,236,0.08)]">
              {navigationItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#93a5c1] text-[#dbe3ef] transition hover:border-[#8bc53f] hover:text-[#8bc53f]"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#93a5c1] text-[#dbe3ef] transition hover:border-[#8bc53f] hover:text-[#8bc53f]"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M4.75 3a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.25 8h3V21h-3V8ZM9 8h2.88v1.84h.04c.4-.76 1.38-1.84 2.84-1.84 3.04 0 3.6 2 3.6 4.6V21h-3v-6.94c0-1.66-.03-3.8-2.32-3.8-2.33 0-2.69 1.82-2.69 3.68V21H9V8Z" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="main-nav"
            onClick={() => setMobileOpen((current) => !current)}
          >
            <span className="sr-only">Abrir menu</span>
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </span>
          </button>
        </div>

        <div
          id="main-nav"
          className={`${mobileOpen ? 'max-h-85 border-t border-[#bac4d2] py-4' : 'max-h-0 py-0'} mx-auto w-full max-w-7xl overflow-hidden px-4 transition-all duration-300 md:hidden`}
        >
          <nav className="flex flex-col gap-2 rounded-2xl border border-[#bcc5d2] bg-linear-to-b from-[#eef2f7] to-[#dbe2ec] p-3 text-[#23324c] shadow-xl" aria-label="Navegacao principal mobile">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-[#243858] text-white' : 'text-[#23324c] hover:bg-[#ccd4df]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-1 flex items-center gap-2">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#adb9ca] text-[#213354]"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#adb9ca] text-[#213354]"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M4.75 3a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.25 8h3V21h-3V8ZM9 8h2.88v1.84h.04c.4-.76 1.38-1.84 2.84-1.84 3.04 0 3.6 2 3.6 4.6V21h-3v-6.94c0-1.66-.03-3.8-2.32-3.8-2.33 0-2.69 1.82-2.69 3.68V21H9V8Z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
