"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPin, Phone, Clock, Compass } from "lucide-react";

export default function ContactShowroom() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#FBF9F5] text-stone-900 overflow-hidden border-t border-[#EAE3D6] select-none flex flex-col justify-center"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 h-full lg:h-screen">
        
        {/* ================= LEFT COLUMN: COMPACT EDITORIAL ATELIER (FITS 1 SCREEN) ================= */}
        <div className="lg:col-span-6 flex flex-col justify-between px-6 sm:px-10 lg:px-14 xl:px-16 py-8 sm:py-10 lg:py-10 xl:py-12 relative z-10 overflow-y-auto lg:overflow-visible">
          <div className="max-w-xl flex flex-col justify-between h-full space-y-4 sm:space-y-5">
            
            {/* 1. Header Group */}
            <div>
              <div
                className={`flex items-center gap-3 mb-2 sm:mb-3 transition-all duration-700 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="w-6 h-[1px] bg-[#4C1137]/40" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-[#4C1137] font-semibold">
                  The Malleshwaram Flagship
                </span>
              </div>

              <h2
                className={`font-1 text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] uppercase tracking-[0.05em] text-[#4C1137] leading-[1.08] mb-2 sm:mb-3 transition-all duration-700 delay-100 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                A Sanctum of <br />
                <span className="italic font-normal tracking-[0.02em] text-[#6b1e50]">
                  Timeless Adornment
                </span>
              </h2>

              <p
                className={`font-2 text-stone-600 text-xs sm:text-[13px] font-light leading-relaxed tracking-wide transition-all duration-700 delay-200 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Step into a space carved for deliberate contemplation. Our private
                Malleshwaram viewing salon welcomes you to discover heirlooms crafted
                with unbroken lineage.
              </p>
            </div>

            {/* 2. Compact Boutique Info Row */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-3.5 border-y border-[#E5DDD0] transition-all duration-700 delay-300 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-[#4C1137] font-semibold">
                  <MapPin className="w-3 h-3 stroke-[2]" />
                  <span>The Address</span>
                </div>
                <p className="font-2 text-[11px] sm:text-xs text-stone-600 leading-tight font-light">
                  #249, Margosa Rd, Between 16th &amp; 17th Cross, Malleshwaram
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-[#4C1137] font-semibold">
                  <Clock className="w-3 h-3 stroke-[2]" />
                  <span>Visiting Hours</span>
                </div>
                <p className="font-2 text-[11px] sm:text-xs text-stone-600 leading-tight font-light">
                  Daily: 10:30 AM – 8:30 PM <span className="text-stone-400">(Walk-ins welcome)</span>
                </p>
              </div>
            </div>

            {/* 3. Streamlined Minimal Form */}
            <div
              className={`transition-all duration-700 delay-400 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#4C1137] font-semibold block mb-3">
                Request a Private Consultation
              </span>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs py-1.5 text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Contact Number *"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs py-1.5 text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Pieces of Interest (e.g. Bridal Polki, Antique Temple Gold, Solitaires)"
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs py-1.5 text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                />

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 bg-[#4C1137] hover:bg-[#340b25] text-white text-[9px] sm:text-[10px] uppercase tracking-[0.28em] font-medium transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer active:scale-95"
                  >
                    <span>{submitted ? "Inquiry Dispatched" : "Reserve Your Appointment"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

            {/* 4. Compact Embedded Google Map */}
            <div
              className={`relative w-full h-24 sm:h-28 rounded-xs overflow-hidden border border-[#E5DDD0] shadow-xs group bg-[#F5EFE6] transition-all duration-700 delay-500 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <iframe
                title="Sri Gajkesari Jewellers Malleshwaram Location"
                src="https://maps.google.com/maps?cid=11554011192802922623&hl=en&gl=IN&t=m&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.85] contrast-[1.02] group-hover:saturate-100 transition-all duration-500"
              />
              <a
                href="https://maps.google.com/?cid=11554011192802922623"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-white/95 hover:bg-white text-[#4C1137] border border-stone-200 text-[8px] sm:text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 flex items-center gap-1 shadow-sm transition-colors"
              >
                <span>Navigate</span>
                <Compass className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN: CRISP 100% HEIGHT BOUTIQUE VIEW ================= */}
        <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] lg:h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-[#EAE3D6] bg-[#220718]">
          
          {/* Crisp, Unstretched High-Density Image (No fractional scaling or blur) */}
          <img
            src="https://srigajkesari.com/wp-content/uploads/2026/09/store-contact.webp"
            alt="Sri Gajkesari Jewellers Flagship Showroom"
            decoding="async"
            className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
              isInView ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />

          {/* Minimal Clean Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

          {/* Luxury Floating Concierge Plaque */}
          <div
            className={`absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 p-4 sm:p-5 bg-[#FAF7F2]/95 backdrop-blur-md border border-white/60 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-all duration-700 delay-500 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#4C1137] font-semibold block mb-0.5">
                The Malleshwaram Salons
              </span>
              <p className="font-1 text-sm sm:text-base text-stone-900 tracking-wide">
                Sri Gajkesari Jewellers
              </p>
            </div>

            <a
              href="tel:+919535125553"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#4C1137]/30 text-[#4C1137] hover:bg-[#4C1137] hover:text-white transition-all text-[9px] uppercase tracking-[0.22em] font-medium self-start sm:self-auto"
            >
              <Phone className="w-3 h-3" />
              <span>+91 95351 25553</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}