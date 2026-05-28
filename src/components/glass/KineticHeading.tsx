import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function KineticHeading({
  text,
  className,
  stagger = 0.025,
  delay = 0,
}: {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;

  const words = text.split(" ");
  let charIdx = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((ch) => {
            const i = charIdx++;
            return (
              <span key={i} className="inline-block overflow-hidden align-baseline" aria-hidden>
                <motion.span
                  className="inline-block"
                  initial={{ y: "115%", opacity: 0, rotateX: -45 }}
                  animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.85, delay: delay + i * stagger, ease: EASE }}
                >
                  {ch}
                </motion.span>
              </span>
            );
          })}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}