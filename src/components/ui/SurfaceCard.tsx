"use client";

import { useState, useRef, type MouseEvent, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface SurfaceCardProps<T extends ElementType = "div"> {
  children: ReactNode;
  className?: string;
  as?: T;
  enableSpotlight?: boolean;
}

export function SurfaceCard<T extends ElementType = "div">({
  children,
  className,
  as,
  enableSpotlight = true,
  ...props
}: SurfaceCardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof SurfaceCardProps<T>>) {
  const Component = as || "div";
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enableSpotlight) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden bg-graphite-900/80 border border-subtle rounded-lg p-5",
        "transition-colors duration-200 hover:border-hover",
        "backdrop-blur-sm group",
        className
      )}
      {...props}
    >
      {/* Spotlight mouse-tracking radial glow */}
      {enableSpotlight && mousePos && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100 z-0"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.08), transparent 40%)`,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 w-full h-full flex flex-col justify-inherit">
        {children}
      </div>
    </Component>
  );
}
