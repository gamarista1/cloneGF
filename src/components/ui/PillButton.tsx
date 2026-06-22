import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "white" | "outline-white" | "outline-dark";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)]",
  white: "bg-white text-[var(--surface-dark-1)] hover:bg-white/90",
  "outline-white": "border-2 border-white text-white hover:bg-white hover:text-[var(--surface-dark-1)]",
  "outline-dark": "border-2 border-[var(--surface-dark-1)] text-[var(--surface-dark-1)] hover:bg-[var(--surface-dark-1)] hover:text-white",
};

const iconBg: Record<Variant, string> = {
  primary: "bg-white text-[var(--brand)]",
  white: "bg-[var(--brand)] text-white",
  "outline-white": "bg-white text-[var(--brand)]",
  "outline-dark": "bg-[var(--brand)] text-white",
};

export function PillButton({
  to,
  href,
  children,
  variant = "primary",
  external,
  type,
  onClick,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const base =
    "group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300";
  const cls = `${base} ${variants[variant]}`;

  const inner = (
    <>
      <span>{children}</span>
      <span
        className={`grid place-items-center rounded-full transition-all duration-300 ease-out h-0 w-0 scale-0 opacity-0 group-hover:h-7 group-hover:w-7 group-hover:scale-100 group-hover:opacity-100 ${iconBg[variant]}`}
      >
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    </>
  );

  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href) return <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{inner}</a>;
  return <button type={type ?? "button"} onClick={onClick} className={cls}>{inner}</button>;
}
