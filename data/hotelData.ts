export interface RoomItem {
  id: string;
  name: string;
  category: "suite" | "cottage" | "superior" | "standard";
  sqm: number;
  bedType: string;
  capacity: string;
  view: string;
  priceStart: string;
  badge?: string;
  description: string;
  images: string[];
  features: string[];
  bookingUrl: string;
}

export interface DiningItem {
  id: string;
  name: string;
  tagline: string;
  hours: string;
  atmosphere: string;
  description: string;
  image: string;
  signatureDishes: string[];
}

export interface FacilityItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  highlight: string;
}

export interface ExcursionItem {
  id: string;
  title: string;
  distance: string;
  duration: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  stayDate: string;
  title: string;
  quote: string;
  source: "TripAdvisor" | "Google Reviews" | "Agoda";
}

export const HOTEL_INFO = {
  name: "Ketapang Indah Hotel",
  tagline: "The Charming Coastal Sanctuary in Banyuwangi",
  shortDesc:
    "A 4-star beachfront resort set within a 6-hectare tropical coconut palm garden, overlooking the Bali Strait. The premier gateway to the Mount Ijen Blue Fire crater and a relaxing seaside retreat.",
  rating: {
    tripadvisor: "4.5 / 5.0 (2,100+ reviews)",
    google: "4.6 / 5.0 (3,800+ reviews)",
    star: 4,
  },
  address: "Jl. Gatot Subroto Km. 6, Klatak, Kalipuro, Banyuwangi 68421, East Java, Indonesia",
  phone: "+62 333 422280",
  whatsapp: "+62 811 350 2280",
  email: "reservation@ketapangindahhotel.com",
  bookingEngineBaseUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  coordinates: {
    lat: -8.1565,
    lng: 114.3941,
  },
};

export const DIRECT_PRIVILEGES = [
  {
    icon: "ShieldCheck",
    title: "Best Rate Guarantee",
    desc: "The lowest official rate guaranteed with no hidden intermediary commissions.",
  },
  {
    icon: "Coffee",
    title: "Complimentary Daily Breakfast",
    desc: "Indulge in a delightful beachfront buffet breakfast at Marlin Restaurant.",
  },
  {
    icon: "Sparkles",
    title: "Welcome Drink & Chilled Towel",
    desc: "A refreshing signature tropical reception upon your arrival at the lobby.",
  },
  {
    icon: "Clock",
    title: "Flexible Check-In / Check-Out",
    desc: "Enjoy extra leisure time on your departure day (subject to room availability).",
  },
  {
    icon: "Utensils",
    title: "10% Dining Privilege",
    desc: "Exclusive 10% savings on all food & beverage orders at Marlin Beach Club.",
  },
  {
    icon: "RefreshCw",
    title: "Flexible Rescheduling",
    desc: "Change your travel dates effortlessly with seamless direct reservation support.",
  },
];

