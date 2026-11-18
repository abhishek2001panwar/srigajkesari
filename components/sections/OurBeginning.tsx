"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OurBeginning() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);
  const cardParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const totalTravel = vh + rect.height;
      const currentScroll = vh - rect.top;
      const progress = Math.min(Math.max(currentScroll / totalTravel, 0), 1);

      const parallax1 = (progress - 0.5) * -8;
      const parallax2 = (progress - 0.5) * 6;

      if (bgParallaxRef.current) {
        bgParallaxRef.current.style.transform = `translate3d(0, ${parallax1}%, 0) scale(1.04)`;
      }
      if (cardParallaxRef.current) {
        cardParallaxRef.current.style.transform = `translate3d(0, ${parallax2}%, 0) scale(1.06)`;
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

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative z-20 isolate w-full bg-[#FAF8F5] text-[#491239] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden select-none border-t border-[#dfb16b]/25"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto">
        
        {/* ================= 1. SECTION HEADER ================= */}
        <div className="relative z-20 max-w-4xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[12px] uppercase tracking-[0.24em] font-semibold text-[#9f732e] block">
              Our Beginning
            </span>
          </div>
          {/* <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] text-[#491239]">
            Ancestral trust. <br />
            <span className="text-[#dfb16b] font-normal">Captured in gold.</span>
          </h2> */}
           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-[#491239]">
           A Legacy Rooted in Trust. 
 <br />
            <span className="text-[#dfb16b] font-normal">A New Expression of Royalty.</span>
          </h2>
        </div>

        {/* ================= 2. WIDER IMAGE STAGE WITH RIGHT-SIDE 50/50 OVERHANG ================= */}
        <div className="relative z-10 w-full lg:w-[82%] xl:w-[84%]">
          
          {/* Primary Background Image Frame */}
          <div className="relative w-full rounded-3xl overflow-hidden bg-[#26071c] border border-[#dfb16b]/30 min-h-[480px] sm:min-h-[580px] lg:min-h-[650px] shadow-[0_24px_60px_-15px_rgba(73,18,57,0.18)] flex flex-col justify-end p-6 sm:p-8 lg:p-10">
            
            {/* Primary Image (/about/beginning.jpg) */}
            <div
              ref={bgParallaxRef}
              className="absolute -top-[10%] inset-x-0 h-[120%] w-full will-change-transform pointer-events-none"
              style={{
                transform: "translate3d(0, 0%, 0) scale(1.04)",
                transition: "transform 0.1s linear",
              }}
            >
              <img
                src="/about/beginning.jpg"
                alt="The Beginning - Sri Gajkesari Jewellers"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Subtle Bottom Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f0416]/85 via-[#26071c]/15 to-transparent pointer-events-none" />

            {/* Bottom-Left Caption Anchor */}
            <div className="relative z-20 pointer-events-none max-w-sm">
              <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#dfb16b] block mb-1">
                Since Sri Ganesh
              </span>
              <p className="text-lg sm:text-xl font-medium tracking-tight text-[#f5e6cc] drop-shadow-sm">
                Decades of unbroken gold purity.
              </p>
            </div>
          </div>

          {/* ================= 3. TOP-RIGHT CARD: HALF INSIDE IMAGE, HALF OUTSIDE RIGHT EDGE ================= */}
          <div className="relative lg:absolute lg:top-8 xl:top-10 lg:right-0 lg:translate-x-1/2 z-30 mt-6 lg:mt-0 w-full lg:w-[390px] xl:w-[420px] rounded-2xl overflow-hidden bg-[#26071c] border border-[#dfb16b]/45 shadow-[0_28px_60px_-12px_rgba(38,7,28,0.5)] group">
            
            {/* Secondary Image (/about/roots.webp) Behind the Text Box */}
            <div
              ref={cardParallaxRef}
              className="absolute -top-[10%] inset-x-0 h-[120%] w-full will-change-transform pointer-events-none"
              style={{
                transform: "translate3d(0, 0%, 0) scale(1.06)",
                transition: "transform 0.1s linear",
              }}
            >
              <img
                src="/about/roots.webp"
                alt="Ancestral Goldsmithing - Sri Gajkesari Jewellers"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>

            {/* Royal Plum Veil for Crisp Champagne Gold Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#24061a]/95 via-[#491239]/88 to-[#491239]/70 pointer-events-none" />

            {/* Foreground Narrative Copy */}
          {/* Foreground Narrative Copy */}
            <div className="relative z-10 p-6 sm:p-7 space-y-2.5">
            

              <p className="text-sm sm:text-[15px] text-[#dfb16b] font-medium tracking-tight leading-snug">
                Before Sri Gajkesari, there was Sri Ganesh Diamonds &amp; Jewellery.
              </p>

              <p className="text-[11px] sm:text-xs text-[#f5e6cc]/90 font-normal tracking-tight leading-relaxed">
                For decades, families walked through our doors, trusting us with the jewellery that marked their most important milestones. Their confidence, relationships and continued patronage became the foundation of our journey.
              </p>

              <p className="text-[11px] sm:text-xs text-[#f5e6cc]/90 font-normal tracking-tight leading-relaxed">
                Building on this legacy, Sri Gajkesari Jewellers was born with a commitment to purity, craftsmanship and relationships that stand the test of time.
              </p>

              <p className="text-[11px] sm:text-xs text-[#f5e6cc]/90 font-normal tracking-tight leading-relaxed">
                Rooted in years of experience and inspired by India’s rich jewellery heritage, we bring together traditional artistry, thoughtful design and a personalised approach to fine jewellery.
              </p>

              <p className="text-[11px] sm:text-xs text-[#f5e6cc]/90 font-normal tracking-tight leading-relaxed">
                Today, Sri Gajkesari carries that legacy forward, creating more than beautiful jewellery - creating pieces that become a part of your family’s story.
              </p>

              <div className="pt-1.5">
                <Link
                  href="/story"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-tight text-[#dfb16b] hover:text-white transition-colors group/link cursor-pointer"
                >
                  <span>Discover Our Story</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#dfb16b] group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}