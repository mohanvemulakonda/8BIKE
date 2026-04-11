"use client";

import { useId } from "react";

interface MonogramProps {
  size?: number;
  variant?: "gradient-dark" | "gradient-light" | "white" | "red";
  bgColor?: string;
  className?: string;
}

export function Monogram({
  size = 48,
  variant = "gradient-dark",
  bgColor,
  className = "",
}: MonogramProps) {
  const uid = useId().replace(/:/g, "");
  const darkId = `mono-dark-${uid}`;
  const lightId = `mono-light-${uid}`;

  const isWhite = variant === "white";
  const isRed = variant === "red";
  const isLight = variant === "gradient-light";

  const strokeColor = isWhite
    ? "#fff"
    : isRed
      ? "#DD0000"
      : `url(#${isLight ? lightId : darkId})`;

  const hasSolidBg = bgColor && bgColor !== "transparent";

  // Always use split paths (x=62 / x=68) so B reads as B not 8
  // Spine covers the gap on solid backgrounds; on images the tiny gap is invisible
  const leftX = "62";
  const rightX = "68";

  // B side always gets wider bumps to distinguish from 8
  const bTopRight = "114";
  const bBotRight = "118";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      className={className}
      aria-label="8B monogram"
    >
      <defs>
        <linearGradient id={darkId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a2d32" />
          <stop offset="100%" stopColor="#DD0000" />
        </linearGradient>
        <linearGradient id={lightId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#222" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
      </defs>

      {/* Spine -- only when on solid background */}
      {hasSolidBg && (
        <line
          x1="65"
          y1="12"
          x2="65"
          y2="128"
          stroke={bgColor}
          strokeWidth="11"
          strokeLinecap="round"
        />
      )}

      {/* 8 left arcs */}
      <path
        d={`M${leftX},14 C36,14 22,26 22,42 C22,58 36,68 ${leftX},68`}
        fill="none"
        stroke={strokeColor}
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d={`M${leftX},68 C32,68 18,82 18,100 C18,118 34,128 ${leftX},128`}
        fill="none"
        stroke={strokeColor}
        strokeWidth="10"
        strokeLinejoin="round"
      />

      {/* B right arcs */}
      <path
        d={`M${rightX},14 C98,14 ${bTopRight},26 ${bTopRight},42 C${bTopRight},58 98,68 ${rightX},68`}
        fill="none"
        stroke={strokeColor}
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d={`M${rightX},68 C102,68 ${bBotRight},82 ${bBotRight},100 C${bBotRight},118 102,128 ${rightX},128`}
        fill="none"
        stroke={strokeColor}
        strokeWidth="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}
