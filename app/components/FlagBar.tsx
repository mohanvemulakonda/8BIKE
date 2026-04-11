interface FlagBarProps {
  className?: string;
}

export function FlagBar({ className = "" }: FlagBarProps) {
  return (
    <div
      className={`h-[3px] rounded-sm ${className}`}
      style={{
        background: "linear-gradient(90deg, #DD0000 0%, #880000 100%)",
      }}
    />
  );
}
