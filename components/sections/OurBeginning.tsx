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
  const parallax2 = (scrollProgress - 0.5) * 6;

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

        {/* ================= 2. FULL-STAGE IMAGE WITH BOTTOM-RIGHT OVERLAY CARD ================= */}
        <div className="relative z-10 w-full rounded-3xl overflow-hidden bg-[#26071c] border border-[#dfb16b]/30 min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] shadow-[0_24px_60px_-15px_rgba(73,18,57,0.18)] flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          
          {/* Primary Full-Stage Background Image (/about/beginning.jpg) */}
          <div
            className="absolute -top-[10%] inset-x-0 h-[120%] w-full will-change-transform pointer-events-none"
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

          {/* Subtle Bottom & Corner Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f0416]/85 via-[#26071c]/20 to-transparent pointer-events-none" />

          {/* Top-Left / Bottom-Left Caption Anchor */}
          <div className="relative z-20 pointer-events-none lg:mt-auto lg:max-w-sm">
            <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#dfb16b] block mb-1">
              Since Sri Ganesh
            </span>
            <p className="text-lg sm:text-xl font-medium tracking-tight text-[#f5e6cc] drop-shadow-sm">
              Decades of unbroken gold purity.
            </p>
          </div>

          {/* Bottom-Right Corner Card: Secondary Image (/about/roots.webp) Behind the Text Box */}
          <div className="relative lg:absolute lg:bottom-8 lg:right-8 z-30 mt-8 lg:mt-0 w-full lg:w-[440px] xl:w-[480px] rounded-2xl overflow-hidden bg-[#26071c] border border-[#dfb16b]/40 shadow-[0_24px_54px_-12px_rgba(0,0,0,0.65)] group">
            
            {/* Secondary Image Layered Behind the Text Box */}
            <div
              className="absolute -top-[10%] inset-x-0 h-[120%] w-full will-change-transform pointer-events-none"
              style={{
                transform: `translate3d(0, ${parallax2}%, 0) scale(1.06)`,
                transition: "transform 0.1s linear",
              }}
            >
              <img
                src="/about/roots.webp"
                alt="Ancestral Goldsmithing - Sri Gajkesari Jewellers"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>

            {/* Deep Royal Plum Veil for Crisp Champagne Gold Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#24061a]/95 via-[#491239]/85 to-[#491239]/65 pointer-events-none" />

            {/* Foreground Narrative Copy */}
            <div className="relative z-10 p-7 sm:p-8 space-y-3.5">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#dfb16b] block">
                Generational Heritage
              </span>

              <p className="text-base sm:text-[17px] text-[#dfb16b] font-medium tracking-tight leading-relaxed">
                Before Sri Gajkesari, there was Sri Ganesh Jewellery. For decades, families walked through our doors for their most sacred milestones.
              </p>

              <p className="text-xs sm:text-sm text-[#f5e6cc]/90 font-normal tracking-tight leading-relaxed">
                From quiet family heirlooms to grand celebrations, every piece we sculpt honors ancestral roots while embodying modern grace.
              </p>

              <div className="pt-1.5">
                <Link
                  href="/story"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-tight text-[#dfb16b] hover:text-white transition-colors group/link cursor-pointer"
                >
                  <span>Explore our lineage</span>
                  <ChevronRight className="w-4 h-4 text-[#dfb16b] group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}