import { GlassCard } from "./GlassCard";
import { RevealOnScroll } from "./RevealOnScroll";
import { Spotlight } from "./Spotlight";

const TINTS = ["glass-tint-indigo", "glass-tint-mint", "glass-tint-peach", "glass-tint-pink"];
const SPOT = ["var(--accent-indigo)", "var(--accent-mint)", "var(--accent-peach)", "var(--accent-pink)"];

export function ProcessSection({
  kicker, title, subtitle, steps,
}: {
  kicker: string; title: string; subtitle: string;
  steps: readonly { n: string; t: string; d: string }[];
}) {
  return (
    <section className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll>
          <div className="mb-16">
            <div className="caption text-text-tertiary mb-3">{kicker}</div>
            <h2 className="text-4xl sm:text-6xl text-text-primary max-w-2xl">{title}</h2>
            <p className="mt-5 text-lg text-text-secondary max-w-2xl">{subtitle}</p>
          </div>
        </RevealOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.n} delay={i * 0.08}>
              <Spotlight tint={SPOT[i]} className="rounded-3xl h-full">
                <GlassCard className={`p-7 h-full flex flex-col ${TINTS[i]}`}>
                  <div className="text-display text-2xl text-gradient-soft leading-none mb-6">{s.n}</div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{s.t}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.d}</p>
                </GlassCard>
              </Spotlight>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
