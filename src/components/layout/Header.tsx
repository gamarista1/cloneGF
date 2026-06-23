import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/ui/Logo";
import { PillButton } from "@/components/ui/PillButton";
import { ChevronDown, Globe, Menu, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MegaMenuItem = { label: string; body: string; href: string };

const megaMenus: { label: string; items: MegaMenuItem[] }[] = [
  {
    label: "Nosotros",
    items: [
      { label: "Sobre nosotros", body: "Quiénes somos y qué nos mueve", href: "/sobre-nosotros" },
      { label: "Ecosistema de Partners", body: "Nuestro programa de aliados estratégicos", href: "/strategic-partner-program" },
    ],
  },
  {
    label: "Soluciones",
    items: [
      { label: "Canales digitales", body: "Banca en línea, móvil y onboarding digital", href: "/canales-digitales" },
      { label: "Core bancario", body: "El motor transaccional de tu institución", href: "/core-bancario" },
      { label: "Integraciones", body: "APIs y servicios para tu ecosistema", href: "/integraciones" },
      { label: "Análisis de datos", body: "Tableros y reportes accionables", href: "/analisis-de-datos" },
    ],
  },
  {
    label: "Eventos",
    items: [
      { label: "Próximos eventos", body: "Conferencias, webinars y ferias", href: "/eventos" },
    ],
  },
];

const simpleLinks = [
  { label: "Portal del cliente", href: "/portal-de-clientes" },
  { label: "Blog", href: "/blog" },
];

function NavDropdown({ label, items }: { label: string; items: MegaMenuItem[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-1 text-[15px] font-bold text-[var(--surface-dark-1)] hover:text-[var(--brand)] transition-colors"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-30 mt-4 w-80 -translate-x-1/2 rounded-2xl border-2 border-[var(--surface-lavender)] bg-white p-3 shadow-[0_0_30px_rgba(0,0,0,0.18)]">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-[var(--surface-lavender)]/50 transition-colors"
            >
              <div className="text-sm font-bold text-[var(--surface-dark-1)]">{item.label}</div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5">{item.body}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"ES" | "EN">("ES");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="hidden md:flex items-center gap-1 text-sm font-bold text-[var(--surface-dark-1)] hover:text-[var(--brand)]"
      >
        <Globe className="h-4 w-4" /> {lang}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-30 mt-3 w-36 rounded-xl border-2 border-[var(--surface-lavender)] bg-white p-1.5 shadow-[0_0_30px_rgba(0,0,0,0.18)]">
          {(["ES", "EN"] as const).map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${l === lang ? "bg-[var(--surface-lavender)] text-[var(--surface-dark-1)]" : "hover:bg-[var(--surface-lavender)]/50"}`}
            >
              {l === "ES" ? "Español" : "English"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-white/0"}`}
    >
      <div className="container-page flex h-[88px] items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <Logo className="h-20 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {megaMenus.map((menu) => (
            <NavDropdown key={menu.label} label={menu.label} items={menu.items} />
          ))}
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-[15px] font-bold text-[var(--surface-dark-1)] hover:text-[var(--brand)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSelector />
          <div className="hidden sm:block">
            <PillButton to="/contact-8" variant="primary">
              Contáctanos
            </PillButton>
          </div>
          <button
            className="hidden md:grid h-10 w-10 place-items-center rounded-full border border-[var(--surface-lavender)] text-[var(--surface-dark-1)] hover:bg-[var(--surface-lavender)]"
            aria-label="Cuenta"
          >
            <User className="h-4 w-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-[88px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg lg:hidden max-h-[calc(100vh-88px)] overflow-y-auto">
            <nav className="container-page py-4 flex flex-col gap-1">
              {megaMenus.map((menu) => (
                <MobileMenuGroup key={menu.label} label={menu.label} items={menu.items} onNavigate={() => setMobileMenuOpen(false)} />
              ))}
              {simpleLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-[var(--surface-dark-1)] py-3 border-b border-gray-100"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <PillButton to="/contact-8" variant="primary">
                  Contáctanos
                </PillButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function MobileMenuGroup({ label, items, onNavigate }: { label: string; items: MegaMenuItem[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-3 text-sm font-bold text-[var(--surface-dark-1)]"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-2 pl-3">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onNavigate}
              className="block py-2 text-sm text-[var(--text-muted)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
