"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
} from "lucide-react";

import SriGajkesariNavbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

// --- Collection Data ---
const collectionsData = [
  {
    id: "rajasi",
    name: "Rajasi",
    subtitle: "The Royal Jadau Collection",
    badge: "Uncut Polki & Kundan",
    roman: "I",
    description:
      "Inspired by the royal durbars of Rajasthan, the Rajasi collection features hand-set Kundan-Polki work in 22KT gold. Designed for generational weddings and royal trousseaus, each piece captures the timeless charm of uncut gemstones.",
    images: [
      "/collection/r1.webp",
      "/collection/r2.webp",
    ],
  },
  {
    id: "suvarna",
    name: "Suvarna",
    subtitle: "The 916 Gold Heritage",
    badge: "22KT BIS Hallmarked",
    roman: "II",
    description:
      "Rooted in the legendary deep-earth gold heritage of Karnataka. Sculpted with authentic ancestral heft, every piece commands an understated presence passed seamlessly down family lineages.",
    images: [
      "/collection/suv1.webp",
      "/collection/suv2.webp",
    ],
  },
  {
    id: "ratnavali",
    name: "Ratnavali",
    subtitle: "The Beads & Pearls Collection",
    badge: "Natural Emeralds & Basra Pearls",
    roman: "III",
    description:
      "A celebration of fluid grace and organic luminescence. Natural emerald drops, rare Basra pearls, and precious gemstone strands woven by master karigars for auspicious occasions.",
    images: [
      "/collection/ratna1.webp",
      "/collection/ratna2.webp",
    ],
  },
  {
    id: "devatri",
    name: "Devatri",
    subtitle: "The Temple Gold Collection",
    badge: "Nakshi Hand-Sculpted",
    roman: "IV",
    description:
      "Devatri celebrates India's sacred iconography. With meticulous Nakshi hand-carving and divine relief motifs, these sacred ornaments carry blessings, cultural reverence, and permanent gold equity.",
    images: [
      "/collection/devatri1.webp",
      "/collection/devatri2.webp",
    ],
  },
  {
    id: "niharika",
    name: "Niharika",
    subtitle: "The Diamond Reserve",
    badge: "GIA / IGI Certified",
    roman: "V",
    description:
      "Brilliant, rare, and certified. Niharika unites top-tier solitaires with sleek architectural silhouettes, engineered for bespoke engagements and modern black-tie occasions.",
    images: [
      "/collection/niharika1.webp",
      "/collection/niharika2.webp",
    ],
  },
  {
    id: "purusa",
    name: "Purusa",
    subtitle: "Men's Fine Jewellery",
    badge: "Solid Gold & Solitaire Craft",
    roman: "VI",
    description:
      "Designed for the patron of quiet confidence. Precision edges, ergonomic weight, and heavy gold proportions sculpted for boardroom authority and family celebrations.",
    images: [
      "/collection/purusa1.webp",
      "/collection/purusa2.webp",
    ],
  },
  {
    id: "kasu",
    name: "Kasu",
    subtitle: "The Sacred Kasu Malai",
    badge: "Traditional Heritage Gold",
    roman: "VII",
    description:
      "A revered emblem of prosperity and maternal blessing across South India. Cast with unbroken 916 gold purity, the Kasu Mala is crafted to grace generations without tarnishing.",
    images: [
      "/collection/kasu1.webp",
      "/collection/kasu2.webp",
    ],
  },
  {
    id: "viraasat",
    name: "Viraasat",
    subtitle: "The Antique Heirlooms",
    badge: "Heirloom Patina Finish",
    roman: "VIII",
    description:
      "Holding historic patinas and ancient temple goldsmithing techniques. Each piece feels like an authentic artifact unearthed from a dynastic treasury.",
    images: [
      "/collection/vir1.webp",
      "/collection/vir2.webp",
    ],
  },
];

