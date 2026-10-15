"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Phone,
  ShieldCheck,
  Compass,
} from "lucide-react";

import SriGajkesariNavbar from "@/components/Navbar";

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
      "https://srigajkesari.com/wp-content/uploads/2026/09/r1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/r2.webp",
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
      "https://srigajkesari.com/wp-content/uploads/2026/09/suv1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/suv2.webp",
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
      "https://srigajkesari.com/wp-content/uploads/2026/09/ratna1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/ratna2.webp",
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
      "https://srigajkesari.com/wp-content/uploads/2026/09/devatri1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/devatri2.webp",
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
      "https://srigajkesari.com/wp-content/uploads/2026/09/niharika1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/niharika2.webp",
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
      "https://srigajkesari.com/wp-content/uploads/2026/09/purusa1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/purusa2.webp",
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
      "https://srigajkesari.com/wp-content/uploads/2026/09/kasu1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/kasu2.webp",
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
      "https://srigajkesari.com/wp-content/uploads/2026/09/vir1.webp",
      "https://srigajkesari.com/wp-content/uploads/2026/09/vir2.webp",
    ],
  },
];


// --- Apple Minimalist Fullscreen Stage Item ---
function AppleCollectionCard({ item, index }: { item: any; index: number }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.bottom >= 0 && rect.top <= vh) {
        const centerDiff = rect.top + rect.height / 2 - vh / 2;
        // Controlled, butter-smooth physical drift
        setParallaxOffset(-centerDiff * 0.14);
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
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nextSlide = () => {
    setActiveImgIdx((prev) => (prev + 1) % item.images.length);
  };

  const prevSlide = () => {
    setActiveImgIdx((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <article
      ref={cardRef}
      id={item.id}
      className="relative w-full h-[88vh] sm:h-[92vh] lg:h-[96vh] min-h-[620px] max-h-[1050px] overflow-hidden select-none bg-[#12030d] border-b border-black/10 group"
    >
      {/* 1. Full-Bleed Imagery with Smooth Perspective Crossfade & Parallax */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {item.images.map((img: string | Blob | undefined, i: React.Key | null | undefined) => {
          const isCurrent = activeImgIdx === i;
          return (
            <div
              key={i}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div
                className="absolute -top-[15%] inset-x-0 h-[130%] w-full will-change-transform flex items-center justify-center"
                style={{
                  transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.08)`,
                  transition: "transform 0.08s linear",
                }}
              >
                <img
                  src={img}
                  alt={`${item.name}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}

        {/* Apple High-Contrast Gradients (No harsh tints) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Top-Left Collection Spec Eyebrow */}
      <div className="absolute top-8 left-6 sm:left-12 lg:left-16 z-30">
        <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/60">
          Catalogue {item.roman} &bull; {item.badge}
        </span>
      </div>

      {/* 3. Bottom-Left Editorial Content */}
      <div className="absolute bottom-10 sm:bottom-14 left-6 sm:left-12 lg:left-16 z-30 max-w-xl text-white">
        <p className="text-xs uppercase tracking-[0.24em] font-medium text-white/70 mb-2">
          {item.subtitle}
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05] mb-4">
          {item.name}
        </h2>

        <p className="text-sm sm:text-base text-white/80 font-normal tracking-tight leading-relaxed max-w-lg mb-6">
          {item.description}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-200 transition-all active:scale-95 shadow-md"
          >
            <span>Reserve Viewing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 4. Bottom-Right Perspective Controls (Apple Capsule Style) */}
      <div className="absolute bottom-10 sm:bottom-14 right-6 sm:right-12 z-30 flex items-center gap-3">
        {/* Step Indicator Pill */}
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/20">
          {item.images.map((image: string, dotIdx: number) => {
            const isSelected = activeImgIdx === dotIdx;
            return (
              <button
                key={dotIdx}
                onClick={() => setActiveImgIdx(dotIdx)}
                aria-label={`View perspective ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isSelected
                    ? "w-6 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            );
          })}
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={prevSlide}
            aria-label="Previous Perspective"
            className="w-9 h-9 rounded-full bg-black/40 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Perspective"
            className="w-9 h-9 rounded-full bg-black/40 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

// --- Footer Component ---
function CleanFooter() {
  return (
    <footer
      id="footer"
      className="relative z-20 w-full bg-[#F5F5F7] text-[#86868B] text-[13px] sm:text-sm py-12 px-6 sm:px-10 lg:px-16 border-t border-black/10 select-none"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Brand Header & Tag */}
        <div className="pb-8 mb-8 border-b border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <a href="#hero" className="inline-block group">
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/gj-logo.svg"
              alt="Sri Gajkesari Jewellers"
              className="h-14 sm:h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-75"
            />
          </a>

          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#86868B]">
            The Malleshwaram Flagship &bull; Bengaluru
          </span>
        </div>

        {/* Matrix Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-black/10">
          <div>
            <h4 className="font-semibold text-[#1D1D1F] mb-3 text-sm tracking-tight">
              Collections
            </h4>
            <ul className="space-y-2">
              {collectionsData.slice(0, 4).map((col) => (
                <li key={col.id}>
                  <a
                    href={`#${col.id}`}
                    className="hover:text-[#1D1D1F] transition-colors"
                  >
                    {col.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1D1D1F] mb-3 text-sm tracking-tight">
              Archival
            </h4>
            <ul className="space-y-2">
              {collectionsData.slice(4).map((col) => (
                <li key={col.id}>
                  <a
                    href={`#${col.id}`}
                    className="hover:text-[#1D1D1F] transition-colors"
                  >
                    {col.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1D1D1F] mb-3 text-sm tracking-tight">
              Atelier Boutique
            </h4>
            <p className="leading-relaxed mb-2 text-xs sm:text-[13px]">
              #249, Margosa Road, Between 16th &amp; 17th Cross, Malleshwaram,
              Bengaluru 560003
            </p>
            <p className="text-xs text-[#86868B]">
              Daily 10:30 AM – 8:30 PM &bull; Valet
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#1D1D1F] mb-3 text-sm tracking-tight">
              Concierge
            </h4>
            <div className="space-y-2 text-xs sm:text-[13px]">
              <p>
                <a
                  href="tel:+919535125553"
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  +91 95351 25553
                </a>
              </p>
              <p>
                <a
                  href="mailto:support@srigajkesari.com"
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  support@srigajkesari.com
                </a>
              </p>
              <div className="flex items-center gap-3 pt-1 text-xs">
                <a
                  href="https://www.instagram.com/srigajkesarijewellers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D1D1F]"
                >
                  Instagram
                </a>
                <span>&bull;</span>
                <a
                  href="https://www.youtube.com/@SriGajKesari-h8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D1D1F]"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs tracking-tight">
          <span>&copy; 2026 Sri Gajkesari Jewellers. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#1D1D1F] cursor-pointer">Privacy</span>
            <span>&bull;</span>
            <span className="hover:text-[#1D1D1F] cursor-pointer">BIS Hallmarking</span>
            <span>&bull;</span>
            <span className="hover:text-[#1D1D1F] cursor-pointer">Certifications</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Main App / Page Component ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] selection:bg-[#4C1137] selection:text-white font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Text','SF_Pro_Display','Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <SriGajkesariNavbar theme="dark" />

      {/* 2. Apple Editorial Centered Hero */}
      <section
        id="hero"
        className="relative w-full pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 text-center select-none bg-[#FFFFFF]"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-[12px] uppercase tracking-[0.26em] font-medium text-[#86868B] mb-3">
            The Archival Catalogue
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] mb-5">
            Every piece <br />
            <span className="text-[#86868B]">has a story.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#86868B] font-normal tracking-tight leading-relaxed max-w-xl mb-8">
            Explore handcrafted heirlooms created with uncompromised gold purity,
            rare uncut gemstones, and ancestral devotion sculpted across generations.
          </p>

          {/* Quick Anchor Jumper Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap max-w-2xl">
            {collectionsData.map((col) => (
              <a
                key={col.id}
                href={`#${col.id}`}
                className="px-3.5 py-1.5 rounded-full bg-[#F5F5F7] hover:bg-black hover:text-white text-xs font-medium tracking-tight text-[#1D1D1F] transition-all"
              >
                {col.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Fullscreen Curated Collection Stages */}
      <main className="w-full">
        {collectionsData.map((item, index) => (
          <AppleCollectionCard key={item.id} item={item} index={index} />
        ))}
      </main>

      {/* 4. Minimal Centered Apple Conversion Section */}
      <section
        id="cta"
        className="w-full bg-[#F5F5F7] py-20 sm:py-28 px-6 sm:px-12 border-t border-black/5 select-none text-center"
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#86868B] mb-3">
            Atelier Sanctuary
          </p>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-tight mb-4">
            Found something that <br />
            <span className="text-[#86868B]">feels like you?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#86868B] font-normal tracking-tight leading-relaxed max-w-lg mb-8">
            Experience our archival heirlooms in total discretion. Book a private
            viewing salon at our Malleshwaram boutique or commission custom karigari.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="tel:+919535125553"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-black hover:bg-stone-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Speak to Atelier</span>
              <Phone className="w-3.5 h-3.5" />
            </a>

            <a
              href="#footer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-stone-200 text-black border border-black/10 text-xs uppercase tracking-[0.2em] font-medium transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore Flagship</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. Minimalist Matching Footer */}
      <CleanFooter />
    </div>
  );
}