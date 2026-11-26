import React from "react";
import { Star, Award } from "lucide-react";
import { TESTIMONIALS } from "@/data/hotelData";

export default function GuestReviews() {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Overall Ratings */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69C6D]/15 text-[#A37C4F] text-xs font-bold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5 text-[#C69C6D]" />
              Guest Satisfaction & Trust
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2239] tracking-tight">
              Dipercaya Ribuan Pelancong dari Seluruh Dunia
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Keasrian kebun kelapa, panorama matahari terbit Selat Bali, dan kehangatan keramahan staf kami meninggalkan kenangan abadi bagi setiap tamu.
            </p>
          </div>

          {/* Rating Summary Badges */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {/* TripAdvisor Badge */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg font-serif">
                4.5
              </div>
              <div>
                <div className="flex items-center text-amber-500 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-900">TripAdvisor Travelers&apos; Choice</p>
                <p className="text-[11px] text-slate-500">2.100+ ulasan terverifikasi</p>
              </div>
            </div>

            {/* Google Reviews Badge */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg font-serif">
                4.6
              </div>
              <div>
                <div className="flex items-center text-amber-500 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-900">Google Reviews Rating</p>
                <p className="text-[11px] text-slate-500">3.800+ ulasan positif</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF9F5] rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                {/* Source & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                    {t.source}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-[#0A2239] mb-2 leading-snug">
                  &ldquo;{t.title}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-slate-500">{t.location}</p>
                </div>
                <span className="text-[11px] text-slate-400">{t.stayDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
