"use client";

import React, { useState } from "react";
import { CheckCircle2, Phone, Compass } from "lucide-react";
import SriGajkesariNavbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const appointmentTypes = [
  "Private Viewing Suite",
  "Virtual Video Preview",
  "Bridal Trousseau Styling",
  "Bespoke Commission",
  "Heirloom Remodelling",
];

const collectionsList = [
  "Rajasi (Jadau & Polki)",
  "Suvarna (916 Gold)",
  "Devatri (Temple Nakshi)",
  "Ratnavali (Basra Pearls)",
  "Niharika (Rare Solitaires)",
  "Purusa (Men's Fine Jewellery)",
  "Kasu (Sacred Coins)",
  "Viraasat (Antique Heirlooms)",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    appointmentType: "Private Viewing Suite",
    collection: "Rajasi (Jadau & Polki)",
    preferredDate: "",
    requirements: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        appointmentType: "Private Viewing Suite",
        collection: "Rajasi (Jadau & Polki)",
        preferredDate: "",
        requirements: "",
      });
    }, 4500);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FAF8F5] text-[#491239] selection:bg-[#491239] selection:text-[#dfb16b]">
      {/* 1. Global Dark Theme Navbar */}
      <SriGajkesariNavbar theme="dark" />

      {/* 2. Main Sanctuary Container */}
      <main className="w-full pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-28 px-4 sm:px-8 md:px-10 lg:px-16 select-none">
        
        {/* ================= EDITORIAL HEADER ================= */}
        <div className="max-w-[1400px] mx-auto mb-10 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.26em] font-semibold text-[#9f732e]">
              Visit Us
            </span>
          </div>

          <p className="text-sm sm:text-base font-medium tracking-tight text-[#491239]/80 mb-2.5 sm:mb-3">
            Experience Sri Gajkesari.
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#491239] leading-[1.08] mb-4 sm:mb-5">
            Private Viewing. <br />
            <span className="text-[#dfb16b] font-normal">Personal Consultation.</span>
          </h1>

          <div className="space-y-3 text-sm sm:text-base lg:text-lg text-[#491239]/80 font-normal tracking-tight leading-relaxed max-w-3xl">
            <p>
              Discover exquisite jewellery, traditional artistry and
              personalised service at our Malleshwaram showroom.
            </p>
            <p>
              Whether choosing your wedding jewellery, finding a special gift or
              exploring a custom creation, we look forward to welcoming you.
            </p>
          </div>
        </div>

        {/* ================= 2-COLUMN ROYAL PLUM & GOLD BENTO GRID ================= */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Architectural Flagship Portal (5 cols) */}
          <div className="lg:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#26071c] border border-[#dfb16b]/35 shadow-[0_20px_50px_-15px_rgba(73,18,57,0.22)] min-h-[380px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-full group">
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/store-contact.webp"
              alt="Sri Gajkesari Jewellers Showroom"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#26071c]/85 via-[#26071c]/20 to-transparent pointer-events-none" />

            {/* Bottom Royal Plum & Gold Card Plaque */}
            <div className="absolute bottom-4 inset-x-4 sm:bottom-8 sm:inset-x-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#491239]/95 backdrop-blur-md border border-[#dfb16b]/35 shadow-xl space-y-3">
              <div>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-medium text-[#dfb16b] mb-1">
                  Flagship Showroom
                </p>
                <h3 className="text-sm sm:text-lg font-semibold tracking-tight text-white">
                  Sri Gajkesari Jewellers
                </h3>
                <p className="text-xs text-[#f5e6cc]/85 font-normal tracking-tight mt-0.5">
                  Margosa Road, Malleshwaram, Bengaluru
                </p>
              </div>

              <div className="pt-3 border-t border-[#dfb16b]/20 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[#f5e6cc]/75 font-normal text-[11px] tracking-tight">
                  Daily 10:30 AM – 8:30 PM &bull; Valet
                </span>
                <a
                  href="tel:+919535125553"
                  className="inline-flex items-center gap-1.5 text-xs text-[#dfb16b] font-medium tracking-tight hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>+91 95351 25553</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Warm Ivory & Gold Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#dfb16b]/35 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-14 shadow-[0_20px_50px_-15px_rgba(73,18,57,0.06)] flex flex-col justify-between">
            <div>
              <div className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-[#dfb16b]/25 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#491239]">
                  Request a Private Consultation
                </h2>
              </div>

              {isSubmitted ? (
                <div className="py-14 sm:py-20 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#491239] text-[#dfb16b] flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#491239]">
                    Consultation Reserved
                  </h3>
                  <p className="text-xs sm:text-sm text-[#491239]/80 max-w-sm mx-auto font-normal leading-relaxed">
                    Thank you. Our concierge will contact you via WhatsApp / Phone shortly
                    to confirm your preferred time and personal stylist.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs text-[#491239] font-medium tracking-tight mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Radhika Sharma"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-[#FAF8F5] border border-[#dfb16b]/35 rounded-xl sm:rounded-2xl px-4 py-3 text-base sm:text-sm text-[#491239] placeholder:text-[#491239]/40 focus:outline-none focus:border-[#491239] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#491239] font-medium tracking-tight mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#FAF8F5] border border-[#dfb16b]/35 rounded-xl sm:rounded-2xl px-4 py-3 text-base sm:text-sm text-[#491239] placeholder:text-[#491239]/40 focus:outline-none focus:border-[#491239] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs text-[#491239] font-medium tracking-tight mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="radhika@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#FAF8F5] border border-[#dfb16b]/35 rounded-xl sm:rounded-2xl px-4 py-3 text-base sm:text-sm text-[#491239] placeholder:text-[#491239]/40 focus:outline-none focus:border-[#491239] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#491239] font-medium tracking-tight mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full min-h-[46px] bg-[#FAF8F5] border border-[#dfb16b]/35 rounded-xl sm:rounded-2xl px-4 py-3 text-base sm:text-sm text-[#491239] focus:outline-none focus:border-[#491239] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Format Pills */}
                  <div>
                    <label className="block text-xs text-[#491239] font-medium tracking-tight mb-2.5">
                      Session Format
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {appointmentTypes.map((type) => {
                        const isSelected = formData.appointmentType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() =>
                              setFormData({ ...formData, appointmentType: type })
                            }
                            className={`px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-tight transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-[#491239] text-[#dfb16b] border border-[#dfb16b]/40 shadow-xs"
                                : "bg-[#FAF8F5] text-[#491239]/85 border border-[#dfb16b]/35 hover:border-[#491239]"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Collection Interest Pills */}
                  <div>
                    <label className="block text-xs text-[#491239] font-medium tracking-tight mb-2.5">
                      Pieces of Focus
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {collectionsList.map((col) => {
                        const isSelected = formData.collection === col;
                        return (
                          <button
                            type="button"
                            key={col}
                            onClick={() =>
                              setFormData({ ...formData, collection: col })
                            }
                            className={`px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-tight transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-[#491239] text-[#dfb16b] border border-[#dfb16b]/40 shadow-xs"
                                : "bg-[#FAF8F5] text-[#491239]/85 border border-[#dfb16b]/35 hover:border-[#491239]"
                            }`}
                          >
                            {col}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Requirements Note */}
                  <div>
                    <label className="block text-xs text-[#491239] font-medium tracking-tight mb-2">
                      Custom Vision &amp; Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Bridal dates, family heirloom exchange, specific carat specifications..."
                      value={formData.requirements}
                      onChange={(e) =>
                        setFormData({ ...formData, requirements: e.target.value })
                      }
                      className="w-full bg-[#FAF8F5] border border-[#dfb16b]/35 rounded-xl sm:rounded-2xl px-4 py-3 text-base sm:text-sm text-[#491239] placeholder:text-[#491239]/40 focus:outline-none focus:border-[#491239] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#491239] hover:bg-[#320a26] text-white border border-[#dfb16b]/30 text-xs sm:text-sm font-medium tracking-wide rounded-full transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
                    >
                      Request a Private Consultation
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ================= 3. LOCATION & SEAMLESS MAP ================= */}
        <section className="max-w-[1400px] mx-auto mt-12 sm:mt-20 lg:mt-24 pt-10 sm:pt-14 border-t border-[#dfb16b]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Showroom Details */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#9f732e] mb-2">
                  Address
                </p>
               
                <p className="text-sm sm:text-base text-[#491239]/80 font-normal leading-relaxed">
                  Positioned between 16th &amp; 17th Cross along Margosa Road. Valet parking
                  and dedicated personal viewing suites available for bridal parties.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-4 border-t border-[#dfb16b]/25 text-xs sm:text-sm">
                <div>
                  <p className="font-semibold text-[#491239] mb-1">Viewing Hours</p>
                  <p className="text-[#491239]/75 font-normal">Monday – Sunday</p>
                  <p className="text-[#9f732e] font-semibold">10:30 AM – 8:30 PM</p>
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-[#491239] mb-1">Direct Concierge</p>
                  <p className="text-[#491239] font-medium">+91 95351 25553</p>
                  <a
                    href="mailto:project@srigajkesari.com"
                    className="text-[#9f732e] hover:text-[#dfb16b] transition-colors break-all sm:break-normal"
                  >
                    project@srigajkesari.com
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Map Frame */}
            <div className="lg:col-span-7 relative w-full h-[280px] sm:h-[360px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#dfb16b]/35 shadow-[0_18px_40px_-14px_rgba(73,18,57,0.12)] bg-[#FAF8F5] group">
              <iframe
                title="Sri Gajkesari Jewellers Location"
                src="https://maps.google.com/maps?cid=11554011192802922623&hl=en&gl=IN&t=m&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.9] contrast-[1.02] group-hover:saturate-100 transition-all duration-500"
              />
              <a
                href="https://maps.google.com/?cid=11554011192802922623"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 bg-[#491239] hover:bg-[#320a26] text-[#dfb16b] border border-[#dfb16b]/40 text-[11px] sm:text-xs font-medium tracking-tight px-3.5 sm:px-4 py-2 flex items-center gap-1.5 shadow-md rounded-full transition-all active:scale-95"
              >
                <span>Navigate map</span>
                <Compass className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}