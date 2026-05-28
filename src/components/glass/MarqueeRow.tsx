export function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden mask-fade">
      <div
        className="flex gap-4 whitespace-nowrap py-2"
        style={{
          animation: `marquee ${items.length * 4}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((label, i) => (
          <span
            key={i}
            className="glass-subtle rounded-full px-5 py-2 text-sm text-foreground/80"
          >
            {label}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </div>
  );
}
