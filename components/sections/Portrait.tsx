"use client";

import React, { useEffect, useRef, useState } from "react";

interface VideoItem {
  id: string;
  videoUrl: string;
}

const atelierReels: VideoItem[] = [
  {
    id: "reel-5",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/first.mp4",
  },
  {
    id: "reel-6",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/second.mp4",
  },
  {
    id: "reel-7",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/third.mp4",
  },
  {
    id: "reel-8",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/fourth.mp4",
  },
  {
    id: "reel-10",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/sixth.mp4",
  },
  {
    id: "reel-1",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/IMG_9140.mp4",
  },
  {
    id: "reel-2",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/C9163-1.mp4",
  },
  {
    id: "reel-3",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/C9165-1.mp4",
  },
  {
    id: "reel-4",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/C8507-1.mp4",
  },
  {
    id: "reel-11",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/C9154.mp4",
  },
  {
    id: "reel-12",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/C9095.MP4.mp4",
  },
  {
    id: "reel-13",
    videoUrl: "https://hsrtiles.in/wp-content/uploads/2026/11/C9093.mp4",
  },
];

function PortraitVideoCard({
  item,
  index,
  scrollProgress,
}: {
  item: VideoItem;
  index: number;
  scrollProgress: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  const lockMute = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.muted || video.volume > 0) {
      video.muted = true;
      video.volume = 0;
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      lockMute();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const colIndex = index % 4;
  const isOddColumn = colIndex % 2 === 1;

  // Editorial "hanging" base offset + continuous luxury scroll parallax on desktop
  const baseHangingOffset = isOddColumn ? 36 : 0;
  const parallaxShift = isOddColumn
    ? scrollProgress * -26
    : scrollProgress * 16;

  return (
    <div
      ref={cardRef}
      style={{
        transitionDelay: `${colIndex * 95}ms`,
        ["--parallax-y" as string]: `${baseHangingOffset + parallaxShift}px`,
      }}
      className={`relative w-full aspect-[9/16] rounded-[20px] p-[5px] bg-white/80 backdrop-blur-sm border border-[#E5DDD3] shadow-[0_14px_34px_-12px_rgba(76,17,55,0.12)] hover:shadow-[0_28px_56px_-12px_rgba(76,17,55,0.24)] hover:border-[#dfb16b] transition-[opacity,box-shadow,border-color] duration-700 ease-out group select-none will-change-transform lg:[transform:translate3d(0,var(--parallax-y),0)] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Inner Gallery Bezel */}
      <div className="relative w-full h-full rounded-[15px] overflow-hidden bg-[#160510]">
        <video
          ref={videoRef}
          src={`${item.videoUrl}#t=0.001`}
          controls
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          loop
          muted
          playsInline
          preload="metadata"
          onVolumeChange={lockMute}
          onPlay={lockMute}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] [&::-webkit-media-controls-mute-button]:hidden [&::-webkit-media-controls-volume-slider]:hidden"
        />

        {/* Subtle Inner Hairline Rim for Depth */}
        <div className="absolute inset-0 rounded-[15px] ring-1 ring-inset ring-black/10 group-hover:ring-[#dfb16b]/40 transition-all duration-700 pointer-events-none" />
      </div>
    </div>
  );
}

export default function AtelierVideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Smooth continuous scroll-driven column parallax
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalTravel = rect.height + windowHeight;
          const currentPos = windowHeight - rect.top;
          const normalized = Math.max(
            -0.5,
            Math.min(0.5, currentPos / totalTravel - 0.5)
          );
          setScrollProgress(normalized);
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 lg:pb-44 bg-gradient-to-b from-[#FAF8F5] via-[#F7F3EC] to-[#FAF8F5] border-y border-[#E5DDD3] overflow-hidden select-none"
    >
      {/* Ambient Champagne Gold & Plum Atmospheric Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[340px] bg-[radial-gradient(ellipse_at_center,rgba(223,177,107,0.12),transparent_70%)]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Luxury Editorial Header */}
        <div
          className={`mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E5DDD3]/80 pb-8 transition-all duration-700 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
           
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.04em] text-[#4C1137] leading-[1.08]">
              Video <span className="text-[#dfb16b]">Gallery</span>
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-stone-500 font-light tracking-wide max-w-xs sm:text-right leading-relaxed">
            Intimate glimpses of 22KT hand-sculpted gold, uncut Polki, and heritage artistry.
          </p>
        </div>

        {/* 4-Column Responsive Editorial Grid (3 Rows x 4 Videos = 12 Videos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
          {atelierReels.map((item, index) => (
            <PortraitVideoCard
              key={item.id}
              item={item}
              index={index}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}