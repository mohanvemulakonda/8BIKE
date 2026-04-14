import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { FlagBar } from "./FlagBar";
import { Monogram } from "./Monogram";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Road Bikes", href: "/bikes?series=road" },
      { label: "Mountain Bikes", href: "/bikes?series=mountain" },
      { label: "Gravel Bikes", href: "/bikes?series=gravel" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Engineering", href: "/engineering" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Test Ride", href: "/test-ride" },
      { label: "Warranty", href: "/warranty" },
      { label: "Support", href: "/support" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-[var(--max-width)] px-5 md:px-10 pt-16 pb-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Wordmark size="md" />
            <div className="flex w-20 h-[2px] mt-2 rounded-sm overflow-hidden">
              <span className="flex-1" style={{ background: "#222" }} />
              <span className="flex-1" style={{ background: "#DD0000" }} />
              <span className="flex-1" style={{ background: "#FFCC00" }} />
            </div>
            <p className="text-xs text-text-muted mt-4 leading-relaxed">
              Designed in Hamburg
              <br />
              Pure Ride. Nothing Else.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-text-tertiary mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-text-disabled">
            &copy; 2026 EIGHT GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-[11px] text-text-muted">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/imprint" className="hover:text-white transition-colors">Imprint</Link>
            </div>
            <Monogram size={32} variant="red" />
          </div>
        </div>

        <div className="flex w-full h-[3px] rounded-none overflow-hidden">
          <span className="flex-1" style={{ background: "#222" }} />
          <span className="flex-1" style={{ background: "#DD0000" }} />
          <span className="flex-1" style={{ background: "#FFCC00" }} />
        </div>
      </div>
    </footer>
  );
}
