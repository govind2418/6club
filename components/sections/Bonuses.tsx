import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { bonuses, bonusDisclaimer } from "@/lib/content/bonuses";
import { REGISTER_URL } from "@/lib/seo";

export function Bonuses() {
  return (
    <section id="bonuses" aria-labelledby="bonuses-heading" className="py-20">
      <Container>
        <SectionHeading
          id="bonuses-heading"
          eyebrow="Bonuses"
          title="What you can earn as a player"
          description="6Club rewards new and regular players in a few different ways."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {bonuses.map((bonus, i) => (
            <Reveal key={bonus.id} delay={i * 0.05}>
              <GlassCard className="h-full">
                <h3 className="font-display text-lg font-semibold text-gold-light">
                  {bonus.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{bonus.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink/50">
          {bonusDisclaimer}
        </p>

        <div className="mt-8 flex justify-center">
          <Button href={REGISTER_URL} external variant="primary">
            Claim Bonuses on 6Club
          </Button>
        </div>
      </Container>
    </section>
  );
}
