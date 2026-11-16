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
      className="relative z-20 isolate w-full bg-[#FAF8F5] text-[#491239] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden select-none border-t border-[#dfb16b]/25"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto">
        
        {/* ================= 1. SECTION HEADER ================= */}
        <div className="relative z-20 max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-3 mb-3">
           
            <span className="text-[12px] uppercase tracking-[0.24em] font-semibold text-[#9f732e] block">
              The Roots of Our Beginning
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] text-[#491239]">
            Ancestral trust. <br />
            <span className="text-[#dfb16b] font-normal">Captured in gold.</span>
          </h2>
        </div>

        {/* ================= 2. BENTO SHOWCASE GRID ================= */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Primary Image Tile (7 cols) */}
          <div className="lg:col-span-7 relative z-10 rounded-3xl overflow-hidden bg-[#F3ECE0] border border-[#dfb16b]/30 aspect-[16/10] sm:aspect-[16/9.5] shadow-[0_18px_40px_-15px_rgba(73,18,57,0.12)]">
            <div
              className="absolute -top-[10%] inset-x-0 h-[120%] w-full will-change-transform"
              style={{
                transform: `translate3d(0, ${parallax1}%, 0) scale(1.04)`,
                transition: "transform 0.1s linear",
              }}
            >
              <img
                src="/about/beginning.jpg"
                alt="The Beginning - Sri Gajkesari Jewellers"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#26071c]/80 via-[#26071c]/15 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 pointer-events-none">
              <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#dfb16b] block mb-1">
                Since Sri Ganesh
              </span>
              <p className="text-lg sm:text-xl font-medium tracking-tight text-[#f5e6cc] drop-shadow-sm">
                Decades of unbroken gold purity.
              </p>
            </div>
          </div>

          {/* Right Column: Secondary Image on Top + Dark Royal Plum Narrative Box on Bottom (5 cols) */}
          <div className="lg:col-span-5 relative z-20 flex flex-col justify-between gap-8">
            
            {/* Secondary Visual Card */}
            <div className="relative z-10 rounded-3xl overflow-hidden bg-[#F3ECE0] border border-[#dfb16b]/30 aspect-[16/9] shadow-[0_14px_34px_-14px_rgba(73,18,57,0.1)]">
              <div
                className="absolute -top-[10%] inset-x-0 h-[120%] w-full will-change-transform"
                style={{
                  transform: `translate3d(0, ${parallax2}%, 0) scale(1.04)`,
                  transition: "transform 0.1s linear",
                }}
              >
                <img
                  src="/about/roots.webp"
                  alt="Ancestral Goldsmithing - Sri Gajkesari Jewellers"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Dark Royal Plum Text Box Only + Champagne Gold Typography */}
            <div className="relative z-30 p-8 sm:p-10 rounded-3xl bg-[#491239] border border-[#dfb16b]/35 shadow-[0_24px_50px_-15px_rgba(73,18,57,0.3)] flex flex-col justify-center flex-1 space-y-4">
              <div className="flex items-center gap-2.5">
               
                <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#dfb16b]">
                  Generational Heritage
                </span>
              </div>

              <p className="text-base sm:text-lg text-[#dfb16b] font-medium tracking-tight leading-relaxed">
                Before Sri Gajkesari, there was Sri Ganesh Jewellery. For decades, families walked through our doors for their most sacred milestones.
              </p>

              <p className="text-xs sm:text-sm text-[#f5e6cc]/85 font-normal tracking-tight leading-relaxed">
                From quiet family heirlooms to grand celebrations, every piece we sculpt honors ancestral roots while embodying modern grace.
              </p>

              <div className="pt-2">
                <Link
                  href="/story"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-tight text-[#dfb16b] hover:text-white transition-colors group cursor-pointer"
                >
                  <span>Explore our lineage</span>
                  <ChevronRight className="w-4 h-4 text-[#dfb16b] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}