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
    { name: "Kamar & Suite", href: "#rooms" },
    { name: "Restoran & Beach Club", href: "#dining" },
    { name: "Fasilitas Resor", href: "#facilities" },
    { name: "Wisata Ijen & Sekitar", href: "#excursions" },
    { name: "Ulasan Tamu", href: "#reviews" },
    { name: "Lokasi", href: "#location" },
  ];

  const waUrl = `https://wa.me/628113502280?text=${encodeURIComponent(
    "Halo Ketapang Indah Hotel, saya ingin menanyakan ketersediaan kamar dan promo direct booking via website."
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A2239]/95 backdrop-blur-md shadow-luxury py-3 border-b border-white/10"
          : "bg-gradient-to-b from-[#061524]/80 via-[#061524]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-white/10 rounded-full p-1.5 backdrop-blur-sm border border-white/20 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo-white.png"
                alt="Ketapang Indah Hotel Logo"
                fill
                sizes="48px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white uppercase leading-tight">
                Ketapang Indah
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#C69C6D] uppercase font-medium">
                Banyuwangi • Resort
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-[#D8B48D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C69C6D] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Group: WhatsApp & Book Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi WhatsApp Reservasi"
              className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all hover:border-[#C69C6D]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden md:inline">Tanya Kami</span>
            </a>

            <a
              href={HOTEL_INFO.bookingEngineBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C69C6D] via-[#D8B48D] to-[#B8860B] text-slate-950 shadow-glow hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Pesan Kamar</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={HOTEL_INFO.bookingEngineBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#C69C6D] text-slate-950"
            >
              Pesan
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A2239]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-[#D8B48D] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#C69C6D] text-sm">→</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Chat WhatsApp Reservasi
              </a>
              <a
                href={HOTEL_INFO.bookingEngineBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#C69C6D] via-[#D8B48D] to-[#B8860B] text-slate-950 text-sm font-bold uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                Pesan Kamar (Jaminan Harga Terbaik)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
