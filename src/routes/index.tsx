import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PillButton } from "@/components/ui/PillButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { LottieDots } from "@/components/ui/LottieDots";
import { Tabs } from "@/components/ui/AnimatedTabs";
import { OfficeHotspot } from "@/components/ui/OfficeHotspot";
import {
  heroContent, stats, pioneers, offering, services,
  challenge, challengeCards, apiDocs, partner, offices, presence, finalCta,
} from "@/content/home";
import heroBg from "@/assets/hero-bg.jpg";
import brandGraphic from "@/assets/brand-graphic.png";
import challengeGraphic from "@/assets/challenge-graphic.png";
import partnerBg from "@/assets/partner-bg.jpg";
import worldMap from "@/assets/world-map.png";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dataclone — Software bancario para la transformación digital" },
      { name: "description", content: "Plataforma de software bancario: core, canales digitales, integraciones y análisis de datos para instituciones financieras." },
      { property: "og:title", content: "Dataclone — Directo al core" },
      { property: "og:description", content: "Software bancario para más de 100 instituciones financieras en 20+ países." },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[var(--surface-dark-1)] text-white">
      <img src={heroBg} alt="" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-dark-1)]/40 via-[var(--surface-dark-1)]/30 to-[var(--surface-dark-1)]/80" />
      <div className="container-page relative pt-28 pb-32 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <RevealOnScroll>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-white/80 mb-6">{heroContent.eyebrow}</div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <h1 className="text-display text-white mb-6">{heroContent.title}</h1>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="text-lg text-white/85 max-w-xl mb-9 leading-relaxed">{heroContent.subtitle}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <PillButton to="/contact-8" variant="white">{heroContent.ctaLabel}</PillButton>
          </RevealOnScroll>
        </div>
        <div className="relative hidden lg:flex justify-end">
          <div className="relative h-80 w-80">
            <div className="absolute -top-4 -right-4"><LottieDots /></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-[var(--brand)]/20 blur-3xl" />
            <div className="absolute inset-12 rounded-full border border-white/15" />
            <div className="absolute inset-20 rounded-full border border-white/10" />
            <div className="absolute inset-28 rounded-full border border-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <RevealOnScroll>
          <div className="eyebrow text-center mb-3">Dataclone en números</div>
          <h2 className="text-h2 text-center text-[var(--surface-dark-1)] mb-16 max-w-2xl mx-auto">El impacto de nuestra tecnología en la región</h2>
        </RevealOnScroll>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 80}>
              <div className="pt-6 border-t-2 border-[var(--surface-lavender)]">
                <div className="text-4xl md:text-5xl font-bold text-[var(--brand)] mb-3">{s.value}</div>
                <div className="text-sm text-[var(--text-muted)] leading-snug">{s.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pioneers() {
  return (
    <section className="bg-[var(--surface-dark-1)] text-white py-24 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[var(--brand)]/20 blur-3xl" />
      <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center">
        <RevealOnScroll>
          <img src={brandGraphic} alt="" width={1024} height={1024} loading="lazy" className="max-w-md mx-auto" />
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <div className="eyebrow text-white/80 mb-4">{pioneers.eyebrow}</div>
          <h2 className="text-h2-xl mb-6">{pioneers.title}</h2>
          <p className="text-white/80 text-lg leading-relaxed">{pioneers.body}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function OfferingPanel({ item }: { item: typeof offering[number] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <RevealOnScroll>
        <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-[var(--surface-lavender)] to-white border-2 border-[var(--surface-lavender)] grid place-items-center p-12">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-2xl bg-[var(--brand)]/10 blur-2xl" />
            <div className="relative h-full w-full rounded-2xl bg-white shadow-xl flex items-center justify-center">
              <LottieDots />
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={120}>
        <h3 className="text-h2 text-[var(--surface-dark-1)] mb-5">{item.title}</h3>
        <p className="text-[var(--text-muted)] text-lg mb-6 leading-relaxed">{item.body}</p>
        {item.bullets.length > 0 && (
          <ul className="space-y-2 mb-8">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-[var(--surface-dark-1)] font-bold">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />{b}
              </li>
            ))}
          </ul>
        )}
        <PillButton to={item.cta.href} variant="primary">{item.cta.label}</PillButton>
      </RevealOnScroll>
    </div>
  );
}

