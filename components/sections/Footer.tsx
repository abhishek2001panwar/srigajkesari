"use client";

import React from "react";
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/story" },
  { label: "Archival Collections", href: "/collection" },
  { label: "Malleshwaram Atelier", href: "/contact" },
];

const collectionLinks = [
  { label: "Rajasi Jadau", href: "/collection#rajasi" },
  { label: "Suvarna 916", href: "/collection#suvarna" },
  { label: "Devatri Nakshi", href: "/collection#devatri" },
  { label: "Niharika Solitaires", href: "/collection#niharika" },
  { label: "Ratnavali Pearls", href: "/collection#ratnavali" },
];

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-white text-[#491239]/80 text-[13px] sm:text-sm py-10 px-6 sm:px-10 lg:px-16 border-t border-[#dfb16b]/30 select-none">
      <div className="max-w-8xl mx-auto">
        
        {/* ================= 1. BRAND LOGO (EXACT NAVBAR DIMENSIONS) ================= */}
        <div className="pb-8 mb-8 border-b border-[#dfb16b]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/" className="flex items-center shrink-0 overflow-visible py-5">
            <img
              src="/logo.png"
              alt="Sri Gajkesari"
              className="h-24 sm:h-32 lg:h-32 w-auto max-w-none object-contain scale-125 sm:scale-150 origin-left transition-transform duration-300"
            />
          </Link>

          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[#9f732e]">
            The Malleshwaram  &bull; Bengaluru
          </h2>
        </div>

        {/* ================= 2. DIRECTORY COLUMNS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-[#dfb16b]/25 leading-relaxed">
          
          {/* Column 1: Navigation */}
          <div>
            <h1 className="font-semibold text-[#491239] block mb-3 text-sm sm:text-[15px] tracking-tight">
              Navigation
            </h1>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#9f732e] transition-colors tracking-tight"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Collections Vault */}
          <div>
            <h1 className="font-semibold text-[#491239] block mb-3 text-sm sm:text-[15px] tracking-tight">
              Collections
            </h1>
            <ul className="space-y-2.5">
              {collectionLinks.map((col) => (
                <li key={col.label}>
                  <Link
                    href={col.href}
                    className="hover:text-[#9f732e] transition-colors tracking-tight"
                  >
                    {col.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Atelier Boutique */}
          <div>
            <h1 className="font-semibold text-[#491239] block mb-3 text-sm sm:text-[15px] tracking-tight">
              Malleshwaram Flagship
            </h1>
            <p className="leading-relaxed mb-3 text-[13px] sm:text-sm text-[#491239]/80 tracking-tight">
              #249, Margosa Road, Between 16th &amp; 17th Cross, Malleshwaram, Bengaluru 560003
            </p>
            <p className="text-xs sm:text-[13px] text-[#9f732e] font-medium tracking-tight">
              Viewing Hours: 10:30 AM – 8:30 PM
            </p>
          </div>

          {/* Column 4: Direct Atelier Contact */}
          <div>
            <h1 className="font-semibold text-[#491239] block mb-3 text-sm sm:text-[15px] tracking-tight">
              Connect
            </h1>
            <div className="space-y-2.5">
              <p>
                <a
                  href="tel:+919535125553"
                  className="hover:text-[#9f732e] transition-colors tracking-tight"
                >
                  +91 95351 25553
                </a>
              </p>
              <p>
                <a
                  href="mailto:project@srigajkesari.com"
                  className="hover:text-[#9f732e] transition-colors tracking-tight"
                >
                  project@srigajkesari.com
                </a>
              </p>
              <div className="flex items-center space-x-3 pt-2 text-xs sm:text-[13px]">
                <a
                  href="https://www.instagram.com/srigajkesarijewellers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9f732e] transition-colors"
                >
                  Instagram
                </a>
                <span className="text-[#dfb16b]">&bull;</span>
                <a
                  href="https://www.youtube.com/@SriGajKesari-h8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9f732e] transition-colors"
                >
                  YouTube
                </a>
                <span className="text-[#dfb16b]">&bull;</span>
                <a
                  href="https://www.facebook.com/profile.php?id=61594131585995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9f732e] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 3. COPYRIGHT & BOTTOM SPECS ================= */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] tracking-tight text-[#491239]/70">
          <span>Copyright &copy; 2026 Sri Gajkesari Jewellers. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-[#9f732e] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#dfb16b]">|</span>
            <Link href="/" className="hover:text-[#9f732e] transition-colors">
              Terms of Atelier
            </Link>
            <span className="text-[#dfb16b]">|</span>
            <Link href="/contact" className="hover:text-[#9f732e] transition-colors">
              Valet &amp; Location
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}