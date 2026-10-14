"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function HeroWithLoader() {
  const [phase, setPhase] = useState<"loading" | "expanding" | "ready">("loading");
  const [loadPercent, setLoadPercent] = useState(0);

  useEffect(() => {
    // 1. Simulate asset loading progression
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

  useEffect(() => {
    if (loadPercent === 100) {
      // 2. Trigger expansion: expands height and width simultaneously into full viewport
      const expandTimer = setTimeout(() => {
        setPhase("expanding");
      }, 200);

      // 3. Reveal typography and interactive controls
      const readyTimer = setTimeout(() => {
        setPhase("ready");
      }, 1200);

      return () => {
        clearTimeout(expandTimer);
        clearTimeout(readyTimer);
      };
    }
  }, [loadPercent]);

  const isExpanded = phase === "expanding" || phase === "ready";
  const isContentReady = phase === "ready";

  const headlineRow1 = "Crafted For Every";
  const headlineRow2 = "Celebration";
  const description =
    "Hand-carved temple motifs, unclouded solitaires, and uncut royal Kundan-Polki shaped with deliberate human devotion.";

  const words1 = headlineRow1.split(" ");
  const descWords = description.split(" ");

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden select-none">
      
      {/* ================= 1. CENTERING STAGE FOR GROWING HERO IMAGE (DUAL-AXIS EXPANSION) ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className={`relative overflow-hidden will-change-[width,height,transform,border-radius] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isExpanded
              ? "w-full h-full rounded-none"
              : "w-[300px] sm:w-[420px] md:w-[500px] h-[190px] sm:h-[260px] md:h-[310px] rounded-2xl shadow-2xl border border-white/20"
          }`}
        >
          {/* Hero Image */}
          <img
            src="https://srigajkesari.com/wp-content/uploads/2026/09/home-hero.webp"
            alt="Sri Gajkesari Fine Jewellery"
            className={`w-full h-full object-cover object-[center_30%] sm:object-center transition-transform duration-[1400ms] ease-out ${
              isExpanded ? "scale-100" : "scale-115"
            }`}
          />

          {/* Vignettes (Subtle on loader, rich and deep on full-screen) */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
              isExpanded
                ? "bg-gradient-to-t from-black/60 via-black/40 to-black/20 opacity-80"
                : "bg-black/30 opacity-80"
            }`}
          />
          <div
            className={`absolute inset-0 bg-[#2b0821]/35 mix-blend-multiply pointer-events-none transition-opacity duration-1000 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* ================= 2. LOADER STAMP & PROGRESS (Fades out when expanding) ================= */}
      <div
        className={`absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-center transition-all duration-700 ease-out ${
          isExpanded ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#f2dab0] font-semibold">
            Sri Gajkesari Jewellers
          </span>
          <span className="text-white/60 font-mono text-[9.5px] uppercase tracking-[0.3em]">
            Malleshwaram Flagship &bull; {loadPercent}%
          </span>

          {/* Hairline Progress Gauge */}
          <div className="w-24 h-[1px] bg-white/20 overflow-hidden relative mt-1">
            <div
              className="absolute left-0 top-0 h-full bg-[#f2dab0] transition-all duration-300 ease-out"
              style={{ width: `${loadPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* ================= 3. HERO CONTENT REVEAL (Triggers once full screen) ================= */}
      <div className="relative z-10 w-full h-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-end pb-16 sm:pb-20 lg:pb-24 pointer-events-none">
        <div className="max-w-6xl mr-auto">
          
          {/* Eyebrow */}
          <div className="overflow-hidden mb-3 sm:mb-4">
            <span
              className={`text-[9.5px] sm:text-[11px] uppercase tracking-[0.45em] text-[#f2dab0] font-medium inline-flex items-center gap-2.5 transition-all duration-700 ease-out will-change-transform ${
                isContentReady
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <span>Royal Karigari &bull; Malleshwaram</span>
            </span>
          </div>

          {/* Dual-Tone Headline */}
          <h1 className="font-1 text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-normal uppercase tracking-[0.04em] leading-[1.02] mb-4 sm:mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            <span className="block overflow-hidden py-[2px]">
              {words1.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden mr-[0.24em] last:mr-0 align-top"
                >
                  <span
                    className="inline-block text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity,filter]"
                    style={{
                      transform: isContentReady ? "translate3d(0, 0, 0)" : "translate3d(0, 118%, 0)",
                      opacity: isContentReady ? 1 : 0,
                      filter: isContentReady ? "blur(0px)" : "blur(4px)",
                      transitionDelay: `${100 + i * 80}ms`,
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </span>

            <span className="block overflow-hidden py-[2px]">
              <span
                className="inline-block italic font-light tracking-[0.02em] text-transparent transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity,filter]"
                style={{
                  transform: isContentReady ? "translate3d(0, 0, 0)" : "translate3d(0, 120%, 0)",
                  opacity: isContentReady ? 1 : 0,
                  filter: isContentReady ? "blur(0px)" : "blur(4px)",
                  WebkitTextStroke: "1.5px #f2dab0",
                  transitionDelay: "380ms",
                }}
              >
                {headlineRow2}
              </span>
            </span>
          </h1>

          {/* Staggered Narrative */}
          <p className="font-2 text-xs sm:text-sm md:text-[15px] text-stone-200/90 font-light tracking-wide leading-relaxed mb-8 sm:mb-10 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {descWords.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden mr-[0.22em] last:mr-0 align-top"
              >
                <span
                  className="inline-block transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity,filter]"
                  style={{
                    transform: isContentReady ? "translate3d(0, 0, 0)" : "translate3d(0, 125%, 0)",
                    opacity: isContentReady ? 1 : 0,
                    filter: isContentReady ? "blur(0px)" : "blur(3px)",
                    transitionDelay: `${460 + i * 20}ms`,
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </p>

          {/* Interactive CTAs */}
          <div
            className={`flex items-center gap-4 flex-wrap transition-all duration-700 ease-out will-change-[transform,opacity] pointer-events-auto ${
              isContentReady
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "850ms" }}
          >
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 bg-white text-[#4C1137] hover:bg-[#FAF8F5] text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium transition-all duration-300 shadow-xl group active:scale-95"
            >
              <span>Explore Creations</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#4C1137]" />
            </Link>

            <Link
              href="/story"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 bg-black/35 hover:bg-black/55 text-white border border-white/40 hover:border-white text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium transition-all duration-300 backdrop-blur-md active:scale-95"
            >
              <span>Our Story</span>
            </Link>
          </div>

        </div>
      </div>

      {/* ================= 4. CORNER SCROLL CUE ================= */}
      <div
        className={`absolute bottom-8 right-6 sm:right-10 lg:right-16 z-10 hidden sm:flex items-center gap-3 transition-opacity duration-1000 ${
          isContentReady ? "opacity-75" : "opacity-0"
        }`}
        style={{ transitionDelay: "1050ms" }}
      >
        <span className="text-[9.5px] uppercase tracking-[0.34em] font-mono text-white/80">
          Scroll Down
        </span>
        <div className="w-10 h-[1px] bg-white/40" />
      </div>

    </div>
  );
}