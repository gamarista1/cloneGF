import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PillButton } from "@/components/ui/PillButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Mail, MapPin } from "lucide-react";
import { pages } from "@/content/pages";

const content = pages["contact-8"];

export const Route = createFileRoute("/contact-8")({
  head: () => ({ meta: [{ title: "Contacto — Grupo Sife" }, { name: "description", content: content.intro }] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-white text-[var(--surface-dark-1)]">
      <Header />
      <main>
        <section className="bg-[var(--surface-dark-1)] text-white pt-28 pb-20 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[var(--brand)]/25 blur-3xl" />
          <div className="container-page relative max-w-3xl">
            <RevealOnScroll>
              <div className="eyebrow text-white/80 mb-5">{content.eyebrow}</div>
              <h1 className="text-h2-xl md:text-display mb-6">{content.title}</h1>
              <p className="text-white/85 text-lg leading-relaxed max-w-2xl">{content.intro}</p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-12">
            <RevealOnScroll>
              <form
                className="rounded-3xl border-2 border-[var(--surface-lavender)] p-8 md:p-10"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Nombre" name="nombre" />
                  <Field label="Apellido" name="apellido" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Empresa" name="empresa" />
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-bold text-[var(--surface-dark-1)] mb-2">Mensaje</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-xl border-2 border-[var(--surface-lavender)] px-4 py-3 outline-none focus:border-[var(--brand)] transition-colors"
                  />
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <PillButton type="submit" variant="primary">Enviar mensaje</PillButton>
                  {sent && <span className="text-sm text-[var(--brand)] font-bold">¡Gracias! Te contactaremos pronto.</span>}
                </div>
              </form>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <div className="space-y-6">
                <div className="rounded-2xl border-2 border-[var(--surface-lavender)] p-6">
                  <div className="eyebrow text-xs mb-2">Email</div>
                  <div className="flex items-center gap-2 text-[var(--surface-dark-1)] font-bold">
                    <Mail className="h-4 w-4 text-[var(--brand)]" />hola@gruposife
                  </div>
                </div>
                <div className="rounded-2xl border-2 border-[var(--surface-lavender)] p-6">
                  <div className="eyebrow text-xs mb-2">Oficina central</div>
                  <div className="flex items-start gap-2 text-[var(--surface-dark-1)] font-bold">
                    <MapPin className="h-4 w-4 text-[var(--brand)] mt-0.5" />1234 Brickell Ave,<br />Miami, FL
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-bold text-[var(--surface-dark-1)] mb-2">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full rounded-xl border-2 border-[var(--surface-lavender)] px-4 py-3 outline-none focus:border-[var(--brand)] transition-colors"
      />
    </div>
  );
}
