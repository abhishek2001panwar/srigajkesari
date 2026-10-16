"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Hammer,
  ShieldCheck,
  HeartHandshake,
  Clock,
  Award,
  Gem,
  Scale,
} from "lucide-react";
import SriGajkesariNavbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Are all your gold and gemstones certified?",
    answer:
      "Every piece carries a 100% BIS hallmark. Solitaires and precious gemstones are verified and certified by independent gemological laboratories including GIA and IGI.",
  },
  {
    question: "Can I commission bespoke or personalized jewellery?",
    answer:
      "Our atelier works directly with you to sculpt bespoke heirloom creations tailored to your aesthetic, occasion, precious materials, and budget.",
  },
  {
    question: "What is your exchange and buyback policy?",
    answer:
      "We provide documented lifetime transparency with clear exchange and buyback evaluations across all pure gold, polki, and solitaire categories.",
  },
];

const guidePillars = [
  {
    metric: "100%",
    title: "Respect for the Craft",
    description:
      "Shaped by master karigars whose lineages have practiced ancestral goldsmithing across generations.",
    icon: Hammer,
  },
  {
    metric: "BIS 916",
    title: "Absolute Purity",
    description:
      "Zero compromise on raw materials. Every gram of gold and stone is tested and documented with strict integrity.",
    icon: ShieldCheck,
  },
  {
    metric: "Lifetime",
    title: "Relationship Sanctuary",
    description:
      "Discreet guidance, honest transparent weight billing, and comprehensive archival care across years.",
    icon: HeartHandshake,
  },
  {
    metric: "Timeless",
    title: "Enduring Design",
    description:
      "Rooted in classic temple and royal durbar aesthetics engineered to retain character across generations.",
    icon: Clock,
  },
];

