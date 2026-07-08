import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { registerSteps } from "@/lib/content/steps";
import { REGISTER_URL } from "@/lib/seo";

export function HowToRegister() {
  return (
    <section id="register" aria-labelledby="register-heading" className="py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          id="register-heading"
          eyebrow="6Club Register"
          title="How to register on 6Club"
          description="Four short steps and you're in. Registration takes less than two minutes."
        />

        <ol className="mt-12 space-y-5">
          {registerSteps.map((step, i) => (
            <li key={step.title} className="glass-card flex gap-4 p-5">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold-gradient text-sm font-bold text-background">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <Button href={REGISTER_URL} external variant="primary">
            Register on 6Club
          </Button>
        </div>
      </Container>
    </section>
  );
}
