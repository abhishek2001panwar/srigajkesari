"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VideoItem {
  id: string;
  videoUrl: string;
}

const atelierReels: VideoItem[] = [
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
];

function PortraitVideoCard({
  item,
  index,
  isVisible,
}: {
  item: VideoItem;
  index: number;
  isVisible: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  // Subtle editorial staggered ("hanging") offset on desktop
  const staggerOffset =
    index % 2 === 1 ? "lg:translate-y-8" : "lg:translate-y-0";

  return (
    <div
      onClick={togglePlay}
      style={{ transitionDelay: `${index * 110}ms` }}
      className={`relative w-full aspect-[9/16] rounded-[28px] overflow-hidden bg-stone-900 border border-[#EAE4DC] shadow-sm hover:shadow-xl transition-all duration-700 ease-out group cursor-pointer select-none ${staggerOffset} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Pure Portrait Video */}
      <video
        ref={videoRef}
        src={`${item.videoUrl}#t=0.001`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
      />

      {/* Minimal Top-Right Audio Pill */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/35 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-white/90" />
        ) : (
          <Volume2 className="w-4 h-4 text-[#dfb16b]" />
        )}
      </button>
    </div>
  );
}

export default function AtelierVideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 sm:py-28 lg:pb-36 bg-[#FAF8F5] border-y border-[#EAE4DC] overflow-hidden select-none"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main Section Heading Only */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
        
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.03em] text-[#4C1137] leading-[1.08]">
            Video <span className="">Gallery</span>
          </h1>
        </div>

        {/* 4-Column Responsive Editorial Grid (Staggered Hanging Layout on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {atelierReels.map((item, index) => (
            <PortraitVideoCard
              key={item.id}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}