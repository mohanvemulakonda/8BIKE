"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { PhoneFrame } from "./AppMockup/PhoneFrame";
import { DashboardScreen } from "./AppMockup/DashboardScreen";
import { RideScreen } from "./AppMockup/RideScreen";
import { BikePassportScreen } from "./AppMockup/BikePassportScreen";
import { Smartphone, Map, Shield, Wrench, Users, Bell } from "lucide-react";

const screens = [
  { id: "dashboard", label: "Dashboard", component: DashboardScreen },
  { id: "ride", label: "Ride", component: RideScreen },
  { id: "passport", label: "Bike Passport", component: BikePassportScreen },
];

const features = [
  {
    icon: Map,
    title: "GPS Ride Tracking",
    desc: "Track every ride with detailed GPS mapping, speed, elevation, and performance stats.",
  },
  {
    icon: Shield,
    title: "Digital Bike Passport",
    desc: "Your bike's identity, warranty, service history, and specs — all in one place.",
  },
  {
    icon: Wrench,
    title: "Smart Maintenance",
    desc: "Component wear tracking and service reminders so you never miss a check-up.",
  },
  {
    icon: Bell,
    title: "Crash Detection",
    desc: "Automatic crash detection with emergency alerts sent to your chosen contacts.",
  },
  {
    icon: Users,
    title: "Rider Community",
    desc: "Discover local routes, join group rides, and connect with 8BIKE riders near you.",
  },
  {
    icon: Smartphone,
    title: "Book & Shop",
    desc: "Book service appointments, order parts, and schedule test rides — all from the app.",
  },
];

export function AppShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);
  const ActiveComponent = screens[activeScreen].component;

  return (
    <section className="py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[var(--max-width)] px-5">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-4">
            8BIKE Connect
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white mb-4">
            YOUR RIDE.
            <br />
            YOUR APP.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="max-w-xl text-text-tertiary text-sm md:text-base font-light leading-relaxed mb-16">
            Track rides, manage your bike, and connect with riders — 8BIKE Connect
            is the companion app that makes every ride count.
          </p>
        </ScrollReveal>

        {/* Phone + Features layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <ScrollReveal direction="left">
            <div className="flex flex-col items-center">
              {/* Screen selector tabs */}
              <div className="flex gap-1 mb-6 bg-[#0e0e0e] rounded-lg p-1">
                {screens.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreen(i)}
                    className={`px-4 py-2 text-[10px] font-medium tracking-wider rounded-md transition-all duration-200 cursor-pointer ${
                      activeScreen === i
                        ? "bg-red text-white"
                        : "text-text-muted hover:text-white"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Phone */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={screens[activeScreen].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <PhoneFrame>
                    <ActiveComponent />
                  </PhoneFrame>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Features list */}
          <div className="space-y-5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#0e0e0e] border border-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:border-red/30 transition-colors duration-300">
                    <f.icon size={18} className="text-red" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
                    <p className="text-xs text-text-tertiary font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Download CTA */}
            <ScrollReveal delay={0.5}>
              <div className="pt-6 flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red text-white text-[10px] font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
                >
                  Coming Soon
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-white text-[10px] font-semibold tracking-widest uppercase rounded-md hover:border-border-hover transition-colors duration-150"
                >
                  Get Notified
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
