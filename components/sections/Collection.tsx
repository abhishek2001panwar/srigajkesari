"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface CollectionItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  objectPosition: string;
  href: string;
}

const collectionsData: CollectionItem[] = [
  {
    id: "ratnavali",
    name: "Ratnavali",
    tagline: "Beads, Pearls & more",
    description:
      "Hand-strung natural pearls and precious gemstone beads",
    image: "/ratnavali.webp",
    objectPosition: "80% 75%",
    href: "/collection#ratnavali",
  },
  {
    id: "suvarna",
    name: "Suvarna",
    tagline: "The KGF Gold Collection",
    description:
      "Inspired by the legendary gold heart of Karnataka that pays homage to ancient mining heritage",
    image: "/suvarna.jpg",
    objectPosition: "50% 50%",
    href: "/collection#suvarna",
  },
  {
    id: "rajasi",
    name: "Rajasi",
    tagline: "The Royal Jadau",
    description:
      "Uncut Kundan-Polki inspired by the grand durbars of Rajasthan.",
    image: "/rajasi.jpg",
    objectPosition: "50% 80%",
    href: "/collection#rajasi",
  },
  {
    id: "devatri",
    name: "Devatri",
    tagline: "Temple Gold",
    description:
      "Sacred iconography, nakshi work, and divine motifs",
    image: "/devatri.jpg",
    objectPosition: "50% 50%",
    href: "/collection#devatri",
  },
  {
    id: "viraasat",
    name: "Viraasat",
    tagline: "Antique Heirlooms",
    description:
      "Vintage-finish capturing the patinas, motifs, and mystery of India",
    image: "/viraasat.jpg",
    objectPosition: "50% 80%",
    href: "/collection#viraasat",
  },
  {
    id: "niharika",
    name: "Niharika",
    tagline: "Diamond Reserve",
    description:
      "Rare, certified solitaires crafted for contemporary silhouettes",
    image: "/niharika.jpg",
    objectPosition: "50% 50%",
    href: "/collection#niharika",
  },
  {
    id: "purusa",
    name: "Purusa",
    tagline: "Men's Collection",
    description:
      "A modern, refined touch to men's everyday fine jewellery",
    image: "/purusa.jpg",
    objectPosition: "50% 50%",
    href: "/collection#purusa",
  },
  {
    id: "kasu",
    name: "Kasu",
    tagline: "The Sacred Kasu Mala Collection",
    description:
      "Vintage-finish capturing the patinas, motifs, and mystery of India",
    image: "/kasu.jpg",
    objectPosition: "50% 50%",
    href: "/collection#kasu",
  },
];

