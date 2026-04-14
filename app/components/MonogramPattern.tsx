"use client";

/**
 * Monogram used as a design character throughout the site:
 * - Background pattern (repeating, low opacity)
 * - Section divider
 * - Watermark
 * - Scroll reveal accent
 */

import { motion } from "framer-motion";

// Inline monogram SVG path for reuse
const MONO_PATH_LEFT_TOP = "M62,14 C36,14 22,28 22,44 C22,60 38,70 62,70";
const MONO_PATH_LEFT_BOT = "M62,70 C32,70 18,84 18,100 C18,118 34,128 62,128";
const MONO_PATH_RIGHT_TOP = "M68,14 C98,14 114,28 114,44 C114,60 98,70 68,70";
const MONO_PATH_RIGHT_BOT = "M68,70 C102,70 118,84 118,100 C118,118 102,128 68,128";

function MonoSVG({ size = 140, color = "#DD0000", opacity = 0.05 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" style={{ opacity }}>
      <path d={MONO_PATH_LEFT_TOP} fill="none" stroke={color} strokeWidth="10" strokeLinejoin="round" />
      <path d={MONO_PATH_LEFT_BOT} fill="none" stroke={color} strokeWidth="10" strokeLinejoin="round" />
      <path d={MONO_PATH_RIGHT_TOP} fill="none" stroke={color} strokeWidth="10" strokeLinejoin="round" />
      <path d={MONO_PATH_RIGHT_BOT} fill="none" stroke={color} strokeWidth="10" strokeLinejoin="round" />
    </svg>
  );
}

/** Large watermark behind content */
export function MonogramWatermark({ position = "center", size = 400 }: { position?: "left" | "center" | "right"; size?: number }) {
  const pos = position === "left" ? "left-[-100px]" : position === "right" ? "right-[-100px]" : "left-1/2 -translate-x-1/2";
  return (
    <div className={`absolute top-1/2 -translate-y-1/2 ${pos} pointer-events-none`}>
      <MonoSVG size={size} opacity={0.03} />
    </div>
  );
}

/** Section divider with monogram */
export function MonogramDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-4 py-8"
    >
      <div className="w-16 h-px bg-gradient-to-r from-transparent to-red/20" />
      <MonoSVG size={32} color="#DD0000" opacity={0.3} />
      <div className="w-16 h-px bg-gradient-to-l from-transparent to-red/20" />
    </motion.div>
  );
}

/** Repeating background pattern */
export function MonogramPatternBg({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><path d='${MONO_PATH_LEFT_TOP}' fill='none' stroke='%23DD0000' stroke-width='6' stroke-linejoin='round' opacity='0.03'/><path d='${MONO_PATH_LEFT_BOT}' fill='none' stroke='%23DD0000' stroke-width='6' stroke-linejoin='round' opacity='0.03'/><path d='${MONO_PATH_RIGHT_TOP}' fill='none' stroke='%23DD0000' stroke-width='6' stroke-linejoin='round' opacity='0.03'/><path d='${MONO_PATH_RIGHT_BOT}' fill='none' stroke='%23DD0000' stroke-width='6' stroke-linejoin='round' opacity='0.03'/></svg>`)}")`,
        backgroundSize: "120px 120px",
      }} />
    </div>
  );
}

/** Scroll reveal monogram accent */
export function MonogramAccent({ side = "left", size = 80 }: { side?: "left" | "right"; size?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`absolute ${side === "left" ? "left-0" : "right-0"} top-0 pointer-events-none`}
    >
      <MonoSVG size={size} color="#DD0000" opacity={0.06} />
    </motion.div>
  );
}
