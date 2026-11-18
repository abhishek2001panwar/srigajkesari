"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Gem,
  Sparkles,
  PenTool,
  Scale,
  HeartHandshake,
} from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    metric: "22KT",
    title: "Hallmarked Gold",
    subtitle: "Assured purity and authenticity in every gold creation.",
  },
  {
    icon: Gem,
    metric: "GIA & IGI",
    title: "Certified Diamonds",
    subtitle:
      "GIA & IGI certified solitaires, unclouded weights and honest karigari.",
  },
  {
    icon: Sparkles,
    metric: "100%",
    title: "Hand-Sculpted",
    subtitle:
      "Our master karigars bring time-honoured techniques to life through intricate carving, Kundan setting, delicate pearl weaving and traditional artistry.",
  },
  {
    icon: PenTool,
    metric: "Bespoke",
    title: "Made Just for You",
    subtitle:
      "Personalised designs and custom creations that bring your ideas to life.",
  },
  {
    icon: Scale,
    metric: "Honest",
    title: "Complete Transparency",
    subtitle:
      "Clear pricing, authentic certifications and honest guidance at every step.",
  },
  {
    icon: HeartHandshake,
    metric: "Forever",
    title: "Lifetime Support",
    subtitle:
      "Warm hospitality, personal attention and care that continues beyond your purchase.",
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
  const insetX = (1 - smoothExpansion) * 8;
  const insetY = (1 - smoothExpansion) * 5;
  const cornerRadius = (1 - smoothExpansion) * 44;
  const imageScale = 1.15 - smoothExpansion * 0.12;
  const contentOpacity = Math.min(
    Math.max((smoothExpansion - 0.18) * 2.2, 0),
    1
  );

  return (
    <section
      id="integrity"
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative z-30 w-full min-h-screen text-white flex flex-col items-center justify-center overflow-hidden py-24 sm:py-28 px-6 sm:px-10 lg:px-16 select-none"
    >
      {/* ================= 1. APPLE FULL-FRAME PORTAL ================= */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 will-change-[clip-path]"
        style={{
          clipPath: `inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${cornerRadius}px)`,
        }}
      >
        <img
          src="/integrity.webp"
          alt="Sri Gajkesari Heritage Artistry"
          className="w-full h-full object-cover object-center will-change-transform"
          style={{
            transform: `scale(${imageScale})`,
            transition: "transform 0.1s linear",
          }}
        />
      </div>

      {/* ================= 2. CLEAN EDITORIAL CONTENT ================= */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center transition-opacity duration-500"
        style={{ opacity: contentOpacity }}
      >
        {/* Brand Gold Sub-Eyebrow */}
        <span className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#dfb16b] block mb-3">
          OUR PROMISE
        </span>

        {/* Punchy Minimal Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.08] mb-5">
          Built on integrity. <br />
          <span className="text-[#dfb16b] font-normal">Shaped by hand.</span>
        </h2>

        {/* Wider Editorial Intro Paragraphs */}
        <div className="space-y-3 text-sm sm:text-base md:text-[17px] text-white/95 font-normal tracking-tight leading-relaxed max-w-4xl mb-12 sm:mb-14">
          <p>
            Some things are valued for their beauty. Others become precious for
            the memories, relationships and trust they hold.
          </p>
          <p className="text-white/85">
            At Sri Gajkesari Jewellers, we believe jewellery carries both. That
            is why we honour the purity of every creation, the artistry behind it
            and the trust of every family who makes us part of their story.
          </p>
        </div>

        {/* ================= 3. WIDER BOX-FREE 6-PILLAR SPEC MATRIX ================= */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 pt-10 border-t border-white/25">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col items-center text-center group"
              >
                {/* Metric / Stat Highlight with Icon */}
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-4 h-4 text-[#dfb16b] group-hover:scale-110 transition-transform" />
                  <span className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {pillar.metric}
                  </span>
                </div>

                {/* Spec Label */}
                <span className="text-xs sm:text-sm font-medium text-[#dfb16b] tracking-tight mb-1.5">
                  {pillar.title}
                </span>

                {/* Wider Supporting Spec Text */}
                <p className="text-xs sm:text-[13px] text-white/90 font-normal tracking-tight leading-relaxed max-w-[330px]">
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