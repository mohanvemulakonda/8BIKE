"use client";

import { Monogram } from "../components/Monogram";
import { MonogramV2 } from "../components/MonogramV2";

export default function MonogramPreview() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] pt-8 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl tracking-wider text-white mb-2">
          MONOGRAM COMPARISON
        </h1>
        <p className="text-text-muted text-sm mb-12">
          Original V1 vs Sliced V2
        </p>

        {/* Large comparison */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center">
            <p className="text-[10px] tracking-[3px] uppercase text-text-muted mb-6">
              Original
            </p>
            <Monogram size={200} variant="gradient-dark" bgColor="#0e0e0e" />
          </div>
          <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center">
            <p className="text-[10px] tracking-[3px] uppercase text-red mb-6">
              Sliced V2
            </p>
            <MonogramV2 size={200} variant="gradient-dark" />
          </div>
        </div>

        {/* White variant */}
        <h2 className="font-display text-2xl tracking-wider text-white mb-6">WHITE</h2>
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center">
            <Monogram size={180} variant="white" />
          </div>
          <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center">
            <MonogramV2 size={180} variant="white" />
          </div>
        </div>

        {/* Red variant */}
        <h2 className="font-display text-2xl tracking-wider text-white mb-6">RED</h2>
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center">
            <Monogram size={180} variant="red" />
          </div>
          <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center">
            <MonogramV2 size={180} variant="red" />
          </div>
        </div>

        {/* On dark bg */}
        <h2 className="font-display text-2xl tracking-wider text-white mb-6">ON DARK BG</h2>
        <div className="bg-[#050505] border border-border rounded-xl p-16 flex items-center justify-center gap-20 mb-16">
          <div className="flex flex-col items-center gap-4">
            <Monogram size={160} variant="white" />
            <span className="text-[10px] text-text-muted">Original</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <MonogramV2 size={160} variant="gradient-dark" />
            <span className="text-[10px] text-red">Sliced</span>
          </div>
        </div>

        {/* Sizes */}
        <h2 className="font-display text-2xl tracking-wider text-white mb-6">SIZES</h2>
        <div className="bg-card border border-border rounded-xl p-8 flex items-end gap-8 flex-wrap">
          {[32, 48, 64, 96, 140, 200].map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <MonogramV2 size={s} variant="gradient-dark" />
              <span className="text-[9px] text-text-muted">{s}px</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
