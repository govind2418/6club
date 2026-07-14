import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
  faqPageSchema,
  breadcrumbListSchema,
  itemListSchema,
} from "@/lib/schema";
import { faqItems } from "@/lib/content/faq";
import { siteConfig } from "@/lib/seo";

const SITE_PAGES = [
  { name: "6Club Register", url: `${siteConfig.url}/6club-register` },
  { name: "6Club Login", url: `${siteConfig.url}/6club-login` },
  { name: "6Club Game", url: `${siteConfig.url}/6club-game` },
  { name: "6Club APK Download", url: `${siteConfig.url}/6club-apk-download` },
  { name: "6Club Official", url: `${siteConfig.url}/6club-official` },
];

import { Hero } from "@/components/sections/Hero";
import { WhySixClub } from "@/components/sections/WhySixClub";
import { GameFeatures } from "@/components/sections/GameFeatures";
import { ScreenshotGallery } from "@/components/sections/ScreenshotGallery";
import { ApkDownload } from "@/components/sections/ApkDownload";
import { HowToRegister } from "@/components/sections/HowToRegister";
import { HowToLogin } from "@/components/sections/HowToLogin";
import { Bonuses } from "@/components/sections/Bonuses";
import { Faq } from "@/components/sections/Faq";
import { Disclaimer } from "@/components/sections/Disclaimer";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqPageSchema(faqItems)} />
      <JsonLd data={breadcrumbListSchema()} />
      <JsonLd data={itemListSchema(SITE_PAGES)} />

      <Hero />
      <WhySixClub />
      <GameFeatures />
      <ScreenshotGallery />
      <ApkDownload />
      <HowToRegister />
      <HowToLogin />
      <Bonuses />
      <Faq />
      <Disclaimer />
    </>
  );
}
