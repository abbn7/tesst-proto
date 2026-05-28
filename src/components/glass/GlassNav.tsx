import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", key: "home" as const },
  { to: "/about", key: "about" as const },
  { to: "/skills", key: "skills" as const },
  { to: "/projects", key: "projects" as const },
  { to: "/experience", key: "experience" as const },
  { to: "/services", key: "services" as const },
  { to: "/contact", key: "contact" as const },
];

export function GlassNav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav py-2" : "bg-transparent py-4",
      )}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="grid place-items-center size-8 rounded-lg bg-text-primary text-bg-primary text-[12px] font-bold"
          >
            AN
          </motion.span>
          <span className="font-semibold text-lg tracking-tight hidden sm:inline">Abdelhamed</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-[13px] text-text-secondary hover:text-text-primary transition-colors duration-200 data-[status=active]:text-text-primary data-[status=active]:font-medium"
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-text-primary"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-x-0 top-[60px] glass-ultra transition-all duration-300 overflow-hidden",
        open ? "max-h-screen opacity-100 border-b border-separator" : "max-h-0 opacity-0 pointer-events-none",
      )}>
        <div className="px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-xl font-medium text-text-secondary hover:text-text-primary transition-colors data-[status=active]:text-text-primary"
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
