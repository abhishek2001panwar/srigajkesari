"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ArrowLeft, Heart } from "lucide-react";

interface CollectionItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
}

const collectionsData: CollectionItem[] = [
  {
    id: "ratnavali",
    name: "Ratnavali",
    tagline: "Beads, Pearls & more",
    description: "Hand-strung natural pearls and precious gemstone beads",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/ratnavali.webp",
    href: "/collection#ratnavali",
    badge: "01",
  },
  {
    id: "suvarna",
    name: "Suvarna",
    tagline: "The KGF Gold Collection",
    description:
      "Inspired by the legendary gold heart of Karnataka that pays homage to ancient mining heritage",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/suvarna.jpg",
    href: "/collection#suvarna",
    badge: "02",
  },
  {
    id: "rajasi",
    name: "Rajasi",
    tagline: "The Royal Jadau",
    description: "Uncut Kundan-Polki inspired by the grand durbars of Rajasthan.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/rajasi.jpg",
    href: "/collection#rajasi",
    badge: "03",
  },
  {
    id: "devatri",
    name: "Devatri",
    tagline: "Temple Gold",
    description: "Sacred iconography, nakshi work, and divine motifs",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/devatri.jpg",
    href: "/collection#devatri",
    badge: "04",
  },
  {
    id: "viraasat",
    name: "Viraasat",
    tagline: "Antique Heirlooms",
    description: "Vintage-finish capturing the patinas, motifs, and mystery of India",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/viraasat.jpg",
    href: "/collection#viraasat",
    badge: "05",
  },
  {
    id: "niharika",
    name: "Niharika",
    tagline: "Diamond Reserve",
    description: "Rare, certified solitaires crafted for contemporary silhouettes",
    image: "https://srigajkesari.com/wp-content/uploads/2026/10/niharika.jpg",
    href: "/collection#niharika",
    badge: "06",
  },
  {
    id: "purusa",
    name: "Purusa",
    tagline: "Men’s Collection",
    description: "A modern, refined touch to men’s everyday fine jewellery",
    image: "https://srigajkesari.com/wp-content/uploads/2026/10/purusa.jpg",
    href: "/collection#purusa",
    badge: "07",
  },
  {
    id: "kasu",
    name: "Kasu",
    tagline: "The Sacred Kasu Mala Collection",
    description: "Vintage-finish capturing the patinas, motifs, and mystery of India",
    image: "https://srigajkesari.com/wp-content/uploads/2026/10/kasu.jpg",
    href: "/collection#kasu",
    badge: "08",
  },
];

export default function CollectionsShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="collections"
      className="w-full bg-[#FAF8F5] text-stone-900 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 select-none border-t border-[#EAE4DC]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header Row */}
        <div className="flex items-center justify-between border-b border-[#EAE4DC] pb-6 mb-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#4C1137] font-semibold block mb-1">
              Curated Masterpieces
            </span>
            <h2 className="font-1 text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.08em] text-[#4C1137]">
              Our Collections
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/collection"
              className="group flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#4C1137] font-medium hover:opacity-80 transition-opacity"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Slider Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 hover:border-[#4C1137] hover:text-[#4C1137] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-full bg-[#4C1137] text-white flex items-center justify-center hover:bg-[#380c29] transition-colors shadow-sm cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Product Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {collectionsData.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] flex flex-col justify-between group bg-white border border-[#EAE4DC] p-5 transition-all duration-300 hover:shadow-lg hover:border-[#4C1137]/30"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-[#F5EFE6] overflow-hidden mb-5 flex items-center justify-center border border-[#EAE4DC]/60">
                  {/* Sequence Badge */}
                  {/* {item.badge && (
                    <span className="absolute top-3 left-3 z-10 text-[9px] uppercase tracking-[0.2em] font-medium text-stone-700 bg-white/95 backdrop-blur-xs px-2 py-0.5 border border-stone-200">
                      {item.badge}
                    </span>
                  )} */}

                  {/* Wishlist Heart Icon */}
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    aria-label="Save to Wishlist"
                    className="absolute top-3 right-3 z-10 p-1.5 rounded-full hover:scale-110 transition-transform text-stone-600 hover:text-[#4C1137] cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        wishlist[item.id]
                          ? "fill-[#4C1137] text-[#4C1137]"
                          : "stroke-[1.6]"
                      }`}
                    />
                  </button>

                  {/* Product Visual */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Editorial Typography */}
                <div className="space-y-1.5">
                  <h3 className="font-1 text-xl sm:text-2xl text-stone-900 leading-snug group-hover:text-[#4C1137] transition-colors">
                    {item.name}
                  </h3>

                  <p className="font-3 text-[11px] uppercase tracking-[0.2em] text-[#8C6D37] font-medium">
                    {item.tagline}
                  </p>

                  <p className="font-2 text-xs text-stone-500 leading-relaxed font-light line-clamp-2 pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Explore Button */}
              <div className="pt-6 mt-4 border-t border-[#EAE4DC]">
                <Link
                  href={item.href}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 bg-[#FAF8F5] group-hover:bg-[#4C1137] text-stone-800 group-hover:text-white text-[10px] uppercase tracking-[0.22em] font-medium transition-all duration-300 border border-[#EAE4DC] group-hover:border-[#4C1137]"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}