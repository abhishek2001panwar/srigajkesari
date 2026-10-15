"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AppleStyleHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rAFId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Track progress across a 200vh pinned sticky container
      const totalScrollable = rect.height - windowHeight;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

      setScrollProgress(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rAFId);
      rAFId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  // Apple-grade dynamic interpolations
  // 1. Text fades out as user scrolls
  const headlineOpacity = Math.max(1 - scrollProgress * 3.5, 0);
  const headlineScale = 1 - scrollProgress * 0.15;

  // 2. Image starts large, smoothly scales into an isolated floating product card
  const imageScale = 1.25 - scrollProgress * 0.35; // 1.25 -> 0.90
  const imageRadius = scrollProgress * 40; // 0px -> 40px rounded Apple card
  
  // 3. Feature callout pills appear as you lock into stage 2
  const featureOpacity = Math.min(Math.max((scrollProgress - 0.45) * 3, 0), 1);
  const featureY = (1 - featureOpacity) * 20;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220vh] bg-[#000000] text-[#F5F5F7]"
    >
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-between py-12 px-6">
        
        {/* Apple Micro-Header */}
        <div
          className="z-20 text-center transition-all duration-300"
          style={{
            opacity: headlineOpacity,
            transform: `scale(${headlineScale})`,
          }}
        >
          <span className="text-[12px] tracking-[0.2em] font-medium text-[#86868B] uppercase block mb-2">
            The Atelier Flagship
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#F5F5F7]">
            Sri Gajkesari.
          </h1>
          <p className="text-xl sm:text-2xl text-[#86868B] font-normal tracking-tight mt-1">
            Pure 22KT gold. Hand-set Kundan. Irreplaceable.
          </p>
        </div>

        {/* Central Cinematic Image Canvas */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div
            className="w-full h-full sm:w-[90vw] sm:h-[82vh] overflow-hidden will-change-transform shadow-2xl"
            style={{
              transform: `scale(${imageScale})`,
              borderRadius: `${imageRadius}px`,
            }}
          >
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/home-hero.webp"
              alt="Sri Gajkesari Masterpiece"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>
        </div>

        {/* Apple Style Feature Specs (Revealed on Scroll) */}
        <div
          className="z-20 w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center pointer-events-none pb-4"
          style={{
            opacity: featureOpacity,
            transform: `translateY(${featureY}px)`,
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              100%
            </span>
            <span className="text-xs text-[#86868B] mt-1 tracking-wide font-normal">
              BIS Hallmarked Purity
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              GIA / IGI
            </span>
            <span className="text-xs text-[#86868B] mt-1 tracking-wide font-normal">
              Certified Solitaires
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Zero
            </span>
            <span className="text-xs text-[#86868B] mt-1 tracking-wide font-normal">
              Machine Replication
            </span>
          </div>
        </div>

        {/* Apple Floating Pill Actions */}
        <div className="z-20 flex items-center gap-4">
          <Link
            href="/collection"
            className="px-6 py-2.5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs sm:text-sm font-normal rounded-full transition-all duration-200 active:scale-95"
          >
            Explore Collections
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-1 text-[#2997FF] hover:underline text-xs sm:text-sm font-normal group"
          >
            <span>Book private viewing</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}