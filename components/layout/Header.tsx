import Link from "next/link";
import { SixClubLogo } from "@/components/icons/SixClubLogo";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/6club-register", label: "Register" },
  { href: "/6club-login", label: "Login" },
  { href: "/#download", label: "Download" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="glass sticky top-0 z-40 border-x-0 border-t-0">
      <Container className="relative flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <SixClubLogo size={32} />
          <span className="font-display text-lg font-bold tracking-wide text-ink">
            Six<span className="text-gold-light">Club</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
