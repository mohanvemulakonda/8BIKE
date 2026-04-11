"use client";

import { ScrollReveal, Stagger, StaggerItem } from "./ScrollReveal";
import { FlagBar } from "./FlagBar";

const values = [
  {
    number: "01",
    title: "Precision",
    desc: "Tolerances measured in microns. Every joint, every weld, every curve — calculated.",
  },
  {
    number: "02",
    title: "Engineering",
    desc: "German engineering philosophy applied to cycling. Function defines form.",
  },
  {
    number: "03",
    title: "Performance",
    desc: "Aerodynamics tested in wind tunnels. Stiffness-to-weight ratios that set benchmarks.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-5">
      <div className="mx-auto max-w-[var(--max-width)]">
        <ScrollReveal>
          <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-4">
            The Brand
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white mb-4">
            BORN IN GERMANY.
            <br />
            BUILT TO PERFORM.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="max-w-xl text-text-tertiary text-sm md:text-base font-light leading-relaxed mb-16">
            8BIKE is not just a brand. It is a commitment to precision — the same
            engineering discipline that built autobahns and precision machinery,
            now applied to every frame we produce.
          </p>
        </ScrollReveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {values.map((v) => (
            <StaggerItem key={v.number}>
              <div className="bg-card border border-border rounded-xl p-8 hover:border-border-hover transition-colors duration-300">
                <span className="font-display text-3xl text-red">{v.number}</span>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-text-tertiary font-light leading-relaxed">
                  {v.desc}
                </p>
                <FlagBar className="w-16 mt-6" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
