"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface VideoItem {
  id: string;
  publicId: string;
}

const CLOUDINARY_BASE = "https://res.cloudinary.com/gwfdqhai/video/upload";

// Reliable MP4 stream with quality & width optimization (works across Safari, iOS, iPadOS, Chrome)
const getOptimizedVideoUrl = (publicId: string) =>
  `${CLOUDINARY_BASE}/q_auto,w_720/${publicId}.mp4`;

// Instant JPG poster extracted from frame 0
const getVideoPosterUrl = (publicId: string) =>
  `${CLOUDINARY_BASE}/so_0,q_auto,w_720/${publicId}.jpg`;

const atelierReels: VideoItem[] = [
  { id: "reel-5", publicId: "v1794982826/first" },
   { id: "reel-2", publicId: "/v1794997555/IMG_9155" },
   { id: "reel-2", publicId: "v1794982852/fourth" },
  { id: "reel-3", publicId: "v1794982849/fifth" },
  // { id: "reel-6", publicId: "v1794982826/second" },
  { id: "reel-1", publicId: "v1794982819/third" },
  
  { id: "reel-11", publicId: "v1794982820/sixth" },
  { id: "reel-12", publicId: "v1794982831/9" },
  { id: "reel-13", publicId: "v1794982820/8" },
 
];

function PortraitVideoCard({
  item,
  isPlaying,
  onTogglePlay,
}: {
  item: VideoItem;
  isPlaying: boolean;
  onTogglePlay: (id: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStreamReady, setIsStreamReady] = useState(false);

  const lockMute = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.muted || video.volume > 0) {
      video.muted = true;
      video.volume = 0;
    }
  };

  // Pause when another reel is selected
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!isPlaying && !video.paused) {
      video.pause();
    }
  }, [isPlaying]);

  // Trigger play() directly inside the user click handler (required by iPadOS & macOS Safari)
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;

    if (video) {
      video.defaultMuted = true;
      lockMute();

      if (isPlaying) {
        video.pause();
      } else {
        const targetSrc = getOptimizedVideoUrl(item.publicId);
        if (video.getAttribute("src") !== targetSrc) {
          video.setAttribute("src", targetSrc);
          video.load();
        }
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Fallback to raw original Cloudinary URL if transformation is still processing
            const fallbackSrc = `${CLOUDINARY_BASE}/${item.publicId}.mp4`;
            if (video.getAttribute("src") !== fallbackSrc) {
              video.setAttribute("src", fallbackSrc);
              video.load();
              video.play().catch(() => {});
            }
          });
        }
      }
    }

    onTogglePlay(item.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`shrink-0 w-[280px] sm:w-[310px] md:w-[325px] lg:w-[348px] aspect-[9/16] rounded-[26px] p-[6px] bg-white border transition-all duration-500 ease-out group snap-start cursor-pointer ${
        isPlaying
          ? "border-[#dfb16b] shadow-[0_28px_60px_-14px_rgba(73,18,57,0.28)] -translate-y-1"
          : "border-[#E6DDD1] shadow-[0_14px_34px_-14px_rgba(73,18,57,0.12)] hover:shadow-[0_24px_50px_-12px_rgba(73,18,57,0.22)] hover:border-[#dfb16b]/80 hover:-translate-y-0.5"
      }`}
    >
      {/* Inner Gallery Frame */}
      <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#26071c]">
        {/* Instant Poster Cover (Visible until video frames render) */}
        <img
          src={getVideoPosterUrl(item.publicId)}
          alt="Sri Gajkesari Atelier Craft"
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 z-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
            isPlaying ? "scale-[1.01]" : "group-hover:scale-[1.03]"
          }`}
        />

        {/* Video Element (Always mounted with src set synchronously on tap) */}
        <video
          ref={videoRef}
          poster={getVideoPosterUrl(item.publicId)}
          disablePictureInPicture
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="none"
          onPlaying={() => setIsStreamReady(true)}
          onCanPlay={() => setIsStreamReady(true)}
          onVolumeChange={lockMute}
          className={`relative z-10 w-full h-full object-cover object-center transition-opacity duration-300 ${
            isPlaying && isStreamReady ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Subtle Bottom Vignette */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-[#24061a]/65 via-[#24061a]/20 to-transparent pointer-events-none" />

        {/* Play/Pause Medallion */}
        <button
          type="button"
          onClick={handleCardClick}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className={`absolute bottom-4 right-4 z-20 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 cursor-pointer active:scale-90 ${
            isPlaying
              ? "bg-[#dfb16b] text-[#24061a] border-[#dfb16b] shadow-[0_8px_24px_rgba(223,177,107,0.45)]"
              : "bg-[#491239]/85 text-[#dfb16b] border-[#dfb16b]/45 group-hover:bg-[#dfb16b] group-hover:text-[#24061a] shadow-lg"
          }`}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current translate-x-[1px]" />
          )}
        </button>

        {/* Inner Champagne Hairline Rim */}
        <div
          className={`absolute inset-0 z-20 rounded-[20px] ring-1 ring-inset transition-all duration-500 pointer-events-none ${
            isPlaying
              ? "ring-[#dfb16b]/60"
              : "ring-[#491239]/10 group-hover:ring-[#dfb16b]/45"
          }`}
        />
      </div>
    </div>
  );
}

