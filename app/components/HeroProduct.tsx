"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FlagBar } from "./FlagBar";

const specs = [
  { label: "Frame", value: "T800 Carbon", pos: "top-[18%] left-[8%]" },
  { label: "Weight", value: "7.8 kg", pos: "top-[32%] right-[6%]" },
  { label: "Groupset", value: "Ultegra Di2", pos: "bottom-[28%] left-[6%]" },
  { label: "Wheels", value: "Aero 45 Carbon", pos: "bottom-[18%] right-[8%]" },
];

export function HeroProduct() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-page)]">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111_0%,_var(--bg-page)_70%)]" />

      {/* Product image — large, centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl aspect-[16/9] mx-auto"
      >
        <Image
          src="/images/bike-road-black.jpg"
          alt="EIGHT Carbon Pro 8.1"
          fill
          className="object-contain"
          priority
          quality={90}
        />
      </motion.div>

      {/* Floating spec callouts */}
      {specs.map((spec, i) => (
        <motion.div
          key={spec.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
          className={`absolute ${spec.pos} hidden md:block`}
        >
          <div className="bg-[var(--bg-page)]/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2.5">
            <p className="text-[9px] tracking-[2px] uppercase text-text-muted">
              {spec.label}
            </p>
            <p className="text-sm font-semibold text-white">{spec.value}</p>
          </div>
        </motion.div>
      ))}

      {/* Bottom content overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--bg-page)] via-[var(--bg-page)]/80 to-transparent pt-32 pb-12">
        <div className="mx-auto max-w-[var(--max-width)] px-5 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs tracking-[6px] uppercase text-red font-medium mb-2"
            >
              Carbon Pro 8.1
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl md:text-7xl tracking-wider text-white"
            >
              PURE RIDE.
              <br />
              NOTHING ELSE.
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="origin-left"
            >
              <FlagBar className="w-32 mt-3" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-3"
          >
            <a
              href="#bikes"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
            >
              Explore Bikes
            </a>
            <a
              href="/test-ride"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:border-white/40 transition-colors duration-150"
            >
              Test Ride
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
