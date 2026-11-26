"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Camera } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "pool" | "spa" | "wedding" | "grounds";
  categoryLabel: string;
  image: string;
  sizeClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Lagoon Swimming Pool Beneath Towering Palms",
    category: "pool",
    categoryLabel: "Lagoon Pool",
    image: "/images/mockup2/resort-pool-lagoon.jpg",
    sizeClass: "col-span-1 md:col-span-2 row-span-2 h-[380px] md:h-[460px]",
  },
  {
    id: "g-2",
    title: "The Omah Spa Outdoor Botanical Massage",
    category: "spa",
    categoryLabel: "Spa & Wellness",
    image: "/images/mockup2/spa-garden-massage.jpg",
    sizeClass: "col-span-1 md:col-span-1 row-span-1 h-[220px]",
  },
  {
    id: "g-3",
    title: "Oceanfront Wedding Ceremony by the Bali Strait",
    category: "wedding",
    categoryLabel: "Weddings & Celebrations",
    image: "/images/mockup2/wedding-beachfront-altar.jpg",
    sizeClass: "col-span-1 md:col-span-1 row-span-1 h-[220px]",
  },
  {
    id: "g-4",
    title: "Lush Coconut Grove Walkways & Flora",
    category: "grounds",
    categoryLabel: "Tropical Grounds",
    image: "/images/mockup2/resort-garden-path.jpg",
    sizeClass: "col-span-1 md:col-span-1 row-span-1 h-[220px]",
  },
  {
    id: "g-5",
    title: "Secluded Beachfront Shaded by Coconut Palms",
    category: "grounds",
    categoryLabel: "Beachfront",
    image: "/images/mockup2/resort-beachfront-palms.jpg",
    sizeClass: "col-span-1 md:col-span-1 row-span-1 h-[220px]",
  },
  {
    id: "g-6",
    title: "Cengkeh Grand Ballroom for High-Level Symposia",
    category: "wedding",
    categoryLabel: "MICE & Events",
    image: "/images/mockup2/event-grand-ballroom.jpg",
    sizeClass: "col-span-1 md:col-span-2 row-span-1 h-[220px]",
  },
];

export default function ResortGalleryMosaic() {
  const [filter, setFilter] = useState<string>("all");

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004583]/10 text-[#004583] text-xs font-bold uppercase tracking-widest mb-3">
              <Camera className="w-3.5 h-3.5 text-[#FFB347]" />
              Resort Life & Photo Gallery
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00284D] tracking-tight">
              Life at Ketapang Indah
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Every vista captures the authentic soul of our 6-hectare coastal estate. Explore moments of deep tranquility, celebrations, and wellness.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Moments" },
              { id: "pool", label: "Pool" },
              { id: "spa", label: "The Omah Spa" },
              { id: "wedding", label: "Weddings & MICE" },
              { id: "grounds", label: "Coconut Grounds" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === tab.id
                    ? "bg-[#004583] text-white shadow-md scale-105"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Asymmetric Mosaic Grid (No boxy borders!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group ${item.sizeClass}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag & Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFB347] block mb-1">
                  {item.categoryLabel}
                </span>
                <p className="font-serif text-base sm:text-lg font-bold leading-snug drop-shadow-md">
                  {item.title}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-white flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#FFB347]" />
                <span>Ketapang Indah Official</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