export default function AtelierVideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollRatio, setScrollRatio] = useState(0);

  const updateScrollState = () => {
    const el = rowRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(maxScroll > 8 && el.scrollLeft < maxScroll - 8);
    setScrollRatio(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  };

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

    const rowEl = rowRef.current;
    if (rowEl) {
      rowEl.addEventListener("scroll", updateScrollState, { passive: true });
      updateScrollState();
    }
    window.addEventListener("resize", updateScrollState);

    return () => {
      observer.disconnect();
      if (rowEl) rowEl.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleSlide = (direction: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    const step = Math.max(320, el.clientWidth * 0.72);
    el.scrollTo({
      left: el.scrollLeft + (direction === "right" ? step : -step),
      behavior: "smooth",
    });
  };

  const handleTogglePlay = (id: string) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-[#FAF8F5] via-[#F7F3EC] to-[#FAF8F5] border-y border-[#E5DDD3] overflow-hidden"
    >
      {/* Subtle Champagne Gold Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(223,177,107,0.14),transparent_70%)]" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header + Controls */}
        <div
          className={`px-6 sm:px-10 lg:px-16 mb-10 sm:mb-14 transition-all duration-700 ease-out select-none ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="border-b border-[#dfb16b]/30 pb-7 w-full flex items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.03em] text-[#491239] leading-[1.08]">
                Video <span className="text-[#dfb16b]">Gallery</span>
              </h1>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => handleSlide("left")}
                disabled={!canScrollLeft}
                aria-label="Previous videos"
                className="w-11 h-11 rounded-full border border-[#491239]/25 bg-white text-[#491239] flex items-center justify-center hover:bg-[#491239] hover:text-[#dfb16b] hover:border-[#491239] disabled:opacity-25 disabled:hover:bg-white disabled:hover:text-[#491239] transition-all cursor-pointer active:scale-95 shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleSlide("right")}
                disabled={!canScrollRight}
                aria-label="Next videos"
                className="w-11 h-11 rounded-full border border-[#491239]/25 bg-white text-[#491239] flex items-center justify-center hover:bg-[#491239] hover:text-[#dfb16b] hover:border-[#491239] disabled:opacity-25 disabled:hover:bg-white disabled:hover:text-[#491239] transition-all cursor-pointer active:scale-95 shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Single-Row Gallery Track */}
        <div
          ref={rowRef}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          className="flex flex-nowrap items-stretch gap-6 sm:gap-7 px-6 sm:px-10 lg:px-16 overflow-x-auto snap-x snap-proximity py-3 [&::-webkit-scrollbar]:hidden"
        >
          {atelierReels.map((item) => (
            <PortraitVideoCard
              key={item.id}
              item={item}
              isPlaying={playingId === item.id}
              onTogglePlay={handleTogglePlay}
            />
          ))}
        </div>

        {/* Minimal Champagne Gold Scroll Progress Track */}
        <div className="px-6 sm:px-10 lg:px-16 mt-8">
          <div className="w-full h-[2px] bg-[#491239]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#491239] to-[#dfb16b] rounded-full transition-all duration-200 ease-out"
              style={{
                width: `${Math.max(18, scrollRatio * 100)}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}