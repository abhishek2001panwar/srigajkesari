"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroWithLoader() {
  const [phase, setPhase] = useState<"loading" | "expanding" | "ready">("loading");
  const [loadPercent, setLoadPercent] = useState(0);

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

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden select-none bg-[#000000] text-[#F5F5F7]">
      
      {/* ================= 1. CENTERING STAGE (IMAGE TO FULLSCREEN) ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className={`relative overflow-hidden will-change-[width,height,transform,border-radius] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isExpanded
              ? "w-full h-full rounded-none"
              : "w-[300px] sm:w-[420px] md:w-[500px] h-[190px] sm:h-[260px] md:h-[310px] rounded-3xl shadow-2xl border border-white/10"
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

          {/* Minimal Contrast Gradients */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
              isExpanded
                ? "bg-gradient-to-t from-black via-black/45 to-black/20 opacity-90"
                : "bg-black/30 opacity-70"
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
            <span className="font-mono text-[10px] tracking-tight text-[#86868B]">
              {loadPercent}%
            </span>
          </div>

          {/* Hairline Progress Gauge */}
          <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="absolute left-0 top-0 h-full bg-[#f2dab0] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${loadPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* ================= 3. HERO CONTENT ================= */}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-end pb-10 sm:pb-12 lg:pb-14 pointer-events-none">
        <div className="w-full max-w-6xl mr-auto">
          
          {/* Eyebrow */}
          <div className="overflow-hidden mb-2.5 sm:mb-3">
            <span
              className={`text-[12px] uppercase tracking-[0.24em] font-medium text-[#f2dab0]/85 block transition-all duration-700 ease-out will-change-transform ${
                isContentReady
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              The Atelier Flagship &bull; Malleshwaram
            </span>
          </div>

          {/* Refined Heading (Medium Weight, Less Bold) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal sm:font-medium tracking-tight leading-[1.05] text-white mb-3 sm:mb-4">
            <span className="block overflow-hidden py-1">
              <span
                className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]"
                style={{
                  transform: isContentReady ? "translate3d(0, 0, 0)" : "translate3d(0, 110%, 0)",
                  opacity: isContentReady ? 1 : 0,
                  transitionDelay: "100ms",
                }}
              >
                Crafted for every
              </span>
            </span>

            <span className="block overflow-hidden py-1">
              <span
                className="inline-block font-light text-[#f2dab0] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]"
                style={{
                  transform: isContentReady ? "translate3d(0, 0, 0)" : "translate3d(0, 110%, 0)",
                  opacity: isContentReady ? 1 : 0,
                  transitionDelay: "220ms",
                }}
              >
                celebration.
              </span>
            </span>
          </h1>

          {/* Narrative Paragraph */}
          <div className="overflow-hidden mb-6 sm:mb-8">
            <p
              className="text-sm sm:text-base md:text-lg text-stone-300 font-light tracking-tight leading-relaxed max-w-2xl lg:max-w-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]"
              style={{
                transform: isContentReady ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)",
                opacity: isContentReady ? 1 : 0,
                transitionDelay: "340ms",
              }}
            >
              Pure 22KT gold, certified unclouded solitaires, and uncut Kundan-Polki shaped with deliberate human devotion.
            </p>
          </div>

          {/* Action Buttons (Brand Palette: Deep Plum & Champagne Gold) */}
          <div
            className={`flex items-center gap-5 flex-wrap transition-all duration-700 ease-out will-change-[transform,opacity] pointer-events-auto ${
              isContentReady
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "460ms" }}
          >
            <Link
              href="/collection"
              className="px-7 py-3 bg-[#4C1137] hover:bg-[#380b28] text-white text-xs sm:text-sm font-medium tracking-wide rounded-full transition-all duration-200 active:scale-95 shadow-lg border border-white/10"
            >
              Explore Collections
            </Link>

            <Link
              href="/story"
              className="flex items-center gap-1.5 text-[#f2dab0] hover:text-white hover:underline text-xs sm:text-sm font-normal tracking-wide transition-colors group"
            >
              <span>Our  story</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* ================= 4. CORNER SCROLL CUE ================= */}
      <div
        className={`absolute bottom-6 sm:bottom-8 right-6 sm:right-10 lg:right-16 z-10 hidden sm:flex items-center gap-2 transition-opacity duration-1000 ${
          isContentReady ? "opacity-60" : "opacity-0"
        }`}
        style={{ transitionDelay: "700ms" }}
      >
        <span className="text-[11px] tracking-tight text-[#86868B]">
          Scroll to explore
        </span>
        <ChevronRight className="w-3.5 h-3.5 text-[#86868B] rotate-90" />
      </div>

    </div>
  );
}