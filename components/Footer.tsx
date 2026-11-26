import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function Footer() {
  const waUrl = `https://wa.me/628113502280?text=${encodeURIComponent(
    "Hello Ketapang Indah Hotel, I would like to inquire about reservations."
  )}`;

  return (
    <footer className="bg-[#061524] text-white pt-20 pb-24 sm:pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 transition-opacity hover:opacity-90">
              <Image
                src="/images/logo-white.png"
                alt="Ketapang Indah Hotel"
                width={190}
                height={55}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-white/70 leading-relaxed pr-4 mb-6">
              A 4-star beachfront resort nestled across 6 hectares of tropical coconut palms in Banyuwangi. Offering peaceful seclusion, gentle ocean breezes from the Bali Strait, and the premier gateway to Mount Ijen.
            </p>

            <div className="flex items-center gap-2.5 text-xs text-white/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Website • Direct Booking Protection</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xs font-bold text-[#D8B48D] uppercase tracking-[0.2em] mb-5">
              Explore Resort
            </h3>
            <ul className="space-y-3 text-xs tracking-wide text-white/75 uppercase">
              <li>
                <a href="#rooms" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C69C6D]" /> Accommodations
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C69C6D]" /> Marlin Beach Club
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C69C6D]" /> The Omah Spa
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C69C6D]" /> Lagoon Pool
                </a>
              </li>
              <li>
                <a href="#excursions" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C69C6D]" /> Mount Ijen Trek
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Room Types (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xs font-bold text-[#D8B48D] uppercase tracking-[0.2em] mb-5">
              Accommodations
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Ocean View Suite (75 sqm)
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Cottage Garden View (32 sqm)
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Garden Superior Room (25 sqm)
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Superior Room (25 sqm)
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Standard Room (22 sqm)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & NAP (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xs font-bold text-[#D8B48D] uppercase tracking-[0.2em] mb-5">
              Contact & Reservations
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C69C6D] shrink-0 mt-1" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C69C6D] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white">
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp: +62 811 350 2280
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C69C6D] shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white">
                  {HOTEL_INFO.email}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <a
                href={HOTEL_INFO.bookingEngineBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C69C6D] to-[#B8860B] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all"
              >
                Official Online Booking
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Ketapang Indah Hotel Banyuwangi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Check-in: 02:00 PM</span>
            <span>•</span>
            <span>Check-out: 12:00 PM</span>
            <span>•</span>
            <span className="text-[#D8B48D]">Official Direct Web</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
