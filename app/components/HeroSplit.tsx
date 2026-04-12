"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FlagBar } from "./FlagBar";
import { Monogram } from "./Monogram";
import { ArrowRight } from "lucide-react";

export function HeroSplit() {
  return (
    <section className="relative h-screen flex overflow-hidden">
      {/* Left side — text content */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 bg-[var(--bg-page)]">
        {/* Watermark monogram */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Monogram size={500} variant="gradient-dark" bgColor="#050505" />
        </div>

        <div className="relative max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FlagBar className="w-16 mb-8" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs tracking-[6px] uppercase text-red font-medium mb-4"
          >
            Carbon Pro 8.1 — From &euro;4,299
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider text-white leading-[1.05]"
          >
            PURE RIDE.
            <br />
            NOTHING
            <br />
            ELSE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-text-tertiary text-sm md:text-base font-light leading-relaxed max-w-sm"
          >
            T800 carbon. 7.8 kg. Built for riders who feel the difference
            in every pedal stroke.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#bikes"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
            >
              Explore Bikes <ArrowRight size={14} />
            </a>
            <a
              href="/test-ride"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:border-border-hover transition-colors duration-150"
            >
              Book a Test Ride
            </a>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-16 flex gap-10"
          >
            {[
              { val: "7.8", unit: "kg", label: "Frame Weight" },
              { val: "T800", unit: "", label: "Carbon" },
              { val: "Di2", unit: "", label: "Shifting" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl text-red leading-none">
                  {s.val}
                  <span className="text-sm text-text-muted">{s.unit}</span>
                </p>
                <p className="text-[9px] tracking-[2px] uppercase text-text-muted mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right side — full bleed product image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block relative w-1/2"
      >
        <Image
          src="/images/bike-road-black.jpg"
          alt="EIGHT Carbon Pro 8.1"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient blend into left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-page)] via-transparent to-transparent w-1/3" />
        {/* Bottom flag bar */}
        <FlagBar className="absolute bottom-0 left-0 right-0 w-full h-[3px] rounded-none" />
      </motion.div>

      {/* Mobile background image (behind text) */}
      <div className="lg:hidden absolute inset-0 opacity-20">
        <Image
          src="/images/bike-road-black.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
