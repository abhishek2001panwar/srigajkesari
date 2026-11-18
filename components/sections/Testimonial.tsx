"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function TestimonialVideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Scroll-triggered staggered text entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = isMuted;
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
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
        // Ignore seek errors
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative z-20 w-full bg-[#FFFFFF] text-[#491239] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-[#dfb16b]/25 select-none overflow-hidden"
    >
      {/* Subtle Ambient Champagne Gold Glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[620px] h-[520px] bg-[radial-gradient(circle_at_center,rgba(223,177,107,0.12)_0%,transparent_70%)]" />

     

      {/* ================= 2-COLUMN SPLIT: LEFT EDITORIAL STORY + RIGHT PORTRAIT VIDEO ================= */}
      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: ANIMATED CUSTOMER STORIES NARRATIVE */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-3 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.26em] font-semibold text-[#9f732e]">
              Customer Stories
            </span>
          </div>

          {/* Masked Line-by-Line Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-[#491239] leading-[1.08]">
            <span className="block overflow-hidden pb-1">
              <span
                className={`block transition-transform duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
              >
                Our Greatest Treasure
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span
                className={`block text-[#dfb16b] font-normal transition-transform duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
              >
                Is Your Trust.
              </span>
            </span>
          </h2>

          {/* Expanding Champagne Gold Divider */}
          <div
            className={`h-[1px] bg-gradient-to-r from-[#dfb16b] via-[#dfb16b]/50 to-transparent transition-all duration-1000 delay-250 ease-out ${
              isVisible ? "w-32 opacity-100" : "w-0 opacity-0"
            }`}
          />

          {/* Staggered Narrative Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#491239]/85 font-normal leading-relaxed tracking-tight max-w-2xl">
            <p
              style={{ transitionDelay: "300ms" }}
              className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              Some customers have been with us for years. Some have introduced their children and grandchildren to us. And some have made us a part of their most memorable celebrations.
            </p>

            <p
              style={{ transitionDelay: "400ms" }}
              className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              Every relationship, every celebration and every return visit has become a part of our journey. We are grateful to the families who have chosen us and trusted us with their special moments.
            </p>

            <p
              style={{ transitionDelay: "500ms" }}
              className={`font-medium text-[#491239] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              Because a legacy is not built by what we say about ourselves. It is built by the people who believe in us.
            </p>
          </div>

          {/* Closing Sub-Heading Callout */}
          <div
            style={{ transitionDelay: "620ms" }}
            className={`pt-4 pl-4 border-l-2 border-[#dfb16b] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#491239]">
              Your Stories.{" "}
              <span className="text-[#9f732e] font-normal">Our Legacy.</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#491239]/75 mt-1">
              Hear from the people who have made Sri Gajkesari a part of their stories.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: PORTRAIT TESTIMONIAL VIDEO FRAME */}
        <div
          style={{ transitionDelay: "320ms" }}
          className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div
            onClick={togglePlay}
            className={`relative w-[290px] sm:w-[330px] md:w-[355px] aspect-[9/16] rounded-[30px] p-[7px] bg-[#FAF8F5] border transition-all duration-500 cursor-pointer group ${
              isPlaying
                ? "border-[#dfb16b] shadow-[0_34px_75px_-15px_rgba(73,18,57,0.34)]"
                : "border-[#dfb16b]/60 shadow-[0_28px_60px_-15px_rgba(73,18,57,0.22)] hover:border-[#dfb16b]"
            }`}
          >
            <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-[#26071c]">
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

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#24061a]/80 via-[#24061a]/25 to-transparent pointer-events-none" />

              {/* Top-Right Sound Toggle */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute testimonial" : "Mute testimonial"}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#491239]/85 hover:bg-[#491239] text-[#dfb16b] border border-[#dfb16b]/45 backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer"
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" />
                )}
              </button>

              {/* Center Play Medallion / Bottom-Right Pause Pill */}
              {!isPlaying ? (
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#491239]/90 group-hover:bg-[#dfb16b] text-[#dfb16b] group-hover:text-[#24061a] border border-[#dfb16b]/65 backdrop-blur-md flex items-center justify-center shadow-[0_14px_34px_rgba(36,6,26,0.5)] transition-all duration-300 group-hover:scale-105">
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

              {/* Inner Champagne Gold Rim */}
              <div className="absolute inset-0 z-20 rounded-[23px] ring-1 ring-inset ring-[#dfb16b]/35 pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}