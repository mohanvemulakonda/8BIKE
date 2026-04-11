"use client";

import { Monogram } from "../Monogram";

export function DashboardScreen() {
  return (
    <div className="h-full bg-[#050505] text-white px-5 pt-2 pb-20">
      {/* App header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Monogram size={20} variant="white" />
          <span className="font-display text-sm tracking-[4px]">8BIKE</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#1a1a1a] flex items-center justify-center">
          <span className="text-[9px] font-semibold text-white/60">MV</span>
        </div>
      </div>

      {/* Greeting */}
      <p className="text-[10px] text-white/40 tracking-wider uppercase mb-0.5">Good morning</p>
      <p className="text-base font-semibold text-white mb-4">Ready to ride?</p>

      {/* Today's stats card */}
      <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-4 mb-3">
        <p className="text-[8px] tracking-[2px] uppercase text-white/30 mb-3">This Week</p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="font-display text-2xl text-[#DD0000] leading-none">148</p>
            <p className="text-[8px] text-white/40 mt-1">km ridden</p>
          </div>
          <div>
            <p className="font-display text-2xl text-white leading-none">4:32</p>
            <p className="text-[8px] text-white/40 mt-1">hours</p>
          </div>
          <div>
            <p className="font-display text-2xl text-white leading-none">1,840</p>
            <p className="text-[8px] text-white/40 mt-1">elevation (m)</p>
          </div>
        </div>
        {/* Mini chart bars */}
        <div className="flex items-end gap-1.5 mt-4 h-8">
          {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === 5 ? "#DD0000" : "#1a1a1a",
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="flex-1 text-center text-[7px] text-white/20">{d}</span>
          ))}
        </div>
      </div>

      {/* My Bike card */}
      <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[8px] tracking-[2px] uppercase text-white/30">My Bike</p>
          <span className="text-[7px] px-2 py-0.5 bg-[#0a3d0a] text-[#4ade80] rounded-full">All Good</span>
        </div>
        <p className="text-sm font-semibold text-white mb-0.5">Carbon Pro 8.1</p>
        <p className="text-[9px] text-white/30 mb-3">S/N: 8B-CP81-24-00847</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Chain", val: "82%", color: "#4ade80" },
            { label: "Brakes", val: "91%", color: "#4ade80" },
            { label: "Tires", val: "67%", color: "#FFCC00" },
          ].map((item) => (
            <div key={item.label} className="bg-[#111] rounded-lg p-2">
              <p className="text-[7px] text-white/30 mb-1">{item.label}</p>
              <p className="text-xs font-semibold" style={{ color: item.color }}>{item.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-2">
        <button className="bg-[#DD0000] rounded-xl p-3 text-left">
          <p className="text-[9px] font-semibold tracking-wider uppercase">Start Ride</p>
          <p className="text-[7px] text-white/60 mt-0.5">GPS tracking</p>
        </button>
        <button className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-xl p-3 text-left">
          <p className="text-[9px] font-semibold tracking-wider uppercase text-white/70">Find Routes</p>
          <p className="text-[7px] text-white/30 mt-0.5">Near you</p>
        </button>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-[4px] right-[4px] bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#1a1a1a] rounded-b-[36px] px-6 py-3 flex justify-around">
        {[
          { icon: "⬡", label: "Home", active: true },
          { icon: "◎", label: "Ride", active: false },
          { icon: "⚙", label: "Bike", active: false },
          { icon: "☰", label: "More", active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <span className={`text-sm ${tab.active ? "text-[#DD0000]" : "text-white/20"}`}>{tab.icon}</span>
            <span className={`text-[7px] ${tab.active ? "text-[#DD0000]" : "text-white/20"}`}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
