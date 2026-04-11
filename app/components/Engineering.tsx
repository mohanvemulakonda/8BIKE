"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { FlagBar } from "./FlagBar";

const specs = [
  { val: "8.2", unit: "kg", label: "Frame Weight" },
  { val: "100k", unit: "+", label: "Fatigue Cycles" },
  { val: "T800", unit: "", label: "Carbon Grade" },
  { val: "ISO", unit: "4210", label: "Certified" },
];

export function Engineering() {
  return (
    <section id="engineering" className="py-24 md:py-32">
      {/* Full-bleed detail image */}
      <ScrollReveal>
        <div className="relative w-full aspect-[3/1] md:aspect-[4/1] overflow-hidden">
          <Image
            src="/images/detail-wheel-closeup.jpg"
            alt="Carbon fork and wheel detail"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-page)] via-transparent to-[var(--bg-page)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-transparent" />
        </div>
      </ScrollReveal>

      <div className="mx-auto max-w-[var(--max-width)] px-5 -mt-16 md:-mt-24 relative z-10">
        {/* Headline */}
        <ScrollReveal>
          <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-4">
            Engineering
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white mb-6">
            BUILT DIFFERENT
          </h2>
        </ScrollReveal>

        {/* Two-column: manifesto + specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Left: manifesto text */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary text-base md:text-lg font-light leading-[1.9] mb-6">
                We don't add features. We remove everything that isn't necessary.
                What remains is a frame stripped to its purest function -- a machine
                that transfers power with zero compromise.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-tertiary text-sm md:text-base font-light leading-[1.9] mb-8">
                Every tube profile is the result of CFD simulation. Every layup
                schedule is tested to destruction before it enters production.
                The carbon is T800 unidirectional -- hand-laid, not stamped. The
                tolerances are measured in microns, not millimeters.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-text-tertiary text-sm md:text-base font-light leading-[1.9]">
                This is not decoration. This is not branding. This is the frame
                doing what a frame should do -- disappear beneath you, so all you
                feel is the road.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <FlagBar className="w-24 mt-8" />
            </ScrollReveal>
          </div>

          {/* Right: spec blocks */}
          <div>
            <div className="grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
              {specs.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.1 + i * 0.1}>
                  <div className="bg-card p-8 md:p-10">
                    <div className="font-display text-4xl md:text-5xl text-red leading-none">
                      {stat.val}
                      <span className="text-xl text-text-muted">{stat.unit}</span>
                    </div>
                    <p className="text-[10px] tracking-[3px] uppercase text-text-muted mt-3">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Material callouts */}
            <div className="mt-6 space-y-4">
              {[
                {
                  label: "Frame",
                  value: "T800 Unidirectional Carbon, hand-laid",
                },
                {
                  label: "Fork",
                  value: "Full carbon, tapered 1-1/8 to 1-1/2",
                },
                {
                  label: "Testing",
                  value: "ISO 4210, CEN fatigue, impact rated",
                },
                {
                  label: "Geometry",
                  value: "Race-fit, 73.5 HTA, 398mm reach (M)",
                },
              ].map((row, i) => (
                <ScrollReveal key={row.label} delay={0.3 + i * 0.08}>
                  <div className="flex items-baseline justify-between border-b border-border pb-3">
                    <span className="text-[10px] tracking-[3px] uppercase text-text-muted">
                      {row.label}
                    </span>
                    <span className="text-sm text-text-secondary font-light">
                      {row.value}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
