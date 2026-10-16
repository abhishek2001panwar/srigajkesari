"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
    tagline: "Beads & Basra Pearls",
    description:
      "Hand-strung natural pearls, luminous emerald beads, and fluid heritage strands.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/ratnavali.webp",
    href: "/collection#ratnavali",
  },
  {
    id: "suvarna",
    name: "Suvarna",
    tagline: "The 916 Gold Heritage",
    description:
      "Rooted in Karnataka’s deep-earth gold traditions, sculpted with generational heft.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/suvarna.jpg",
    href: "/collection#suvarna",
  },
  {
    id: "rajasi",
    name: "Rajasi",
    tagline: "The Royal Jadau",
    description:
      "Uncut Polki and hand-set Kundan capturing the durbar aesthetics of Rajasthan.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/rajasi.jpg",
    href: "/collection#rajasi",
  },
  {
    id: "devatri",
    name: "Devatri",
    tagline: "Temple Nakshi Sculpture",
    description:
      "Hand-carved sacred iconography and divine relief motifs in pure gold.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/devatri.jpg",
    href: "/collection#devatri",
  },
  {
    id: "viraasat",
    name: "Viraasat",
    tagline: "Antique Heirlooms",
    description:
      "Vintage-finish gold holding historic patinas and permanent family heirloom value.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/09/viraasat.jpg",
    href: "/collection#viraasat",
  },
  {
    id: "niharika",
    name: "Niharika",
    tagline: "The Diamond Reserve",
    description:
      "Certified rare solitaires paired with sleek modern architectural silhouettes.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/10/niharika.jpg",
    href: "/collection#niharika",
  },
  {
    id: "purusa",
    name: "Purusa",
    tagline: "Men's Fine Jewellery",
    description:
      "Ergonomic weight, solid gold precision, and understated solitaire craftsmanship.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/10/purusa.jpg",
    href: "/collection#purusa",
  },
  {
    id: "kasu",
    name: "Kasu",
    tagline: "The Sacred Kasu Mala",
    description:
      "Auspicious coin strands of prosperity designed to transition across generations.",
    image: "https://srigajkesari.com/wp-content/uploads/2026/10/kasu.jpg",
    href: "/collection#kasu",
  },
];

function AppleCollectionCard({ item }: { item: CollectionItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const travel = vh + rect.height;
      const progress = (vh - rect.top) / travel;
      const clamped = Math.min(Math.max(progress, 0), 1);

      // Subtle, controlled Apple-like glide
      const offset = (clamped - 0.5) * -10;
      setParallaxY(offset);
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
    <div
      ref={cardRef}
      className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#F5F5F7] border border-black/[0.04] select-none transition-all duration-500 hover:shadow-xl"
    >
      {/* 1. Header Spec Block (Clean Apple Hierarchy) */}
      <div className="p-8 sm:p-10 pb-0 z-10 flex flex-col items-start justify-between">
        <span className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#86868B] mb-1.5">
          {item.tagline}
        </span>
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F] mb-3">
          {item.name}
        </h3>
        <p className="text-sm sm:text-base text-[#86868B] font-normal tracking-tight leading-relaxed max-w-sm mb-6">
          {item.description}
        </p>

        {/* Apple Text Action Link */}
        <Link
          href={item.href}
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium tracking-tight text-[#4C1137] hover:underline group/btn"
        >
          <span>Explore collection</span>
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 2. Seamless Visual Stage with Soft Parallax */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] mt-6 overflow-hidden">
        <div
          className="absolute -top-[10%] inset-x-0 h-[120%] w-full will-change-transform transition-transform duration-100 ease-out"
          style={{
            transform: `translate3d(0, ${parallaxY}%, 0) scale(1.04)`,
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </div>
  );
}

export default function CollectionsShowcase() {
  return (
    <section
      id="collections"
      className="relative z-20 w-full bg-[#FFFFFF] text-[#1D1D1F] py-24 sm:py-36 px-6 sm:px-10 lg:px-16 select-none border-t border-black/5"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* ================= APPLE EDITORIAL HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 sm:pb-14 mb-10 sm:mb-14 border-b border-black/10 gap-6">
          <div className="max-w-2xl">
            <span className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#86868B] block mb-2.5">
              Curated Heirlooms
            </span>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05]">
              Explore the <br />
              <span className="text-[#86868B]">archival collections.</span>
            </h2>
          </div>

          <Link
            href="/collection"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-tight text-[#4C1137] hover:underline self-start md:self-end group"
          >
            <span>View all archival editions</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* ================= 2-COLUMN MINIMAL BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {collectionsData.map((item) => (
            <AppleCollectionCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}