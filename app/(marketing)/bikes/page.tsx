import { Metadata } from "next";
import { BikesContent } from "./BikesContent";

export const metadata: Metadata = {
  title: "Bikes | 8BIKE",
  description:
    "Explore the full 8BIKE lineup. Road, mountain, and gravel bikes built for riders who feel the difference.",
};

export default function BikesPage() {
  return <BikesContent />;
}
