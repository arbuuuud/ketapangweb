import React from "react";
import Image from "next/image";
import { Utensils, Clock, MessageCircle, Sparkles, MapPin } from "lucide-react";

export default function DiningTropical() {
  const waDiningUrl = `https://wa.me/628113502280?text=${encodeURIComponent(
    "Hello Marlin Restaurant & Beach Club, I would like to reserve a beachfront table."
  )}`;

  return (
    <section id="dining" className="py-28 bg-[#001E3B] text-white relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#FFB347]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#004583]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#FFB347] text-xs font-bold uppercase tracking-widest mb-3">
              <Utensils className="w-3.5 h-3.5 text-[#FFB347]" />
              Beach Club & Coastal Dining
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Marlin Restaurant & Beach Club
            </h2>
            <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
              Dine with your toes near the sand as gentle waves lap against the coast. From slow-simmered Ayam Betutu Selat Bali to fresh catches of the day grilled over coconut husks.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={waDiningUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FFB347] via-[#FFC77A] to-[#E59830] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#FFB347]/30 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Reserve a Table</span>
            </a>
          </div>
        </div>

        {/* Asymmetric Visual Dining Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Card: Marlin Beach Club (7 cols) */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-[#FFB347]/40 transition-all duration-300 flex flex-col group">
            <div className="relative h-80 sm:h-96 w-full overflow-hidden">
              <Image
                src="/images/mockup2/dining-marlin-beachfront.jpg"
                alt="Marlin Restaurant & Beach Club Ketapang Indah Hotel"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001E3B] via-transparent to-transparent" />

              <div className="absolute top-5 left-5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FFB347]">
                Oceanfront Cabanas & Al Fresco Deck
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white/90">
                <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-[#FFB347]" /> 06:00 AM – 11:00 PM
                </span>
                <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" /> Bali Strait Oceanfront
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  Marlin Restaurant & Beach Club
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#FFB347] font-semibold mb-4">
                  Seaside Gastronomy, Craft Cocktails & Sunset Chill
                </p>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Welcoming in-house guests and outside travelers alike. Savor fresh seafood barbecues, contemporary Indonesian specialties, and hand-crafted tropical refreshments with the iconic sea horizon as your backdrop.
                </p>

                {/* Signature Dishes Grid */}
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFB347] block mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Chef&apos;s Signature Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/90">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#FFB347] mr-2 shrink-0" />
                      <span>Ayam Betutu Selat Bali</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#FFB347] mr-2 shrink-0" />
                      <span>Fresh Catch Grilled Snapper</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#FFB347] mr-2 shrink-0" />
                      <span>Banyuwangi Rujak Soto Fusion</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#FFB347] mr-2 shrink-0" />
                      <span>Tropical Sunset Breeze Colada</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Visual Secondary Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Top Card: Cocktails & Sunset Bar */}
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-[#FFB347]/40 transition-all flex flex-col group p-6 sm:p-7 flex-1 justify-between">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-full sm:w-44 h-40 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src="/images/mockup2/dining-sunset-cocktail.jpg"
                    alt="Beachfront cocktails at sunset"
                    fill
                    sizes="176px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#FFB347] tracking-wider block mb-1">
                    Sunset Sessions
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white mb-2">
                    Lagoon Pool & Sunset Bar
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed mb-3">
                    Relax on sunken pool loungers with freshly pressed coconuts, artisan cocktails, and light bites.
                  </p>
                  <span className="text-[11px] text-white/50 block">Open: 09:00 AM – 09:00 PM</span>
                </div>
              </div>
            </div>

            {/* Bottom Card: Wahoo Lounge */}
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-[#FFB347]/40 transition-all flex flex-col group p-6 sm:p-7 flex-1 justify-between">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-full sm:w-44 h-40 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src="/images/mockup2/dining-wahoo-lounge.jpg"
                    alt="Wahoo Lobby Lounge at Ketapang Indah Hotel"
                    fill
                    sizes="176px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#FFB347] tracking-wider block mb-1">
                    Indoor Lounge
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white mb-2">
                    Wahoo Lobby Lounge
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed mb-3">
                    A calm sanctuary for afternoon tea, specialty East Java coffees, business chats, and reading.
                  </p>
                  <span className="text-[11px] text-white/50 block">Open: 07:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
