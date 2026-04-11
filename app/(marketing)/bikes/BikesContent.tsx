"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../../components/ui/PageHero";
import { Container } from "../../components/ui/Container";
import { FlagBar } from "../../components/FlagBar";
import { lineup } from "../../data/bikes";

export function BikesContent() {
  const [activeTab, setActiveTab] = useState(0);
  const series = lineup[activeTab];

  return (
    <>
      <PageHero
        tag="The Lineup"
        title="ALL BIKES"
        description="Race-bred carbon road frames. Trail-conquering mountain bikes. Boundary-pushing gravel machines. Find your ride."
        compact
      />

      <section className="pb-32">
        <Container>
          {/* Series tabs */}
          <div className="flex gap-0 border-b border-border mb-0">
            {lineup.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(i)}
                className={`relative flex-1 py-5 text-center transition-colors duration-300 cursor-pointer ${
                  activeTab === i
                    ? "text-white"
                    : "text-text-muted hover:text-text-tertiary"
                }`}
              >
                <span className="font-display text-lg md:text-2xl tracking-widest">
                  {s.series.toUpperCase()}
                </span>
                {activeTab === i && (
                  <motion.div
                    layoutId="bikes-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-red"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Bikes grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={series.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-text-tertiary text-sm font-light mt-8 mb-10 max-w-xl">
                {series.desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {series.bikes.map((bike, i) => (
                  <motion.div
                    key={bike.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={`/bikes/${bike.slug}`}
                      className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-border-hover transition-colors duration-300"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={bike.image}
                          alt={bike.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-[var(--bg-page)]/30 group-hover:bg-[var(--bg-page)]/20 transition-colors duration-500" />
                        <div className="absolute top-4 right-4 bg-[var(--bg-page)]/85 backdrop-blur-sm border border-border rounded-md px-3 py-1.5 text-center">
                          <p className="text-[8px] tracking-[1.5px] uppercase text-text-muted">
                            From
                          </p>
                          <p className="text-lg font-bold text-white leading-tight">
                            &euro;{bike.price}
                          </p>
                        </div>
                        <FlagBar className="absolute bottom-0 left-0 right-0 w-full h-[2px] rounded-none" />
                      </div>

                      <div className="p-6">
                        <h3 className="font-display text-xl tracking-wider text-white mb-1">
                          {bike.name.toUpperCase()}
                        </h3>
                        <p className="text-text-secondary text-xs font-light italic mb-3">
                          {bike.tagline}
                        </p>
                        <p className="text-[10px] tracking-[1px] text-text-muted mb-5">
                          {bike.highlight}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-[10px] text-red tracking-widest uppercase font-medium group-hover:gap-2.5 transition-all duration-300">
                          View Details <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>
    </>
  );
}
