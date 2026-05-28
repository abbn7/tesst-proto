export function WordMarquee({ words }: { words: string[] }) {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden py-6" aria-hidden>
      <div className="flex animate-marquee-x will-change-transform gap-12">
        {row.map((w, i) => (
          <span
            key={i}
            className="text-display text-[clamp(3rem,9vw,8rem)] marquee-text whitespace-nowrap"
          >
            {w} <span className="text-foreground/15">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}