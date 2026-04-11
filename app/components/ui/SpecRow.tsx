interface SpecRowProps {
  label: string;
  value: string;
}

export function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-3">
      <span className="text-[10px] tracking-[3px] uppercase text-text-muted">
        {label}
      </span>
      <span className="text-sm text-text-secondary font-light">{value}</span>
    </div>
  );
}
