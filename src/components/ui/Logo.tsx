export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  const logoSrc = variant === "light" ? "/logo-sife-vertical-blanco.svg" : "/logo-sife.svg";
  const logoAlt = variant === "light" ? "Grupo Sife Logo Blanco" : "Grupo Sife Logo";

  return (
    <img
      src={logoSrc}
      alt={logoAlt}
      className={className || "h-24 w-auto max-w-md"}
      style={{ minWidth: "240px" }}
    />
  );
}