export const ROOMS_DATA: RoomItem[] = [
  {
    id: "ocean-view-suite",
    name: "Ocean View Suite",
    category: "suite",
    sqm: 75,
    bedType: "1 Super King Bed (200x200)",
    capacity: "2 Adults + 1 Child",
    view: "Panoramic Ocean & Bali Strait View",
    priceStart: "IDR 1,850,000",
    badge: "Most Desired • Oceanfront",
    description:
      "Our most prestigious accommodation spanning 75 square meters, featuring mesmerizing sunrise vistas across the Bali Strait from your private balcony. Elegantly appointed with a lavish separate living salon, marble soaking tub, and handcrafted teakwood furnishings.",
    images: ["/images/rooms/ocean-suite-1.jpg", "/images/rooms/ocean-suite-2.jpg"],
    features: [
      "Expansive Private Balcony Overlooking Bali Strait",
      "Separate Living Lounge with Designer Plush Sofa",
      "Marble Soaking Tub & Walk-in Rain Shower",
      "Espresso Machine & Stocked Mini Bar",
      "55-Inch Smart TV with International Channels",
      "High-Speed Fiber-Optic Wi-Fi Access",
    ],
    bookingUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  },
  {
    id: "cottage-garden-view",
    name: "Cottage Garden View",
    category: "cottage",
    sqm: 32,
    bedType: "1 King Bed or 2 Single Beds",
    capacity: "2 Adults + 1 Child",
    view: "Lush Coconut Palm Grove",
    priceStart: "IDR 1,150,000",
    badge: "Honeymoon & Couple Favorite",
    description:
      "Charming standalone tropical cottages tucked peacefully amidst our 6-hectare coconut grove. Designed for ultimate tranquility and seclusion, with an open-air stone-accented bathroom and a breezy veranda facing the swaying palms.",
    images: ["/images/rooms/cottage-garden-1.jpg", "/images/rooms/cottage-garden-2.jpg"],
    features: [
      "Standalone Private Cottage Architecture",
      "Private Front Veranda with Garden Loungers",
      "En-Suite Semi-Outdoor Natural Stone Bathroom",
      "Aromatherapy Amenities & Premium Toiletries",
      "Coffee & Tea Making Facilities",
      "Direct Access to Tropical Garden Walking Paths",
    ],
    bookingUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  },
  {
    id: "garden-superior-room",
    name: "Garden Superior Room",
    category: "superior",
    sqm: 25,
    bedType: "1 King Bed or 2 Twin Beds",
    capacity: "2 Adults",
    view: "Manicured Botanical Gardens",
    priceStart: "IDR 850,000",
    badge: "Best Family Value",
    description:
      "Fresh, inviting, and modern. Floor-to-ceiling sliding glass doors open onto a private terrace or balcony overlooking vibrant tropical flora, bathing the room in natural coastal sunlight.",
    images: ["/images/rooms/garden-superior-1.jpg", "/images/rooms/garden-superior-2.jpg"],
    features: [
      "Floor-to-Ceiling Glass Doors to Garden Balcony",
      "Cool Marble Flooring & Whisper-Quiet AC",
      "En-Suite Bathroom with Hot & Cold Rain Shower",
      "Work Desk & Electronic Safe Deposit Box",
      "Complimentary High-Speed Wi-Fi",
      "Daily Replenished Mineral Water & Tea Set",
    ],
    bookingUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  },
  {
    id: "superior-room",
    name: "Superior Room",
    category: "superior",
    sqm: 25,
    bedType: "1 King Bed or 2 Twin Beds",
    capacity: "2 Adults",
    view: "Courtyard & Partial Garden",
    priceStart: "IDR 720,000",
    description:
      "Contemporary minimalist aesthetics combined with thoughtful hotel comforts. Perfectly suited for leisure travelers seeking relaxation after exploring Banyuwangi's dramatic landscapes.",
    images: ["/images/rooms/superior-1.jpg", "/images/rooms/superior-2.jpg"],
    features: [
      "Ergonomic Bedding with Crisp Cotton Linens",
      "Private En-Suite Bathroom with Fresh Towels",
      "Flat-Screen Cable Television",
      "Coffee & Tea Maker",
      "24-Hour In-Room Dining Service",
      "Quiet Coastal Ambience",
    ],
    bookingUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  },
  {
    id: "standard-room",
    name: "Standard Room",
    category: "standard",
    sqm: 22,
    bedType: "1 Queen Bed or 2 Twin Beds",
    capacity: "2 Adults",
    view: "Resort Courtyard",
    priceStart: "IDR 580,000",
    badge: "Ideal Mount Ijen & Bali Transit",
    description:
      "Clean, comfortable, and highly functional. The ideal staging base for midnight Mount Ijen hikers or travelers crossing the ferry to Bali at dawn.",
    images: ["/images/rooms/standard-1.jpg", "/images/rooms/standard-2.jpg"],
    features: [
      "Plush Mattress with Fresh Bed Linen",
      "Private Bathroom with Hot Shower",
      "Air Conditioning & Free Wi-Fi",
      "Bedside Power Outlets for Convenient Charging",
      "Early Morning Wake-Up Call for Ijen Hikers",
      "Proximity to Resort Parking & Lobby",
    ],
    bookingUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  },
];

export const DINING_DATA: DiningItem[] = [
  {
    id: "marlin-beach-club",
    name: "Marlin Restaurant & Beach Club",
    tagline: "Oceanfront Dining Overlooking the Bali Strait",
    hours: "06:00 AM - 11:00 PM",
    atmosphere: "Oceanfront Alfresco & Beach Club Elegance",
    description:
      "Our premier oceanfront culinary venue perched directly on the coastline, framing breathtaking vistas of the Bali Strait. Enjoy authentic East Javanese specialties, wood-fired fresh seafood, and modern western bistro creations.",
    image: "/images/dining/marlin-beach-club.jpg",
    signatureDishes: [
      "Authentic Ayam Betutu Selat Bali",
      "Wood-Fired Fresh Catch with Sambal Tempong",
      "Rich Aromatic Oxtail Soup (Sop Buntut)",
      "Sunset Hand-Tossed Pizzas & Cocktails",
    ],
  },
  {
    id: "wahoo-lobby-lounge",
    name: "Wahoo Lobby Lounge & Pool Bar",
    tagline: "Tropical Refreshments by the Lagoon Pool",
    hours: "10:00 AM - 10:00 PM",
    atmosphere: "Chilled Poolside Garden Breeze",
    description:
      "The perfect haven to unwind with fresh young coconuts harvested straight from our 6-hectare grove, specialty single-origin Ijen Arabica brew, and handcrafted tropical refreshments accompanied by gentle acoustic melodies.",
    image: "/images/dining/pool-bar.jpg",
    signatureDishes: [
      "Estate-Harvested Young Coconut",
      "Locally Roasted Ijen Arabica Pour-Over",
      "Crispy Calamari with Balinese Sambal Matah",
      "Ketapang Signature Tropical Sunset Cooler",
    ],
  },
];

