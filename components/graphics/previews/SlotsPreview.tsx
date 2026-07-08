export function SlotsPreview({ className }: { className?: string }) {
  const symbols = ["7", "$", "★"];
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" className={className}>
      <rect x="6" y="14" width="52" height="36" rx="6" fill="#1d1610" stroke="#d4af37" strokeWidth="1.5" />
      {symbols.map((s, i) => (
        <g key={s} transform={`translate(${14 + i * 14}, 22)`}>
          <rect width="12" height="20" rx="2" fill="none" stroke="#f7d774" strokeWidth="1" opacity="0.6" />
          <text x="6" y="14" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f7d774" fontFamily="Georgia, serif">
            {s}
          </text>
        </g>
      ))}
    </svg>
  );
}
