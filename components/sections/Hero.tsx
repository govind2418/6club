import { SixClubLogo } from "@/components/icons/SixClubLogo";
import { HeroBackground } from "@/components/graphics/HeroBackground";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { REGISTER_URL, LOGIN_URL, APK_DOWNLOAD_URL, APP_VERSION } from "@/lib/seo";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <HeroBackground />
      <Container className="flex flex-col items-center text-center">
        <SixClubLogo size={64} className="mb-6" />

        <h1 className="font-display max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl">
          Your complete guide to the <span className="text-gold-light">6Club</span> game
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
          Register, log in, and download the 6Club APK the simple way. SixClub walks you through
          every step, so you can start playing Win Go, Lottery, Slots, and more in minutes.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={REGISTER_URL} external variant="primary">
            Register on 6Club
          </Button>
          <Button href={LOGIN_URL} external variant="secondary">
            Login to 6Club
          </Button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <Button href={APK_DOWNLOAD_URL} external variant="secondary" className="text-sm">
            Download 6Club APK
          </Button>
          <p className="text-xs text-ink/50">Latest version {APP_VERSION} &middot; Android</p>
        </div>
      </Container>
    </section>
  );
}