// --- Centered Editorial Header Outside + Responsive Auto-Scrolling (3s) Image Stage ---
function AppleCollectionCard({ item }: { item: (typeof collectionsData)[number] }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const stageRef = useRef<HTMLDivElement | null>(null);

  // 1. Reliable 3-Second Auto-Scroll Timer (Resets cleanly on manual navigation)
  useEffect(() => {
    if (item.images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveImgIdx((prev) => (prev + 1) % item.images.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [activeImgIdx, item.images.length]);

  // 2. Subtle vertical parallax on desktop/tablet only (prevents mobile crop/shift)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!stageRef.current) return;
      if (window.innerWidth < 768) {
        setParallaxOffset(0);
        ticking = false;
        return;
      }

      const rect = stageRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.bottom >= 0 && rect.top <= vh) {
        const centerDiff = rect.top + rect.height / 2 - vh / 2;
        setParallaxOffset(-centerDiff * 0.05);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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
      id={item.id}
      className="w-full py-12 sm:py-16 lg:py-20 border-b border-[#dfb16b]/25 last:border-b-0 select-none scroll-mt-24"
    >
      {/* ================= 1. CENTERED EDITORIAL HEADER & CTA OUTSIDE IMAGE ================= */}
      <div className="max-w-3xl mx-auto px-3 sm:px-6 text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#491239] leading-[1.1] mb-2">
          {item.name}
        </h2>

        <p className="text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.22em] font-medium text-[#9f732e] mb-4 sm:mb-5">
          {item.subtitle}
        </p>

        <p className="text-sm sm:text-base text-[#491239]/80 font-normal tracking-tight leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-7">
          {item.description}
        </p>

        <div className="flex items-center justify-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#491239] hover:bg-[#360b29] text-[#dfb16b] border border-[#dfb16b]/45 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium transition-all active:scale-95 shadow-[0_12px_28px_-8px_rgba(73,18,57,0.32)]"
          >
            <span>Reserve Viewing</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#dfb16b]" />
          </a>
        </div>
      </div>

      {/* ================= 2. RESPONSIVE AUTO-SCROLLING (3s) HORIZONTAL SLIDER STAGE ================= */}
      <div
        ref={stageRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] max-h-[860px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#26071c] border border-[#dfb16b]/30 shadow-[0_24px_60px_-16px_rgba(73,18,57,0.22)] group"
      >
        {/* Smooth Horizontal Sliding Track */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          style={{
            transform: `translate3d(-${activeImgIdx * 100}%, 0, 0)`,
          }}
        >
          {item.images.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-full shrink-0 overflow-hidden bg-[#26071c]"
            >
              <div
                className="absolute inset-0 md:-top-[5%] md:h-[110%] w-full will-change-transform flex items-center justify-center"
                style={{
                  transform: `translate3d(0, ${parallaxOffset}px, 0)`,
                  transition: "transform 0.08s linear",
                }}
              >
                <img
                  src={img}
                  alt={`${item.name} — View ${i + 1}`}
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Left Edge Prev Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Perspective"
          className="absolute bottom-3.5 sm:bottom-7 left-3.5 sm:left-7 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#24061a]/70 hover:bg-[#491239] text-[#dfb16b] border border-[#dfb16b]/45 flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Bottom-Center Perspective Dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-[#24061a]/60 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-[#dfb16b]/30">
          {item.images.map((_, dotIdx) => {
            const isSelected = activeImgIdx === dotIdx;
            return (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setActiveImgIdx(dotIdx)}
                aria-label={`View perspective ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isSelected
                    ? "w-5 sm:w-6 h-1.5 bg-[#dfb16b]"
                    : "w-1.5 h-1.5 bg-white/45 hover:bg-white/85"
                }`}
              />
            );
          })}
        </div>

        {/* Right Edge Next Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Perspective"
          className="absolute bottom-3.5 sm:bottom-7 right-3.5 sm:right-7 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#24061a]/70 hover:bg-[#491239] text-[#dfb16b] border border-[#dfb16b]/45 flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Subtle Inner Champagne Gold Hairline Rim */}
        <div className="absolute inset-0 z-20 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-[#dfb16b]/25 pointer-events-none" />
      </div>
    </article>
  );
}

// --- Main App / Page Component ---
export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FAF8F5] text-[#491239] selection:bg-[#491239] selection:text-[#dfb16b]">
      <SriGajkesariNavbar theme="dark" />

      {/* 1. Editorial Centered Hero */}
      <section
        id="hero"
        className="relative w-full pt-28 sm:pt-40 lg:pt-48 pb-10 sm:pb-16 px-4 sm:px-10 lg:px-16 text-center select-none bg-[#FAF8F5] border-b border-[#dfb16b]/25"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#491239] leading-[1.08] mb-4 sm:mb-5">
            Every piece{" "}
            <span className="text-[#dfb16b] font-normal">has a story.</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-[#491239]/80 font-normal tracking-tight leading-relaxed max-w-xl mb-7 sm:mb-8">
            Explore handcrafted heirlooms created with uncompromised gold purity,
            rare uncut gemstones, and ancestral devotion sculpted across generations.
          </p>

          {/* Clean Anchor Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap max-w-2xl">
            {collectionsData.map((col) => (
              <a
                key={col.id}
                href={`#${col.id}`}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white hover:bg-[#491239] text-[#491239] hover:text-[#dfb16b] border border-[#dfb16b]/40 text-[11px] sm:text-xs font-medium tracking-tight transition-all"
              >
                {col.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Centered Header + Responsive Auto-Scrolling Collection Stages */}
      <main className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 pb-10 sm:pb-20">
        {collectionsData.map((item) => (
          <AppleCollectionCard key={item.id} item={item} />
        ))}
      </main>

      {/* 3. Minimal Centered Conversion Section */}
      <section
        id="cta"
        className="w-full bg-[#FFFFFF] py-16 sm:py-28 px-5 sm:px-12 border-t border-[#dfb16b]/25 select-none text-center"
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#491239] leading-tight mb-4">
            Found something that <br />
            <span className="text-[#dfb16b] font-normal">feels like you?</span>
          </h2>

          <p className="text-sm sm:text-lg text-[#491239]/80 font-normal tracking-tight leading-relaxed max-w-lg mb-8">
            Experience our archival heirlooms in total discretion. Book a personal
            consultation at our Malleshwaram boutique or commission custom karigari.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a
              href="tel:+919535125553"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#491239] hover:bg-[#360b29] text-[#dfb16b] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Connect</span>
              <Phone className="w-3.5 h-3.5 text-[#dfb16b]" />
            </a>

            <a
              href="#footer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-[#491239]/5 text-[#491239] border border-[#dfb16b]/45 text-xs uppercase tracking-[0.2em] font-medium transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#491239]" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}