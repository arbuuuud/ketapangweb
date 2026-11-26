"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  Users,
  Tag,
  Search,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Palmtree,
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

const HERO_SLIDES = [
  {
    image: "/images/hero/hero1.jpg",
    tagline: "East Java's Premier Coastal Resort",
    title: "Where Tropical Coconut Groves Meet the Bali Strait",
    subtitle: "6 hectares of lush palm gardens, ocean breezes, and unmatched serenity.",
  },
  {
    image: "/images/mockup2/resort-pool-lagoon.jpg",
    tagline: "Secluded Oasis of Relaxation",
    title: "Lagoon Waters Under Swaying Palms",
    subtitle: "Immerse yourself in our Olympic-length pool enveloped by tropical flora.",
  },
  {
    image: "/images/mockup2/resort-sunrise-strait.jpg",
    tagline: "Dawn over the Ocean",
    title: "Awaken to the Golden Bali Strait Sunrise",
    subtitle: "Watch local fishing catamarans glide past the silhouettes of Bali's mountains.",
  },
  {
    image: "/images/mockup2/dining-marlin-beachfront.jpg",
    tagline: "Beach Club & Gastronomy",
    title: "Sunset Cocktails & Coastal Dining",
    subtitle: "Marlin Restaurant & Beach Club — where flavors harmonize with ocean tides.",
  },
];

export default function HeroCinematic() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Form states for booking capsule
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (d: Date) => d.toISOString().split("T")[0];
    setCheckIn(formatDate(today));
    setCheckOut(formatDate(tomorrow));
  }, []);

  const handleBookingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const inDate = checkIn ? checkIn.replace(/-/g, "/") : "";
    const outDate = checkOut ? checkOut.replace(/-/g, "/") : "";
    const [inYear, inMonth, inDay] = inDate.split("/");
    const [outYear, outMonth, outDay] = outDate.split("/");

    const formattedIn = inYear ? `${inDay}/${inMonth}/${inYear}` : "";
    const formattedOut = outYear ? `${outDay}/${outMonth}/${outYear}` : "";

    const params = new URLSearchParams({
      entrada: formattedIn,
      salida: formattedOut,
      adults: adults,
      idioma: "en",
    });

    if (promoCode.trim()) {
      params.append("codpromo", promoCode.trim());
    }

    const targetUrl = `${HOTEL_INFO.bookingEngineBaseUrl}?${params.toString()}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Slides with Cross-Fade */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity, transform", transitionDuration: "1200ms" }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.88]"
          />
        </div>
      ))}

      {/* Atmospheric Tropical Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001E3B]/95 via-black/30 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,30,59,0.5)_100%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFB347] text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">
          <Palmtree className="w-4 h-4 text-[#FFB347]" />
          <span>4-Star Beachfront Sanctuary • Banyuwangi</span>
        </div>

        {/* Dynamic Editorial Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-5xl leading-[1.15] drop-shadow-lg">
          {HERO_SLIDES[currentSlide].title}
        </h1>

        <p className="mt-5 text-white/90 text-sm sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed drop-shadow-md">
          {HERO_SLIDES[currentSlide].subtitle}
        </p>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2.5 mt-6 mb-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide ? "w-8 bg-[#FFB347]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* FLOATING GLASS BOOKING CAPSULE (Exclusive & Modern "Jaman Now") */}
        <div className="w-full max-w-5xl">
          <form
            onSubmit={handleBookingSearch}
            className="bg-white/95 backdrop-blur-2xl rounded-3xl lg:rounded-full p-4 lg:p-3 shadow-2xl border border-white/50 text-slate-800 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3"
          >
            {/* Check-In */}
            <div className="flex-1 px-4 py-2 hover:bg-slate-50/80 rounded-2xl lg:rounded-full transition-colors flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-[#004583]/10 flex items-center justify-center text-[#004583] shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <label htmlFor="capsule-checkin" className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Check-in
                </label>
                <input
                  id="capsule-checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-[#00284D] bg-transparent focus:outline-none cursor-pointer"
                  required
                />
              </div>
            </div>

            <div className="hidden lg:block w-px h-8 bg-slate-200" />

            {/* Check-Out */}
            <div className="flex-1 px-4 py-2 hover:bg-slate-50/80 rounded-2xl lg:rounded-full transition-colors flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-[#004583]/10 flex items-center justify-center text-[#004583] shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <label htmlFor="capsule-checkout" className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Check-out
                </label>
                <input
                  id="capsule-checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-[#00284D] bg-transparent focus:outline-none cursor-pointer"
                  required
                />
              </div>
            </div>

            <div className="hidden lg:block w-px h-8 bg-slate-200" />

            {/* Guests */}
            <div className="flex-1 px-4 py-2 hover:bg-slate-50/80 rounded-2xl lg:rounded-full transition-colors flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-[#004583]/10 flex items-center justify-center text-[#004583] shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <label htmlFor="capsule-guests" className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Guests & Rooms
                </label>
                <select
                  id="capsule-guests"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-[#00284D] bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="1">1 Adult (Single)</option>
                  <option value="2">2 Adults (1 Room)</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults (Family / Group)</option>
                </select>
              </div>
            </div>

            <div className="hidden lg:block w-px h-8 bg-slate-200" />

            {/* Promo Code */}
            <div className="flex-1 px-4 py-2 hover:bg-slate-50/80 rounded-2xl lg:rounded-full transition-colors flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-[#FFB347]/20 flex items-center justify-center text-[#E59830] shrink-0">
                <Tag className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <label htmlFor="capsule-promo" className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Promo Code
                </label>
                <input
                  id="capsule-promo"
                  type="text"
                  placeholder="Optional code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-[#00284D] placeholder:text-slate-400 bg-transparent focus:outline-none uppercase"
                />
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="lg:w-auto px-7 py-4 rounded-2xl lg:rounded-full bg-gradient-to-r from-[#004583] to-[#002B52] hover:from-[#0055a2] hover:to-[#003366] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 group transition-all shrink-0"
            >
              <Search className="w-4 h-4 text-[#FFB347] group-hover:scale-110 transition-transform" />
              <span>Check Rates</span>
            </button>
          </form>

          {/* Quick Direct Privileges Bar below Capsule */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-white/90 drop-shadow">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#FFB347]" />
              Official Best Rate Guaranteed
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-[#FFB347]" />
              Includes Daily Oceanfront Breakfast
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Palmtree className="w-4 h-4 text-[#FFB347]" />
              Zero Hidden Booking Fees
            </span>
          </div>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <a
        href="#story"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest"
        aria-label="Scroll to resort story"
      >
        <span>Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
