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

const PATH = "/6club-official";
const TRAIL = [
  { name: "Home", path: "/" },
  { name: "6Club Official", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Is SixClub the Official 6Club Website?",
  description:
    "A clear answer on whether SixClub.in is the official 6Club site, how we're actually connected to the app, and how to tell a genuine 6Club link from a fake one.",
  path: PATH,
});

export default function OfficialPage() {
  return (
    <>
      <JsonLd data={breadcrumbListSchema(TRAIL)} />

      <Container>
        <Breadcrumbs trail={TRAIL} />
        <PageHeader
          eyebrow="6Club Official"
          title="Is SixClub the Official 6Club Website?"
          description="Short answer: no — and we'd rather tell you that plainly than let you assume otherwise."
        />
      </Container>

      <Container className="max-w-3xl space-y-6 pb-20">
        <GlassCard>
          <h2 className="font-display text-lg font-semibold text-gold-light">
            What SixClub actually is
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            SixClub.in is an independent guide and referral site. We don&apos;t own, operate, or
            represent the company behind the 6Club app. What we do is explain how to register, log
            in, and download the app in plain language, and every Register, Login, and Download
            button on this site leads to 6Club&apos;s own official screens through a referral
            invitation link.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display text-lg font-semibold text-gold-light">
            Why that distinction matters
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Apps like 6Club attract a lot of copycat pages and fake APK links. Knowing that SixClub
            is a guide, not the company itself, means you should always expect to land on 6Club&apos;s
            own domain when you tap Register, Login, or Download here — not a third-party
            look-alike. If a link ever takes you somewhere that doesn&apos;t look like the official app,
            stop and don&apos;t enter your details.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display text-lg font-semibold text-gold-light">
            How to tell a genuine 6Club link from a fake one
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
            <li>Only install the APK through the link provided after registration — never from a random forum, chat message, or ad.</li>
            <li>Turn off &quot;install from unknown sources&quot; again once the install is done.</li>
            <li>Be wary of any page promising guaranteed wins — no legitimate real-money game can promise that.</li>
            <li>If in doubt, come back to this guide and use our Register/Login buttons rather than searching fresh links each time.</li>
          </ul>
        </GlassCard>

        <p className="text-center text-sm leading-relaxed text-ink/50">
          For the full legal notice, age requirement, and responsible-gaming information, read our{" "}
          <Link href="/#disclaimer" className="text-gold-light underline underline-offset-2">
            full disclaimer
          </Link>
          .
        </p>

        <div className="flex justify-center pt-4">
          <Button href={REGISTER_URL} external variant="primary">
            Continue to 6Club Register
          </Button>
        </div>

        <p className="pt-6 text-center text-sm text-ink/50">
          <Link href="/" className="hover:text-gold-light">
            &larr; Back to the SixClub home guide
          </Link>
        </p>
      </Container>
    </>
  );
}
