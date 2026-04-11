"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroProduct } from "../components/HeroProduct";
import { HeroVideo } from "../components/HeroVideo";
import { HeroSplit } from "../components/HeroSplit";

const heroes = [
  { id: "product", label: "1. Product Hero", desc: "Big bike, clean background, floating specs", component: HeroProduct },
  { id: "video", label: "2. Video Loop", desc: "Cinematic footage, minimal text overlay", component: HeroVideo },
  { id: "split", label: "3. Split Layout", desc: "Text + CTA left, product image right", component: HeroSplit },
];

export default function HeroPreview() {
  const [active, setActive] = useState(0);
  const ActiveHero = heroes[active].component;

  return (
    <div className="relative">
      {/* Sticky selector bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-black/95 backdrop-blur-md border-b border-red/30">
        <div className="mx-auto max-w-5xl px-5 py-3 flex items-center gap-6">
          <span className="text-[10px] tracking-[3px] uppercase text-red font-semibold shrink-0">
            Hero Preview
          </span>
          <div className="flex gap-2 flex-1">
            {heroes.map((h, i) => (
              <button
                key={h.id}
                onClick={() => setActive(i)}
                className={`relative px-4 py-2 text-xs font-medium tracking-wide rounded-md transition-all duration-200 cursor-pointer ${
                  active === i
                    ? "bg-red text-white"
                    : "text-text-tertiary hover:text-white hover:bg-white/5"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-text-muted hidden md:block">
            {heroes[active].desc}
          </p>
        </div>
      </div>

      {/* Hero display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={heroes[active].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ActiveHero />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
