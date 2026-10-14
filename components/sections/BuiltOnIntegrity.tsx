"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, Gem, Headphones, Sparkles } from "lucide-react";

interface EditorialLineProps {
  children: React.ReactNode;
  progress: number;
  threshold: number;
  delayMs?: number;
  className?: string;
}

function EditorialLine({
  children,
  progress,
  threshold,
  delayMs = 0,
  className = "",
}: EditorialLineProps) {
  const isTriggered = progress >= threshold;

  return (
    <span className="block overflow-hidden py-[1.5px]">
      <span
        className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${className}`}
        style={{
          transform: isTriggered ? "translateY(0)" : "translateY(115%)",
          opacity: isTriggered ? 1 : 0,
          transitionDelay: `${delayMs}ms`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

const pillars = [
  {
    icon: ShieldCheck,
    title: "Absolute Purity",
    subtitle: "100% BIS Hallmarked 22KT / 18KT gold with zero compromise.",
  },
  {
    icon: Gem,
    title: "Total Transparency",
    subtitle: "GIA & IGI certified solitaires, unclouded weights and honest karigari.",
  },
  {
    icon: Headphones,
    title: "Lifetime Sanctuary",
    subtitle: "Archival cleaning, bespoke redesign and buyback clarity.",
  },
];

export default function BuiltOnIntegrity() {
  const sectionRef = useRef<HTMLElement>(null);
  const [smoothExpansion, setSmoothExpansion] = useState(0);

  useEffect(() => {
    let rAFId: number;
    let targetExp = 0;
    let currentExp = 0;

    const calculateTarget = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Normalizes scroll travel within 1 screen height
      const totalDistance = vh + rect.height;
      const scrolled = vh - rect.top;
      const rawScroll = Math.min(Math.max(scrolled / totalDistance, 0), 1);

      // Reaches full expansion quickly and naturally while fitting 100vh
      const normalized = Math.min(Math.max((rawScroll - 0.15) / 0.5, 0), 1);
      targetExp = normalized * (2 - normalized);
    };

    const updateMotion = () => {
      currentExp += (targetExp - currentExp) * 0.09;

      if (Math.abs(targetExp - currentExp) > 0.0005) {
        setSmoothExpansion(currentExp);
      } else {
        setSmoothExpansion(targetExp);
      }

      rAFId = requestAnimationFrame(updateMotion);
    };

    const handleScroll = () => calculateTarget();

    window.addEventListener("scroll", handleScroll, { passive: true });
    calculateTarget();
    rAFId = requestAnimationFrame(updateMotion);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  // Proportional insets for a single screen viewport
  const insetVal = (1 - smoothExpansion) * 28;
  const cornerRadius = (1 - smoothExpansion) * 36;
  const imageZoom = 1.12 - smoothExpansion * 0.07;

  return (
    <section
      id="integrity"
      ref={sectionRef}
      className="relative z-30 w-full h-screen max-h-screen bg-[#FAF8F5] text-white flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10 lg:px-16 select-none"
    >
      {/* ================= 1. SMOOTH 1-SCREEN EXPANDING PORTAL ================= */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 will-change-[clip-path]"
        style={{
          clipPath: `inset(${insetVal}% ${insetVal}% ${insetVal}% ${insetVal}% round ${cornerRadius}px)`,
        }}
      >
        <img
          src="https://srigajkesari.com/wp-content/uploads/2026/09/integrity.webp"
          alt="Sri Gajkesari Heritage Artistry"
          className="w-full h-full object-cover object-center will-change-transform"
          style={{
            transform: `scale(${imageZoom})`,
            transition: "transform 0.1s ease-out",
          }}
        />

          </div>

      {/* ================= 2. COMPACT SCREEN-FITTING CONTENT ================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center py-4">
        
      

        {/* Display Headline */}
        <h2 className="font-1 text-2xl sm:text-4xl md:text-5xl lg:text-[54px] uppercase tracking-[0.05em] font-normal leading-[1.08] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] mb-2">
          <EditorialLine progress={smoothExpansion} threshold={0.26} delayMs={50}>
            Built On Integrity,
          </EditorialLine>
          <EditorialLine progress={smoothExpansion} threshold={0.32} delayMs={90}>
            <span
              className="italic font-light tracking-[0.02em] text-transparent"
              style={{ WebkitTextStroke: "1.3px #f2dab0" }}
            >
              Shaped By Hand
            </span>
          </EditorialLine>
        </h2>

        {/* Subtle Golden Hairline Ornament */}
        <div
          className={`flex items-center justify-center gap-2.5 my-3 w-full max-w-xs transition-all duration-700 ease-out ${
            smoothExpansion >= 0.38 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#f2dab0]/70" />
          <div className="flex items-center gap-1 text-[#f2dab0]">
            <span className="w-1 h-1 rotate-45 border border-[#f2dab0]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#f2dab0]" />
            <span className="w-1 h-1 rotate-45 border border-[#f2dab0]" />
          </div>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#f2dab0]/70" />
        </div>

        {/* Concise Narrative */}
        <div className="space-y-1 font-2 font-light text-stone-200 text-xs sm:text-[13px] md:text-sm leading-relaxed tracking-wide max-w-2xl mx-auto mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
          <EditorialLine progress={smoothExpansion} threshold={0.42} delayMs={40}>
            Our lineage artisans rely on time-honored techniques; hand-carving
          </EditorialLine>
          <EditorialLine progress={smoothExpansion} threshold={0.48} delayMs={70}>
            sacred temple motifs and setting uncut Kundan-Polki to create headdresses and heirlooms.
          </EditorialLine>
          <EditorialLine
            progress={smoothExpansion}
            threshold={0.54}
            delayMs={100}
            className="text-[#f2dab0] pt-1 font-normal"
          >
            In an age of rapid mass production, we remain true to deliberate human devotion.
          </EditorialLine>
        </div>

        {/* ================= 3. COMPACT PILLAR CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const cardThreshold = 0.6 + idx * 0.06;
            const isCardRevealed = smoothExpansion >= cardThreshold;
            const delay = 50 + idx * 70;

            return (
              <div
                key={pillar.title}
                className={`bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#f2dab0]/60 rounded-none p-4 sm:p-5 text-center flex flex-col items-center group transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white/15 shadow-xl ${
                  isCardRevealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="w-10 h-10 rounded-full border border-[#f2dab0]/50 bg-black/30 flex items-center justify-center text-[#f2dab0] mb-2 group-hover:scale-105 group-hover:bg-[#f2dab0] group-hover:text-[#4C1137] transition-all duration-300">
                  <Icon className="w-4 h-4 stroke-[1.4]" />
                </div>

                <h3 className="font-1 text-xs sm:text-[13px] uppercase tracking-[0.14em] text-white mb-1 font-medium">
                  {pillar.title}
                </h3>

                <p className="font-2 text-[10.5px] sm:text-[11px] text-stone-300 font-light leading-snug">
                  {pillar.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}