export const RESORT_FACILITIES: FacilityItem[] = [
  {
    id: "lagoon-pool",
    name: "Olympic-Length Lagoon Pool",
    category: "Wellness & Recreation",
    description:
      "A sprawling freeform lagoon swimming pool surrounded by towering coconut palms and sun loungers, kissed by gentle coastal ocean breezes.",
    image: "/images/hero/hero1.jpg",
    highlight: "Open 06:00 - 20:00 • Children's Splash Area",
  },
  {
    id: "the-omah-spa",
    name: "The Omah Spa & Wellness",
    category: "Traditional Healing",
    description:
      "Authentic Javanese and Balinese therapeutic treatments utilizing natural herbal aromatherapy oils to soothe tired muscles after your Mount Ijen trek.",
    image: "/images/facilities/omah-spa.jpg",
    highlight: "Traditional Body Massage • Herbal Scrubs",
  },
  {
    id: "cengkeh-ballroom",
    name: "Cengkeh Grand Ballroom",
    category: "MICE & Conferences",
    description:
      "A grand pillarless convention venue accommodating up to 800 delegates for international symposiums, corporate galas, and exhibitions.",
    image: "/images/facilities/ballroom-meeting.jpg",
    highlight: "Capacity up to 800 Pax • Advanced AV Systems",
  },
  {
    id: "beachfront-wedding",
    name: "Oceanfront Wedding Lawn",
    category: "Romance & Celebrations",
    description:
      "A 1,500 sqm manicured seaside lawn against the backdrop of azure waters and the silhouette of Bali island for unforgettable romantic nuptials.",
    image: "/images/facilities/wedding-lawn.jpg",
    highlight: "Capacity 1,000 Guests • Sunrise Coastal Setting",
  },
];

export const EXCURSIONS_DATA: ExcursionItem[] = [
  {
    id: "ijen-crater",
    title: "Mount Ijen Blue Fire Crater Trek",
    distance: "60 Mins from Resort",
    duration: "Midnight Tour (00:00 - 08:00 AM)",
    description:
      "Witness the ethereal eternal blue flames and the world's largest turquoise acidic crater lake. Ketapang Indah Hotel provides takeaway breakfast boxes and certified mountain guides.",
    image: "/images/facilities/ijen-tour.jpg",
  },
  {
    id: "bali-strait-sunrise",
    title: "Bali Strait Sunrise Spectacle",
    distance: "0 Meters (Resort Beachfront)",
    duration: "Daily at Dawn (05:15 - 06:15 AM)",
    description:
      "Gaze at the morning sun rising dramatically above the majestic West Bali mountain range while traditional fishing outriggers sail gently past your beach chair.",
    image: "/images/facilities/beach-sunrise.jpg",
  },
  {
    id: "baluran-national-park",
    title: "Baluran National Park (Africa van Java)",
    distance: "40 Mins from Resort",
    duration: "Day Safari (08:00 AM - 03:00 PM)",
    description:
      "Roam through the vast golden savannah of Bekol, home to wild Javan water buffaloes, peacocks, and barking deer, ending at the pristine white shores of Bama Beach.",
    image: "/images/hero/hero2.jpg",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Hendrik Van Der Meer",
    location: "Amsterdam, Netherlands",
    rating: 5,
    stayDate: "October 2024",
    title: "The premier tropical staging base before Mount Ijen!",
    quote:
      "The 6-hectare coconut grove is breathtakingly serene. Waking up to the sunrise over Bali Strait and dining at Marlin Restaurant was pure bliss. The hotel even packed us warm breakfast boxes for our midnight departure to Ijen crater.",
    source: "TripAdvisor",
  },
  {
    id: "rev-2",
    name: "Sarah & David Jenkins",
    location: "Sydney, Australia",
    rating: 5,
    stayDate: "November 2024",
    title: "Private garden cottage with sublime hospitality",
    quote:
      "We booked the Cottage Garden View directly on this official website and enjoyed complimentary breakfast and dining discounts. The room was pristine, fragrant, and tranquil. The staff went above and beyond to make us feel at home.",
    source: "Google Reviews",
  },
  {
    id: "rev-3",
    name: "Michael & Clara Chen",
    location: "Singapore",
    rating: 5,
    stayDate: "December 2024",
    title: "Ocean View Suite was pure coastal perfection",
    quote:
      "The sweeping view of the Bali Strait from our suite balcony was mesmerizing! Five-star service with genuine warmth. Ketapang ferry port is only 5 minutes away, making our crossing to Bali completely seamless.",
    source: "TripAdvisor",
  },
];
