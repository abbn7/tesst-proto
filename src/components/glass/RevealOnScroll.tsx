import { motion, useReducedMotion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function RevealOnScroll({
  const { isMobile } = useMobile();
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: isMobile ? "none" : "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: isMobile ? "none" : "blur(0px)" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: isMobile ? 0.5 : 0.9, delay: isMobile ? delay * 0.5 : delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
