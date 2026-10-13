"use client";

import React, { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote, Sparkles } from "lucide-react";

interface Review {
  id: string;
  title: string;
  comment: string;
  author: string;
  date: string;
  verified?: boolean;
}

const reviewsData: Review[] = [
  {
    id: "1",
    title: "Helpful friendly staff",
    comment:
      "Helpful friendly staff. Purchase packaged all ready as a gift for my wife with pristine presentation.",
    author: "Dean Stevens",
    date: "Oct 5, 2026",
    verified: true,
  },
  {
    id: "2",
    title: "Excellent after sales customer service",
    comment:
      "Excellent after sales customer service. Polished our heirloom Kundan choker and adjusted the clasp seamlessly.",
    author: "Stella Overall",
    date: "Oct 5, 2026",
    verified: true,
  },
  {
    id: "3",
    title: "Very good Lovely staff",
    comment:
      "Very good lovely staff. Guided us patiently through their temple gold collection in the Malleshwaram boutique.",
    author: "Neil Crossland",
    date: "Oct 4, 2026",
    verified: true,
  },
  {
    id: "4",
    title: "Gold green quartz ring",
    comment:
      "I absolutely love my ring. It is even more beautiful in person and feels so special to wear. The design is elegant, unique and full of character, and the stone is simply stunning.",
    author: "Aileen",
    date: "Oct 3, 2026",
    verified: true,
  },
  {
    id: "5",
    title: "I have a very sentimental necklace from...",
    comment:
      "I have a very sentimental piece from my wedding day that recently required care. The workshop repaired it and had it ready in pristine packaging within days.",
    author: "Ellie Brown",
    date: "Oct 3, 2026",
    verified: true,
  },
];

export default function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }
    const ratio = scrollLeft / maxScroll;
    const index = Math.round(ratio * (reviewsData.length - 1));
    setActiveIndex(Math.min(Math.max(index, 0), reviewsData.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, []);

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(index);
    }
  };

  const handleArrowScroll = (direction: "left" | "right") => {
    const nextIdx = direction === "right" 
      ? Math.min(activeIndex + 1, reviewsData.length - 1)
      : Math.max(activeIndex - 1, 0);
    scrollToSlide(nextIdx);
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] py-24 sm:py-32 px-4 sm:px-8 lg:px-14 overflow-hidden select-none border-t border-[#EAE4DC]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Block with Luxury Accent */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2.5 mb-3">
            <span className="w-8 h-[1px] bg-[#4C1137]/30" />
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#4C1137] font-semibold flex items-center gap-1.5">
             
              Patron Testimonials
            </span>
            <span className="w-8 h-[1px] bg-[#4C1137]/30" />
          </div>

          <h2 className="font-1 text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.06em] text-[#4C1137] leading-tight">
            Words From Our Patrons
          </h2>
        </div>

        {/* Carousel Frame */}
        <div className="relative">
          
          {/* Navigation Controls: Clean Outset Luxury Round Buttons */}
          <div className="hidden md:flex items-center justify-between absolute -top-16 right-0 gap-2.5 z-20">
            <button
              onClick={() => handleArrowScroll("left")}
              disabled={activeIndex === 0}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-[#4C1137]/20 bg-white/90 text-[#4C1137] flex items-center justify-center shadow-xs hover:bg-[#4C1137] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleArrowScroll("right")}
              disabled={activeIndex === reviewsData.length - 1}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-[#4C1137]/20 bg-white/90 text-[#4C1137] flex items-center justify-center shadow-xs hover:bg-[#4C1137] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-6 sm:gap-7 overflow-x-auto scroll-smooth no-scrollbar py-4 px-2 -mx-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviewsData.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => scrollToSlide(idx)}
                className={`relative flex-shrink-0 w-[290px] sm:w-[340px] lg:w-[370px] min-h-[360px] flex flex-col justify-between bg-white border p-8 transition-all duration-500 cursor-pointer ${
                  activeIndex === idx
                    ? "border-[#4C1137]/40 shadow-xl shadow-[#4C1137]/5 translate-y-[-4px]"
                    : "border-[#EAE4DC] hover:border-stone-400 opacity-80 hover:opacity-100"
                }`}
              >
                {/* Background Subtle Watermark Quote Mark */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[#4C1137]/5 pointer-events-none rotate-180" />

                <div>
                  {/* Stars Row with Champagne Gold Fill */}
                  <div className="flex items-center gap-1 mb-6 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#D4AF37] stroke-[#D4AF37]"
                      />
                    ))}
                  </div>

                  {/* Review Headline */}
                  <h3 className="font-1 text-lg sm:text-xl text-stone-900 leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Body Quote */}
                  <p className="font-2 italic text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                {/* Author Signature & Verified Pill */}
                <div className="pt-6 mt-6 border-t border-[#EAE4DC]/80 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#4C1137]">
                        {item.author}
                      </span>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D37]" />
                      )}
                    </div>
                    <span className="font-2 text-[10px] text-stone-400 block mt-0.5 tracking-wider">
                      {item.date}
                    </span>
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-stone-400">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Arrows Overlay */}
          <div className="flex md:hidden items-center justify-center gap-3 mt-4">
            <button
              onClick={() => handleArrowScroll("left")}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-[#4C1137]/30 bg-white text-[#4C1137] flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleArrowScroll("right")}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-[#4C1137]/30 bg-white text-[#4C1137] flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Pagination Dots at the Bottom */}
          <div className="flex items-center justify-center gap-2.5 mt-10">
            {reviewsData.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToSlide(dotIdx)}
                aria-label={`Go to review ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === dotIdx
                    ? "w-7 h-1.5 bg-[#4C1137]"
                    : "w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>

        </div>

        {/* Bottom Editorial Heritage Trust Bar */}
        <div className="mt-14 pt-8 border-t border-[#EAE4DC] flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs tracking-wider text-stone-600">
          <span className="font-medium uppercase tracking-[0.2em] text-[#4C1137] text-[10px] sm:text-xs">
            Exceptional Rating
          </span>
          <span className="text-stone-300">•</span>
          <div className="flex items-center gap-1 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-[#D4AF37] stroke-[#D4AF37]"
              />
            ))}
          </div>
          <span className="font-light text-stone-500 text-[11px] sm:text-xs">
            5.0 out of 5 based on verified atelier consultations
          </span>
        </div>

      </div>
    </section>
  );
}