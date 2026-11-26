import React from "react";
import { MapPin, Navigation, Ship, Train, Plane, Car, MessageCircle } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function LocationMapTropical() {
  const hubs = [
    {
      name: "Ketapang Ferry Port (To Bali Island)",
      distance: "3.2 km",
      time: "5 Minutes",
      icon: <Ship className="w-4 h-4 text-sky-600" />,
    },
    {
      name: "Ketapang Railway Station (Banyuwangi Baru)",
      distance: "4.0 km",
      time: "7 Minutes",
      icon: <Train className="w-4 h-4 text-emerald-600" />,
    },
    {
      name: "Banyuwangi International Airport (BWX)",
      distance: "22 km",
      time: "35 Minutes",
      icon: <Plane className="w-4 h-4 text-purple-600" />,
    },
    {
      name: "Paltuding (Mount Ijen Basecamp)",
      distance: "38 km",
      time: "60 Minutes",
      icon: <Car className="w-4 h-4 text-amber-600" />,
    },
  ];

  return (
    <section id="location" className="py-28 bg-[#F3EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004583]/10 text-[#004583] text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#FFB347]" />
            Location & Transit Network
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00284D] tracking-tight">
            Seamless Connectivity in Banyuwangi
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Positioned directly along the coastal corridor, Ketapang Indah connects you effortlessly to ferry departures, railway links, and flight arrivals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Transit Breakdown (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="pb-6 border-b border-slate-100">
                <span className="text-[10px] uppercase font-bold text-[#FFB347] tracking-wider block mb-1">
                  Resort Coordinates
                </span>
                <h3 className="font-serif text-xl font-bold text-[#00284D]">
                  Ketapang Indah Hotel
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {HOTEL_INFO.address}
                </p>
              </div>

              {/* Transit Hubs */}
              <div className="mt-6 space-y-3">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                  Driving Travel Times:
                </span>
                {hubs.map((h, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-[#FAF8F5] rounded-2xl flex items-center justify-between text-xs sm:text-sm border border-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-xl shadow-xs">
                        {h.icon}
                      </div>
                      <span className="font-medium text-slate-800">{h.name}</span>
                    </div>
                    <div className="text-right ml-2 shrink-0">
                      <span className="font-bold text-[#004583] block">{h.time}</span>
                      <span className="text-[10px] text-slate-400">({h.distance})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shuttle Concierge Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://maps.google.com/?q=Ketapang+Indah+Hotel+Banyuwangi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>

              <a
                href="https://wa.me/628113502280?text=Hello%20Ketapang%20Indah%20Hotel,%20I%20would%20like%20to%20book%20an%20airport/station%20shuttle."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-[#004583] hover:bg-[#003366] text-white font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#FFB347]" />
                <span>Book Transfer</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-md relative min-h-[400px] lg:min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.810619077977!2d114.39050965!3d-8.1565578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15ab671c6d863%3A0x6b976451d8b671a5!2sKetapang%20Indah%20Hotel!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ketapang Indah Hotel Location Map Banyuwangi"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
