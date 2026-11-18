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
      className="relative z-20 w-full bg-[#FFFFFF] text-[#491239] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 select-none border-t border-[#dfb16b]/30"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* ================= 1. EDITORIAL HEADER ================= */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-2">
            
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.26em] font-semibold text-[#9f732e]">
              Visit Us
            </span>
          </div>

          <p className="text-sm sm:text-base font-medium tracking-tight text-[#491239]/80 mb-3">
            Experience Sri Gajkesari.
          </p>

          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#491239] leading-[1.06] mb-5">
            Private Viewing. <br />
            <span className="text-[#dfb16b] font-normal">
              Personal Consultation.
            </span>
          </h2>

          <div className="space-y-3 text-sm sm:text-base text-[#491239]/80 font-normal tracking-tight leading-relaxed max-w-2xl">
            <p>
              Discover a world of exquisite jewellery, traditional artistry and
              personalised hospitality at our Malleshwaram showroom.
            </p>
            <p>
              Whether you’re choosing your wedding jewellery, commissioning a
              custom creation, finding a meaningful gift or exploring something
              special for yourself, our team is here to guide you with personal
              attention and care.
            </p>
            <p className="font-medium text-[#491239] pt-1">
              We look forward to welcoming you.
            </p>
          </div>
        </div>

        {/* ================= 2. 2-COLUMN ROYAL PLUM & GOLD BENTO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Warm Ivory & Gold Appointment Form (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#FAF8F5] border border-[#dfb16b]/35 p-8 sm:p-12 flex flex-col justify-between shadow-[0_18px_40px_-15px_rgba(73,18,57,0.06)]">
            <div>
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#dfb16b]/25">
                <span className="text-sm font-semibold tracking-tight text-[#491239]">
                  Request a Private Consultation
                </span>
                <span className="text-xs font-medium text-[#9f732e] tracking-tight">
                  Direct Showroom Access
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs text-[#491239] font-medium tracking-tight block mb-2">
                    Client Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Radhika Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white border border-[#dfb16b]/35 rounded-2xl px-4 py-3 text-sm text-[#491239] placeholder:text-[#491239]/40 focus:outline-none focus:border-[#491239] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#491239] font-medium tracking-tight block mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-white border border-[#dfb16b]/35 rounded-2xl px-4 py-3 text-sm text-[#491239] placeholder:text-[#491239]/40 focus:outline-none focus:border-[#491239] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#491239] font-medium tracking-tight block mb-2">
                    Piece or Occasion of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="Bridal Trousseau, 916 Gold, Solitaire Ring"
                    value={formData.note}
                    onChange={(e) =>
                      setFormData({ ...formData, note: e.target.value })
                    }
                    className="w-full bg-white border border-[#dfb16b]/35 rounded-2xl px-4 py-3 text-sm text-[#491239] placeholder:text-[#491239]/40 focus:outline-none focus:border-[#491239] transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-[#491239] hover:bg-[#320a26] text-white border border-[#dfb16b]/30 text-xs sm:text-sm font-medium tracking-tight rounded-full transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
                  >
                    <span>
                      {submitted
                        ? "Consultation Request Received"
                        : "Request a Private Consultation"}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#dfb16b]" />
                  </button>

                  <a
                    href="tel:+919535125553"
                    className="inline-flex items-center gap-1.5 text-xs text-[#491239] hover:text-[#9f732e] font-medium tracking-tight transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#dfb16b]" />
                    <span>+91 95351 25553</span>
                  </a>
                </div>
              </form>
            </div>

            {/* Showroom Address & Timings Footer */}
            <div className="pt-10 mt-10 border-t border-[#dfb16b]/25 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#491239]/80">
              <div>
                <span className="block font-semibold text-[#491239] mb-1">
                  Showroom
                </span>
                <p className="leading-relaxed">
                  #249, Margosa Road, Between 16th &amp; 17th Cross,
                  Malleshwaram, Bengaluru 560003
                </p>
              </div>
              <div>
                <span className="block font-semibold text-[#491239] mb-1">
                  Viewing Hours
                </span>
                <p className="leading-relaxed">
                  Monday to Sunday &bull; 10:30 AM – 8:30 PM
                </p>
                <span className="text-[11px] text-[#9f732e] font-semibold block mt-1">
                  Valet parking available
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Stage (6 cols) */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-[#26071c] border border-[#dfb16b]/35 min-h-[460px] sm:min-h-[560px] shadow-[0_20px_50px_-15px_rgba(73,18,57,0.2)] group">
            {/* Parallax Image Canvas */}
            <div
              className="absolute -top-[15%] inset-x-0 h-[130%] w-full will-change-transform"
              style={{
                transform: `translate3d(0, ${parallaxY}px, 0) scale(1.05)`,
                transition: "transform 0.08s linear",
              }}
            >
              <img
                src="/store-contact.webp"
                alt="Sri Gajkesari Jewellers Flagship Showroom Malleshwaram"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>

            {/* Royal Plum Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#26071c]/80 via-[#26071c]/15 to-transparent pointer-events-none" />

            {/* Top Royal Plum & Gold Map Pill */}
            <div className="absolute top-6 right-6 z-10">
              <a
                href="https://maps.google.com/?cid=11554011192802922623"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#491239]/90 hover:bg-[#320a26] text-[#dfb16b] border border-[#dfb16b]/40 text-xs font-medium tracking-tight backdrop-blur-md shadow-md transition-all active:scale-95"
              >
                <span>Navigate map</span>
                <Compass className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Bottom Royal Plum & Gold Flagship Plaque */}
            <div className="absolute bottom-6 inset-x-6 sm:bottom-8 sm:inset-x-8 z-10 p-6 rounded-2xl bg-[#491239]/95 backdrop-blur-md border border-[#dfb16b]/35 shadow-xl flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#dfb16b] block mb-0.5">
                  Flagship Showroom
                </span>
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
                  Sri Gajkesari Flagship
                </h3>
                <p className="text-xs text-[#f5e6cc]/80 tracking-tight">
                  Malleshwaram, Bengaluru
                </p>
              </div>

              <a
                href="tel:+919535125553"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#dfb16b] hover:bg-[#e8c284] text-[#26071c] text-xs font-semibold tracking-tight rounded-full transition-all active:scale-95 shrink-0 shadow-sm"
              >
                <Phone className="w-3 h-3" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}