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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-violet focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
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
