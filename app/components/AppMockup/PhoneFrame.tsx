"use client";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: 280, height: 580 }}>
      {/* Phone outer frame */}
      <div className="absolute inset-0 rounded-[40px] bg-[#1a1a1a] border border-[#333] shadow-2xl shadow-black/50">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#1a1a1a] rounded-b-2xl z-20" />
        {/* Camera dot */}
        <div className="absolute top-[9px] left-1/2 translate-x-[20px] w-[10px] h-[10px] rounded-full bg-[#0a0a0a] border border-[#333] z-30" />

        {/* Screen area */}
        <div className="absolute inset-[4px] rounded-[36px] overflow-hidden bg-[#050505]">
          {/* Status bar */}
          <div className="relative z-10 flex items-center justify-between px-7 pt-[10px] pb-1 text-[9px] text-white/70 font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="white" opacity="0.7">
                <rect x="0" y="5" width="2" height="4" rx="0.5"/>
                <rect x="3" y="3" width="2" height="6" rx="0.5"/>
                <rect x="6" y="1" width="2" height="8" rx="0.5"/>
                <rect x="9" y="0" width="2" height="9" rx="0.5"/>
              </svg>
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" stroke="white" opacity="0.7" strokeWidth="1">
                <rect x="0.5" y="0.5" width="13" height="8" rx="1.5"/>
                <rect x="14" y="2.5" width="1.5" height="4" rx="0.5" fill="white" stroke="none"/>
                <rect x="1.5" y="1.5" width="9" height="6" rx="0.5" fill="white" stroke="none"/>
              </svg>
            </div>
          </div>

          {/* App content */}
          <div className="h-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>

      {/* Side button */}
      <div className="absolute right-[-2px] top-[120px] w-[3px] h-[40px] bg-[#333] rounded-r-sm" />
      <div className="absolute left-[-2px] top-[100px] w-[3px] h-[25px] bg-[#333] rounded-l-sm" />
      <div className="absolute left-[-2px] top-[140px] w-[3px] h-[40px] bg-[#333] rounded-l-sm" />
    </div>
  );
}
