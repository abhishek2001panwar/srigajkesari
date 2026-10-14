"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ScrollRevealLineProps {
  children: React.ReactNode;
  progress: number;
  threshold: number;
  className?: string;
}

function ScrollRevealLine({
  children,
  progress,
  threshold,
  className = "",
}: ScrollRevealLineProps) {
  // Smooth scroll interpolation: travels from translateY(100%) to (0%) as you scroll past threshold
  const range = 0.08;
  const rawFraction = (progress - threshold) / range;
  const clamped = Math.min(Math.max(rawFraction, 0), 1);

  // Deceleration easing curve for fluid, luxury motion
  const easeOut = 1 - Math.pow(1 - clamped, 3);
  const translateY = (1 - easeOut) * 105;
  const opacity = Math.min(easeOut * 1.25, 1);
  const blurVal = (1 - easeOut) * 4;

  return (
    <span className="block overflow-hidden py-[2px]">
      <span
        className={`inline-block will-change-[transform,opacity,filter] ${className}`}
        style={{
          transform: `translate3d(0, ${translateY}%, 0)`,
          opacity,
          filter: `blur(${blurVal}px)`,
          transition: "transform 0.15s ease-out, opacity 0.15s ease-out, filter 0.15s ease-out",
        }}
      >
        {children}
      </span>
    </span>
  );
}

export default function CraftVisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [zoomScale, setZoomScale] = useState(1.06);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Real-time position tracking throughout the viewport travel
      const totalDistance = vh + rect.height;
      const scrolled = vh - rect.top;
      const progress = Math.min(Math.max(scrolled / totalDistance, 0), 1);

      setScrollProgress(progress);

      // Deep parallax: -18% to +18%
      const offset = (progress - 0.5) * 36;
      setParallaxOffset(offset);

      // Counter-zoom scaling on scroll: 1.05 to 1.15
      const scale = 1.05 + progress * 0.1;
      setZoomScale(scale);

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

  // Ornamental line scale tied directly to scroll
  const lineProgress = Math.min(Math.max((scrollProgress - 0.28) / 0.18, 0), 1);

  return (
    <section
      ref={sectionRef}
      id="karigar-vision"
      className="w-full bg-[#FAF8F5] text-stone-900 py-20 sm:py-28 lg:py-36 select-none border-t border-[#EAE4DC]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 flex flex-col items-center">
        
        {/* ================= 1. CENTERED VISUAL STAGE WITH PARALLAX & BOTTOM SHADOW ================= */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/8.5] lg:aspect-[16/7.5] max-h-[660px] overflow-hidden bg-[#180410] border border-[#EAE4DC] shadow-sm">
          
          {/* Parallax + Scale Zoom Layer */}
          <div
            className="absolute -top-[18%] inset-x-0 h-[136%] w-full will-change-transform transition-transform duration-100 ease-out"
            style={{
              transform: `translate3d(0, ${parallaxOffset}%, 0) scale(${zoomScale})`,
            }}
          >
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/Frame-66.webp"
              alt="Sri Gajkesari Karigari Devotion"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Bottom-only dark vignette overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* ================= 2. LINE-BY-LINE SCROLL REVEAL EDITORIAL CONTENT ================= */}
        <div className="w-full max-w-5xl mx-auto text-center pt-14 sm:pt-18 lg:pt-22 flex flex-col items-center">
          
          {/* Eyebrow Line */}
          <div className="mb-3">
            <ScrollRevealLine progress={scrollProgress} threshold={0.16}>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.45em] text-[#8C6D37] font-semibold inline-flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#8C6D37]/50" />
                Our Karigari &bull; Master Vision
                <span className="w-6 h-[1px] bg-[#8C6D37]/50" />
              </span>
            </ScrollRevealLine>
          </div>

          {/* Heading Lines */}
          <h2 className="font-1 text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] text-[#4C1137] leading-[1.1] mb-2">
            <ScrollRevealLine progress={scrollProgress} threshold={0.22}>
              Hundreds Of Hours,
            </ScrollRevealLine>
            <ScrollRevealLine progress={scrollProgress} threshold={0.27}>
              <span className="italic font-light tracking-[0.02em] text-stone-900">
                A Single Vision
              </span>
            </ScrollRevealLine>
          </h2>

          {/* Expanding Ornamental Line */}
          <div className="w-full max-w-md my-5 sm:my-7 flex items-center justify-center gap-3">
            <span
              className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#4C1137]/40 will-change-transform transition-transform duration-300 ease-out origin-right"
              style={{ transform: `scaleX(${lineProgress})` }}
            />
            <div
              className="flex items-center gap-1.5 text-[#4C1137]/60 will-change-transform transition-all duration-300 ease-out"
              style={{
                opacity: lineProgress,
                transform: `scale(${0.5 + lineProgress * 0.5})`,
              }}
            >
              <span className="w-1 h-1 rotate-45 border border-[#4C1137]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#4C1137]" />
              <span className="w-1 h-1 rotate-45 border border-[#4C1137]" />
            </div>
            <span
              className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#4C1137]/40 will-change-transform transition-transform duration-300 ease-out origin-left"
              style={{ transform: `scaleX(${lineProgress})` }}
            />
          </div>

          {/* Descriptive Narrative Lines */}
          <div className="w-full max-w-4xl mx-auto space-y-1.5 font-2 font-light text-stone-600 text-xs sm:text-sm md:text-[15px] leading-relaxed tracking-wide mb-8 sm:mb-10">
            <ScrollRevealLine progress={scrollProgress} threshold={0.33}>
              Machine precision cannot replicate human devotion. Our lineage artisans rely on time-honored
            </ScrollRevealLine>
            <ScrollRevealLine progress={scrollProgress} threshold={0.38}>
              techniques—Nakshi hand-carving, traditional Meenakari enameling, and meticulous gemstone settings
            </ScrollRevealLine>
            <ScrollRevealLine progress={scrollProgress} threshold={0.43}>
              to breathe life into uncut stones, ensuring no two Sri Gajkesari heirlooms are ever identical.
            </ScrollRevealLine>
          </div>

          {/* Action Link Line */}
          <div className="pt-2">
            <ScrollRevealLine progress={scrollProgress} threshold={0.48}>
              <Link
                href="/story"
                className="group inline-flex items-center gap-2.5 text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.3em] font-medium text-[#4C1137] hover:text-[#8C6D37] transition-colors py-1.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#4C1137] hover:after:w-full after:transition-all after:duration-300"
              >
                <span>Discover The Process</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </ScrollRevealLine>
          </div>

        </div>

      </div>
    </section>
  );
}