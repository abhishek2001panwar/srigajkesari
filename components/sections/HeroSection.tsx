"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const headline = "Crafted for every celebration";
  const description =
    "Hand-carved temple motifs and uncut royal Kundan shaped with deliberate devotion.";

  const headlineWords = headline.split(" ");
  const descWords = description.split(" ");

  return (
    <section
      id="hero"
      className="relative mt-48 w-full min-h-[100dvh] lg:min-h-[118vh] text-white flex flex-col justify-end overflow-hidden select-none"
    >
      {/* 1. Flush Edge-to-Edge Background Image (No top gap) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://srigajkesari.com/wp-content/uploads/2026/09/home-hero.webp"
          alt="Sri Gajkesari Fine Jewellery"
          className={`w-full h-full object-cover object-[center_28%] sm:object-center transition-all duration-1200 ease-out ${
            loaded
              ? "scale-100 opacity-95 blur-0"
              : "scale-105 opacity-0 blur-xs"
          }`}
        />

           </div>

      {/* 2. Responsive Content Container Hugging Bottom-Left */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:pl-20 lg:pr-10 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
        <div className="max-w-3xl mr-auto">
          
          {/* Eyebrow Label */}
          <div className="overflow-hidden mb-2.5 sm:mb-3">
            <span
              className={`text-[10px] sm:text-xs uppercase tracking-[0.35em] text-amber-200/95 font-medium inline-flex items-center gap-2 transition-all duration-700 ease-out ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <span className="w-5 sm:w-8 h-[1px] bg-amber-200/60" />
              Introducing &bull; The Royal Heritage
            </span>
          </div>

          {/* Word-by-Word Headline Reveal */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-amber-50 tracking-wide leading-[1.12] mb-3 sm:mb-4 drop-shadow-md">
            {headlineWords.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden mr-[0.26em] last:mr-0 align-top"
              >
                <span
                  className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                  style={{
                    transform: loaded ? "translateY(0)" : "translateY(115%)",
                    transitionDelay: `${200 + i * 75}ms`,
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Word-by-Word Description Reveal */}
          <p className="font-body text-xs sm:text-sm md:text-base text-stone-200/90 font-light tracking-wide leading-relaxed mb-6 sm:mb-8 max-w-xl">
            {descWords.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden mr-[0.24em] last:mr-0 align-top"
              >
                <span
                  className="inline-block transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                  style={{
                    transform: loaded ? "translateY(0)" : "translateY(120%)",
                    transitionDelay: `${450 + i * 28}ms`,
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </p>

          {/* Action Buttons */}
          <div
            className={`flex items-center gap-3 sm:gap-4 flex-wrap transition-all duration-700 ease-out ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "750ms" }}
          >
            {/* Primary Filled Button */}
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-white hover:bg-amber-50 text-[#4C1137] text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-medium transition-all duration-300 shadow-md hover:shadow-xl group active:scale-95"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Secondary Ghost Button */}
            <Link
              href="/story"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 bg-white/5 hover:bg-white/15 text-white border border-white/60 hover:border-white text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-medium transition-all duration-300 backdrop-blur-xs active:scale-95"
            >
              <span>Our Story</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 3. Subtle Editorial Scroll Cue */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-6 sm:left-10 lg:left-20 z-10 transition-opacity duration-1000 ${
          loaded ? "opacity-70" : "opacity-0"
        }`}
        style={{ transitionDelay: "950ms" }}
      >
        <div className="flex items-center gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.32em] text-amber-100/75">
          <div className="w-6 sm:w-8 h-[1px] bg-amber-100/40" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}