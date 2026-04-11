"use client";

import Image from "next/image";
import { PageHero } from "../../components/ui/PageHero";
import { Container } from "../../components/ui/Container";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Button } from "../../components/ui/Button";
import { ScrollReveal, Stagger, StaggerItem } from "../../components/ScrollReveal";
import { FlagBar } from "../../components/FlagBar";

const values = [
  {
    number: "01",
    title: "Precision",
    desc: "Tolerances measured in microns. Every joint, every weld, every curve — calculated to serve the rider, not the spec sheet.",
  },
  {
    number: "02",
    title: "Engineering",
    desc: "Every component chosen for the ride. Function defines form. Every design decision is validated through testing.",
  },
  {
    number: "03",
    title: "Performance",
    desc: "Aerodynamics tested in wind tunnels. Stiffness-to-weight ratios that set benchmarks. Built for those who feel the difference.",
  },
];

const milestones = [
  { year: "2018", event: "8BIKE founded in Hamburg, Germany" },
  { year: "2019", event: "First carbon frame prototype completed" },
  { year: "2020", event: "Carbon Pro 8.1 enters production" },
  { year: "2021", event: "Mountain and gravel lines launched" },
  { year: "2022", event: "European dealer network established" },
  { year: "2023", event: "Wind tunnel partnership with Hamburg University" },
  { year: "2024", event: "Aero 8.3 wins design award" },
  { year: "2025", event: "Global expansion begins" },
];

export function AboutContent() {
  return (
    <>
      <PageHero
        tag="About"
        title="BUILT FOR RIDERS"
        description="8BIKE exists for one reason — to build bikes that disappear beneath you, so all you feel is the road, the climb, and the ride."
        image="/images/hero-lifestyle.jpg"
      />

      {/* Philosophy section */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeader
            tag="Our Philosophy"
            title="FUNCTION OVER EVERYTHING"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <ScrollReveal>
                <p className="text-text-secondary text-base md:text-lg font-light leading-[1.9] mb-6">
                  We started 8BIKE with a simple question: what would a bike look like
                  if every decision was made by riders, for riders — with no
                  compromises for marketing or trends?
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-text-tertiary text-sm md:text-base font-light leading-[1.9] mb-6">
                  The answer is a bike that doesn't compromise. Every tube profile is the result
                  of computational fluid dynamics simulation. Every layup schedule is tested to
                  destruction. The carbon is T800 unidirectional — hand-laid, not stamped.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-text-tertiary text-sm md:text-base font-light leading-[1.9]">
                  We don't follow trends. We don't add features for marketing. We build bikes
                  that do exactly what they should — transfer power efficiently, handle predictably,
                  and disappear beneath the rider so all you feel is the road.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <FlagBar className="w-24 mt-8" />
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal direction="right">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/lifestyle-riders.jpg"
                    alt="Riders on 8BIKE cycles at sunset"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[var(--bg-page)]/20" />
                  <FlagBar className="absolute bottom-0 left-0 right-0 w-full h-[3px] rounded-none" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-card">
        <Container>
          <SectionHeader
            tag="What Drives Us"
            title="THREE PRINCIPLES"
            className="mb-16"
          />

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {values.map((v) => (
              <StaggerItem key={v.number}>
                <div className="bg-surface border border-border rounded-xl p-8 hover:border-border-hover transition-colors duration-300 h-full">
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
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeader
            tag="Our Journey"
            title="MILESTONES"
            className="mb-16"
          />

          <div className="max-w-2xl">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.05}>
                <div className="flex gap-8 pb-8 border-l border-border pl-8 relative">
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-red -translate-x-[5px]" />
                  <span className="font-display text-2xl text-red w-16 shrink-0">
                    {m.year}
                  </span>
                  <p className="text-text-secondary text-sm font-light pt-1">
                    {m.event}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-card">
        <Container className="text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white mb-6">
              RIDE WITH US
            </h2>
            <p className="text-text-tertiary text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed mb-8">
              Feel the difference for yourself. Book a test ride or explore the full lineup.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/test-ride">Book a Test Ride</Button>
              <Button href="/bikes" variant="secondary">
                View All Bikes
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
