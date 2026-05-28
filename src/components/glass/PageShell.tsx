import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PageShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: EASE }}
      className={cn("relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 pt-28 pb-24", className)}
    >
      {children}
    </motion.main>
  );
}

export function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <header className="mb-12">
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">{kicker}</div>
      <h1 className="text-display text-5xl sm:text-6xl md:text-7xl text-foreground">{title}</h1>
      {subtitle && <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
    </header>
  );
}
