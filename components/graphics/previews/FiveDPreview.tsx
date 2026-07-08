export function FiveDPreview({ className }: { className?: string }) {
  const digits = ["3", "7", "1", "9", "4"];
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" className={className}>
      {digits.map((d, i) => (
        <g key={d} transform={`translate(${4 + i * 12}, 22)`}>
          <rect width="10" height="20" rx="2.5" fill="#1d1610" stroke="#d4af37" strokeWidth="1.2" />
          <text x="5" y="14" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f7d774" fontFamily="Georgia, serif">
            {d}
          </text>
        </g>
      ))}
    </svg>
  );
}
