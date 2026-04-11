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
  title: "8BIKE | German Engineered Cycling",
  description:
    "Premium cycling brand rooted in German engineering. Precision-built bikes for riders who demand the best.",
  keywords: [
    "8BIKE",
    "German bikes",
    "cycling",
    "carbon bikes",
    "road bikes",
    "precision cycling",
  ],
  openGraph: {
    title: "8BIKE | German Engineered Cycling",
    description:
      "Premium cycling brand rooted in German engineering. Precision-built bikes for riders who demand the best.",
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
