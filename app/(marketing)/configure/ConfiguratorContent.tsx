"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../components/ui/Container";
import { Monogram } from "../../components/Monogram";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

// ── Configuration options ──────────────────────────────────────────

interface Option {
  id: string;
  name: string;
  desc?: string;
  price: number; // base or add-on in EUR
  image?: string;
}

interface Step {
  id: string;
  title: string;
  subtitle: string;
  options: Option[];
}

const steps: Step[] = [
  {
    id: "model",
    title: "MODEL",
    subtitle: "Choose your frame",
    options: [
      {
        id: "carbon-pro-81",
        name: "Carbon Pro 8.1",
        desc: "T800 carbon race frame — 7.8 kg",
        price: 4299,
        image: "/images/bike-road-black.jpg",
      },
      {
        id: "carbon-sport-82",
        name: "Carbon Sport 8.2",
        desc: "T700 carbon endurance frame — 8.4 kg",
        price: 2899,
        image: "/images/bike-road-red.jpg",
      },
      {
        id: "aero-83",
        name: "Aero 8.3",
        desc: "T800 aero carbon — wind tunnel tested",
        price: 3699,
        image: "/images/bike-road-yellow.jpg",
      },
      {
        id: "endurance-83",
        name: "Endurance 8.3",
        desc: "T700 gravel carbon — 45mm clearance",
        price: 2899,
        image: "/images/lifestyle-gravel.jpg",
      },
    ],
  },
  {
    id: "groupset",
    title: "GROUPSET",
    subtitle: "Drivetrain & brakes",
    options: [
      {
        id: "ultegra-di2",
        name: "Shimano Ultegra Di2",
        desc: "12-speed electronic — crisp, reliable shifting",
        price: 0,
      },
      {
        id: "dura-ace-di2",
        name: "Shimano Dura-Ace Di2",
        desc: "12-speed electronic — lightest, fastest",
        price: 1200,
      },
      {
        id: "force-axs",
        name: "SRAM Force AXS",
        desc: "12-speed wireless — clean routing",
        price: 400,
      },
      {
        id: "red-axs",
        name: "SRAM RED AXS",
        desc: "12-speed wireless — ultimate performance",
        price: 1800,
      },
    ],
  },
  {
    id: "wheels",
    title: "WHEELS",
    subtitle: "Wheelset selection",
    options: [
      {
        id: "aero-45",
        name: "EIGHT Aero 45",
        desc: "45mm carbon tubeless — all-around",
        price: 0,
      },
      {
        id: "aero-60",
        name: "EIGHT Aero 60",
        desc: "60mm carbon tubeless — flat speed",
        price: 400,
      },
      {
        id: "climb-30",
        name: "EIGHT Climb 30",
        desc: "30mm carbon tubeless — lightweight",
        price: 200,
      },
      {
        id: "zipp-303",
        name: "Zipp 303 Firecrest",
        desc: "45mm carbon — premium crosswind stability",
        price: 800,
      },
    ],
  },
  {
    id: "color",
    title: "COLOR",
    subtitle: "Frame finish",
    options: [
      { id: "stealth-black", name: "Stealth Black", desc: "Matte black with gloss accents", price: 0 },
      { id: "racing-red", name: "Racing Red", desc: "Gloss red with black details", price: 0 },
      { id: "arctic-white", name: "Arctic White", desc: "Pearl white with red accents", price: 0 },
      { id: "raw-carbon", name: "Raw Carbon", desc: "Exposed carbon weave, clear coat", price: 200 },
      { id: "midnight-blue", name: "Midnight Blue", desc: "Deep blue metallic", price: 200 },
    ],
  },
  {
    id: "size",
    title: "SIZE",
    subtitle: "Frame size",
    options: [
      { id: "xs", name: "XS", desc: "155 – 165 cm", price: 0 },
      { id: "s", name: "S", desc: "165 – 172 cm", price: 0 },
      { id: "m", name: "M", desc: "172 – 180 cm", price: 0 },
      { id: "l", name: "L", desc: "180 – 188 cm", price: 0 },
      { id: "xl", name: "XL", desc: "188 – 196 cm", price: 0 },
    ],
  },
];

// ── Color swatches ─────────────────────────────────────────────────

const colorSwatches: Record<string, string> = {
  "stealth-black": "#111",
  "racing-red": "#DD0000",
  "arctic-white": "#e8e8e8",
  "raw-carbon": "#2a2a2a",
  "midnight-blue": "#1a2744",
};

// ── Component ──────────────────────────────────────────────────────

