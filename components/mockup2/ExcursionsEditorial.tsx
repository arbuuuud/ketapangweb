import React from "react";
import Image from "next/image";
import { Compass, Clock, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";

export default function ExcursionsEditorial() {
  const excursions = [
    {
      title: "Mount Ijen Blue Fire Crater Trek",
      distance: "38 km (60 mins to basecamp)",
      timing: "12:00 AM Departure • Return for Breakfast",
      image: "/images/facilities/ijen-tour.jpg",
      desc: "Hike to the world-renowned turquoise acidic crater lake and witness the rare natural phenomenon of electric-blue sulfur flames under the midnight sky.",
    },
    {
      title: "Baluran National Park Safari",
      distance: "35 km (45 mins drive)",
      timing: "Half-day morning or sunset safari",
      image: "/images/mockup2/resort-sunrise-strait.jpg",
      desc: "Known as Java’s 'Little Africa', explore sweeping savanna landscapes home to wild water buffalos, peacocks, javan leopards, and Bama beach.",
    },
    {
      title: "Bali Strait Ferry Crossing",
      distance: "3.2 km (5 mins to Ketapang Port)",
      timing: "Ferries depart every 20 minutes (24/7)",
      image: "/images/mockup2/resort-beachfront-palms.jpg",
      desc: "Ketapang Indah is the ultimate transit sanctuary between Java and Bali. Enjoy a restful night’s sleep before your effortless 45-minute ferry crossing.",
    },
  ];

  return (
    <section id="experiences" className="py-28 bg-[#F3EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004583]/10 text-[#004583] text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-[#FFB347]" />
              Regional Expeditions & Basecamp
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00284D] tracking-tight">
              The Preferred Basecamp for Mount Ijen
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Ascend to volcanic peaks at midnight, return to soothing garden pool waters and a chef-crafted breakfast by morning. Our concierge coordinates verified guides and private 4WD transport.
            </p>
          </div>

          <a
            href="https://wa.me/628113502280?text=Hello%20Ketapang%20Indah%20Hotel,%20I%20would%20like%20to%20arrange%20a%20Mount%20Ijen%20tour."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#004583] hover:bg-[#003366] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#FFB347]" />
            <span>Consult Tour Concierge</span>
          </a>
        </div>

        {/* 3 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {excursions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-slate-200/80"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 font-semibold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                      <MapPin className="w-3 h-3 text-[#FFB347]" /> {item.distance}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.timing}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#00284D] mb-3 group-hover:text-[#004583] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://wa.me/628113502280?text=Hello%20Ketapang%20Indah%20Hotel,%20I%20would%20like%20information%20on%20this%20tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#FAF8F5] hover:bg-[#FFB347] hover:text-slate-950 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Book Private Transport & Guide</span>
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
