"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ParallaxVisualBreak() {
  const containerRef = useRef<HTMLElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const vh = window.innerHeight;

          // Only calculate when section is in or entering viewport
          if (rect.bottom >= 0 && rect.top <= vh) {
            // Distance relative to center of viewport
            const centerDiff = rect.top + rect.height / 2 - vh / 2;

            // Ultra-fast parallax multiplier (0.45x direct physical drift)
            // Moving in opposite direction produces a swift, high-speed glide
            setParallaxOffset(-centerDiff * 0.48);

            // Normalized 0 to 1 progress for staggered content reveals
            const progress = (vh - rect.top) / (vh + rect.height);
            setScrollProgress(Math.min(Math.max(progress, 0), 1));
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

  const isLabelRevealed = scrollProgress >= 0.18;
  const isTitleRevealed = scrollProgress >= 0.26;
  const isDescRevealed = scrollProgress >= 0.35;
  const isCtaRevealed = scrollProgress >= 0.44;

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[70vh] sm:h-[82vh] lg:h-[88vh] min-h-[560px] overflow-hidden bg-[#180410] select-none"
    >
      {/* ================= 1. HIGH-VELOCITY PARALLAX IMAGE BACKDROP ================= */}
      {/* Extra tall canvas (-40% buffer, 180% height) to prevent blank edges during fast scrolling */}
      <div className="absolute inset-x-0 -top-[40%] h-[180%] w-full pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.18)`,
            transition: "transform 0.04s linear", // Keeps micro-scroll ticks ultra smooth
          }}
        >
          <img
            src="/karigiri.jpg"
            alt="Sri Gajkesari Generational Devotion"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Cinematic rich plum/gold shading vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[#2b0821]/40 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(76,17,55,0.45)_0%,transparent_75%)] pointer-events-none" />
      </div>

      {/* ================= 2. ARCHITECTURAL EDITORIAL OVERLAY ================= */}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-end pb-14 sm:pb-20 lg:pb-24 pointer-events-none">
        <div className="max-w-2xl mr-auto space-y-4 sm:space-y-6">
          
          {/* Eyebrow Label */}
          <div className="overflow-hidden">
            <span
              className={`text-[9.5px] sm:text-[11px] uppercase tracking-[0.45em] text-[#f2dab0] font-semibold inline-flex items-center gap-2.5 transition-all duration-700 ease-out will-change-[transform,opacity] ${
                isLabelRevealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
            
              <span>A Living Heritage</span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#f2dab0]/50" />
            </span>
          </div>

          {/* Grand Headline with Stroked Foil Finish */}
          <h2
            className={`font-1 text-3xl sm:text-5xl lg:text-[66px] uppercase tracking-[0.04em] leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] transition-all duration-700 delay-100 ease-out will-change-[transform,opacity] ${
              isTitleRevealed
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Sculpted with <br />
            <span
              className="italic font-light tracking-[0.02em] text-transparent"
              style={{ WebkitTextStroke: "1.4px #f2dab0" }}
            >
              Unbroken Purity
            </span>
          </h2>

          {/* Micro Brand Narrative */}
          <p
            className={`font-2 text-xs sm:text-sm lg:text-[15px] text-stone-200/90 font-light tracking-wide leading-relaxed max-w-lg drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] transition-all duration-700 delay-200 ease-out will-change-[transform,opacity] ${
              isDescRevealed
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Every stroke of our karigar’s hammer and every deliberate link
            carries generational devotion. Born in Malleshwaram, designed to be
            passed across unbroken generations.
          </p>

          {/* Call to Action Link */}
          <div
            className={`pt-2 sm:pt-3 transition-all duration-700 delay-300 ease-out will-change-[transform,opacity] pointer-events-auto ${
              isCtaRevealed
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <Link
              href="/story"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-[#4C1137] hover:bg-[#FAF8F5] text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium transition-all duration-300 shadow-xl group active:scale-95"
            >
              <span>Explore The Process</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#4C1137]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}