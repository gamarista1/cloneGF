import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/layout/ProductPage";
import { pages } from "@/content/pages";

export const Route = createFileRoute("/strategic-partner-program")({
  head: () => ({ meta: [{ title: "Strategic Partnership Program — Grupo Sife" }, { name: "description", content: pages["strategic-partner-program"].intro }] }),
  component: () => <ProductPage content={pages["strategic-partner-program"]} />,
});
