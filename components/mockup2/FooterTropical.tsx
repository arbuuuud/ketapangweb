import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck, ChevronRight } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function FooterTropical() {
  const waUrl = `https://wa.me/628113502280?text=${encodeURIComponent(
    "Hello Ketapang Indah Hotel, I would like to inquire about reservations."
  )}`;

  return (
    <footer className="bg-[#001E3B] text-white pt-24 pb-28 sm:pb-14 border-t border-white/10 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB347]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo-white.png"
                alt="Ketapang Indah Hotel"
                width={190}
                height={55}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-white/75 leading-relaxed pr-4 mb-6">
              A 4-star beachfront haven nestled across 6 hectares of shaded coconut palms in Banyuwangi. Offering unhurried coastal elegance, uninterrupted Bali Strait sunrises, and prime proximity to Mount Ijen.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#FFB347]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span className="font-semibold">Official Direct Booking Protection</span>
            </div>
          </div>

          {/* Col 2: Resort Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xs font-bold text-[#FFB347] uppercase tracking-[0.2em] mb-6">
              The Resort
            </h4>
            <ul className="space-y-3 text-xs tracking-wider uppercase text-white/75">
              <li>
                <a href="#story" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFB347]" /> Our Story
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFB347]" /> Accommodations
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFB347]" /> Marlin Beach Club
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFB347]" /> Photo Gallery
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFB347]" /> Mount Ijen
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Room Types (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xs font-bold text-[#FFB347] uppercase tracking-[0.2em] mb-6">
              Suites & Cottages
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/75">
              <li>
                <a href="#accommodations" className="hover:text-white transition-colors">
                  Ocean View Suite (75 sqm)
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-white transition-colors">
                  Cottage Garden View (32 sqm)
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-white transition-colors">
                  Garden Superior Room (25 sqm)
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-white transition-colors">
                  Superior Room (25 sqm)
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-white transition-colors">
                  Standard Room (22 sqm)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct Inquiries (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xs font-bold text-[#FFB347] uppercase tracking-[0.2em] mb-6">
              Contact & Concierge
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/75 mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFB347] shrink-0 mt-1" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFB347] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white">
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp: +62 811 350 2280
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFB347] shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white">
                  {HOTEL_INFO.email}
                </a>
              </div>
            </div>

            <a
              href={HOTEL_INFO.bookingEngineBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center py-3 px-4 rounded-full bg-gradient-to-r from-[#FFB347] to-[#E59830] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all text-center"
            >
              Check Availability Online
            </a>
          </div>
        </div>

        {/* Bottom Policy & Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Ketapang Indah Hotel Banyuwangi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Check-in: 02:00 PM</span>
            <span>•</span>
            <span>Check-out: 12:00 PM</span>
            <span>•</span>
            <span className="text-[#FFB347]">Official Web Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
