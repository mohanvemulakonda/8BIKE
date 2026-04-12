"use client";

import { PageHero } from "../../components/ui/PageHero";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";
import { ScrollReveal, Stagger, StaggerItem } from "../../components/ScrollReveal";

import { IconShield, IconClock, IconWrench } from "../../components/ui/Icon";

const warranties = [
  {
    icon: IconShield,
    title: "Lifetime Frame Warranty",
    desc: "Every EIGHT carbon and aluminum frame is covered by our lifetime warranty for the original owner. This covers manufacturing defects in materials and workmanship.",
  },
  {
    icon: IconClock,
    title: "2-Year Component Warranty",
    desc: "All EIGHT-branded components (wheels, handlebars, seatposts) are covered for 2 years from the date of purchase against manufacturing defects.",
  },
  {
    icon: IconWrench,
    title: "Crash Replacement Program",
    desc: "Accidents happen. Our crash replacement program offers up to 40% off a replacement frame for registered EIGHT owners, regardless of fault.",
  },
];

const faq = [
  {
    q: "What does the lifetime frame warranty cover?",
    a: "The lifetime warranty covers defects in materials and workmanship of the frame and rigid fork for the original owner. Normal wear and tear, crash damage, improper assembly, and modifications are not covered.",
  },
  {
    q: "How do I register my EIGHT for warranty?",
    a: "Register your bike within 30 days of purchase at your authorized dealer or through our website. You'll need your frame serial number and proof of purchase.",
  },
  {
    q: "Is the warranty transferable?",
    a: "The lifetime frame warranty applies to the original owner only. If you sell your EIGHT, the new owner receives a 5-year limited warranty from the original purchase date.",
  },
  {
    q: "How do I submit a warranty claim?",
    a: "Contact your authorized EIGHT dealer or reach out to our support team with photos of the issue, your frame serial number, and proof of purchase. We aim to process all claims within 10 business days.",
  },
  {
    q: "What is the crash replacement discount?",
    a: "Registered EIGHT owners can receive up to 40% off a replacement frame of the same model in the event of crash damage. Contact your dealer for details.",
  },
];

export function WarrantyContent() {
  return (
    <>
      <PageHero
        tag="Warranty"
        title="BUILT TO LAST"
        description="We stand behind every frame we build. That's why every EIGHT comes with a lifetime frame warranty."
        compact
      />

      {/* Warranty types */}
      <section className="py-24 md:py-32">
        <Container>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {warranties.map((w) => (
              <StaggerItem key={w.title}>
                <div className="bg-card border border-border rounded-xl p-8 h-full">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6">
                    <w.icon size={22} className="text-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {w.title}
                  </h3>
                  <p className="text-sm text-text-tertiary font-light leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-card">
        <Container>
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl tracking-wider text-white mb-12">
              FREQUENTLY ASKED
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl space-y-6">
            {faq.map((item, i) => (
              <ScrollReveal key={item.q} delay={i * 0.05}>
                <div className="border-b border-border pb-6">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {item.q}
                  </h3>
                  <p className="text-sm text-text-tertiary font-light leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container className="text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl tracking-wider text-white mb-6">
              NEED HELP?
            </h2>
            <p className="text-text-tertiary text-sm font-light max-w-md mx-auto leading-relaxed mb-8">
              If you need to file a warranty claim or have questions about coverage,
              our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact">Contact Support</Button>
              <Button href="/support" variant="secondary">
                Support Center
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
