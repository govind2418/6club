import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { MiniFaqAccordion } from "@/components/ui/MiniFaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/schema";
import { loginSteps } from "@/lib/content/steps";
import { buildMetadata, LOGIN_URL } from "@/lib/seo";

const PATH = "/6club-login";
const TRAIL = [
  { name: "Home", path: "/" },
  { name: "6Club Login", path: PATH },
];

const LOGIN_FAQ = [
  {
    question: "I forgot my 6Club login password. What now?",
    answer:
      "Use the 'Forgot Password' link on the 6Club sign-in screen and reset it through your registered mobile number. You'll be back in within a couple of minutes.",
  },
  {
    question: "Why does 6Club login say my number is invalid?",
    answer:
      "Double-check you're entering the exact number used at registration, with no extra spaces or a country code you didn't use originally.",
  },
  {
    question: "Is it safe to stay logged in to 6Club on my phone?",
    answer:
      "Staying logged in is fine on a personal device. On a shared or public phone, log out after each session to keep your account secure.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "6Club Login: Sign In to Your Account",
  description:
    "Quick 6Club login guide — the exact sign-in steps, what to do if you forgot your password, and fixes for common login errors.",
  path: PATH,
});

export default function LoginPage() {
  return (
    <>
      <JsonLd data={breadcrumbListSchema(TRAIL)} />
      <JsonLd data={faqPageSchema(LOGIN_FAQ)} />

      <Container>
        <Breadcrumbs trail={TRAIL} />
        <PageHeader
          eyebrow="6Club Login"
          title="6Club Login: Sign In to Your Account"
          description="Already registered? Here's the fastest way back into your 6Club account, plus fixes for the login issues players hit most."
        />
      </Container>

      <Container className="max-w-3xl pb-20">
        <h2 className="font-display text-2xl font-bold text-ink">The login steps</h2>
        <ol className="mt-6 space-y-5">
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
            Login to 6Club Now
          </Button>
        </div>

        <GlassCard className="mt-10">
          <h2 className="font-display text-lg font-semibold text-gold-light">
            Still can&apos;t sign in?
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
            <li>Confirm you&apos;re using the mobile number from registration, not a new one.</li>
            <li>Check for autocorrect or autofill changing digits in the number field.</li>
            <li>Reset your password rather than guessing repeatedly — repeated wrong attempts can briefly lock the account.</li>
          </ul>
        </GlassCard>

        <p className="mt-6 text-center text-sm text-ink/60">
          New to 6Club?{" "}
          <Link href="/6club-register" className="text-gold-light underline underline-offset-2">
            Create an account instead
          </Link>
          .
        </p>

        <h2 className="mt-16 font-display text-2xl font-bold text-ink">
          Login questions, answered
        </h2>
        <div className="mt-6">
          <MiniFaqAccordion items={LOGIN_FAQ} groupName="login-faq" />
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
