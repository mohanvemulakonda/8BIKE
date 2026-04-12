"use client";

import { useState } from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Container } from "../../components/ui/Container";
import { ScrollReveal, Stagger, StaggerItem } from "../../components/ScrollReveal";

import { IconMail, IconPin, IconPhone } from "../../components/ui/Icon";

const contactMethods = [
  {
    icon: IconMail,
    title: "Email",
    detail: "hello@eight.bike",
    desc: "For general inquiries and partnerships",
  },
  {
    icon: IconPhone,
    title: "Phone",
    detail: "+49 40 000 0000",
    desc: "Mon-Fri, 9:00-17:00 CET",
  },
  {
    icon: IconPin,
    title: "Headquarters",
    detail: "Hamburg, Germany",
    desc: "EIGHT GmbH, Hafenstrasse 42",
  },
];

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        tag="Contact"
        title="GET IN TOUCH"
        description="Have a question about our bikes? Want to become a dealer? We'd love to hear from you."
        compact
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl tracking-wider text-white mb-8">
                  SEND A MESSAGE
                </h2>
              </ScrollReveal>

              {submitted ? (
                <ScrollReveal>
                  <div className="bg-card border border-border rounded-xl p-10 text-center">
                    <p className="font-display text-2xl text-white mb-3">
                      MESSAGE SENT
                    </p>
                    <p className="text-text-tertiary text-sm font-light">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>


                  </div>
                </ScrollReveal>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <ScrollReveal delay={0.05}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-red transition-colors"
                          placeholder="Max"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-red transition-colors"
                          placeholder="Mustermann"
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.1}>
                    <div>
                      <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-red transition-colors"
                        placeholder="max@example.com"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.15}>
                    <div>
                      <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                        Subject
                      </label>
                      <select className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-red transition-colors">
                        <option>General Inquiry</option>
                        <option>Sales / Pricing</option>
                        <option>Dealer Partnership</option>
                        <option>Press / Media</option>
                        <option>Warranty Claim</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <div>
                      <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-red transition-colors resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.25}>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
                    >
                      Send Message
                    </button>
                  </ScrollReveal>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl tracking-wider text-white mb-8">
                  CONTACT INFO
                </h2>
              </ScrollReveal>

              <Stagger className="space-y-6" staggerDelay={0.1}>
                {contactMethods.map((method) => (
                  <StaggerItem key={method.title}>
                    <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
                        <method.icon size={18} className="text-red" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">
                          {method.title}
                        </h3>
                        <p className="text-sm text-text-secondary font-light">
                          {method.detail}
                        </p>
                        <p className="text-xs text-text-muted mt-1">{method.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <ScrollReveal delay={0.3}>
                <div className="mt-8 bg-card border border-border rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Dealer Inquiries
                  </h3>
                  <p className="text-sm text-text-tertiary font-light leading-relaxed mb-3">
                    Interested in becoming an authorized EIGHT dealer? We're expanding
                    our network across Europe and beyond.
                  </p>
                  <p className="text-sm text-text-secondary">
                    dealers@eight.bike
                  </p>


                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
