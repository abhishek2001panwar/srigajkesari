import type { Metadata } from "next";
import { Montserrat, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-opensans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Sri Gajkesari",
  description:
    "Sri Gajkesari is a premier jewelry brand in Bengaluru, India, renowned for its exquisite craftsmanship and timeless designs. Our collections feature a harmonious blend of traditional artistry and contemporary elegance, catering to diverse tastes and occasions. Each piece is meticulously crafted to reflect our commitment to quality, authenticity, and customer satisfaction.",
  keywords: [
    "Sri Gajkesari",
    "Jewelry",
    "Bengaluru",
    "India",
    "Craftsmanship",
    "Timeless Designs",
    "Traditional Artistry",
    "Contemporary Elegance",
    "Exquisite Collections",
    "Quality Jewelry",
  ],
  authors: [{ name: "Sri Gajkesari" }],
  creator: "Sri Gajkesari",
  publisher: "Sri Gajkesari",
  openGraph: {
    title: "Sri Gajkesari - Exquisite Jewelry in Bengaluru, India",
    description:
      "Discover the artistry of Sri Gajkesari, a premier jewelry brand in Bengaluru, India. Explore our exquisite collections that blend traditional craftsmanship with contemporary elegance.",
    url: "https://srigajkesari.com",
    siteName: "Sri Gajkesari",
    images: [
      {
        url: "https://srigajkesari.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Gajkesari - Exquisite Jewelry in Bengaluru, India",
    description:
      "Discover the artistry of Sri Gajkesari, a premier jewelry brand in Bengaluru, India. Explore our exquisite collections that blend traditional craftsmanship with contemporary elegance.",
    images: ["https://srigajkesari.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${openSans.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><SmoothScroll>{children}</SmoothScroll></body>
    </html>
  );
}
