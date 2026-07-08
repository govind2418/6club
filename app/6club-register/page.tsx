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
import { registerSteps } from "@/lib/content/steps";
import { buildMetadata, REGISTER_URL } from "@/lib/seo";

const PATH = "/6club-register";
const TRAIL = [
  { name: "Home", path: "/" },
  { name: "6Club Register", path: PATH },
];

const REGISTER_FAQ = [
  {
    question: "Do I need an invitation code to register on 6Club?",
    answer:
      "6Club registration works with an invitation code, and this page's Register button already has one applied for you, so you don't need to find or enter one separately.",
  },
  {
    question: "Can I register on 6Club with just a mobile number?",
    answer:
      "Yes. 6Club registration only asks for a mobile number and a password you create — no email or ID upload is needed to create the account itself.",
  },
  {
    question: "What if 6Club register page doesn't load?",
    answer:
      "This usually means a slow connection or a temporary server hiccup. Refresh the page or try again in a minute using the Register button above.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "6Club Register: Create Your Account in Under 2 Minutes",
  description:
    "Step-by-step 6Club register guide. Learn what you need before signing up, follow the exact steps, and get straight into Win Go, Lottery, and Slots.",
  path: PATH,
});

export default function RegisterPage() {
  return (
    <>
      <JsonLd data={breadcrumbListSchema(TRAIL)} />
      <JsonLd data={faqPageSchema(REGISTER_FAQ)} />

      <Container>
        <Breadcrumbs trail={TRAIL} />
        <PageHeader
          eyebrow="6Club Register"
          title="6Club Register: Create Your Account in Under 2 Minutes"
          description="Signing up for 6Club is a short, mobile-only process. Here's exactly what to expect before you tap Register."
        />
      </Container>

      <Container className="max-w-3xl pb-20">
        <GlassCard className="mb-10">
          <h2 className="font-display text-lg font-semibold text-gold-light">
            Before you start
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
            <li>A working mobile number you can access right now.</li>
            <li>A password you&apos;ll remember — you&apos;ll need it again to log in.</li>
            <li>Two minutes of uninterrupted time to finish every step in one go.</li>
          </ul>
        </GlassCard>

        <h2 className="font-display text-2xl font-bold text-ink">The registration steps</h2>
        <ol className="mt-6 space-y-5">
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
            Register on 6Club Now
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-ink/60">
          Already have an account?{" "}
          <Link href="/6club-login" className="text-gold-light underline underline-offset-2">
            Go to 6Club Login
          </Link>
          .
        </p>

        <h2 className="mt-16 font-display text-2xl font-bold text-ink">
          Register questions, answered
        </h2>
        <div className="mt-6">
          <MiniFaqAccordion items={REGISTER_FAQ} groupName="register-faq" />
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
