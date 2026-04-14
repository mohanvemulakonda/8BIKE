"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FlagBar } from "./FlagBar";
import { Monogram } from "./Monogram";
import { ArrowDown } from "lucide-react";

const heroVideos = [
  "/videos/hero-cycling.mp4",
  "/videos/hero-aerial.mp4",
  "/videos/hero-drone.mp4",
  "/videos/hero-road.mp4",
  "/videos/hero-speed.mp4",
  "/videos/hero-training.mp4",
];

export function HeroVideo() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fading, setFading] = useState(false);
  const nextVideo = (currentVideo + 1) % heroVideos.length;

  const onVideoEnd = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
      setFading(false);
    }, 1500);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Current video */}
      <div
        className="absolute inset-0 transition-opacity duration-[1500ms]"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <video
          key={currentVideo}
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnd}
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-mountain-road.jpg"
          src={heroVideos[currentVideo]}
        />
      </div>

      {/* Next video — preloaded underneath, visible during fade */}
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <video
          key={`next-${nextVideo}`}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideos[nextVideo]}
        />
      </div>

      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[12vh] bg-gradient-to-b from-black/60 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[12vh] bg-gradient-to-t from-black/60 to-transparent z-10" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Center content — minimal, cinematic */}
      <div className="relative z-20 text-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <Monogram size={56} variant="red" className="mx-auto" />
          </motion.div>

          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[12px] md:tracking-[20px] text-white -skew-x-[8deg]"
            initial={{ opacity: 0, letterSpacing: "40px" }}
            animate={{ opacity: 1, letterSpacing: "20px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            E<span className="text-red">I</span>GHT
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="origin-center"
          >
            <FlagBar className="w-48 md:w-64 mx-auto mt-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 text-lg md:text-2xl text-white/80 font-light tracking-wide"
          >
            Pure ride. Nothing else.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#bikes"
            className="inline-flex items-center gap-2 px-10 py-4 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
          >
            Explore Bikes
          </a>
          <a
            href="/test-ride"
            className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:border-white/60 transition-colors duration-150"
          >
            Book a Test Ride
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>

    </section>
  );
}
