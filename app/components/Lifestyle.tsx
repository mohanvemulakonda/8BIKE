"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";


export function Lifestyle() {
  return (
    <section className="py-24 md:py-32 px-5">
      <div className="mx-auto max-w-[var(--max-width)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/lifestyle-riders.jpg"
                alt="Riders on 8BIKE cycles at sunset"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Desaturated overlay for brand mood */}
              <div className="absolute inset-0 bg-[var(--bg-page)]/30 mix-blend-color" />


            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-4">
                The Ride
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl tracking-wider text-white mb-6">
                MADE FOR THE
                <br />
                OPEN ROAD
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-text-tertiary text-sm md:text-base font-light leading-relaxed mb-6">
                From alpine switchbacks to coastal flats — every 8BIKE is
                built for the moment the wheels start turning.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-text-tertiary text-sm md:text-base font-light leading-relaxed mb-8">
                We don't build bikes for showrooms. We build them for riders
                who feel the difference in every pedal stroke. Precision you can
                ride.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <a
                href="#bikes"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
              >
                See the Lineup
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
