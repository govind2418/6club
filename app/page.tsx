import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
  faqPageSchema,
  breadcrumbListSchema,
} from "@/lib/schema";
import { faqItems } from "@/lib/content/faq";

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
