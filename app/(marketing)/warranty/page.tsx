import { Metadata } from "next";
import { WarrantyContent } from "./WarrantyContent";

export const metadata: Metadata = {
  title: "Warranty | EIGHT",
  description:
    "EIGHT warranty coverage. Lifetime frame warranty, 2-year component warranty. Built to last.",
};

export default function WarrantyPage() {
  return <WarrantyContent />;
}
