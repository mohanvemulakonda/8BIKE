"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";


export function Craft() {
  return (
    <section id="engineering" className="py-32 md:py-40">
      <div className="mx-auto max-w-[var(--max-width)] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Left: image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] md:aspect-auto md:h-full min-h-[500px] rounded-2xl lg:rounded-r-none overflow-hidden">
              <Image
                src="/images/detail-wheel.jpg"
                alt="Carbon fork and wheel close-up"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--bg-page)]" />
            </div>
          </ScrollReveal>

          {/* Right: text */}
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pl-16">
            <ScrollReveal delay={0.1}>
              <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-4">
                The Craft
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider text-white leading-[1.1] mb-8">
                HAND-LAID.
                <br />
                NOT STAMPED.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-text-secondary text-sm md:text-base font-light leading-[2] mb-6">
                Every 8BIKE carbon frame begins as sheets of T800 unidirectional
                fiber. Each layer is cut, oriented, and placed by hand following
                proprietary layup schedules developed over thousands of hours of
                testing.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-text-tertiary text-sm font-light leading-[2] mb-10">
                The tubes are shaped by CFD, not by trend. The geometry is
                validated in wind tunnels. The welds are inspected under
                magnification. Before a single frame ships, it survives 100,000
                fatigue cycles -- because the road won&apos;t ask if you passed
                quality control.
              </p>
            </ScrollReveal>

            {/* Spec rows */}
            <div className="space-y-0 mb-10">
              {[
                { label: "Carbon", value: "T800 Unidirectional" },
                { label: "Weight", value: "8.2 kg (frame)" },
                { label: "Testing", value: "ISO 4210, 100k+ cycles" },
                { label: "Geometry", value: "Race-fit, 73.5 HTA" },
              ].map((row, i) => (
                <ScrollReveal key={row.label} delay={0.5 + i * 0.05}>
                  <div className="flex items-baseline justify-between py-3 border-b border-border">
                    <span className="text-[10px] tracking-[3px] uppercase text-text-muted">
                      {row.label}
                    </span>
                    <span className="text-sm text-white font-light">
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
