"use client";

import React, { useEffect, useRef, useState } from "react";

interface PromiseItem {
  number: string;
  title: string;
  description: string;
}

const promises: PromiseItem[] = [
  {
    number: "01",
    title: "22KT Gold",
    description:
      "Hallmarked gold with a commitment to purity and authenticity.",
  },
  {
    number: "02",
    title: "Certified Diamonds",
    description:
      "GIA and IGI-certified solitaires with transparent documentation.",
  },
  {
    number: "03",
    title: "Exceptional Craftsmanship",
    description:
      "Traditional artistry, intricate detailing and skilled hands behind every creation.",
  },
  {
    number: "04",
    title: "Made Just for You",
    description:
      "Personalised designs and custom creations that bring your ideas to life.",
  },
  {
    number: "05",
    title: "Complete Transparency",
    description:
      "Clear pricing, authentic certifications and honest guidance.",
  },
  {
    number: "06",
    title: "A Personal Experience",
    description:
      "Thoughtful assistance, warm hospitality and care that continues beyond your purchase.",
  },
];

export default function OurPromiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="our-promise"
      ref={sectionRef}
      className="relative z-20 isolate w-full bg-[#FFFFFF] text-[#491239] py-16 px-6 sm:px-10 lg:px-16 border-y border-[#dfb16b]/25 select-none overflow-hidden"
    >
      {/* Subtle Ambient Champagne Gold Radial Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[860px] h-[280px] bg-[radial-gradient(ellipse_at_center,rgba(223,177,107,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        
        {/* ================= 1. COMPACT ANIMATED HEADER ON PURE WHITE ================= */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div
            className={`inline-flex items-center justify-center gap-3 mb-3 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#9f732e]">
              Our Promise
            </span>
            
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight leading-[1.1] text-[#491239]">
            <span className="block overflow-hidden pb-0.5">
              <span
                className={`block transition-transform duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
              >
                Beautifully Crafted.
              </span>
            </span>
            <span className="block overflow-hidden pb-0.5">
              <span
                className={`block text-[#dfb16b] font-normal transition-transform duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
              >
                Honestly Presented. Made to Be Treasured.
              </span>
            </span>
          </h2>

          <div className="flex justify-center my-4">
            <div
              className={`h-[1px] bg-gradient-to-r from-transparent via-[#dfb16b] to-transparent transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>

          <p
            className={`max-w-2xl mx-auto text-xs sm:text-sm text-[#491239]/80 font-normal leading-relaxed tracking-tight transition-all duration-700 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            At Sri Gajkesari, we believe every jewellery purchase should be as special as the occasion it celebrates. From helping you find the perfect piece to creating something uniquely yours, we bring together quality, craftsmanship and personal attention at every step.
          </p>
        </div>

        {/* ================= 2. COMPACT 6-PILLAR DARK & GOLDEN CARDS (NO ICONS) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {promises.map((item, idx) => (
            <div
              key={item.number}
              style={{ transitionDelay: `${220 + idx * 80}ms` }}
              className={`group relative rounded-2xl bg-gradient-to-b from-[#491239] via-[#320a26] to-[#1e0516] border border-[#dfb16b]/45 px-6 py-5 sm:px-7 sm:py-6 shadow-[0_18px_40px_-14px_rgba(73,18,57,0.24)] hover:border-[#dfb16b] hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {/* Inner Champagne Gold Hairline Rim */}
              <div className="absolute inset-[4px] rounded-[12px] border border-[#dfb16b]/20 group-hover:border-[#dfb16b]/55 transition-colors duration-500 pointer-events-none" />

              {/* Top Champagne Gold Shimmer Line on Hover */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb16b] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              {/* Title + Index Row */}
              <div className="relative z-10 flex items-baseline justify-between gap-3 mb-2">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#dfb16b] group-hover:text-[#FFFFFF] transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="text-[11px] font-medium tracking-[0.22em] text-[#dfb16b]/60 group-hover:text-[#dfb16b] transition-colors shrink-0">
                  {item.number}
                </span>
              </div>

              {/* Gold Hairline Accent */}
              <div className="relative z-10 w-6 h-[1px] bg-[#dfb16b]/55 group-hover:w-10 group-hover:bg-[#dfb16b] transition-all duration-300 mb-2.5" />

              {/* Description */}
              <p className="relative z-10 text-xs sm:text-[13px] text-[#f5e6cc]/85 font-normal leading-relaxed tracking-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}