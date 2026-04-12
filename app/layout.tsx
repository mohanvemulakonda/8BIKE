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
  title: "EIGHT | Pure Ride. Nothing Else.",
  description:
    "Premium road, mountain, and gravel bikes for riders who feel the difference. Pure ride. Nothing else.",
  keywords: [
    "EIGHT",
    "performance bikes",
    "cycling",
    "carbon bikes",
    "road bikes",
    "gravel bikes",
  ],
  openGraph: {
    title: "EIGHT | Pure Ride. Nothing Else.",
    description:
      "Premium road, mountain, and gravel bikes for riders who feel the difference. Pure ride. Nothing else.",
    siteName: "EIGHT",
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
