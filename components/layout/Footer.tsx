import { SixClubLogo } from "@/components/icons/SixClubLogo";
import { Container } from "@/components/ui/Container";

const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#register", label: "Register" },
  { href: "#login", label: "Login" },
  { href: "#download", label: "Download" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-surface/60 py-12">
      <Container className="flex flex-col items-center gap-6 text-center">
        <a href="#home" className="flex items-center gap-2">
          <SixClubLogo size={28} />
          <span className="font-display text-base font-bold text-ink">
            Six<span className="text-gold-light">Club</span>
          </span>
        </a>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="max-w-xl text-xs leading-relaxed text-ink/50">
          SixClub is an independent, unofficial guide and referral site. We are not affiliated
          with, endorsed by, or operated by the company behind the 6Club app. All trademarks
          belong to their respective owners. For adults 18+ only.
        </p>

        <p className="text-xs text-ink/40">
          &copy; {new Date().getFullYear()} SixClub.in — All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
