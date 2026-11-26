"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Sparkles,
  BedDouble,
  Utensils,
  GlassWater,
  PartyPopper,
  Briefcase,
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileExpanded(mobileExpanded === menu ? null : menu);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A2239]/95 backdrop-blur-xl border-b border-white/10 shadow-xl py-2.5"
            : "bg-gradient-to-b from-black/75 via-black/30 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Completely Transparent Without Box */}
            <Link
              href="/mockup-1"
              className="flex items-center transition-transform hover:scale-105 duration-300 shrink-0 mr-4"
              aria-label="Ketapang Indah Hotel Homepage"
            >
              <Image
                src="/images/logo-white.png"
                alt="Ketapang Indah Hotel Banyuwangi"
                width={175}
                height={50}
                priority
                className="h-8 sm:h-10 w-auto object-contain filter drop-shadow-md"
              />
            </Link>

            {/* Desktop Navigation - Luxury Dropdown Grouping */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90">
              {/* 1. ROOMS DROPDOWN */}
              <div className="relative group py-2">
                <a
                  href="#rooms"
                  className="inline-flex items-center gap-1 hover:text-[#C69C6D] transition-colors"
                >
                  <span>Rooms</span>
                  <ChevronDown className="w-3 h-3 text-[#C69C6D] group-hover:rotate-180 transition-transform duration-300" />
                </a>

                <div className="absolute top-full -left-4 w-72 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-[#0A2239]/95 backdrop-blur-2xl rounded-2xl p-2.5 border border-white/15 shadow-2xl space-y-1">
                    <a
                      href="#rooms"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-white hover:text-[#C69C6D]"
                    >
                      <BedDouble className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold capitalize">Ocean View Suite</span>
                        <span className="text-[10px] text-white/60 lowercase">75 sqm • Oceanfront panoramic</span>
                      </div>
                    </a>
                    <a
                      href="#rooms"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-white hover:text-[#C69C6D]"
                    >
                      <BedDouble className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold capitalize">Cottage Garden View</span>
                        <span className="text-[10px] text-white/60 lowercase">32 sqm • Private veranda</span>
                      </div>
                    </a>
                    <a
                      href="#rooms"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-white hover:text-[#C69C6D]"
                    >
                      <BedDouble className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold capitalize">Garden Superior Room</span>
                        <span className="text-[10px] text-white/60 lowercase">25 sqm • Botanical courtyard</span>
                      </div>
                    </a>
                    <a
                      href="#rooms"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-white hover:text-[#C69C6D]"
                    >
                      <BedDouble className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold capitalize">Superior Room</span>
                        <span className="text-[10px] text-white/60 lowercase">25 sqm • Resort wing</span>
                      </div>
                    </a>
                    <a
                      href="#rooms"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-white hover:text-[#C69C6D]"
                    >
                      <BedDouble className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold capitalize">Standard Room</span>
                        <span className="text-[10px] text-white/60 lowercase">22 sqm • Explorer comfort</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. OFFERS */}
              <a
                href="#rooms"
                className="hover:text-[#C69C6D] transition-colors py-2 flex items-center gap-1"
              >
                <span>Offers</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C69C6D]" />
              </a>

              {/* 3. DINING DROPDOWN */}
              <div className="relative group py-2">
                <a
                  href="#dining"
                  className="inline-flex items-center gap-1 hover:text-[#C69C6D] transition-colors"
                >
                  <span>Dining</span>
                  <ChevronDown className="w-3 h-3 text-[#C69C6D] group-hover:rotate-180 transition-transform duration-300" />
                </a>

                <div className="absolute top-full -left-4 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-[#0A2239]/95 backdrop-blur-2xl rounded-2xl p-2.5 border border-white/15 shadow-2xl space-y-1">
                    <a
                      href="#dining"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-white hover:text-[#C69C6D]"
                    >
                      <Utensils className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold capitalize">Marlin Beach Club</span>
                        <span className="text-[10px] text-white/60 lowercase">Oceanfront dining & grill</span>
                      </div>
                    </a>
                    <a
                      href="#dining"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-white hover:text-[#C69C6D]"
                    >
                      <GlassWater className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold capitalize">Wahoo Lobby Lounge</span>
                        <span className="text-[10px] text-white/60 lowercase">Specialty coffee & tea</span>
                      </div>
                    </a>
                    <a
                      href="#dining"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-white hover:text-[#C69C6D]"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold capitalize">Lagoon Pool Bar</span>
                        <span className="text-[10px] text-white/60 lowercase">Poolside drinks & bites</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* 4. EVENTS & WEDDINGS DROPDOWN */}
              <div className="relative group py-2">
                <a
                  href="#facilities"
                  className="inline-flex items-center gap-1 hover:text-[#C69C6D] transition-colors"
                >
                  <span>Events & Weddings</span>
                  <ChevronDown className="w-3 h-3 text-[#C69C6D] group-hover:rotate-180 transition-transform duration-300" />
                </a>

                <div className="absolute top-full -left-4 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-[#0A2239]/95 backdrop-blur-2xl rounded-2xl p-2.5 border border-white/15 shadow-2xl space-y-1">
                    <a
                      href="#facilities"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-white hover:text-[#C69C6D]"
                    >
                      <Briefcase className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold capitalize">Meetings & MICE</span>
                        <span className="text-[10px] text-white/60 lowercase">Cengkeh Ballroom (800 pax)</span>
                      </div>
                    </a>
                    <a
                      href="#facilities"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-white hover:text-[#C69C6D]"
                    >
                      <PartyPopper className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold capitalize">Oceanfront Weddings</span>
                        <span className="text-[10px] text-white/60 lowercase">Beach lawn up to 1,000 guests</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* 5. FACILITIES */}
              <a href="#facilities" className="hover:text-[#C69C6D] transition-colors py-2">
                Facilities
              </a>

              {/* 6. EXCURSIONS */}
              <a href="#excursions" className="hover:text-[#C69C6D] transition-colors py-2">
                Excursions
              </a>

              {/* 7. REVIEWS */}
              <a href="#reviews" className="hover:text-[#C69C6D] transition-colors py-2">
                Reviews
              </a>

              {/* 8. CONTACT */}
              <a href="#location" className="hover:text-[#C69C6D] transition-colors py-2">
                Contact
              </a>
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={HOTEL_INFO.bookingEngineBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C69C6D] via-[#D8B48D] to-[#B8860B] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.03] active:scale-95 transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>Book Now</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors lg:hidden focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A2239]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-fadeIn lg:hidden overflow-y-auto">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Ketapang Indah Hotel"
                width={150}
                height={42}
                className="h-8 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {/* Rooms Accordion */}
              <div className="border-b border-white/10 py-2.5">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("rooms")}
                  className="w-full flex items-center justify-between font-serif text-base text-white hover:text-[#C69C6D]"
                >
                  <span>Rooms & Suites</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C69C6D] transition-transform ${
                      mobileExpanded === "rooms" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "rooms" && (
                  <div className="pl-4 pt-2 space-y-2 text-xs text-white/80">
                    <a
                      href="#rooms"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-[#C69C6D]"
                    >
                      • Ocean View Suite (75 sqm)
                    </a>
                    <a
                      href="#rooms"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-[#C69C6D]"
                    >
                      • Cottage Garden View (32 sqm)
                    </a>
                    <a
                      href="#rooms"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-[#C69C6D]"
                    >
                      • Garden Superior Room (25 sqm)
                    </a>
                    <a
                      href="#rooms"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-[#C69C6D]"
                    >
                      • Superior Room (25 sqm)
                    </a>
                    <a
                      href="#rooms"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-[#C69C6D]"
                    >
                      • Standard Room (22 sqm)
                    </a>
                  </div>
                )}
              </div>

              {/* Offers */}
              <a
                href="#rooms"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/10 py-3 font-serif text-base text-white hover:text-[#C69C6D] flex items-center justify-between"
              >
                <span>Offers & Privileges</span>
                <span className="text-[10px] text-[#C69C6D] font-sans font-bold">Best Rate</span>
              </a>

              {/* Dining Accordion */}
              <div className="border-b border-white/10 py-2.5">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("dining")}
                  className="w-full flex items-center justify-between font-serif text-base text-white hover:text-[#C69C6D]"
                >
                  <span>Dining</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C69C6D] transition-transform ${
                      mobileExpanded === "dining" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "dining" && (
                  <div className="pl-4 pt-2 space-y-2 text-xs text-white/80">
                    <a
                      href="#dining"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-[#C69C6D]"
                    >
                      • Marlin Restaurant & Beach Club
                    </a>
                    <a
                      href="#dining"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-[#C69C6D]"
                    >
                      • Wahoo Lobby Lounge
                    </a>
                    <a
                      href="#dining"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-[#C69C6D]"
                    >
                      • Lagoon Pool Bar
                    </a>
                  </div>
                )}
              </div>

              {/* Events Accordion */}
              <div className="border-b border-white/10 py-2.5">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("events")}
                  className="w-full flex items-center justify-between font-serif text-base text-white hover:text-[#C69C6D]"
                >
                  <span>Events & Weddings</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C69C6D] transition-transform ${
                      mobileExpanded === "events" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "events" && (
                  <div className="pl-4 pt-2 space-y-2 text-xs text-white/80">
                    <a
                      href="#facilities"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-[#C69C6D]"
                    >
                      • Meetings Packages & Cengkeh Ballroom
                    </a>
                    <a
                      href="#facilities"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-[#C69C6D]"
                    >
                      • Oceanfront Wedding Lawn
                    </a>
                  </div>
                )}
              </div>

              {/* Facilities */}
              <a
                href="#facilities"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/10 py-3 font-serif text-base text-white hover:text-[#C69C6D] block"
              >
                Facilities & Spa
              </a>

              {/* Excursions */}
              <a
                href="#excursions"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/10 py-3 font-serif text-base text-white hover:text-[#C69C6D] block"
              >
                Excursions (Mount Ijen)
              </a>

              {/* Reviews */}
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/10 py-3 font-serif text-base text-white hover:text-[#C69C6D] block"
              >
                Guest Reviews
              </a>

              {/* Location */}
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/10 py-3 font-serif text-base text-white hover:text-[#C69C6D] block"
              >
                Location & Map
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10">
            <a
              href={HOTEL_INFO.bookingEngineBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-[#C69C6D] to-[#B8860B] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg text-center"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Online (Best Rate Guaranteed)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