export function ConfiguratorContent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({
    model: "carbon-pro-81",
    groupset: "ultegra-di2",
    wheels: "aero-45",
    color: "stealth-black",
    size: "m",
  });
  const [submitted, setSubmitted] = useState(false);

  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  // Calculate total price
  const totalPrice = useMemo(() => {
    let total = 0;
    for (const s of steps) {
      const selected = s.options.find((o) => o.id === selections[s.id]);
      if (selected) total += selected.price;
    }
    return total;
  }, [selections]);

  // Get selected model image
  const modelOption = steps[0].options.find((o) => o.id === selections.model);

  const handleSelect = (optionId: string) => {
    setSelections((prev) => ({ ...prev, [step.id]: optionId }));
  };

  if (submitted) {
    return (
      <section className="pt-32 pb-24">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <Monogram size={48} variant="white" className="mx-auto mb-6" />
            <h1 className="font-display text-4xl tracking-wider text-white mb-4">
              BUILD SUBMITTED
            </h1>
            <p className="text-text-tertiary text-sm font-light leading-relaxed mb-6">
              Your custom EIGHT configuration has been sent to our team.
              We&apos;ll be in touch within 24 hours with availability and delivery timeline.
            </p>
            <div className="bg-card border border-border rounded-xl p-6 text-left mb-8">
              {steps.map((s) => {
                const opt = s.options.find((o) => o.id === selections[s.id]);
                return (
                  <div key={s.id} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-[10px] tracking-[2px] uppercase text-text-muted">{s.title}</span>
                    <span className="text-sm text-white">{opt?.name}</span>
                  </div>
                );
              })}
              <div className="flex justify-between pt-4 mt-2 border-t border-red/20">
                <span className="text-xs font-semibold text-red tracking-wider uppercase">Total</span>
                <span className="font-display text-2xl text-white">&euro;{totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:border-border-hover transition-colors duration-150"
            >
              Back to Home
            </a>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 min-h-screen">
      <Container>
        {/* Top bar — steps + price */}
        <div className="flex items-center justify-between mb-8">
          {/* Step indicators */}
          <div className="flex items-center gap-1">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrentStep(i)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold transition-all duration-300 ${
                    i === currentStep
                      ? "bg-red text-white"
                      : i < currentStep
                        ? "bg-red/20 text-red"
                        : "bg-card border border-border text-text-muted"
                  }`}
                >
                  {i < currentStep ? <Check size={12} /> : i + 1}
                </div>
                <span
                  className={`hidden md:block text-[9px] tracking-wider uppercase mr-3 ${
                    i === currentStep ? "text-white" : "text-text-muted"
                  }`}
                >
                  {s.title}
                </span>
                {i < steps.length - 1 && (
                  <div className={`w-6 h-[1px] mr-1 ${i < currentStep ? "bg-red/30" : "bg-border"}`} />
                )}
              </button>
            ))}
          </div>

          {/* Running total */}
          <div className="text-right">
            <p className="text-[9px] tracking-[2px] uppercase text-text-muted">Total</p>
            <p className="font-display text-2xl text-white">&euro;{totalPrice.toLocaleString()}</p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — bike preview */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={modelOption?.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                {modelOption?.image && (
                  <Image
                    src={modelOption.image}
                    alt={modelOption.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
                <div className="absolute inset-0 bg-[var(--bg-page)]/30" />
              </motion.div>
            </AnimatePresence>

            {/* Color overlay indicator */}
            {step.id === "color" && (
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                <div
                  className="w-4 h-4 rounded-full border border-white/20"
                  style={{ background: colorSwatches[selections.color] || "#111" }}
                />
                <span className="text-[10px] text-white">
                  {steps[3].options.find((o) => o.id === selections.color)?.name}
                </span>
              </div>
            )}

            {/* Build summary overlay */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
              <p className="text-[8px] tracking-[2px] uppercase text-white/40">Your Build</p>
              <p className="text-sm font-semibold text-white">{modelOption?.name}</p>
            </div>
          </div>

          {/* Right — step options */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-2">
                  Step {currentStep + 1} of {steps.length}
                </p>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider text-white mb-1">
                  {step.title}
                </h2>
                <p className="text-text-muted text-sm font-light mb-6">{step.subtitle}</p>

                {/* Options */}
                <div className="space-y-2">
                  {step.options.map((option) => {
                    const isSelected = selections[step.id] === option.id;
                    const isColor = step.id === "color";

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        className={`w-full text-left rounded-xl p-4 transition-all duration-200 cursor-pointer border ${
                          isSelected
                            ? "bg-red/10 border-red/40"
                            : "bg-card border-border hover:border-border-hover"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {/* Color swatch or radio */}
                            {isColor ? (
                              <div
                                className={`w-6 h-6 rounded-full border-2 ${
                                  isSelected ? "border-red" : "border-white/10"
                                }`}
                                style={{ background: colorSwatches[option.id] || "#111" }}
                              />
                            ) : (
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                  isSelected ? "border-red" : "border-white/15"
                                }`}
                              >
                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-red" />}
                              </div>
                            )}

                            <div>
                              <p className={`text-sm font-medium ${isSelected ? "text-white" : "text-text-secondary"}`}>
                                {option.name}
                              </p>
                              {option.desc && (
                                <p className="text-[10px] text-text-muted mt-0.5">{option.desc}</p>
                              )}
                            </div>
                          </div>

                          {/* Price */}
                          <span className={`text-sm font-medium ${option.price === 0 ? "text-text-muted" : "text-white"}`}>
                            {option.price === 0
                              ? step.id === "model"
                                ? `\u20AC${option.price.toLocaleString()}`
                                : "Included"
                              : step.id === "model"
                                ? `\u20AC${option.price.toLocaleString()}`
                                : `+\u20AC${option.price.toLocaleString()}`}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setCurrentStep((p) => p - 1)}
                disabled={isFirst}
                className={`inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase rounded-md transition-colors duration-150 cursor-pointer ${
                  isFirst
                    ? "text-text-disabled cursor-not-allowed"
                    : "border border-border text-white hover:border-border-hover"
                }`}
              >
                <ArrowLeft size={14} /> Back
              </button>

              {isLast ? (
                <button
                  onClick={() => setSubmitted(true)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150 cursor-pointer"
                >
                  Submit Build
                </button>
              ) : (
                <button
                  onClick={() => setCurrentStep((p) => p + 1)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150 cursor-pointer"
                >
                  Next <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
