import React from "react";
import { HOTEL_INFO, ROOMS_DATA } from "@/data/hotelData";

export default function SchemaJsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hotel",
        "@id": "https://www.ketapangindahhotel.com/#hotel",
        name: HOTEL_INFO.name,
        legalName: "PT Ketapang Indah Hotel",
        description: HOTEL_INFO.shortDesc,
        url: "https://www.ketapangindahhotel.com",
        logo: "https://www.ketapangindahhotel.com/images/logo.png",
        image: [
          "https://www.ketapangindahhotel.com/images/hero/hero1.jpg",
          "https://www.ketapangindahhotel.com/images/hero/hero2.jpg",
          "https://www.ketapangindahhotel.com/images/hero/hero3.jpg",
        ],
        telephone: HOTEL_INFO.phone,
        email: HOTEL_INFO.email,
        starRating: {
          "@type": "Rating",
          ratingValue: "4",
        },
        priceRange: "IDR 580.000 - IDR 2.500.000",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Gatot Subroto Km. 6, Klatak, Kalipuro",
          addressLocality: "Banyuwangi",
          addressRegion: "Jawa Timur",
          postalCode: "68421",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: HOTEL_INFO.coordinates.lat,
          longitude: HOTEL_INFO.coordinates.lng,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.6",
          reviewCount: "3800",
          bestRating: "5",
          worstRating: "1",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Swimming Pool",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Free High-Speed Wi-Fi",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Beachfront Location",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Marlin Restaurant & Beach Club",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "The Omah Spa",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Free Private Parking",
            value: true,
          },
        ],
        containsPlace: ROOMS_DATA.map((room) => ({
          "@type": "HotelRoom",
          "@id": `https://www.ketapangindahhotel.com/#${room.id}`,
          name: room.name,
          description: room.description,
          floorSize: {
            "@type": "QuantitativeValue",
            value: room.sqm,
            unitCode: "MTK",
          },
          bed: {
            "@type": "BedDetails",
            description: room.bedType,
          },
          occupancy: {
            "@type": "QuantitativeValue",
            value: 2,
            unitText: "Person",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "IDR",
            price: room.priceStart.replace(/[^0-9]/g, ""),
            availability: "https://schema.org/InStock",
            url: room.bookingUrl,
          },
        })),
      },
      {
        "@type": "FoodEstablishment",
        "@id": "https://www.ketapangindahhotel.com/#marlin-restaurant",
        name: "Marlin Restaurant & Beach Club",
        servesCuisine: ["Indonesian", "Seafood", "Western", "Balinese"],
        hasMenu: "https://www.ketapangindahhotel.com/dining",
        containedInPlace: {
          "@id": "https://www.ketapangindahhotel.com/#hotel",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
