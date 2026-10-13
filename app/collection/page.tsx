"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import SriGajkesariNavbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

interface CollectionData {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  description: string;
  roman: string;
  images: [string, string];
}

const collectionsData: CollectionData[] = [
  {
    id: "rajasi",
    name: "Rajasi",
    subtitle: "THE ROYAL JADAU COLLECTION",
    badge: "Uncut Polki & Kundan",
    roman: "I",
    description:
      "Inspired by the grand durbars of Rajasthan, the Rajasi collection features hand-set Kundan-Polki work in gold. Designed for grand weddings and royal trousseaus, each piece captures the timeless charm of uncut gemstones.",
    images: [
      "https://srigajkesari.com/wp-content/uploads/2026/09/r1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/r2.webp",
    ],
  },
  {
    id: "suvarna",
    name: "Suvarna",
    subtitle: "THE 916 GOLD COLLECTION",
    badge: "22KT BIS Hallmarked",
    roman: "II",
    description:
      "Rooted in the legendary deep-earth gold heritage of Karnataka, these pieces are designed for those who command a powerful presence. Each creation captures the deep, historic weight of earth-born gold, transformed by master artisans into bold statements of timeless authority.",
    images: [
      "https://srigajkesari.com/wp-content/uploads/2026/09/suv1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/suv2.webp",
    ],
  },
  {
    id: "ratnavali",
    name: "Ratnavali",
    subtitle: "THE BEADS & PEARLS COLLECTION",
    badge: "Natural Emeralds & Basra Pearls",
    roman: "III",
    description:
      "A celebration of fluid grace and vibrant colour, the collection brings together natural emeralds, precious gemstone beads, and luminous organic pearls. Whether worn as a layered emerald mala for a grand wedding or a subtle pearl strand for daily elegance.",
    images: [
      "https://srigajkesari.com/wp-content/uploads/2026/09/ratna1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/ratna2.webp",
    ],
  },
  {
    id: "devatri",
    name: "Devatri",
    subtitle: "THE TEMPLE GOLD COLLECTION",
    badge: "Nakshi Hand-Sculpted",
    roman: "IV",
    description:
      "Devatri celebrates India's sacred artistic traditions. With detailed Nakshi hand-carving and divine iconography, these pieces carry grace, blessings, and cultural pride.",
    images: [
      "https://srigajkesari.com/wp-content/uploads/2026/09/devatri1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/devatri2.webp",
    ],
  },
  {
    id: "niharika",
    name: "Niharika",
    subtitle: "THE DIAMOND RESERVE",
    badge: "GIA / IGI Certified",
    roman: "V",
    description:
      "Brilliant, rare, and certified. Niharika brings together top-tier solitaires and diamonds set in fluid, modern silhouettes, perfect for engagements, anniversaries, and sleek evening wear.",
    images: [
      "https://srigajkesari.com/wp-content/uploads/2026/09/niharika1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/niharika2.webp",
    ],
  },
  {
    id: "purusa",
    name: "Purusa",
    subtitle: "THE MEN'S JEWELLERY COLLECTION",
    badge: "Solid Gold & Solitaire Craft",
    roman: "VI",
    description:
      "Designed for the man who values quiet confidence and uncompromising quality. Crafted with precision edges, solid weight, and ergonomic fits, Puruṣa is built to seamlessly transition from boardrooms to evening celebrations and everyday wear.",
    images: [
      "https://srigajkesari.com/wp-content/uploads/2026/09/purusa1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/purusa2.webp",
    ],
  },
  {
    id: "kasu",
    name: "Kasu",
    subtitle: "THE SACRED KASU MALAI COLLECTION",
    badge: "Traditional Heritage Gold",
    roman: "VII",
    description:
      "The Kasu Mala is more than a piece of fine jewellery, it is a cherished symbol of divine grace, prosperity, and family heritage across South India. Built with the uncompromised trust every Kasu Mala in this collection is designed to be worn on auspicious days and passed down across generations.",
    images: [
      "https://srigajkesari.com/wp-content/uploads/2026/09/kasu1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/kasu2.webp",
    ],
  },
  {
    id: "viraasat",
    name: "Viraasat",
    subtitle: "THE ANTIQUE HEIRLOOM COLLECTION",
    badge: "Heirloom Patina Finish",
    roman: "VIII",
    description:
      "Crafted to look and feel like family treasures passed down for generations, Viraasat showcases vintage finishes, historic motifs, and heavy gold artistry meant to anchor your family legacy.",
    images: [
      "https://srigajkesari.com/wp-content/uploads/2026/09/vir1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/vir2.webp",
    ],
  },
];

