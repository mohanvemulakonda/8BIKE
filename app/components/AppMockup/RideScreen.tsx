"use client";

export function RideScreen() {
  return (
    <div className="h-full bg-[#050505] text-white">
      {/* Map area */}
      <div className="relative h-[55%] bg-[#1a1f2e] overflow-hidden">
        {/* Dark city map — Hamburg-inspired */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 320" preserveAspectRatio="xMidYMid slice">
          {/* Base land */}
          <rect x="0" y="0" width="280" height="320" fill="#191e2a" />

          {/* Alster lake */}
          <path d="M100,85 C115,75 145,72 160,80 C172,86 178,100 175,115 C170,135 155,145 140,148 C125,150 108,142 100,130 C92,118 88,98 100,85 Z" fill="#0e1620" />
          <path d="M100,85 C115,75 145,72 160,80 C172,86 178,100 175,115 C170,135 155,145 140,148 C125,150 108,142 100,130 C92,118 88,98 100,85 Z" fill="none" stroke="#142030" strokeWidth="1" />

          {/* Elbe river — wide, runs across bottom */}
          <path d="M-10,230 C30,225 70,235 110,228 C150,220 190,232 230,226 C260,222 280,228 290,225 L290,260 C270,258 240,265 210,260 C170,253 130,262 90,258 C50,255 20,262 -10,258 Z" fill="#0e1620" />
          <path d="M-10,230 C30,225 70,235 110,228 C150,220 190,232 230,226 C260,222 280,228 290,225" fill="none" stroke="#142030" strokeWidth="0.5" />
          <path d="M290,260 C270,258 240,265 210,260 C170,253 130,262 90,258 C50,255 20,262 -10,258" fill="none" stroke="#142030" strokeWidth="0.5" />

          {/* Canal from Alster to Elbe */}
          <path d="M135,148 C133,165 130,190 128,228" fill="none" stroke="#0e1620" strokeWidth="6" />

          {/* Parks */}
          <path d="M30,60 C40,50 65,48 75,58 C82,68 78,85 65,90 C50,95 32,85 28,72 C26,66 28,62 30,60 Z" fill="#121d16" opacity="0.7" />
          <path d="M195,155 C210,148 230,152 235,165 C238,178 225,188 212,186 C198,184 190,170 195,155 Z" fill="#121d16" opacity="0.5" />
          <path d="M40,265 C55,260 70,263 72,275 C73,285 60,290 48,288 C38,285 35,272 40,265 Z" fill="#121d16" opacity="0.5" />

          {/* Highway — thick, lighter */}
          <path d="M-10,40 C40,42 80,55 120,50 C160,45 200,35 240,38 C260,40 280,42 290,43" fill="none" stroke="#232a38" strokeWidth="7" />
          <path d="M-10,40 C40,42 80,55 120,50 C160,45 200,35 240,38 C260,40 280,42 290,43" fill="none" stroke="#2a3244" strokeWidth="5" />
          {/* Highway center line */}
          <path d="M-10,40 C40,42 80,55 120,50 C160,45 200,35 240,38 C260,40 280,42 290,43" fill="none" stroke="#333d50" strokeWidth="0.5" strokeDasharray="4 3" />

          {/* Main roads — medium */}
          <path d="M-10,130 L85,130 C95,130 100,125 100,115" fill="none" stroke="#1f2636" strokeWidth="4" />
          <path d="M175,115 C180,125 185,130 195,130 L290,130" fill="none" stroke="#1f2636" strokeWidth="4" />
          <path d="M-10,185 L290,185" fill="none" stroke="#1f2636" strokeWidth="4" />
          <path d="M60,0 L60,230" fill="none" stroke="#1f2636" strokeWidth="4" />
          <path d="M200,0 L200,230" fill="none" stroke="#1f2636" strokeWidth="4" />
          <path d="M135,0 L135,85" fill="none" stroke="#1f2636" strokeWidth="3" />
          <path d="M135,148 L135,228" fill="none" stroke="#1f2636" strokeWidth="3" />

          {/* South of river roads */}
          <path d="M-10,290 L290,290" fill="none" stroke="#1f2636" strokeWidth="3" />
          <path d="M60,258 L60,320" fill="none" stroke="#1f2636" strokeWidth="3" />
          <path d="M140,258 L140,320" fill="none" stroke="#1f2636" strokeWidth="3" />
          <path d="M220,258 L220,320" fill="none" stroke="#1f2636" strokeWidth="3" />

          {/* Secondary roads */}
          <path d="M-10,70 L290,75" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M-10,100 L85,100" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M175,100 L290,100" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M-10,155 L100,155" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M170,155 L290,160" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M-10,210 L120,210" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M150,210 L290,210" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M30,40 L30,230" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M90,40 L90,85" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M90,148 L90,230" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M165,40 L168,85" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M165,148 L162,230" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M235,40 L235,230" fill="none" stroke="#1a2030" strokeWidth="2" />
          <path d="M260,40 L260,230" fill="none" stroke="#1a2030" strokeWidth="2" />

          {/* Small streets — thin grid */}
          <path d="M10,55 L10,230" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M45,55 L45,130" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M75,55 L75,100" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M110,40 L108,85" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M185,40 L185,100" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M215,40 L215,130" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M250,55 L248,130" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M-10,85 L50,85" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M-10,115 L55,115" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M-10,145 L60,145" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M-10,170 L290,173" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M-10,198 L120,195" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M155,195 L290,198" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M200,130 L200,185" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M220,130 L218,185" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M250,130 L248,185" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M45,155 L48,228" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M75,155 L75,228" fill="none" stroke="#161c28" strokeWidth="1" />
          <path d="M110,155 L108,228" fill="none" stroke="#161c28" strokeWidth="1" />

          {/* Building blocks — dense city center */}
          {/* North of Alster */}
          <rect x="32" y="44" width="10" height="8" rx="1" fill="#1c2232" />
          <rect x="62" y="44" width="8" height="6" rx="1" fill="#1c2232" />
          <rect x="93" y="44" width="12" height="7" rx="1" fill="#1c2232" />
          <rect x="112" y="44" width="8" height="5" rx="1" fill="#1c2232" />
          <rect x="168" y="44" width="14" height="8" rx="1" fill="#1c2232" />
          <rect x="203" y="44" width="9" height="6" rx="1" fill="#1c2232" />
          <rect x="217" y="44" width="14" height="8" rx="1" fill="#1c2232" />
          <rect x="237" y="44" width="10" height="7" rx="1" fill="#1c2232" />
          <rect x="252" y="44" width="8" height="5" rx="1" fill="#1c2232" />

          {/* Between highway and Alster */}
          <rect x="32" y="58" width="8" height="10" rx="1" fill="#1c2232" />
          <rect x="93" y="58" width="7" height="8" rx="1" fill="#1c2232" />
          <rect x="112" y="56" width="10" height="6" rx="1" fill="#1c2232" />
          <rect x="168" y="58" width="12" height="10" rx="1" fill="#1c2232" />
          <rect x="187" y="60" width="8" height="6" rx="1" fill="#1c2232" />
          <rect x="203" y="56" width="10" height="12" rx="1" fill="#1c2232" />
          <rect x="237" y="56" width="6" height="8" rx="1" fill="#1c2232" />

          {/* East of Alster */}
          <rect x="180" y="90" width="14" height="8" rx="1" fill="#1c2232" />
          <rect x="203" y="88" width="9" height="10" rx="1" fill="#1c2232" />
          <rect x="217" y="92" width="14" height="6" rx="1" fill="#1c2232" />
          <rect x="237" y="88" width="10" height="8" rx="1" fill="#1c2232" />
          <rect x="252" y="90" width="8" height="6" rx="1" fill="#1c2232" />
          <rect x="180" y="104" width="10" height="12" rx="1" fill="#1c2232" />
          <rect x="203" y="106" width="8" height="8" rx="1" fill="#1c2232" />
          <rect x="240" y="104" width="12" height="10" rx="1" fill="#1c2232" />

          {/* West of Alster */}
          <rect x="10" y="78" width="12" height="8" rx="1" fill="#1c2232" />
          <rect x="32" y="75" width="8" height="10" rx="1" fill="#1c2232" />
          <rect x="10" y="104" width="14" height="8" rx="1" fill="#1c2232" />
          <rect x="32" y="102" width="10" height="10" rx="1" fill="#1c2232" />
          <rect x="10" y="118" width="8" height="6" rx="1" fill="#1c2232" />
          <rect x="32" y="117" width="12" height="8" rx="1" fill="#1c2232" />

          {/* South of Alster — city center, denser */}
          <rect x="10" y="135" width="14" height="8" rx="1" fill="#1e2434" />
          <rect x="32" y="133" width="10" height="10" rx="1" fill="#1e2434" />
          <rect x="48" y="136" width="8" height="6" rx="1" fill="#1e2434" />
          <rect x="62" y="133" width="12" height="10" rx="1" fill="#1e2434" />
          <rect x="78" y="136" width="8" height="6" rx="1" fill="#1e2434" />
          <rect x="93" y="133" width="14" height="8" rx="1" fill="#1e2434" />
          <rect x="140" y="155" width="10" height="8" rx="1" fill="#1e2434" />
          <rect x="172" y="133" width="10" height="10" rx="1" fill="#1e2434" />
          <rect x="203" y="135" width="14" height="8" rx="1" fill="#1e2434" />
          <rect x="222" y="133" width="8" height="10" rx="1" fill="#1e2434" />
          <rect x="237" y="136" width="10" height="6" rx="1" fill="#1e2434" />
          <rect x="252" y="133" width="8" height="8" rx="1" fill="#1e2434" />

          {/* Between center and river */}
          <rect x="10" y="162" width="10" height="8" rx="1" fill="#1c2232" />
          <rect x="32" y="160" width="12" height="10" rx="1" fill="#1c2232" />
          <rect x="48" y="163" width="8" height="6" rx="1" fill="#1c2232" />
          <rect x="62" y="160" width="10" height="10" rx="1" fill="#1c2232" />
          <rect x="78" y="163" width="8" height="6" rx="1" fill="#1c2232" />
          <rect x="93" y="160" width="12" height="8" rx="1" fill="#1c2232" />
          <rect x="113" y="162" width="8" height="6" rx="1" fill="#1c2232" />
          <rect x="142" y="160" width="10" height="8" rx="1" fill="#1c2232" />
          <rect x="172" y="160" width="14" height="10" rx="1" fill="#1c2232" />
          <rect x="203" y="162" width="12" height="8" rx="1" fill="#1c2232" />
          <rect x="237" y="160" width="8" height="6" rx="1" fill="#1c2232" />

          {/* Harbor area */}
          <rect x="10" y="190" width="16" height="12" rx="1" fill="#1a2030" />
          <rect x="32" y="192" width="10" height="8" rx="1" fill="#1a2030" />
          <rect x="62" y="188" width="14" height="12" rx="1" fill="#1a2030" />
          <rect x="78" y="192" width="8" height="8" rx="1" fill="#1a2030" />
          <rect x="93" y="190" width="12" height="10" rx="1" fill="#1a2030" />
          <rect x="155" y="190" width="10" height="8" rx="1" fill="#1a2030" />
          <rect x="203" y="190" width="14" height="10" rx="1" fill="#1a2030" />
          <rect x="222" y="192" width="10" height="8" rx="1" fill="#1a2030" />
          <rect x="248" y="190" width="12" height="10" rx="1" fill="#1a2030" />

          {/* South bank */}
          <rect x="10" y="264" width="12" height="8" rx="1" fill="#1a2030" />
          <rect x="32" y="262" width="10" height="10" rx="1" fill="#1a2030" />
          <rect x="65" y="264" width="14" height="8" rx="1" fill="#1a2030" />
          <rect x="100" y="262" width="8" height="10" rx="1" fill="#1a2030" />
          <rect x="145" y="264" width="12" height="8" rx="1" fill="#1a2030" />
          <rect x="175" y="262" width="10" height="10" rx="1" fill="#1a2030" />
          <rect x="225" y="264" width="14" height="8" rx="1" fill="#1a2030" />

          {/* Street labels — tiny */}
          <text x="62" y="128" fill="#2a3348" fontSize="4" fontFamily="sans-serif">Mönckebergstr.</text>
          <text x="205" y="183" fill="#2a3348" fontSize="3.5" fontFamily="sans-serif">Hafenstr.</text>
          <text x="115" y="108" fill="#1e2840" fontSize="3" fontFamily="sans-serif">Alster</text>

          {/* Bridges over Elbe */}
          <rect x="57" y="226" width="7" height="36" rx="1" fill="#1f2636" />
          <rect x="137" y="224" width="7" height="38" rx="1" fill="#1f2636" />
          <rect x="217" y="225" width="7" height="37" rx="1" fill="#1f2636" />

          {/* === ROUTE === */}
          {/* Route glow */}
          <path
            d="M35,295 L60,295 L60,260 L60,230 L75,185 L90,160 L100,155 L110,155 L135,150 L150,130 L165,105 L175,100 L200,100 L235,75 L250,44"
            fill="none"
            stroke="#DD0000"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.12"
          />
          {/* Route line */}
          <path
            d="M35,295 L60,295 L60,260 L60,230 L75,185 L90,160 L100,155 L110,155 L135,150 L150,130 L165,105 L175,100 L200,100 L235,75 L250,44"
            fill="none"
            stroke="#DD0000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Start marker */}
          <circle cx="35" cy="295" r="6" fill="#4ade80" opacity="0.15" />
          <circle cx="35" cy="295" r="3" fill="#4ade80" />
          <text x="42" y="298" fill="#4ade80" fontSize="4" fontFamily="sans-serif" opacity="0.7">Start</text>

          {/* Km markers */}
          <circle cx="60" cy="230" r="1.5" fill="#DD0000" opacity="0.5" />
          <text x="64" y="232" fill="#DD0000" fontSize="3.5" fontFamily="sans-serif" opacity="0.5">10k</text>
          <circle cx="110" cy="155" r="1.5" fill="#DD0000" opacity="0.5" />
          <text x="114" y="157" fill="#DD0000" fontSize="3.5" fontFamily="sans-serif" opacity="0.5">20k</text>
          <circle cx="200" cy="100" r="1.5" fill="#DD0000" opacity="0.5" />
          <text x="204" y="102" fill="#DD0000" fontSize="3.5" fontFamily="sans-serif" opacity="0.5">30k</text>

          {/* Current position — pulsing */}
          <circle cx="250" cy="44" r="12" fill="#DD0000" opacity="0.08">
            <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0;0.15" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="44" r="6" fill="#DD0000" />
          <circle cx="250" cy="44" r="2.5" fill="white" />

          {/* Direction indicator */}
          <polygon points="250,36 247,42 253,42" fill="white" opacity="0.8" />
        </svg>

        {/* Top overlay - back + timer */}
        <div className="absolute top-2 left-4 right-4 flex items-center justify-between">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5">
            <span className="text-[8px] text-white/50">ELAPSED</span>
            <p className="font-display text-lg text-white leading-none">1:24:08</p>
          </div>
          <div className="bg-[#DD0000] rounded-lg px-3 py-2">
            <span className="text-[8px] font-semibold tracking-wider">RECORDING</span>
          </div>
        </div>
      </div>

      {/* Stats panel */}
      <div className="px-5 pt-4 pb-20">
        {/* Main stat */}
        <div className="text-center mb-4">
          <p className="font-display text-5xl text-white leading-none">32.4</p>
          <p className="text-[9px] text-white/30 tracking-[2px] uppercase mt-1">kilometers</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { val: "28.6", unit: "km/h", label: "Avg Speed" },
            { val: "42.1", unit: "km/h", label: "Max Speed" },
            { val: "486", unit: "m", label: "Elevation" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0e0e0e] rounded-xl p-3 text-center">
              <p className="font-display text-lg text-white leading-none">
                {s.val}
                <span className="text-[8px] text-white/30 ml-0.5">{s.unit}</span>
              </p>
              <p className="text-[7px] text-white/30 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            { val: "168", unit: "bpm", label: "Heart Rate" },
            { val: "87", unit: "rpm", label: "Cadence" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0e0e0e] rounded-xl p-3 text-center">
              <p className="font-display text-lg text-[#DD0000] leading-none">
                {s.val}
                <span className="text-[8px] text-white/30 ml-0.5">{s.unit}</span>
              </p>
              <p className="text-[7px] text-white/30 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Stop button */}
        <div className="flex justify-center mt-5">
          <div className="w-14 h-14 rounded-full bg-[#DD0000] flex items-center justify-center">
            <div className="w-5 h-5 rounded-sm bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
