import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
}

export function MagneticButton({ children, href, onClick, variant = "primary", className, external }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.3);
    y.set(my * 0.3);
  };
  const reset = () => { x.set(0); y.set(0); };

  const base = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-[980px] px-6 py-3 text-[15px] font-medium transition-all duration-200 will-change-transform tracking-[-0.01em]",
    variant === "primary"
      ? "bg-primary text-white hover:bg-accent-blue-hover hover:scale-[1.02]"
      : "glass-subtle text-text-primary hover:bg-white/50",
    className,
  );

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={base}
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={base}
    >
      {inner}
    </motion.button>
  );
}
