"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";


export function Ride() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background lifestyle image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-lifestyle.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--bg-page)]/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-6">
            The Ride
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white leading-[1.1] mb-10">
            YOU DON&apos;T BUY A BIKE.
            <br />
            YOU CHOOSE A RIDE.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary text-sm md:text-base font-light leading-[2] mb-6">
            From alpine switchbacks to Baltic coast flats. From Saturday morning
            club rides to solo dawn efforts. EIGHT is for the rider who knows
            the difference between turning pedals and riding.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <blockquote className="border-l-2 border-red pl-6 text-left my-12">
            <p className="text-white text-base md:text-lg font-light italic leading-[1.9]">
              &ldquo;The first time I rode the Carbon Pro, I forgot about the bike.
              I just rode. That&apos;s the highest compliment I can give a frame.&rdquo;
            </p>
            <footer className="mt-4 text-xs tracking-[2px] uppercase text-text-muted">
              -- Early Rider, Munich
            </footer>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#bikes"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
            >
              Find Your Ride
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:border-white/40 transition-colors duration-150"
            >
              Book a Test Ride
            </a>
          </div>


        </ScrollReveal>
      </div>
    </section>
  );
}
