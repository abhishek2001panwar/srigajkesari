"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/story" },
  { label: "Archival Collections", href: "/collection" },
  { label: "Malleshwaram Atelier", href: "/contact" },
];

const collectionLinks = [
  { label: "Rajasi • Uncut Jadau", href: "/collection#rajasi" },
  { label: "Suvarna • KGF Gold", href: "/collection#suvarna" },
  { label: "Devatri • Temple Nakshi", href: "/collection#devatri" },
  { label: "Niharika • Solitaires", href: "/collection#niharika" },
  { label: "Ratnavali • Pearls", href: "/collection#ratnavali" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/srigajkesarijewellers/",
    icon: (
      <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.6]" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@SriGajKesari-h8",
    icon: (
      <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.6]" viewBox="0 0 24 24">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594131585995",
    icon: (
      <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.6]" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#FAF8F5] text-stone-800 border-t border-[#EAE4DC] select-none overflow-hidden">
      
      {/* ================= 1. REFINED CONCIERGE STRIP ================= */}
      <div className="border-b border-[#EAE4DC] bg-white/60">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <span className="text-[9.5px] uppercase tracking-[0.38em] text-[#8C6D37] font-semibold inline-flex items-center gap-2">
             
              The Malleshwaram Flagship
            </span>
            <p className="font-1 text-base sm:text-lg text-stone-900 tracking-wide font-normal">
              Private Jewellery Consultations &amp; Bespoke Karigari
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#4C1137] hover:bg-[#340b25] text-white text-[9.5px] uppercase tracking-[0.26em] font-medium transition-all duration-300 rounded-none shadow-2xs group active:scale-95"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ================= 2. MAIN EDITORIAL MATRIX ================= */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-[#EAE4DC]">
          
          {/* Brand Presentation (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <img
                src="https://srigajkesari.com/wp-content/uploads/2026/09/gj-logo.svg"
                alt="Sri Gajkesari Jewellers"
                className="h-16 sm:h-20 lg:h-22 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </Link>

            <p className="font-2 text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed max-w-sm tracking-wide">
              Rooted in unbroken purity. Hand-carving sacred temple motifs, setting
              uncut Kundan-Polki, and shaping heirloom gold with deliberate human devotion.
            </p>

            {/* Hallmarking Trust Badge & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#EAE4DC] text-stone-700">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4C1137]" />
                <span className="font-2 text-[9.5px] uppercase tracking-[0.2em] font-medium text-stone-700">
                  100% BIS Hallmarked
                </span>
              </div>

              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 bg-white border border-[#EAE4DC] flex items-center justify-center text-stone-600 hover:text-white hover:bg-[#4C1137] hover:border-[#4C1137] transition-all duration-300 rounded-none"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#4C1137] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-3 font-2 text-[12px] text-stone-600">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#4C1137] transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#4C1137] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections Vault (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#4C1137] font-semibold block">
              The Vault
            </span>
            <ul className="space-y-3 font-2 text-[12px] text-stone-600">
              {collectionLinks.map((col) => (
                <li key={col.label}>
                  <Link
                    href={col.href}
                    className="hover:text-[#4C1137] transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#4C1137] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {col.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Flagship Atelier Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#4C1137] font-semibold block">
              Flagship Atelier
            </span>

            <div className="space-y-3.5 font-2 text-[12px] text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#4C1137] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">
                  #249, Margosa Rd, Between 16th &amp; 17th Cross, Malleshwaram, Bengaluru 560003
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#4C1137] shrink-0" />
                <a
                  href="tel:+919535125553"
                  className="hover:text-[#4C1137] font-medium transition-colors"
                >
                  +91 95351 25553
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#4C1137] shrink-0" />
                <a
                  href="mailto:support@srigajakesari.com"
                  className="hover:text-[#4C1137] transition-colors"
                >
                  support@srigajakesari.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 3. LEGAL & HERITAGE SUB-FOOTER ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-2 text-[11px] text-stone-500">
          <span>&copy; 2026 Sri Gajkesari Jewellers. All rights reserved.</span>
          <div className="flex items-center gap-3 uppercase tracking-[0.22em] text-[9.5px] text-stone-500">
            <span>Bengaluru Lineage</span>
            <span className="text-stone-300">&bull;</span>
            <span>Ancestral Karigari</span>
          </div>
        </div>
      </div>

      {/* ================= 4. GRAND ARCHITECTURAL WATERMARK ================= */}
      <div className="w-full overflow-hidden pointer-events-none select-none flex justify-center pb-2">
        <span className="font-1 text-[13vw] uppercase tracking-[0.24em] font-normal text-[#4C1137]/[0.035] leading-none">
          GAJKESARI
        </span>
      </div>

    </footer>
  );
}