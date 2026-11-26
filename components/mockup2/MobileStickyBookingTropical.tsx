"use client";

import React from "react";
import { Calendar, MessageCircle, ShieldCheck } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function MobileStickyBookingTropical() {
  const waUrl = `https://wa.me/628113502280?text=${encodeURIComponent(
    "Hello Ketapang Indah Hotel, I would like to reserve a room with the best rate guarantee."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#001E3B]/95 backdrop-blur-xl border-t border-white/15 px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between gap-3">
        {/* Price & Guarantee */}
        <div className="flex flex-col text-white">
          <div className="flex items-center gap-1 text-[10px] font-bold text-[#FFB347] uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-[#FFB347]" />
            <span>Best Rate Guaranteed</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] text-white/60">From</span>
            <span className="font-serif text-base font-bold text-white">
              IDR 580K
            </span>
            <span className="text-[10px] text-white/60">/ night</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Concierge"
            className="w-10 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md transition-all"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <a
            href={HOTEL_INFO.bookingEngineBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FFB347] via-[#FFC77A] to-[#E59830] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Stay</span>
          </a>
        </div>
      </div>
    </div>
  );
}
