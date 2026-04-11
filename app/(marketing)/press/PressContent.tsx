"use client";

import { PageHero } from "../../components/ui/PageHero";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";
import { ScrollReveal, Stagger, StaggerItem } from "../../components/ScrollReveal";
import { FlagBar } from "../../components/FlagBar";
import { Monogram } from "../../components/Monogram";
import { Wordmark } from "../../components/Wordmark";
import { IconDownload, IconFile, IconImage } from "../../components/ui/Icon";

const pressReleases = [
  {
    date: "March 2025",
    title: "8BIKE Announces Global Expansion",
    summary:
      "German cycling brand 8BIKE expands dealer network to 15 countries, bringing precision-engineered bikes to riders worldwide.",
  },
  {
    date: "January 2025",
    title: "Aero 8.3 Wins IF Design Award",
    summary:
      "The 8BIKE Aero 8.3 recognized for outstanding industrial design, citing its wind tunnel-optimized tube profiles and integrated cockpit.",
  },
  {
    date: "October 2024",
    title: "New Mountain Line Launch",
    summary:
      "8BIKE introduces four new mountain bikes, from the race-ready XC Race 8.0 to the gravity-focused Enduro 8.6.",
  },
  {
    date: "June 2024",
    title: "Stuttgart University Wind Tunnel Partnership",
    summary:
      "8BIKE partners with Stuttgart University's aerospace wind tunnel facility for next-generation frame development.",
  },
];

const brandAssets = [
  {
    icon: IconImage,
    title: "Logo Package",
    desc: "Monogram, wordmark, and lockup in SVG, PNG, and EPS formats. Light and dark versions.",
  },
  {
    icon: IconFile,
    title: "Brand Guidelines",
    desc: "Typography, colors, usage rules, and clear space requirements. PDF format.",
  },
  {
    icon: IconImage,
    title: "Product Photography",
    desc: "High-resolution product images for editorial use. Studio and lifestyle shots.",
  },
];

export function PressContent() {
  return (
    <>
      <PageHero
        tag="Press"
        title="PRESS ROOM"
        description="Media resources, press releases, and brand assets for journalists and partners."
        compact
      />

      {/* Brand assets preview */}
      <section className="py-24 md:py-32">
        <Container>
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl tracking-wider text-white mb-4">
              BRAND ASSETS
            </h2>
            <p className="text-text-tertiary text-sm font-light leading-relaxed mb-10 max-w-xl">
              Download our brand assets for editorial and press use. For commercial
              licensing inquiries, contact press@8bike.de.
            </p>
          </ScrollReveal>

          {/* Brand preview cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-center aspect-[2/1]">
                <div className="flex items-center gap-6">
                  <Monogram size={64} variant="white" />
                  <Wordmark size="xl" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-border rounded-xl p-10 flex items-center justify-center aspect-[2/1]">
                <div className="flex items-center gap-6">
                  <Monogram size={64} variant="gradient-dark" bgColor="#ffffff" />
                  <Wordmark size="xl" variant="light" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {brandAssets.map((asset) => (
              <StaggerItem key={asset.title}>
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-4">
                    <asset.icon size={18} className="text-red" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {asset.title}
                  </h3>
                  <p className="text-xs text-text-tertiary font-light leading-relaxed mb-4">
                    {asset.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] text-red tracking-widest uppercase font-medium">
                    <IconDownload size={12} /> Download
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Press releases */}
      <section className="py-24 md:py-32 bg-card">
        <Container>
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl tracking-wider text-white mb-10">
              PRESS RELEASES
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl space-y-8">
            {pressReleases.map((pr, i) => (
              <ScrollReveal key={pr.title} delay={i * 0.05}>
                <div className="border-b border-border pb-8">
                  <p className="text-[10px] tracking-[3px] uppercase text-text-muted mb-2">
                    {pr.date}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {pr.title}
                  </h3>
                  <p className="text-sm text-text-tertiary font-light leading-relaxed">
                    {pr.summary}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Media contact */}
      <section className="py-24 md:py-32">
        <Container className="text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl tracking-wider text-white mb-6">
              MEDIA CONTACT
            </h2>
            <p className="text-text-tertiary text-sm font-light max-w-md mx-auto leading-relaxed mb-2">
              For press inquiries, interview requests, and review samples:
            </p>
            <p className="text-text-secondary text-base mb-8">press@8bike.de</p>
            <Button href="/contact">Get in Touch</Button>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
