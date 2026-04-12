import { Metadata } from "next";
import { ConfiguratorContent } from "./ConfiguratorContent";

export const metadata: Metadata = {
  title: "Configure | EIGHT",
  description:
    "Build your EIGHT. Choose your frame, groupset, wheels, color, and size — see your price in real time.",
};

export default function ConfigurePage() {
  return <ConfiguratorContent />;
}
