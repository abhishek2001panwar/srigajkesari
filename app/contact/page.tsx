"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Compass,
} from "lucide-react";
import SriGajkesariNavbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const appointmentTypes = [
  "Private Atelier Lounge",
  "Virtual Video Preview",
  "Bridal Trousseau Styling",
  "Bespoke / Custom Commission",
  "Heirloom Remodelling",
];

const collectionsList = [
  "Rajasi (Jadau & Polki)",
  "Suvarna (22K Gold)",
  "Devatri (Temple Nakshi)",
  "Ratnavali (Pearls & Emeralds)",
  "Niharika (Solitaires)",
  "Purusa (Men's Fine Jewellery)",
  "Kasu (Sacred Malai)",
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
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#4C1137] selection:text-white">
      {/* 1. Global Fixed Brand Navbar */}
      <div className="fixed top-0 inset-x-0 z-50 w-full bg-[#180410] border-b border-white/10 shadow-md">
        <SriGajkesariNavbar theme="dark" />
      </div>

      {/* 2. Main Contact Sanctuary */}
      <main className="w-full pt-32 sm:pt-36 lg:pt-52 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-14">
        {/* Editorial Top Heading */}
        <div className="max-w-[1400px] mx-auto mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[1px] bg-[#4C1137]/30" />
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#4C1137] font-semibold flex items-center gap-1.5">
             
              The Flagship Sanctuary
            </span>
            <span className="w-8 h-[1px] bg-[#4C1137]/30" />
          </div>

          <h1 className="font-1 text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] text-[#4C1137] leading-tight mb-3">
            Atelier Consultations
          </h1>

          <p className="font-2 text-stone-600 text-xs sm:text-[13px] md:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Reserve a dedicated session with our karigars and jewellery stylists.
            Experience our archival pieces in total privacy.
          </p>
        </div>

        {/* 50 / 50 Balanced Luxury Atelier Split */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ================= LEFT COLUMN: EDITORIAL SHOWCASE (5 COLS) ================= */}
          <div className="lg:col-span-5 relative w-full min-h-[460px] sm:min-h-[560px] lg:min-h-full rounded-md overflow-hidden border border-[#EAE4DC] shadow-sm bg-[#1a0413]">
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/store-contact.webp"
              alt="Sri Gajkesari Jewellers Boutique"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

            {/* Floating Glass Atelier Coordinates */}
            <div className="absolute bottom-6 inset-x-6 p-5 sm:p-6 bg-[#FAF8F5]/90 backdrop-blur-md rounded-md border border-white/60 shadow-xl space-y-4">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#4C1137] font-semibold block mb-0.5">
                  Private Salons
                </span>
                <p className="font-1 text-base sm:text-lg text-stone-900 leading-snug">
                  Sri Gajkesari Jewellers
                </p>
                <p className="font-2 text-xs text-stone-500 font-light mt-0.5">
                  Margosa Road, Malleshwaram, Bengaluru
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="font-light text-stone-500 text-[11px]">
                  Daily 10:30 AM – 8:30 PM
                </span>
                <a
                  href="tel:+919535125553"
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#4C1137] font-semibold hover:opacity-80 transition-opacity"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Atelier</span>
                </a>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SLEEK MINIMAL FORM (7 COLS) ================= */}
          <div className="lg:col-span-7 w-full bg-white border border-[#EAE4DC] rounded-md p-8 sm:p-12 lg:p-14 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-8 border-b border-[#EAE4DC] pb-5">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#4C1137] font-semibold block mb-1">
                  Private Viewing Request
                </span>
                <h2 className="font-1 text-2xl sm:text-3xl text-stone-900 leading-tight">
                  Schedule Your Consultation
                </h2>
              </div>

              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#4C1137]/10 text-[#4C1137] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="font-1 text-2xl text-stone-900">
                    Request Received with Discretion
                  </h3>
                  <p className="font-2 text-stone-500 text-xs sm:text-sm max-w-sm mx-auto font-light leading-relaxed">
                    Thank you. Our concierge will contact you via WhatsApp / Phone shortly
                    to confirm your preferred time slot.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#4C1137] font-semibold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Radhika Sharma"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs sm:text-sm py-2 text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#4C1137] font-semibold mb-1.5">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs sm:text-sm py-2 text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Date Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#4C1137] font-semibold mb-1.5">
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
                        className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs sm:text-sm py-2 text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#4C1137] font-semibold mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs sm:text-sm py-2 text-stone-800 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Interactive Sleek Appointment Type Chips */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#4C1137] font-semibold mb-2.5">
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
                            className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
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

                  {/* Interactive Collection Interest Chips */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#4C1137] font-semibold mb-2.5">
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
                            className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
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

                  {/* Requirements / Notes */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#4C1137] font-semibold mb-1.5">
                      Custom Vision &amp; Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Bridal dates, family heirloom exchange, specific gemstone requests..."
                      value={formData.requirements}
                      onChange={(e) =>
                        setFormData({ ...formData, requirements: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-stone-300 focus:border-[#4C1137] text-xs sm:text-sm py-2 text-stone-900 placeholder-stone-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#4C1137] hover:bg-[#340b25] text-white text-[10px] uppercase tracking-[0.28em] font-medium transition-all duration-300 shadow-sm hover:shadow-md rounded-md group cursor-pointer active:scale-95"
                    >
                      <span>Submit Appointment Request</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ================= 3. SLEEK LOCATION & MAP COORDINATES ================= */}
        <section className="max-w-[1400px] mx-auto mt-16 sm:mt-24 pt-12 border-t border-[#EAE4DC]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Minimal Boutique Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#4C1137] font-semibold block mb-1">
                  Atelier Address
                </span>
                <h3 className="font-1 text-2xl sm:text-3xl text-stone-900 leading-tight mb-2">
                  The Malleshwaram Flagship
                </h3>
                <p className="font-2 text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                  Positioned between 16th &amp; 17th Cross along Margosa Road. Valet parking
                  and dedicated private security available for bridal parties.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-200/70 font-2 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#4C1137] font-semibold block mb-0.5">
                    Visiting Hours
                  </span>
                  <p className="text-stone-600 font-light">Monday – Sunday</p>
                  <p className="text-stone-900 font-medium">10:30 AM – 8:30 PM</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#4C1137] font-semibold block mb-0.5">
                    Direct Concierge
                  </span>
                  <p className="text-stone-600 font-light">+91 95351 25553</p>
                  <p className="text-stone-500 font-light text-[11px]">support@srigajakesari.com</p>
                </div>
              </div>
            </div>

            {/* Seamless Embedded Map Box */}
            <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[380px] rounded-md overflow-hidden border border-[#EAE4DC] shadow-sm bg-[#F5EFE6] group">
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
                className="absolute top-3.5 right-3.5 bg-white/95 hover:bg-white text-[#4C1137] border border-stone-200 text-[9px] uppercase tracking-[0.2em] px-3.5 py-1.5 flex items-center gap-1.5 shadow-sm rounded-md transition-colors"
              >
                <span>Navigate</span>
                <Compass className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </section>

      </main>

      
    </div>
  );
}