"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface EditorialLineProps {
  children: React.ReactNode;
  progress: number;
  threshold: number;
  className?: string;
}

function EditorialLine({
  children,
  progress,
  threshold,
  className = "",
}: EditorialLineProps) {
  const range = 0.08;
  const rawFraction = (progress - threshold) / range;
  const clamped = Math.min(Math.max(rawFraction, 0), 1);
  const easeOut = 1 - Math.pow(1 - clamped, 3);

  const translateY = (1 - easeOut) * 110;
  const opacity = Math.min(easeOut * 1.35, 1);
  const blurVal = (1 - easeOut) * 3;

  return (
    <span className="block overflow-hidden py-[2px]">
      <span
        className={`inline-block will-change-[transform,opacity,filter] ${className}`}
        style={{
          transform: `translate3d(0, ${translateY}%, 0)`,
          opacity,
          filter: `blur(${blurVal}px)`,
          transition:
            "transform 0.15s ease-out, opacity 0.15s ease-out, filter 0.15s ease-out",
        }}
      >
        {children}
      </span>
    </span>
  );
}

export default function OurBeginning() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [parallax1, setParallax1] = useState(0);
  const [parallax2, setParallax2] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const totalTravel = vh + rect.height;
      const currentScroll = vh - rect.top;
      const progress = Math.min(Math.max(currentScroll / totalTravel, 0), 1);

      setScrollProgress(progress);
      setParallax1((progress - 0.5) * -12);
      setParallax2((progress - 0.5) * 14);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative w-full bg-[#FAF8F5] text-stone-900 overflow-hidden select-none py-16 sm:py-24 lg:py-28 px-5 sm:px-10 lg:px-16 border-t border-[#EAE4DC]"
    >
      <div className="max-w-[1540px] mx-auto">
        
        {/* ================= 1. PROMINENT GRAND EDITORIAL HEADER ================= */}
        <div className="w-full lg:w-[84%] ml-auto mb-10 sm:mb-14">
          <div className="mb-2.5">
            <EditorialLine progress={scrollProgress} threshold={0.05}>
              <span className="text-xs sm:text-sm uppercase tracking-[0.42em] text-[#4C1137] font-semibold">
                The Roots of Our Beginning
              </span>
            </EditorialLine>
          </div>

          <h2 className="font-1 text-4xl sm:text-6xl lg:text-[70px] uppercase tracking-[0.05em] text-stone-900 leading-[1.04]">
            <EditorialLine progress={scrollProgress} threshold={0.09}>
              <span className="text-stone-900">Ancestral Trust</span>
            </EditorialLine>
            <EditorialLine progress={scrollProgress} threshold={0.13}>
              <span className="font-light italic tracking-[0.02em] text-[#4C1137] sm:ml-4 lg:ml-8 inline-block">
                Captured In Gold
              </span>
            </EditorialLine>
          </h2>
        </div>

        {/* ================= 2. ASYMMETRIC GRID: LARGER LEFT IMAGE + LARGER CENTER TEXT + RIGHT IMAGE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Expanded Landscape Image (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/10.5] overflow-hidden bg-[#200416] border border-[#EAE4DC] shadow-sm">
              <div
                className="absolute -top-[12%] inset-x-0 h-[124%] w-full will-change-transform transition-transform duration-100 ease-out"
                style={{
                  transform: `translate3d(0, ${parallax1}%, 0) scale(1.08)`,
                }}
              >
                <img
                  src="https://srigajkesari.com/wp-content/uploads/2026/09/beginning.webp"
                  alt="The Beginning - Sri Gajkesari Jewellers"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Center Column: Increased Typography + Fully Explicit 4-Sided Border Button */}
          <div className="lg:col-span-4 flex flex-col items-center text-center px-2 sm:px-4 py-4 lg:py-0">
            <div className="max-w-md space-y-4 font-2 text-[14px] sm:text-[15.5px] lg:text-[16px] text-stone-700 font-light leading-relaxed tracking-wide">
              <EditorialLine progress={scrollProgress} threshold={0.16}>
                <p>
                  Before Sri Gajkesari, there was Sri Ganesh Jewellery. For decades,
                  families walked through our doors for their most sacred milestones.
                </p>
              </EditorialLine>

              <EditorialLine progress={scrollProgress} threshold={0.2}>
                <p>
                  They relied on our karigars for unbroken gold purity and steadfast trust.
                  From quiet family heirlooms to grand generational celebrations,
                  every piece we sculpt reflects devotion in its purest form.
                </p>
              </EditorialLine>

              <EditorialLine progress={scrollProgress} threshold={0.24}>
                <p className="text-stone-900 font-normal italic pt-1">
                  Where your lineage takes center stage-honoring ancestral roots while
                  embodying royal modern grace.
                </p>
              </EditorialLine>
            </div>

            {/* Outlined Luxury CTA Button (Explicit Border + Outline Fix) */}
            <div className="mt-8 sm:mt-10">
              <EditorialLine progress={scrollProgress} threshold={0.28}>
                <Link
                  href="/story"
                  className="inline-flex items-center justify-center px-9 py-3.5 border-[1.5px] border-solid border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white text-[11px] uppercase tracking-[0.26em] font-medium transition-all duration-300 rounded-none group active:scale-95 box-border"
                >
                  <span className="whitespace-nowrap">Explore More</span>
                  <ArrowUpRight className="w-4 h-4 ml-2.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </EditorialLine>
            </div>
          </div>

          {/* Right Column: Balanced Landscape Image (3 Cols) */}
          <div className="lg:col-span-3 w-full">
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10.5] overflow-hidden bg-[#180410] border border-[#EAE4DC] shadow-sm">
              <div
                className="absolute -top-[12%] inset-x-0 h-[124%] w-full will-change-transform transition-transform duration-100 ease-out"
                style={{
                  transform: `translate3d(0, ${parallax2}%, 0) scale(1.08)`,
                }}
              >
                <img
                  src="https://srigajkesari.com/wp-content/uploads/2026/09/roots.webp"
                  alt="Ancestral Goldsmithing - Sri Gajkesari Jewellers"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}