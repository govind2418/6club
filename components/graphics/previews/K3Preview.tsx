function Pip({ cx, cy }: { cx: number; cy: number }) {
  return <circle cx={cx} cy={cy} r="1.8" fill="#f7d774" />;
}

function Die({ x }: { x: number }) {
  return (
    <g transform={`translate(${x}, 18)`}>
      <rect width="18" height="18" rx="4" fill="#1d1610" stroke="#d4af37" strokeWidth="1.2" />
      <Pip cx={6} cy={6} />
      <Pip cx={12} cy={6} />
      <Pip cx={9} cy={9} />
      <Pip cx={6} cy={12} />
      <Pip cx={12} cy={12} />
    </g>
  );
}

export function K3Preview({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" className={className}>
      <Die x={6} />
      <Die x={23} />
      <Die x={40} />
    </svg>
  );
}
