import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/glass/GlassCard";
import { RevealOnScroll } from "@/components/glass/RevealOnScroll";
import { Spotlight } from "@/components/glass/Spotlight";
import { PageShell, SectionHeader } from "@/components/glass/PageShell";
import { Zap, Bot, GitBranch, Globe2, Shield, Layers } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Abdelhamed Nada" },
      { name: "description", content: "Frontend craft, AI-augmented delivery, GitHub workflows, audits, and motion-glass systems." },
      { property: "og:title", content: "Services — Abdelhamed Nada" },
      { property: "og:description", content: "Six pillars of modern, production-grade delivery." },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: ServicesPage,
});

const ICONS = [Zap, Bot, GitBranch, Globe2, Shield, Layers];
const TINTS = ["glass-tint-indigo", "glass-tint-blue", "glass-tint-mint", "glass-tint-peach", "glass-tint-pink", "glass-tint-lilac"];
const SPOTS = ["var(--accent-indigo)", "var(--accent-blue)", "var(--accent-mint)", "var(--accent-peach)", "var(--accent-pink)", "var(--accent-lilac)"];

function ServicesPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <SectionHeader kicker={t.services.kicker} title={t.services.title} subtitle={t.services.subtitle} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.services.items.map((s, i) => {
          const Icon = ICONS[i] || Zap;
          return (
            <RevealOnScroll key={s.title} delay={i * 0.06}>
              <Spotlight tint={SPOTS[i]} className="rounded-3xl h-full">
                <GlassCard className={`p-8 h-full relative overflow-hidden flex flex-col ${TINTS[i]}`}>
                  <div className="glass-clear inline-flex rounded-2xl p-3 mb-6">
                    <Icon className="size-5 text-text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                  <div className="mt-auto pt-6 caption text-text-tertiary">0{i + 1}</div>
                </GlassCard>
              </Spotlight>
            </RevealOnScroll>
          );
        })}
      </div>
    </PageShell>
  );
}