function RevealLine({
  children,
  isRevealed,
  delayMs = 0,
  className = "",
}: {
  children: React.ReactNode;
  isRevealed: boolean;
  delayMs?: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden py-[1px]">
      <span
        className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${className}`}
        style={{
          transform: isRevealed ? "translateY(0)" : "translateY(118%)",
          opacity: isRevealed ? 1 : 0,
          transitionDelay: `${delayMs}ms`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

function CollectionItemCard({
  item,
  index,
}: {
  item: CollectionData;
  index: number;
}) {
  const [activeImgIdx, setActiveImgIdx] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const itemRef = useRef<HTMLElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    let rAFId: number;
    const handleScroll = () => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = vh - rect.top;
      const totalDistance = vh + rect.height;
      const progress = Math.min(Math.max(scrolled / totalDistance, 0), 1);
      setScrollProgress(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rAFId);
      rAFId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  return (
    <article
      ref={itemRef}
      id={item.id}
      className="relative w-full py-8 sm:py-10 border-b border-[#EAE4DC] last:border-b-0"
    >
      <span className="absolute -top-3 right-2 sm:right-6 text-[80px] sm:text-[110px] lg:text-[140px] font-1 text-[#4C1137]/[0.03] select-none pointer-events-none leading-none z-0">
        {item.roman}
      </span>

      <div
        className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
          !isEven ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* ================= EDITORIAL CONTENT (4 COLUMNS) ================= */}
        <div
          className={`lg:col-span-4 space-y-4 ${
            !isEven ? "lg:col-start-9" : ""
          }`}
        >
          <div className="space-y-2">
            <div className="w-9 h-4.5 opacity-75 select-none">
              <img
                src="https://srigajkesari.com/wp-content/uploads/2026/09/b2.svg"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <RevealLine isRevealed={scrollProgress >= 0.1} delayMs={30}>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#4C1137]">
                  0{index + 1} &bull; Archival Series
                </span>
                <span className="text-stone-300">/</span>
                <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] font-medium text-stone-700 bg-[#EFE9DF] px-2.5 py-0.5 rounded-md border border-[#E0D7C8]">
                  <ShieldCheck className="w-3 h-3 text-[#4C1137]" />
                  {item.badge}
                </span>
              </div>
            </RevealLine>
          </div>

          <div>
            <h2 className="font-1 text-2xl sm:text-3xl lg:text-4xl text-[#4C1137] uppercase tracking-[0.05em] leading-tight mb-1">
              <RevealLine isRevealed={scrollProgress >= 0.14} delayMs={60}>
                {item.name}
              </RevealLine>
            </h2>

            <RevealLine isRevealed={scrollProgress >= 0.18} delayMs={90}>
              <p className="font-3 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8C6D37] font-medium">
                {item.subtitle}
              </p>
            </RevealLine>
          </div>

          <div className="font-2 text-stone-600 text-xs sm:text-[13px] md:text-sm font-light leading-relaxed">
            <RevealLine isRevealed={scrollProgress >= 0.22} delayMs={120}>
              {item.description}
            </RevealLine>
          </div>

          {/* Perspective Selector */}
          <div className="pt-0.5 flex items-center gap-2">
            <button
              onClick={() => setActiveImgIdx(0)}
              className={`text-[9px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-md border transition-all duration-300 cursor-pointer ${
                activeImgIdx === 0
                  ? "border-[#4C1137] bg-[#4C1137] text-white shadow-xs"
                  : "border-stone-300 text-stone-600 hover:border-stone-400 bg-white"
              }`}
            >
              Perspective 01
            </button>
            <button
              onClick={() => setActiveImgIdx(1)}
              className={`text-[9px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-md border transition-all duration-300 cursor-pointer ${
                activeImgIdx === 1
                  ? "border-[#4C1137] bg-[#4C1137] text-white shadow-xs"
                  : "border-stone-300 text-stone-600 hover:border-stone-400 bg-white"
              }`}
            >
              Perspective 02
            </button>
          </div>

          <div className="overflow-hidden pt-1">
            <div
              className={`transition-all duration-700 ease-out ${
                scrollProgress >= 0.26
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href={`/contact?collection=${encodeURIComponent(item.name)}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4C1137] hover:bg-[#340b25] text-white text-[10px] uppercase tracking-[0.22em] font-medium transition-all shadow-sm hover:shadow-md rounded-md group active:scale-95"
              >
                <span>Reserve Private Viewing</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ================= FUL IMAGE CONTAINER (8 COLUMNS) ================= */}
        <div
          className={`lg:col-span-8 flex flex-col items-center ${
            !isEven ? "lg:col-start-1" : ""
          }`}
        >
          {/* Main Stage: W-ful wit overflow-hidden ɛn absolute slides we de swipe ful wan */}
          <div className="relative w-full max-w-[720px] aspect-[16/10] sm:aspect-[16/9] rounded-md overflow-hidden border border-[#EAE4DC] shadow-lg bg-[#180410] select-none group">
            {item.images.map((img, i) => {
              const isCurrent = activeImgIdx === i;
              const isPast = activeImgIdx > i;

              return (
                <div
                  key={i}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center p-2 sm:p-4 bg-[#14020e] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isCurrent
                      ? "translate-x-0 opacity-100 z-10"
                      : isPast
                      ? "-translate-x-full opacity-0 z-0"
                      : "translate-x-full opacity-0 z-0"
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(242,218,176,0.1)_0%,transparent_75%)] pointer-events-none" />
                  <img
                    src={img}
                    alt={`${item.name} View ${i + 1}`}
                    className="w-full h-full object-contain object-center z-10 transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>
              );
            })}

            {/* Slide Tag */}
            <div className="absolute bottom-3 left-3 z-20 bg-black/75 backdrop-blur-md px-2.5 py-1 text-[8px] uppercase tracking-widest text-[#f2dab0] border border-white/15 rounded-md font-mono">
              0{activeImgIdx + 1} / 0{item.images.length}
            </div>

            {/* Arrows */}
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5">
              <button
                onClick={() => setActiveImgIdx(0)}
                disabled={activeImgIdx === 0}
                className="w-8 h-8 rounded-full bg-white/90 text-[#4C1137] flex items-center justify-center hover:bg-white disabled:opacity-35 disabled:cursor-not-allowed shadow-md cursor-pointer transition-all active:scale-95"
                aria-label="Previous view"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveImgIdx(1)}
                disabled={activeImgIdx === 1}
                className="w-8 h-8 rounded-full bg-white/90 text-[#4C1137] flex items-center justify-center hover:bg-white disabled:opacity-35 disabled:cursor-not-allowed shadow-md cursor-pointer transition-all active:scale-95"
                aria-label="Next view"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Thumbnails */}
          <div className="grid grid-cols-2 gap-2.5 mt-2.5 w-full max-w-[260px]">
            {item.images.map((thumb, tIdx) => {
              const isSelected = activeImgIdx === tIdx;
              return (
                <button
                  key={tIdx}
                  onClick={() => setActiveImgIdx(tIdx)}
                  className={`relative w-full h-12 rounded-md overflow-hidden border transition-all duration-300 cursor-pointer p-0.5 bg-[#14020e] ${
                    isSelected
                      ? "border-[#4C1137] ring-1.5 ring-[#4C1137]/40 opacity-100 scale-[1.02]"
                      : "border-[#EAE4DC] opacity-55 hover:opacity-100 hover:border-stone-400"
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${tIdx + 1}`}
                    className="w-full h-full object-contain object-center"
                  />
                  {isSelected && (
                    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#4C1137]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CollectionsPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [ctaProgress, setCtaProgress] = useState(0);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeroLoaded(true);

    let rAFId: number;
    const handleScroll = () => {
      if (!ctaRef.current) return;
      const rect = ctaRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = vh - rect.top;
      const totalDistance = vh + rect.height;
      const progress = Math.min(Math.max(scrolled / totalDistance, 0), 1);
      setCtaProgress(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rAFId);
      rAFId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#4C1137] selection:text-white">
      {/* 1. Fixed Navbar */}
      <div className="fixed top-0 inset-x-0 z-50 w-full bg-[#180410] border-b border-white/10 shadow-md">
        <SriGajkesariNavbar />
      </div>

      {/* 2. Hero Section */}
      <section className="relative mt-20 w-full min-h-[380px] sm:min-h-[440px] lg:h-[80vh] bg-[#30051f] text-white flex flex-col justify-center overflow-hidden select-none">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://srigajkesari.com/wp-content/uploads/2026/09/collection-hero.webp"
            alt="Every Piece Has A Story"
            className={`w-full h-full object-cover object-center transition-all duration-1200 ease-out ${
              heroLoaded ? "scale-100 opacity-95 blur-0" : "scale-105 opacity-0 blur-xs"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#30051f]/90 via-[#30051f]/40 to-transparent" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 w-full px-8 sm:px-14 lg:px-20 pt-20 sm:pt-24">
          <div className="max-w-3xl space-y-2">
            <RevealLine isRevealed={heroLoaded} delayMs={100}>
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[1px] bg-[#f2dab0]/60" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#f2dab0] font-medium flex items-center gap-2">
                  The Archival Catalogue
                </span>
              </div>
            </RevealLine>

            <h1 className="font-1 text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.08em] text-[#f2dab0] leading-tight">
              <RevealLine isRevealed={heroLoaded} delayMs={180}>
                EVERY PIECE
              </RevealLine>
              <RevealLine isRevealed={heroLoaded} delayMs={280}>
                HAS A STORY
              </RevealLine>
            </h1>
          </div>
        </div>
      </section>

      {/* 3. Collections Showcase */}
      <main className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-14 py-8 sm:py-10 space-y-2 sm:space-y-8">
        {collectionsData.map((item, index) => (
          <CollectionItemCard key={item.id} item={item} index={index} />
        ))}
      </main>

      {/* 4. Conversion CTA Banner */}
      <section
        ref={ctaRef}
        className="w-full bg-[#F4EFE6] py-14 sm:py-20 px-6 sm:px-12 border-t border-[#EAE3D6] select-none text-center"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="w-10 h-5 mx-auto opacity-75 select-none">
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/b2.svg"
              alt=""
              className="w-full h-full object-contain mx-auto"
            />
          </div>

          <h2 className="font-1 text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.06em] text-[#4C1137] leading-tight">
            <RevealLine isRevealed={ctaProgress >= 0.16} delayMs={80}>
              FOUND SOMETHING THAT FEELS LIKE YOU?
            </RevealLine>
          </h2>

          <div className="font-2 text-stone-600 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            <RevealLine isRevealed={ctaProgress >= 0.24} delayMs={120}>
              Explore timeless craftsmanship and find a piece worthy of becoming your next heirloom.
            </RevealLine>
          </div>

          <div className="pt-2 overflow-hidden">
  <div
    className={`transition-all duration-700 ease-out ${
      ctaProgress >= 0.3
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6"
    }`}
  >
    <Link
      href="/contact"
      className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#4C1137] hover:bg-[#340b25] text-[#FAF8F5] text-[10px] sm:text-[11px] uppercase tracking-[0.26em] font-medium transition-all duration-300 shadow-sm hover:shadow-md border border-[#4C1137] group cursor-pointer active:scale-95"
    >
      <span>Explore</span>
      <ArrowRight className="w-3.5 h-3.5 text-[#f2dab0] group-hover:translate-x-1.5 transition-transform duration-300" />
    </Link>
  </div>
</div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}