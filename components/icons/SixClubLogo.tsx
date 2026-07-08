type SixClubLogoProps = {
  className?: string;
  size?: number;
};

/**
 * Original SixClub emblem: a faceted hexagon (gem-cut motif) wrapping a
 * stylised "6". Purely decorative — always paired with real text nearby,
 * so this stays aria-hidden.
 */
export function SixClubLogo({ className, size = 40 }: SixClubLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id="sixclub-gold" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f7d774" />
          <stop offset="0.5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#a8791f" />
        </linearGradient>
      </defs>
      <path
        d="M24 2 44 13v22L24 46 4 35V13Z"
        fill="#1d1610"
        stroke="url(#sixclub-gold)"
        strokeWidth="2"
      />
      <path
        d="M24 8 38 16v16L24 40 10 32V16Z"
        stroke="url(#sixclub-gold)"
        strokeWidth="1"
        opacity="0.5"
      />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontSize="20"
        fontWeight="700"
        fill="url(#sixclub-gold)"
        fontFamily="Georgia, serif"
      >
        6
      </text>
    </svg>
  );
}
