import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ketapang Indah Hotel Banyuwangi | Official Luxury Beach Resort & Direct Booking",
  description: "Official Website of Ketapang Indah Hotel Banyuwangi. 4-star beachfront resort nestled in a 6-hectare lush coconut grove facing Bali Strait. Best rate guarantee for direct bookings.",
  keywords: [
    "Ketapang Indah Hotel",
    "Hotel Banyuwangi",
    "Resort Banyuwangi",
    "Beachfront Resort Banyuwangi",
    "Hotel dekat Pelabuhan Ketapang",
    "Hotel dekat Kawah Ijen",
    "Marlin Beach Club Banyuwangi",
    "Direct Booking Hotel Banyuwangi"
  ],
  authors: [{ name: "Ketapang Indah Hotel" }],
  openGraph: {
    title: "Ketapang Indah Hotel Banyuwangi | Official Beachfront Resort",
    description: "Experience genuine East Javanese coastal hospitality. 6 hectares of tropical coconut palms, oceanfront dining, and seamless direct booking.",
    url: "https://www.ketapangindahhotel.com",
    siteName: "Ketapang Indah Hotel",
    images: [
      {
        url: "https://www.ketapangindahhotel.com/themes/ketapangindah/assets/images/mainarea4.jpg",
        width: 1920,
        height: 1280,
        alt: "Ketapang Indah Hotel Oceanfront Resort & Pool",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className="font-sans antialiased bg-[#FAF9F5] text-[#1A2530] selection:bg-[#C5A880] selection:text-white">
        {children}
      </body>
    </html>
  );
}
