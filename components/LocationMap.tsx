import React from "react";
import { MapPin, Navigation, Car, Ship, Train, Plane } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

const TRANSIT_HUBS = [
  {
    name: "Pelabuhan Feri Ketapang (Penyeberangan Bali)",
    distance: "3,2 km",
    time: "5 Menit",
    icon: <Ship className="w-4 h-4 text-sky-600" />,
  },
  {
    name: "Stasiun Kereta Api Ketapang (Banyuwangi Baru)",
    distance: "4,0 km",
    time: "7 Menit",
    icon: <Train className="w-4 h-4 text-emerald-600" />,
  },
  {
    name: "Bandara Internasional Banyuwangi (BWX)",
    distance: "22 km",
    time: "35 Menit",
    icon: <Plane className="w-4 h-4 text-purple-600" />,
  },
  {
    name: "Paltuding (Basecamp Pendakian Kawah Ijen)",
    distance: "38 km",
    time: "60 Menit",
    icon: <Car className="w-4 h-4 text-amber-600" />,
  },
];

export default function LocationMap() {
  const mapQueryUrl =
    "https://maps.google.com/?q=Ketapang+Indah+Hotel+Banyuwangi";

  return (
    <section id="location" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69C6D]/15 text-[#A37C4F] text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C69C6D]" />
            Prime Location & Access
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2239] tracking-tight">
            Lokasi Sangat Strategis di Pesisir Banyuwangi
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Hanya beberapa menit dari dermaga feri menuju Pulau Bali dan stasiun kereta api utama, serta menjadi titik tolak ternyaman menuju pendakian Kawah Ijen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Location Points & Shuttle Service */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3 pb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#C69C6D]/15 border border-[#C69C6D]/30 flex items-center justify-center text-[#A37C4F] shrink-0">
                  <MapPin className="w-5 h-5 text-[#C69C6D]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A2239]">
                    Alamat Resmi Resor
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {HOTEL_INFO.address}
                  </p>
                </div>
              </div>

              {/* Transit Distance List */}
              <div className="mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Waktu Tempuh Titik Transportasi:
                </span>
                <div className="space-y-3">
                  {TRANSIT_HUBS.map((hub, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#FAF9F5] rounded-xl flex items-center justify-between text-xs sm:text-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 bg-white rounded-lg border border-slate-100">
                          {hub.icon}
                        </div>
                        <span className="font-medium text-slate-800">{hub.name}</span>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <span className="font-bold text-[#0A2239] block">{hub.time}</span>
                        <span className="text-[11px] text-slate-400">({hub.distance})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shuttle Service Card */}
            <div className="mt-8 pt-6 border-t border-slate-100 bg-[#FAF7F2] p-4 rounded-2xl">
              <p className="text-xs font-bold text-[#0A2239] mb-1">
                Butuh Antar-Jemput Stasiun / Bandara?
              </p>
              <p className="text-[11px] text-slate-600 mb-3">
                Hotel menyediakan armada mobil ber-AC dan sopir terpercaya untuk penjemputan Anda.
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={mapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Buka Google Maps</span>
                </a>
                <a
                  href="https://wa.me/628113502280?text=Halo%20Ketapang%20Indah%20Hotel,%20saya%20ingin%20memesan%20layanan%20shuttle%20antar-jemput."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#C69C6D] hover:bg-[#D8B48D] text-slate-950 font-bold text-xs text-center transition-colors"
                >
                  Pesan Shuttle
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Map Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm relative min-h-[380px] lg:min-h-[460px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.810619077977!2d114.39050965!3d-8.1565578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15ab671c6d863%3A0x6b976451d8b671a5!2sKetapang%20Indah%20Hotel!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Ketapang Indah Hotel Banyuwangi"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
