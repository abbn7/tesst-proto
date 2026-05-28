import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/glass/GlassCard";
import { RevealOnScroll } from "@/components/glass/RevealOnScroll";
import { PageShell, SectionHeader } from "@/components/glass/PageShell";
import { ContactForm } from "@/components/glass/ContactForm";
import { FAQSection } from "@/components/glass/FAQSection";
import { Mail, MessageCircle, Github, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abdelhamed Nada" },
      { name: "description", content: "Reach out via email, WhatsApp, or GitHub. Open to remote roles and freelance projects worldwide." },
      { property: "og:title", content: "Contact — Abdelhamed Nada" },
      { property: "og:description", content: "Open to remote work worldwide." },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: ContactPage,
});

const ITEMS = [
  { icon: Mail, key: "email" as const, label: "dior53634@gmail.com", href: "mailto:dior53634@gmail.com", tint: "var(--accent-blue)", glass: "glass-tint-blue" },
  { icon: MessageCircle, key: "whatsapp" as const, label: "+20 010 9614 4345", href: "https://wa.me/201096144345", tint: "var(--accent-mint)", glass: "glass-tint-mint" },
  { icon: Github, key: "github" as const, label: "github.com/abbn7", href: "https://github.com/abbn7", tint: "var(--accent-lilac)", glass: "glass-tint-lilac" },
];

function ContactPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <SectionHeader kicker={t.contact.kicker} title={t.contact.title} subtitle={t.contact.subtitle} />

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
        <RevealOnScroll>
          <ContactForm labels={t.contact.form} />
        </RevealOnScroll>

        <div className="space-y-4">
          <RevealOnScroll delay={0.1}>
            <div className="caption text-text-tertiary mb-3">{t.contact.form.or}</div>
          </RevealOnScroll>
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <RevealOnScroll key={it.key} delay={0.15 + i * 0.07}>
                <a href={it.href} target={it.key !== "email" ? "_blank" : undefined} rel="noopener noreferrer">
                  <GlassCard className={`p-6 relative overflow-hidden group transition-all hover:-translate-y-0.5 ${it.glass}`}>
                    <div className="relative flex items-center gap-4">
                      <div className="glass-clear inline-flex rounded-2xl p-3">
                        <Icon className="size-5 text-text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-text-tertiary mb-1">{t.contact[it.key]}</div>
                        <div className="font-medium text-text-primary truncate">{it.label}</div>
                      </div>
                      <ArrowUpRight className="size-4 text-text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </GlassCard>
                </a>
              </RevealOnScroll>
            );
          })}
          <RevealOnScroll delay={0.4}>
            <GlassCard className="p-6 text-center mt-2">
              <div className="inline-flex items-center gap-2 text-sm text-text-secondary">
                <span className="availability-dot" />
                {t.hero.eyebrow}
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>

      <FAQSection kicker={t.faq.kicker} title={t.faq.title} items={t.faq.items} />
    </PageShell>
  );
}
