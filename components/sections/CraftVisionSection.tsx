"use client";

import React, { useEffect, useRef, useState } from "react";

const narrativeLines = [
  "Every creation has a story, shaped by the hands that bring it to life.",
  "From intricate Nakshi carving and delicate Meenakari enamelling to the hand-setting of uncut Kundan and Polki stones, these age-old techniques have been treasured and passed down through generations.",
  "At Sri Gajkesari Jewellers, we value the beauty of craftsmanship shaped by the human hand. Our master karigars bring patience, precision and devotion to every detail, creating pieces with a character of their own, something machine precision alone cannot replicate.",
  "Because some things are too precious to be made any other way.",
];

export default function CraftVisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [visibleLines, setVisibleLines] = useState<boolean[]>(
    () => new Array(narrativeLines.length).fill(false)
  );

  // 1. Individual Per-Line Scroll Observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    lineRefs.current.forEach((el, idx) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleLines((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            observer.disconnect();
          }
        },
        {
          rootMargin: "0px 0px -16% 0px",
          threshold: 0.2,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // 2. Smooth Image Parallax
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current || !parallaxRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.bottom >= 0 && rect.top <= vh) {
        const centerOffset = rect.top + rect.height / 2 - vh / 2;
        const offset = -centerOffset * 0.16;
        parallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`;
      }
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
      ref={sectionRef}
      id="karigar-vision"
      className="relative z-20 w-full bg-[#FAF8F5] text-[#491239] py-24 sm:py-36 px-6 sm:px-10 lg:px-16 select-none border-t border-[#dfb16b]/25"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* ================= 1. ASYMMETRIC ARCHITECTURAL EDITORIAL SPLIT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16 sm:mb-24">
          
          {/* Left Column: Sticky-Feel Minimal Heading */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-3 mb-4">
             
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.26em] font-semibold text-[#9f732e]">
                The Art of Karigari
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.06] text-[#491239]">
              Hundreds of Hours. <br />
              <span className="text-[#dfb16b] font-normal">A Single Vision.</span>
            </h2>
          </div>

          {/* Right Column: Hairline-Framed Line-by-Line Narrative */}
          <div className="lg:col-span-7 lg:pl-10 lg:border-l border-[#dfb16b]/35 space-y-5 text-sm sm:text-base md:text-[17px] tracking-tight leading-[1.72] text-left">
            {narrativeLines.map((line, idx) => {
              const isRevealed = visibleLines[idx];
              const isClosing = idx === narrativeLines.length - 1;

              return (
                <p
                  key={idx}
                  ref={(el) => {
                    lineRefs.current[idx] = el;
                  }}
                  style={{ transitionDelay: `${idx * 130}ms` }}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isClosing
                      ? "pt-2 font-medium text-[#491239]"
                      : "font-normal"
                  } ${
                    isRevealed
                      ? isClosing
                        ? "opacity-100 translate-y-0 text-[#491239]"
                        : "opacity-100 translate-y-0 text-[#491239]/85"
                      : "opacity-15 translate-y-4 text-[#491239]/40"
                  }`}
                >
                  {line}
                </p>
              );
            })}
          </div>
        </div>

        {/* ================= 2. UNOBSTRUCTED WIDE CINEMATIC STAGE ================= */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[660px] rounded-[28px] overflow-hidden bg-[#24061a] border border-[#dfb16b]/30 shadow-[0_28px_65px_-18px_rgba(73,18,57,0.2)]">
          <div
            ref={parallaxRef}
            className="absolute -top-[14%] inset-x-0 h-[128%] w-full will-change-transform"
            style={{
              transform: "translate3d(0, 0px, 0) scale(1.06)",
              transition: "transform 0.08s linear",
            }}
          >
            <img
              src="/Frame-66.webp"
              alt="Sri Gajkesari Karigari Devotion"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Subtle Inner Champagne Gold Hairline Rim */}
          <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-[#dfb16b]/25 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}