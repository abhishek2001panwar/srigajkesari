"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CraftVisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.bottom >= 0 && rect.top <= vh) {
        const centerOffset = rect.top + rect.height / 2 - vh / 2;
        setParallaxY(-centerOffset * 0.18);
      }
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

  return (
    <section
      ref={sectionRef}
      id="karigar-vision"
      className="relative z-20 w-full bg-[#FFFFFF] text-[#1D1D1F] py-24 sm:py-36 px-6 sm:px-10 lg:px-16 select-none border-t border-black/5"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* ================= 1. APPLE EDITORIAL HEADER ================= */}
        <div className="w-full max-w-3xl text-center mb-14 sm:mb-20">
          <span className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#86868B] block mb-3">
            Master Karigari
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.06] text-[#1D1D1F] mb-6">
            Hundreds of hours. <br />
            <span className="text-[#86868B]">A single vision.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#86868B] font-normal tracking-tight leading-relaxed max-w-2xl mx-auto">
            Machine replication cannot mirror human devotion. From sacred Nakshi hand-sculpting to bespoke Kundan setting, every piece is shaped as an irreproducible heirloom.
          </p>
        </div>

        {/* ================= 2. CINEMATIC ROUNDED CANVAS STAGE ================= */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[640px] rounded-3xl overflow-hidden bg-stone-100 border border-black/[0.04] shadow-sm">
          <div
            className="absolute -top-[15%] inset-x-0 h-[130%] w-full will-change-transform"
            style={{
              transform: `translate3d(0, ${parallaxY}px, 0) scale(1.05)`,
              transition: "transform 0.08s linear",
            }}
          >
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/Frame-66.webp"
              alt="Sri Gajkesari Karigari Devotion"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* ================= 3. APPLE SPECS & ACTION LINK ================= */}
        <div className="w-full max-w-4xl mt-14 sm:mt-18 pt-10 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-8 sm:gap-12">
            <div>
              <span className="block text-2xl sm:text-3xl font-semibold tracking-tight text-black">
                100%
              </span>
              <span className="text-[11px] sm:text-xs text-[#86868B] tracking-tight">
                Hand-Sculpted
              </span>
            </div>
            <div className="w-[1px] h-8 bg-black/10" />
            <div>
              <span className="block text-2xl sm:text-3xl font-semibold tracking-tight text-black">
                Zero
              </span>
              <span className="text-[11px] sm:text-xs text-[#86868B] tracking-tight">
                Machine Casting
              </span>
            </div>
          </div>

          <Link
            href="/story"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-tight text-[#4C1137] hover:underline group"
          >
            <span>Discover the atelier process</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}