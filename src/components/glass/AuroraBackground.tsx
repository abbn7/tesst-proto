import { useEffect, useRef } from "react";
import { useMobile } from "@/hooks/use-mobile";

export function AuroraBackground() {
  const { isMobile } = useMobile();

  if (isMobile) return null;
  const orb = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      if (orb.current) orb.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" style={{ background: "var(--bg-primary)" }}>
      {/* multi-accent aurora — soft Apple palette */}
          {/* multi-accent aurora — soft Apple palette */}
          {!isMobile && (
            <>
              <div className="aurora-blob" style={{ width: "60vw", height: "60vw", top: "-20%", left: "-10%", background: "var(--accent-indigo)", opacity: "var(--blob-opacity, 0.32)", animationDuration: "42s" }} />
              <div className="aurora-blob" style={{ width: "55vw", height: "55vw", top: "5%", right: "-15%", background: "var(--accent-pink)", opacity: "var(--blob-opacity, 0.28)", animationDuration: "48s", animationDelay: "-6s" }} />
              <div className="aurora-blob" style={{ width: "50vw", height: "50vw", bottom: "-15%", left: "5%", background: "var(--accent-mint)", opacity: "var(--blob-opacity, 0.30)", animationDuration: "52s", animationDelay: "-12s" }} />
              <div className="aurora-blob" style={{ width: "45vw", height: "45vw", bottom: "10%", right: "5%", background: "var(--accent-peach)", opacity: "var(--blob-opacity, 0.28)", animationDuration: "46s", animationDelay: "-18s" }} />
              <div className="aurora-blob" style={{ width: "40vw", height: "40vw", top: "40%", left: "35%", background: "var(--accent-lilac)", opacity: "var(--blob-opacity, 0.22)", animationDuration: "55s", animationDelay: "-22s" }} />
            </>
          )}

      {/* mouse-tracked subtle highlight */}
      <div
        ref={orb}
        className="absolute top-0 left-0 hidden md:block"
        style={{
          width: "30vw",
          height: "30vw",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.22,
          background: "radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        :root { --blob-opacity: 0.32; }
        .dark { --blob-opacity: 0.18; }
      `}} />
    </div>
  );
}
