"use client";

export default function WordmarkPreview() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] pt-8 pb-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-3xl tracking-wider text-white mb-2">EIGHT — Font-Based Wordmark</h1>
        <p className="text-text-muted text-sm mb-12">Like Canyon/Cube — premium font, perfect styling</p>

        {/* Load premium fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Rajdhani:wght@700&family=Oswald:wght@700&family=Barlow+Condensed:wght@700;800&family=Big+Shoulders+Display:wght@700;800;900&family=Archivo+Black&family=Teko:wght@700&family=Saira+Condensed:wght@800;900&family=Anton&family=Bebas+Neue&display=swap" rel="stylesheet" />

        {/* All options on dark */}
        <div className="space-y-4">

          {/* Current Bebas Neue for reference */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Current (Bebas)</span>
            <span style={{ fontFamily: "'Bebas Neue'", fontSize: 64, letterSpacing: 16, color: "#fff", transform: "skewX(-8deg)", display: "inline-block" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

          {/* Montserrat 900 — like Canyon */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Montserrat 900</span>
            <span style={{ fontFamily: "'Montserrat'", fontWeight: 900, fontSize: 56, letterSpacing: 12, color: "#fff" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

          {/* Montserrat 900 italic */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Montserrat 900 Italic</span>
            <span style={{ fontFamily: "'Montserrat'", fontWeight: 900, fontSize: 56, letterSpacing: 12, color: "#fff", fontStyle: "italic" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

          {/* Big Shoulders Display */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Big Shoulders 900</span>
            <span style={{ fontFamily: "'Big Shoulders Display'", fontWeight: 900, fontSize: 64, letterSpacing: 14, color: "#fff" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

          {/* Oswald */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Oswald 700</span>
            <span style={{ fontFamily: "'Oswald'", fontWeight: 700, fontSize: 60, letterSpacing: 14, color: "#fff" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

          {/* Barlow Condensed */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Barlow Condensed 800</span>
            <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 64, letterSpacing: 14, color: "#fff" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

          {/* Archivo Black */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Archivo Black</span>
            <span style={{ fontFamily: "'Archivo Black'", fontSize: 56, letterSpacing: 12, color: "#fff" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

          {/* Teko */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Teko 700</span>
            <span style={{ fontFamily: "'Teko'", fontWeight: 700, fontSize: 72, letterSpacing: 16, color: "#fff" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

          {/* Saira Condensed */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Saira Condensed 900</span>
            <span style={{ fontFamily: "'Saira Condensed'", fontWeight: 900, fontSize: 64, letterSpacing: 14, color: "#fff" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

          {/* Rajdhani */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Rajdhani 700</span>
            <span style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 64, letterSpacing: 14, color: "#fff" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

          {/* Anton */}
          <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-text-muted tracking-wider uppercase w-40">Anton</span>
            <span style={{ fontFamily: "'Anton'", fontSize: 64, letterSpacing: 14, color: "#fff" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>

        </div>

        {/* Top picks on light background */}
        <p className="text-[10px] tracking-[3px] uppercase text-text-muted mb-4 mt-12">On Light Background</p>
        <div className="space-y-4">
          <div className="bg-white border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-[#999] tracking-wider uppercase w-40">Montserrat 900</span>
            <span style={{ fontFamily: "'Montserrat'", fontWeight: 900, fontSize: 56, letterSpacing: 12, color: "#111" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>
          <div className="bg-white border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-[#999] tracking-wider uppercase w-40">Archivo Black</span>
            <span style={{ fontFamily: "'Archivo Black'", fontSize: 56, letterSpacing: 12, color: "#111" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>
          <div className="bg-white border border-border rounded-xl p-10 flex items-center justify-between">
            <span className="text-[10px] text-[#999] tracking-wider uppercase w-40">Big Shoulders 900</span>
            <span style={{ fontFamily: "'Big Shoulders Display'", fontWeight: 900, fontSize: 64, letterSpacing: 14, color: "#111" }}>
              E<span style={{ color: "#DD0000" }}>I</span>GHT
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
