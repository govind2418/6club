import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbListSchema } from "@/lib/schema";
import { buildMetadata, REGISTER_URL } from "@/lib/seo";
import { WinGoPreview } from "@/components/graphics/previews/WinGoPreview";
import { FiveDPreview } from "@/components/graphics/previews/FiveDPreview";
import { K3Preview } from "@/components/graphics/previews/K3Preview";
import { LotteryPreview } from "@/components/graphics/previews/LotteryPreview";
import { SlotsPreview } from "@/components/graphics/previews/SlotsPreview";
import { FishingPreview } from "@/components/graphics/previews/FishingPreview";
import { RummyPreview } from "@/components/graphics/previews/RummyPreview";

const PATH = "/6club-game";
const TRAIL = [
  { name: "Home", path: "/" },
  { name: "6Club Game", path: PATH },
];

const GAME_GUIDE = [
  {
    id: "wingo",
    name: "Win Go",
    icon: <WinGoPreview className="h-12 w-12" />,
    body: "Win Go is the fastest game in 6Club: pick a colour or number and wait for a short round timer to end. There's very little to learn, which is why most new players start here before trying anything else.",
  },
  {
    id: "fived",
    name: "5D",
    icon: <FiveDPreview className="h-12 w-12" />,
    body: "5D asks you to choose a five-digit combination, either your own pick or a quick random one. It rewards players who like to track patterns across rounds rather than decide on instinct alone.",
  },
  {
    id: "k3",
    name: "K3",
    icon: <K3Preview className="h-12 w-12" />,
    body: "K3 is a three-dice game where you bet on totals, pairs, or single numbers. The rules take under a minute to learn, and each round resolves quickly.",
  },
  {
    id: "lottery",
    name: "Lottery",
    icon: <LotteryPreview className="h-12 w-12" />,
    body: "6Club's Lottery mode runs like a traditional numbered draw, with results published after every round so you can review recent outcomes before playing again.",
  },
  {
    id: "slots",
    name: "Slots",
    icon: <SlotsPreview className="h-12 w-12" />,
    body: "The Slots section holds a library of themed reel games with different jackpot styles. It's built for short, casual spins rather than long strategic sessions.",
  },
  {
    id: "fishing",
    name: "Fishing",
    icon: <FishingPreview className="h-12 w-12" />,
    body: "Fishing is 6Club's arcade-style shooting game — aim at targets on screen and land bigger catches for bigger rewards. It's the most hands-on, reflex-driven mode in the app.",
  },
  {
    id: "rummy",
    name: "Rummy",
    icon: <RummyPreview className="h-12 w-12" />,
    body: "Rummy brings the classic card game of sequences and sets into 6Club, played against other users. It suits players who prefer skill and strategy over pure chance.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "6Club Game Guide: Every Game Mode Explained",
  description:
    "A plain-English breakdown of every 6Club game — Win Go, 5D, K3, Lottery, Slots, Fishing, and Rummy — so you know exactly what to expect before you play.",
  path: PATH,
});

export default function GamePage() {
  return (
    <>
      <JsonLd data={breadcrumbListSchema(TRAIL)} />

      <Container>
        <Breadcrumbs trail={TRAIL} />
        <PageHeader
          eyebrow="6Club Game"
          title="6Club Game Guide: Every Game Mode Explained"
          description="6Club bundles seven different games into one app. Here's what each one actually plays like, so you can pick where to start."
        />
      </Container>

      <Container className="max-w-3xl pb-20">
        <div className="space-y-5">
          {GAME_GUIDE.map((game) => (
            <div key={game.id} className="glass-card flex gap-5 p-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-background/60 shadow-glow-sm">
                {game.icon}
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-gold-light">
                  {game.name}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{game.body}</p>
              </div>
            </div>
          ))}
        </div>

        <GlassCard className="mt-10">
          <h2 className="font-display text-lg font-semibold text-gold-light">
            Which 6Club game should you start with?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            If you want the simplest introduction, start with Win Go — the rules take seconds to
            learn. If you enjoy tracking numbers over time, 5D or K3 give you more to plan around.
            For a familiar, classic feel, Lottery is the closest to what most people already know.
            And if you&apos;d rather play against people than the odds, Rummy is built for that.
          </p>
        </GlassCard>

        <div className="mt-10 flex justify-center">
          <Button href={REGISTER_URL} external variant="primary">
            Play Now on 6Club
          </Button>
        </div>

        <p className="mt-10 text-center text-sm text-ink/50">
          <Link href="/" className="hover:text-gold-light">
            &larr; Back to the SixClub home guide
          </Link>
        </p>
      </Container>
    </>
  );
}
