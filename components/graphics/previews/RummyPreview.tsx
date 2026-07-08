function Card({ transform, suit }: { transform: string; suit: string }) {
  return (
    <g transform={transform}>
      <rect width="16" height="24" rx="2.5" fill="#1d1610" stroke="#d4af37" strokeWidth="1.2" />
      <text x="8" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f7d774" fontFamily="Georgia, serif">
        {suit}
      </text>
    </g>
  );
}

export function RummyPreview({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" className={className}>
      <Card transform="translate(14,18) rotate(-12 8 12)" suit="A" />
      <Card transform="translate(24,14)" suit="K" />
      <Card transform="translate(34,18) rotate(12 8 12)" suit="Q" />
    </svg>
  );
}
