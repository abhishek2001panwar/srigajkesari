"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, ShieldCheck, Gem, Headphones } from "lucide-react";

interface SplitLineProps {
  children: React.ReactNode;
  isRevealed: boolean;
  delayMs?: number;
  className?: string;
}

function SplitLine({
  children,
  isRevealed,
  delayMs = 0,
  className = "",
}: SplitLineProps) {
  return (
    <span className="block overflow-hidden py-[1px]">
      <span
        className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${className}`}
        style={{
          transform: isRevealed ? "translateY(0)" : "translateY(115%)",
          opacity: isRevealed ? 1 : 0,
          transitionDelay: `${delayMs}ms`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

export default function BuiltOnIntegrity() {
  const [revealedIndex, setRevealedIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const checkScrollPosition = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Direct viewport percentage calculation (100% compatible with Lenis & native scroll)
      // When top of section enters viewport:
      const scrolledIntoView = vh - rect.top;
      const progress = scrolledIntoView / (vh + rect.height * 0.4);

      // Fast tiered step triggers
      if (progress > 0.6) setRevealedIndex(4);
      else if (progress > 0.45) setRevealedIndex(3);
      else if (progress > 0.32) setRevealedIndex(2);
      else if (progress > 0.18) setRevealedIndex(1);
      else if (progress <= 0.05) setRevealedIndex(0);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(checkScrollPosition);
        ticking = true;
      }
    };

    // Global scroll listener catching Lenis window events
    window.addEventListener("scroll", onScroll, { passive: true });
    checkScrollPosition();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="integrity"
      ref={sectionRef}
      className="relative z-30 min-h-screen w-full text-white flex items-center justify-center overflow-hidden py-20 sm:py-28 px-6 sm:px-12 select-none"
    >
      {/* 1. Full-Bleed Pure Background Image (Zero dark/color overlays) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="https://srigajkesari.com/wp-content/uploads/2026/09/integrity.webp"
          alt="Sri Gajkesari Heritage Artistry"
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
      </div>

      {/* 2. Editorial Narrative with Fast Line-by-Line Unfurl */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow Label */}
        <div className="overflow-hidden mb-3">
          <span
            className={`text-[9px] sm:text-[10px] uppercase tracking-[0.45em] text-[#f2dab0] font-medium inline-flex items-center gap-2 drop-shadow-md transition-all duration-500 ease-out ${
              revealedIndex >= 1
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <span className="w-6 h-[1px] bg-[#f2dab0]/80" />
            Atelier Ethos
            <span className="w-6 h-[1px] bg-[#f2dab0]/80" />
          </span>
        </div>

        {/* Display Headline Line-by-Line */}
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl uppercase tracking-[0.08em] font-light leading-tight text-[#f2dab0] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] mb-6">
          <SplitLine isRevealed={revealedIndex >= 1} delayMs={50}>
            Built on integrity,
          </SplitLine>
          <SplitLine isRevealed={revealedIndex >= 1} delayMs={140}>
            <span className="italic font-normal tracking-[0.03em] text-white">
              shaped by hand
            </span>
          </SplitLine>
        </h2>

        {/* Hairline Divider */}
        <div
          className={`flex items-center justify-center gap-3 my-4 sm:my-6 w-full max-w-xs transition-all duration-500 ease-out ${
            revealedIndex >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#f2dab0]" />
          <div className="flex items-center gap-1.5 text-[#f2dab0] drop-shadow">
            <span className="w-1 h-1 rotate-45 border border-[#f2dab0]" />
           
            <span className="w-1 h-1 rotate-45 border border-[#f2dab0]" />
          </div>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#f2dab0]" />
        </div>

        {/* Narrative Lines */}
        <div className="space-y-1 font-body font-light text-stone-100 text-xs sm:text-[13px] md:text-sm leading-relaxed tracking-wider max-w-2xl mx-auto mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <SplitLine isRevealed={revealedIndex >= 2} delayMs={40}>
            Our lineage artisans rely on time-honored techniques; hand-carving
          </SplitLine>
          <SplitLine isRevealed={revealedIndex >= 2} delayMs={110}>
            sacred temple motifs, precision-setting uncut Kundan, and stringing
          </SplitLine>
          <SplitLine isRevealed={revealedIndex >= 3} delayMs={60}>
            luminous seed pearls to form heirlooms that resist replication.
          </SplitLine>
          <SplitLine
            isRevealed={revealedIndex >= 3}
            delayMs={130}
            className="text-stone-200 pt-1"
          >
            In an age of mechanical mass production, we remain true to deliberate human devotion.
          </SplitLine>
        </div>

        {/* 3. Three Brand Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 w-full max-w-2xl pt-6 border-t border-white/30">
          {/* Pillar 1 */}
          <div
            className={`flex flex-col items-center group transition-all duration-500 ease-out ${
              revealedIndex >= 4
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-12 h-12 rounded-full border border-[#f2dab0]/80 flex items-center justify-center mb-3 text-[#f2dab0] bg-black/40 backdrop-blur-xs group-hover:scale-105 transition-all duration-300 shadow-md">
              <ShieldCheck className="w-5 h-5 stroke-[1.4]" />
            </div>
            <h3 className="font-heading text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#f2dab0] font-normal drop-shadow">
              Absolute Purity
            </h3>
          </div>

          {/* Pillar 2 */}
          <div
            className={`flex flex-col items-center group transition-all duration-500 ease-out ${
              revealedIndex >= 4
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "80ms" }}
          >
            <div className="w-12 h-12 rounded-full border border-[#f2dab0]/80 flex items-center justify-center mb-3 text-[#f2dab0] bg-black/40 backdrop-blur-xs group-hover:scale-105 transition-all duration-300 shadow-md">
              <Gem className="w-5 h-5 stroke-[1.4]" />
            </div>
            <h3 className="font-heading text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#f2dab0] font-normal drop-shadow">
              Total Transparency
            </h3>
          </div>

          {/* Pillar 3 */}
          <div
            className={`flex flex-col items-center group transition-all duration-500 ease-out ${
              revealedIndex >= 4
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            <div className="w-12 h-12 rounded-full border border-[#f2dab0]/80 flex items-center justify-center mb-3 text-[#f2dab0] bg-black/40 backdrop-blur-xs group-hover:scale-105 transition-all duration-300 shadow-md">
              <Headphones className="w-5 h-5 stroke-[1.4]" />
            </div>
            <h3 className="font-heading text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#f2dab0] font-normal drop-shadow">
              Lifetime Support
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}