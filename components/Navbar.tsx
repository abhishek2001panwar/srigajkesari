"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface AppleNavbarProps {
  theme?: "light" | "dark";
}

const links = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/story" },
  { label: "Collections", href: "/collection" },
  { label: "Contact Us", href: "/contact" },
];

// Parses rgb/rgba strings and checks perceptual luminance to detect dark sections behind the navbar
function isDarkBackgroundColor(bgColor: string): boolean | null {
  const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return null;
  const alpha = match[4] !== undefined ? parseFloat(match[4]) : 1;
  if (alpha < 0.15) return null; // Transparent layer, keep checking beneath
  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.45;
}

export default function AppleNavbar({ theme = "light" }: AppleNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOverDarkSurface, setIsOverDarkSurface] = useState(theme === "light");
  const [isHidden, setIsHidden] = useState(false);

  const detectSurfaceBehindNavbar = useCallback(() => {
    if (theme === "dark") {
      setIsHidden(window.scrollY > 40 && !mobileMenuOpen);
    } else {
      setIsHidden(false);
    }

    // Sample the page background directly behind the navbar links (y = 64px)
    const sampleY = 64;
    const samplePoints = [window.innerWidth * 0.5, window.innerWidth * 0.25];

    for (const x of samplePoints) {
      const elements = document.elementsFromPoint(x, sampleY);
      for (const el of elements) {
        if (el.closest("nav")) continue;
        // Check explicit dark section attribute if provided
        if (el.closest("[data-nav-theme='dark']")) {
          setIsOverDarkSurface(true);
          return;
        }
        if (el.closest("[data-nav-theme='light']")) {
          setIsOverDarkSurface(false);
          return;
        }

        const bg = window.getComputedStyle(el).backgroundColor;
        const darkDetected = isDarkBackgroundColor(bg);
        if (darkDetected !== null) {
          setIsOverDarkSurface(darkDetected);
          return;
        }
      }
    }

    // Fallback when at the top of a hero image
    setIsOverDarkSurface(theme === "light" && window.scrollY < window.innerHeight * 0.8);
  }, [theme, mobileMenuOpen]);

  useEffect(() => {
    detectSurfaceBehindNavbar();
    window.addEventListener("scroll", detectSurfaceBehindNavbar, { passive: true });
    window.addEventListener("resize", detectSurfaceBehindNavbar, { passive: true });
    return () => {
      window.removeEventListener("scroll", detectSurfaceBehindNavbar);
      window.removeEventListener("resize", detectSurfaceBehindNavbar);
    };
  }, [detectSurfaceBehindNavbar]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-32 sm:h-32 select-none transition-all duration-500 ease-out bg-transparent ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* Purely Transparent Progressive Blur (Zero Solid Box) */}
      <div
        aria-hidden="true"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)",
        }}
        className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-transparent backdrop-blur-md"
      />

      <div
        className={`relative z-10 max-w-9xl mx-auto h-full px-6 sm:px-10 lg:px-10 flex items-center justify-between transition-colors duration-300 ${
          isOverDarkSurface ? "text-white" : "text-[#491239]"
        }`}
      >
        {/* 1. Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 overflow-visible py-5">
          <img
            src="/logo.png"
            alt="Sri Gajkesari"
            className="h-24 sm:h-28 lg:h-32 w-auto max-w-none object-contain scale-125 sm:scale-150 origin-left transition-transform duration-300"
          />
        </Link>

        {/* 2. Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 lg:gap-16">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-300 tracking-tight text-[15px] sm:text-base font-medium whitespace-nowrap ${
                isOverDarkSurface
                  ? "text-white hover:text-[#dfb16b] drop-shadow-[0_1px_10px_rgba(0,0,0,0.65)]"
                  : "text-[#491239] hover:text-[#9f732e]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* 3. Action Pill */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            href="https://wa.me/919535125553?text=Hello%20Sri%20Gajkesari%2C%20I%20would%20like%20to%20request%20a%20private%20atelier%20consultation."
            className={`px-7 py-2.5 border text-xs sm:text-sm font-medium tracking-tight rounded-full transition-all duration-300 active:scale-95 whitespace-nowrap ${
              isOverDarkSurface
                ? "border-[#dfb16b]/85 text-[#f5e6cc] hover:border-[#dfb16b] hover:bg-[#dfb16b] hover:text-[#24061a] drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]"
                : "border-[#491239]/75 text-[#491239] hover:bg-[#491239] hover:text-[#dfb16b]"
            }`}
          >
            Consultation
          </Link>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-opacity opacity-90 hover:opacity-100 ${
              isOverDarkSurface ? "text-white" : "text-[#491239]"
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 stroke-[1.8]" />
            ) : (
              <Menu className="w-7 h-7 stroke-[1.8]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden fixed inset-x-0 top-20 sm:top-24 h-screen px-8 pt-8 space-y-6 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 ${
            isOverDarkSurface
              ? "bg-[#1a0413]/95 text-white"
              : "bg-white/95 text-[#491239]"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-2xl font-semibold tracking-tight border-b pb-4 ${
                isOverDarkSurface
                  ? "border-white/15 text-white hover:text-[#dfb16b]"
                  : "border-[#491239]/15 text-[#491239] hover:text-[#9f732e]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-6">
            <Link
              href="https://wa.me/919535125553?text=Hello%20Sri%20Gajkesari%2C%20I%20would%20like%20to%20request%20a%20private%20atelier%20consultation."
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-center py-4 border text-sm font-medium tracking-wide rounded-full active:scale-95 transition-all ${
                isOverDarkSurface
                  ? "border-[#dfb16b] bg-[#dfb16b] text-[#24061a] hover:bg-white"
                  : "border-[#491239] bg-[#491239] text-[#dfb16b] hover:bg-[#320a26]"
              }`}
            >
              Book Private Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}