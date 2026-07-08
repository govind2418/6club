export function LotteryPreview({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" className={className}>
      <circle cx="32" cy="30" r="20" fill="#1d1610" stroke="#d4af37" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="5" fill="#f7d774" />
      <circle cx="38" cy="22" r="5" fill="#d4af37" opacity="0.9" />
      <circle cx="32" cy="36" r="5" fill="#f7d774" opacity="0.7" />
      <rect x="14" y="46" width="36" height="10" rx="3" fill="none" stroke="#d4af37" strokeWidth="1.2" />
      <path d="M18 51h28" stroke="#f7d774" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}
