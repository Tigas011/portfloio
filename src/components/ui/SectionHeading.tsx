import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  index: string; // Ex: "01 // APRESENTAÇÃO"
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  index,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
        <span>{index}</span>
        <span className="h-px w-8 bg-zinc-800" aria-hidden="true" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
