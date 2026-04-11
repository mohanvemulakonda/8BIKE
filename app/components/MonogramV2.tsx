"use client";

import { useId } from "react";

interface MonogramV2Props {
  size?: number;
  variant?: "gradient-dark" | "gradient-light" | "white" | "red";
  bgColor?: string;
  className?: string;
}

export function MonogramV2({
  size = 48,
  variant = "gradient-dark",
  bgColor,
  className = "",
}: MonogramV2Props) {
  const uid = useId().replace(/:/g, "");
  const clipUpper = `mono2-cu-${uid}`;
  const clipLower = `mono2-cl-${uid}`;

  // Colors per variant
  const colors = {
    "gradient-dark": { lower: "#2a2d32", upper: "#DD0000" },
    "gradient-light": { lower: "#333", upper: "#CC0000" },
    white: { lower: "#ffffff", upper: "#cccccc" },
    red: { lower: "#DD0000", upper: "#ff4444" },
  };

  const { lower: lowerColor, upper: upperColor } = colors[variant];

  // Bold filled 8 — continuous figure-8 silhouette with pinched waist
  // Outer shape is one continuous path, inner holes are separate
  // Waist at y=68, narrowing to ~54-86 at the pinch point
  const eightPath = [
    // Outer silhouette (CW) — continuous figure-8
    "M54,68",                          // start at waist left
    "C54,58 44,48 44,38",             // curve up to top-left
    "C44,20 55,10 70,10",             // around top
    "C85,10 96,20 96,38",             // top-right
    "C96,48 86,58 86,68",             // down to waist right
    "C86,78 100,88 100,102",          // curve down to bottom-right
    "C100,120 88,132 70,132",         // around bottom
    "C52,132 40,120 40,102",          // bottom-left
    "C40,88 54,78 54,68 Z",           // back up to waist left

    // Top inner hole (CCW)
    "M62,68",
    "C62,60 56,52 56,42",
    "C56,28 62,22 70,22",
    "C78,22 84,28 84,42",
    "C84,52 78,60 78,68",
    "C75,64 65,64 62,68 Z",

    // Bottom inner hole (CCW)
    "M62,68",
    "C62,76 52,84 52,100",
    "C52,114 58,122 70,122",
    "C82,122 88,114 88,100",
    "C88,84 78,76 78,68",
    "C75,72 65,72 62,68 Z",
  ].join(" ");

  // Slash at ~35° from horizontal, through center (70, 73)
  // Line: y = 119 - 0.7x
  // At x=0: y=119, at x=140: y=21
  // Gap of 8px perpendicular to slash
  // Upper edge (for lower-left clip): y = 123 - 0.7x
  // Lower edge (for upper-right clip): y = 115 - 0.7x

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      className={className}
      aria-label="8B monogram"
    >
      <defs>
        {/* Upper-right clip — above the slash */}
        <clipPath id={clipUpper}>
          <polygon points="0,0 140,0 140,17 0,113" />
        </clipPath>

        {/* Lower-left clip — below the slash */}
        <clipPath id={clipLower}>
          <polygon points="0,121 140,25 140,140 0,140" />
        </clipPath>
      </defs>

      {/* Upper-right half — accent color, shifted up-right */}
      <g clipPath={`url(#${clipUpper})`} transform="translate(3, -3)">
        <path d={eightPath} fill={upperColor} fillRule="evenodd" />
      </g>

      {/* Lower-left half — dark color, shifted down-left */}
      <g clipPath={`url(#${clipLower})`} transform="translate(-3, 3)">
        <path d={eightPath} fill={lowerColor} fillRule="evenodd" />
      </g>
    </svg>
  );
}
