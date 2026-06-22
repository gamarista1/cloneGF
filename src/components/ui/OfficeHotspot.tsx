import { Mail, MapPin, Phone } from "lucide-react";

export function OfficeHotspot({
  name,
  region,
  address,
  email,
  phone,
  x,
  y,
}: {
  name: string;
  region: string;
  address: string;
  email: string;
  phone: string;
  x: string;
  y: string;
}) {
  return (
    <div
      className="group absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <button
        className="relative grid h-6 w-6 place-items-center rounded-full"
        aria-label={name}
      >
        <span className="absolute inset-0 rounded-full bg-[var(--brand)] opacity-30 glow-pulse" />
        <span className="absolute inset-1 rounded-full bg-[var(--brand)]" />
        <span className="relative h-2 w-2 rounded-full bg-white" />
      </button>
      <div className="pointer-events-none invisible absolute left-1/2 top-full z-20 mt-4 w-72 -translate-x-1/2 translate-y-2 rounded-2xl border-2 border-[var(--surface-lavender)] bg-white p-5 text-left opacity-0 shadow-[0_0_30px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="eyebrow text-xs mb-1">{region}</div>
        <h4 className="text-lg font-bold text-[var(--surface-dark-1)] mb-3">{name}</h4>
        <ul className="space-y-2 text-sm text-[var(--text-muted)]">
          <li className="flex items-start gap-2"><MapPin className="h-4 w-4 shrink-0 text-[var(--brand)] mt-0.5" />{address}</li>
          <li className="flex items-start gap-2"><Mail className="h-4 w-4 shrink-0 text-[var(--brand)] mt-0.5" />{email}</li>
          <li className="flex items-start gap-2"><Phone className="h-4 w-4 shrink-0 text-[var(--brand)] mt-0.5" />{phone}</li>
        </ul>
      </div>
    </div>
  );
}
