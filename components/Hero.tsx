"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "/images/hero/hero1.jpg",
    title: "A Coastal Sanctuary by the Bali Strait",
    tagline: "Nestled Within 6 Hectares of Lush Coconut Groves in Banyuwangi",
    highlight: "Oceanfront Lagoon Pool & Sunrise View",
  },
  {
    image: "/images/hero/hero2.jpg",
    title: "Tranquility Amongst Swaying Coconut Palms",
    tagline: "Natural Seclusion, Coastal Breezes & Gentle Ocean Waves",
    highlight: "Lush 6-Hectare Tropical Coconut Grove",
  },
  {
    image: "/images/hero/hero3.jpg",
    title: "The Ultimate Base for Mount Ijen Adventures",
    tagline: "5 Minutes from the Bali Ferry & 60 Minutes to the Blue Fire Crater",
    highlight: "Official Basecamp for Mount Ijen Blue Fire",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#061524]">
      {/* Background Slides with Cross-Fade */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity, transform", transitionDuration: "1200ms" }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061524] via-[#0A2239]/60 to-[#061524]/40 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,21,36,0.6)_100%)] z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 sm:pb-36 text-center text-white">
        {/* Top Badges: Star & Direct Booking */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-lg">
          <div className="flex items-center text-amber-400">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-amber-200">
            4-Star Beachfront Resort • Bali Strait
          </span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-white/90">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Best Direct Rate Guaranteed
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto text-balance leading-[1.15] drop-shadow-md">
          {HERO_SLIDES[activeSlide].title}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
          Experience genuine East Javanese coastal hospitality amidst thousands of swaying coconut palms, gentle sea whispers, and panoramic sunrises over Bali island.
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#rooms"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C69C6D] via-[#D8B48D] to-[#B8860B] text-slate-950 font-bold text-xs uppercase tracking-[0.18em] shadow-glow hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <span>Explore Rooms & Suites</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#dining"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-md border border-white/25 transition-all hover:border-[#C69C6D]"
          >
            <span>Marlin Beach Club & Dining</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-[#C69C6D]/20 border border-[#C69C6D]/40 flex items-center justify-center text-[#D8B48D] shrink-0 font-serif font-bold text-lg">
              6
            </div>
            <div>
              <p className="text-xs text-white/60">Lush Grounds</p>
              <p className="text-xs sm:text-sm font-semibold text-white">Hectares Coconut Grove</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 font-serif font-bold text-lg">
              4.5
            </div>
            <div>
              <p className="text-xs text-white/60">TripAdvisor Score</p>
              <p className="text-xs sm:text-sm font-semibold text-white">2,100+ Positive Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-300 shrink-0 font-serif font-bold text-sm">
              0m
            </div>
            <div>
              <p className="text-xs text-white/60">Direct Access</p>
              <p className="text-xs sm:text-sm font-semibold text-white">Bali Strait Beachfront</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0 font-serif font-bold text-sm">
              60m
            </div>
            <div>
              <p className="text-xs text-white/60">Scenic Gateway</p>
              <p className="text-xs sm:text-sm font-semibold text-white">Mount Ijen Basecamp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Thumbnails & Controls (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/15">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveSlide(idx)}
            className={`transition-all ${
              idx === activeSlide
                ? "w-8 h-2 bg-[#C69C6D] rounded-full"
                : "w-2 h-2 bg-white/40 hover:bg-white/80 rounded-full"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
