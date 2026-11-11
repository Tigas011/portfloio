"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wrapper de scroll reveal perceptível com física de mola (spring).
 * Executa sempre que entra na viewport (once: false) para movimento fluido visível.
 */
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
