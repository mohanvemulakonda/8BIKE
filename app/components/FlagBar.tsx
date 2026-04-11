interface FlagBarProps {
  className?: string;
}

export function FlagBar({ className = "" }: FlagBarProps) {
  return (
    <div
      className={`${className}`}
      style={{
        height: "inherit",
        borderRadius: "inherit",
        background: "linear-gradient(90deg, #DD0000 0%, #880000 100%)",
      }}
    />
  );
}
