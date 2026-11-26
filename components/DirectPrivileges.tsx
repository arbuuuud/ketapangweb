import React from "react";
import {
  ShieldCheck,
  Coffee,
  Sparkles,
  Clock,
  Utensils,
  RefreshCw,
  Gift,
  CheckCircle2,
} from "lucide-react";
import { DIRECT_PRIVILEGES } from "@/data/hotelData";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#C69C6D]" />,
  Coffee: <Coffee className="w-6 h-6 text-[#C69C6D]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#C69C6D]" />,
  Clock: <Clock className="w-6 h-6 text-[#C69C6D]" />,
  Utensils: <Utensils className="w-6 h-6 text-[#C69C6D]" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-[#C69C6D]" />,
};

export default function DirectPrivileges() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C69C6D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A2239]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69C6D]/15 border border-[#C69C6D]/30 text-[#A37C4F] text-xs font-bold uppercase tracking-widest mb-3">
            <Gift className="w-3.5 h-3.5 text-[#C69C6D]" />
            Official Booking Privileges
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2239] tracking-tight">
            Exclusive Privileges When You Reserve Directly
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Experience genuine peace of mind without hidden intermediary markups. Our official direct website ensures our lowest price guarantee, flexible dates, and bespoke benefits designed for your stay.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIRECT_PRIVILEGES.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-card border border-slate-100 hover:border-[#C69C6D]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] group-hover:bg-[#C69C6D]/15 border border-[#C69C6D]/20 flex items-center justify-center transition-colors mb-5">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0A2239] group-hover:text-[#A37C4F] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
                <span>Automatically applied on direct bookings</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#061524] to-[#134057] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C69C6D]/20 border border-[#C69C6D]/40 flex items-center justify-center text-[#D8B48D] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold">
                Found a lower published rate elsewhere?
              </h3>
              <p className="text-xs sm:text-sm text-white/80">
                We will gladly match that price and provide an additional 5% courtesy discount on your direct stay.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/628113502280?text=Hello%20Ketapang%20Indah%20Hotel,%20I%20would%20like%20to%20claim%20the%20Best%20Rate%20Guarantee."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full bg-[#C69C6D] hover:bg-[#D8B48D] text-slate-950 transition-all shadow-md"
          >
            Claim Best Rate via Concierge
          </a>
        </div>
      </div>
    </section>
  );
}
