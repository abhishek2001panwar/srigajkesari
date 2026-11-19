"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";

const HERO_IMAGES = [
  {
    src: "/heronew/3.webp",
    alt: "Sri Gajkesari — Devatri Temple Gold",
    position: "object-[center_65%]",
  },
  {
    src: "/heronew/1.webp",
    alt: "Sri Gajkesari Fine Jewellery — Royal Collection",
    position: "object-[center_80%]",
  },
  {
    src: "/heronew/4.webp",
    alt: "Sri Gajkesari — Ratnavali Gemstones",
    position: "object-[center_75%]",
  },
  {
    src: "/heronew/5.webp",
    alt: "Sri Gajkesari — Heritage Kasu Malai",
    position: "object-[center_80%]",
  },
  {
    src: "/heronew/6.webp",
    alt: "Sri Gajkesari — Niharika Solitaires",
    position: "object-[center_80%]",
  },
  {
    src: "/heronew/8.webp",
    alt: "Sri Gajkesari — Viraasat Antique Heirlooms",
    position: "object-[center_80%]",
  },
  {
    src: "/heronew/9.webp",
    alt: "Sri Gajkesari — Purusa Men's Couture",
    position: "object-[center_35%]",
  },
];

export default function HeroWithLoader() {
  const [phase, setPhase] = useState<"loading" | "expanding" | "ready">("loading");
  const [loadPercent, setLoadPercent] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  // Initial Loader Progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  // Expansion & Content Reveal Choreography
  useEffect(() => {
    if (loadPercent === 100) {
      const expandTimer = setTimeout(() => {
        setPhase("expanding");
      }, 200);

      const readyTimer = setTimeout(() => {
        setPhase("ready");
      }, 1100);

      return () => {
        clearTimeout(expandTimer);
        clearTimeout(readyTimer);
      };
    }
  }, [loadPercent]);

  const isExpanded = phase === "expanding" || phase === "ready";
  const isContentReady = phase === "ready";

  // Auto-advance carousel every 5 seconds once hero is ready
  useEffect(() => {
    if (!isContentReady || isMobileExpanded) return;

    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, [isContentReady, activeSlide, isMobileExpanded]);

  return (
    <div className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden select-none bg-[#12030d] text-[#F5F5F7]">

      {/* ================= 1. FULLSCREEN CAROUSEL STAGE ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className={`relative overflow-hidden will-change-[width,height,transform,border-radius] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isExpanded
              ? "w-full h-full rounded-none"
              : "w-[280px] sm:w-[420px] md:w-[500px] h-[180px] sm:h-[260px] md:h-[310px] rounded-3xl shadow-2xl border border-white/10"
          }`}
        >
          {HERO_IMAGES.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 w-full h-full object-cover ${slide.position} transition-opacity duration-[1500ms] ease-out ${
                  isActive ? "opacity-100 z-[1]" : "opacity-0 z-0"
                }`}
              />
            );
          })}

          {/* Subtle Bottom Readability Gradient */}
          <div
            className={`absolute inset-0 z-[2] pointer-events-none transition-opacity duration-1000 ${
              isExpanded
                ? isMobileExpanded
                  ? "bg-gradient-to-t from-black/95 via-black/65 sm:via-black/30 to-transparent opacity-100"
                  : "bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-100"
                : "bg-black/25 opacity-70"
            }`}
          />
        </div>
      </div>

      {/* ================= 2. MINIMAL PILL LOADER ================= */}
      <div
        className={`absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-center transition-all duration-600 ease-out ${
          isExpanded ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex flex-col items-center px-6 py-4 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/15 shadow-2xl space-y-2.5">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium tracking-tight text-white/90">
              Sri Gajkesari
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="font-mono text-[10px] tracking-tight text-white/60">
              {loadPercent}%
            </span>
          </div>

          <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="absolute left-0 top-0 h-full bg-[#dfb16b] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${loadPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* ================= 3. HERO CONTENT ================= */}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 flex flex-col justify-end pb-16 sm:pb-12 lg:pb-14 pointer-events-none">
        <div className="w-full max-w-5xl mr-auto">

          {/* Eyebrow */}
          <div className="overflow-hidden mb-2 sm:mb-3">
            <span
              className={`text-[10px] sm:text-[12px] uppercase tracking-[0.22em] sm:tracking-[0.26em] font-medium text-[#f2dab0]/90 block transition-all duration-700 ease-out will-change-transform ${
                isContentReady
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              A Legacy of Trust. An Art of Royalty.
            </span>
          </div>

          {/* Refined Heading */}
          <h1 className="text-[36px] sm:text-6xl md:text-7xl lg:text-[82px] font-normal tracking-tight leading-[1.06] sm:leading-[1.04] text-white mb-3.5 sm:mb-5">
            <span className="block overflow-hidden py-0.5">
              <span
                className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]"
                style={{
                  transform: isContentReady ? "translate3d(0, 0, 0)" : "translate3d(0, 110%, 0)",
                  opacity: isContentReady ? 1 : 0,
                  transitionDelay: "100ms",
                }}
              >
                A Celebration of
              </span>
            </span>

            <span className="block overflow-hidden py-0.5">
              <span
                className="inline-block font-light text-[#dfb16b] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]"
                style={{
                  transform: isContentReady ? "translate3d(0, 0, 0)" : "translate3d(0, 110%, 0)",
                  opacity: isContentReady ? 1 : 0,
                  transitionDelay: "220ms",
                }}
              >
                Craftsmanship.
              </span>
            </span>
          </h1>

          {/* Editorial Narrative Block (2nd paragraph tucked behind Read More on mobile) */}
          <div className="overflow-hidden mb-5 sm:mb-9 max-w-2xl pointer-events-auto">
            <div
              className="space-y-2.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]"
              style={{
                transform: isContentReady ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)",
                opacity: isContentReady ? 1 : 0,
                transitionDelay: "340ms",
              }}
            >
              <p className="text-[13px] sm:text-base md:text-[17px] text-[#f5e6cc] font-normal tracking-tight leading-[1.6] text-pretty">
                Discover exquisite 22KT gold, fine diamonds, timeless temple jewellery, classic Victorian designs, signature KGF creations, and the grandeur of Jadau, Kundan, and Polki.
              </p>

              <p
                className={`${
                  isMobileExpanded ? "block" : "hidden sm:block"
                } text-[13px] sm:text-base md:text-[17px] text-[#f5e6cc]/95 font-normal tracking-tight leading-[1.6] text-pretty`}
              >
                At Sri Gajkesari Jewellers, every creation brings together the richness of Indian heritage, exceptional craftsmanship, and an appreciation for timeless design.
              </p>

              {/* Mobile-Only Read More / Read Less Toggle */}
              <div className="sm:hidden pt-0.5">
                <button
                  type="button"
                  onClick={() => setIsMobileExpanded((prev) => !prev)}
                  aria-expanded={isMobileExpanded}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#dfb16b] hover:text-white py-1 transition-colors cursor-pointer"
                >
                  <span>{isMobileExpanded ? "Read Less" : "Read More"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#dfb16b] transition-transform duration-300 ${
                      isMobileExpanded ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex items-center gap-4 sm:gap-5 flex-wrap transition-all duration-700 ease-out will-change-[transform,opacity] pointer-events-auto ${
              isContentReady
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "460ms" }}
          >
            <Link
              href="/collection"
              className="px-6 sm:px-7 py-2.5 sm:py-3 bg-[#491239] hover:bg-[#380b28] text-white text-xs sm:text-sm font-medium tracking-wide rounded-full transition-all duration-200 active:scale-95 shadow-lg border border-[#dfb16b]/30"
            >
              Explore Our Collections
            </Link>

            <Link
              href="/story"
              className="flex items-center gap-1.5 text-[#dfb16b] hover:text-white hover:underline text-xs sm:text-sm font-normal tracking-wide transition-colors group"
            >
              <span>Discover Our Story</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* ================= 4. CAROUSEL DOTS ================= */}
      <div
        className={`absolute bottom-4 sm:bottom-8 left-5 sm:left-auto sm:right-10 lg:right-16 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-700 ${
          isContentReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ transitionDelay: "600ms" }}
        role="tablist"
        aria-label="Hero showcase slides"
      >
        {HERO_IMAGES.map((_, idx) => {
          const isActive = idx === activeSlide;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={isActive}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                isActive
                  ? "w-5 sm:w-6 bg-[#dfb16b]"
                  : "w-1.5 bg-white/35 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>

    </div>
  );
}