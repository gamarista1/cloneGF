import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PillButton } from "@/components/ui/PillButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { PageContent } from "@/content/pages";

export function ProductPage({ content }: { content: PageContent }) {
  return (
    <div className="min-h-screen bg-white text-[var(--surface-dark-1)]">
      <Header />
      <main>
        <section className="bg-[var(--surface-dark-1)] text-white pt-28 pb-24 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[var(--brand)]/25 blur-3xl" />
          <div className="container-page relative max-w-3xl">
            <RevealOnScroll>
              <div className="eyebrow text-white/80 mb-5">{content.eyebrow}</div>
              <h1 className="text-h2-xl md:text-display mb-6">{content.title}</h1>
              <p className="text-white/85 text-lg leading-relaxed max-w-2xl mb-8">{content.intro}</p>
              <PillButton to="/contact-8" variant="white">Contáctanos</PillButton>
            </RevealOnScroll>
          </div>
        </section>

        {content.sections.length > 0 && (
          <section className="bg-white py-24">
            <div className="container-page grid gap-16 lg:grid-cols-2">
              {content.sections.map((s, i) => (
                <RevealOnScroll key={s.title} delay={i * 100}>
                  <div className="rounded-3xl border-2 border-[var(--surface-lavender)] p-10 h-full">
                    <h2 className="text-h2 text-[var(--surface-dark-1)] mb-4">{s.title}</h2>
                    <p className="text-[var(--text-muted)] text-lg leading-relaxed">{s.body}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </section>
        )}

        {content.features && (
          <section className="bg-[var(--surface-lavender)] py-24">
            <div className="container-page">
              <div className="grid gap-6 md:grid-cols-3">
                {content.features.map((f, i) => (
                  <RevealOnScroll key={f.title} delay={i * 80}>
                    <div className="rounded-2xl bg-white p-8 h-full shadow-sm">
                      <div className="text-3xl font-bold text-[var(--brand)] mb-3">{f.title}</div>
                      <p className="text-[var(--text-muted)] leading-relaxed">{f.body}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-[var(--surface-dark-1)] text-white py-24">
          <div className="container-page text-center max-w-2xl mx-auto">
            <RevealOnScroll>
              <h2 className="text-h2-xl mb-6">{content.ctaTitle}</h2>
              <PillButton to="/contact-8" variant="white">Contáctanos</PillButton>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
