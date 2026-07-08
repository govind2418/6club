export function FishingPreview({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" className={className}>
      <path
        d="M14 32c8-10 20-10 28-2 4 4 4 6 0 4-8-4-20-4-28 2-2 1.5-2-2 0-4Z"
        fill="#d4af37"
        opacity="0.85"
      />
      <circle cx="18" cy="30" r="1.6" fill="#1d1610" />
      <path d="M42 30l8-6-2 8 2 8-8-6Z" fill="#f7d774" opacity="0.8" />
      <circle cx="32" cy="14" r="18" stroke="#f7d774" strokeWidth="1" opacity="0.35" fill="none" />
    </svg>
  );
}
