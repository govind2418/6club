import type { ReactNode } from "react";

type GamePreviewCardProps = {
  icon: ReactNode;
  name: string;
  tagline: string;
};

export function GamePreviewCard({ icon, name, tagline }: GamePreviewCardProps) {
  return (
    <div className="glass-card flex flex-col items-center gap-3 p-5 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/60 shadow-glow-sm">
        {icon}
      </div>
      <div>
        <p className="font-display text-base font-semibold text-gold-light">{name}</p>
        <p className="mt-0.5 text-xs text-ink/60">{tagline}</p>
      </div>
    </div>
  );
}
