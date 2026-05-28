import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("theme") as Theme)) || null;
    const prefers = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = saved ?? prefers;
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    if (typeof window !== "undefined") localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "glass-subtle rounded-full p-2.5 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300",
        "inline-flex items-center justify-center",
      )}
    >
      {theme === "dark" ? <Sun className="size-4 text-text-primary" /> : <Moon className="size-4 text-text-primary" />}
    </button>
  );
}
