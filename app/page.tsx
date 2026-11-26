import React from "react";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import MockupSwitcher from "@/components/MockupSwitcher";
import NavbarTropical from "@/components/mockup2/NavbarTropical";
import HeroCinematic from "@/components/mockup2/HeroCinematic";
import ResortStory from "@/components/mockup2/ResortStory";
import RoomShowcaseEditorial from "@/components/mockup2/RoomShowcaseEditorial";
import PanoramaBanner from "@/components/mockup2/PanoramaBanner";
import DiningTropical from "@/components/mockup2/DiningTropical";
import ResortGalleryMosaic from "@/components/mockup2/ResortGalleryMosaic";
import ExcursionsEditorial from "@/components/mockup2/ExcursionsEditorial";
import GuestProofTropical from "@/components/mockup2/GuestProofTropical";
import LocationMapTropical from "@/components/mockup2/LocationMapTropical";
import MobileStickyBookingTropical from "@/components/mockup2/MobileStickyBookingTropical";
import FooterTropical from "@/components/mockup2/FooterTropical";

export default function HomePage() {
  return (
    <main className="min-h-screen relative flex flex-col bg-[#FAF8F5] text-[#142231]">
      {/* Schema.org Deep Knowledge Graph */}
      <SchemaJsonLd />

      {/* Floating Mockup Switcher (Allows instant switching to Mockup 1) */}
      <MockupSwitcher current="mockup-2" />

      {/* Transparent Glass Navigation Bar */}
      <NavbarTropical />

      {/* Full-Screen Edge-to-Edge Cinematic Hero with Floating Glass Capsule */}
      <HeroCinematic />

      {/* 6-Hectare Tropical Coconut Grove Sanctuary Narrative */}
      <ResortStory />

      {/* Magazine Editorial Accommodations Showcase (Rooms, Cottages, Suites) */}
      <RoomShowcaseEditorial />

      {/* Full-Bleed Experiential Dawn Horizon Banner & Direct Privileges */}
      <PanoramaBanner />

      {/* Marlin Beach Club & Sunset Coastal Gastronomy */}
      <DiningTropical />

      {/* Asymmetric Photo Mosaic (Pool, Spa, Beach, Grounds, Weddings) */}
      <ResortGalleryMosaic />

      {/* Regional Adventures: Midnight Mount Ijen Blue Fire Basecamp */}
      <ExcursionsEditorial />

      {/* Global Guest Proof & TripAdvisor / Google Ratings */}
      <GuestProofTropical />

      {/* Geographic Connectivity & Transfer Services */}
      <LocationMapTropical />

      {/* Mobile Sticky Quick Booking */}
      <MobileStickyBookingTropical />

      {/* Tropical Resort Footer */}
      <FooterTropical />
    </main>
  );
}
