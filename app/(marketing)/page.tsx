import { HeroVideo } from "../components/HeroVideo";
import { About } from "../components/About";
import { Lifestyle } from "../components/Lifestyle";
import { Engineering } from "../components/Engineering";
import { Bikes } from "../components/Bikes";
import { AppShowcase } from "../components/AppShowcase";
import { CTA } from "../components/CTA";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <About />
      <Lifestyle />
      <Engineering />
      <Bikes />
      <AppShowcase />
      <CTA />
    </>
  );
}
