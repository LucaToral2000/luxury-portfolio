import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lucatoral.com"),

  title: {
    default: "Luca Toral | 3D Jewelry Designer & Product Visual Artist",
    template: "%s | Luca Toral",
  },

  description:
    "3D Jewelry Designer specialized in production-ready CAD development, luxury visualization and bespoke jewelry design.",

  keywords: [
    "Luca Toral",
    "Jewelry Designer",
    "3D Jewelry Designer",
    "Jewelry CAD",
    "CAD Jewelry",
    "Product Designer",
    "Luxury Jewelry",
    "Product Visualization",
    "Barcelona",
  ],

  authors: [{ name: "Luca Toral" }],
  creator: "Luca Toral",

  openGraph: {
    title: "Luca Toral | 3D Jewelry Designer",
    description:
      "Production-ready CAD development, luxury visualization and bespoke jewelry design.",
    url: "https://lucatoral.com",
    siteName: "Luca Toral",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luca Toral Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luca Toral | 3D Jewelry Designer",
    description:
      "Production-ready CAD development, luxury visualization and bespoke jewelry design.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
