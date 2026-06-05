import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#e8edf3] font-['Sora',sans-serif] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_16%,rgba(11,31,88,0.18),transparent_36%),radial-gradient(circle_at_84%_82%,rgba(139,197,63,0.14),transparent_30%),linear-gradient(120deg,rgba(208,216,228,0.55),rgba(236,241,248,0.9))]" />
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
