"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Phone, Mail, Compass } from "lucide-react";
import SriGajkesariNavbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const appointmentTypes = [
  "Private Atelier Lounge",
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
    appointmentType: "Private Atelier Lounge",
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
        appointmentType: "Private Atelier Lounge",
        collection: "Rajasi (Jadau & Polki)",
        preferredDate: "",
        requirements: "",
      });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#4C1137] selection:text-white ">
      {/* 1. Global Dark Theme Navbar */}
      <SriGajkesariNavbar theme="dark" />

      {/* 2. Main Apple-Style Sanctuary Container */}
      <main className="w-full pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 select-none">
        
        {/* ================= EDITORIAL HEADER ================= */}
        <div className="max-w-[1400px] mx-auto mb-14 sm:mb-20">
          <p className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#4C1137] mb-3">
            Flagship Sanctuary &bull; Malleshwaram
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#4C1137] leading-[1.05] mb-5">
            Private consultations. <br />
            <span className="text-stone-500 font-normal">Dedicated salon.</span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-light tracking-tight leading-relaxed max-w-2xl">
            Reserve a quiet personal session with our karigars and jewellery stylists.
            Experience our pure 916 gold and archival Polki collections in complete privacy.
          </p>
        </div>

        {/* ================= 2-COLUMN APPLE BENTO GRID ================= */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Architectural Flagship Portal (5 cols) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-stone-100 border border-[#EAE4DC] shadow-sm min-h-[460px] sm:min-h-[560px] lg:min-h-full group">
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/store-contact.webp"
              alt="Sri Gajkesari Jewellers Boutique"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

            {/* Bottom Glass Card Plaque */}
            <div className="absolute bottom-6 inset-x-6 sm:bottom-8 sm:inset-x-8 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg space-y-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#4C1137] mb-1">
                  Private Salon
                </p>
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-stone-900">
                  Sri Gajkesari Jewellers
                </h3>
                <p className="text-xs text-stone-600 font-light tracking-tight mt-0.5">
                  Margosa Road, Malleshwaram, Bengaluru
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-light text-[11px] tracking-tight">
                  Daily 10:30 AM – 8:30 PM &bull; Valet
                </span>
                <a
                  href="tel:+919535125553"
                  className="inline-flex items-center gap-1.5 text-xs text-[#4C1137] font-medium tracking-tight hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 95351 25553</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Frosted Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#EAE4DC] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-8 pb-6 border-b border-stone-200/70 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#4C1137] mb-1">
                    Atelier Access
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                    Schedule Your Session
                  </h2>
                </div>
                <span className="text-xs text-stone-400 font-light hidden sm:inline-block">
                  Direct Response
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#4C1137]/10 text-[#4C1137] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-stone-900">
                    Consultation Reserved
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto font-light leading-relaxed">
                    Thank you. Our concierge will contact you via WhatsApp / Phone shortly
                    to confirm your preferred time and private stylist.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-stone-500 font-medium tracking-tight mb-2">
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
                        className="w-full bg-[#FAF8F5] border border-stone-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#4C1137] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-stone-500 font-medium tracking-tight mb-2">
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
                        className="w-full bg-[#FAF8F5] border border-stone-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#4C1137] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-stone-500 font-medium tracking-tight mb-2">
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
                        className="w-full bg-[#FAF8F5] border border-stone-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#4C1137] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-stone-500 font-medium tracking-tight mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full bg-[#FAF8F5] border border-stone-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#4C1137] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Format Pills */}
                  <div>
                    <label className="block text-xs text-stone-500 font-medium tracking-tight mb-2.5">
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
                            className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-[#4C1137] text-white shadow-xs"
                                : "bg-[#FAF8F5] text-stone-600 border border-stone-200 hover:border-stone-400"
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
                    <label className="block text-xs text-stone-500 font-medium tracking-tight mb-2.5">
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
                            className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-[#4C1137] text-white shadow-xs"
                                : "bg-[#FAF8F5] text-stone-600 border border-stone-200 hover:border-stone-400"
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
                    <label className="block text-xs text-stone-500 font-medium tracking-tight mb-2">
                      Custom Vision &amp; Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Bridal dates, family heirloom exchange, specific carat specifications..."
                      value={formData.requirements}
                      onChange={(e) =>
                        setFormData({ ...formData, requirements: e.target.value })
                      }
                      className="w-full bg-[#FAF8F5] border border-stone-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#4C1137] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-[#4C1137] hover:bg-[#340b25] text-white text-xs sm:text-sm font-medium tracking-tight rounded-full transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                    >
                      Confirm Appointment Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ================= 3. LOCATION & SEAMLESS MAP ================= */}
        <section className="max-w-[1400px] mx-auto mt-16 sm:mt-24 pt-14 border-t border-[#EAE4DC]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Atelier Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#4C1137] mb-2">
                  Atelier Address
                </p>
                <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-stone-900 mb-3">
                  The Malleshwaram Flagship
                </h3>
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                  Positioned between 16th &amp; 17th Cross along Margosa Road. Valet parking
                  and dedicated private viewing salons available for bridal parties.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200/80 text-xs sm:text-sm">
                <div>
                  <p className="font-semibold text-stone-900 mb-1">Viewing Hours</p>
                  <p className="text-stone-600 font-light">Monday – Sunday</p>
                  <p className="text-[#4C1137] font-medium">10:30 AM – 8:30 PM</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">Direct Concierge</p>
                  <p className="text-stone-600 font-light">+91 95351 25553</p>
                  <p className="text-stone-500 font-light text-xs">support@srigajakesari.com</p>
                </div>
              </div>
            </div>

            {/* Embedded Apple-Style Map Frame */}
            <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-[#EAE4DC] shadow-sm bg-stone-100 group">
              <iframe
                title="Sri Gajkesari Jewellers Location"
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
                className="absolute top-4 right-4 bg-white/95 hover:bg-white text-stone-900 text-xs font-medium tracking-tight px-4 py-2 flex items-center gap-1.5 shadow-sm rounded-full backdrop-blur-md transition-all active:scale-95"
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