import { Metadata } from "next";
import { SupportContent } from "./SupportContent";

export const metadata: Metadata = {
  title: "Support | 8BIKE",
  description:
    "8BIKE support center. Find sizing guides, maintenance tips, assembly instructions, and contact our team.",
};

export default function SupportPage() {
  return <SupportContent />;
}
