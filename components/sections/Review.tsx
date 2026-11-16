"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: string;
  title: string;
  comment: string;
  author: string;
  location: string;
  date: string;
}

const reviewsData: Review[] = [
  {
    id: "1",
    title: "Pristine Presentation",
    comment:
      "Helpful, genuinely patient staff. Our bespoke anniversary acquisition was packaged with pristine presentation and certified paperwork ready on arrival.",
    author: "Dean Stevens",
    location: "Bengaluru",
    date: "Oct 2026",
  },
  {
    id: "2",
    title: "Generational Kundan",
    comment:
      "Exceptional after-sales artistry. Their karigars polished our grandmother’s heirloom Kundan choker and adjusted the safety clasp seamlessly.",
    author: "Stella Overall",
    location: "Bengaluru",
    date: "Oct 2026",
  },
  {
    id: "3",
    title: "Temple Nakshi Gold",
    comment:
      "Guided us with immense devotion through their temple gold vault in the Malleshwaram boutique. Every motif carries true ancestral weight.",
    author: "Neil Crossland",
    location: "Malleshwaram",
    date: "Oct 2026",
  },
  {
    id: "4",
    title: "Bespoke Royal Solitaire",
    comment:
      "I absolutely love my ring. It is even more magnificent in person and feels irreplaceable to wear. Unique, balanced, and full of royal character.",
    author: "Aileen",
    location: "Bengaluru",
    date: "Oct 2026",
  },
  {
    id: "5",
    title: "Sentimental Bridal Trousseau",
    comment:
      "A precious necklace from our wedding day required custom restringing. The atelier handled it with absolute reverence and care.",
    author: "Ellie Brown",
    location: "Bengaluru",
    date: "Oct 2026",
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
    const index = Math.round(ratio * (reviewsData.length - 3));
    setActiveIndex(Math.min(Math.max(index, 0), reviewsData.length - 3));
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
    const targetCard = cards[index] as HTMLElement;
    if (targetCard) {
      const containerLeft = scrollRef.current.getBoundingClientRect().left;
      const cardLeft = targetCard.getBoundingClientRect().left;
      const offset = cardLeft - containerLeft;

      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleArrowScroll = (direction: "left" | "right") => {
    const nextIdx =
      direction === "right"
        ? Math.min(activeIndex + 1, reviewsData.length - 3)
        : Math.max(activeIndex - 1, 0);
    scrollToSlide(nextIdx);
  };

  return (
    <section className="relative z-20 w-full bg-[#FFFFFF] text-[#1D1D1F] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 select-none border-t border-black/5">
      <div className="max-w-[1280px] mx-auto">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-black/10 gap-4">
          <div>
            <span className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#491239]/75 block mb-2">
               Testimonials
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-tight">
              Worn with pride. <br />
              <span className="text-[#dfb16b] font-normal">
                Cherished for generations.
              </span>
            </h2>
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              onClick={() => handleArrowScroll("left")}
              disabled={activeIndex === 0}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-[#491239]/25 bg-white text-[#491239] flex items-center justify-center hover:bg-[#491239] hover:text-[#dfb16b] disabled:opacity-25 disabled:hover:bg-white disabled:hover:text-[#491239] transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleArrowScroll("right")}
              disabled={activeIndex >= reviewsData.length - 3}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-[#491239]/25 bg-white text-[#491239] flex items-center justify-center hover:bg-[#491239] hover:text-[#dfb16b] disabled:opacity-25 disabled:hover:bg-white disabled:hover:text-[#491239] transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ================= ROYAL PLUM & GOLD CAROUSEL ================= */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto scroll-smooth no-scrollbar py-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[84vw] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] rounded-3xl bg-[#491239] border border-[#dfb16b]/25 hover:border-[#dfb16b]/60 shadow-[0_14px_34px_-12px_rgba(73,18,57,0.3)] p-8 sm:p-9 flex flex-col justify-between snap-start transition-all duration-300"
            >
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#dfb16b] block mb-3">
                  {item.title}
                </span>
                <p className="text-sm sm:text-[15px] text-[#f5e6cc]/90 font-normal tracking-tight leading-relaxed">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#dfb16b]/20 flex items-center justify-between text-xs">
                <div>
                  <span className="block font-semibold text-[#dfb16b] tracking-tight">
                    {item.author}
                  </span>
                  <span className="text-[#dfb16b]/70 font-normal tracking-tight">
                    {item.location}
                  </span>
                </div>
                <span className="text-[11px] text-[#dfb16b]/70">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}