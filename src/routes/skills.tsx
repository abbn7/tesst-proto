import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/glass/GlassCard";
import { RevealOnScroll } from "@/components/glass/RevealOnScroll";
import { Spotlight } from "@/components/glass/Spotlight";
import { PageShell, SectionHeader } from "@/components/glass/PageShell";
import { SkillMeter } from "@/components/glass/SkillMeter";
import { Code2, Database, Bot, GitBranch, Layers, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Abdelhamed Nada" },
      { name: "description", content: "Frontend, backend, AI, DevOps and more — the toolkit behind the work." },
      { property: "og:title", content: "Skills — Abdelhamed Nada" },
      { property: "og:description", content: "React · Next.js · TypeScript · Supabase · Python · AI Tools." },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: SkillsPage,
});

const TINTS = ["glass-tint-indigo", "glass-tint-blue", "glass-tint-mint", "glass-tint-peach", "glass-tint-pink", "glass-tint-lilac"];
const SPOTS = ["var(--accent-indigo)", "var(--accent-blue)", "var(--accent-mint)", "var(--accent-peach)", "var(--accent-pink)", "var(--accent-lilac)"];
const ICONS = [Code2, Database, Bot, GitBranch, Layers, Languages];
const SPANS = [
  "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  "", "", "lg:col-span-2", "", "",
];

function SkillsPage() {
  const { t } = useLang();
  const groups = Object.entries(t.skills.groups);
  const proficiency = t.skills.proficiency as Record<string, number>;
  return (
    <PageShell>
      <SectionHeader kicker={t.skills.kicker} title={t.skills.title} subtitle={t.skills.subtitle} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(240px,auto)]">
        {groups.map(([name, items], i) => {
          const Icon = ICONS[i] || Code2;
          const tint = SPOTS[i % SPOTS.length];
          return (
            <RevealOnScroll key={name} delay={i * 0.06} className={SPANS[i] || ""}>
              <Spotlight tint={tint} className="h-full rounded-3xl">
                <GlassCard className={cn("p-7 sm:p-8 h-full relative overflow-hidden flex flex-col", TINTS[i % TINTS.length])}>
                  <div className="flex items-start justify-between mb-5">
                    <div className="glass-clear inline-flex rounded-2xl p-2.5">
                      <Icon className="size-5 text-text-primary" />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-text-tertiary">{String(i + 1).padStart(2, "0")}</div>
                  </div>
                  <h3 className={cn("font-semibold text-text-primary mb-4", i === 0 ? "text-3xl sm:text-4xl" : "text-xl")}>{name}</h3>
                  {proficiency[name] != null && (
                    <div className="mb-5">
                      <SkillMeter value={proficiency[name]} label={t.skills.proficiencyLabel} tint={tint} />
                    </div>
                  )}
                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {(items as readonly string[]).map((s) => (
                      <li key={s} className="glass-subtle rounded-full px-3 py-1.5 text-xs text-text-primary/85">{s}</li>
                    ))}
                  </ul>
                </GlassCard>
              </Spotlight>
            </RevealOnScroll>
          );
        })}
      </div>
    </PageShell>
  );
}
