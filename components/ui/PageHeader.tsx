export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl pb-4 pt-16 text-center sm:pt-24">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h1 className="font-display text-3xl font-bold text-ink sm:text-5xl">{title}</h1>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink/70">{description}</p>
      ) : null}
    </div>
  );
}
