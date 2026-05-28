import { useLang } from "@/i18n/LanguageContext";
import { Link } from "@tanstack/react-router";
import { Github, Mail, MessageCircle } from "lucide-react";

const NAV = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/projects", key: "projects" },
  { to: "/skills", key: "skills" },
  { to: "/experience", key: "experience" },
  { to: "/services", key: "services" },
  { to: "/contact", key: "contact" },
] as const;

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 pb-10 pt-24">
      <div className="glass-elevated rounded-3xl p-8 sm:p-12">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <div className="text-display text-5xl sm:text-6xl text-gradient leading-none">Abdelhamed Nada</div>
            <p className="mt-4 text-sm text-text-secondary max-w-sm leading-relaxed">{t.hero.tagline}</p>
            <div className="mt-6 flex items-center gap-2">
              <a href="mailto:dior53634@gmail.com" className="glass-subtle rounded-full p-2.5 hover:bg-white/60 transition-colors" aria-label="Email">
                <Mail className="size-4" />
              </a>
              <a href="https://wa.me/201096144345" target="_blank" rel="noopener noreferrer" className="glass-subtle rounded-full p-2.5 hover:bg-white/60 transition-colors" aria-label="WhatsApp">
                <MessageCircle className="size-4" />
              </a>
              <a href="https://github.com/abbn7" target="_blank" rel="noopener noreferrer" className="glass-subtle rounded-full p-2.5 hover:bg-white/60 transition-colors" aria-label="GitHub">
                <Github className="size-4" />
              </a>
            </div>
          </div>
          <div>
            <div className="caption text-text-tertiary mb-4">{t.footer.sitemap}</div>
            <ul className="space-y-2">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {t.nav[l.key as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="caption text-text-tertiary mb-4">{t.contact.kicker}</div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>dior53634@gmail.com</li>
              <li>+20 010 9614 4345</li>
              <li>github.com/abbn7</li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-10" />
        <div className="mt-6 flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between text-[12px] text-text-tertiary">
          <div>© {new Date().getFullYear()} Abdelhamed Nada · {t.footer.rights}</div>
          <div>{t.footer.built}</div>
        </div>
      </div>
    </footer>
  );
}
