import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/glass/GlassCard";
import { RevealOnScroll } from "@/components/glass/RevealOnScroll";
import { PageShell, SectionHeader } from "@/components/glass/PageShell";

const TINTS = ["glass-tint-indigo", "glass-tint-mint", "glass-tint-peach"];

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Abdelhamed Nada" },
      { name: "description", content: "Timeline of recent client work and engineering roles." },
      { property: "og:title", content: "Experience — Abdelhamed Nada" },
      { property: "og:description", content: "Freelance full-stack engagements, frontend client work, and ongoing CS/AI study." },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const { t } = useLang();
  return (
    <PageShell>
      <SectionHeader kicker={t.experience.kicker} title={t.experience.title} subtitle={t.experience.subtitle} />
      <div className="relative">
        <div aria-hidden className="absolute start-3 top-2 bottom-2 w-px"
             style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--accent-indigo) 40%, transparent), transparent)" }} />
        <ol className="space-y-8">
          {t.experience.items.map((e, i) => (
            <li key={e.role + e.period} className="relative ps-12">
              <span aria-hidden
                    className="absolute start-3 top-7 -translate-x-1/2 size-3 rounded-full"
                    style={{ background: ["var(--accent-indigo)", "var(--accent-mint)", "var(--accent-peach)"][i % 3], boxShadow: "0 0 0 4px var(--bg-primary)" }} />
              <RevealOnScroll delay={i * 0.08}>
                <GlassCard className={`p-7 sm:p-8 ${TINTS[i % TINTS.length]}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-text-primary">{e.role}</h3>
                    <span className="text-xs uppercase tracking-[0.25em] text-text-tertiary">{e.period}</span>
                  </div>
                  <div className="text-sm text-text-secondary mb-4">{e.company}</div>
                  <ul className="space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="text-text-secondary leading-relaxed flex gap-3">
                        <span className="mt-2 size-1.5 rounded-full bg-text-tertiary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </RevealOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}
