"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/6club-register", label: "Register" },
  { href: "/6club-login", label: "Login" },
  { href: "/#download", label: "Download" },
  { href: "/#faq", label: "FAQ" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold-light"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          {open ? (
            <path d="M2 2l14 14M16 2 2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M1 4h16M1 9h16M1 14h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="glass animate-nav-in absolute left-0 right-0 top-full overflow-hidden border-t-0"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-gold/10 hover:text-gold-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
