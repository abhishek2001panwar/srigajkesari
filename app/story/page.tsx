"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  Sparkles,
  Award,
  Gem,
  Scale,
  ChevronDown,
  Clock,
  HeartHandshake,
  ShieldCheck,
  Hammer,
  ArrowUpRight,
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
      "Yes. Every gold item features a 100% BIS hallmark, and all diamonds and precious gemstones are verified and certified by independent testing authorities like GIA and IGI.",
  },
  {
    question: "Can I commission bespoke or personalized jewellery?",
    answer:
      "Yes. Our team can work with you to create a personalised jewellery piece based on your preferred design, occasion, materials and budget.",
  },
  {
    question: "What is your exchange and buyback policy?",
    answer:
      "Yes. Our team can provide details about current exchange and buyback policies based on the jewellery category and purchase.",
  },
];

const guidePillars = [
  {
    title: "Respect for the Craft",
    description:
      "We believe in the deliberate care of human hands. Our pieces are crafted by traditional karigars whose families have practiced goldsmithing for generations.",
    icon: Hammer,
  },
  {
    title: "Absolute Purity",
    description:
      "We never compromise on raw materials. Every gram of gold and every stone is tested, certified, and sourced with complete integrity.",
    icon: ShieldCheck,
  },
  {
    title: "Customer First",
    description:
      "Buying fine jewellery is a personal journey. We treat every client interaction as a relationship, offering patient guidance, transparent billing, and lifetime support.",
    icon: HeartHandshake,
  },
  {
    title: "Timeless Over Trends",
    description:
      "While we embrace modern styling, our designs are rooted in classic aesthetic principles so they remain relevant across generations.",
    icon: Clock,
  },
];

