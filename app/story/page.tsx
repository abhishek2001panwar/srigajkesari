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
  const [heroBgParallax, setHeroBgParallax] = useState(0);
  const [parallaxImg1, setParallaxImg1] = useState(0);

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

      // Hero Background Parallax
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom >= 0) {
          setHeroBgParallax(-rect.top * 0.25);
        }
      }

      // Parallax Image 1 (Chapter 2)
      if (ch2Ref.current) {
        const rect = ch2Ref.current.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top <= vh) {
          const centerDiff = rect.top + rect.height / 2 - vh / 2;
          setParallaxImg1(-centerDiff * 0.16);
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#491239] selection:bg-[#491239] selection:text-[#dfb16b]">
      {/* 1. FIXED LIGHT THEME NAVBAR FOR DARK HERO */}
      <SriGajkesariNavbar theme="light" />

   
     <section
        ref={heroRef}
        className="relative w-full min-h-[82vh] sm:min-h-[88vh] pt-36 sm:pt-44 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 flex flex-col justify-end bg-[#491239] overflow-hidden select-none"
      >
        {/* Background Image with Parallax & Customizable Center Position */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-[1%] inset-x-0 h-[130%] w-full will-change-transform"
            style={{
              transform: `translate3d(0, ${heroBgParallax}px, 0) scale(1.06)`,
              transition: "transform 0.08s linear",
            }}
          >
            <img
              src="/story-bg.webp"
              alt="Sri Gajkesari Heritage Story"
              style={{ objectPosition: "50% 50%" }} // Adjust X% Y% here (e.g., "50% 35%" or "65% 50%")
              className="w-full h-full object-cover"
            />
          </div>

          {/* Royal Plum (#491239) Theme Gradient from Bottom-Left (Top & Right Stay 100% Clear) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#491239]/95 via-[#491239]/55 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full lg:w-[68%] h-[65%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(73,18,57,0.95)_0%,rgba(73,18,57,0.52)_48%,transparent_78%)]" />
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white mb-6 drop-shadow-[0_2px_16px_rgba(73,18,57,0.45)]">
              <ScrollRevealLine progress={heroProgress} threshold={0.09}>
                The soul behind
              </ScrollRevealLine>
              <ScrollRevealLine progress={heroProgress} threshold={0.14}>
                <span className="text-[#dfb16b] font-normal italic">
                  the sparkle.
                </span>
              </ScrollRevealLine>
            </h1>

            <ScrollRevealLine progress={heroProgress} threshold={0.18}>
              <p className="text-base sm:text-lg md:text-xl text-[#f5e6cc]/95 font-light tracking-tight leading-relaxed">
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
        className="w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-[#dfb16b]/25 select-none bg-[#FAF8F5]"
      >
        <div className="max-w-[1400px] mx-auto">
          <ScrollRevealLine progress={ch1Progress} threshold={0.12}>
            <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#dfb16b] mb-2">
              Chapter I &bull; Foundation
            </p>
          </ScrollRevealLine>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#491239] mb-8">
            <ScrollRevealLine progress={ch1Progress} threshold={0.16}>
              The roots of trust.
            </ScrollRevealLine>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-base sm:text-lg text-[#491239]/85 font-normal tracking-tight leading-relaxed mb-14">
            <ScrollRevealLine progress={ch1Progress} threshold={0.21}>
              <p>
                The name{" "}
                <strong className="text-[#491239] font-semibold">
                  Gajkesari
                </strong>{" "}
                draws inspiration from ancient lore - the union of the Elephant
                (Gaj) and the Lion (Kesari). Together, they represent stability,
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

          <div className="pt-10 border-t border-[#dfb16b]/30">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light italic tracking-tight text-[#491239] leading-snug">
              <ScrollRevealLine progress={ch1Progress} threshold={0.32}>
                &ldquo;Jewellery is never metal and stone alone. It is memory made
                physical, carried across generations.&rdquo;
              </ScrollRevealLine>
            </blockquote>

            <ScrollRevealLine progress={ch1Progress} threshold={0.38}>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#dfb16b] block mt-4">
                The Atelier Founding Ethos
              </p>
            </ScrollRevealLine>
          </div>
        </div>
      </section>

      {/* 4. CHAPTER 2: THE EVOLUTION */}
     {/* 4. CHAPTER 2: THE EVOLUTION (LIGHT IVORY & GOLD FRAME) */}
      <section
        ref={ch2Ref}
        className="w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-b border-[#dfb16b]/25 select-none overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto rounded-[32px] bg-white border border-[#dfb16b]/35 shadow-[0_20px_50px_-15px_rgba(73,18,57,0.08)] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Narrative Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ScrollRevealLine progress={ch2Progress} threshold={0.14}>
              <div className="flex items-center gap-3 mb-3">
                
                <p className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#491239]">
                  Chapter II &bull; The Evolution
                </p>
              </div>
            </ScrollRevealLine>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#491239] leading-[1.08] mb-6">
              <ScrollRevealLine progress={ch2Progress} threshold={0.18}>
                Decades in <span className="text-[#dfb16b] font-normal">the making.</span>
              </ScrollRevealLine>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#491239]/80 font-normal tracking-tight leading-relaxed mb-9">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#491239] hover:bg-[#320a26] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md active:scale-95 group"
              >
                <span>Explore the collections</span>
                <ChevronRight className="w-4 h-4 text-[#dfb16b] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </ScrollRevealLine>
          </div>

          {/* Right: Gallery Matte Parallax Image Frame */}
          <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-2xl p-[6px] bg-[#FAF8F5] border border-[#dfb16b]/40 shadow-[0_18px_40px_-14px_rgba(73,18,57,0.18)]">
            <div className="relative w-full h-full rounded-[12px] overflow-hidden bg-[#26071c]">
              <div
                className="absolute -top-[12%] inset-x-0 h-[124%] w-full will-change-transform"
                style={{
                  transform: `translate3d(0, ${parallaxImg1}px, 0) scale(1.04)`,
                  transition: "transform 0.08s linear",
                }}
              >
                <img
                  src="/foundation.webp"
                  alt="Ancestral Craftsmanship - Sri Gajkesari"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CHAPTER 3: GUIDING PRINCIPLES (ROYAL PLUM #491239 & GOLD #dfb16b) */}
      <section
        ref={ch3Ref}
        className="relative w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#491239] text-[#f5e6cc] select-none overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <ScrollRevealLine progress={ch3Progress} threshold={0.12}>
              <p className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#dfb16b] mb-2.5">
                Workshop Commitments
              </p>
            </ScrollRevealLine>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
              <ScrollRevealLine progress={ch3Progress} threshold={0.16}>
                What guides every piece.
              </ScrollRevealLine>
            </h2>

            <ScrollRevealLine progress={ch3Progress} threshold={0.21}>
              <p className="text-base sm:text-lg text-[#f5e6cc]/85 font-light tracking-tight leading-relaxed">
                Four unbroken commitments that define our workshop and distinguish
                our heirlooms.
              </p>
            </ScrollRevealLine>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 border-t border-[#dfb16b]/25">
            {guidePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-7 rounded-3xl bg-[#380b28]/70 border border-[#dfb16b]/20 hover:border-[#dfb16b]/55 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <ScrollRevealLine
                      progress={ch3Progress}
                      threshold={0.24 + idx * 0.05}
                    >
                      <div className="flex items-center gap-2.5 mb-3 text-[#dfb16b]">
                        <Icon className="w-4 h-4 text-[#dfb16b]" />
                        <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#dfb16b]">
                          {pillar.metric}
                        </span>
                      </div>
                    </ScrollRevealLine>

                    <h3 className="text-base font-semibold tracking-tight text-white mb-2">
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
                      <p className="text-sm text-[#f5e6cc]/85 font-light tracking-tight leading-relaxed">
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

      {/* 6. OUR PROMISE & INQUIRIES */}
     {/* 6. OUR PROMISE & CENTERED EDITORIAL FAQ */}
      <section
        ref={promiseRef}
        className="w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] select-none border-b border-[#dfb16b]/25"
      >
        <div className="max-w-[1320px] mx-auto">
          {/* ================= 1. CENTERED PROMISE HEADER ================= */}
          <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
           

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#491239] leading-[1.08] mb-4">
              <ScrollRevealLine progress={promiseProgress} threshold={0.15}>
                Our promise <span className="text-[#dfb16b] font-normal">to you.</span>
              </ScrollRevealLine>
            </h2>

            <ScrollRevealLine progress={promiseProgress} threshold={0.2}>
              <p className="text-base sm:text-lg text-[#491239]/80 font-normal tracking-tight leading-relaxed">
                Every creation is backed by certified documentation, transparent net-weight pricing, and lifetime archival care.
              </p>
            </ScrollRevealLine>
          </div>

          {/* ================= 2. 3 ROYAL PLUM & CHAMPAGNE GOLD PILLARS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-20 sm:pb-24 border-b border-[#dfb16b]/25">
            {[
              {
                num: "01",
                icon: Award,
                title: "100% BIS Hallmarked",
                desc: "Tested, stamped, and verified for complete 22KT metallurgical purity.",
              },
              {
                num: "02",
                icon: Gem,
                title: "Certified Solitaires",
                desc: "Documented under strict international grading by GIA and IGI.",
              },
              {
                num: "03",
                icon: Scale,
                title: "Transparent Valuation",
                desc: "Zero hidden calculations. Net gold weight and gemstone breakdown on every bill.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="group relative p-8 sm:p-10 rounded-3xl bg-[#491239] border border-[#dfb16b]/25 hover:border-[#dfb16b]/65 shadow-[0_18px_40px_-14px_rgba(73,18,57,0.3)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-7">
                      <div className="w-11 h-11 rounded-2xl bg-[#340a27] border border-[#dfb16b]/30 flex items-center justify-center text-[#dfb16b] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="text-xs font-medium tracking-[0.22em] text-[#dfb16b]/60">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-[#dfb16b] mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-[#f5e6cc]/85 font-light tracking-tight leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#dfb16b]/15 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#dfb16b]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfb16b]" />
                    <span>Guaranteed Provenance</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= 3. CENTERED LUXURY ACCORDION FAQ ================= */}
          <div className="pt-20 sm:pt-24 max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
             

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#491239]">
                <ScrollRevealLine progress={promiseProgress} threshold={0.38}>
                  Frequently asked <span className="text-[#dfb16b] font-normal">questions.</span>
                </ScrollRevealLine>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "bg-white border-[#dfb16b]/60 shadow-[0_14px_34px_-12px_rgba(73,18,57,0.1)]"
                        : "bg-white/70 border-[#dfb16b]/25 hover:border-[#dfb16b]/50"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-6 text-left cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-semibold tracking-tight text-[#491239] group-hover:text-[#9f732e] transition-colors">
                        {faq.question}
                      </span>

                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#491239] text-[#dfb16b] rotate-180"
                            : "bg-[#FAF8F5] text-[#491239] border border-[#dfb16b]/30 group-hover:bg-[#491239] group-hover:text-[#dfb16b]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-6 pt-1 border-t border-[#dfb16b]/15">
                        <p className="text-sm sm:text-base text-[#491239]/80 font-normal tracking-tight leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
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