import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/layout/ProductPage";
import { pages } from "@/content/pages";

export const Route = createFileRoute("/integraciones")({
  head: () => ({ meta: [{ title: "Integraciones — Grupo Sife" }, { name: "description", content: pages["integraciones"].intro }] }),
  component: () => <ProductPage content={pages["integraciones"]} />,
});
