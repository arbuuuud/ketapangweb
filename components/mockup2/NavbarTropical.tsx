"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Calendar, Sparkles } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function NavbarTropical() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Resort", href: "#story" },
    { label: "Suites & Cottages", href: "#accommodations" },
    { label: "Beach Club & Dining", href: "#dining" },
    { label: "Wellness & Spa", href: "#spa" },
    { label: "Gallery", href: "#gallery" },
    { label: "Mount Ijen", href: "#experiences" },
    { label: "Location", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#00284D]/90 backdrop-blur-xl border-b border-white/10 shadow-xl py-3"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Completely Clean & Transparent */}
            <Link
              href="/"
              className="group flex items-center transition-transform hover:scale-105 duration-300"
              aria-label="Ketapang Indah Hotel Homepage"
            >
              <Image
                src="/images/logo-white.png"
                alt="Ketapang Indah Hotel Banyuwangi"
                width={190}
                height={55}
                priority
                className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md"
              />
            </Link>

            {/* Desktop Navigation - Refined Minimalist Typography */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85 hover:text-[#FFB347] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFB347] hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Action: Direct Booking CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center gap-1.5 px-3 py-2 text-white/80 hover:text-white text-xs font-medium tracking-wide transition-colors"
                title="Call Hotel Direct"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFB347]" />
                <span className="hidden xl:inline">+62 333 422280</span>
              </a>

              <a
                href={HOTEL_INFO.bookingEngineBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFB347] via-[#FFC77A] to-[#E59830] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#FFB347]/30 hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>Book Your Stay</span>
                <Sparkles className="w-3 h-3 text-slate-900 opacity-60 group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={HOTEL_INFO.bookingEngineBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#FFB347] text-slate-950 text-xs font-bold uppercase tracking-wider"
              >
                Book
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none"
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
        <div className="fixed inset-0 z-50 bg-[#001E3B]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-fadeIn lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Image
              src="/images/logo-white.png"
              alt="Ketapang Indah Hotel"
              width={160}
              height={46}
              className="h-10 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 text-white"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 py-6">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-white hover:text-[#FFB347] transition-colors border-b border-white/5 pb-2.5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs font-sans text-[#FFB347]">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={HOTEL_INFO.bookingEngineBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#FFB347] to-[#E59830] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg text-center"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Direct & Best Rates</span>
            </a>

            <div className="flex items-center justify-center gap-4 text-xs text-white/60 pt-2">
              <span>Jl. Gatot Subroto Km.6 Banyuwangi</span>
              <span>•</span>
              <a href={`tel:${HOTEL_INFO.phone}`} className="text-white hover:underline">
                +62 333 422280
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
