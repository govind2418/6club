import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { loginSteps } from "@/lib/content/steps";
import { LOGIN_URL } from "@/lib/seo";

export function HowToLogin() {
  return (
    <section id="login" aria-labelledby="login-heading" className="py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          id="login-heading"
          eyebrow="6Club Login"
          title="How to log in to 6Club"
          description="Already registered? Signing back in only takes a moment."
        />

        <ol className="mt-12 space-y-5">
          {loginSteps.map((step, i) => (
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
          <Button href={LOGIN_URL} external variant="primary">
            Login to 6Club
          </Button>
        </div>
      </Container>
    </section>
  );
}
