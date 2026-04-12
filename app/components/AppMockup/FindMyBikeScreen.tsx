"use client";

import { Monogram } from "../Monogram";

export function FindMyBikeScreen() {
  return (
    <div className="h-full bg-[#050505] text-white">
      {/* Map — full width, shows bike location */}
      <div className="relative h-[52%] bg-[#191e2a] overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280" preserveAspectRatio="xMidYMid slice">
          {/* Base */}
          <rect x="0" y="0" width="280" height="280" fill="#191e2a" />

          {/* Water */}
          <path d="M-10,190 C40,182 90,195 140,188 C190,180 240,192 290,186 L290,220 C240,226 190,215 140,222 C90,228 40,218 -10,224 Z" fill="#0e1620" />

          {/* Parks */}
          <ellipse cx="80" cy="90" rx="30" ry="22" fill="#121d16" opacity="0.6" />
          <ellipse cx="220" cy="130" rx="25" ry="18" fill="#121d16" opacity="0.4" />

          {/* Major roads */}
          <path d="M-10,60 L290,60" stroke="#1f2636" strokeWidth="5" />
          <path d="M-10,140 L290,140" stroke="#1f2636" strokeWidth="4" />
          <path d="M70,0 L70,280" stroke="#1f2636" strokeWidth="4" />
          <path d="M180,0 L180,280" stroke="#1f2636" strokeWidth="4" />

          {/* Secondary */}
          <path d="M-10,100 L290,100" stroke="#1a2030" strokeWidth="2" />
          <path d="M-10,170 L290,170" stroke="#1a2030" strokeWidth="2" />
          <path d="M-10,250 L290,250" stroke="#1a2030" strokeWidth="2" />
          <path d="M30,0 L30,280" stroke="#1a2030" strokeWidth="2" />
          <path d="M120,0 L120,190" stroke="#1a2030" strokeWidth="2" />
          <path d="M140,0 L140,190" stroke="#1a2030" strokeWidth="2" />
          <path d="M220,0 L220,190" stroke="#1a2030" strokeWidth="2" />
          <path d="M250,0 L250,190" stroke="#1a2030" strokeWidth="2" />

          {/* Minor streets */}
          <path d="M-10,30 L290,32" stroke="#161c28" strokeWidth="1" />
          <path d="M-10,80 L60,80" stroke="#161c28" strokeWidth="1" />
          <path d="M110,80 L290,78" stroke="#161c28" strokeWidth="1" />
          <path d="M-10,120 L290,118" stroke="#161c28" strokeWidth="1" />
          <path d="M-10,155 L290,155" stroke="#161c28" strokeWidth="1" />
          <path d="M10,0 L10,190" stroke="#161c28" strokeWidth="1" />
          <path d="M50,0 L50,190" stroke="#161c28" strokeWidth="1" />
          <path d="M95,0 L95,90" stroke="#161c28" strokeWidth="1" />
          <path d="M100,110 L100,190" stroke="#161c28" strokeWidth="1" />
          <path d="M155,0 L155,190" stroke="#161c28" strokeWidth="1" />
          <path d="M200,0 L200,190" stroke="#161c28" strokeWidth="1" />
          <path d="M265,0 L265,190" stroke="#161c28" strokeWidth="1" />

          {/* Buildings */}
          <rect x="33" y="65" width="14" height="10" rx="1" fill="#1c2232" />
          <rect x="33" y="42" width="10" height="8" rx="1" fill="#1c2232" />
          <rect x="52" y="64" width="8" height="8" rx="1" fill="#1c2232" />
          <rect x="75" y="64" width="12" height="8" rx="1" fill="#1c2232" />
          <rect x="75" y="42" width="10" height="10" rx="1" fill="#1c2232" />
          <rect x="122" y="64" width="14" height="10" rx="1" fill="#1c2232" />
          <rect x="142" y="42" width="10" height="8" rx="1" fill="#1c2232" />
          <rect x="142" y="64" width="12" height="8" rx="1" fill="#1c2232" />
          <rect x="185" y="64" width="10" height="8" rx="1" fill="#1c2232" />
          <rect x="185" y="42" width="14" height="10" rx="1" fill="#1c2232" />
          <rect x="222" y="42" width="8" height="8" rx="1" fill="#1c2232" />
          <rect x="252" y="42" width="10" height="10" rx="1" fill="#1c2232" />
          <rect x="33" y="104" width="12" height="8" rx="1" fill="#1c2232" />
          <rect x="52" y="102" width="10" height="10" rx="1" fill="#1c2232" />
          <rect x="122" y="104" width="8" height="6" rx="1" fill="#1c2232" />
          <rect x="142" y="102" width="14" height="10" rx="1" fill="#1c2232" />
          <rect x="185" y="104" width="10" height="8" rx="1" fill="#1c2232" />
          <rect x="222" y="104" width="12" height="8" rx="1" fill="#1c2232" />
          <rect x="252" y="102" width="8" height="10" rx="1" fill="#1c2232" />
          <rect x="33" y="144" width="10" height="8" rx="1" fill="#1c2232" />
          <rect x="75" y="144" width="14" height="8" rx="1" fill="#1c2232" />
          <rect x="142" y="144" width="10" height="8" rx="1" fill="#1c2232" />
          <rect x="185" y="144" width="12" height="8" rx="1" fill="#1c2232" />
          <rect x="252" y="144" width="10" height="8" rx="1" fill="#1c2232" />
          {/* South bank */}
          <rect x="33" y="232" width="12" height="8" rx="1" fill="#1a2030" />
          <rect x="75" y="230" width="10" height="10" rx="1" fill="#1a2030" />
          <rect x="122" y="232" width="14" height="8" rx="1" fill="#1a2030" />
          <rect x="185" y="230" width="10" height="10" rx="1" fill="#1a2030" />
          <rect x="222" y="232" width="12" height="8" rx="1" fill="#1a2030" />

          {/* Bridges */}
          <rect x="68" y="188" width="6" height="34" rx="1" fill="#1f2636" />
          <rect x="178" y="187" width="6" height="35" rx="1" fill="#1f2636" />

          {/* Street labels */}
          <text x="75" y="58" fill="#2a3348" fontSize="3.5" fontFamily="sans-serif">Hafenstr.</text>
          <text x="185" y="138" fill="#2a3348" fontSize="3.5" fontFamily="sans-serif">Speicherstadt</text>

          {/* ==== BIKE LOCATION ==== */}
          {/* Accuracy circle */}
          <circle cx="155" cy="110" r="28" fill="#DD0000" opacity="0.05" />
          <circle cx="155" cy="110" r="28" fill="none" stroke="#DD0000" strokeWidth="0.5" opacity="0.2" />

          {/* Pulse animation */}
          <circle cx="155" cy="110" r="8" fill="#DD0000" opacity="0.1">
            <animate attributeName="r" values="8;22;8" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Bike pin */}
          <g transform="translate(155, 110)">
            {/* Pin shadow */}
            <ellipse cx="0" cy="14" rx="6" ry="2" fill="black" opacity="0.3" />
            {/* Pin body */}
            <path d="M0,-18 C-10,-18 -14,-10 -14,-4 C-14,6 0,14 0,14 C0,14 14,6 14,-4 C14,-10 10,-18 0,-18 Z" fill="#DD0000" />
            <path d="M0,-18 C-10,-18 -14,-10 -14,-4 C-14,6 0,14 0,14 C0,14 14,6 14,-4 C14,-10 10,-18 0,-18 Z" fill="none" stroke="#ff2222" strokeWidth="0.5" opacity="0.5" />
            {/* Bike icon inside pin */}
            <circle cx="0" cy="-5" r="5" fill="#fff" opacity="0.15" />
            <text x="0" y="-2" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif" fontWeight="bold">8</text>
          </g>

          {/* Your location (you) */}
          <circle cx="95" cy="155" r="5" fill="#4a9eff" opacity="0.2" />
          <circle cx="95" cy="155" r="3" fill="#4a9eff" />
          <circle cx="95" cy="155" r="1.5" fill="white" />
        </svg>

        {/* Top bar */}
        <div className="absolute top-2 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monogram size={16} variant="white" />
            <span className="text-[9px] font-semibold tracking-[2px]">FIND MY BIKE</span>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
            <span className="text-[8px] text-[#4ade80]">● Connected</span>
          </div>
        </div>
      </div>

      {/* Info panel */}
      <div className="px-5 pt-5 pb-20">
        {/* Bike card */}
        <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-4 mb-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-semibold">Carbon Pro 8.1</p>
              <p className="text-[9px] text-white/30">Last seen: Just now</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#0a3d0a] flex items-center justify-center">
              <span className="text-[12px]">✓</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-[#111] rounded-lg p-2.5">
              <p className="text-[7px] text-white/30 mb-0.5">Distance</p>
              <p className="text-xs font-semibold">280m away</p>
            </div>
            <div className="bg-[#111] rounded-lg p-2.5">
              <p className="text-[7px] text-white/30 mb-0.5">Location</p>
              <p className="text-xs font-semibold">Hafenstr. 42</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-3 gap-2">
            <button className="bg-[#DD0000] rounded-xl py-2.5 text-center">
              <svg className="mx-auto mb-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <p className="text-[7px] font-medium">Ring</p>
            </button>
            <button className="bg-[#111] border border-[#1a1a1a] rounded-xl py-2.5 text-center">
              <svg className="mx-auto mb-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              <p className="text-[7px] font-medium text-white/60">Directions</p>
            </button>
            <button className="bg-[#111] border border-[#1a1a1a] rounded-xl py-2.5 text-center">
              <svg className="mx-auto mb-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              <p className="text-[7px] font-medium text-white/60">Share</p>
            </button>
          </div>
        </div>

        {/* Movement alerts */}
        <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-4 mb-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[8px] tracking-[2px] uppercase text-white/30">Alerts</p>
            <div className="w-8 h-4 rounded-full bg-[#DD0000] flex items-center justify-end px-0.5">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
          </div>
          <p className="text-[9px] text-white/50 leading-relaxed">
            Movement alert is <span className="text-[#DD0000] font-medium">ON</span>. You'll be notified if your bike moves.
          </p>
        </div>

        {/* Location history */}
        <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-4">
          <p className="text-[8px] tracking-[2px] uppercase text-white/30 mb-3">Recent Locations</p>
          <div className="space-y-2.5">
            {[
              { time: "Now", loc: "Hafenstr. 42, Hamburg", active: true },
              { time: "2h ago", loc: "Mönckebergstr. 8", active: false },
              { time: "Yesterday", loc: "Hafenstr. 42, Hamburg", active: false },
            ].map((l) => (
              <div key={l.time} className="flex items-start gap-2.5">
                <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${l.active ? "bg-[#4ade80]" : "bg-white/15"}`} />
                <div>
                  <p className="text-[9px] text-white/60">{l.loc}</p>
                  <p className="text-[7px] text-white/25">{l.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
