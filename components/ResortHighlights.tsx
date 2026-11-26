import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { RESORT_FACILITIES } from "@/data/hotelData";

export default function ResortHighlights() {
  return (
    <section id="facilities" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69C6D]/15 text-[#A37C4F] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C69C6D]" />
            Resort Facilities & Wellness
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2239] tracking-tight">
            Curated Resort Amenities Amidst Pristine Nature
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            From leisurely swims in our oceanfront lagoon pool and traditional herbal spa therapies, to majestic seaside nuptials and corporate gatherings.
          </p>
        </div>

        {/* 4 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESORT_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="group bg-[#FAF9F5] rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#C69C6D]/40 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A2239]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#D8B48D]">
                    {facility.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-[#0A2239] group-hover:text-[#A37C4F] transition-colors">
                    {facility.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{facility.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meeting & Wedding Inquiries Banner */}
        <div className="mt-14 bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C69C6D] block mb-2">
              MICE, Gatherings & Oceanfront Nuptials
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2239]">
              Host Your Visionary Events & Dream Weddings at Ketapang Indah
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Our dedicated event planning team orchestrates romantic seaside receptions, international symposia, and executive retreats with state-of-the-art audiovisual setups and bespoke culinary banquets.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/628113502280?text=Hello%20Ketapang%20Indah%20Hotel,%20I%20would%20like%20to%20consult%20regarding%20MICE%20or%20Wedding%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#0A2239] hover:bg-[#134057] text-white font-bold text-xs uppercase tracking-wider transition-all text-center"
            >
              Consult with Event Team
            </a>
            <a
              href="https://www.ketapangindahhotel.com/weddings/packages"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#0A2239]/20 hover:bg-white text-[#0A2239] font-bold text-xs uppercase tracking-wider transition-all text-center"
            >
              Download MICE Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
