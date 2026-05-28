import { motion } from "framer-motion";

export function SkillMeter({ value, label, tint = "var(--accent-blue)" }: { value: number; label: string; tint?: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary">{label}</span>
        <span className="text-[11px] font-medium text-text-secondary tabular-nums">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-text-primary/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${tint}, color-mix(in oklab, ${tint} 60%, white))` }}
        />
      </div>
    </div>
  );
}
