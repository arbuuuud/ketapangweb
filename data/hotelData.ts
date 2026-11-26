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
    "Resor tepi pantai bintang-4 dengan kebun kelapa tropis seluas 6 hektar, menghadap langsung Selat Bali dan Pulau Dewata. Gerbang sempurna petualangan Kawah Ijen dan liburan relaksasi keluarga.",
  rating: {
    tripadvisor: "4.5 / 5.0 (2,100+ ulasan)",
    google: "4.6 / 5.0 (3,800+ ulasan)",
    star: 4,
  },
  address: "Jl. Gatot Subroto Km. 6, Klatak, Kalipuro, Banyuwangi 68421, Jawa Timur, Indonesia",
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
    desc: "Jaminan harga terendah resmi tanpa perantara tersembunyi.",
  },
  {
    icon: "Coffee",
    title: "Sarapan Gratis Setiap Hari",
    desc: "Nikmati sarapan buffet lezat di Marlin Restaurant tepi pantai.",
  },
  {
    icon: "Sparkles",
    title: "Welcome Drink & Cold Towel",
    desc: "Penyambutan hangat khas Banyuwangi begitu Anda tiba di lobi.",
  },
  {
    icon: "Clock",
    title: "Early Check-In / Late Check-Out",
    desc: "Fleksibilitas waktu istirahat ekstra (sesuai ketersediaan kamar).",
  },
  {
    icon: "Utensils",
    title: "Diskon 10% F&B di Marlin",
    desc: "Potongan harga khusus untuk santap kuliner di Beach Club & Restaurant.",
  },
  {
    icon: "RefreshCw",
    title: "Reschedule Fleksibel",
    desc: "Ubah jadwal menginap Anda dengan mudah tanpa denda tersembunyi.",
  },
];

export const ROOMS_DATA: RoomItem[] = [
  {
    id: "ocean-view-suite",
    name: "Ocean View Suite",
    category: "suite",
    sqm: 75,
    bedType: "1 Super King Bed (200x200)",
    capacity: "2 Dewasa + 1 Anak",
    view: "Panoramic Ocean & Bali Strait View",
    priceStart: "IDR 1.850.000",
    badge: "Paling Diminati • Front Row",
    description:
      "Kategori kamar termewah dengan luas 75 meter persegi, menyajikan panorama matahari terbit Selat Bali tepat dari balkon privat Anda. Dilengkapi ruang duduk lapang, bathtub mewah, dan perabot kayu jati pilihan.",
    images: ["/images/rooms/ocean-suite-1.jpg", "/images/rooms/ocean-suite-2.jpg"],
    features: [
      "Balkon Luas Menghadap Selat Bali",
      "Living Room Terpisah & Sofa Mewah",
      "Bathtub Marmer & Walk-in Rain Shower",
      "Mesin Kopi Espresso & Mini Bar",
      "Smart TV 55 Inch dengan Channel Internasional",
      "High-Speed Wi-Fi Berkecepatan Tinggi",
    ],
    bookingUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  },
  {
    id: "cottage-garden-view",
    name: "Cottage Garden View",
    category: "cottage",
    sqm: 32,
    bedType: "1 King Bed atau 2 Single Beds",
    capacity: "2 Dewasa + 1 Anak",
    view: "Taman Kebun Kelapa Tropis",
    priceStart: "IDR 1.150.000",
    badge: "Favorit Honeymoon & Pasangan",
    description:
      "Cottage privat bergaya arsitektur tropis yang berdiri di tengah rimbunnya kebun kelapa seluas 6 hektar. Memberikan privasi maksimal, ketenangan alami, dan teras santai untuk menikmati semilir angin laut.",
    images: ["/images/rooms/cottage-garden-1.jpg", "/images/rooms/cottage-garden-2.jpg"],
    features: [
      "Bangunan Cottage Berdiri Sendiri (Private)",
      "Teras Depan Pribadi dengan Kursi Santai",
      "Kamar Mandi Semi-Outdoor Sentuhan Batu Alam",
      "Aroma Terapi & Perlengkapan Mandi Premium",
      "Tea & Coffee Making Facilities",
      "Akses Langsung ke Jalur Jogging Taman",
    ],
    bookingUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  },
  {
    id: "garden-superior-room",
    name: "Garden Superior Room",
    category: "superior",
    sqm: 25,
    bedType: "1 King Bed atau 2 Twin Beds",
    capacity: "2 Dewasa",
    view: "Taman Bunga Tropis Asri",
    priceStart: "IDR 850.000",
    badge: "Best Value Keluarga",
    description:
      "Kamar modern yang segar dengan pintu kaca lantai-ke-langit-langit yang membuka ke balkon atau teras pribadi. Sentuhan kayu hangat dan pencahayaan lembut menciptakan suasana istirahat yang menenangkan.",
    images: ["/images/rooms/garden-superior-1.jpg", "/images/rooms/garden-superior-2.jpg"],
    features: [
      "Pintu Kaca Penuh Menghadap Taman",
      "Balkon atau Teras Pribadi",
      "Lantai Marmer Sejuk & Pendingin Udara Dingin",
      "Kamar Mandi En-Suite dengan Air Panas",
      "Meja Kerja Ergonomis & Safe Deposit Box",
      "Koneksi Wi-Fi Kuat & Stabil",
    ],
    bookingUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  },
  {
    id: "superior-room",
    name: "Superior Room",
    category: "superior",
    sqm: 25,
    bedType: "1 King Bed atau 2 Twin Beds",
    capacity: "2 Dewasa",
    view: "Pemandangan Taman Sebagian",
    priceStart: "IDR 720.000",
    description:
      "Pilihan cerdas berdesain kontemporer dengan perabotan minimalis yang dirancang untuk kenyamanan istirahat optimal setelah berwisata menjelajahi keindahan alam Banyuwangi.",
    images: ["/images/rooms/superior-1.jpg", "/images/rooms/superior-2.jpg"],
    features: [
      "Desain Minimalis Elegan & Kasur Nyaman",
      "Kamar Mandi Bersih dengan Amenities Lengkap",
      "LED TV Kabel & Meja Rias",
      "Pemanas Air Minum & Air Mineral Kemasan",
      "Layanan Kamar 24 Jam",
      "Sistem Pendingin Ruangan Senyap",
    ],
    bookingUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  },
  {
    id: "standard-room",
    name: "Standard Room",
    category: "standard",
    sqm: 22,
    bedType: "1 Queen Bed atau 2 Twin Beds",
    capacity: "2 Dewasa",
    view: "Courtyard & Lanskap Resor",
    priceStart: "IDR 580.000",
    badge: "Ideal Transit Kawah Ijen / Bali",
    description:
      "Kamar transit yang sangat fungsional dan nyaman bagi pelancong dan backpacker yang bersiap untuk pendakian tengah malam ke Kawah Ijen atau penyeberangan fajar ke Pulau Bali.",
    images: ["/images/rooms/standard-1.jpg", "/images/rooms/standard-2.jpg"],
    features: [
      "Tempat Tidur Nyaman dengan Linen Bersih",
      "Kamar Mandi Pribadi dengan Shower Hangat",
      "Sistem AC Dingin & Wi-Fi Cepat",
      "Stop Kontak Lengkap di Dekat Tempat Tidur",
      "Early Morning Wake-Up Call untuk Tour Ijen",
      "Lokasi Dekat Area Lobi & Parkir",
    ],
    bookingUrl: "https://ketapangindahhotel.backhotelite.com/en/bookcore/v1/search-dispo.htm",
  },
];

