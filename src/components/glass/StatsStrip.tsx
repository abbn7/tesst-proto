import { GlassCard } from "./GlassCard";
import { RevealOnScroll } from "./RevealOnScroll";

const TINTS = ["glass-tint-blue", "glass-tint-mint", "glass-tint-peach", "glass-tint-lilac"];

export function StatsStrip({ items, kicker }: { items: readonly { value: string; label: string }[]; kicker: string }) {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll>
          <div className="caption text-text-tertiary mb-6">{kicker}</div>
        </RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 0.06}>
              <GlassCard className={`p-6 sm:p-8 h-full ${TINTS[i % TINTS.length]}`}>
                <div className="text-display text-4xl sm:text-5xl text-gradient leading-none">{s.value}</div>
                <div className="mt-3 text-xs sm:text-sm text-text-secondary leading-snug">{s.label}</div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
