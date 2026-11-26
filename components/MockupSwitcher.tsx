"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Layers } from "lucide-react";

interface MockupSwitcherProps {
  current: "mockup-1" | "mockup-2";
}

export default function MockupSwitcher({ current }: MockupSwitcherProps) {
  return (
    <aside
      aria-label="Mockup Version Switcher"
      className="fixed bottom-6 right-6 z-50 animate-fadeIn hidden sm:flex items-center gap-1.5 p-1.5 bg-[#001E3B]/90 backdrop-blur-xl rounded-full border border-white/25 shadow-2xl text-xs"
    >
      <div className="flex items-center gap-1 px-3 py-1 text-white/75 font-semibold tracking-wider uppercase text-[10px]">
        <Layers className="w-3.5 h-3.5 text-[#FFB347]" />
        <span>Mockup:</span>
      </div>

      <Link
        href="/mockup-1"
        className={`px-3.5 py-1.5 rounded-full font-semibold transition-all ${
          current === "mockup-1"
            ? "bg-white text-[#004583] shadow-md scale-105 font-bold"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        Version 1 (Classic)
      </Link>

      <Link
        href="/"
        className={`px-3.5 py-1.5 rounded-full font-semibold flex items-center gap-1 transition-all ${
          current === "mockup-2"
            ? "bg-gradient-to-r from-[#FFB347] to-[#E59830] text-slate-950 shadow-md scale-105 font-bold"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        <Sparkles className="w-3 h-3" />
        Version 2 (Tropical)
      </Link>
    </aside>
  );
}
