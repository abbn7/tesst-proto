import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/glass/GlassCard";
import { RevealOnScroll } from "@/components/glass/RevealOnScroll";
import { PageShell, SectionHeader } from "@/components/glass/PageShell";
import { TiltCard } from "@/components/glass/TiltCard";
import portrait from "@/assets/abdelhamed.jpg";
import { GraduationCap, MapPin, Languages, Target, Github } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abdelhamed Nada" },
      { name: "description", content: "Full-Stack Developer with deep frontend specialization. Currently studying Computer Science with an AI track." },
      { property: "og:title", content: "About Abdelhamed Nada" },
      { property: "og:description", content: "Profile, background, education and values." },
      { property: "og:image", content: "/og.jpg" },
      {
        name: "ld+json",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: { "@type": "Person", name: "Abdelhamed Nada", jobTitle: "Full-Stack Developer", url: "https://github.com/abbn7" },
        }),
      },
    ],
  }),
  component: AboutPage,
});

const VALUE_TINTS = ["glass-tint-indigo", "glass-tint-mint", "glass-tint-peach", "glass-tint-pink"];

function AboutPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <SectionHeader kicker={t.about.kicker} title={t.about.title} />
      <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
        <RevealOnScroll>
          <TiltCard>
            <GlassCard variant="elevated" className="p-3">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={portrait} alt="Abdelhamed Nada" className="w-full h-full object-cover" />
              </div>
            </GlassCard>
          </TiltCard>
          <a href="https://github.com/abbn7" target="_blank" rel="noopener noreferrer"
             className="mt-4 inline-flex items-center gap-2 glass-subtle rounded-full px-5 py-2.5 text-sm hover:bg-white/60 transition-colors">
            <Github className="size-4" /> {t.about.downloadCv}
          </a>
        </RevealOnScroll>

        <div className="space-y-5">
          <RevealOnScroll delay={0.1}>
            <GlassCard className="p-8">
              <p className="text-text-secondary leading-relaxed text-lg">{t.about.summary}</p>
            </GlassCard>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 gap-5">
            <RevealOnScroll delay={0.15}>
              <GlassCard className="p-7 h-full glass-tint-indigo">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="size-5 text-text-primary/70" />
                  <h2 className="text-xl font-semibold text-text-primary">{t.about.focusTitle}</h2>
                </div>
                <p className="text-text-secondary leading-relaxed">{t.about.focusBody}</p>
              </GlassCard>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <GlassCard className="p-7 h-full glass-tint-mint">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="size-5 text-text-primary/70" />
                  <h2 className="text-xl font-semibold text-text-primary">{t.about.educationTitle}</h2>
                </div>
                <p className="text-text-secondary leading-relaxed">{t.about.educationBody}</p>
              </GlassCard>
            </RevealOnScroll>
            <RevealOnScroll delay={0.25}>
              <GlassCard className="p-7 h-full glass-tint-peach">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="size-5 text-text-primary/70" />
                  <h2 className="text-xl font-semibold text-text-primary">{t.about.locationTitle}</h2>
                </div>
                <p className="text-text-secondary leading-relaxed">{t.about.locationBody}</p>
              </GlassCard>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <GlassCard className="p-7 h-full glass-tint-pink">
                <div className="flex items-center gap-3 mb-3">
                  <Languages className="size-5 text-text-primary/70" />
                  <h2 className="text-xl font-semibold text-text-primary">{t.about.languagesTitle}</h2>
                </div>
                <p className="text-text-secondary leading-relaxed">{t.about.languagesBody}</p>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl text-text-primary mb-8">{t.about.valuesTitle}</h2>
        </RevealOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.about.values.map((v, i) => (
            <RevealOnScroll key={v.t} delay={i * 0.07}>
              <GlassCard className={`p-6 h-full ${VALUE_TINTS[i]}`}>
                <div className="caption text-text-tertiary mb-3">0{i + 1}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{v.t}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.d}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
