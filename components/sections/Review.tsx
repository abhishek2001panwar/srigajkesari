"use client";

import React, { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";

interface Review {
  id: string;
  roman: string;
  title: string;
  comment: string;
  author: string;
  location: string;
  date: string;
  verified?: boolean;
}

const reviewsData: Review[] = [
  {
    id: "1",
    roman: "I",
    title: "Pristine Presentation & Care",
    comment:
      "Helpful, genuinely patient staff. Our bespoke anniversary acquisition was packaged with pristine presentation and certified paperwork ready on arrival.",
    author: "Dean Stevens",
    location: "Bengaluru",
    date: "Oct 5, 2026",
    verified: true,
  },
  {
    id: "2",
    roman: "II",
    title: "Generational Kundan Restoration",
    comment:
      "Exceptional after-sales artistry. Their karigars polished our grandmother’s heirloom Kundan choker and adjusted the safety clasp seamlessly without disturbing the antique patina.",
    author: "Stella Overall",
    location: "Bengaluru",
    date: "Oct 5, 2026",
    verified: true,
  },
  {
    id: "3",
    roman: "III",
    title: "Mastery In Temple Nakshi",
    comment:
      "Guided us with immense devotion through their temple gold vault in the Malleshwaram boutique. Every motif carries meaning and genuine gold weight.",
    author: "Neil Crossland",
    location: "Malleshwaram",
    date: "Oct 4, 2026",
    verified: true,
  },
  {
    id: "4",
    roman: "IV",
    title: "Bespoke Royal Solitaire",
    comment:
      "I absolutely love my ring. It is even more magnificent in person and feels irreplaceable to wear. The design is elegant, unique, and full of royal character.",
    author: "Aileen",
    location: "Bengaluru",
    date: "Oct 3, 2026",
    verified: true,
  },
  {
    id: "5",
    roman: "V",
    title: "Sentimental Bridal Trousseau",
    comment:
      "A precious necklace from our wedding day required custom restringing. The atelier handled it with absolute reverence and had it ready in mint packaging within days.",
    author: "Ellie Brown",
    location: "Bengaluru",
    date: "Oct 3, 2026",
    verified: true,
  },
];

export default function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Maximum valid scroll index (5 reviews - 3 visible on desktop = max start index 2)
  const maxDesktopIndex = reviewsData.length - 3;

  const updateActiveIndex = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }
    const ratio = scrollLeft / maxScroll;
    const index = Math.round(ratio * maxDesktopIndex);
    setActiveIndex(Math.min(Math.max(index, 0), maxDesktopIndex));
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
        ? Math.min(activeIndex + 1, maxDesktopIndex)
        : Math.max(activeIndex - 1, 0);
    scrollToSlide(nextIdx);
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] text-stone-900 py-20 sm:py-28 lg:py-32 px-5 sm:px-10 lg:px-16 overflow-hidden select-none border-t border-[#EAE4DC]">
      {/* Background Architectural Monogram */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-1 text-[22vw] tracking-[0.24em] text-[#4C1137]/[0.025] leading-none pointer-events-none select-none z-0">
        GAJKESARI
      </span>

      <div className="relative z-10 max-w-[1500px] mx-auto">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#EAE4DC] pb-8 mb-12 sm:mb-16 gap-6">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.42em] text-[#8C6D37] font-semibold">
                Client Testimonials &bull; Malleshwaram
              </span>
            </div>

            <h2 className="font-1 text-3xl sm:text-4xl md:text-5xl lg:text-[52px] uppercase tracking-[0.05em] text-stone-900 leading-[1.08]">
              Words From <span className="italic font-light text-[#4C1137]">Our Patrons</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => handleArrowScroll("left")}
              disabled={activeIndex === 0}
              aria-label="Previous reviews"
              className="w-11 h-11 border border-stone-800 bg-white text-stone-900 flex items-center justify-center hover:bg-stone-900 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 rounded-none cursor-pointer active:scale-95 shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4 stroke-[1.6]" />
            </button>

            <button
              onClick={() => handleArrowScroll("right")}
              disabled={activeIndex >= maxDesktopIndex}
              aria-label="Next reviews"
              className="w-11 h-11 border border-[#4C1137] bg-[#4C1137] text-white flex items-center justify-center hover:bg-[#340b25] hover:border-[#340b25] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 rounded-none cursor-pointer active:scale-95 shadow-2xs"
            >
              <ChevronRight className="w-4 h-4 stroke-[1.6]" />
            </button>
          </div>
        </div>

        {/* ================= CAROUSEL TRACK: EXACTLY 3 PER SCREEN ON DESKTOP ================= */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex items-stretch gap-6 lg:gap-7 overflow-x-auto scroll-smooth no-scrollbar py-3 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviewsData.map((item, idx) => {
              const isLeadCard = activeIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => scrollToSlide(Math.min(idx, maxDesktopIndex))}
                  className={`group relative flex-shrink-0 w-[88vw] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3.5rem)/3)] min-h-[390px] sm:min-h-[420px] flex flex-col justify-between p-8 sm:p-9 bg-white border rounded-none transition-all duration-500 cursor-pointer snap-start ${
                    isLeadCard
                      ? "border-[#4C1137] shadow-lg -translate-y-1"
                      : "border-[#EAE4DC] hover:border-stone-400 opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Watermark Quote Mark */}
                  <Quote className="absolute top-7 right-7 w-10 h-10 text-[#4C1137]/[0.05] pointer-events-none rotate-180 transition-transform duration-500 group-hover:scale-110" />

                  {/* Top Content */}
                  <div>
                    {/* Star Rating + Roman Chapter Label */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#FAF8F5]">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#8C6D37] stroke-[#8C6D37]"
                          />
                        ))}
                      </div>

                     
                    </div>

                    {/* Headline */}
                    <h3 className="font-1 text-lg sm:text-[19px] text-[#4C1137] leading-snug mb-3.5 transition-colors">
                      {item.title}
                    </h3>

                    {/* Testimonial Quote */}
                    <p className="font-2 italic text-[12.5px] sm:text-[13.5px] text-stone-600 font-light leading-relaxed tracking-wide">
                      &ldquo;{item.comment}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Patron Meta Stamp */}
                  <div className="pt-6 mt-6 border-t border-[#FAF8F5] flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-3 text-[11px] uppercase tracking-[0.24em] font-medium text-stone-900 group-hover:text-[#4C1137] transition-colors">
                          {item.author}
                        </span>
                        {item.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D37]" />
                        )}
                      </div>

                      <span className="font-2 text-[10px] text-stone-400 block mt-0.5 tracking-wider font-light">
                        {item.date} &bull; {item.location}
                      </span>
                    </div>

                    <span className="w-1.5 h-1.5 rotate-45 border border-[#8C6D37]/50" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= STEP INDICATORS (Grouped to Match Desktop Paginated Steps) ================= */}
          <div className="flex items-center justify-center gap-2.5 mt-12 sm:mt-14">
            {Array.from({ length: maxDesktopIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToSlide(dotIdx)}
                aria-label={`Go to slide set ${dotIdx + 1}`}
                className={`transition-all duration-500 rounded-none cursor-pointer ${
                  activeIndex === dotIdx
                    ? "w-8 h-[2px] bg-[#4C1137]"
                    : "w-3 h-[2px] bg-[#EAE4DC] hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}