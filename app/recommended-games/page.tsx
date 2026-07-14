import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { MiniFaqAccordion } from "@/components/ui/MiniFaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbListSchema, faqPageSchema, itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/recommended-games";
const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Recommended Gaming Platforms", path: PATH },
];

type Platform = {
  id: string;
  name: string;
  url: string;
  description: string;
  highlights: string[];
};

const PLATFORMS: Platform[] = [
  {
    id: "sikkim-game",
    name: "Sikkim Game",
    url: "https://sikkimgame.co.in",
    description:
      "Sikkim Game presents itself as a colour-prediction and mini-game platform themed around fast, round-based betting. New users typically register with a mobile number and can browse a small set of prediction and card modes without a lengthy setup. The platform's appeal, like others in this space, centres on same-day rounds and referral-driven growth rather than a large game catalogue. As with any real-money app, terms around withdrawals, minimum deposits and bonus eligibility are defined inside the platform itself and can change without notice, so reviewing them firsthand before playing is worthwhile.",
    highlights: ["Mobile-first registration flow", "Colour prediction & mini-games", "Referral-based bonus structure"],
  },
  {
    id: "six-club",
    name: "Six Club",
    url: "https://sixclub.in",
    description:
      "Six Club is positioned as a broader gaming destination covering colour prediction, lottery-style draws and light card games under one account. It leans on a simple onboarding flow — register, verify a number, and browse available game rooms — rather than a complex lobby structure. Bonuses, VIP tiers and daily check-in rewards are the usual growth levers referenced across this category of app, though specifics sit inside the platform and shift over time. Anyone evaluating it should treat it the same way as any other real-money gaming app: read the current terms directly before depositing.",
    highlights: ["Prediction, lottery & card rooms", "VIP tiers & check-in rewards", "Single-account onboarding"],
  },
  {
    id: "dg-club",
    name: "DG Club",
    url: "https://dgclub.in",
    description:
      "DG Club takes a club-style membership approach to online prediction and slot games, with sign-up gated behind an invite or referral code in many cases. The lobby is generally organised around a handful of core modes rather than dozens of variants, which keeps the interface easier to navigate for first-time users. Loyalty perks such as level-based rewards and periodic promotions are common in this category, and DG Club follows a similar pattern. Because deposit limits, verification requirements and payout rules are set by the platform, checking the in-app terms before committing funds is recommended.",
    highlights: ["Invite-based membership model", "Slot & prediction game rooms", "Level-based loyalty rewards"],
  },
  {
    id: "daman-game",
    name: "Daman Game",
    url: "https://damangame.in",
    description:
      "Daman Game markets itself as a colour-prediction and lottery app aimed at players who want short, frequent betting rounds rather than long sessions. Registration is typically phone-number based, with an optional referral code applied at sign-up. The platform's structure — daily rounds, streak-based bonuses, and a tiered membership system — mirrors much of the wider colour-prediction app category rather than introducing an unusual format. As with comparable platforms, the safest approach is registering directly through the app's own onboarding screens and reviewing its current bonus and withdrawal terms rather than relying on third-party summaries.",
    highlights: ["Short, round-based betting format", "Streak & tier bonus system", "Phone-based sign-up"],
  },
  {
    id: "diuwin",
    name: "Diuwin",
    url: "https://diuwin.in.net",
    description:
      "Diuwin combines colour prediction with a small selection of slot and card games inside a single mobile-friendly interface. It follows the now-familiar pattern for this app category: a quick registration step, an optional invitation code, and a rewards system built around daily logins and referrals. Diuwin doesn't appear to differentiate itself through a large game library so much as through its onboarding speed and bonus cadence. Since bonus percentages, minimum withdrawal thresholds and eligibility rules are controlled entirely by the platform, they're best confirmed inside the app immediately after signing up rather than assumed in advance.",
    highlights: ["Colour prediction + slots in one app", "Daily login rewards", "Quick mobile registration"],
  },
  {
    id: "in999",
    name: "IN999",
    url: "https://in999.in.net",
    description:
      "IN999 is built around a numbered, points-style branding and offers a mix of prediction rounds and casual card games. The sign-up process asks for a mobile number and, in many cases, an invitation code that unlocks a starting bonus. Its interface leans toward a simplified dashboard rather than a large multi-tab lobby, which can make it easier for first-time users to find a single game mode and stick with it. Withdrawal processing, verification steps and bonus wagering conditions are set inside the app and can vary, so reading them there before playing is the more reliable approach.",
    highlights: ["Simplified single-dashboard layout", "Invitation-code starting bonus", "Prediction + casual card games"],
  },
  {
    id: "dmwin",
    name: "DMWin",
    url: "https://dmwingame.in.net",
    description:
      "DMWin sits in the same colour-prediction and mini-lottery space, with an app structure built around fast rounds and a referral program that rewards both the inviter and the new sign-up. The available modes tend to focus on number and colour outcomes rather than skill-based games, making the learning curve short for newcomers. Like most apps in this category, DMWin's specific bonus percentages, VIP thresholds and withdrawal timelines are defined inside the platform rather than advertised externally, so it's worth checking those details directly in the app before depositing any funds.",
    highlights: ["Fast-round prediction format", "Two-sided referral rewards", "Short learning curve for new users"],
  },
  {
    id: "raja-game",
    name: "Raja Game",
    url: "https://rajaagame.com",
    description:
      "Raja Game frames itself around a royal, high-stakes theme layered over a fairly standard colour-prediction and lottery app structure. New users register with a phone number, and the app typically walks through a short verification step before unlocking the main lobby. Its promotional structure includes daily bonuses and a referral chain, features common across this style of app rather than unique to Raja Game specifically. Given that terms around payouts and account verification are managed entirely by the platform, reviewing the current rules inside the app is a more dependable step than relying on outside descriptions.",
    highlights: ["Royal-themed prediction & lottery app", "Daily bonus structure", "Referral chain rewards"],
  },
  {
    id: "tashanwin",
    name: "TashanWin",
    url: "https://tasanwin.com",
    description:
      "TashanWin brings together colour prediction, a lottery-style draw and a small selection of slot games under one mobile app. The registration flow follows the standard pattern for this category — phone number, verification, optional invite code — and the bonus system is largely built around referrals and consistent daily activity. TashanWin doesn't stand out through an unusually large catalogue so much as through how quickly a new account can start playing. Because withdrawal minimums, verification steps and bonus conditions are controlled by the platform itself, confirming them directly inside the app remains the safest step before any deposit.",
    highlights: ["Prediction, lottery & slots combined", "Referral-driven bonus system", "Fast account activation"],
  },
  {
    id: "91-club",
    name: "91 Club",
    url: "https://91clubapp.com",
    description:
      "91 Club is one of the more widely referenced names in the colour-prediction app space, offering a set of prediction rounds alongside a handful of card and slot games. Its onboarding mirrors the category standard: mobile number sign-up, an optional referral code, and access to a dashboard organised around a small number of game types. VIP levels and daily check-in rewards are part of its retention structure, similar to comparable platforms. As always, deposit limits, payout timing and bonus wagering rules are set inside the app and should be checked there rather than assumed from any outside source.",
    highlights: ["Widely referenced prediction app", "VIP levels & daily check-ins", "Card and slot game variety"],
  },
  {
    id: "13l-game",
    name: "13L Game",
    url: "https://13l.in",
    description:
      "13L Game keeps its structure compact, centring on colour and number prediction rounds with a lighter set of secondary games attached. The short app name and streamlined lobby suggest a focus on quick rounds over an extensive catalogue, which can suit players who prefer a simple, repeatable format. Registration follows the familiar phone-number and referral-code pattern seen across the category, with bonuses tied to daily activity and invites. Since specific payout rules, minimum withdrawal amounts and bonus terms are managed inside the platform, checking them there before playing is more reliable than any outside summary, including this one.",
    highlights: ["Compact, round-focused lobby", "Referral & daily-activity bonuses", "Quick, repeatable game format"],
  },
  {
    id: "raxiwin",
    name: "RaxiWin",
    url: "https://rexigame.com",
    description:
      "RaxiWin offers a similar mix of colour prediction, lottery draws and casual games aimed at short betting sessions. Sign-up follows the standard mobile-number and optional-invite pattern used throughout this app category, with a bonus and VIP structure designed to encourage daily returns. It doesn't appear to differ meaningfully from comparable platforms in game variety, so the main consideration for new users is usually onboarding speed and current promotional terms rather than a unique feature set. Those details are set by the platform and are best confirmed directly inside the app before any deposit.",
    highlights: ["Colour prediction & lottery draws", "VIP & daily-return bonus structure", "Short, repeatable betting sessions"],
  },
];

