"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BedDouble,
  Maximize2,
  Users,
  Check,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface EditorialRoom {
  id: string;
  name: string;
  tagline: string;
  category: string;
  sqm: number;
  bedType: string;
  capacity: string;
  view: string;
  priceStart: string;
  description: string;
  images: string[];
  features: string[];
  bookingUrl: string;
}

const EDITORIAL_ROOMS: EditorialRoom[] = [
  {
    id: "ocean-view-suite",
    name: "Ocean View Suite",
    tagline: "Our Signature Coastal Sanctuary",
    category: "Signature Suite",
    sqm: 75,
    bedType: "1 Super King Bed (200x200)",
    capacity: "2 Adults + 1 Child",
    view: "Direct Bali Strait & Coconut Grove",
    priceStart: "IDR 1,850,000",
    description:
      "Perched to capture the sunrise across the Bali Strait, our Ocean View Suite offers 75 square meters of contemporary coastal luxury. Featuring an expansive private living pavilion, marble en-suite bathroom with deep soaking tub, and a private terrace overlooking azure waves.",
    images: [
      "/images/mockup2/room-suite-panoramic.jpg",
      "/images/rooms/ocean-suite-1.jpg",
      "/images/rooms/ocean-suite-2.jpg",
    ],
    features: [
      "Expansive oceanfront terrace facing Bali Strait",
      "Separate elegant lounge & dining area",
      "Marble bathroom with deep soaking bathtub",
      "Complimentary gourmet daily breakfast",
      "Espresso machine & luxury amenities",
      "Priority check-in & late checkout privilege",
    ],
    bookingUrl:
      "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm?idioma=en",
  },
  {
    id: "cottage-garden-view",
    name: "Cottage Garden View",
    tagline: "Secluded Tropical Haven",
    category: "Private Cottage",
    sqm: 32,
    bedType: "King Bed or Hollywood Twin",
    capacity: "2 Adults + 1 Child",
    view: "Lush Coconut Palm Gardens",
    priceStart: "IDR 950,000",
    description:
      "Tucked discretely beneath towering coconut palms, each detached garden cottage celebrates traditional East Javanese architecture paired with modern comforts. A shaded private veranda opens directly to tranquil green lawns.",
    images: [
      "/images/mockup2/room-cottage-exterior.jpg",
      "/images/mockup2/room-cottage-interior.jpg",
      "/images/rooms/cottage-garden-1.jpg",
    ],
    features: [
      "Detached standalone cottage for utmost privacy",
      "Private breezy veranda with garden armchairs",
      "Lush palm grove surroundings",
      "Contemporary en-suite rain shower",
      "Work desk & high-speed Wi-Fi",
      "Includes daily breakfast at Marlin Restaurant",
    ],
    bookingUrl:
      "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm?idioma=en",
  },
  {
    id: "garden-superior",
    name: "Garden Superior Room",
    tagline: "Charming Garden Living",
    category: "Garden View",
    sqm: 25,
    bedType: "King Bed or Twin Beds",
    capacity: "2 Adults",
    view: "Manicured Botanical Gardens",
    priceStart: "IDR 780,000",
    description:
      "Designed for restful retreats, the Garden Superior balances natural wood elements with warm coastal palettes. The room opens out onto soothing green pathways leading towards the lagoon pool.",
    images: [
      "/images/rooms/garden-superior-1.jpg",
      "/images/rooms/garden-superior-2.jpg",
    ],
    features: [
      "Private patio / balcony facing gardens",
      "Crisp luxury linens & blackout drapes",
      "Mini refrigerator & coffee maker",
      "Individual climate control",
      "Includes daily oceanfront breakfast",
    ],
    bookingUrl:
      "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm?idioma=en",
  },
  {
    id: "superior-room",
    name: "Superior Room",
    tagline: "Refined Modern Comfort",
    category: "Resort Wing",
    sqm: 25,
    bedType: "King Bed or Twin Beds",
    capacity: "2 Adults",
    view: "Tropical Courtyard",
    priceStart: "IDR 680,000",
    description:
      "Located in the resort’s main wings, the Superior Room provides an elegant sanctuary with rich timber textures, plush bedding, and seamless proximity to the pool and restaurant.",
    images: [
      "/images/mockup2/room-superior-balcony.jpg",
      "/images/rooms/superior-1.jpg",
      "/images/rooms/superior-2.jpg",
    ],
    features: [
      "Comfortable seating & workspace",
      "Fast optical fiber Wi-Fi",
      "Flat screen LED TV with satellite channels",
      "Direct access to lagoon pool pathways",
      "Includes complimentary breakfast",
    ],
    bookingUrl:
      "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm?idioma=en",
  },
  {
    id: "standard-room",
    name: "Standard Room",
    tagline: "Intimate Base for Explorers",
    category: "Explorer Wing",
    sqm: 22,
    bedType: "Double Bed or Twin Beds",
    capacity: "2 Adults",
    view: "Courtyard Greenery",
    priceStart: "IDR 580,000",
    description:
      "The perfect sanctuary for adventurous travelers visiting Mount Ijen or en route to Bali. Efficient, impeccably maintained, and accompanied by the full spectrum of 4-star resort amenities.",
    images: [
      "/images/mockup2/room-standard-cozy.jpg",
      "/images/rooms/standard-1.jpg",
      "/images/rooms/standard-2.jpg",
    ],
    features: [
      "Quiet accommodation in central wing",
      "Refreshing hot power shower",
      "Air conditioning & bottled spring water",
      "Full access to resort pool & beach club",
      "Best direct rate guaranteed",
    ],
    bookingUrl:
      "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm?idioma=en",
  },
];