// Apple-grade line-by-line editorial text scroll reveal
function ScrollRevealLine({
  children,
  progress,
  threshold,
  className = "",
}: {
  children: React.ReactNode;
  progress: number;
  threshold: number;
  className?: string;
}) {
  const range = 0.08;
  const rawFraction = (progress - threshold) / range;
  const clamped = Math.min(Math.max(rawFraction, 0), 1);
  const easeOut = 1 - Math.pow(1 - clamped, 3);

  const translateY = (1 - easeOut) * 110;
  const opacity = Math.min(easeOut * 1.3, 1);
  const blurVal = (1 - easeOut) * 4;

  return (
    <div className="overflow-hidden py-[2px]">
      <div
        className={`will-change-[transform,opacity,filter] ${className}`}
        style={{
          transform: `translate3d(0, ${translateY}%, 0)`,
          opacity,
          filter: `blur(${blurVal}px)`,
          transition:
            "transform 0.15s ease-out, opacity 0.15s ease-out, filter 0.15s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function StoryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Parallax pixel shifts
  const [parallaxImg1, setParallaxImg1] = useState(0);
  const [parallaxImg2, setParallaxImg2] = useState(0);

  // Progress metrics for text scroll animations (0 to 1)
  const [heroProgress, setHeroProgress] = useState(0);
  const [ch1Progress, setCh1Progress] = useState(0);
  const [ch2Progress, setCh2Progress] = useState(0);
  const [ch3Progress, setCh3Progress] = useState(0);
  const [promiseProgress, setPromiseProgress] = useState(0);

  const heroRef = useRef<HTMLElement>(null);
  const ch1Ref = useRef<HTMLElement>(null);
  const ch2Ref = useRef<HTMLElement>(null);
  const ch3Ref = useRef<HTMLElement>(null);
  const promiseRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const calcProgress = (el: HTMLElement | null) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = vh - rect.top;
      const total = vh + rect.height;
      return Math.min(Math.max(scrolled / total, 0), 1);
    };

    const handleScroll = () => {
      const vh = window.innerHeight;

      setHeroProgress(calcProgress(heroRef.current));
      setCh1Progress(calcProgress(ch1Ref.current));
      setCh2Progress(calcProgress(ch2Ref.current));
      setCh3Progress(calcProgress(ch3Ref.current));
      setPromiseProgress(calcProgress(promiseRef.current));

      // Parallax Image 1 (Chapter 2)
      if (ch2Ref.current) {
        const rect = ch2Ref.current.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top <= vh) {
          const centerDiff = rect.top + rect.height / 2 - vh / 2;
          setParallaxImg1(-centerDiff * 0.16);
        }
      }

      // Parallax Image 2 (Chapter 3 Guiding Principles - Clean direct photo)
      if (ch3Ref.current) {
        const rect = ch3Ref.current.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top <= vh) {
          const centerDiff = rect.top + rect.height / 2 - vh / 2;
          setParallaxImg2(-centerDiff * 0.22);
        }
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#4C1137] selection:text-white ">
      {/* 1. FIXED DARK THEME NAVBAR */}
      <SriGajkesariNavbar theme="dark" />

      {/* 2. HERO SECTION */}
      <section
        ref={heroRef}
        className="relative w-full pt-32 sm:pt-40 lg:pt-44 pb-14 sm:pb-20 px-6 sm:px-10 lg:px-16 border-b border-[#EAE4DC] bg-[#FAF8F5] select-none"
      >
        <div className="max-w-[1400px] mx-auto">
          <ScrollRevealLine progress={heroProgress} threshold={0.05}>
            <p className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#4C1137] mb-3">
              Our Lineage
            </p>
          </ScrollRevealLine>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-[#4C1137] mb-5">
            <ScrollRevealLine progress={heroProgress} threshold={0.09}>
              The soul behind
            </ScrollRevealLine>
            <ScrollRevealLine progress={heroProgress} threshold={0.14}>
              <span className="text-[#8C6D37] font-normal italic">
                the sparkle.
              </span>
            </ScrollRevealLine>
          </h1>

          <div className="max-w-3xl">
            <ScrollRevealLine progress={heroProgress} threshold={0.18}>
              <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light tracking-tight leading-relaxed">
                Before gold is shaped and gemstones are set, there is devotion. A
                lineage rooted in ancestral trust, precision karigari, and
                heirloom grace.
              </p>
            </ScrollRevealLine>
          </div>
        </div>
      </section>

      {/* 3. CHAPTER 1: THE FOUNDATION */}
      <section
        ref={ch1Ref}
        className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-[#EAE4DC] select-none bg-[#FAF8F5]"
      >
        <div className="max-w-[1400px] mx-auto">
          <ScrollRevealLine progress={ch1Progress} threshold={0.12}>
            <p className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#4C1137] mb-2">
              Chapter I &bull; Foundation
            </p>
          </ScrollRevealLine>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#4C1137] mb-6">
            <ScrollRevealLine progress={ch1Progress} threshold={0.16}>
              The roots of trust.
            </ScrollRevealLine>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-base sm:text-lg text-stone-600 font-light tracking-tight leading-relaxed mb-12">
            <ScrollRevealLine progress={ch1Progress} threshold={0.21}>
              <p>
                The name <strong className="text-[#4C1137] font-medium">Gajkesari</strong> draws
                inspiration from ancient lore — the union of the Elephant (Gaj)
                and the Lion (Kesari). Together, they represent stability,
                wisdom, and quiet royal authority.
              </p>
            </ScrollRevealLine>

            <ScrollRevealLine progress={ch1Progress} threshold={0.26}>
              <p>
                Built as the elevated design identity of Sri Ganesh Jewellery, we
                bridge decades of deep family goldsmithing with contemporary
                architectural silhouettes. We sculpt heirlooms built to carry
                sentimental permanence across generations.
              </p>
            </ScrollRevealLine>
          </div>

          <div className="pt-8 border-t border-[#EAE4DC]">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light italic tracking-tight text-[#4C1137] leading-snug">
              <ScrollRevealLine progress={ch1Progress} threshold={0.32}>
                &ldquo;Jewellery is never metal and stone alone. It is memory made
                physical, carried across generations.&rdquo;
              </ScrollRevealLine>
            </blockquote>

            <ScrollRevealLine progress={ch1Progress} threshold={0.38}>
              <p className="text-xs text-stone-500 tracking-tight block mt-3">
                The Atelier Founding Ethos
              </p>
            </ScrollRevealLine>
          </div>
        </div>
      </section>

      {/* 4. CHAPTER 2: FULL-WIDTH BENTO WITH PARALLAX IMAGE 1 */}
      <section
        ref={ch2Ref}
        className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#F5EFE6] border-b border-[#EAE3D6] select-none overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Narrative Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ScrollRevealLine progress={ch2Progress} threshold={0.14}>
              <p className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#4C1137] mb-2">
                Chapter II &bull; The Evolution
              </p>
            </ScrollRevealLine>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#4C1137] leading-[1.08] mb-5">
              <ScrollRevealLine progress={ch2Progress} threshold={0.18}>
                Decades in the making.
              </ScrollRevealLine>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-stone-600 font-light tracking-tight leading-relaxed mb-8">
              <ScrollRevealLine progress={ch2Progress} threshold={0.23}>
                <p>
                  As design sensibilities matured, patrons sought jewellery that
                  honored generational technique while projecting contemporary
                  lightness. Sri Gajkesari was born from this artistic convergence.
                </p>
              </ScrollRevealLine>

              <ScrollRevealLine progress={ch2Progress} threshold={0.28}>
                <p>
                  We united master karigars from across the subcontinent: temple
                  sculptors from the South, uncut Polki setting maestros from
                  Rajasthan, and Basra pearl stringers.
                </p>
              </ScrollRevealLine>
            </div>

            <ScrollRevealLine progress={ch2Progress} threshold={0.33}>
              <Link
                href="/collection"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium tracking-tight text-[#4C1137] hover:underline group"
              >
                Explore the collections
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </ScrollRevealLine>
          </div>

          {/* Right: Parallax Image Portal Canvas */}
          <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden bg-white border border-[#EAE3D6] shadow-sm">
            <div
              className="absolute -top-[15%] inset-x-0 h-[130%] w-full will-change-transform"
              style={{
                transform: `translate3d(0, ${parallaxImg1}px, 0) scale(1.05)`,
                transition: "transform 0.08s linear",
              }}
            >
              <img
                src="https://srigajkesari.com/wp-content/uploads/2026/09/foundation.webp"
                alt="Ancestral Craftsmanship - Sri Gajkesari"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CHAPTER 3: GUIDING PRINCIPLES WITH PARALLAX IMAGE 2 (NO WHITE OVERLAYS) */}
      <section
        ref={ch3Ref}
        className="relative w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16 text-white select-none overflow-hidden"
      >
        {/* Parallax Image Backdrop: Direct Photo Visibility */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-[20%] inset-x-0 h-[140%] w-full will-change-transform"
            style={{
              transform: `translate3d(0, ${parallaxImg2}px, 0) scale(1.06)`,
              transition: "transform 0.08s linear",
            }}
          >
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/story-bg.webp"
              alt="The Guiding Principles"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Content Layer */}
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollRevealLine progress={ch3Progress} threshold={0.12}>
              <p className="text-[12px] uppercase tracking-[0.24em] font-medium text-white/90 mb-2.5 drop-shadow-sm">
                Workshop Commitments
              </p>
            </ScrollRevealLine>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight mb-4 drop-shadow-sm">
              <ScrollRevealLine progress={ch3Progress} threshold={0.16}>
                What guides every piece.
              </ScrollRevealLine>
            </h2>

            <ScrollRevealLine progress={ch3Progress} threshold={0.21}>
              <p className="text-base sm:text-lg text-white font-light tracking-tight leading-relaxed drop-shadow-sm">
                Four unbroken commitments that define our workshop and distinguish
                our heirlooms.
              </p>
            </ScrollRevealLine>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-white/30">
            {guidePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="flex flex-col justify-between">
                  <div>
                    <ScrollRevealLine
                      progress={ch3Progress}
                      threshold={0.24 + idx * 0.05}
                    >
                      <div className="flex items-center gap-2 mb-2 text-white">
                        <Icon className="w-4 h-4 text-white drop-shadow-sm" />
                        <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white drop-shadow-sm">
                          {pillar.metric}
                        </span>
                      </div>
                    </ScrollRevealLine>

                    <h3 className="text-base font-semibold tracking-tight text-white mb-2 drop-shadow-sm">
                      <ScrollRevealLine
                        progress={ch3Progress}
                        threshold={0.27 + idx * 0.05}
                      >
                        {pillar.title}
                      </ScrollRevealLine>
                    </h3>

                    <ScrollRevealLine
                      progress={ch3Progress}
                      threshold={0.3 + idx * 0.05}
                    >
                      <p className="text-sm text-white font-light tracking-tight leading-relaxed drop-shadow-sm">
                        {pillar.description}
                      </p>
                    </ScrollRevealLine>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OUR PROMISE & INQUIRIES WITH SCROLL REVEALS */}
      <section
        ref={promiseRef}
        className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] select-none border-b border-[#EAE4DC]"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-12 sm:mb-14">
            <ScrollRevealLine progress={promiseProgress} threshold={0.1}>
              <p className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#4C1137] mb-2">
                The Standard
              </p>
            </ScrollRevealLine>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#4C1137] leading-tight mb-3">
              <ScrollRevealLine progress={promiseProgress} threshold={0.15}>
                Our promise to you.
              </ScrollRevealLine>
            </h2>

            <ScrollRevealLine progress={promiseProgress} threshold={0.2}>
              <p className="text-base sm:text-lg text-stone-600 font-light tracking-tight leading-relaxed">
                Every creation is backed by certified documentation, complete fair
                weight pricing, and lifetime service.
              </p>
            </ScrollRevealLine>
          </div>

          {/* 3 Full-Width Promise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 border-b border-[#EAE4DC]">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE4DC] shadow-xs hover:border-[#4C1137]/40 transition-colors">
              <Award className="w-6 h-6 text-[#4C1137] mb-4" />
              <h3 className="text-lg font-semibold tracking-tight text-[#4C1137] mb-2">
                100% BIS Hallmarked
              </h3>
              <p className="text-sm sm:text-base text-stone-600 font-light tracking-tight leading-relaxed">
                Tested, stamped, and verified for complete metallurgical purity.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE4DC] shadow-xs hover:border-[#4C1137]/40 transition-colors">
              <Gem className="w-6 h-6 text-[#4C1137] mb-4" />
              <h3 className="text-lg font-semibold tracking-tight text-[#4C1137] mb-2">
                Certified Solitaires
              </h3>
              <p className="text-sm sm:text-base text-stone-600 font-light tracking-tight leading-relaxed">
                Documented under strict international grading by GIA and IGI.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE4DC] shadow-xs hover:border-[#4C1137]/40 transition-colors">
              <Scale className="w-6 h-6 text-[#4C1137] mb-4" />
              <h3 className="text-lg font-semibold tracking-tight text-[#4C1137] mb-2">
                Transparent Valuation
              </h3>
              <p className="text-sm sm:text-base text-stone-600 font-light tracking-tight leading-relaxed">
                Zero hidden calculations. Net gold weight and gemstone breakdown on
                every bill.
              </p>
            </div>
          </div>

          {/* Accordion FAQ */}
          <div className="pt-16 max-w-4xl">
            <ScrollRevealLine progress={promiseProgress} threshold={0.34}>
              <p className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#4C1137] mb-2">
                Inquiries
              </p>
            </ScrollRevealLine>

            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#4C1137] mb-8">
              <ScrollRevealLine progress={promiseProgress} threshold={0.38}>
                Frequently asked questions.
              </ScrollRevealLine>
            </h1>

            <div className="divide-y divide-[#EAE4DC] border-y border-[#EAE4DC]">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-6">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <h4 className="text-base sm:text-xl font-medium tracking-tight text-stone-900 group-hover:text-[#4C1137] transition-colors">
                        {faq.question}
                      </h4>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#4C1137]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <p className="pt-3 text-sm sm:text-base text-stone-600 font-light tracking-tight leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}