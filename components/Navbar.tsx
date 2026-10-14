"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface SriGajkesariNavbarProps {
  /**
   * Theme mode:
   * - "light": 100% Transparent, no borders, white logo (/logo.png), white text.
   * - "dark": Solid clean white background, subtle border, original burgundy logo, dark text.
   */
  theme?: "light" | "dark";
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/story" },
  { label: "Collections", href: "/collection" },
  { label: "Contact Us", href: "/contact" },
];

export default function SriGajkesariNavbar({ theme = "light" }: SriGajkesariNavbarProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 70);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = theme === "light";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out font-body ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isLight
          ? "bg-transparent border-none"
          : "bg-white border-b border-[#D4D4D4]"
      }`}
    >
      {/* Centered Width Container */}
      <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 py-4 sm:py-5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="inline-flex items-center group">
          <img
            src={
              isLight
                ? "/logo.png"
                : "https://srigajkesari.com/wp-content/uploads/2026/09/gj-logo.svg"
            }
            alt="Sri Gajkesari Jewellers"
            className="h-12 sm:h-14 md:h-16 lg:h-[76px] w-auto object-contain transition-opacity duration-300 hover:opacity-90"
          />
        </Link>

        {/* Desktop Navigation Links + Action */}
        <div className="hidden md:flex items-center gap-8 lg:gap-11">
          <nav aria-label="Primary navigation" className="flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[9.5px] lg:text-[10px] uppercase tracking-[0.3em] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                  isLight
                    ? "text-white/90 hover:text-white after:bg-white"
                    : "text-stone-700 hover:text-[#4C1137] after:bg-[#4C1137]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Heritage Action Button */}
         {/* Interactive Luxury Concierge CTA (Direct Action with Text Roll on Hover) */}
<a
  href="https://wa.me/919535125553?text=Hello%20Sri%20Gajkesari%2C%20I%20would%20like%20to%20request%20a%20private%20atelier%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  className={`group relative inline-flex items-center overflow-hidden px-5 py-2.5 text-[9px] uppercase tracking-[0.28em] font-medium transition-all duration-300 rounded-none active:scale-95 ${
    isLight
      ? "border border-white/70 text-white hover:bg-white hover:text-stone-900"
      : "border border-[#4C1137] text-[#4C1137] hover:bg-[#4C1137] hover:text-white"
  }`}
>
  {/* Rolling text stage */}
  <div className="relative h-[13px] overflow-hidden flex flex-col justify-center">
    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
      Private Consultation
    </span>
    <span className="absolute top-full left-0 block font-semibold transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
      WhatsApp 
    </span>
  </div>

  <ArrowUpRight className="w-3 h-3 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors rounded-none ${
            isLight
              ? "text-white hover:bg-white/10"
              : "text-[#4C1137] border border-[#D4D4D4] hover:bg-stone-50"
          }`}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 stroke-[1.8]" />
          ) : (
            <Menu className="w-5 h-5 stroke-[1.8]" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 text-center transition-colors ${
            isLight
              ? "bg-black/90 backdrop-blur-md text-white"
              : "bg-white border-t border-[#D4D4D4] text-stone-900"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-[10px] uppercase tracking-[0.28em] font-medium py-1 transition-colors ${
                  isLight
                    ? "text-stone-200 hover:text-white"
                    : "text-stone-700 hover:text-[#4C1137]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-5 mt-5 border-t border-stone-200/20 flex flex-col items-center gap-3">
            <Link
              href="/story"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full py-2.5 text-[9.5px] uppercase tracking-[0.26em] font-medium rounded-none ${
                isLight
                  ? "bg-white text-stone-900"
                  : "bg-[#4C1137] text-white"
              }`}
            >
              The Atelier Heritage
            </Link>
            <span
              className={`text-[9.5px] tracking-wider font-mono ${
                isLight ? "text-stone-300/80" : "text-stone-500"
              }`}
            >
              Malleshwaram, Bengaluru &bull; +91 95351 25553
            </span>
          </div>
        </div>
      )}
    </header>
  );
}