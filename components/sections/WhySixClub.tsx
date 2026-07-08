import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";

const REASONS = [
  {
    title: "Clear, honest guidance",
    description:
      "No confusing jargon. Every step for registering, logging in, and downloading is written in plain language.",
  },
  {
    title: "Straight to the official app",
    description:
      "Every button on this page sends you directly to 6Club's own registration and login screens — nothing hidden in between.",
  },
  {
    title: "One page, everything you need",
    description:
      "Games, bonuses, install steps, and answers to common questions, all in a single place instead of scattered across forums.",
  },
  {
    title: "Built for mobile",
    description:
      "Most 6Club players are on a phone, so this guide is designed mobile-first and stays fast even on a slower connection.",
  },
];

export function WhySixClub() {
  return (
    <section id="why-sixclub" aria-labelledby="why-sixclub-heading" className="py-20">
      <Container>
        <SectionHeading
          id="why-sixclub-heading"
          eyebrow="Why SixClub"
          title="A simpler way to reach 6Club"
          description="SixClub exists for one reason: to make registering, logging in, and downloading the 6Club app straightforward."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.05}>
              <GlassCard className="h-full">
                <h3 className="font-display text-lg font-semibold text-gold-light">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{reason.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
