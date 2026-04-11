interface StatBlockProps {
  value: string;
  unit?: string;
  label: string;
}

export function StatBlock({ value, unit = "", label }: StatBlockProps) {
  return (
    <div className="bg-card p-8 md:p-10">
      <div className="font-display text-4xl md:text-5xl text-red leading-none">
        {value}
        {unit && <span className="text-xl text-text-muted">{unit}</span>}
      </div>
      <p className="text-[10px] tracking-[3px] uppercase text-text-muted mt-3">
        {label}
      </p>
    </div>
  );
}
