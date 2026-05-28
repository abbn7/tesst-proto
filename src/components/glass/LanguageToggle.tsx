import { useLang } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className="glass-subtle inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-foreground/80 hover:bg-white/60 transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="size-3.5" />
      <span className="font-mono">{lang === "en" ? "EN" : "AR"}</span>
    </button>
  );
}
