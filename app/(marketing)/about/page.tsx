import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | 8BIKE",
  description:
    "8BIKE is a German cycling brand rooted in precision engineering. Learn about our philosophy, our team, and why we build bikes differently.",
};

export default function AboutPage() {
  return <AboutContent />;
}
