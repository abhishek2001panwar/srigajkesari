"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Compass, Phone } from "lucide-react";

export default function ContactShowroom() {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.bottom >= 0 && rect.top <= vh) {
        const centerOffset = rect.top + rect.height / 2 - vh / 2;
        setParallaxY(-centerOffset * 0.14);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", note: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-20 w-full bg-[#FFFFFF] text-[#1D1D1F] py-16 px-6 sm:px-10 lg:px-16 select-none border-t border-black/5"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* ================= 1. APPLE EDITORIAL HEADER ================= */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <span className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#86868B] block mb-3">
            Malleshwaram Flagship
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.06] mb-4">
            Private viewing. <br />
            <span className="text-[#86868B] font-normal">Dedicated salon.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#86868B] font-normal tracking-tight leading-relaxed">
            Step into a space reserved for quiet curation. Whether choosing a bridal parure or commissioning custom karigari, our atelier team provides discrete personal guidance.
          </p>
        </div>

        {/* ================= 2. 2-COLUMN MINIMAL BENTO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Frosted Minimal Appointment Form (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-black/10">
                <span className="text-sm font-semibold tracking-tight text-[#1D1D1F]">
                  Request an Appointment
                </span>
                <span className="text-xs text-[#86868B] tracking-tight">
                  Direct Atelier Access
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs text-[#86868B] font-normal tracking-tight block mb-2">
                    Client Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Radhika Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-sm text-[#1D1D1F] placeholder:text-[#86868B]/60 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#86868B] font-normal tracking-tight block mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-sm text-[#1D1D1F] placeholder:text-[#86868B]/60 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#86868B] font-normal tracking-tight block mb-2">
                    Piece or Occasion of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="Bridal Trousseau, 916 Gold, Solitaire Ring"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-sm text-[#1D1D1F] placeholder:text-[#86868B]/60 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-[#4C1137] hover:bg-[#340b25] text-white text-xs sm:text-sm font-medium tracking-tight rounded-full transition-all duration-200 active:scale-95 shadow-sm"
                  >
                    <span>{submitted ? "Appointment Received" : "Confirm Appointment"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="tel:+919535125553"
                    className="inline-flex items-center gap-1.5 text-xs text-[#86868B] hover:text-[#1D1D1F] font-normal tracking-tight transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 95351 25553</span>
                  </a>
                </div>
              </form>
            </div>

            {/* Atelier Address & Timings Footer */}
            <div className="pt-10 mt-10 border-t border-black/10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#86868B]">
              <div>
                <span className="block font-semibold text-[#1D1D1F] mb-1">Boutique</span>
                <p className="leading-relaxed">
                  #249, Margosa Road, Between 16th &amp; 17th Cross, Malleshwaram, Bengaluru 560003
                </p>
              </div>
              <div>
                <span className="block font-semibold text-[#1D1D1F] mb-1">Viewing Hours</span>
                <p className="leading-relaxed">
                  Monday to Sunday &bull; 10:30 AM – 8:30 PM
                </p>
                <span className="text-[11px] text-[#4C1137] font-medium block mt-1">
                  Valet parking available
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Stage (6 cols) */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-stone-100 border border-black/[0.04] min-h-[460px] sm:min-h-[560px] shadow-sm group">
            {/* Parallax Image Canvas */}
            <div
              className="absolute -top-[15%] inset-x-0 h-[130%] w-full will-change-transform"
              style={{
                transform: `translate3d(0, ${parallaxY}px, 0) scale(1.05)`,
                transition: "transform 0.08s linear",
              }}
            >
              <img
                src="https://srigajkesari.com/wp-content/uploads/2026/09/store-contact.webp"
                alt="Sri Gajkesari Jewellers Flagship Salon Malleshwaram"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>

            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

            {/* Top Minimal Map Pill */}
            <div className="absolute top-6 right-6 z-10">
              <a
                href="https://maps.google.com/?cid=11554011192802922623"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-black text-xs font-medium tracking-tight backdrop-blur-md shadow-sm transition-all active:scale-95"
              >
                <span>Navigate map</span>
                <Compass className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Bottom Minimal Salon Info Plaque */}
            <div className="absolute bottom-6 inset-x-6 sm:bottom-8 sm:inset-x-8 z-10 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#86868B] block mb-0.5">
                  Private Salon
                </span>
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#1D1D1F]">
                  Sri Gajkesari Flagship
                </h3>
                <p className="text-xs text-[#86868B] tracking-tight">
                  Malleshwaram, Bengaluru
                </p>
              </div>

              <a
                href="tel:+919535125553"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-black hover:bg-stone-800 text-white text-xs font-medium tracking-tight rounded-full transition-all active:scale-95 shrink-0"
              >
                <Phone className="w-3 h-3" />
                <span>Call Salon</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}