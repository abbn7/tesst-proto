import { motion } from "framer-motion";

type Variant = "ecommerce" | "bot" | "frontend";

const TINTS: Record<Variant, { a: string; b: string; chip: string }> = {
  ecommerce: { a: "var(--accent-indigo)", b: "var(--accent-pink)", chip: "var(--accent-mint)" },
  bot:       { a: "var(--accent-mint)",   b: "var(--accent-teal)", chip: "var(--accent-gold)" },
  frontend:  { a: "var(--accent-peach)",  b: "var(--accent-gold)", chip: "var(--accent-lilac)" },
};

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
      <span className="size-2.5 rounded-full bg-[oklch(0.78_0.13_25)]" />
      <span className="size-2.5 rounded-full bg-[oklch(0.85_0.13_85)]" />
      <span className="size-2.5 rounded-full bg-[oklch(0.80_0.13_150)]" />
      <div className="ml-3 flex-1 glass-clear rounded-full px-3 py-1 text-[10px] font-mono text-text-tertiary truncate">{url}</div>
    </div>
  );
}

export function ProjectMockup({ variant, label }: { variant: Variant; label: string }) {
  const t = TINTS[variant];
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-frost"
      style={{
        background: `linear-gradient(135deg, color-mix(in oklab, ${t.a} 35%, transparent), color-mix(in oklab, ${t.b} 30%, transparent))`,
      }}
    >
      {/* glow */}
      <div
        aria-hidden
        className="absolute -top-20 -right-12 size-56 rounded-full blur-3xl opacity-60"
        style={{ background: t.a }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-12 size-72 rounded-full blur-3xl opacity-50"
        style={{ background: t.b }}
      />

      <div className="relative h-full p-5 flex flex-col">
        <BrowserChrome url={variant === "bot" ? "t.me/bot" : variant === "ecommerce" ? "shop.demo/store" : "app.demo/dashboard"} />

        {variant === "ecommerce" && (
          <div className="mt-4 grid grid-cols-3 gap-2 flex-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-clear rounded-lg p-2 flex flex-col gap-1.5">
                <div className="aspect-square rounded-md" style={{ background: `linear-gradient(135deg, ${t.a}, ${t.b})`, opacity: 0.55 }} />
                <div className="h-1.5 rounded-full bg-white/40 w-3/4" />
                <div className="h-1.5 rounded-full bg-white/30 w-1/2" />
              </div>
            ))}
          </div>
        )}

        {variant === "bot" && (
          <div className="mt-4 flex-1 flex flex-col gap-2 text-[10px] font-mono">
            {[
              { from: "user", text: "/repos list" },
              { from: "bot",  text: "→ 12 repositories found" },
              { from: "bot",  text: "✓ portfolio · ✓ shop · ✓ bot" },
              { from: "user", text: "/star portfolio" },
              { from: "bot",  text: "★ Starred successfully" },
            ].map((m, i) => (
              <div key={i} className={`max-w-[78%] rounded-xl px-3 py-1.5 ${m.from === "user" ? "self-end glass-elevated text-text-primary" : "self-start"}`}
                   style={m.from === "bot" ? { background: `color-mix(in oklab, ${t.chip} 35%, transparent)`, color: "var(--text-primary)" } : undefined}>
                {m.text}
              </div>
            ))}
          </div>
        )}

        {variant === "frontend" && (
          <div className="mt-4 grid grid-cols-3 gap-2 flex-1">
            <div className="col-span-1 flex flex-col gap-1.5">
              <div className="h-2 w-2/3 rounded-full bg-white/50" />
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-1.5 rounded-full bg-white/25" />
              ))}
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <div className="glass-clear rounded-lg p-2 flex items-end gap-1.5 h-20">
                {[40, 70, 50, 90, 60, 80, 55].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `linear-gradient(to top, ${t.a}, ${t.b})`, opacity: 0.85 }} />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="glass-clear rounded-lg p-2">
                  <div className="h-1.5 w-1/2 rounded-full bg-white/40" />
                  <div className="mt-1.5 text-[14px] font-semibold text-text-primary">98</div>
                </div>
                <div className="glass-clear rounded-lg p-2">
                  <div className="h-1.5 w-1/2 rounded-full bg-white/40" />
                  <div className="mt-1.5 text-[14px] font-semibold text-text-primary">A+</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3 glass-subtle rounded-full px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  );
}