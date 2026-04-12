import { Metadata } from "next";
import { SupportContent } from "./SupportContent";

export const metadata: Metadata = {
  title: "Support | EIGHT",
  description:
    "EIGHT support center. Find sizing guides, maintenance tips, assembly instructions, and contact our team.",
};

export default function SupportPage() {
  return <SupportContent />;
}
