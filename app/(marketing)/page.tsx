import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Lifestyle } from "../components/Lifestyle";
import { Engineering } from "../components/Engineering";
import { Bikes } from "../components/Bikes";
import { CTA } from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Lifestyle />
      <Engineering />
      <Bikes />
      <CTA />
    </>
  );
}
