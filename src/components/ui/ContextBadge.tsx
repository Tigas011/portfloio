import { EvidenceNature } from "@/types/portfolio";
import { cn, getNatureBadgeConfig } from "@/lib/utils";

export interface ContextBadgeProps {
  nature: EvidenceNature;
  labelOverride?: string;
  className?: string;
  showDot?: boolean;
}

export function ContextBadge({
  nature,
  labelOverride,
  className,
  showDot = true,
}: ContextBadgeProps) {
  const config = getNatureBadgeConfig(nature);
  const displayLabel = labelOverride || config.label;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border whitespace-nowrap shrink-0",
        config.badgeClass,
        className
      )}
    >
      {showDot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", config.dotClass)}
          aria-hidden="true"
        />
      )}
      <span>{displayLabel}</span>
    </span>
  );
}
