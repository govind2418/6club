import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GamePreviewCard } from "@/components/graphics/GamePreviewCard";
import { WinGoPreview } from "@/components/graphics/previews/WinGoPreview";
import { FiveDPreview } from "@/components/graphics/previews/FiveDPreview";
import { K3Preview } from "@/components/graphics/previews/K3Preview";
import { LotteryPreview } from "@/components/graphics/previews/LotteryPreview";
import { SlotsPreview } from "@/components/graphics/previews/SlotsPreview";
import { FishingPreview } from "@/components/graphics/previews/FishingPreview";
import { RummyPreview } from "@/components/graphics/previews/RummyPreview";
import { gameFeatures } from "@/lib/content/features";
import { REGISTER_URL } from "@/lib/seo";

const ICONS: Record<string, ReactNode> = {
  wingo: <WinGoPreview className="h-10 w-10" />,
  fived: <FiveDPreview className="h-10 w-10" />,
  k3: <K3Preview className="h-10 w-10" />,
  lottery: <LotteryPreview className="h-10 w-10" />,
  slots: <SlotsPreview className="h-10 w-10" />,
  fishing: <FishingPreview className="h-10 w-10" />,
  rummy: <RummyPreview className="h-10 w-10" />,
};

export function GameFeatures() {
  return (
    <section id="games" aria-labelledby="games-heading" className="py-20">
      <Container>
        <SectionHeading
          id="games-heading"
          eyebrow="6Club Game"
          title="Seven games, one app"
          description="From fast colour prediction rounds to classic card play, here's what you'll find inside the 6Club game."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {gameFeatures.map((game, i) => (
            <Reveal key={game.id} delay={i * 0.04}>
              <GamePreviewCard icon={ICONS[game.id]} name={game.name} tagline={game.tagline} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={REGISTER_URL} external variant="primary">
            Play Now on 6Club
          </Button>
        </div>
      </Container>
    </section>
  );
}
