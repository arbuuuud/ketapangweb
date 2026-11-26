"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  BedDouble,
  Users,
  Check,
  Calendar,
  Sparkles,
  Info,
  X,
} from "lucide-react";
import { ROOMS_DATA, RoomItem } from "@/data/hotelData";

type CategoryFilter = "all" | "suite" | "cottage" | "superior" | "standard";

export default function RoomShowcase() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});

  const filteredRooms =
    activeFilter === "all"
      ? ROOMS_DATA
      : ROOMS_DATA.filter((r) => r.category === activeFilter);

  const handleImageSwitch = (roomId: string, index: number) => {
    setActiveImageIndices((prev) => ({ ...prev, [roomId]: index }));
  };

  return (
    <section id="rooms" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69C6D]/15 text-[#A37C4F] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C69C6D]" />
              Accommodations Collection
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2239] tracking-tight">
              Pilihan Kamar, Cottage & Suite
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Setiap kamar dirancang dengan memadukan kenyamanan modern dan keteduhan alam tropis Banyuwangi. Pilih suaka peristirahatan yang paling tepat untuk Anda dan keluarga.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-white/80 p-1.5 rounded-2xl border border-slate-200/80 shadow-sm shrink-0">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "all"
                  ? "bg-[#0A2239] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              Semua ({ROOMS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("suite")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "suite"
                  ? "bg-[#0A2239] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              Ocean View Suite
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("cottage")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "cottage"
                  ? "bg-[#0A2239] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              Cottage Kebun Kelapa
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("superior")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "superior"
                  ? "bg-[#0A2239] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              Superior
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("standard")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "standard"
                  ? "bg-[#0A2239] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              Standard
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredRooms.map((room) => {
            const currentImgIdx = activeImageIndices[room.id] || 0;
            const currentImg = room.images[currentImgIdx] || room.images[0];

            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col group"
              >
                {/* Photo Viewer with Switcher */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={currentImg}
                    alt={room.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    {room.badge ? (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C69C6D] text-slate-950 shadow-md">
                        {room.badge}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 text-white backdrop-blur-md">
                        Official Collection
                      </span>
                    )}

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-900 backdrop-blur-md shadow-sm">
                      {room.sqm} m²
                    </span>
                  </div>

                  {/* Thumbnail Switcher Pills */}
                  {room.images.length > 1 && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
                      {room.images.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleImageSwitch(room.id, idx)}
                          className={`w-8 h-8 rounded-lg overflow-hidden border-2 transition-all ${
                            idx === currentImgIdx
                              ? "border-[#C69C6D] scale-110 shadow-md"
                              : "border-white/60 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${room.name} thumb ${idx + 1}`}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Room Name on Photo */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <span className="text-[11px] uppercase tracking-wider text-white/80 block">
                      {room.view}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#0A2239]">
                      {room.name}
                    </h3>

                    {/* Quick Specs Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-4 py-3 border-y border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-[#C69C6D] shrink-0" />
                        <span>Luas {room.sqm} m²</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BedDouble className="w-4 h-4 text-[#C69C6D] shrink-0" />
                        <span className="truncate">{room.bedType}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                        <Users className="w-4 h-4 text-[#C69C6D] shrink-0" />
                        <span>Kapasitas {room.capacity}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features list */}
                    <ul className="mt-4 space-y-1.5">
                      {room.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                        Tarif Resmi Mulai Dari
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-2xl font-bold text-[#0A2239]">
                          {room.priceStart}
                        </span>
                        <span className="text-xs text-slate-500">/ malam</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 mt-0.5">
                        ✓ Termasuk Sarapan & Pajak
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedRoom(room)}
                        className="px-3.5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        title="Lihat Detail Lengkap"
                      >
                        <Info className="w-4 h-4 text-slate-500" />
                        <span>Detail</span>
                      </button>

                      <a
                        href={room.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#C69C6D] via-[#D8B48D] to-[#B8860B] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow hover:scale-[1.02] active:scale-95 transition-all"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Pesan Kamar Ini</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedRoom(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6">
              <Image
                src={selectedRoom.images[0]}
                alt={selectedRoom.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#C69C6D] text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                {selectedRoom.sqm} m² • {selectedRoom.view}
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2239]">
              {selectedRoom.name}
            </h3>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              {selectedRoom.description}
            </p>

            <div className="my-6 grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl text-xs sm:text-sm text-slate-800">
              <div>
                <span className="text-slate-400 block text-xs">Tempat Tidur</span>
                <span className="font-semibold">{selectedRoom.bedType}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Kapasitas Tamu</span>
                <span className="font-semibold">{selectedRoom.capacity}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Pemandangan</span>
                <span className="font-semibold">{selectedRoom.view}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Tarif Mulai</span>
                <span className="font-semibold text-emerald-700">{selectedRoom.priceStart}</span>
              </div>
            </div>

            <h4 className="font-serif text-base font-bold text-[#0A2239] mb-3">
              Fasilitas & Keunggulan Kamar:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {selectedRoom.features.map((feat, idx) => (
                <div key={idx} className="flex items-center text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div>
                <span className="text-xs text-slate-500">Tarif Resmi Langsung</span>
                <p className="font-serif text-2xl font-bold text-[#0A2239]">
                  {selectedRoom.priceStart}
                </p>
              </div>
              <a
                href={selectedRoom.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C69C6D] via-[#D8B48D] to-[#B8860B] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
              >
                Lanjutkan Pemesanan
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
