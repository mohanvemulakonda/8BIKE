import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "8BIKE | Pure Ride. Nothing Else.",
  description:
    "Premium road, mountain, and gravel bikes for riders who feel the difference. Pure ride. Nothing else.",
  keywords: [
    "8BIKE",
    "performance bikes",
    "cycling",
    "carbon bikes",
    "road bikes",
    "gravel bikes",
  ],
  openGraph: {
    title: "8BIKE | Pure Ride. Nothing Else.",
    description:
      "Premium road, mountain, and gravel bikes for riders who feel the difference. Pure ride. Nothing else.",
    siteName: "8BIKE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
