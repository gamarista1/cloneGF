import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PillButton } from "@/components/ui/PillButton";

export const Route = createFileRoute("/$")({
  head: () => ({ meta: [{ title: "Próximamente — Grupo Sife" }] }),
  component: Stub,
});

function Stub() {
  return (
    <div className="min-h-screen bg-white text-[var(--surface-dark-1)] flex flex-col">
      <Header />
      <main className="flex-1 grid place-items-center py-32">
        <div className="container-page text-center max-w-xl">
          <div className="eyebrow mb-4">Fase 2</div>
          <h1 className="text-h2-xl mb-5">Esta sección estará disponible pronto</h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
            Estamos preparando el contenido de esta página. Mientras tanto, conoce nuestras soluciones o ponte en contacto con el equipo.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <PillButton to="/" variant="outline-dark">Ir al inicio</PillButton>
            <PillButton to="/contact-8" variant="primary">Contáctanos</PillButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
