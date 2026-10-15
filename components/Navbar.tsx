"use client";

import React, { useState } from "react";
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

export default function AppleNavbar({ theme = "light" }: AppleNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // light = transparent bg, white text, /logo.png
  // dark  = white bg, black text, earlier original SVG logo
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-20 sm:h-24 select-none transition-all duration-300 ${
        isDark
          ? "bg-white shadow-xs border-b border-black/10"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-8xl mx-auto h-full px-6 sm:px-10 lg:px-16 flex items-center justify-between transition-colors duration-300 ${
          isDark ? "text-black" : "text-white"
        }`}
      >
        {/* 1. Brand Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src={
              isDark
                ? "https://srigajkesari.com/wp-content/uploads/2026/09/gj-logo.svg"
                : "/logo.png"
            }
            alt="Sri Gajkesari Jewellers"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain rounded-sm transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* 2. Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 lg:gap-16">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors tracking-tight text-[15px] sm:text-base font-medium whitespace-nowrap ${
                isDark
                  ? "text-black/80 hover:text-black"
                  : "text-white/90 hover:text-white"
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
              isDark
                ? "border-black/70 text-black hover:bg-black hover:text-white"
                : "border-white/70 text-white hover:border-white hover:bg-white hover:text-black"
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
              isDark ? "text-black" : "text-white"
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
            isDark
              ? "bg-white/98 text-black"
              : "bg-black/95 text-white"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-2xl font-semibold tracking-tight border-b pb-4 ${
                isDark
                  ? "border-black/10 text-black hover:text-stone-600"
                  : "border-white/10 text-white hover:text-stone-300"
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
                isDark
                  ? "border-black bg-black text-white hover:bg-stone-800"
                  : "border-white text-white hover:bg-white hover:text-black"
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