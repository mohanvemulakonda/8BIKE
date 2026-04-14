import { HeroVideo } from "../components/HeroVideo";
import { About } from "../components/About";
import { Lifestyle } from "../components/Lifestyle";
import { Engineering } from "../components/Engineering";
import { Bikes } from "../components/Bikes";
import { AppShowcase } from "../components/AppShowcase";
import { CTA } from "../components/CTA";
import { MonogramDivider } from "../components/MonogramPattern";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <MonogramDivider />
      <About />
      <MonogramDivider />
      <Lifestyle />
      <MonogramDivider />
      <Engineering />
      <MonogramDivider />
      <Bikes />
      <MonogramDivider />
      <AppShowcase />
      <MonogramDivider />
      <CTA />
    </>
  );
}
