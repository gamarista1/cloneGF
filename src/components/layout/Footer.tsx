import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

const Social = {
  Linkedin: (p: { className?: string }) => (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.55 0h4.37v1.91h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v7.45h-4.56V15.4c0-1.7-.03-3.89-2.37-3.89-2.38 0-2.74 1.86-2.74 3.78V22H7.77V8z"/></svg>),
  Facebook: (p: { className?: string }) => (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/></svg>),
  Twitter: (p: { className?: string }) => (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>),
  Youtube: (p: { className?: string }) => (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6z"/></svg>),
};
import { Logo } from "@/components/ui/Logo";
import { PillButton } from "@/components/ui/PillButton";

const cols = [
  {
    heading: "Principales",
    links: [
      { label: "Sobre nosotros", href: "/sobre-nosotros" },
      { label: "Únete al equipo", href: "/unete-al-equipo" },
      { label: "Portal del cliente", href: "/portal-de-clientes" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Nuestra oferta",
    links: [
      { label: "Canales digitales", href: "/canales-digitales" },
      { label: "Core bancario", href: "/core-bancario" },
      { label: "Integraciones", href: "/integraciones" },
      { label: "Análisis de datos", href: "/analisis-de-datos" },
    ],
  },
  {
    heading: "Nuestros servicios",
    links: [
      { label: "Servicio de implementación", href: "/servicio-de-implementacion" },
      { label: "Strategic Partner Program", href: "/strategic-partner-program" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mesh-footer text-white relative overflow-hidden">
      <div className="container-page relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/75 leading-relaxed max-w-xs">
              Software bancario para instituciones que quieren liderar la próxima etapa de la banca digital.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PillButton to="/contact-8" variant="outline-white">Contáctanos</PillButton>
            </div>
            <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Dataclone. Todos los derechos reservados.</p>
          </div>
          {cols.map((c) => (
            <div key={c.heading}>
              <div className="text-xs font-bold uppercase tracking-widest text-white/90 mb-4">{c.heading}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/90 mb-4">Contáctanos</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" />hola@dataclone.example</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" />1234 Brickell Ave, Miami, FL</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {[Social.Linkedin, Social.Facebook, Social.Twitter, Social.Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-[var(--brand)] transition-colors" aria-label="Social">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <Link to="/política-de-privacidad" className="mt-6 inline-block text-xs text-white/60 hover:text-white">Política de privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
