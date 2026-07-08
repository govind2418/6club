import Link from "next/link";
import type { BreadcrumbTrailItem } from "@/lib/schema";

export function Breadcrumbs({ trail }: { trail: BreadcrumbTrailItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink/50">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isLast ? (
                <span className="text-gold-light" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-gold-light">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
