"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
          rootMargin: "0px 0px -18% 0px",
          threshold: 0.25,
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
        const offset = -centerOffset * 0.18;
        parallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.05)`;
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
      className="relative z-20 w-full bg-[#FFFFFF] text-[#1D1D1F] py-24 sm:py-36 px-6 sm:px-10 lg:px-16 select-none border-t border-black/5"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* ================= 1. WIDER APPLE EDITORIAL HEADER ================= */}
        <div className="w-full max-w-5xl text-center mb-14 sm:mb-20">
          <span className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#86868B] block mb-3">
            The Art of Karigari
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.06] text-[#1D1D1F] mb-9">
            Hundreds of Hours. <br />
            <span className="text-[#dfb16b]">A Single Vision.</span>
          </h2>

          {/* Line-by-Line Scroll Reveal (Refined Smaller Paragraph Scale, No Dash) */}
          <div className="space-y-4 text-sm sm:text-base md:text-[17px] tracking-tight leading-relaxed max-w-3xl mx-auto">
            {narrativeLines.map((line, idx) => {
              const isRevealed = visibleLines[idx];
              return (
                <p
                  key={idx}
                  ref={(el) => {
                    lineRefs.current[idx] = el;
                  }}
                  style={{ transitionDelay: `${idx * 140}ms` }}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    idx === narrativeLines.length - 1 ? "font-medium" : "font-normal"
                  } ${
                    isRevealed
                      ? "opacity-100 translate-y-0 text-[#1D1D1F]"
                      : "opacity-15 translate-y-5 text-[#86868B]"
                  }`}
                >
                  {line}
                </p>
              );
            })}
          </div>
        </div>

        {/* ================= 2. CINEMATIC ROUNDED CANVAS STAGE ================= */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[640px] rounded-3xl overflow-hidden bg-stone-100 border border-black/[0.04] shadow-sm">
          <div
            ref={parallaxRef}
            className="absolute -top-[15%] inset-x-0 h-[130%] w-full will-change-transform"
            style={{
              transform: "translate3d(0, 0px, 0) scale(1.05)",
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

       

      </div>
    </section>
  );
}