const PLATFORMS_FAQ = [
  {
    question: "What is the Recommended Gaming Platforms page?",
    answer:
      "This page lists other colour-prediction and mobile gaming platforms that sit in the same category as 6Club, provided as independent, informational references for users who want to explore more options.",
  },
  {
    question: "Is SixClub affiliated with any of these platforms?",
    answer:
      "No. SixClub is not affiliated with, endorsed by, or responsible for any platform listed on this page. The links are provided only as outbound references, not as recommendations backed by a partnership.",
  },
  {
    question: "Are these platforms safe to use?",
    answer:
      "We don't independently verify the safety, licensing, or legitimacy of any third-party platform. Always confirm you're on a platform's official domain, review its current terms, and check the legal age and regional requirements before registering anywhere.",
  },
  {
    question: "Why are these platforms listed together?",
    answer:
      "They fall into the same broad category as 6Club — mobile colour-prediction, lottery, and casual gaming apps — so visitors researching one often want to compare it against others.",
  },
  {
    question: "Can I register on more than one platform?",
    answer:
      "That's entirely up to you. If you explore other platforms, treat each one independently, use its own official registration process, and review its specific bonus and withdrawal terms before depositing.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export const metadata: Metadata = buildMetadata({
  title: "Recommended Gaming Platforms: Other Apps Like 6Club",
  description:
    "A curated, independent list of other colour-prediction and mobile gaming platforms beyond 6Club — what each one offers, key highlights, and official links to explore further.",
  path: PATH,
});

