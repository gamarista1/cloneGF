export function LottieDots({
  className = "",
  dotClassName = "h-3 w-3",
  gapClassName = "gap-3",
}: {
  className?: string;
  dotClassName?: string;
  gapClassName?: string;
}) {
  return (
    <div className={`dot-cascade pointer-events-none flex items-center ${gapClassName} ${className}`}>
      <span className={`block rounded-full bg-[var(--brand)] ${dotClassName}`} />
      <span className={`block rounded-full bg-[var(--brand-secondary)] ${dotClassName}`} />
      <span className={`block rounded-full bg-[var(--brand)] ${dotClassName}`} />
      <span className={`block rounded-full bg-[var(--brand-secondary)] ${dotClassName}`} />
    </div>
  );
}
