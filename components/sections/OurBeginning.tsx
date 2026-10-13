"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface AnimatedLineProps {
  text: string;
  progress: number;
  threshold: number;
  className?: string;
  isHeading?: boolean;
}

function AnimatedLine({
  text,
  progress,
  threshold,
  className = "",
  isHeading = false,
}: AnimatedLineProps) {
  const isTriggered = progress >= threshold;

  return (
    <span className="block overflow-hidden">
      <span
        className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${className}`}
        style={{
          transform: isTriggered ? "translateY(0)" : "translateY(115%)",
          opacity: isTriggered ? 1 : 0,
          transitionDelay: `${Math.round(threshold * 200)}ms`,
        }}
      >
        {isHeading ? text : text}
      </span>
    </span>
  );
}

export default function OurBeginning() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress begins when top of section crosses 85% of viewport
      const totalTravel = windowHeight + rect.height;
      const currentScroll = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentScroll / totalTravel, 0), 1);

      setScrollProgress(progress);
    };

    // Works with Lenis virtual scroll & standard browser events
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#FAF8F5] text-stone-900 overflow-hidden select-none border-t border-[#EAE4DC]"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* ================= LEFT COLUMN: LINE-BY-LINE EDITORIAL TEXT ================= */}
        <div className="flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-20 sm:py-24 lg:py-28 order-2 lg:order-1">
          <div className="max-w-xl">
            
            {/* 1. Eyebrow Line */}
            <div className="mb-6 overflow-hidden">
              <span
                className={`inline-flex items-center gap-3 transition-all duration-700 ease-out ${
                  scrollProgress >= 0.15
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="w-6 h-[1px] bg-[#4C1137]/50" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#4C1137] font-semibold flex items-center gap-2">
                 
                  Our Lineage
                </span>
              </span>
            </div>

            {/* 2. Headline Lines */}
            <h2 className="font-1 text-3xl sm:text-5xl lg:text-6xl text-[#4C1137] uppercase tracking-[0.06em] leading-[1.08] mb-8">
              <AnimatedLine
                text="Our Beginning"
                progress={scrollProgress}
                threshold={0.18}
                isHeading
              />
            </h2>

            {/* 3. Narrative Sentences Unfurling Line by Line */}
            <div className="space-y-4 font-2 text-stone-600 text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-wide">
              <AnimatedLine
                text="Before Sri Gajkesari, there was Sri Ganesh Jewellery."
                progress={scrollProgress}
                threshold={0.22}
                className="font-medium text-stone-900"
              />
              <AnimatedLine
                text="For decades, families walked through our doors for their biggest milestones."
                progress={scrollProgress}
                threshold={0.26}
              />
              <AnimatedLine
                text="They relied on us for something simple yet rare: unbroken purity and trust."
                progress={scrollProgress}
                threshold={0.30}
              />
              <AnimatedLine
                text="As time passed, our patrons sought designs that honored those trusted roots"
                progress={scrollProgress}
                threshold={0.34}
                className="text-stone-500"
              />
              <AnimatedLine
                text="while reflecting a modern, royal aesthetic. Sri Gajkesari was born from this evolution."
                progress={scrollProgress}
                threshold={0.38}
                className="text-stone-500"
              />
            </div>

            {/* 4. Minimalist Credentials Strip */}
            <div className="mt-10 py-6 border-y border-[#EAE4DC] overflow-hidden">
              <div
                className={`flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-stone-500 transition-all duration-700 ease-out ${
                  scrollProgress >= 0.42
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="text-stone-800 font-medium">Decades of Trust</span>
                <span className="text-[#4C1137]/30">&bull;</span>
                <span className="text-stone-800 font-medium">Ancestral Karigari</span>
                <span className="text-[#4C1137]/30">&bull;</span>
                <span className="text-stone-800 font-medium">Malleshwaram Flagship</span>
              </div>
            </div>

            {/* 5. CTA Trigger */}
            <div className="mt-10 overflow-hidden">
              <div
                className={`transition-all duration-700 ease-out ${
                  scrollProgress >= 0.46
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <Link
                  href="/collection"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#4C1137] hover:bg-[#340b25] text-white text-[10px] uppercase tracking-[0.28em] font-medium transition-all shadow-sm hover:shadow-md group active:scale-95"
                >
                  <span>Explore The Craft</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN: 1/2 WIDTH FULL-HEIGHT IMAGE ================= */}
        <div className="relative w-full h-[450px] sm:h-[600px] lg:h-full min-h-full overflow-hidden bg-[#200416] order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-[#EAE4DC]">
          <img
            src="https://srigajkesari.com/wp-content/uploads/2026/09/beginning.webp"
            alt="The Beginning - Sri Gajkesari Jewellers"
            className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
              scrollProgress >= 0.12 ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
        </div>

      </div>
    </section>
  );
}