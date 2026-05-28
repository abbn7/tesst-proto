import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 400, damping: 35, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a,button,[data-cursor='hover'],input,textarea,select,[role='button']");
      setHovering(!!interactive);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.body.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        width: hovering ? 32 : 16,
        height: hovering ? 32 : 16,
        background: "var(--accent-blue)",
        mixBlendMode: "difference",
        transition: "width 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94), height 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    />
  );
}
