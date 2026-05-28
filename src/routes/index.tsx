import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/glass/GlassCard";
import { RevealOnScroll } from "@/components/glass/RevealOnScroll";
import { MagneticButton } from "@/components/glass/MagneticButton";
import { MarqueeRow } from "@/components/glass/MarqueeRow";
import { KineticHeading } from "@/components/glass/KineticHeading";
import { Spotlight } from "@/components/glass/Spotlight";
import { WordMarquee } from "@/components/glass/WordMarquee";
import { TiltCard } from "@/components/glass/TiltCard";
import { StatsStrip } from "@/components/glass/StatsStrip";
import { ProcessSection } from "@/components/glass/ProcessSection";
import { ArrowRight, Github, Mail, Sparkles, Zap, Bot, GitBranch, Globe2, ArrowDown, Shield, Layers } from "lucide-react";
import portrait from "@/assets/abdelhamed.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdelhamed Nada — Full-Stack Developer & AI Tools Expert" },
      { name: "description", content: "Portfolio of Abdelhamed Nada. Full-stack developer focused on React, Next.js, TypeScript, Supabase and AI-augmented workflows. Open to remote work." },
      { property: "og:title", content: "Abdelhamed Nada — Full-Stack Developer" },
      { property: "og:description", content: "React · Next.js · TypeScript · Supabase · AI Tools." },
      { property: "og:image", content: "/og.jpg" },
      { name: "twitter:image", content: "/og.jpg" },
      {
        name: "ld+json",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abdelhamed Nada",
          jobTitle: "Full-Stack Developer",
          email: "dior53634@gmail.com",
          url: "https://github.com/abbn7",
          sameAs: ["https://github.com/abbn7"],
          knowsAbout: ["React", "Next.js", "TypeScript", "Supabase", "AI Tools"],
          address: { "@type": "PostalAddress", addressCountry: "EG" },
        }),
      },
    ],
  }),
  component: HomePage,
});

const EASE = [0.16, 1, 0.3, 1] as const;
const SERVICE_ICONS = [Zap, Bot, GitBranch, Globe2, Shield, Layers];
const SERVICE_TINTS = ["glass-tint-indigo", "glass-tint-blue", "glass-tint-mint", "glass-tint-peach", "glass-tint-pink", "glass-tint-lilac"];

