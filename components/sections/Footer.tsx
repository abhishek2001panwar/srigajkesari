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
    <footer className="relative z-20 w-full bg-[#F5F5F7] text-[#86868B] text-[13px] sm:text-sm py-10 px-6 sm:px-10 lg:px-16 border-t border-black/10 select-none font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Text','SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <div className="max-w-[1280px] mx-auto">
        
        {/* ================= 1. BRAND LOGO (ENLARGED & ANCHORED LEFT) ================= */}
        <div className="pb-8 mb-8 border-b border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/" className="inline-block group">
            <img
              src="https://srigajkesari.com/wp-content/uploads/2026/09/gj-logo.svg"
              alt="Sri Gajkesari Jewellers"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-opacity duration-200 group-hover:opacity-75"
            />
          </Link>

          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[#86868B]">
            The Malleshwaram Flagship &bull; Bengaluru
          </h2>
        </div>

        {/* ================= 2. DIRECTORY COLUMNS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-black/10 leading-relaxed">
          
          {/* Column 1: Navigation */}
          <div>
            <h1 className="font-semibold text-[#1D1D1F] block mb-3 text-sm sm:text-[15px] tracking-tight">
              Navigation
            </h1>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#1D1D1F] transition-colors tracking-tight"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Collections Vault */}
          <div>
            <h1 className="font-semibold text-[#1D1D1F] block mb-3 text-sm sm:text-[15px] tracking-tight">
              Collections
            </h1>
            <ul className="space-y-2.5">
              {collectionLinks.map((col) => (
                <li key={col.label}>
                  <Link
                    href={col.href}
                    className="hover:text-[#1D1D1F] transition-colors tracking-tight"
                  >
                    {col.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Atelier Boutique (Apple SF Font & Larger Size) */}
          <div>
            <h1 className="font-semibold text-[#1D1D1F] block mb-3 text-sm sm:text-[15px] tracking-tight">
              Malleshwaram Flagship
            </h1>
            <p className="leading-relaxed mb-3 text-[13px] sm:text-sm text-[#86868B] tracking-tight">
              #249, Margosa Road, Between 16th &amp; 17th Cross, Malleshwaram, Bengaluru 560003
            </p>
            <p className="text-xs sm:text-[13px] text-[#86868B] tracking-tight">
              Viewing Hours: 10:30 AM – 8:30 PM
            </p>
          </div>

          {/* Column 4: Direct Atelier Contact */}
          <div>
            <h1 className="font-semibold text-[#1D1D1F] block mb-3 text-sm sm:text-[15px] tracking-tight">
              Connect
            </h1>
            <div className="space-y-2.5">
              <p>
                <a
                  href="tel:+919535125553"
                  className="hover:text-[#1D1D1F] transition-colors tracking-tight"
                >
                  +91 95351 25553
                </a>
              </p>
              <p>
                <a
                  href="mailto:support@srigajkesari.com"
                  className="hover:text-[#1D1D1F] transition-colors tracking-tight"
                >
                  support@srigajkesari.com
                </a>
              </p>
              <div className="flex items-center space-x-3 pt-2 text-xs sm:text-[13px]">
                <a
                  href="https://www.instagram.com/srigajkesarijewellers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  Instagram
                </a>
                <span>&bull;</span>
                <a
                  href="https://www.youtube.com/@SriGajKesari-h8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  YouTube
                </a>
                <span>&bull;</span>
                <a
                  href="https://www.facebook.com/profile.php?id=61594131585995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 3. COPYRIGHT & BOTTOM SPECS ================= */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] tracking-tight">
          <span>Copyright &copy; 2026 Sri Gajkesari Jewellers. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">
              Terms of Atelier
            </Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-[#1D1D1F] transition-colors">
              Valet &amp; Location
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}