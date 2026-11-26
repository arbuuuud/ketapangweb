"use client";

import React, { useState } from "react";
import { Calendar, Users, Tag, Search, ShieldCheck, Sparkles, ChevronDown, Check } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function BookingEngineBar() {
  // Generate default dates: today & tomorrow in YYYY-MM-DD
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (d: Date) => d.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(formatDate(today));
  const [checkOut, setCheckOut] = useState(formatDate(tomorrow));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/60 p-4 sm:p-6 lg:p-7">
        {/* Direct Booking Privilege Tagline */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-800 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Pemesanan Resmi Langsung (Official Direct Booking)</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500 text-xs">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> Jaminan Harga Termurah
            </span>
            <span className="hidden md:flex items-center gap-1 text-amber-700 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Gratis Sarapan & Welcome Drink
            </span>
            <span className="hidden sm:flex items-center gap-1 text-sky-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Bebas Biaya Booking
            </span>
          </div>
        </div>

        {/* Booking Form submitting to Ketapang Indah Official Backhotelite Engine */}
        <form
          action={HOTEL_INFO.bookingEngineBaseUrl}
          method="POST"
          target="_blank"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-end"
        >
          {/* Check-in Date */}
          <div className="lg:col-span-3 flex flex-col gap-1.5">
            <label htmlFor="entrada" className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C69C6D]" /> Check-In
            </label>
            <div className="relative">
              <input
                type="date"
                id="entrada"
                name="entrada"
                value={checkIn}
                min={formatDate(today)}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  if (e.target.value >= checkOut) {
                    const nextDay = new Date(e.target.value);
                    nextDay.setDate(nextDay.getDate() + 1);
                    setCheckOut(formatDate(nextDay));
                  }
                }}
                className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C69C6D] transition-all cursor-pointer"
                required
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="lg:col-span-3 flex flex-col gap-1.5">
            <label htmlFor="salida" className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C69C6D]" /> Check-Out
            </label>
            <div className="relative">
              <input
                type="date"
                id="salida"
                name="salida"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C69C6D] transition-all cursor-pointer"
                required
              />
            </div>
          </div>

          {/* Guests Selector */}
          <div className="lg:col-span-3 flex flex-col gap-1.5 relative">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#C69C6D]" /> Tamu & Kamar
            </span>
            <button
              type="button"
              onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
              className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#C69C6D] transition-all"
            >
              <span className="truncate">
                {adults} Dewasa{children > 0 ? `, ${children} Anak` : ""}
              </span>
              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
            </button>

            {/* Dropdown Popover */}
            {guestDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-fadeIn">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Dewasa</p>
                    <p className="text-[11px] text-slate-500">Usia 12+ tahun</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-bold">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(Math.min(6, adults + 1))}
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Anak-Anak</p>
                    <p className="text-[11px] text-slate-500">Usia 0 - 11 tahun</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-bold">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(Math.min(4, children + 1))}
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setGuestDropdownOpen(false)}
                  className="mt-3 w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800"
                >
                  Selesai
                </button>
              </div>
            )}
          </div>

          {/* Promo Code & Submit Button (Column 3) */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2">
            <div className="relative hidden lg:block">
              <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                name="codpromo"
                placeholder="Kode Promo (Opsional)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C69C6D]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C69C6D] via-[#D8B48D] to-[#B8860B] text-slate-950 font-bold text-sm tracking-wider uppercase shadow-glow hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Cek Ketersediaan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