export const DINING_DATA: DiningItem[] = [
  {
    id: "marlin-beach-club",
    name: "Marlin Restaurant & Beach Club",
    tagline: "Sensasi Santap Tepi Pantai dengan Panorama Selat Bali",
    hours: "06:00 - 23:00 WIB",
    atmosphere: "Oceanfront Alfresco & Beach Club Vibe",
    description:
      "Restoran utama kami yang terletak tepat di tepi pantai dengan pemandangan terbuka menghadap perairan Selat Bali. Menyajikan perpaduan hidangan otentik Jawa Timur, sajian laut segar bakar kayu, dan masakan barat kontemporer.",
    image: "/images/dining/marlin-beach-club.jpg",
    signatureDishes: [
      "Ayam Betutu Khas Selat Bali",
      "Bakar Ikan Laut Sambal Tempong",
      "Sop Buntut Gurih Rempah Wangi",
      "Sunset Wood-Fired Pizza & Pasta",
    ],
  },
  {
    id: "wahoo-lobby-lounge",
    name: "Wahoo Lobby Lounge & Pool Bar",
    tagline: "Relaksasi Tropis di Tepi Kolam Renang Resort",
    hours: "10:00 - 22:00 WIB",
    atmosphere: "Casual, Chilled & Garden Breeze",
    description:
      "Tempat terbaik untuk bersantai menikmati jus kelapa muda segar yang dipetik langsung dari kebun hotel, racikan mocktail tropis, kopi arabika Ijen, dan aneka kudapan ringan di samping kolam renang laguna.",
    image: "/images/dining/pool-bar.jpg",
    signatureDishes: [
      "Kelapa Muda Segar Asli Kebun",
      "Kopi Tubruk Arabika Ijen Lestari",
      "Crispy Calamari & Sambal Matah",
      "Signature Ketapang Tropical Cooler",
    ],
  },
];

