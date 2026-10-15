"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OurBeginning() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const totalTravel = vh + rect.height;
      const currentScroll = vh - rect.top;
      const progress = Math.min(Math.max(currentScroll / totalTravel, 0), 1);

      setScrollProgress(progress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax1 = (scrollProgress - 0.5) * -8;
  const parallax2 = (scrollProgress - 0.5) * 8;

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative z-20 isolate w-full bg-[#FAF8F5] text-stone-900 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden select-none border-t border-stone-200"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto">
        
        {/* ================= 1. SECTION HEADER ================= */}
        <div className="relative z-20 max-w-3xl mb-14 sm:mb-18">
          <span className="text-[12px] uppercase tracking-[0.24em] font-semibold text-[#4C1137] block mb-3">
            The Roots of Our Beginning
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] text-stone-900">
            Ancestral trust. <br />
            <span className="text-stone-500 font-normal">Captured in gold.</span>
          </h2>
        </div>

        {/* ================= 2. BENTO SHOWCASE GRID ================= */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Primary Image Tile (7 cols) */}
          <div className="lg:col-span-7 relative z-10 rounded-3xl overflow-hidden bg-stone-200 aspect-[16/10] sm:aspect-[16/9.5] shadow-xs">
            <div
              className="absolute -top-[10%] inset-x-0 h-[120%] w-full will-change-transform"
              style={{
                transform: `translate3d(0, ${parallax1}%, 0) scale(1.04)`,
                transition: "transform 0.1s linear",
              }}
            >
              <img
                src="https://srigajkesari.com/wp-content/uploads/2026/09/beginning.webp"
                alt="The Beginning - Sri Gajkesari Jewellers"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 pointer-events-none text-white">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-stone-300 block mb-1">
                Since Sri Ganesh
              </span>
              <p className="text-lg sm:text-xl font-medium tracking-tight text-white drop-shadow-sm">
                Decades of unbroken gold purity.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Card + Secondary Image (5 cols) */}
          <div className="lg:col-span-5 relative z-20 flex flex-col justify-between gap-8">
            
            {/* High-Priority White Content Card */}
            <div className="relative z-30 p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-center flex-1 space-y-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#4C1137]">
                Generational Heritage
              </span>

              <p className="text-base sm:text-lg text-stone-900 font-medium tracking-tight leading-relaxed">
                Before Sri Gajkesari, there was Sri Ganesh Jewellery. For decades, families walked through our doors for their most sacred milestones.
              </p>

              <p className="text-xs sm:text-sm text-stone-600 font-normal tracking-tight leading-relaxed">
                From quiet family heirlooms to grand celebrations, every piece we sculpt honors ancestral roots while embodying modern grace.
              </p>

              <div className="pt-2">
                <Link
                  href="/story"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-tight text-[#4C1137] hover:underline group cursor-pointer"
                >
                  <span>Explore our lineage</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Secondary Visual Card */}
            <div className="relative z-10 rounded-3xl overflow-hidden bg-stone-200 aspect-[16/9] shadow-xs">
              <div
                className="absolute -top-[10%] inset-x-0 h-[120%] w-full will-change-transform"
                style={{
                  transform: `translate3d(0, ${parallax2}%, 0) scale(1.04)`,
                  transition: "transform 0.1s linear",
                }}
              >
                <img
                  src="https://srigajkesari.com/wp-content/uploads/2026/09/roots.webp"
                  alt="Ancestral Goldsmithing - Sri Gajkesari Jewellers"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}