function HomePage() {
  const { t } = useLang();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const allTech = [
    "React", "Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Node.js",
    "PostgreSQL", "Python", "Framer Motion", "Shadcn/UI", "GitHub Actions", "Vercel",
    "Cursor AI", "Claude AI", "GitHub Copilot", "REST APIs",
  ];
  const marqueeWords = ["Design", "Engineer", "Ship", "Iterate", "Refine"];

  return (
    <main id="main" className="relative z-10">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center px-6 pt-32 pb-28 sm:pb-36">
        <motion.div style={{ y, opacity, scale }} className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="inline-flex items-center gap-2 glass-subtle rounded-full px-4 py-1.5 mb-10"
          >
            <span className="availability-dot" />
            <span className="text-[13px] font-medium text-text-secondary">{t.hero.eyebrow}</span>
          </motion.div>

          <h1 className="text-display text-text-primary mb-8">
            <KineticHeading text={t.hero.name} className="block" />
          </h1>

          <RevealOnScroll delay={0.5}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xl sm:text-2xl font-semibold">
              <span className="text-text-primary">{t.hero.role}</span>
              <span className="text-text-tertiary">/</span>
              <span className="text-text-secondary">{t.hero.role2}</span>
              <span className="text-text-tertiary">/</span>
              <span className="text-text-secondary">{t.hero.role3}</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.65}>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed">{t.hero.tagline}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.78}>
            <div className="mt-8 inline-flex flex-wrap items-center gap-2 glass-clear rounded-2xl px-4 py-3 text-[13px]">
              <span className="text-text-tertiary uppercase tracking-[0.2em] text-[10px]">{t.hero.status.label}</span>
              <span className="text-text-primary font-medium">{t.hero.status.value}</span>
              <span className="text-text-tertiary">·</span>
              <span className="text-text-secondary">{t.hero.status.location}</span>
              <span className="text-text-tertiary">·</span>
              <span className="text-text-secondary">{t.hero.status.remote}</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.9}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <MagneticButton href="/projects" variant="primary">
                {t.hero.ctaWork} <ArrowRight className="size-4" />
              </MagneticButton>
              <MagneticButton href="/contact" variant="ghost">
                <Mail className="size-4" /> {t.hero.ctaContact}
              </MagneticButton>
              <MagneticButton href="https://github.com/abbn7" external variant="ghost">
                <Github className="size-4" /> abbn7
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: EASE }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-text-tertiary"
        >
          <span>scroll</span>
          <ArrowDown className="size-3 animate-bounce" />
        </motion.div>
      </section>

      {/* STATS */}
      <StatsStrip items={t.stats.items} kicker={t.stats.kicker} />

      {/* MARQUEE HEADLINE */}
      <section className="py-12"><WordMarquee words={marqueeWords} /></section>

      {/* PORTRAIT + INTRO */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl grid md:grid-cols-[auto_1fr] gap-16 items-center">
          <RevealOnScroll>
            <TiltCard>
              <GlassCard variant="elevated" className="p-3 inline-block relative">
                <div className="relative rounded-[18px] overflow-hidden w-[240px] h-[300px] sm:w-[300px] sm:h-[380px]">
                  <img src={portrait} alt="Abdelhamed Nada" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 glass-ultra rounded-full px-4 py-2 flex items-center gap-2 border border-separator">
                  <span className="availability-dot" />
                  <span className="text-[12px] font-medium uppercase tracking-wider">available</span>
                </div>
              </GlassCard>
            </TiltCard>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <div className="caption text-text-tertiary mb-4">{t.about.kicker}</div>
            <h2 className="text-4xl sm:text-6xl mb-8 text-text-primary leading-tight">{t.about.title}</h2>
            <p className="text-text-secondary leading-relaxed text-lg sm:text-xl">{t.about.summary}</p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-base font-medium text-accent-blue hover:text-accent-blue-hover transition-colors group">
              {t.nav.about} <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* SERVICES PREVIEW (6) */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
              <div>
                <div className="caption text-text-tertiary mb-3">{t.services.kicker}</div>
                <h2 className="text-4xl sm:text-6xl text-text-primary">{t.services.title}</h2>
              </div>
              <Link to="/services" className="text-[15px] font-medium text-text-primary inline-flex items-center gap-2 group glass-subtle rounded-full px-6 py-3">
                {t.nav.services} <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.items.map((s, i) => {
              const Icon = SERVICE_ICONS[i] || Sparkles;
              return (
                <RevealOnScroll key={s.title} delay={i * 0.07}>
                  <GlassCard className={cn("h-full p-8 flex flex-col justify-between min-h-[260px]", SERVICE_TINTS[i])}>
                    <div>
                      <div className="glass-clear inline-flex rounded-2xl p-3 mb-6">
                        <Icon className="size-5 text-text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-text-primary">{s.title}</h3>
                      <p className="text-text-secondary leading-relaxed text-sm">{s.desc}</p>
                    </div>
                    <div className="mt-6 caption text-text-tertiary">0{i + 1}</div>
                  </GlassCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection kicker={t.process.kicker} title={t.process.title} subtitle={t.process.subtitle} steps={t.process.steps} />

      {/* PRINCIPLES */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <div className="mb-16">
              <div className="caption text-text-tertiary mb-3">{t.principles.kicker}</div>
              <h2 className="text-4xl sm:text-6xl text-text-primary max-w-2xl">{t.principles.title}</h2>
              <p className="mt-5 text-lg text-text-secondary max-w-2xl">{t.principles.subtitle}</p>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-5">
            {t.principles.items.map((p, i) => (
              <RevealOnScroll key={p.n} delay={i * 0.08}>
                <Spotlight tint={["var(--accent-indigo)","var(--accent-mint)","var(--accent-pink)","var(--accent-peach)"][i]} className="rounded-3xl h-full">
                  <GlassCard className={cn("p-8 sm:p-10 h-full", ["glass-tint-indigo","glass-tint-mint","glass-tint-pink","glass-tint-peach"][i])}>
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-display text-3xl text-gradient-soft leading-none">{p.n}</span>
                      <div className="hairline flex-1" />
                    </div>
                    <h3 className="text-2xl font-semibold text-text-primary mb-3">{p.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{p.desc}</p>
                  </GlassCard>
                </Spotlight>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="py-20">
        <RevealOnScroll>
          <div className="text-center mb-12"><div className="caption text-text-tertiary">stack</div></div>
        </RevealOnScroll>
        <RevealOnScroll><MarqueeRow items={allTech} /></RevealOnScroll>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 sm:py-36">
        <RevealOnScroll>
          <GlassCard variant="elevated" className="max-w-5xl mx-auto p-12 sm:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="caption text-text-tertiary mb-6">{t.contact.kicker}</div>
              <h2 className="text-4xl sm:text-7xl text-text-primary mb-8">{t.contact.title}</h2>
              <p className="mt-6 text-text-secondary max-w-2xl mx-auto text-xl leading-relaxed">{t.contact.subtitle}</p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <MagneticButton href="/contact" variant="primary">
                  {t.hero.ctaContact} <ArrowRight className="size-4" />
                </MagneticButton>
                <MagneticButton href="mailto:dior53634@gmail.com" variant="ghost">
                  <Mail className="size-4" /> dior53634@gmail.com
                </MagneticButton>
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </section>
    </main>
  );
}
