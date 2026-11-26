import React from "react";
import Image from "next/image";
import { Compass, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { EXCURSIONS_DATA } from "@/data/hotelData";

export default function ExcursionsSection() {
  return (
    <section id="excursions" className="py-24 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69C6D]/15 text-[#A37C4F] text-xs font-bold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C69C6D]" />
            Banyuwangi Wonders & Excursions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2239] tracking-tight">
            The Premier Base for Mount Ijen & East Java
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Ketapang Indah Hotel is the favored staging hub for international explorers ascending to the Mount Ijen Blue Fire crater, crossing to Bali at dawn, and venturing on wild safaris in Baluran.
          </p>
        </div>

        {/* 3 Excursion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXCURSIONS_DATA.map((excursion) => (
            <div
              key={excursion.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={excursion.image}
                    alt={excursion.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 font-semibold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                      <MapPin className="w-3 h-3 text-[#C69C6D]" /> {excursion.distance}
                    </span>
                    <span className="flex items-center gap-1 font-semibold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-amber-400" /> {excursion.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#0A2239] group-hover:text-[#A37C4F] transition-colors">
                    {excursion.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {excursion.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://wa.me/628113502280?text=Hello%20Ketapang%20Indah%20Hotel,%20I%20would%20like%20to%20arrange%20a%20Mount%20Ijen%20tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-[#C69C6D] hover:text-slate-950 text-slate-800 font-semibold text-xs transition-all"
                >
                  <span>Arrange Tour & Certified Guide</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
