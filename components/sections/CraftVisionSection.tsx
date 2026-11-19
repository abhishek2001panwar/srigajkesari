"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
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

  // 2. Smooth Image Parallax (disabled on narrow mobile screens for clean framing)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current || !parallaxRef.current) return;
      if (window.innerWidth < 768) {
        parallaxRef.current.style.transform = "translate3d(0, 0px, 0) scale(1.01)";
        ticking = false;
        return;
      }

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
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="karigar-vision"
      className="relative z-20 w-full bg-[#FAF8F5] text-[#491239] py-16 sm:py-28 lg:py-36 px-5 sm:px-10 lg:px-16 select-none border-t border-[#dfb16b]/25 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* ================= 1. ASYMMETRIC ARCHITECTURAL EDITORIAL SPLIT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-14 items-start mb-10 sm:mb-16 lg:mb-24">
          
          {/* Left Column: Minimal Heading */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.26em] font-semibold text-[#9f732e]">
                The Art of Karigari
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.08] sm:leading-[1.06] text-[#491239]">
              Hundreds of Hours. <br />
              <span className="text-[#dfb16b] font-normal">A Single Vision.</span>
            </h2>
          </div>

          {/* Right Column: Progressive Disclosure on Mobile, Full Narrative on Desktop */}
          <div className="lg:col-span-7 lg:pl-10 lg:border-l border-[#dfb16b]/35 text-left">
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-[17px] tracking-tight leading-[1.72]">
              {narrativeLines.map((line, idx) => {
                const isRevealed = visibleLines[idx];
                const isClosing = idx === narrativeLines.length - 1;
                const isExtraMobileLine = idx > 0;

                return (
                  <p
                    key={idx}
                    ref={(el) => {
                      lineRefs.current[idx] = el;
                    }}
                    style={{ transitionDelay: `${idx * 130}ms` }}
                    className={`${
                      isExtraMobileLine
                        ? isMobileExpanded
                          ? "block"
                          : "hidden sm:block"
                        : "block"
                    } transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isClosing
                        ? "pt-1 sm:pt-2 font-medium text-[#491239]"
                        : "font-normal"
                    } ${
                      isRevealed || isMobileExpanded
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

            {/* Mobile-Only Read More / Read Less Toggle */}
            <div className="mt-4 sm:hidden">
              <button
                type="button"
                onClick={() => setIsMobileExpanded((prev) => !prev)}
                aria-expanded={isMobileExpanded}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#9f732e] hover:text-[#491239] py-1.5 transition-colors cursor-pointer"
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

        {/* ================= 2. UNOBSTRUCTED WIDE CINEMATIC STAGE ================= */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[660px] rounded-2xl sm:rounded-[28px] overflow-hidden bg-[#24061a] border border-[#dfb16b]/30 shadow-[0_28px_65px_-18px_rgba(73,18,57,0.2)]">
          <div
            ref={parallaxRef}
            className="absolute inset-0 md:-top-[14%] md:h-[128%] w-full will-change-transform"
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
          <div className="absolute inset-0 rounded-2xl sm:rounded-[28px] ring-1 ring-inset ring-[#dfb16b]/25 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}