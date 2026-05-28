import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/glass/GlassCard";
import { RevealOnScroll } from "@/components/glass/RevealOnScroll";
import { TiltCard } from "@/components/glass/TiltCard";
import { Spotlight } from "@/components/glass/Spotlight";
import { PageShell, SectionHeader } from "@/components/glass/PageShell";
import { ProjectMockup } from "@/components/glass/ProjectMockup";
import { Github, ArrowUpRight } from "lucide-react";

const TINTS = ["var(--accent-indigo)", "var(--accent-mint)", "var(--accent-peach)", "var(--accent-pink)", "var(--accent-gold)"];
const GLASS_TINTS = ["glass-tint-indigo", "glass-tint-mint", "glass-tint-peach", "glass-tint-pink", "glass-tint-gold"];
const VARIANTS = ["ecommerce", "bot", "frontend"] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Abdelhamed Nada" },
      { name: "description", content: "Selected client work: e-commerce on Next.js + Supabase, Telegram bot SaaS, and frontend systems." },
      { property: "og:title", content: "Projects — Abdelhamed Nada" },
      { property: "og:description", content: "Real client deliveries, audited and shipped." },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <SectionHeader kicker={t.projects.kicker} title={t.projects.title} subtitle={t.projects.subtitle} />
      <div className="space-y-12 sm:space-y-20">
        {t.projects.items.map((p, i) => (
          <RevealOnScroll key={p.title} delay={i * 0.08}>
            <TiltCard>
              <Spotlight tint={TINTS[i % TINTS.length]} className="rounded-[2rem]">
                <GlassCard variant="elevated" className={`p-8 sm:p-12 relative overflow-hidden ${GLASS_TINTS[i % GLASS_TINTS.length]}`}>
                  <div className="absolute -top-24 -right-24 size-72 rounded-full opacity-40 blur-3xl"
                       style={{ background: TINTS[i % TINTS.length] }} />
                  <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
                    <ProjectMockup
                      variant={VARIANTS[i % VARIANTS.length]}
                      label={`${String(i + 1).padStart(2, "0")} · ${p.year}`}
                    />
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-text-tertiary mb-3">{p.tag}</div>
                      <h2 className="text-display text-4xl sm:text-6xl mb-6 text-text-primary">{p.title}</h2>
                      <p className="text-text-secondary leading-relaxed mb-7 max-w-2xl text-base sm:text-lg">{p.desc}</p>

                      <div className="grid sm:grid-cols-3 gap-4 mb-7 max-w-2xl">
                        <div>
                          <div className="caption text-text-tertiary mb-1">{t.projects.year}</div>
                          <div className="text-sm font-medium text-text-primary">{p.year}</div>
                        </div>
                        <div>
                          <div className="caption text-text-tertiary mb-1">{t.projects.role}</div>
                          <div className="text-sm font-medium text-text-primary">{p.role}</div>
                        </div>
                        <div>
                          <div className="caption text-text-tertiary mb-1">{t.projects.stack}</div>
                          <div className="text-sm font-medium text-text-primary">{p.stack.length}+</div>
                        </div>
                      </div>

                      <div className="mb-6 max-w-2xl">
                        <div className="caption text-text-tertiary mb-2">{t.projects.outcome}</div>
                        <div className="text-text-secondary text-sm">{p.outcome}</div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {p.stack.map((s) => (
                          <span key={s} className="glass-subtle rounded-full px-3 py-1.5 text-xs text-text-primary/85">{s}</span>
                        ))}
                      </div>
                      <a
                        href="https://github.com/abbn7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 glass-subtle rounded-full px-5 py-2.5 text-sm hover:bg-white/70 transition-all group"
                      >
                        <Github className="size-4" /> {t.projects.viewGithub}
                        <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </Spotlight>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>
    </PageShell>
  );
}
