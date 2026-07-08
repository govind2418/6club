import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { installSteps } from "@/lib/content/steps";
import { APK_DOWNLOAD_URL, APP_VERSION, APP_UPDATED, APP_SIZE, APP_MIN_ANDROID } from "@/lib/seo";

export function ApkDownload() {
  return (
    <section id="download" aria-labelledby="download-heading" className="py-20">
      <Container>
        <SectionHeading
          id="download-heading"
          eyebrow="6Club APK"
          title="Download the 6Club APK"
          description="6Club isn't listed on the Play Store, so it's installed as a direct APK file. Here's the current build and how to install it."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <GlassCard>
            <dl className="grid grid-cols-2 gap-4 text-sm">
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

          <ol className="space-y-5">
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
        </div>

        <p className="mt-6 text-center text-sm text-ink/60">
          <Link href="/6club-apk-download" className="text-gold-light underline underline-offset-2">
            Read the full APK download &amp; install guide
          </Link>
        </p>
      </Container>
    </section>
  );
}
