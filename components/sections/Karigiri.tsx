"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ParallaxVisualBreak() {
  const containerRef = useRef<HTMLElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const vh = window.innerHeight;

          if (rect.bottom >= 0 && rect.top <= vh) {
            const centerDiff = rect.top + rect.height / 2 - vh / 2;
            setParallaxOffset(-centerDiff * 0.22);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-20 w-full min-h-[580px] sm:min-h-[660px] lg:h-[80vh] overflow-hidden bg-[#26071c] text-[#f5e6cc] select-none flex items-end"
    >
      {/* ================= 1. PARALLAX CINEMATIC BACKDROP ================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div
          className="absolute inset-x-0 -top-[25%] h-[150%] w-full will-change-transform"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.08)`,
            transition: "transform 0.08s linear",
          }}
        >
          <img
            src="/karigiri.jpg"
            alt="Sri Gajkesari Generational Devotion"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Targeted Bottom-Left Royal Plum Gradient (Top & Right Stay 100% Clear, Zero Blur) */}
            </div>

      {/* ================= 2. BOTTOM-LEFT EDITORIAL OVERLAY ================= */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 pt-24 pointer-events-none">
        <div className="max-w-2xl mr-auto">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
           
            <span className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#dfb16b] block">
              A Living Heritage
            </span>
          </div>

          {/* Display Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.06] text-white mb-5 drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
            Sculpted with <br />
            <span className="text-[#dfb16b] font-normal">unbroken purity.</span>
          </h2>

          {/* Micro Narrative */}
          <p className="text-sm sm:text-base md:text-lg text-[#f5e6cc]/95 font-normal tracking-tight leading-relaxed max-w-xl mb-8">
            Every stroke of our karigar’s hammer carries generational devotion. Born in Malleshwaram, designed to be passed across unbroken generations.
          </p>

          {/* Champagne Gold & Royal Plum Actions */}
          <div className="flex items-center gap-6 flex-wrap pointer-events-auto">
            <Link
              href="/story"
              className="px-7 py-3 bg-[#dfb16b] hover:bg-[#e8c284] text-[#26071c] text-xs sm:text-sm font-semibold tracking-tight rounded-full transition-all duration-200 active:scale-95 shadow-md"
            >
              Explore the process
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#dfb16b] hover:text-white transition-colors group"
            >
              <span>Meet the karigars</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}