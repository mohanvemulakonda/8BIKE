import { Metadata } from "next";
import { TestRideContent } from "./TestRideContent";

export const metadata: Metadata = {
  title: "Book a Test Ride | 8BIKE",
  description:
    "Experience 8BIKE precision firsthand. Book a test ride at one of our partner locations across Europe.",
};

export default function TestRidePage() {
  return <TestRideContent />;
}
