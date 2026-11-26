import React from "react";
import { Star, Award, CheckCircle } from "lucide-react";

export default function GuestProofTropical() {
  const reviews = [
    {
      name: "Julian & Sophie Van Der Berg",
      origin: "Amsterdam, Netherlands",
      stay: "Stayed in Ocean View Suite",
      title: "Unforgettable Sunrise and Pure Coastal Peace",
      quote:
        "Ketapang Indah was the highlight of our Java itinerary. The coconut palm grove is vast and serene. Sitting at Marlin Beach Club at dawn with an espresso while watching the boats cross to Bali was pure magic.",
      rating: 5,
    },
    {
      name: "David & Marcus Miller",
      origin: "Sydney, Australia",
      stay: "Stayed in Cottage Garden View",
      title: "The Ultimate Basecamp for Mount Ijen Blue Fire",
      quote:
        "We left at midnight for the Ijen crater hike and returned at 7:30 AM. Taking a dip in the Olympic lagoon pool under palm trees right after was heaven. Exceptional service and hot power showers.",
      rating: 5,
    },
    {
      name: "Clarissa & Kevin Tan",
      origin: "Singapore",
      stay: "Stayed in Garden Superior Room",
      title: "Authentic Javanese Warmth & Beachfront Charm",
      quote:
        "The food at Marlin Restaurant is superb — don't miss the fresh grilled seafood and Ayam Betutu. The direct booking process gave us free breakfast and immediate WhatsApp support. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004583]/10 text-[#004583] text-xs font-bold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5 text-[#FFB347]" />
              Traveler Acclaim
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00284D] tracking-tight">
              Beloved by Global Explorers
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Read authentic impressions from travelers across the world who have made Ketapang Indah their coastal sanctuary in East Java.
            </p>
          </div>

          {/* Dual Rating Badges */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg font-serif">
                4.5
              </div>
              <div>
                <div className="flex items-center text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-900">TripAdvisor Travelers&apos; Choice</p>
                <p className="text-[11px] text-slate-500">2,100+ verified traveler reviews</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#004583] flex items-center justify-center text-white font-bold text-lg font-serif">
                4.6
              </div>
              <div>
                <div className="flex items-center text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-900">Google Verified Reviews</p>
                <p className="text-[11px] text-slate-500">3,800+ traveler ratings</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-emerald-600" /> Verified Stay
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#00284D] mb-3">
                  &ldquo;{r.title}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                <p className="text-xs text-slate-500">{r.origin}</p>
                <span className="text-[11px] text-[#004583] font-semibold block mt-1">
                  {r.stay}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
