"use client";

import SmoothScroll from "@/components/layout/SmoothScroll";
import CursorGlow from "@/components/layout/CursorGlow";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Loader from "@/components/layout/Loader";
import Navbar from "@/components/layout/Navbar";

export default function PortfolioShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[100] bg-accent-violet text-white px-4 py-2 rounded-lg -translate-y-20 focus:translate-y-0 transition-transform"
        style={{ opacity: 0, pointerEvents: 'none' }}
        onFocus={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.pointerEvents = 'auto'; }}
        onBlur={(e) => { e.currentTarget.style.opacity = '0'; e.currentTarget.style.pointerEvents = 'none'; }}
      >
        Skip to content
      </a>
      <Loader />
      <SmoothScroll>
        <div className="overflow-x-hidden w-full max-w-[100vw]">
          <div className="noise-overlay" aria-hidden="true" />
          <CursorGlow />
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
        </div>
      </SmoothScroll>
    </>
  );
}
