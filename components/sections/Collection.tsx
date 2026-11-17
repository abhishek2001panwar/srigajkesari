"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CollectionItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  objectPosition: string; // Set exact focal point per image e.g. "50% 50%", "50% 25%", "center top"
  href: string;
}

const collectionsData: CollectionItem[] = [
  {
    id: "ratnavali",
    name: "Ratnavali",
    tagline: "Beads & Basra Pearls",
    description:
      "Hand-strung natural pearls, luminous emerald beads, and fluid heritage strands.",
    image: "/ratnavali.webp",
    objectPosition: "80% 75%",
    href: "/collection#ratnavali",
  },
  {
    id: "suvarna",
    name: "Suvarna",
    tagline: "The 916 Gold Heritage",
    description:
      "Rooted in Karnataka’s deep-earth gold traditions, sculpted with generational heft.",
    image: "/suvarna.jpg",
    objectPosition: "50% 50%",
    href: "/collection#suvarna",
  },
  {
    id: "rajasi",
    name: "Rajasi",
    tagline: "The Royal Jadau",
    description:
      "Uncut Polki and hand-set Kundan capturing the durbar aesthetics of Rajasthan.",
    image: "/rajasi.jpg",
    objectPosition: "50% 80%",
    href: "/collection#rajasi",
  },
  {
    id: "devatri",
    name: "Devatri",
    tagline: "Temple Nakshi Sculpture",
    description:
      "Hand-carved sacred iconography and divine relief motifs in pure gold.",
    image: "/devatri.jpg",
    objectPosition: "50% 50%",
    href: "/collection#devatri",
  },
  {
    id: "viraasat",
    name: "Viraasat",
    tagline: "Antique Heirlooms",
    description:
      "Vintage-finish gold holding historic patinas and permanent family heirloom value.",
    image: "/viraasat.jpg",
    objectPosition: "50% 80%",
    href: "/collection#viraasat",
  },
  {
    id: "niharika",
    name: "Niharika",
    tagline: "The Diamond Reserve",
    description:
      "Certified rare solitaires paired with sleek modern architectural silhouettes.",
    image: "/niharika.jpg",
    objectPosition: "50% 50%",
    href: "/collection#niharika",
  },
  {
    id: "purusa",
    name: "Purusa",
    tagline: "Men's Fine Jewellery",
    description:
      "Ergonomic weight, solid gold precision, and understated solitaire craftsmanship.",
    image: "/purusa.jpg",
    objectPosition: "50% 50%",
    href: "/collection#purusa",
  },
  {
    id: "kasu",
    name: "Kasu",
    tagline: "The Sacred Kasu Mala",
    description:
      "Auspicious coin strands of prosperity designed to transition across generations.",
    image: "/kasu.jpg",
    objectPosition: "50% 50%",
    href: "/collection#kasu",
  },
];

function AppleCollectionCard({ item }: { item: CollectionItem }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl overflow-hidden bg-[#491239] border border-[#dfb16b]/25 select-none transition-all duration-500 shadow-[0_18px_40px_-14px_rgba(73,18,57,0.35)] hover:shadow-[0_28px_56px_-12px_rgba(73,18,57,0.5)] hover:border-[#dfb16b]/60">
      {/* 1. Clean Separated Header Block */}
      <div className="p-8 sm:p-10 z-10 flex flex-col items-start">
        <span className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#dfb16b]/85 mb-1.5">
          {item.tagline}
        </span>
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#dfb16b] mb-3">
          {item.name}
        </h3>
        <p className="text-sm sm:text-base text-[#f5e6cc]/85 font-normal tracking-tight leading-relaxed max-w-md mb-6">
          {item.description}
        </p>

        <Link
          href={item.href}
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium tracking-tight text-[#dfb16b] hover:text-white hover:underline group/btn transition-colors"
        >
          <span>Explore collection</span>
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 2. Unzoomed Full-Frame Image Stage with Direct Inline objectPosition */}
      <div className="relative w-full aspect-[4/4.2] sm:aspect-[4/3.8] overflow-hidden border-t border-[#dfb16b]/20 bg-[#320a26]">
        <img
          src={item.image}
          alt={item.name}
          style={{ objectPosition: item.objectPosition }}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />
      </div>
    </div>
  );
}

export default function CollectionsShowcase() {
  return (
    <section
      id="collections"
      className="relative z-20 w-full bg-[#FFFFFF] text-[#491239] py-24 sm:py-36 px-6 sm:px-10 lg:px-16 select-none border-t border-[#dfb16b]/25"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* ================= EDITORIAL HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 sm:pb-14 mb-10 sm:mb-14 border-b border-[#dfb16b]/25 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2.5">
            
              <span className="text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9f732e] block">
                Curated Heirlooms
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#491239] leading-[1.05]">
              Explore the <br />
              <span className="text-[#dfb16b] font-normal">archival collections.</span>
            </h2>
          </div>

          <Link
            href="/collection"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-tight text-[#491239] hover:text-[#9f732e] hover:underline self-start md:self-end group transition-colors"
          >
            <span>View all archival editions</span>
            <ChevronRight className="w-4 h-4 text-[#dfb16b] group-hover:translate-x-0.5 transition-transform" />
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