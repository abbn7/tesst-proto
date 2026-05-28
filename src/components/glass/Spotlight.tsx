import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

export function Spotlight({
  children,
  className,
  tint = "var(--accent-pearl)",
}: {
  children: ReactNode;
  className?: string;
  tint?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("relative group/spot overflow-hidden", className)}
      style={{ ["--spot-tint" as string]: tint }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/spot:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--spot-tint) 55%, transparent) 0%, transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}