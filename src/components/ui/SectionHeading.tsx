import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  index: string; // Ex: "01 // APRESENTAÇÃO"
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h2 className="text-3xl font-semibold tracking-tight text-[#f3efe5] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-zinc-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
