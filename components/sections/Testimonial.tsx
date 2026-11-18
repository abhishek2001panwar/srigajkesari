"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function TestimonialVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = isMuted;
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleLoadedData = () => {
    const video = videoRef.current;
    if (!video) return;
    setIsReady(true);
    if (video.paused && video.currentTime === 0) {
      try {
        video.currentTime = 0.05;
      } catch {
        // Ignore seek errors on strict range servers
      }
    }
  };

  return (
    <section
      id="testimonials"
      className="relative z-20 w-full bg-[#FFFFFF] text-[#491239] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-[#dfb16b]/25 select-none overflow-hidden"
    >
      {/* Subtle Ambient Champagne Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-[radial-gradient(circle,rgba(223,177,107,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* ================= 1. MINIMAL CENTERED HEADER ================= */}
        <div className="text-center max-w-xl mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
           
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] font-semibold text-[#9f732e]">
              Client Stories
            </span>
           
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#491239] leading-[1.08]">
           Voices of{" "}
            <span className="text-[#dfb16b] font-normal"> Trust.</span>
          </h2>
        </div>

        {/* ================= 2. CENTERED PORTRAIT VIDEO STAGE ================= */}
        <div
          onClick={togglePlay}
          className={`relative w-[290px] sm:w-[340px] md:w-[360px] aspect-[9/16] rounded-[30px] p-[7px] bg-[#FAF8F5] border transition-all duration-500 cursor-pointer group ${
            isPlaying
              ? "border-[#dfb16b] shadow-[0_32px_70px_-15px_rgba(73,18,57,0.28)]"
              : "border-[#dfb16b]/45 shadow-[0_24px_54px_-15px_rgba(73,18,57,0.16)] hover:border-[#dfb16b] hover:shadow-[0_30px_65px_-14px_rgba(73,18,57,0.24)]"
          }`}
        >
          <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-[#26071c]">
            {/* Royal Plum Shimmer Placeholder until First Frame Paints */}
            {!isReady && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#491239] via-[#320a26] to-[#26071c] animate-pulse" />
            )}

            <video
              ref={videoRef}
              src="https://res.cloudinary.com/gwfdqhai/video/upload/v1794982812/IMG_6432_1.mp4"
              playsInline
              webkit-playsinline="true"
              preload="auto"
              onLoadedData={handleLoadedData}
              onCanPlay={() => setIsReady(true)}
              onEnded={() => setIsPlaying(false)}
              className={`relative z-10 w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
                isPlaying ? "scale-100" : "group-hover:scale-[1.02]"
              } ${isReady ? "opacity-100" : "opacity-0"}`}
            />

            {/* Bottom-Left Royal Plum Gradient for Clean Contrast */}
            <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#24061a]/80 via-[#24061a]/25 to-transparent pointer-events-none" />

            {/* Top-Right Sound Toggle (Appears when playing or hovered) */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute testimonial" : "Mute testimonial"}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#491239]/80 hover:bg-[#491239] text-[#dfb16b] border border-[#dfb16b]/40 backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Center Play Medallion when Paused / Bottom-Right Pause Pill when Playing */}
            {!isPlaying ? (
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-[#491239]/90 group-hover:bg-[#dfb16b] text-[#dfb16b] group-hover:text-[#24061a] border border-[#dfb16b]/60 backdrop-blur-md flex items-center justify-center shadow-[0_14px_34px_rgba(36,6,26,0.45)] transition-all duration-300 group-hover:scale-105">
                  <Play className="w-6 h-6 fill-current translate-x-[1.5px]" />
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label="Pause testimonial"
                className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-[#dfb16b] text-[#24061a] border border-[#dfb16b] flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer"
              >
                <Pause className="w-4 h-4 fill-current" />
              </button>
            )}

            {/* Inner Champagne Gold Hairline Rim */}
            <div className="absolute inset-0 z-20 rounded-[23px] ring-1 ring-inset ring-[#dfb16b]/30 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}