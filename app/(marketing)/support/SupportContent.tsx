"use client";

import { PageHero } from "../../components/ui/PageHero";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";
import { ScrollReveal, Stagger, StaggerItem } from "../../components/ScrollReveal";
import { FlagBar } from "../../components/FlagBar";
import { IconRuler, IconWrench, IconBook, IconBox, IconShield, IconHelp } from "../../components/ui/Icon";

const categories = [
  {
    icon: IconRuler,
    title: "Sizing Guide",
    desc: "Find your perfect frame size. Use our sizing calculator or consult the detailed geometry charts.",
  },
  {
    icon: IconWrench,
    title: "Maintenance",
    desc: "Keep your 8BIKE running at peak performance. Service intervals, torque specs, and care instructions.",
  },
  {
    icon: IconBook,
    title: "Assembly",
    desc: "Step-by-step assembly instructions for your new 8BIKE. Includes torque specifications and tool requirements.",
  },
  {
    icon: IconBox,
    title: "Shipping & Returns",
    desc: "Information about shipping times, tracking, and our 30-day return policy for unused bikes.",
  },
  {
    icon: IconShield,
    title: "Warranty",
    desc: "Lifetime frame warranty coverage details, crash replacement program, and claim submission.",
  },
  {
    icon: IconHelp,
    title: "FAQ",
    desc: "Answers to the most common questions about 8BIKE products, ordering, and service.",
  },
];

const sizingChart = [
  { size: "XS", height: "155-165 cm", inseam: "71-76 cm" },
  { size: "S", height: "165-172 cm", inseam: "76-81 cm" },
  { size: "M", height: "172-180 cm", inseam: "81-86 cm" },
  { size: "L", height: "180-188 cm", inseam: "86-91 cm" },
  { size: "XL", height: "188-196 cm", inseam: "91-96 cm" },
];

export function SupportContent() {
  return (
    <>
      <PageHero
        tag="Support"
        title="HOW CAN WE HELP?"
        description="Find answers, guides, and resources to get the most out of your 8BIKE."
        compact
      />

      {/* Categories */}
      <section className="py-24 md:py-32">
        <Container>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {categories.map((cat) => (
              <StaggerItem key={cat.title}>
                <div className="bg-card border border-border rounded-xl p-8 hover:border-border-hover transition-colors duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6">
                    <cat.icon size={22} className="text-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-text-tertiary font-light leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Sizing chart */}
      <section className="py-24 md:py-32 bg-card">
        <Container>
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl tracking-wider text-white mb-4">
              SIZING GUIDE
            </h2>
            <p className="text-text-tertiary text-sm font-light leading-relaxed mb-10 max-w-xl">
              Use the chart below as a starting point. For a precise fit, we recommend visiting
              an authorized 8BIKE dealer for a professional bike fitting.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full max-w-2xl">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-[10px] tracking-[3px] uppercase text-text-muted py-3 pr-8">
                      Size
                    </th>
                    <th className="text-left text-[10px] tracking-[3px] uppercase text-text-muted py-3 pr-8">
                      Rider Height
                    </th>
                    <th className="text-left text-[10px] tracking-[3px] uppercase text-text-muted py-3">
                      Inseam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sizingChart.map((row) => (
                    <tr key={row.size} className="border-b border-border">
                      <td className="py-4 pr-8">
                        <span className="font-display text-xl text-red">
                          {row.size}
                        </span>
                      </td>
                      <td className="py-4 pr-8 text-sm text-text-secondary font-light">
                        {row.height}
                      </td>
                      <td className="py-4 text-sm text-text-secondary font-light">
                        {row.inseam}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32">
        <Container className="text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl tracking-wider text-white mb-6">
              STILL NEED HELP?
            </h2>
            <p className="text-text-tertiary text-sm font-light max-w-md mx-auto leading-relaxed mb-8">
              Our support team is available Monday through Friday, 9:00-17:00 CET.
            </p>
            <Button href="/contact">Contact Us</Button>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
