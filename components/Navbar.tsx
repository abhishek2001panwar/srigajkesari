"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MapPin, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/story" },
  { label: "Collections", href: "/collection" },
  { label: "Contact Us", href: "/contact" },
];

export default function SriGajkesariNavbar() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.9;
      setIsVisible(window.scrollY <= heroThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out font-body ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#4C1137] text-amber-100/90 text-[11px] px-6 py-2 border-b border-[#4C1137]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-normal tracking-wider">
          <a
            href="tel:+919535125553"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 stroke-[1.8]" />
            <span>+91 95351 25553</span>
          </a>

          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-center hidden sm:block">
            Crafted for Every Celebration &bull; Malleshwaram
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MapPin className="w-3 h-3 stroke-[1.8]" />
            <span>Bengaluru</span>
          </a>
        </div>
      </div>

      {/* 2. Main Centered Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-stone-200/80">
        {/* Logo Section */}
        <div className="max-w-7xl mx-auto px-6 pt-5 pb-4">
          <div className="relative flex items-center justify-between md:justify-center">
            {/* Enlarged Logo */}
            <Link href="/" className="inline-block mx-auto md:mx-0">
              <img
                src="https://srigajkesari.com/wp-content/uploads/2026/09/gj-logo.svg"
                alt="Sri Gajkesari Jewellers"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
              />
            </Link>

            {/* Mobile Toggle */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden absolute right-0 text-[#4C1137] p-1 hover:opacity-75 transition-opacity"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[1.8]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[1.8]" />
              )}
            </button>
          </div>
        </div>

        {/* 3. Full-Width Border Line + Desktop Navigation Links */}
        <div className="hidden md:block w-full border-t border-stone-200/80">
          <nav
            aria-label="Primary navigation"
            className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-10 lg:gap-14 py-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.28em] text-stone-600 hover:text-[#4C1137] font-medium transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#4C1137] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* 4. Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200/80 bg-white px-6 py-5 text-center">
            <nav className="flex flex-col space-y-3.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[11px] uppercase tracking-[0.24em] text-stone-700 hover:text-[#4C1137] font-medium py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 pt-4 border-t border-stone-100 text-[10px] text-stone-400 tracking-wider">
              Malleshwaram, Bengaluru &bull; +91 95351 25553
            </div>
          </div>
        )}
      </div>
    </header>
  );
}