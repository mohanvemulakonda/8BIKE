"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { FlagBar } from "./FlagBar";
import { Monogram } from "./Monogram";

const links = [
  { label: "Bikes", href: "/bikes" },
  { label: "Engineering", href: "/engineering" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[var(--max-width)] px-5 md:px-10">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-[var(--border)] bg-[#0a0a0a]/90 px-6 py-3 backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <Wordmark size="sm" />
            <FlagBar className="w-full h-[2px] mt-0.5" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-wider text-text-tertiary hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Monogram */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 bg-red text-white text-[10px] font-semibold tracking-widest uppercase rounded-md hover:bg-red-hover transition-colors duration-150"
            >
              Get in Touch
            </Link>
            <Monogram size={28} variant="white" />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-5 mt-2 rounded-xl border border-[var(--border)] bg-[#0a0a0a]/95 backdrop-blur-md p-6"
          >
            <nav className="flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl tracking-widest text-white"
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
            </nav>


            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center w-full px-5 py-3 bg-red text-white text-xs font-semibold tracking-widest uppercase rounded-md"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
