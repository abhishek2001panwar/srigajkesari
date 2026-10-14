"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, Gem } from "lucide-react";

interface CollectionItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
}

const collectionsData: CollectionItem[] = [
  {
    id: "ratnavali",
    name: "Ratnavali",
    tagline: "Beads, Pearls & More",
    description: "Hand-strung natural Basra pearls, luminous emerald beads, and fluid heritage strands.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/ratnavali.webp",
    href: "/collection#ratnavali",
  },
  {
    id: "suvarna",
    name: "Suvarna",
    tagline: "The KGF Gold Heritage",
    description: "Rooted in the legendary deep-earth gold of Karnataka, sculpted with deliberate ancestral weight.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/suvarna.jpg",
    href: "/collection#suvarna",
  },
  {
    id: "rajasi",
    name: "Rajasi",
    tagline: "The Royal Jadau",
    description: "Uncut Polki & royal Kundan shaped to mirror the grand celebrations of Rajasthan durbars.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/rajasi.jpg",
    href: "/collection#rajasi",
  },
  {
    id: "devatri",
    name: "Devatri",
    tagline: "Temple Gold Sculpture",
    description: "Sacred Nakshi hand-carving and divine iconography carrying timeless spiritual grace.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/devatri.jpg",
    href: "/collection#devatri",
  },
  {
    id: "viraasat",
    name: "Viraasat",
    tagline: "Antique Heirlooms",
    description: "Vintage-finish gold holding ancient patinas, temple motifs, and family legacy value.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/viraasat.jpg",
    href: "/collection#viraasat",
  },
  {
    id: "niharika",
    name: "Niharika",
    tagline: "Diamond Reserve",
    description: "Certified rare solitaires paired with sleek modern architectural silhouettes.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/10/niharika.jpg",
    href: "/collection#niharika",
  },
  {
    id: "purusa",
    name: "Purusa",
    tagline: "Men's Fine Jewellery",
    description: "Quiet confidence, ergonomic heft, and solid gold precision crafted for the modern patron.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/10/purusa.jpg",
    href: "/collection#purusa",
  },
  {
    id: "kasu",
    name: "Kasu",
    tagline: "The Sacred Kasu Mala",
    description: "Cherished coins of divine prosperity designed to be passed across unbroken generations.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/10/kasu.jpg",
    href: "/collection#kasu",
  },
];

function LuxuryCard({ item }: { item: CollectionItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Parallax calculations based on viewport travel
      const travel = vh + rect.height;
      const progress = (vh - rect.top) / travel;
      const clamped = Math.min(Math.max(progress, 0), 1);

      // Heightened smooth parallax drift (-16% to +16%)
      const offset = (clamped - 0.5) * 32;
      setParallaxY(offset);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const descWords = item.description.split(" ");

  return (
    <div ref={cardRef} className="group flex flex-col w-full select-none">
      {/* 1. VISUAL PORTAL: Taller aspect ratio with sharp edges (rounded-none) */}
      <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.8] lg:aspect-[4/4.4] overflow-hidden rounded-none border border-[#EAE4DC] bg-[#160312]">
        {/* Parallax Image Layer with increased headroom */}
        <div
          className="absolute -top-[18%] inset-x-0 h-[136%] w-full will-change-transform transition-transform duration-100 ease-out"
          style={{
            transform: `translate3d(0, ${parallaxY}%, 0) scale(1.12)`,
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center group-hover:scale-[1.05] transition-transform duration-1000 ease-out"
          />
        </div>

        {/* Dynamic Dark Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Hover Content: Description & Button Above Image */}
        <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="space-y-4">
            {/* Word-by-Word Description */}
            <p className="font-2 text-xs sm:text-sm text-stone-100 font-light leading-relaxed max-w-md drop-shadow-sm">
              {descWords.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="inline-block overflow-hidden mr-[0.24em] last:mr-0 align-top"
                >
                  <span
                    className="inline-block translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transitionDelay: `${wIdx * 20}ms`,
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </p>

            {/* Action Link Button */}
            <div className="pt-1 pointer-events-auto">
              <Link
                href={item.href}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white text-[#4C1137] hover:bg-[#FAF8F5] text-[10px] sm:text-[11px] uppercase tracking-[0.26em] font-medium transition-all shadow-md rounded-none group/btn active:scale-95"
              >
                <span>Explore Pieces</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-[#4C1137]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EDITORIAL HEADING BAR BELOW THE IMAGE */}
      <div className="pt-4 sm:pt-5 pb-2 flex items-center justify-between border-b border-[#EAE4DC]/80">
        <div className="space-y-1">
          <span className="font-3 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#8C6D37] font-medium block">
            {item.tagline}
          </span>
          <h3 className="font-1 text-2xl sm:text-3xl text-[#4C1137] uppercase tracking-[0.05em] group-hover:text-stone-900 transition-colors">
            {item.name}
          </h3>
        </div>

        {/* Modern Gem Icon on the Right */}
        <Link
          href={item.href}
          aria-label={`View ${item.name} collection`}
          className="w-11 h-11 rounded-none border border-[#EAE4DC] flex items-center justify-center text-[#4C1137] bg-[#FAF8F5] group-hover:bg-[#4C1137] group-hover:text-white group-hover:border-[#4C1137] transition-all duration-300 shadow-2xs group-hover:scale-105 active:scale-95"
        >
          <Gem className="w-4 h-4 stroke-[1.4] group-hover:rotate-12 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}

export default function CollectionsShowcase() {
  return (
    <section
      id="collections"
      className="w-full bg-[#FAF8F5] text-stone-900 py-24 sm:py-32 px-5 sm:px-10 lg:px-16 select-none border-t border-[#EAE4DC]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#EAE4DC] pb-8 mb-14 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.42em] text-[#4C1137] font-semibold flex items-center gap-2">
             
                Curated Masterpieces
              </span>
            </div>
            <h2 className="font-1 text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.06em] text-[#4C1137]">
              Our Collections
            </h2>
          </div>

          <Link
            href="/collection"
            className="group inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.28em] text-[#4C1137] font-medium hover:opacity-75 transition-opacity"
          >
            <span>Explore All Heirlooms</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 sm:gap-x-12 gap-y-16 sm:gap-y-20">
          {collectionsData.map((item) => (
            <LuxuryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}