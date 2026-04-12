"use client";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: 280, height: 580 }}>
      {/* Outer shadow glow */}
      <div className="absolute -inset-1 rounded-[44px] bg-white/[0.03] blur-xl" />

      {/* Titanium frame */}
      <div
        className="absolute inset-0 rounded-[42px]"
        style={{
          background: "linear-gradient(145deg, #2a2a2e 0%, #1c1c1e 30%, #252528 60%, #1a1a1c 100%)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 8px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)",
        }}
      >
        {/* Frame edge highlight */}
        <div className="absolute inset-0 rounded-[42px] border border-white/[0.08]" />
        <div className="absolute inset-[1px] rounded-[41px] border border-black/30" />

        {/* Dynamic Island */}
        <div
          className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[24px] rounded-full z-30"
          style={{
            background: "#000",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 2px rgba(0,0,0,0.8)",
          }}
        >
          {/* Front camera */}
          <div className="absolute right-[14px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full"
            style={{
              background: "radial-gradient(circle at 35% 35%, #1a2030 0%, #0a0a0f 60%, #050510 100%)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.06), inset 0 0 2px rgba(50,80,120,0.3)",
            }}
          />
          {/* Sensor dot */}
          <div className="absolute left-[18px] top-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-[#0a0a12]"
            style={{ boxShadow: "inset 0 0 1px rgba(255,255,255,0.05)" }}
          />
        </div>

        {/* Screen bezel */}
        <div className="absolute inset-[3px] rounded-[39px] bg-black">
          {/* Screen */}
          <div className="absolute inset-[1px] rounded-[38px] overflow-hidden bg-[#050505]">
            {/* Status bar */}
            <div className="relative z-20 flex items-center justify-between px-7 pt-[12px] pb-1">
              {/* Time */}
              <span className="text-[11px] text-white font-semibold" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>9:41</span>

              {/* Right icons */}
              <div className="flex items-center gap-[5px]">
                {/* Signal bars */}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="white" opacity="0.85">
                  <rect x="0" y="6" width="2.5" height="4" rx="0.5"/>
                  <rect x="3.5" y="4" width="2.5" height="6" rx="0.5"/>
                  <rect x="7" y="2" width="2.5" height="8" rx="0.5"/>
                  <rect x="10.5" y="0" width="2.5" height="10" rx="0.5"/>
                </svg>
                {/* WiFi */}
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" stroke="white" opacity="0.85" strokeWidth="1.2" strokeLinecap="round">
                  <path d="M1,3.5 Q6,0 11,3.5" />
                  <path d="M3,5.5 Q6,3 9,5.5" />
                  <path d="M5,7.5 Q6,6.5 7,7.5" />
                  <circle cx="6" cy="9" r="0.8" fill="white" stroke="none" />
                </svg>
                {/* Battery */}
                <svg width="22" height="10" viewBox="0 0 22 10" opacity="0.85">
                  <rect x="0" y="0" width="19" height="10" rx="2" fill="none" stroke="white" strokeWidth="1"/>
                  <rect x="19.5" y="3" width="2" height="4" rx="1" fill="white"/>
                  <rect x="1.5" y="1.5" width="14" height="7" rx="1" fill="#4ade80"/>
                </svg>
              </div>
            </div>

            {/* App content */}
            <div className="h-full overflow-hidden">
              {children}
            </div>

            {/* Home indicator bar */}
            <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] rounded-full bg-white/20 z-20" />
          </div>
        </div>
      </div>

      {/* Side buttons — titanium look */}
      {/* Power button (right) */}
      <div
        className="absolute right-[-2px] top-[130px] w-[3px] h-[44px] rounded-r-sm"
        style={{
          background: "linear-gradient(90deg, #1a1a1c, #2a2a2e, #1a1a1c)",
          boxShadow: "1px 0 2px rgba(0,0,0,0.4)",
        }}
      />
      {/* Silent switch (left) */}
      <div
        className="absolute left-[-2px] top-[100px] w-[3px] h-[20px] rounded-l-sm"
        style={{
          background: "linear-gradient(270deg, #1a1a1c, #2a2a2e, #1a1a1c)",
          boxShadow: "-1px 0 2px rgba(0,0,0,0.4)",
        }}
      />
      {/* Volume up (left) */}
      <div
        className="absolute left-[-2px] top-[135px] w-[3px] h-[32px] rounded-l-sm"
        style={{
          background: "linear-gradient(270deg, #1a1a1c, #2a2a2e, #1a1a1c)",
          boxShadow: "-1px 0 2px rgba(0,0,0,0.4)",
        }}
      />
      {/* Volume down (left) */}
      <div
        className="absolute left-[-2px] top-[175px] w-[3px] h-[32px] rounded-l-sm"
        style={{
          background: "linear-gradient(270deg, #1a1a1c, #2a2a2e, #1a1a1c)",
          boxShadow: "-1px 0 2px rgba(0,0,0,0.4)",
        }}
      />

      {/* Edge reflection — subtle light streak */}
      <div
        className="absolute top-[60px] right-[2px] w-[1px] h-[200px] rounded-full opacity-[0.06]"
        style={{ background: "linear-gradient(180deg, transparent, white, transparent)" }}
      />
    </div>
  );
}
