"use client";

import { ScrollReveal, Stagger, StaggerItem } from "./ScrollReveal";


const values = [
  {
    number: "01",
    title: "Precision",
    desc: "Tolerances measured in microns. Every joint, every weld, every curve — calculated.",
  },
  {
    number: "02",
    title: "Engineering",
    desc: "Every component chosen for the ride. Nothing added that doesn't make you faster.",
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
            BUILT FOR RIDERS.
            <br />
            BY RIDERS.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="max-w-xl text-text-tertiary text-sm md:text-base font-light leading-relaxed mb-16">
            8BIKE exists for one reason — to build bikes that disappear
            beneath you, so all you feel is the road, the climb, and
            the ride.
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

              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
