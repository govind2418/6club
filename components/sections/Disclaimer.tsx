import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Disclaimer() {
  return (
    <section id="disclaimer" aria-labelledby="disclaimer-heading" className="py-20">
      <Container className="max-w-3xl">
        <SectionHeading id="disclaimer-heading" eyebrow="Disclaimer" title="Please read before you play" />

        <GlassCard className="mt-12 space-y-4 text-sm leading-relaxed text-ink/70">
          <p>
            SixClub.in is an independent, unofficial information and referral website. We are not
            the official 6Club company, and we have no ownership stake in or control over the
            6Club app, its games, or its outcomes. All product names, logos, and brands mentioned
            belong to their respective owners.
          </p>
          <p>
            Games on 6Club, including Win Go, Lottery, and other formats described on this page,
            involve real-money risk. Outcomes are not guaranteed, and you may lose money you
            deposit. Only play with funds you can afford to lose, and treat these games as
            entertainment, not income.
          </p>
          <p>
            This site is intended for adults aged 18 and over. Real-money gaming may be
            restricted or regulated in your state or country — it is your responsibility to
            check and follow local laws before registering or playing.
          </p>
          <p>
            If gaming stops being enjoyable or starts affecting your finances, relationships, or
            wellbeing, please stop playing and seek support from a local counselling or
            problem-gambling helpline.
          </p>
        </GlassCard>
      </Container>
    </section>
  );
}
