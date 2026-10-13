"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

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
      <svg
        className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594131585995",
    icon: (
      <svg
        className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#FAF8F5] text-stone-800 border-t border-[#EAE4DC] select-none overflow-hidden">
      {/* 1. Subtle Consultation Banner */}
      <div className="border-b border-[#EAE4DC]/80 bg-[#F6F1E9]/50">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#4C1137] font-semibold block mb-0.5">
              The Flagship Experience
            </span>
            <p className="font-1 text-base sm:text-lg text-stone-900 tracking-wide">
              Private Jewellery Consultations in Malleshwaram
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4C1137] hover:bg-[#340b25] text-white text-[10px] uppercase tracking-[0.22em] font-medium transition-all shadow-xs group cursor-pointer active:scale-95"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. Main Editorial Footer Matrix */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-14 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#EAE4DC]/80">
          
          {/* Brand Presentation (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <img
                src="https://srigajkesari.com/wp-content/uploads/2026/09/gj-logo.svg"
                alt="Sri Gajkesari Jewellers"
                className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>

            <p className="font-2 text-xs sm:text-[13px] text-stone-500 font-light leading-relaxed max-w-sm tracking-wide">
              Rooted in generations of unbroken trust. Hand-carving sacred temple
              motifs, setting uncut Polki, and shaping heirloom gold with deliberate devotion.
            </p>

            {/* Hallmarking Trust Badge & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#EAE4DC] text-stone-700 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4C1137]" />
                <span className="font-3 text-[9px] uppercase tracking-[0.18em] font-medium">
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
                    className="w-8 h-8 rounded-full bg-white border border-[#EAE4DC] flex items-center justify-center text-[#4C1137] hover:bg-[#4C1137] hover:text-white hover:border-[#4C1137] transition-all duration-300 shadow-xs"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#4C1137] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 font-2 text-xs text-stone-600">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#4C1137] transition-colors inline-block hover:translate-x-0.5 transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vault (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#4C1137] font-semibold block">
              The Vault
            </span>
            <ul className="space-y-2.5 font-2 text-xs text-stone-600">
              {collectionLinks.map((col) => (
                <li key={col.label}>
                  <Link
                    href={col.href}
                    className="hover:text-[#4C1137] transition-colors inline-block hover:translate-x-0.5 transition-transform"
                  >
                    {col.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Flagship Atelier (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#4C1137] font-semibold block">
              Boutique
            </span>
            
            <div className="space-y-2.5 font-2 text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4C1137] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">
                  #249, Margosa Rd, Between 16th &amp; 17th Cross, Malleshwaram
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#4C1137] shrink-0" />
                <a
                  href="tel:+919535125553"
                  className="hover:text-[#4C1137] font-medium transition-colors"
                >
                  +91 95351 25553
                </a>
              </div>

              <div className="flex items-center gap-2">
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

        {/* 3. Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-2 text-[11px] text-stone-400">
          <span>&copy; 2026 Sri Gajkesari Jewellers. All rights reserved.</span>
          <div className="flex items-center gap-4 uppercase tracking-[0.18em] text-[9px] text-stone-400">
            <span>Bengaluru Heritage</span>
            <span>&bull;</span>
            <span>Ancestral Gold Karigari</span>
          </div>
        </div>
      </div>

      {/* 4. Compact & Readable Fading Brand Stamp */}
      <div className="w-full overflow-hidden pointer-events-none select-none flex justify-center pt-2 pb-6">
        <span
          className="font-1 text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.35em] sm:tracking-[0.45em] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#4C1137]/35 via-[#4C1137]/20 to-transparent leading-none"
        >
          Sri Gajkesari
        </span>
      </div>
    </footer>
  );
}