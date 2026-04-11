import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | 8BIKE",
  description:
    "Learn about 8BIKE — our philosophy, our team, and why we build bikes for riders who feel the difference.",
};

export default function AboutPage() {
  return <AboutContent />;
}
