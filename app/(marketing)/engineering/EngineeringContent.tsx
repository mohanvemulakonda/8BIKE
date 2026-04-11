"use client";

import Image from "next/image";
import { PageHero } from "../../components/ui/PageHero";
import { Container } from "../../components/ui/Container";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { StatBlock } from "../../components/ui/StatBlock";
import { SpecRow } from "../../components/ui/SpecRow";
import { Button } from "../../components/ui/Button";
import { ScrollReveal, Stagger, StaggerItem } from "../../components/ScrollReveal";
import { FlagBar } from "../../components/FlagBar";

const stats = [
  { value: "8.2", unit: "kg", label: "Frame Weight" },
  { value: "100k", unit: "+", label: "Fatigue Cycles" },
  { value: "T800", label: "Carbon Grade" },
  { value: "ISO", unit: "4210", label: "Certified" },
];

const processes = [
  {
    step: "01",
    title: "Computational Design",
    desc: "Every tube profile begins as a CFD simulation. We model airflow, stress distribution, and vibration characteristics before any carbon is cut.",
  },
  {
    step: "02",
    title: "Material Selection",
    desc: "T800 unidirectional carbon fiber — the same grade used in aerospace. We select fiber orientation for each specific load case in the frame.",
  },
  {
    step: "03",
    title: "Hand Layup",
    desc: "Our frames are hand-laid, not stamped from a mold. Each layer of carbon is placed with precision, controlling fiber direction and resin content.",
  },
  {
    step: "04",
    title: "Quality Control",
    desc: "Every frame undergoes ultrasonic testing, fatigue cycling, and dimensional verification. We test to destruction so you can ride with confidence.",
  },
];

const materialSpecs = [
  { label: "Frame", value: "T800 Unidirectional Carbon, hand-laid" },
  { label: "Fork", value: "Full carbon, tapered 1-1/8 to 1-1/2" },
  { label: "Testing", value: "ISO 4210, CEN fatigue, impact rated" },
  { label: "Geometry", value: "Race-fit, 73.5 HTA, 398mm reach (M)" },
  { label: "Tolerance", value: "0.1mm dimensional accuracy" },
  { label: "Finish", value: "Automotive-grade clear coat, UV stable" },
];

export function EngineeringContent() {
  return (
    <>
      <PageHero
        tag="Engineering"
        title="BUILT DIFFERENT"
        description="We don't add features. We remove everything that isn't necessary. What remains is a frame stripped to its purest function."
        image="/images/detail-wheel-closeup.jpg"
      />

      {/* Stats */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <StatBlock value={stat.value} unit={stat.unit} label={stat.label} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-card">
        <Container>
          <SectionHeader
            tag="The Process"
            title="FROM CONCEPT TO CARBON"
            description="Every 8BIKE frame goes through a rigorous four-stage engineering process before it reaches your hands."
            className="mb-16"
          />

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
            {processes.map((p) => (
              <StaggerItem key={p.step}>
                <div className="bg-surface border border-border rounded-xl p-8 h-full">
                  <span className="font-display text-3xl text-red">{p.step}</span>
                  <h3 className="text-lg font-semibold text-white mt-4 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-tertiary font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Manifesto + Specs */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider text-white mb-8">
                  THE PHILOSOPHY
                </h2>
              </ScrollReveal>
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

            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider text-white mb-8">
                  MATERIAL SPECS
                </h2>
              </ScrollReveal>
              <div className="space-y-4">
                {materialSpecs.map((row, i) => (
                  <ScrollReveal key={row.label} delay={0.1 + i * 0.05}>
                    <SpecRow label={row.label} value={row.value} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-card">
        <Container className="text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider text-white mb-6">
              EXPERIENCE THE DIFFERENCE
            </h2>
            <p className="text-text-tertiary text-sm font-light max-w-md mx-auto leading-relaxed mb-8">
              Feel the difference on two wheels. Book a test ride today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/test-ride">Book a Test Ride</Button>
              <Button href="/bikes" variant="secondary">View All Bikes</Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
