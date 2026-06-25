import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";

export function SiteLayout() {
	return (
		<div className="min-h-screen bg-[#e8edf3] font-['Sora',sans-serif] text-slate-900">
			{/* Ambient background layer */}
			<div
				className="pointer-events-none fixed inset-0 -z-10"
				style={{
					background: `
            radial-gradient(ellipse 70% 50% at 10% 0%, rgba(11,31,88,0.13) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 88% 90%, rgba(139,197,63,0.11) 0%, transparent 55%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(208,216,228,0.45) 0%, transparent 70%),
            linear-gradient(160deg, #dce3ed 0%, #e8edf3 40%, #edf2f7 100%)
          `
				}}
				aria-hidden="true"
			/>
			{/* Subtle grid texture overlay */}
			<div
				className="pointer-events-none fixed inset-0 -z-10 opacity-[0.025]"
				style={{
					backgroundImage: `linear-gradient(#0e2b66 1px, transparent 1px), linear-gradient(90deg, #0e2b66 1px, transparent 1px)`,
					backgroundSize: "48px 48px"
				}}
				aria-hidden="true"
			/>
			<ScrollToTop />
			<Header />
			<main className="mx-auto w-full max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:px-8">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