function EditorialCollectionColumn({ item }: { item: CollectionItem }) {
  return (
    <Link
      href={item.href}
      className="group shrink-0 w-[265px] sm:w-[295px] lg:w-[310px] snap-start flex flex-col items-center text-center select-none"
    >
      {/* 1. Top Portrait Image Frame */}
      <div className="relative w-full aspect-[4/4.3] rounded-2xl overflow-hidden bg-[#320a26] border border-[#dfb16b]/35 shadow-[0_16px_38px_-14px_rgba(73,18,57,0.18)] group-hover:border-[#dfb16b] group-hover:shadow-[0_24px_48px_-12px_rgba(73,18,57,0.28)] transition-all duration-500">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: item.objectPosition }}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />

        {/* Subtle Inner Champagne Gold Hairline Rim */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#dfb16b]/25 group-hover:ring-[#dfb16b]/55 transition-all pointer-events-none" />
      </div>

      {/* 2. Centered Editorial Details Below Image */}
      <div className="w-full pt-6 px-2 flex flex-col items-center flex-1 justify-between">
        <div className="space-y-1.5">
          {/* Collection Title */}
          <h3 className="text-xl sm:text-2xl font-medium uppercase tracking-[0.14em] text-[#491239] group-hover:text-[#9f732e] transition-colors">
            {item.name}
          </h3>

          {/* Subtitle / Tagline */}
          <p className="text-xs sm:text-[13px] font-medium tracking-[0.04em] text-[#9f732e]">
            {item.tagline}
          </p>

          {/* Description */}
          <p className="pt-2 text-xs sm:text-[13px] text-[#491239]/80 font-normal leading-relaxed max-w-[275px] mx-auto">
            {item.description}
          </p>
        </div>

        {/* 3. Champagne Gold Pill CTA ("Explore ->") */}
        <div className="pt-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#dfb16b] group-hover:bg-[#491239] text-[#24061a] group-hover:text-[#dfb16b] border border-[#dfb16b] px-5 py-2 text-xs font-semibold tracking-[0.06em] shadow-[0_8px_20px_-6px_rgba(223,177,107,0.55)] group-hover:shadow-[0_10px_24px_-6px_rgba(73,18,57,0.35)] transition-all duration-300">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function CollectionsShowcase() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollRatio, setScrollRatio] = useState(0);

  const updateScrollState = () => {
    const el = rowRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(maxScroll > 8 && el.scrollLeft < maxScroll - 8);
    setScrollRatio(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  };

  useEffect(() => {
    const rowEl = rowRef.current;
    if (rowEl) {
      rowEl.addEventListener("scroll", updateScrollState, { passive: true });
      updateScrollState();
    }
    window.addEventListener("resize", updateScrollState);

    return () => {
      if (rowEl) rowEl.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleSlide = (direction: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    const step = Math.max(310, el.clientWidth * 0.75);
    el.scrollTo({
      left: el.scrollLeft + (direction === "right" ? step : -step),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="collections"
      className="relative z-20 w-full bg-[#FAF8F5] text-[#491239] py-20 sm:py-28 select-none border-t border-[#dfb16b]/25 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* ================= EDITORIAL HEADER + ROW CONTROLS ================= */}
        <div className="px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-end justify-between pb-10 sm:pb-12 mb-10 sm:mb-12 border-b border-[#dfb16b]/25 gap-6">
          <div className="max-w-2xl">
            <span className="text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9f732e] block mb-2.5">
              Curated Heirlooms
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#491239] leading-[1.06]">
              Explore the{" "}
              <span className="text-[#dfb16b] font-normal">archival collections.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 self-start md:self-end">
            <Link
              href="/collection"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-tight text-[#491239] hover:text-[#9f732e] hover:underline group transition-colors mr-2"
            >
              <span>View all editions</span>
              <ChevronRight className="w-4 h-4 text-[#dfb16b] group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Left / Right Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleSlide("left")}
                disabled={!canScrollLeft}
                aria-label="Previous collections"
                className="w-10 h-10 rounded-full border border-[#491239]/25 bg-white text-[#491239] flex items-center justify-center hover:bg-[#491239] hover:text-[#dfb16b] hover:border-[#491239] disabled:opacity-25 disabled:hover:bg-white disabled:hover:text-[#491239] transition-all cursor-pointer active:scale-95 shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleSlide("right")}
                disabled={!canScrollRight}
                aria-label="Next collections"
                className="w-10 h-10 rounded-full border border-[#491239]/25 bg-white text-[#491239] flex items-center justify-center hover:bg-[#491239] hover:text-[#dfb16b] hover:border-[#491239] disabled:opacity-25 disabled:hover:bg-white disabled:hover:text-[#491239] transition-all cursor-pointer active:scale-95 shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= SINGLE-ROW HORIZONTAL COLLECTION STAGE ================= */}
        <div
          ref={rowRef}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          className="flex flex-nowrap items-stretch gap-6 sm:gap-7 px-6 sm:px-10 lg:px-16 overflow-x-auto snap-x snap-proximity pb-4 [&::-webkit-scrollbar]:hidden"
        >
          {collectionsData.map((item) => (
            <EditorialCollectionColumn key={item.id} item={item} />
          ))}
        </div>

        {/* ================= MINIMAL CHAMPAGNE GOLD SCROLL PROGRESS BAR ================= */}
        <div className="px-6 sm:px-10 lg:px-16 mt-8">
          <div className="w-full h-[2px] bg-[#491239]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#491239] to-[#dfb16b] rounded-full transition-all duration-200 ease-out"
              style={{
                width: `${Math.max(16, scrollRatio * 100)}%`,
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}