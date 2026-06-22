export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  const color = variant === "light" ? "#FFFFFF" : "#4A39E8";
  const text = variant === "light" ? "#FFFFFF" : "#07074D";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <rect x="6" y="6" width="20" height="20" rx="3" fill={color} opacity="0.9" />
        <rect x="14" y="14" width="20" height="20" rx="3" fill={color} opacity="0.55" />
      </svg>
      <span className="text-[19px] font-bold tracking-tight" style={{ color: text }}>
        dataclone
      </span>
    </div>
  );
}