export default function RoomShowcaseEditorial() {
  const [activeRoomId, setActiveRoomId] = useState("ocean-view-suite");
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const activeRoom =
    EDITORIAL_ROOMS.find((r) => r.id === activeRoomId) || EDITORIAL_ROOMS[0];

  const handleRoomChange = (id: string) => {
    setActiveRoomId(id);
    setActivePhotoIdx(0);
  };

  return (
    <section id="accommodations" className="py-28 bg-[#F3EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004583]/10 text-[#004583] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB347]" />
              Accommodations Collection
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00284D] tracking-tight">
              Suites, Garden Cottages & Rooms
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Every sanctuary is designed to harmoniously embrace Banyuwangi’s coastal landscape, offering generous space and serene seclusion.
            </p>
          </div>

          {/* Direct Privilege Note */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 text-xs font-semibold text-emerald-800 shrink-0 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Includes Daily Breakfast & Taxes</span>
          </div>
        </div>

        {/* Room Category Tabs - Modern Sleek Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {EDITORIAL_ROOMS.map((room) => {
            const isActive = room.id === activeRoomId;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => handleRoomChange(room.id)}
                className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#004583] text-white shadow-lg scale-105"
                    : "bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/70"
                }`}
              >
                <span>{room.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-[#FFB347]" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {room.sqm} m²
                </span>
              </button>
            );
          })}
        </div>

        {/* FEATURED EDITORIAL ROOM STAGE (Large Photo + Story Panel) */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left: Expansive Cinematic Photo Canvas (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] bg-slate-950 overflow-hidden group">
            <Image
              src={activeRoom.images[activePhotoIdx] || activeRoom.images[0]}
              alt={activeRoom.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

            {/* Top Badge: Category & View */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FFB347] text-slate-950 shadow-md">
                {activeRoom.category}
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/50 text-white backdrop-blur-md">
                {activeRoom.view}
              </span>
            </div>

            {/* Bottom Gallery Thumbnail Switcher */}
            {activeRoom.images.length > 1 && (
              <div className="absolute bottom-6 left-6 flex items-center gap-2.5 z-10">
                {activeRoom.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                      idx === activePhotoIdx
                        ? "border-[#FFB347] scale-110 shadow-lg ring-2 ring-[#FFB347]/50"
                        : "border-white/60 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${activeRoom.name} view ${idx + 1}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Editorial Narrative & Specifications (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FFB347] block mb-1">
                {activeRoom.tagline}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#00284D]">
                {activeRoom.name}
              </h3>

              {/* Quick Specs Pill Row */}
              <div className="grid grid-cols-3 gap-3 my-6 py-4 border-y border-slate-100 text-xs">
                <div>
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Maximize2 className="w-3.5 h-3.5 text-[#004583]" />
                    <span className="uppercase text-[10px] font-bold">Space</span>
                  </div>
                  <span className="font-bold text-[#00284D]">{activeRoom.sqm} sqm</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <BedDouble className="w-3.5 h-3.5 text-[#004583]" />
                    <span className="uppercase text-[10px] font-bold">Bedding</span>
                  </div>
                  <span className="font-bold text-[#00284D] truncate block">{activeRoom.bedType}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Users className="w-3.5 h-3.5 text-[#004583]" />
                    <span className="uppercase text-[10px] font-bold">Guests</span>
                  </div>
                  <span className="font-bold text-[#00284D]">{activeRoom.capacity}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {activeRoom.description}
              </p>

              {/* Highlight Features */}
              <div className="space-y-2 mb-8">
                {activeRoom.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Direct Reservation Action */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                  Official Direct Rate
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-3xl font-bold text-[#004583]">
                    {activeRoom.priceStart}
                  </span>
                  <span className="text-xs text-slate-500">/ night</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                  ✓ Complimentary Breakfast & Taxes Included
                </span>
              </div>

              <a
                href={activeRoom.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#FFB347] via-[#FFC77A] to-[#E59830] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#FFB347]/30 hover:scale-[1.02] active:scale-95 transition-all text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Room</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
