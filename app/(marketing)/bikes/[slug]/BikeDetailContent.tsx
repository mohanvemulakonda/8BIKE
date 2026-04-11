"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "../../../components/ui/Container";
import { Button } from "../../../components/ui/Button";
import { SpecRow } from "../../../components/ui/SpecRow";
import { FlagBar } from "../../../components/FlagBar";
import { ScrollReveal } from "../../../components/ScrollReveal";
import type { Bike } from "../../../data/bikes";

interface Props {
  bike: Bike;
}

export function BikeDetailContent({ bike }: Props) {
  const seriesLabel =
    bike.series === "road"
      ? "Road"
      : bike.series === "mountain"
        ? "Mountain"
        : "Gravel";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={bike.image}
            alt=""
            fill
            className="object-cover"
            priority
            quality={80}
          />
          <div className="absolute inset-0 bg-[var(--bg-page)]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-transparent" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/bikes?series=${bike.series}`}
              className="inline-flex items-center gap-2 text-xs text-text-muted tracking-widest uppercase hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={12} /> {seriesLabel} Bikes
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Bike image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-[var(--bg-page)]/10" />
                <FlagBar className="absolute bottom-0 left-0 right-0 w-full h-[3px] rounded-none" />
              </div>

              {/* Info */}
              <div>
                <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-3">
                  {seriesLabel} Series
                </p>
                <h1 className="font-display text-5xl md:text-7xl tracking-wider text-white mb-2">
                  {bike.name.toUpperCase()}
                </h1>
                <p className="text-text-secondary text-base italic mb-4">
                  {bike.tagline}
                </p>
                <FlagBar className="w-24 mb-6" />

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-[10px] tracking-[2px] uppercase text-text-muted">
                    From
                  </span>
                  <span className="font-display text-4xl text-white">
                    &euro;{bike.price}
                  </span>
                </div>

                <p className="text-text-tertiary text-sm font-light leading-relaxed mb-8">
                  {bike.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href="/contact">
                    Contact Dealer
                  </Button>
                  <Button href="/test-ride" variant="secondary">
                    Book Test Ride
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Key highlights */}
      <section className="py-16 border-b border-border">
        <Container>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {bike.highlight.split(" / ").map((h) => (
              <ScrollReveal key={h}>
                <div className="text-center">
                  <p className="font-display text-2xl text-red">{h.split(" ")[0]}</p>
                  <p className="text-[10px] tracking-[2px] uppercase text-text-muted mt-1">
                    {h.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Specs + Features */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Specifications */}
            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider text-white mb-8">
                  SPECIFICATIONS
                </h2>
              </ScrollReveal>
              <div className="space-y-4">
                {bike.specs.map((spec, i) => (
                  <ScrollReveal key={spec.label} delay={i * 0.05}>
                    <SpecRow label={spec.label} value={spec.value} />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider text-white mb-8">
                  KEY FEATURES
                </h2>
              </ScrollReveal>
              <ul className="space-y-4">
                {bike.features.map((feature, i) => (
                  <ScrollReveal key={feature} delay={i * 0.05}>
                    <li className="flex items-start gap-3 text-sm text-text-secondary font-light leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red shrink-0" />
                      {feature}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-card">
        <Container className="text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider text-white mb-6">
              READY TO RIDE?
            </h2>
            <p className="text-text-tertiary text-sm font-light max-w-md mx-auto leading-relaxed mb-8">
              Contact your nearest 8BIKE dealer to configure your {bike.name} or
              book a test ride.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact">Contact Dealer</Button>
              <Button href="/test-ride" variant="secondary">
                Book Test Ride
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
