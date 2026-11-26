"use client";

import React from "react";
import { Calendar, MessageCircle, ShieldCheck } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function MobileStickyBooking() {
  const waUrl = `https://wa.me/628113502280?text=${encodeURIComponent(
    "Halo Ketapang Indah Hotel, saya ingin booking kamar dengan jaminan best rate promo website."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/80 px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between gap-3">
        {/* Price & Guarantee Teaser */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Best Rate Guaranteed</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] text-slate-500">Mulai</span>
            <span className="font-serif text-base font-bold text-[#0A2239]">
              IDR 580K
            </span>
            <span className="text-[10px] text-slate-400">/ malam</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi WhatsApp"
            className="w-10 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm transition-all"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <a
            href={HOTEL_INFO.bookingEngineBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C69C6D] via-[#D8B48D] to-[#B8860B] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Pesan Sekarang</span>
          </a>
        </div>
      </div>
    </div>
  );
}