export const RESORT_FACILITIES: FacilityItem[] = [
  {
    id: "lagoon-pool",
    name: "Olympic-Length Lagoon Pool",
    category: "Wellness & Recreation",
    description:
      "Kolam renang luas bergaya laguna yang dikelilingi pohon kelapa menjulang dan sunbed nyaman, menghadap langsung semilir angin pantai timur Jawa.",
    image: "/images/hero/hero1.jpg",
    highlight: "Buka 06:00 - 20:00 • Area Anak Tersedia",
  },
  {
    id: "the-omah-spa",
    name: "The Omah Spa & Wellness",
    category: "Traditional Healing",
    description:
      "Perawatan spa tradisional Jawa & Bali menggunakan minyak aromaterapi rempah alami untuk meredakan ketegangan otot setelah mendaki Kawah Ijen.",
    image: "/images/facilities/omah-spa.jpg",
    highlight: "Javanese Massage • Herbal Body Scrub",
  },
  {
    id: "cengkeh-ballroom",
    name: "Cengkeh Grand Ballroom",
    category: "MICE & Events",
    description:
      "Ruang pertemuan megah tanpa pilar berkapasitas hingga 800 delegasi untuk konferensi internasional, gathering korporat, dan pameran.",
    image: "/images/facilities/ballroom-meeting.jpg",
    highlight: "Kapasitas 800 Pax • Sound System Canggih",
  },
  {
    id: "beachfront-wedding",
    name: "Oceanfront Wedding Lawn",
    category: "Romance & Celebrations",
    description:
      "Hamparan rumput hijau seluas 1.500 m² tepat di bibir pantai dengan latar belakang laut biru dan gugusan pulau Bali untuk pernikahan impian tak terlupakan.",
    image: "/images/facilities/wedding-lawn.jpg",
    highlight: "Kapasitas 1.000 Tamu • Sunset & Sunrise Backdrop",
  },
];

export const EXCURSIONS_DATA: ExcursionItem[] = [
  {
    id: "ijen-crater",
    title: "Kawah Ijen Blue Fire Trekking",
    distance: "60 Menit dari Hotel",
    duration: "Midnight Tour (00:00 - 08:00)",
    description:
      "Saksikan keajaiban api biru abadi dan danau kawah asam terbesar di dunia. Ketapang Indah Hotel adalah markas utama yang menyediakan sarapan takeaway & pemandu resmi.",
    image: "/images/facilities/ijen-tour.jpg",
  },
  {
    id: "bali-strait-sunrise",
    title: "Matahari Terbit Selat Bali",
    distance: "0 Meter (Di Bibir Pantai Hotel)",
    duration: "Setiap Pagi (05:15 - 06:15)",
    description:
      "Nikmati pemandangan magis siluet pegunungan Bali Barat saat matahari terbit keemasan menyinari perahu nelayan tradisional tepat di depan hotel Anda.",
    image: "/images/facilities/beach-sunrise.jpg",
  },
  {
    id: "baluran-national-park",
    title: "Taman Nasional Baluran (Africa van Java)",
    distance: "40 Menit dari Hotel",
    duration: "Day Excursion (08:00 - 15:00)",
    description:
      "Jelajahi savana luas Bekol yang dihuni kawanan banteng liar, rusa, dan burung merak, berpadu dengan pantai berpasir putih Bama berhutan mangrove.",
    image: "/images/hero/hero2.jpg",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Hendrik Van Der Meer",
    location: "Amsterdam, Belanda",
    rating: 5,
    stayDate: "Oktober 2024",
    title: "Pengalaman resor tropis terbaik sebelum ke Kawah Ijen!",
    quote:
      "Taman kelapa seluas 6 hektarnya luar biasa indah dan asri. Bangun pagi dengan suara ombak Selat Bali dan sarapan di Marlin Restaurant adalah momen yang tak terlupakan. Hotel ini juga menyiapkan breakfast box saat kami berangkat ke Ijen jam 12 malam.",
    source: "TripAdvisor",
  },
  {
    id: "rev-2",
    name: "Ratna Kusuma Dewi",
    location: "Jakarta, Indonesia",
    rating: 5,
    stayDate: "November 2024",
    title: "Cottage taman yang sangat tenang dan privat",
    quote:
      "Kami memesan Cottage Garden View via website resmi dan mendapatkan gratis upgrade serta diskon F&B. Kamarnya sangat bersih, wanginya menenangkan, dan anak-anak sangat senang berenang di kolam renang besarnya.",
    source: "Google Reviews",
  },
  {
    id: "rev-3",
    name: "Michael & Sarah Chen",
    location: "Singapura",
    rating: 5,
    stayDate: "Desember 2024",
    title: "Ocean View Suite benar-benar bernilai luar biasa",
    quote:
      "Pemandangan laut Selat Bali dari balkon kamar suite sangat spektakuler! Keramahan staf hotel melampaui ekspektasi hotel bintang 4. Penyeberangan feri ke Bali hanya 10 menit dari hotel. Pasti akan kembali ke sini lagi.",
    source: "TripAdvisor",
  },
];
