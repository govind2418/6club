export function WinGoPreview({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" className={className}>
      <circle cx="32" cy="32" r="30" fill="#1d1610" stroke="#d4af37" strokeWidth="1.5" opacity="0.6" />
      <circle cx="22" cy="24" r="9" fill="#4ade80" opacity="0.9" />
      <circle cx="42" cy="24" r="9" fill="#f472b6" opacity="0.9" />
      <circle cx="32" cy="40" r="9" fill="#d4af37" opacity="0.9" />
      <circle cx="32" cy="32" r="30" stroke="#f7d774" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
