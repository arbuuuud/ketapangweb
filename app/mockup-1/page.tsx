import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingEngineBar from "@/components/BookingEngineBar";
import DirectPrivileges from "@/components/DirectPrivileges";
import RoomShowcase from "@/components/RoomShowcase";
import DiningExperience from "@/components/DiningExperience";
import ResortHighlights from "@/components/ResortHighlights";
import ExcursionsSection from "@/components/ExcursionsSection";
import GuestReviews from "@/components/GuestReviews";
import LocationMap from "@/components/LocationMap";
import MobileStickyBooking from "@/components/MobileStickyBooking";
import Footer from "@/components/Footer";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import MockupSwitcher from "@/components/MockupSwitcher";

export default function Mockup1Page() {
  return (
    <main className="min-h-screen relative flex flex-col bg-[#FAF9F5]">
      {/* Schema.org Deep Knowledge Graph for Search & AI Engines */}
      <SchemaJsonLd />

      {/* Switcher Pill */}
      <MockupSwitcher current="mockup-1" />

      {/* Main Transparent / Solid Navigation Bar */}
      <Navbar />

      {/* Cinematic Resort Hero Section */}
      <Hero />

      {/* Floating High-Conversion Direct Booking Bar */}
      <BookingEngineBar />

      {/* Value Proposition: Keuntungan Memesan Langsung di Website Resmi */}
      <DirectPrivileges />

      {/* Curated Accommodations Collection (Rooms, Cottages, Suites) */}
      <RoomShowcase />

      {/* Oceanfront Culinary Journeys: Marlin Beach Club & Wahoo Lounge */}
      <DiningExperience />

      {/* Resort Lifestyle & Amenities: Pool, The Omah Spa, MICE & Wedding */}
      <ResortHighlights />

      {/* Gateway to Wonders: Kawah Ijen Blue Fire & East Java Tours */}
      <ExcursionsSection />

      {/* Verified Guest Testimonials & Rating Proof (TripAdvisor & Google) */}
      <GuestReviews />

      {/* Strategic Location & Transit Breakdown */}
      <LocationMap />

      {/* Mobile Sticky Quick Booking Bar */}
      <MobileStickyBooking />

      {/* Semantic Footer with Complete NAP & Direct Links */}
      <Footer />
    </main>
  );
}
