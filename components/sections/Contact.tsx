"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPin, Phone, Clock, Compass } from "lucide-react";

export default function ContactShowroom() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);

      // Subtle parallax inside boutique image frame
      const offset = (clamped - 0.5) * 22;
      setParallaxY(offset);
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
      className="relative w-full min-h-screen bg-[#E6E6E6] text-stone-900 overflow-hidden select-none border-t border-[#D4D4D4] flex flex-col justify-center py-16 sm:py-20 lg:py-0"
    >
      <div className="w-full max-w-[1500px] mx-auto min-h-screen flex items-center px-4 sm:px-8 lg:px-14">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-10 lg:py-16">
          
          {/* ================= LEFT COLUMN: CLEAN EDITORIAL SALON ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-7 sm:space-y-8">
            
            {/* Header & Subtitle */}
            <div className="space-y-3">
              <div
                className={`flex items-center gap-3 transition-all duration-700 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="w-8 h-[1px] bg-[#4C1137]/60" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.42em] text-[#4C1137] font-semibold">
                  The Malleshwaram Flagship
                </span>
              </div>

              <h2
                className={`font-1 text-3xl sm:text-5xl lg:text-[46px] uppercase tracking-[0.05em] text-[#4C1137] leading-[1.08] transition-all duration-700 delay-100 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                A Sanctum Of <br />
                <span className="italic font-light tracking-[0.02em] text-stone-800">
                  Timeless Adornment
                </span>
              </h2>

              <p
                className={`font-2 text-stone-600 text-xs sm:text-sm font-light leading-relaxed max-w-lg transition-all duration-700 delay-200 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Step into a space carved for private curation. Whether selecting
                an heirloom bridal parure or commissioning custom gold karigari,
                our viewing salon offers discreet personal guidance.
              </p>
            </div>

            {/* Haute Concierge Form */}
            <div
              className={`bg-white/80 backdrop-blur-md border border-[#D8D8D8] p-6 sm:p-8 rounded-none shadow-sm transition-all duration-700 delay-300 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#4C1137] font-semibold">
                  Reserve Private Appointment
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-stone-400">
                  Direct Atelier Access
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-medium block">
                      Client Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs py-1.5 text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-medium block">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs py-1.5 text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-medium block">
                    Piece or Occasion of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Heritage Jadau Trousseau, 916 Temple Gold, Solitaires"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs py-1.5 text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-7 py-3 bg-[#4C1137] hover:bg-[#340b25] text-white text-[10px] uppercase tracking-[0.26em] font-medium transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-95 group"
                  >
                    <span>{submitted ? "Inquiry Dispatched" : "Confirm Appointment"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <a
                    href="tel:+919535125553"
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#4C1137] hover:text-stone-900 font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 95351 25553</span>
                  </a>
                </div>
              </form>
            </div>

            {/* Boutique Location & Timings Details */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 transition-all duration-700 delay-400 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.22em] text-[#4C1137] font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>The Boutique</span>
                </div>
                <p className="font-2 text-xs text-stone-600 leading-relaxed font-light">
                  #249, Margosa Road, Between 16th &amp; 17th Cross, Malleshwaram, Bengaluru 560003
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.22em] text-[#4C1137] font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Viewing Hours</span>
                </div>
                <p className="font-2 text-xs text-stone-600 leading-relaxed font-light">
                  Monday to Sunday &bull; 10:30 AM – 8:30 PM
                  <span className="block text-[11px] text-[#8C6D37] font-medium pt-0.5">
                    Walk-ins &amp; Curated Appointments Welcome
                  </span>
                </p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: HIGH-END SALON ARCHITECTURE ================= */}
          <div className="lg:col-span-6 relative w-full h-[480px] sm:h-[580px] lg:h-[720px] rounded-none overflow-hidden border border-[#D4D4D4] bg-[#180410] shadow-xl group">
            
            {/* Parallax Image Stage */}
            <div
              className="absolute -top-[14%] inset-x-0 h-[128%] w-full will-change-transform transition-transform duration-100 ease-out"
              style={{
                transform: `translate3d(0, ${parallaxY}%, 0) scale(1.08)`,
              }}
            >
              <img
                src="https://srigajkesari.com/wp-content/uploads/2026/09/store-contact.webp"
                alt="Sri Gajkesari Jewellers Flagship Salon Malleshwaram"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
              />
            </div>

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

            {/* Top Navigation Anchor Pill */}
            <div className="absolute top-6 right-6 z-20">
              <a
                href="https://maps.google.com/?cid=11554011192802922623"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-[#4C1137] text-[9.5px] uppercase tracking-[0.24em] font-medium backdrop-blur-md shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Navigate Map</span>
                <Compass className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Floating Editorial Salon Plaque at Bottom */}
            <div className="absolute bottom-6 inset-x-6 sm:bottom-8 sm:inset-x-8 z-20 p-5 sm:p-6 bg-white/95 backdrop-blur-md border border-white/60 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#8C6D37] font-semibold block mb-0.5">
                  Private Salon Experience
                </span>
                <h3 className="font-1 text-lg sm:text-xl text-[#4C1137] uppercase tracking-[0.06em]">
                  Sri Gajkesari Flagship
                </h3>
                <p className="font-2 text-[11px] text-stone-500 font-light pt-0.5">
                  Malleshwaram, Bengaluru &bull; Valet Available
                </p>
              </div>

              <a
                href="tel:+919535125553"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4C1137] text-white hover:bg-[#340b25] text-[9.5px] uppercase tracking-[0.22em] font-medium transition-all shadow-sm active:scale-95 self-start sm:self-auto"
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