function Offering() {
  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <RevealOnScroll>
          <h2 className="text-h2-xl text-center text-[var(--surface-dark-1)] mb-12 max-w-2xl mx-auto">Nuestra oferta</h2>
        </RevealOnScroll>
        <Tabs items={offering.map((o) => ({ key: o.key, label: o.tab, content: <OfferingPanel item={o} /> }))} />
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-[var(--surface-lavender)] py-24">
      <div className="container-page">
        <RevealOnScroll>
          <h2 className="text-h2-xl text-center text-[var(--surface-dark-1)] mb-12 max-w-2xl mx-auto">Nuestros servicios</h2>
        </RevealOnScroll>
        <Tabs
          variant="lavender"
          items={services.map((s) => ({
            key: s.key,
            label: s.tab,
            content: (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <RevealOnScroll delay={120}>
                  <div className="eyebrow mb-4">{s.eyebrow}</div>
                  <h3 className="text-h2 text-[var(--surface-dark-1)] mb-5">{s.title}</h3>
                  <p className="text-[var(--text-muted)] text-lg mb-8 leading-relaxed">{s.body}</p>
                  <PillButton to={s.cta.href} variant="primary">{s.cta.label}</PillButton>
                </RevealOnScroll>
                <RevealOnScroll>
                  <div className="aspect-square max-w-md mx-auto rounded-3xl bg-white shadow-xl border-2 border-white overflow-hidden grid place-items-center">
                    <img src={challengeGraphic} alt="" width={1024} height={1024} loading="lazy" className="w-3/4" />
                  </div>
                </RevealOnScroll>
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}

function ChallengeBanner() {
  return (
    <section className="bg-[var(--surface-dark-2)] text-white py-24">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <RevealOnScroll>
            <h2 className="text-h2-xl mb-6">{challenge.title}</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">{challenge.body}</p>
            <PillButton to={challenge.cta.href} variant="outline-white">{challenge.cta.label}</PillButton>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <img src={brandGraphic} alt="" width={1024} height={1024} loading="lazy" className="max-w-sm mx-auto" />
          </RevealOnScroll>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challengeCards.map((c, i) => (
            <RevealOnScroll key={c.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-[var(--brand)]/30 text-[var(--brand)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
                </div>
                <h4 className="text-lg font-bold mb-2">{c.title}</h4>
                <p className="text-sm text-white/70 mb-4 leading-relaxed">{c.body}</p>
                <Link to={c.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand)] hover:gap-2.5 transition-all">
                  Ver producto <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApiDocs() {
  return (
    <section className="bg-white py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <RevealOnScroll>
          <div className="aspect-square max-w-md mx-auto rounded-3xl bg-[var(--surface-lavender)] grid place-items-center p-10">
            <div className="bg-[var(--surface-dark-1)] text-white text-xs font-mono p-6 rounded-xl w-full shadow-2xl">
              <div className="opacity-60">GET /v1/accounts/:id</div>
              <div className="mt-2">{`{`}</div>
              <div className="pl-3"><span className="text-[#a78bfa]">"id"</span>: <span className="text-emerald-300">"acc_42"</span>,</div>
              <div className="pl-3"><span className="text-[#a78bfa]">"balance"</span>: <span className="text-emerald-300">"12,450.00"</span>,</div>
              <div className="pl-3"><span className="text-[#a78bfa]">"currency"</span>: <span className="text-emerald-300">"USD"</span></div>
              <div>{`}`}</div>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <div className="eyebrow mb-4">{apiDocs.eyebrow}</div>
          <h2 className="text-h2 text-[var(--surface-dark-1)] mb-5">{apiDocs.title}</h2>
          <p className="text-[var(--text-muted)] text-lg mb-6 leading-relaxed">{apiDocs.body}</p>
          <ul className="space-y-3">
            {apiDocs.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[var(--surface-dark-1)]">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)] shrink-0" />{b}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Partner() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-dark-3)] text-white py-24">
      <img src={partnerBg} alt="" width={1600} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center">
        <RevealOnScroll>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-12 backdrop-blur-sm grid place-items-center">
            <div className="text-3xl font-bold tracking-tight">dataclone × <span className="text-[var(--brand)]">GOS</span></div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <div className="eyebrow text-white/80 mb-4">{partner.eyebrow}</div>
          <h2 className="text-h2 mb-5">{partner.title}</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">{partner.body}</p>
          <PillButton href={partner.cta.href} variant="outline-white">{partner.cta.label}</PillButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Presence() {
  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <RevealOnScroll>
            <div className="eyebrow mb-3">{presence.eyebrow}</div>
            <h2 className="text-h2-xl text-[var(--surface-dark-1)] mb-5">{presence.title}</h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">{presence.body}</p>
          </RevealOnScroll>
        </div>
        <RevealOnScroll>
          <div className="relative mx-auto max-w-5xl aspect-[16/9]">
            <img src={worldMap} alt="Mapa mundial" width={1600} height={896} loading="lazy" className="absolute inset-0 h-full w-full object-contain opacity-25" />
            {offices.map((o) => <OfficeHotspot key={o.id} {...o} />)}
            <div className="absolute -bottom-4 right-0 rounded-2xl bg-white shadow-xl border-2 border-[var(--surface-lavender)] p-5 max-w-[200px]">
              <div className="eyebrow text-xs mb-1">Presencia global</div>
              <div className="text-2xl font-bold text-[var(--surface-dark-1)]">100+ <span className="text-sm font-normal text-[var(--text-muted)]">clientes</span></div>
              <div className="text-2xl font-bold text-[var(--surface-dark-1)] mt-1">5 <span className="text-sm font-normal text-[var(--text-muted)]">oficinas</span></div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-dark-1)] text-white py-28">
      <img src={ctaBg} alt="" width={1920} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="container-page relative text-center max-w-2xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-h2-xl mb-5">{finalCta.title}</h2>
          <p className="text-white/85 text-lg mb-8 leading-relaxed">{finalCta.body}</p>
          <PillButton to={finalCta.cta.href} variant="white">{finalCta.cta.label}</PillButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white text-[var(--surface-dark-1)]">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Pioneers />
        <Offering />
        <ServicesSection />
        <ChallengeBanner />
        <ApiDocs />
        <Partner />
        <Presence />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
