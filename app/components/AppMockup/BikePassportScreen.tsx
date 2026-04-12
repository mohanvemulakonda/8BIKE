"use client";

import { Monogram } from "../Monogram";

export function BikePassportScreen() {
  return (
    <div className="h-full bg-[#050505] text-white px-5 pt-2 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[9px] text-white/40">← Back</span>
        <span className="text-[9px] text-white/40 tracking-[2px] uppercase">Bike Passport</span>
        <span className="text-[9px] text-[#DD0000]">Edit</span>
      </div>

      {/* Bike identity card */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0e0e0e] border border-[#222] rounded-2xl p-5 mb-3 relative overflow-hidden">
        {/* Watermark monogram */}
        <div className="absolute top-3 right-3 opacity-[0.06]">
          <Monogram size={80} variant="white" />
        </div>

        <div className="relative">
          <p className="text-[8px] tracking-[3px] uppercase text-[#DD0000] font-medium mb-2">Registered Owner</p>
          <p className="text-lg font-semibold mb-0.5">Carbon Pro 8.1</p>
          <p className="text-[9px] text-white/30 mb-4">Purchased: March 2025</p>

          <div className="space-y-2">
            {[
              { l: "Serial", v: "8B-CP81-24-00847" },
              { l: "Frame", v: "T800 Carbon" },
              { l: "Size", v: "M (54cm)" },
              { l: "Color", v: "Stealth Black" },
              { l: "Groupset", v: "Ultegra Di2" },
            ].map((row) => (
              <div key={row.l} className="flex justify-between items-baseline border-b border-white/5 pb-1.5">
                <span className="text-[8px] tracking-[1.5px] uppercase text-white/25">{row.l}</span>
                <span className="text-[10px] text-white/70">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Warranty status */}
      <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[8px] tracking-[2px] uppercase text-white/30">Warranty</p>
          <span className="text-[7px] px-2 py-0.5 bg-[#0a3d0a] text-[#4ade80] rounded-full">Active</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[8px] text-white/25">Frame</p>
            <p className="text-[10px] text-white/70">Lifetime</p>
          </div>
          <div>
            <p className="text-[8px] text-white/25">Components</p>
            <p className="text-[10px] text-white/70">Until Mar 2027</p>
          </div>
        </div>
      </div>

      {/* Service history */}
      <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-4 mb-3">
        <p className="text-[8px] tracking-[2px] uppercase text-white/30 mb-3">Service History</p>
        <div className="space-y-3">
          {[
            { date: "12 Mar 2026", desc: "Full service", shop: "EIGHT Hamburg" },
            { date: "08 Jan 2026", desc: "Brake bleed", shop: "EIGHT Hamburg" },
            { date: "15 Oct 2025", desc: "First service", shop: "EIGHT Hamburg" },
          ].map((s) => (
            <div key={s.date} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#DD0000] mt-1 shrink-0" />
              <div>
                <p className="text-[10px] text-white/70">{s.desc}</p>
                <p className="text-[8px] text-white/25">{s.date} · {s.shop}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total stats */}
      <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-4">
        <p className="text-[8px] tracking-[2px] uppercase text-white/30 mb-3">Lifetime Stats</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { val: "4,280", label: "km total" },
            { val: "142", label: "rides" },
            { val: "38k", label: "elev (m)" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-xl text-[#DD0000] leading-none">{s.val}</p>
              <p className="text-[7px] text-white/30 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
