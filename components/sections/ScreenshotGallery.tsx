import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneFrame } from "@/components/graphics/PhoneFrame";
import { WinGoPreview } from "@/components/graphics/previews/WinGoPreview";
import { FiveDPreview } from "@/components/graphics/previews/FiveDPreview";
import { K3Preview } from "@/components/graphics/previews/K3Preview";
import { LotteryPreview } from "@/components/graphics/previews/LotteryPreview";
import { SlotsPreview } from "@/components/graphics/previews/SlotsPreview";
import { FishingPreview } from "@/components/graphics/previews/FishingPreview";
import { RummyPreview } from "@/components/graphics/previews/RummyPreview";
import { gameFeatures } from "@/lib/content/features";

const ICONS: Record<string, ReactNode> = {
  wingo: <WinGoPreview className="h-12 w-12" />,
  fived: <FiveDPreview className="h-12 w-12" />,
  k3: <K3Preview className="h-12 w-12" />,
  lottery: <LotteryPreview className="h-12 w-12" />,
  slots: <SlotsPreview className="h-12 w-12" />,
  fishing: <FishingPreview className="h-12 w-12" />,
  rummy: <RummyPreview className="h-12 w-12" />,
};

export function ScreenshotGallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-20">
      <Container>
        <SectionHeading
          id="gallery-heading"
          eyebrow="Inside the App"
          title="A closer look at each game"
          description="Original preview cards showing what to expect from every game mode inside 6Club."
        />

        <div className="mt-12 flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-4">
          {gameFeatures.map((game) => (
            <div key={game.id} className="w-56 flex-shrink-0 sm:w-auto">
              <PhoneFrame icon={ICONS[game.id]} name={game.name} description={game.description} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
