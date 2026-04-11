import { Metadata } from "next";
import { PressContent } from "./PressContent";

export const metadata: Metadata = {
  title: "Press | 8BIKE",
  description:
    "8BIKE press room. Download brand assets, read press releases, and contact our media team.",
};

export default function PressPage() {
  return <PressContent />;
}
