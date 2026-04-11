/**
 * Custom brand icons for 8BIKE.
 * Thin precise strokes, angular geometry, matching monogram aesthetic.
 * All icons render at 24x24 viewBox with 1.5px stroke.
 */

interface IconProps {
  size?: number;
  className?: string;
}

function Wrap({ size = 24, className = "", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconMail({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <rect x="2" y="4" width="20" height="16" />
      <polyline points="2,4 12,13 22,4" />
    </Wrap>
  );
}

export function IconPhone({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <path d="M6,3 L6,3 L9,3 L11,8 L9,10 C10.5,13.5 13.5,16 16,17 L18,15 L22,17 L22,20 C22,21 21,22 20,22 C10,22 2,14 2,4 C2,3 3,2 4,2 L6,3Z" />
    </Wrap>
  );
}

export function IconPin({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <path d="M12,2 C8.13,2 5,5.13 5,9 C5,14.25 12,22 12,22 C12,22 19,14.25 19,9 C19,5.13 15.87,2 12,2Z" />
      <rect x="10" y="7" width="4" height="4" />
    </Wrap>
  );
}

export function IconShield({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <path d="M12,2 L3,6 L3,12 C3,17.55 6.84,22.74 12,24 C17.16,22.74 21,17.55 21,12 L21,6 Z" />
      <polyline points="9,12 11,14 15,10" />
    </Wrap>
  );
}

export function IconClock({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <rect x="2" y="2" width="20" height="20" />
      <polyline points="12,6 12,12 16,14" />
    </Wrap>
  );
}

export function IconWrench({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <path d="M14.7,6.3 C13.5,3.8 14.2,1 16.5,0 L18,3 L21,3 L21,6 L18,7.5 C17,9.8 14.2,10.5 11.7,9.3 L3.5,17.5 C2.7,18.3 1.3,18.3 0.5,17.5 C-0.3,16.7 -0.3,15.3 0.5,14.5 Z" />
    </Wrap>
  );
}

export function IconRuler({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <rect x="1" y="7" width="22" height="10" />
      <line x1="5" y1="7" x2="5" y2="11" />
      <line x1="9" y1="7" x2="9" y2="13" />
      <line x1="13" y1="7" x2="13" y2="11" />
      <line x1="17" y1="7" x2="17" y2="13" />
      <line x1="21" y1="7" x2="21" y2="11" />
    </Wrap>
  );
}

export function IconBook({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <path d="M2,3 L2,21 L12,17 L22,21 L22,3 L12,7 Z" />
      <line x1="12" y1="7" x2="12" y2="17" />
    </Wrap>
  );
}

export function IconBox({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <path d="M12,2 L22,7 L22,17 L12,22 L2,17 L2,7 Z" />
      <line x1="12" y1="12" x2="12" y2="22" />
      <polyline points="2,7 12,12 22,7" />
    </Wrap>
  );
}

export function IconHelp({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <rect x="2" y="2" width="20" height="20" />
      <path d="M9,9 C9,7.3 10.3,6 12,6 C13.7,6 15,7.3 15,9 C15,10.7 13,11 12,12" />
      <rect x="11.5" y="15" width="1" height="1" />
    </Wrap>
  );
}

export function IconDownload({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <line x1="12" y1="3" x2="12" y2="15" />
      <polyline points="7,11 12,16 17,11" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </Wrap>
  );
}

export function IconFile({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <path d="M4,2 L14,2 L20,8 L20,22 L4,22 Z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="14" y2="17" />
    </Wrap>
  );
}

export function IconImage({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <rect x="2" y="3" width="20" height="18" />
      <polyline points="2,17 7,12 11,16 15,11 22,18" />
      <rect x="14" y="7" width="3" height="3" />
    </Wrap>
  );
}

export function IconCalendar({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <rect x="2" y="4" width="20" height="18" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="7" y1="2" x2="7" y2="6" />
      <line x1="17" y1="2" x2="17" y2="6" />
    </Wrap>
  );
}

export function IconBike({ size, className }: IconProps) {
  return (
    <Wrap size={size} className={className}>
      <circle cx="6" cy="16" r="4" />
      <circle cx="18" cy="16" r="4" />
      <polyline points="6,16 10,8 14,16 18,16" />
      <line x1="10" y1="8" x2="14" y2="8" />
      <line x1="14" y1="8" x2="16" y2="12" />
    </Wrap>
  );
}
