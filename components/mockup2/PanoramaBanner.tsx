import React from "react";
import Image from "next/image";
import { Sparkles, Sun, ShieldCheck, Coffee, Clock, Utensils } from "lucide-react";

export default function PanoramaBanner() {
  const privileges = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#FFB347]" />,
      title: "Best Rate Guarantee",
      desc: "Guaranteed lower rate than any third-party travel agent or OTA.",
    },
    {
      icon: <Coffee className="w-5 h-5 text-[#FFB347]" />,
      title: "Daily Oceanfront Breakfast",
      desc: "Complimentary breakfast buffet overlooking the morning tides.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#FFB347]" />,
      title: "Flexible Rescheduling",
      desc: "Priority adjustment and direct personal assistance via WhatsApp.",
    },
    {
      icon: <Utensils className="w-5 h-5 text-[#FFB347]" />,
      title: "10% Marlin Dining Privilege",
      desc: "Exclusive savings on dining and cocktails at Marlin Beach Club.",
    },
  ];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Full-bleed authentic photography */}
      <div className="absolute inset-0">
        <Image
          src="/images/mockup2/resort-sunrise-strait.jpg"
          alt="Golden Sunrise over the Bali Strait from Ketapang Indah Hotel"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.82]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001E3B]/90 via-[#001E3B]/70 to-[#001E3B]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFB347] text-xs font-bold uppercase tracking-widest mb-4">
            <Sun className="w-3.5 h-3.5 text-[#FFB347]" />
            Exclusive Dawn Horizon
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-[1.2]">
            Awaken to the Golden Dawn Across the Bali Strait
          </h2>
          <p className="mt-4 text-white/85 text-sm sm:text-base leading-relaxed">
            Unobstructed sea views where the morning sun paints the ocean in vibrant hues of amber and copper. Witness local outrigger catamarans gliding across the strait with the silhouettes of Bali’s peaks in the distance.
          </p>
        </div>

        {/* 4 Frosted Glass Privilege Cards - Tropical & Light */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {privileges.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-[#FFB347]/50 hover:bg-white/15 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/15">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center text-[11px] text-[#FFB347] font-semibold">
                <Sparkles className="w-3 h-3 mr-1.5" />
                <span>Official Direct Perk</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
