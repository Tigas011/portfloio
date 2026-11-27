import type { ArchitectureStep } from "@/types/portfolio";
import { cn } from "@/lib/utils";

export interface FlowDiagramProps {
  steps: ArchitectureStep[];
  className?: string;
}

export function FlowDiagram({ steps, className }: FlowDiagramProps) {
  if (!steps.length) return null;

  return (
    <ol aria-label="Etapas da solução" className={cn("mb-4 space-y-3 border-l border-[#597965] pl-4", className)}>
      {steps.map((step) => (
        <li key={step.stepNumber}>
          <p className="font-semibold text-[#f3efe5]">{step.label}</p>
          <p className="text-sm leading-relaxed text-zinc-300">{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}
