interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto px-5 md:px-10 ${
        narrow ? "max-w-3xl" : "max-w-[var(--max-width)]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
