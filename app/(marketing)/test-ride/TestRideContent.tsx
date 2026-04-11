"use client";

import { useState } from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Container } from "../../components/ui/Container";
import { ScrollReveal, Stagger, StaggerItem } from "../../components/ScrollReveal";
import { FlagBar } from "../../components/FlagBar";
import { IconPin } from "../../components/ui/Icon";
import { lineup } from "../../data/bikes";

const locations = [
  { city: "Stuttgart", country: "Germany", address: "8BIKE HQ, Industriestrasse 42" },
  { city: "Munich", country: "Germany", address: "8BIKE Store, Marienplatz 8" },
  { city: "Berlin", country: "Germany", address: "8BIKE Pop-up, Unter den Linden 21" },
  { city: "Zurich", country: "Switzerland", address: "Velohaus Zurich, Bahnhofstrasse 15" },
  { city: "Amsterdam", country: "Netherlands", address: "Cycle Lab, Prinsengracht 88" },
  { city: "Vienna", country: "Austria", address: "RadWerk Wien, Mariahilfer Strasse 33" },
];

export function TestRideContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        tag="Test Ride"
        title="FEEL THE DIFFERENCE"
        description="Numbers tell part of the story. The road tells the rest. Book a test ride and experience 8BIKE precision firsthand."
        image="/images/hero-mountain-road.jpg"
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl tracking-wider text-white mb-8">
                  BOOK YOUR RIDE
                </h2>
              </ScrollReveal>

              {submitted ? (
                <ScrollReveal>
                  <div className="bg-card border border-border rounded-xl p-10 text-center">
                    <p className="font-display text-2xl text-white mb-3">
                      BOOKING CONFIRMED
                    </p>
                    <p className="text-text-tertiary text-sm font-light">
                      We'll send you a confirmation email with all the details shortly.
                    </p>
                    <FlagBar className="w-16 mx-auto mt-6" />
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-red transition-colors"
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
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-red transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                        Preferred Location
                      </label>
                      <select className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-red transition-colors">
                        {locations.map((loc) => (
                          <option key={loc.city}>
                            {loc.city}, {loc.country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-red transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                      Bike Interest
                    </label>
                    <select className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-red transition-colors">
                      <option>Any model</option>
                      {lineup.flatMap((s) =>
                        s.bikes.map((b) => (
                          <option key={b.id}>{b.name}</option>
                        ))
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[3px] uppercase text-text-muted block mb-2">
                      Riding Experience
                    </label>
                    <select className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-red transition-colors">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced / Competitive</option>
                      <option>Professional</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
                  >
                    Book Test Ride
                  </button>
                </form>
              )}
            </div>

            {/* Locations */}
            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl tracking-wider text-white mb-8">
                  TEST RIDE LOCATIONS
                </h2>
              </ScrollReveal>

              <Stagger className="space-y-4" staggerDelay={0.08}>
                {locations.map((loc) => (
                  <StaggerItem key={loc.city}>
                    <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
                        <IconPin size={18} className="text-red" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {loc.city}, {loc.country}
                        </h3>
                        <p className="text-xs text-text-muted mt-1">{loc.address}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <ScrollReveal delay={0.4}>
                <div className="mt-6 p-5 bg-card border border-border rounded-xl">
                  <p className="text-xs text-text-tertiary font-light leading-relaxed">
                    Test rides are available by appointment. We recommend booking at least
                    3 days in advance. All test rides are free and typically last 30-60 minutes.
                    Bring your cycling shoes and helmet — we provide everything else.
                  </p>
                  <FlagBar className="w-16 mt-4" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
