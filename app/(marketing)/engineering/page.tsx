import { Metadata } from "next";
import { EngineeringContent } from "./EngineeringContent";

export const metadata: Metadata = {
  title: "Engineering | 8BIKE",
  description:
    "Discover how every 8BIKE frame is designed, tested, and built. From CFD simulation to hand-laid carbon layup.",
};

export default function EngineeringPage() {
  return <EngineeringContent />;
}
