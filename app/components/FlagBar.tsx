interface FlagBarProps {
  className?: string;
}

export function FlagBar({ className = "" }: FlagBarProps) {
  return (
    <div className={`flag-bar ${className}`}>
      <span style={{ background: "#222" }} />
      <span style={{ background: "#DD0000" }} />
      <span style={{ background: "#FFCC00" }} />
    </div>
  );
}
