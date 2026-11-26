"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, Calendar } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accommodations", href: "#rooms" },
    { name: "Dining & Beach Club", href: "#dining" },
    { name: "Facilities", href: "#facilities" },
    { name: "Experiences", href: "#excursions" },
    { name: "Location", href: "#location" },
  ];

  const waUrl = `https://wa.me/628113502280?text=${encodeURIComponent(
    "Hello Ketapang Indah Hotel, I would like to inquire about room availability and direct booking privileges."
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#061524]/95 backdrop-blur-md shadow-luxury py-3 border-b border-white/10"
          : "bg-gradient-to-b from-[#061524]/85 via-[#061524]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Pure Authentic Brand Logo - Clean, Transparent, No Circular Box */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
            <Image
              src="/images/logo-white.png"
              alt="Ketapang Indah Hotel"
              width={180}
              height={52}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-[0.2em] uppercase text-white/90 hover:text-[#C69C6D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C69C6D] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA: WhatsApp & Single Refined Book Now Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Concierge via WhatsApp"
              className="text-white/80 hover:text-emerald-400 p-2 transition-colors"
              title="Chat with Hotel Concierge"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </a>

            <a
              href={HOTEL_INFO.bookingEngineBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C69C6D] via-[#D8B48D] to-[#B8860B] text-slate-950 shadow-glow hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={HOTEL_INFO.bookingEngineBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#C69C6D] text-slate-950"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#061524]/98 backdrop-blur-xl border-b border-white/10 px-6 pt-5 pb-8 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold tracking-[0.2em] uppercase text-white/90 hover:text-[#C69C6D] py-2.5 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#C69C6D] text-xs">→</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold tracking-wider uppercase"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Concierge</span>
              </a>
              <a
                href={HOTEL_INFO.bookingEngineBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#C69C6D] via-[#D8B48D] to-[#B8860B] text-slate-950 text-xs font-bold uppercase tracking-[0.18em]"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Directly (Best Rate)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
