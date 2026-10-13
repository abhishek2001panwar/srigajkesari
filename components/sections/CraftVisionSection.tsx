"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    <span className="block overflow-hidden py-[2px]">
      <span
        className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${className}`}
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

export default function CraftVisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealedIndex, setRevealedIndex] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollAnimation = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Distance scrolled through viewport
      const scrolled = vh - rect.top;
      const totalDistance = vh + rect.height;
      const rawProgress = Math.min(Math.max(scrolled / totalDistance, 0), 1);

      // Deep parallax: amplified range (-18% to +18%) for noticeable depth
      const offset = (rawProgress - 0.5) * 36;
      setParallaxOffset(offset);

      // Fast-triggering scroll progress
      const acceleratedProgress = Math.min(rawProgress * 2.4, 1);
      setIndicatorHeight(Math.round(acceleratedProgress * 100));

      if (rawProgress >= 0.25) setRevealedIndex(4);
      else if (rawProgress >= 0.17) setRevealedIndex(3);
      else if (rawProgress >= 0.1) setRevealedIndex(2);
      else if (rawProgress >= 0.03) setRevealedIndex(1);
      else setRevealedIndex(0);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollAnimation);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollAnimation();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="karigar-vision"
      className="relative w-full h-[85vh] sm:h-[90vh] overflow-hidden text-white flex flex-col justify-end items-center pb-16 sm:pb-24 px-6 sm:px-12 select-none"
    >
      {/* 1. Extended Frame with Height Buffer to Allow Deep Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[20%] inset-x-0 h-[140%] w-full will-change-transform transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(0, ${parallaxOffset}%, 0) scale(1.08)`,
          }}
        >
          <img
            src="https://srigajkesari.com/wp-content/uploads/2026/09/Frame-66.webp"
            alt="Handcrafting Devotion - Sri Gajkesari Karigars"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Ambient Darkened Vignette for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
      </div>

      {/* 2. Precision Scroll Line Counter */}
      <div className="absolute top-8 right-8 sm:right-14 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/90 font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          0{Math.min(Math.max(Math.round((indicatorHeight / 100) * 8) + 1, 1), 9)}
        </span>
        <div className="w-[1px] h-14 bg-white/30 relative overflow-hidden backdrop-blur-xs">
          <div
            className="w-full bg-white transition-all duration-75 ease-out shadow-sm"
            style={{ height: `${indicatorHeight}%` }}
          />
        </div>
      </div>

      {/* 3. Center-Bottom Content: Unfurls Quickly on Scroll */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Label */}
        <div className="overflow-hidden mb-3">
          <span
            className={`text-[10px] sm:text-xs uppercase tracking-[0.38em] text-white font-medium inline-flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-all duration-400 ease-out ${
              revealedIndex >= 1
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <span className="w-8 h-[1px] bg-white/70" />
            The Master Karigars
            <span className="w-8 h-[1px] bg-white/70" />
          </span>
        </div>

        {/* Display Heading Line-by-Line */}
        <h2 className="font-1 text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-wide text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] mb-4">
          <SplitLine isRevealed={revealedIndex >= 1} delayMs={20}>
            Hundreds of hours.
          </SplitLine>
          <SplitLine isRevealed={revealedIndex >= 2} delayMs={40}>
            <span className="italic font-light tracking-normal text-[#f2dab0]">
              A single vision.
            </span>
          </SplitLine>
        </h2>

        {/* Narrative Description Dispersed Line-by-Line */}
        <div className="font-2 text-white/95 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light tracking-wide mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] space-y-1">
          <SplitLine isRevealed={revealedIndex >= 2} delayMs={30}>
            Machine precision cannot replicate human devotion. Our master karigars
          </SplitLine>
          <SplitLine isRevealed={revealedIndex >= 3} delayMs={50}>
            use age-old techniques-Nakshi carving, Meenakari enameling, and
          </SplitLine>
          <SplitLine isRevealed={revealedIndex >= 3} delayMs={70}>
            hand-setting uncut gems-to ensure no two Sri Gajkesari pieces are identical.
          </SplitLine>
        </div>

        {/* Action Button Unfurl */}
        <div className="overflow-hidden">
          <div
            className={`transition-all duration-500 ease-out ${
              revealedIndex >= 4
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <Link
              href="/story"
              className="inline-flex items-center gap-2.5 px-8 py-3 bg-white text-[#4C1137] hover:bg-[#4C1137] hover:text-white text-[11px] uppercase tracking-[0.24em] font-medium transition-all duration-300 shadow-2xl group border border-white cursor-pointer active:scale-95"
            >
              <span>Discover The Process</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}