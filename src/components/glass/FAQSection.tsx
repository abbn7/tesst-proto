import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { RevealOnScroll } from "./RevealOnScroll";

export function FAQSection({
  kicker, title, items,
}: {
  kicker: string; title: string;
  items: readonly { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <RevealOnScroll>
          <div className="mb-10 text-center">
            <div className="caption text-text-tertiary mb-3">{kicker}</div>
            <h2 className="text-3xl sm:text-5xl text-text-primary">{title}</h2>
          </div>
        </RevealOnScroll>
        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <RevealOnScroll key={it.q} delay={i * 0.05}>
                <GlassCard className="overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-start"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-text-primary">{it.q}</span>
                    {isOpen ? <Minus className="size-4 text-text-secondary shrink-0" /> : <Plus className="size-4 text-text-secondary shrink-0" />}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-text-secondary leading-relaxed">{it.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
