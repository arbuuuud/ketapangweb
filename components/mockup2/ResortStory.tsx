import React from "react";
import Image from "next/image";
import { Palmtree, Compass, Sun, Waves, Sparkles } from "lucide-react";

export default function ResortStory() {
  return (
    <section id="story" className="py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle tropical background decor */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#FFB347]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#004583]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Narrative & Heritage Stats (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004583]/10 text-[#004583] text-xs font-bold uppercase tracking-widest">
              <Palmtree className="w-3.5 h-3.5 text-[#004583]" />
              The Coconut Grove Sanctuary
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00284D] tracking-tight leading-[1.2]">
              6 Hectares of Tropical Serenity Facing the Bali Strait
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Long before Banyuwangi emerged as the eco-adventure jewel of Java, Ketapang Indah was established as an idyllic haven where the soul could recalibrate. Shaded by hundreds of graceful coconut palms and cooled by gentle sea breezes, our resort preserves the authentic natural beauty of East Java.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you are preparing for a midnight ascent to Mount Ijen’s ethereal Blue Fire crater, crossing to the island of Bali at sunrise, or simply unwinding poolside with a tropical cocktail, every moment at Ketapang Indah is steeped in unhurried elegance.
            </p>

            {/* Quick Stat Badges with Organic Rounded Styling */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <span className="font-serif text-2xl font-bold text-[#004583] block">6 Ha</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Palm Gardens</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <span className="font-serif text-2xl font-bold text-[#004583] block">4★</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Beachfront Resort</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <span className="font-serif text-2xl font-bold text-[#004583] block">136</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Guest Rooms</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <span className="font-serif text-2xl font-bold text-[#004583] block">60 Mins</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">To Mount Ijen</span>
              </div>
            </div>

            {/* Features Row */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-700 font-medium">
              <span className="flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-[#FFB347]" /> Golden Sunrise Vistas
              </span>
              <span className="flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-sky-600" /> Oceanfront Beach Club
              </span>
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-600" /> Ijen Trek Concierge
              </span>
            </div>
          </div>

          {/* Right: Layered Asymmetric Photo Collage (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Large Photo - Coconut Palms & Grounds */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/mockup2/resort-grounds-1.jpg"
                  alt="Ketapang Indah Hotel 6-Hectare Coconut Palm Gardens"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#FFB347] font-bold block mb-1">
                    Authentic Resort Grounds
                  </span>
                  <p className="font-serif text-lg font-bold">
                    60,000 sqm of Shaded Coastal Gardens
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Photo - Lagoon Pool */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-64 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <Image
                  src="/images/mockup2/resort-pool-lagoon.jpg"
                  alt="Olympic-length lagoon swimming pool under palms"
                  fill
                  sizes="256px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-5 -right-5 bg-gradient-to-br from-[#004583] to-[#00284D] text-white p-4 rounded-3xl shadow-xl z-20 max-w-[190px] border border-white/20">
                <Sparkles className="w-5 h-5 text-[#FFB347] mb-1.5" />
                <p className="font-serif text-sm font-bold leading-snug">
                  Direct Oceanfront to Bali Strait
                </p>
                <span className="text-[10px] text-white/70 block mt-1">
                  Private beach lawn with uninterrupted island horizons.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
