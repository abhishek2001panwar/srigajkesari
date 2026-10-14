"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
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
    <span className="block overflow-hidden py-[2px]">
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

function FullscreenCollectionStage({
  item,
}: {
  item: CollectionData;
  index: number;
}) {
  const [activeImgIdx, setActiveImgIdx] = useState<number>(0);
  const [smoothParallax, setSmoothParallax] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const itemRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let rAFId: number;
    let targetParallax = 0;
    let currentParallax = 0;

    const calculateScroll = () => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Calculate progress across viewport travel
      const scrolled = vh - rect.top;
      const totalDistance = vh + rect.height;
      const progress = Math.min(Math.max(scrolled / totalDistance, 0), 1);
      setScrollProgress(progress);

      // Amplified speed offset: ±36% high-speed responsive drift
      targetParallax = (progress - 0.5) * 36;
    };

    // Smooth LERP (Linear Interpolation) loop for ultra-fluid 60–120fps motion
    const updateMotion = () => {
      currentParallax += (targetParallax - currentParallax) * 0.1;

      if (Math.abs(targetParallax - currentParallax) > 0.01) {
        setSmoothParallax(currentParallax);
      } else {
        setSmoothParallax(targetParallax);
      }

      rAFId = requestAnimationFrame(updateMotion);
    };

    const onScroll = () => calculateScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    calculateScroll();
    rAFId = requestAnimationFrame(updateMotion);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  const nextSlide = () => {
    setActiveImgIdx((prev) => (prev + 1) % item.images.length);
  };

  const prevSlide = () => {
    setActiveImgIdx((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <article
      ref={itemRef}
      id={item.id}
      className="relative w-full h-[92vh] sm:h-[95vh] lg:h-screen min-h-[640px] max-h-[1080px] overflow-hidden select-none bg-[#14020e] border-b border-[#EAE4DC]/40 group"
    >
      {/* 1. Full-bleed Image Stage with Extra Tall Canvas (-22.5% buffer, 145% height) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {item.images.map((img, i) => {
          const isCurrent = activeImgIdx === i;
          const isPast = activeImgIdx > i;

          return (
            <div
              key={i}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isCurrent
                  ? "translate-x-0 opacity-100 scale-100 z-10"
                  : isPast
                  ? "-translate-x-full opacity-0 scale-105 z-0"
                  : "translate-x-full opacity-0 scale-105 z-0"
              }`}
            >
              <div
                className="relative w-full -top-[22.5%] h-[145%] will-change-transform flex items-center justify-center"
                style={{
                  transform: `translate3d(0, ${smoothParallax}%, 0) scale(1.15)`,
                  transition: "transform 0.04s linear",
                }}
              >
                <img
                  src={img}
                  alt={`${item.name} View ${i + 1}`}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          );
        })}

        {/* Cinematic Multi-directional Shading Vignettes */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/85 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-[#2b0821]/30 mix-blend-multiply pointer-events-none" />
      </div>

      {/* 2. Top-Left Crest */}
      <div className="absolute top-7 left-6 sm:left-12 lg:left-16 z-30 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-8 h-4 opacity-85 select-none filter brightness-200">
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/b2.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* 3. Bottom-Left Editorial Text Box */}
      <div className="absolute bottom-9 sm:bottom-12 lg:bottom-14 left-6 sm:left-12 lg:left-16 z-30 max-w-xl text-white space-y-2.5 sm:space-y-3">
        <RevealLine isRevealed={scrollProgress >= 0.08} delayMs={40}>
          <div className="flex items-center gap-2.5">
            <p className="font-3 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#f2dab0] font-medium">
              {item.subtitle}
            </p>
          </div>
        </RevealLine>

        <h2 className="font-1 text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          <RevealLine isRevealed={scrollProgress >= 0.12} delayMs={80}>
            {item.name}
          </RevealLine>
        </h2>

        <div className="font-2 text-stone-200/95 text-xs sm:text-[13px] font-light leading-relaxed max-w-md drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
          <RevealLine isRevealed={scrollProgress >= 0.16} delayMs={120}>
            {item.description}
          </RevealLine>
        </div>

        <div className="overflow-hidden pt-1.5">
          <div
            className={`flex items-center gap-4 flex-wrap transition-all duration-700 ease-out ${
              scrollProgress >= 0.2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href={`/contact?collection=${encodeURIComponent(item.name)}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#4C1137] hover:bg-[#f2dab0] text-[9.5px] sm:text-[10px] uppercase tracking-[0.24em] font-medium transition-all shadow-lg rounded-full group cursor-pointer active:scale-95"
            >
              <span>Reserve Private Viewing</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Bottom-Right Navigation Dots & Arrows */}
      <div className="absolute bottom-9 sm:bottom-12 lg:bottom-14 right-6 sm:right-12 z-30 flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
          {item.images.map((_, dotIdx) => {
            const isSelected = activeImgIdx === dotIdx;
            return (
              <button
                key={dotIdx}
                onClick={() => setActiveImgIdx(dotIdx)}
                aria-label={`Go to perspective ${dotIdx + 1}`}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  isSelected
                    ? "w-5 h-1.5 bg-[#f2dab0]"
                    : "w-1.5 h-1.5 bg-white/35 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={prevSlide}
            aria-label="Previous view"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#4C1137] border border-white/20 flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next view"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#4C1137] border border-white/20 flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function CollectionsPage() {
  const [ctaProgress, setCtaProgress] = useState(0);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
      {/* 1. Global Fixed Brand Navbar */}
      <div className="fixed top-0 inset-x-0 z-50 w-full bg-[#180410] border-b border-white/10 shadow-md">
        <SriGajkesariNavbar theme="dark" />
      </div>

      {/* 2. Pure Editorial Centered Text Hero */}
      <section className="relative w-full pt-52 sm:pt-80 lg:pt-80 pb-14 sm:pb-18 px-6 text-center select-none bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#4C1137]/30" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.45em] text-[#4C1137] font-semibold flex items-center gap-2">
              The Archival Catalogue
            </span>
            <span className="w-8 h-[1px] bg-[#4C1137]/30" />
          </div>

          <h1 className="font-1 text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-[#4C1137] leading-tight">
            Every Piece Has A Story
          </h1>

          <p className="font-2 text-stone-600 text-xs sm:text-sm md:text-[15px] font-light leading-relaxed max-w-xl mx-auto">
            Explore handcrafted heirlooms created with uncompromised gold purity,
            rare uncut gemstones, and ancestral devotion sculpted across generations.
          </p>

          <div className="pt-6 flex flex-col items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#8C6D37] font-semibold block">
              Our Collections
            </span>
            <span className="w-10 h-[1.5px] bg-[#4C1137]/40" />
          </div>
        </div>
      </section>

      {/* 3. Fullscreen Carousel Stream */}
      <main className="w-full">
        {collectionsData.map((item, index) => (
          <FullscreenCollectionStage key={item.id} item={item} index={index} />
        ))}
      </main>

      {/* 4. Conversion CTA Banner */}
      <section
        ref={ctaRef}
        className="w-full bg-[#F4EFE6] py-16 sm:py-20 px-6 sm:px-12 border-t border-[#EAE3D6] select-none text-center"
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
              Explore timeless craftsmanship and find a piece worthy of becoming
              your next heirloom.
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
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#4C1137] hover:bg-[#340b25] text-[#FAF8F5] text-[10px] sm:text-[11px] uppercase tracking-[0.26em] font-medium transition-all duration-300 shadow-sm hover:shadow-md border border-[#4C1137] group cursor-pointer active:scale-95 rounded-full"
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