import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "subtle" | "default" | "elevated";
interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

export const GlassCard = forwardRef<HTMLDivElement, Props>(function GlassCard(
  { variant = "default", className, ...rest },
  ref,
) {
  const v = variant === "subtle" ? "glass-subtle" : variant === "elevated" ? "glass-elevated" : "glass-card";
  return <div ref={ref} className={cn(v, className)} {...rest} />;
});
