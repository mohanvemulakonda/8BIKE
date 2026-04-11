"use client";

import { ScrollReveal } from "../ScrollReveal";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ tag, title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={className}>
      <ScrollReveal>
        <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-4">
          {tag}
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white mb-6">
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className="max-w-xl text-text-tertiary text-sm md:text-base font-light leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