/* Reusable line-by-line reveal component tied directly to scroll progress */
function RevealLine({
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
  const isRevealed = progress >= threshold;

  return (
    <span className="block overflow-hidden py-[2px]">
      <span
        className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${className}`}
        style={{
          transform: isRevealed ? "translateY(0)" : "translateY(118%)",
          opacity: isRevealed ? 1 : 0,
        }}
      >
        {children}
      </span>
    </span>
  );
}

export default function StoryPage() {
  const [loaded, setLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Independent scroll progress trackers for each chapter
  const [ch1Progress, setCh1Progress] = useState(0);
  const [ch2Progress, setCh2Progress] = useState(0);
  const [ch3Progress, setCh3Progress] = useState(0);
  const [promiseProgress, setPromiseProgress] = useState(0);

  const ch1Ref = useRef<HTMLElement>(null);
  const ch2Ref = useRef<HTMLElement>(null);
  const ch3Ref = useRef<HTMLElement>(null);
  const promiseRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLoaded(true);

    let rAFId: number;

    const calculateSectionProgress = (el: HTMLElement | null) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = vh - rect.top;
      const totalDistance = vh + rect.height;
      return Math.min(Math.max(scrolled / totalDistance, 0), 1);
    };

    const handleScroll = () => {
      setCh1Progress(calculateSectionProgress(ch1Ref.current));
      setCh2Progress(calculateSectionProgress(ch2Ref.current));
      setCh3Progress(calculateSectionProgress(ch3Ref.current));
      setPromiseProgress(calculateSectionProgress(promiseRef.current));
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen  bg-[#FAF8F5] text-stone-900 selection:bg-[#4C1137] selection:text-white">
      {/* 1. FIXED BRAND NAVBAR */}
      <div className="fixed top-0 inset-x-0 z-50 w-full bg-[#180410] border-b border-white/10 shadow-md">
        <SriGajkesariNavbar />
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative  w-full min-h-[92vh] lg:min-h-[100vh] overflow-hidden bg-[#180410] text-white flex flex-col justify-end mt-42 pb-16 sm:pb-24 px-6 sm:px-12 lg:px-20 select-none">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://srigajkesari.com/wp-content/uploads/2026/09/story-bg.webp"
            alt="The Soul Behind The Sparkle"
            className={`w-full h-full object-cover object-center transition-all duration-1200 ease-out ${
              loaded ? "scale-100 opacity-95 blur-0" : "scale-105 opacity-0 blur-xs"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#180410] via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-radial-[at_center] from-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mr-auto">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="w-8 sm:w-12 h-[1px] bg-[#f2dab0]/60" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#f2dab0] font-medium flex items-center gap-2">
             
              Our Sacred Lineage
            </span>
          </div>

          <h1
            className={`font-1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-wide text-white drop-shadow-lg mb-6 transition-all duration-700 delay-150 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            The Soul Behind <br />
            <span className="italic font-light text-[#f2dab0] tracking-normal">
              The Sparkle
            </span>
          </h1>

          <p
            className={`font-2 text-stone-200/90 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mb-10 tracking-wide transition-all duration-700 delay-300 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Before gold is shaped and gemstones are set, there is devotion. A
            journey that began with trust and lives on in every heirloom we craft.
          </p>

          <div
            className={`transition-all duration-700 delay-500 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#chapter-one"
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#f2dab0] hover:text-white transition-colors group"
            >
              <span>Scroll to Unveil</span>
              <div className="w-8 h-8 rounded-full border border-[#f2dab0]/40 flex items-center justify-center group-hover:border-white transition-colors">
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 3. CHAPTER 1: FOUNDATION (LINE-BY-LINE SCROLL ANIMATION) */}
      <section
        id="chapter-one"
        ref={ch1Ref}
        className="w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto text-stone-800"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealLine progress={ch1Progress} threshold={0.12}>
            <span className="text-[10px] uppercase tracking-[0.38em] text-[#4C1137] font-semibold block mb-3">
              Chapter I &bull; Foundation
            </span>
          </RevealLine>

          <h2 className="font-1 text-3xl sm:text-5xl text-[#4C1137] uppercase tracking-[0.06em] leading-tight mb-8">
            <RevealLine progress={ch1Progress} threshold={0.16}>
              The Roots of Trust
            </RevealLine>
          </h2>

          <div className="space-y-4 font-2 text-stone-600 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            <RevealLine progress={ch1Progress} threshold={0.2}>
              The name Gajkesari draws inspiration from one of the most auspicious alignments in ancient Indian lore -
            </RevealLine>
            <RevealLine progress={ch1Progress} threshold={0.24}>
              the union of the Elephant (Gaj) and the Lion (Kesari). Together, they represent
            </RevealLine>
            <RevealLine progress={ch1Progress} threshold={0.28}>
              a rare blend of stability, wisdom, and royal presence.
            </RevealLine>
          </div>

          <div className="mt-6 space-y-4 font-2 text-stone-600 text-xs sm:text-sm md:text-base font-light leading-relaxed">
            <RevealLine progress={ch1Progress} threshold={0.32}>
              Sri Gajkesari is a fine jewellery house created to bring those exact qualities to your family celebrations.
            </RevealLine>
            <RevealLine progress={ch1Progress} threshold={0.36}>
              Built as the elevated design identity of Sri Ganesh Jewellery, we bridge generations of deep industry knowledge
            </RevealLine>
            <RevealLine progress={ch1Progress} threshold={0.4}>
              with contemporary artistry. We specialise in creating pieces that are not just beautiful to wear,
            </RevealLine>
            <RevealLine progress={ch1Progress} threshold={0.44}>
              but built to hold emotional value for years to come.
            </RevealLine>
          </div>
        </div>

        {/* Quote Break Line Reveal */}
        <div className="relative my-12 py-10 border-y border-[#EAE4DC] text-center">
          <p className="font-1 text-xl sm:text-2xl md:text-3xl text-[#4C1137] italic font-light max-w-2xl mx-auto leading-snug">
            <RevealLine progress={ch1Progress} threshold={0.48}>
              &ldquo;Jewellery is not metal and stone alone.
            </RevealLine>
            <RevealLine progress={ch1Progress} threshold={0.52}>
              It is memory made physical, carried across generations.&rdquo;
            </RevealLine>
          </p>
          <RevealLine progress={ch1Progress} threshold={0.56}>
            <span className="font-3 text-[10px] uppercase tracking-[0.25em] text-stone-400 block mt-4">
              The Founding Ethos
            </span>
          </RevealLine>
        </div>
      </section>

      {/* 4. CHAPTER 2: TRUE 50/50 FULL-HEIGHT LAYOUT (LINE-BY-LINE SCROLL ANIMATION) */}
      <section
        ref={ch2Ref}
        className="w-full min-h-screen bg-[#F5EFE6] border-y border-[#EAE3D6] overflow-hidden"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Column: 1/2 Width Story Narrative with Line-by-Line Transitions */}
          <div className="flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-20 lg:py-24 order-2 lg:order-1">
            <div className="max-w-xl">
              <RevealLine progress={ch2Progress} threshold={0.14}>
                <span className="text-[10px] uppercase tracking-[0.38em] text-[#4C1137] font-semibold block mb-3">
                  Chapter II &bull; The Evolution
                </span>
              </RevealLine>

              <h2 className="font-1 text-3xl sm:text-5xl lg:text-6xl text-[#4C1137] uppercase tracking-[0.06em] leading-[1.08] mb-6">
                <RevealLine progress={ch2Progress} threshold={0.18}>
                  A Foundation Built
                </RevealLine>
                <RevealLine progress={ch2Progress} threshold={0.22}>
                  Over Decades
                </RevealLine>
              </h2>

              <div className="space-y-3 font-2 text-stone-600 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-6">
                <RevealLine progress={ch2Progress} threshold={0.26}>
                  As design sensibilities shifted, our patrons sought jewellery that honored age-old
                </RevealLine>
                <RevealLine progress={ch2Progress} threshold={0.3}>
                  craft while projecting a contemporary royal presence. Sri Gajkesari was born from
                </RevealLine>
                <RevealLine progress={ch2Progress} threshold={0.34}>
                  this artistic convergence.
                </RevealLine>
              </div>

              <div className="space-y-3 font-2 text-stone-600 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-8">
                <RevealLine progress={ch2Progress} threshold={0.38}>
                  We brought together master karigars from across Indiaexpert temple sculptors from the
                </RevealLine>
                <RevealLine progress={ch2Progress} threshold={0.42}>
                  South, uncut Polki setting maestros from Rajasthan, and fine seed pearl weavers.
                </RevealLine>
              </div>

              <div className="overflow-hidden">
                <div
                  className={`transition-all duration-700 ease-out ${
                    ch2Progress >= 0.46
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <Link
                    href="/collection"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#4C1137] hover:bg-[#340b25] text-white text-[10px] uppercase tracking-[0.26em] font-medium transition-all shadow-sm group"
                  >
                    <span>Explore The Masterpieces</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: True 1/2 Width Full-Height Edge-to-Edge Image */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-full min-h-full overflow-hidden bg-[#24061b] order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-[#EAE3D6]">
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/foundation.webp"
              alt="Ancestral Craftsmanship - Sri Gajkesari"
              className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                ch2Progress >= 0.1 ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          </div>
        </div>
      </section>

      {/* 5. CHAPTER 3: WHAT GUIDES EVERY PIECE WE MAKE (LINE REVEAL ON SCROLL) */}
      <section
        ref={ch3Ref}
        className="w-full bg-[#400e2e] text-white py-24 sm:py-32 px-6 sm:px-12 lg:px-20 select-none relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,218,176,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
            <h2 className="font-1 text-3xl sm:text-5xl lg:text-6xl tracking-[0.06em] text-[#f2dab0] leading-tight capitalize">
              <RevealLine progress={ch3Progress} threshold={0.14}>
                What Guides Every Piece We Make
              </RevealLine>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {guidePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const cardThreshold = 0.2 + idx * 0.08;
              const isCardRevealed = ch3Progress >= cardThreshold;

              return (
                <div
                  key={idx}
                  className={`border border-[#d4af37]/35 rounded-xl p-8 sm:p-9 bg-[#4a1236]/80 backdrop-blur-xs flex flex-col items-center text-center transition-all duration-700 hover:border-[#f2dab0] hover:-translate-y-2 hover:shadow-2xl ${
                    isCardRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-[#f2dab0] mb-8 border border-[#d4af37]/40 bg-[#320824]/80 shadow-inner">
                    <IconComponent className="w-7 h-7 stroke-[1.2]" />
                  </div>

                  <h3 className="font-1 text-base sm:text-lg uppercase tracking-[0.14em] text-[#f2dab0] mb-4">
                    {pillar.title}
                  </h3>

                  <p className="font-2 text-stone-200/90 text-xs sm:text-[13px] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OUR PROMISE & ACCORDION CLARITY (LINE-BY-LINE SCROLL ANIMATION) */}
      <section
        ref={promiseRef}
        className="w-full bg-[#FAF8F5] text-stone-900 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-[#EAE4DC] select-none"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <RevealLine progress={promiseProgress} threshold={0.1}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[#4C1137]/40" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#4C1137] font-semibold flex items-center gap-1.5">
                
                  The Gajkesari Standard
                </span>
                <span className="w-6 h-[1px] bg-[#4C1137]/40" />
              </div>
            </RevealLine>

            <h2 className="font-1 text-3xl sm:text-5xl uppercase tracking-[0.06em] text-[#4C1137] leading-tight mb-6">
              <RevealLine progress={promiseProgress} threshold={0.14}>
                Our Promise To You
              </RevealLine>
            </h2>

            <div className="space-y-2 font-2 text-stone-600 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              <RevealLine progress={promiseProgress} threshold={0.18}>
                We know that buying jewellery is an emotional decision and a big investment.
              </RevealLine>
              <RevealLine progress={promiseProgress} threshold={0.22}>
                That’s why we keep everything completely transparent:
              </RevealLine>
            </div>
          </div>

          {/* 3 Promise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div
              className={`bg-white border border-[#EAE4DC] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-700 hover:shadow-md hover:border-[#4C1137]/30 group ${
                promiseProgress >= 0.26
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-14 h-14 rounded-full border border-[#4C1137]/20 flex items-center justify-center mb-6 text-[#4C1137] bg-[#FAF8F5] group-hover:scale-110 group-hover:bg-[#4C1137] group-hover:text-white transition-all duration-300">
                <Award className="w-6 h-6 stroke-[1.4]" />
              </div>
              <h3 className="font-1 text-lg sm:text-xl text-[#4C1137] mb-2">
                100% BIS Hallmarked Gold
              </h3>
              <p className="font-2 text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                Every piece is tested and certified.
              </p>
            </div>

            <div
              className={`bg-white border border-[#EAE4DC] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-700 hover:shadow-md hover:border-[#4C1137]/30 group ${
                promiseProgress >= 0.32
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-14 h-14 rounded-full border border-[#4C1137]/20 flex items-center justify-center mb-6 text-[#4C1137] bg-[#FAF8F5] group-hover:scale-110 group-hover:bg-[#4C1137] group-hover:text-white transition-all duration-300">
                <Gem className="w-6 h-6 stroke-[1.4]" />
              </div>
              <h3 className="font-1 text-lg sm:text-xl text-[#4C1137] mb-2">
                Certified Diamonds
              </h3>
              <p className="font-2 text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                Rated by trusted global labs (GIA/IGI).
              </p>
            </div>

            <div
              className={`bg-white border border-[#EAE4DC] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-700 hover:shadow-md hover:border-[#4C1137]/30 group ${
                promiseProgress >= 0.38
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-14 h-14 rounded-full border border-[#4C1137]/20 flex items-center justify-center mb-6 text-[#4C1137] bg-[#FAF8F5] group-hover:scale-110 group-hover:bg-[#4C1137] group-hover:text-white transition-all duration-300">
                <Scale className="w-6 h-6 stroke-[1.4]" />
              </div>
              <h3 className="font-1 text-lg sm:text-xl text-[#4C1137] mb-2">
                Fair Pricing
              </h3>
              <p className="font-2 text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                No hidden figures, just complete transparency.
              </p>
            </div>
          </div>

          {/* Everything You Need To Know (Accordion) */}
          <div className="max-w-4xl mx-auto pt-16 border-t border-[#EAE4DC]">
            <div className="text-center mb-12">
              <RevealLine progress={promiseProgress} threshold={0.44}>
                <span className="text-[10px] uppercase tracking-[0.38em] text-[#4C1137] font-semibold block mb-2">
                  Clarity &amp; Inquiries
                </span>
              </RevealLine>

              <h3 className="font-1 text-2xl sm:text-4xl uppercase tracking-[0.06em] text-[#4C1137]">
                <RevealLine progress={promiseProgress} threshold={0.48}>
                  Everything You Need To Know
                </RevealLine>
              </h3>
            </div>

            <div className="divide-y divide-[#EAE4DC] border-y border-[#EAE4DC]">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-6 sm:py-8 transition-colors">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-1 text-base sm:text-xl text-stone-900 group-hover:text-[#4C1137] transition-colors">
                        {faq.question}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#4C1137] text-white border-[#4C1137]"
                            : "text-stone-600 group-hover:border-[#4C1137]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out overflow-hidden ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-2 text-stone-600 text-xs sm:text-sm md:text-[15px] font-light leading-relaxed pr-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
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