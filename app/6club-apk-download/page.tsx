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
import { installSteps } from "@/lib/content/steps";
import {
  buildMetadata,
  APK_DOWNLOAD_URL,
  APP_VERSION,
  APP_UPDATED,
  APP_SIZE,
  APP_MIN_ANDROID,
} from "@/lib/seo";

const PATH = "/6club-apk-download";
const TRAIL = [
  { name: "Home", path: "/" },
  { name: "6Club APK Download", path: PATH },
];

const APK_FAQ = [
  {
    question: "Why isn't 6Club on the Google Play Store?",
    answer:
      "Real-money gaming apps like 6Club generally aren't allowed on the Play Store under its policies, so the app is distributed as a direct APK file instead — a common setup across this entire app category, not something unique to 6Club.",
  },
  {
    question: "Will installing the 6Club APK harm my phone?",
    answer:
      "The APK itself is safe when downloaded through the official link provided after registration. The main risk isn't the app — it's downloading APK files from random third-party sites instead of the official source.",
  },
  {
    question: "Do I need to keep 'unknown sources' turned on permanently?",
    answer:
      "No. Turn it on just long enough to install the APK, then switch it back off. Leaving it on isn't necessary for the app to keep working.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "6Club APK Download: Latest Version, Size & Install Guide",
  description:
    "Download the current 6Club APK and install it correctly the first time — version, file size, Android requirements, and every step explained.",
  path: PATH,
});

export default function ApkDownloadPage() {
  return (
    <>
      <JsonLd data={breadcrumbListSchema(TRAIL)} />
      <JsonLd data={faqPageSchema(APK_FAQ)} />

      <Container>
        <Breadcrumbs trail={TRAIL} />
        <PageHeader
          eyebrow="6Club APK"
          title="6Club APK Download: Latest Version, Size & Install Guide"
          description="6Club runs as a direct APK install rather than a Play Store app. Here's the current build and exactly how to get it installed without issues."
        />
      </Container>

      <Container className="max-w-3xl pb-20">
        <GlassCard>
          <dl className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-ink/50">Version</dt>
              <dd className="mt-1 font-semibold text-gold-light">{APP_VERSION}</dd>
            </div>
            <div>
              <dt className="text-ink/50">Updated</dt>
              <dd className="mt-1 font-semibold text-gold-light">{APP_UPDATED}</dd>
            </div>
            <div>
              <dt className="text-ink/50">File size</dt>
              <dd className="mt-1 font-semibold text-gold-light">{APP_SIZE}</dd>
            </div>
            <div>
              <dt className="text-ink/50">Requires</dt>
              <dd className="mt-1 font-semibold text-gold-light">{APP_MIN_ANDROID}</dd>
            </div>
          </dl>

          <Button href={APK_DOWNLOAD_URL} external variant="primary" className="mt-8 w-full">
            Download 6Club APK Now
          </Button>
        </GlassCard>

        <h2 className="mt-12 font-display text-2xl font-bold text-ink">Installing the APK</h2>
        <ol className="mt-6 space-y-5">
          {installSteps.map((step, i) => (
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

        <GlassCard className="mt-10">
          <h2 className="font-display text-lg font-semibold text-gold-light">
            Why an APK instead of the Play Store?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Real-money game apps sit outside what the Play Store allows, so 6Club — like almost
            every app in this category — ships as a standalone APK. That&apos;s normal for this kind of
            app, but it does mean the safest habit is downloading it only from a link you trust,
            such as the one on this page, rather than searching for a fresh APK every time.
          </p>
        </GlassCard>

        <p className="mt-6 text-center text-sm text-ink/60">
          Installed it already?{" "}
          <Link href="/6club-register" className="text-gold-light underline underline-offset-2">
            Register your account
          </Link>{" "}
          to start playing.
        </p>

        <h2 className="mt-16 font-display text-2xl font-bold text-ink">
          APK download questions, answered
        </h2>
        <div className="mt-6">
          <MiniFaqAccordion items={APK_FAQ} groupName="apk-faq" />
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
