import type { FaqItem } from "@/lib/content/faq";

export function MiniFaqAccordion({
  items,
  groupName,
}: {
  items: FaqItem[];
  groupName: string;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} name={groupName} className="glass-card group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="flex-shrink-0 text-gold-light transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
