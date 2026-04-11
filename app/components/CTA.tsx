"use client";

import { motion } from "framer-motion";
import { Wordmark } from "./Wordmark";
import { FlagBar } from "./FlagBar";
import { Monogram } from "./Monogram";

export function CTA() {
  return (
    <section className="py-24 md:py-32 px-5">
      <div className="mx-auto max-w-[var(--max-width)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card border border-border rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Large monogram watermark behind content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
            <Monogram size={400} variant="gradient-dark" bgColor="#0e0e0e" />
          </div>

          <div className="relative">
            <Wordmark size="xl" />
            <FlagBar className="w-40 mx-auto mt-4" />

            <p className="mt-8 text-text-tertiary text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed">
              Ready to ride German precision? Configure your 8BIKE or get in
              touch with our team.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
              >
                Configure Your Bike
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-4 border border-[var(--border)] text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:border-[var(--border-hover)] transition-colors duration-150"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
