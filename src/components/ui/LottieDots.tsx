export function LottieDots({ className = "" }: { className?: string }) {
  return (
    <div className={`dot-cascade pointer-events-none flex items-center gap-3 ${className}`}>
      <span className="block h-3 w-3 rounded-full bg-[var(--brand)]" />
      <span className="block h-3 w-3 rounded-full bg-[var(--brand-secondary)]" />
      <span className="block h-3 w-3 rounded-full bg-[var(--brand)]" />
      <span className="block h-3 w-3 rounded-full bg-[var(--brand-secondary)]" />
    </div>
  );
}
