"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, Gem, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    metric: "22KT",
    title: "Absolute Purity",
    subtitle: "100% BIS Hallmarked gold with documented provenance.",
  },
  {
    icon: Gem,
    metric: "0.00",
    title: "Cloud Spec",
    subtitle: "GIA & IGI certified solitaires, unclouded weights and honest karigari.",
  },
  {
    icon: Sparkles,
    metric: "100%",
    title: "Hand-Sculpted",
    subtitle: "Archival temple restoration, continuous care and buyback equity.",
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

      const totalDistance = vh + rect.height;
      const scrolled = vh - rect.top;
      const rawScroll = Math.min(Math.max(scrolled / totalDistance, 0), 1);

      // Smooth cinematic portal scrub
      const normalized = Math.min(Math.max((rawScroll - 0.12) / 0.52, 0), 1);
      targetExp = normalized * (2 - normalized);
    };

    const updateMotion = () => {
      currentExp += (targetExp - currentExp) * 0.085;

      if (Math.abs(targetExp - currentExp) > 0.0005) {
        setSmoothExpansion(currentExp);
      } else {
        setSmoothExpansion(targetExp);
      }

      rAFId = requestAnimationFrame(updateMotion);
    };

    const onScroll = () => calculateTarget();

    window.addEventListener("scroll", onScroll, { passive: true });
    calculateTarget();
    rAFId = requestAnimationFrame(updateMotion);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  // Apple-grade dynamic rounded portal expansion
  const insetX = (1 - smoothExpansion) * 8; // gentle margin on desktop
  const insetY = (1 - smoothExpansion) * 5;
  const cornerRadius = (1 - smoothExpansion) * 44; // smoothly expands into full bleed
  const imageScale = 1.15 - smoothExpansion * 0.12;
  const contentOpacity = Math.min(Math.max((smoothExpansion - 0.18) * 2.2, 0), 1);

  return (
    <section
      id="integrity"
      ref={sectionRef}
      className="relative z-30 w-full min-h-screen  text-[#F5F5F7] flex flex-col items-center justify-center overflow-hidden py-20 px-6 sm:px-10 lg:px-16 select-none"
    >
      {/* ================= 1. APPLE FULL-FRAME PORTAL ================= */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 will-change-[clip-path]"
        style={{
          clipPath: `inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${cornerRadius}px)`,
        }}
      >
        <img
          src="https://srigajkesari.com/wp-content/uploads/2026/09/integrity.webp"
          alt="Sri Gajkesari Heritage Artistry"
          className="w-full h-full object-cover object-center will-change-transform"
          style={{
            transform: `scale(${imageScale})`,
            transition: "transform 0.1s linear",
          }}
        />

        {/* Minimal High-Contrast Tint (No harsh vignettes) */}
      </div>

      {/* ================= 2. CLEAN EDITORIAL CONTENT ================= */}
      <div
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center transition-opacity duration-500"
        style={{ opacity: contentOpacity }}
      >
        {/* Apple Sub-Eyebrow */}
        <span className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#86868B] block mb-3">
          The Atelier Standards
        </span>

        {/* Punchy Minimal Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#F5F5F7] leading-[1.08] mb-4">
          Built on integrity. <br />
          <span className="text-[#86868B] font-normal">Shaped by hand.</span>
        </h2>

        {/* Direct Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#86868B] font-normal tracking-tight leading-relaxed max-w-xl mb-12 sm:mb-16">
          In an age of rapid machine reproduction, every piece we shape honors unbroken purity and deliberate generational craft.
        </p>

        {/* ================= 3. APPLE SPEC METRIC BAR (NO BOXES, ZERO NOISE) ================= */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-10 border-t border-white/15">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col items-center text-center group"
              >
                {/* Metric / Stat Highlight */}
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-4 h-4 text-[#86868B] group-hover:text-white transition-colors" />
                  <span className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {pillar.metric}
                  </span>
                </div>

                {/* Spec Label */}
                <span className="text-xs sm:text-sm font-medium text-[#F5F5F7] tracking-tight mb-1">
                  {pillar.title}
                </span>

                {/* Supporting Spec Text */}
                <p className="text-[11px] sm:text-xs text-[#86868B] font-normal tracking-tight leading-relaxed max-w-[220px]">
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