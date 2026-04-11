"use client";

import { motion } from "framer-motion";
import Image from "next/image";


interface PageHeroProps {
  tag: string;
  title: string;
  description?: string;
  image?: string;
  compact?: boolean;
}

export function PageHero({ tag, title, description, image, compact = false }: PageHeroProps) {
  return (
    <section className={`relative ${compact ? "pt-32 pb-16" : "pt-36 pb-24"} overflow-hidden`}>
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
            quality={80}
          />
          <div className="absolute inset-0 bg-[var(--bg-page)]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-transparent" />
        </>
      )}
      <div className="relative mx-auto max-w-[var(--max-width)] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-4">
            {tag}
          </p>
          <h1 className="font-display text-5xl md:text-7xl tracking-wider text-white mb-4">
            {title}
          </h1>


          {description && (
            <p className="max-w-xl text-text-tertiary text-sm md:text-base font-light leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
