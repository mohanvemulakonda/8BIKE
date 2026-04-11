interface WordmarkProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  variant?: "dark" | "light";
  className?: string;
}

const sizes = {
  sm: "text-2xl tracking-[8px]",
  md: "text-4xl tracking-[10px]",
  lg: "text-5xl tracking-[12px]",
  xl: "text-6xl tracking-[14px]",
  hero: "text-7xl md:text-8xl lg:text-9xl tracking-[16px] md:tracking-[20px]",
};

export function Wordmark({
  size = "lg",
  variant = "dark",
  className = "",
}: WordmarkProps) {
  return (
    <span
      className={`font-display inline-block -skew-x-[8deg] ${sizes[size]} ${
        variant === "dark" ? "text-white" : "text-[#111]"
      } ${className}`}
    >
      8BIKE
    </span>
  );
}
