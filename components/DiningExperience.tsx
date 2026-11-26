import React from "react";
import Image from "next/image";
import { Utensils, Clock, Sparkles, MessageCircle } from "lucide-react";
import { DINING_DATA } from "@/data/hotelData";

export default function DiningExperience() {
  const waDiningUrl = `https://wa.me/628113502280?text=${encodeURIComponent(
    "Halo Marlin Restaurant & Beach Club, saya ingin reservasi meja / menanyakan menu santap tepi pantai."
  )}`;

  return (
    <section id="dining" className="py-24 bg-[#0A2239] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C69C6D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#134057]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D8B48D] text-xs font-bold uppercase tracking-widest mb-3 border border-white/15">
            <Utensils className="w-3.5 h-3.5 text-[#C69C6D]" />
            Culinary Journeys & Beach Club
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Sensasi Kuliner Pesisir & Santap Tepi Laut
          </h2>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            Dari hidangan legendaris Ayam Betutu Selat Bali hingga tangkapan laut segar bakar kayu, nikmati kelezatan rasa dengan latar suara deburan ombak dan siluet pulau Bali.
          </p>
        </div>

        {/* Dining Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {DINING_DATA.map((venue) => (
            <div
              key={venue.id}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-[#C69C6D]/50 transition-all duration-300 flex flex-col group"
            >
              {/* Photo */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2239] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-[#0A2239]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#D8B48D] border border-white/10">
                  {venue.atmosphere}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-[#C69C6D]" /> {venue.hours}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D8B48D] transition-colors">
                    {venue.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#C69C6D] mt-1 mb-4 font-semibold">
                    {venue.tagline}
                  </p>
                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    {venue.description}
                  </p>

                  {/* Signature Dishes */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D8B48D] block mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Menu Rekomendasi Chef:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {venue.signatureDishes.map((dish, i) => (
                        <div key={i} className="flex items-center text-xs text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C69C6D] mr-2" />
                          <span>{dish}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reservation Action */}
                <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-white/60">
                    <span>Terbuka untuk tamu menginap & pengunjung luar</span>
                  </div>
                  <a
                    href={waDiningUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C69C6D] hover:bg-[#D8B48D] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-slate-950" />
                    <span>Reservasi Meja</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