export default function RecommendedGamesPage() {
  return (
    <>
      <JsonLd data={breadcrumbListSchema(TRAIL)} />
      <JsonLd data={faqPageSchema(PLATFORMS_FAQ)} />
      <JsonLd
        data={itemListSchema(
          PLATFORMS.map((platform) => ({ name: platform.name, url: platform.url }))
        )}
      />

      <Container>
        <Breadcrumbs trail={TRAIL} />
        <PageHeader
          eyebrow="Beyond 6Club"
          title="Recommended Gaming Platforms"
          description="Looking for more options beyond 6Club? Here's an independent rundown of other colour-prediction and mobile gaming platforms, so you can compare before you commit."
        />
      </Container>

      <Container className="pb-20">
        <section aria-labelledby="platforms-heading">
          <h2 id="platforms-heading" className="sr-only">
            Recommended gaming platforms
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORMS.map((platform) => (
              <article
                key={platform.id}
                className="glass-card flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:border-gold/30"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gold-gradient font-display text-lg font-bold text-background shadow-glow-sm"
                    aria-hidden="true"
                  >
                    {getInitials(platform.name)}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gold-light">
                    {platform.name}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink/70">{platform.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {platform.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-xs text-ink/60">
                      <span aria-hidden="true" className="mt-0.5 text-gold-light">
                        &#10022;
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Button
                  href={platform.url}
                  external
                  rel="nofollow noopener noreferrer"
                  variant="secondary"
                  className="mt-6 w-full"
                >
                  Visit {platform.name}
                </Button>
              </article>
            ))}
          </div>
        </section>

        <GlassCard className="mt-12">
          <h2 className="font-display text-lg font-semibold text-gold-light">
            A note on this list
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Every description above was written independently for this page and reflects general,
            publicly observable characteristics of each platform&apos;s category — it isn&apos;t copied
            from any of the listed sites. SixClub has no partnership with, and receives no
            endorsement from, any platform named here. Treat these links purely as a starting
            point for your own research, not as a recommendation to play.
          </p>
        </GlassCard>

        <GlassCard className="mt-10">
          <h2 className="font-display text-lg font-semibold text-gold-light">
            Still exploring 6Club?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            If you&apos;d rather stick with the platform this guide is built around, here&apos;s where
            to pick things back up:
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/" className="btn-secondary">
              Home
            </Link>
            <Link href="/6club-register" className="btn-secondary">
              Register
            </Link>
            <Link href="/6club-login" className="btn-secondary">
              Login
            </Link>
            <Link href="/6club-apk-download" className="btn-secondary">
              APK Download
            </Link>
          </div>
        </GlassCard>

        <h2 className="mt-16 font-display text-2xl font-bold text-ink">
          Questions about other gaming platforms
        </h2>
        <div className="mt-6">
          <MiniFaqAccordion items={PLATFORMS_FAQ} groupName="platforms-faq" />
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
