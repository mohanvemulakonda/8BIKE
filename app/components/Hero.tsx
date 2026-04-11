"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wordmark } from "./Wordmark";
import { FlagBar } from "./FlagBar";
import { Monogram } from "./Monogram";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full background image */}
      <Image
        src="/images/hero-mountain-road.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={85}
      />
      {/* Heavy dark overlay */}
      <div className="absolute inset-0 bg-[var(--bg-page)]/75" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_var(--bg-page)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative text-center px-5"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <Monogram size={56} variant="white" className="mx-auto" />
        </motion.div>
        <Wordmark size="hero" />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left"
        >
          <FlagBar className="w-48 md:w-64 mx-auto mt-4" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-sm md:text-base text-white/50 font-light max-w-sm mx-auto leading-relaxed"
        >
          German engineered. Precision built.
          <br />
          Every ride, earned.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10"
        >
          <a
            href="#story"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
          >
            Discover 8BIKE
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
