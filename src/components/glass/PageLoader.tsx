import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[80] flex items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.99 0 0) 0%, oklch(0.97 0.012 280) 100%)",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid place-items-center size-20 rounded-3xl glass-elevated relative"
          >
            <span className="absolute inset-0 rounded-3xl animate-ring" />
            <span
              className="text-display text-3xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-pearl), var(--accent-lavender))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AN
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}