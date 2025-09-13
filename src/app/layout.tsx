import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./Header";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eshet Digital",
  description: "Strategic branding, creative design and digital solutions",
  keywords: [
    "Eshet Digital",
    "Branding",
    "Creative Design",
    "Digital Solutions",
    "Marketing",
    "Web Development",
  ],
  authors: [{ name: "Eshet Digital", url: "https://www.eshetdigital.com" }],
  icons: {
    icon: [
      { url: "/favicon.ico" }, // ברירת מחדל – כלול כמה גדלים בפנים
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

/* ✅ meta viewport */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Header קבוע */}
        <Header />

        <main>{children}</main>

        {/* Footer קבוע */}
        <Footer />
      </body>
    </html>
  );
}
