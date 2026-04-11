import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  external?: boolean;
  className?: string;
}

const variants = {
  primary:
    "bg-red text-white hover:bg-red-hover",
  secondary:
    "border border-[var(--border)] text-white hover:border-[var(--border-hover)]",
  ghost:
    "text-text-tertiary hover:text-white",
};

const sizes = {
  sm: "px-5 py-2 text-[10px]",
  md: "px-8 py-3.5 text-xs",
  lg: "px-10 py-4 text-xs",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 font-semibold tracking-widest uppercase rounded-md transition-colors duration-150 ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {arrow && <ArrowRight size={14} />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow && <ArrowRight size={14} />}
    </Link>
  );
}
