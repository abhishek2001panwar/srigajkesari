"use client";

import React from "react";

interface CertificationItem {
  id: string;
  title: string;
  subtitle: string;
  logo: string;
  alt: string;
}

const certificationsData: CertificationItem[] = [
  {
    id: "gia",
    title: "GIA",
    subtitle: "Certified",
    logo: "/guide/gia1.png",
    alt: "GIA Certified Diamonds",
  },
  {
    id: "igi",
    title: "IGI",
    subtitle: "Certified",
    logo: "/guide/igi.png",
    alt: "IGI Certified Solitaires",
  },
  {
    id: "bis",
    title: "BIS",
    subtitle: "Hallmark Certified",
    logo: "/guide/bis.png",
    alt: "BIS 916 Hallmarked Gold",
  },
  {
    id: "platinum",
    title: "Platinum",
    subtitle: "PGI Assured",
    logo: "/guide/platinum.png",
    alt: "Platinum Guild Certified",
  },
  {
    id: "silver",
    title: "Silver Hallmark",
    subtitle: "Certificate",
    logo: "/guide/silver.png",
    alt: "BIS Hallmarked Pure Silver",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="relative z-20 w-full bg-[#FFFFFF] text-[#491239] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-y border-[#dfb16b]/25 select-none overflow-hidden"
    >
      <div className="relative z-10 max-w-[1320px] mx-auto">
        
        {/* ================= 1. TOP HEADING ONLY ================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#491239] leading-[1.12]">
            What guides every <span className="text-[#dfb16b] font-normal">piece we make.</span>
          </h2>
        </div>

        {/* ================= 2. 5-CARD HALLMARK GRID ON PURE WHITE ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {certificationsData.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative flex flex-col items-center justify-between text-center rounded-2xl bg-[#FFFFFF] border border-[#dfb16b]/35 px-5 py-8 sm:py-10 shadow-[0_14px_34px_-14px_rgba(73,18,57,0.1)] hover:border-[#dfb16b] hover:shadow-[0_22px_46px_-12px_rgba(73,18,57,0.18)] hover:-translate-y-1 transition-all duration-300 ${
                idx === 4
                  ? "col-span-2 sm:col-span-1 max-w-[240px] sm:max-w-none mx-auto w-full"
                  : ""
              }`}
            >
              {/* Logo Stage (Blends seamlessly into pure white) */}
              <div className="h-20 sm:h-24 w-full flex items-center justify-center mb-5 bg-[#FFFFFF]">
                <img
                  src={item.logo}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="max-h-16 sm:max-h-20 max-w-[135px] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Minimal Gold Hairline Divider */}
              <div className="w-6 h-[1.5px] bg-[#dfb16b] mb-3.5 group-hover:w-10 transition-all duration-300" />

              {/* Certification Label */}
              <div className="space-y-0.5">
                <h3 className="text-sm sm:text-[15px] font-semibold uppercase tracking-[0.12em] text-[#491239]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] font-normal tracking-[0.06em] text-[#491239]/75">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}