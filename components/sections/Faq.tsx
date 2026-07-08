import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20">
      <Container className="max-w-3xl">
        <SectionHeading id="faq-heading" eyebrow="FAQ" title="Common questions about 6Club" />
        <div className="mt-12">
          <FaqAccordion />
        </div>
      </Container>
    </section>
  );
}
