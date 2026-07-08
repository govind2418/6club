import type { ReactNode } from "react";

type PhoneFrameProps = {
  icon: ReactNode;
  name: string;
  description: string;
};

export function PhoneFrame({ icon, name, description }: PhoneFrameProps) {
  return (
    <div className="glass-card flex flex-col overflow-hidden">
      <div className="relative flex aspect-[9/16] flex-col items-center justify-center gap-4 border-b border-gold/10 bg-gradient-to-b from-surface to-background px-6">
        <span className="absolute top-3 h-1 w-10 rounded-full bg-gold/30" aria-hidden="true" />
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background/70 shadow-glow-sm">
          {icon}
        </div>
        <p className="font-display text-lg font-semibold text-gold-light">{name}</p>
      </div>
      <p className="p-5 text-sm leading-relaxed text-ink/70">{description}</p>
    </div>
  );
}
