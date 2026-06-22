import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/layout/ProductPage";
import { pages } from "@/content/pages";

export const Route = createFileRoute("/servicio-de-implementacion")({
  head: () => ({ meta: [{ title: "Servicio de implementación — Grupo Sife" }, { name: "description", content: pages["servicio-de-implementacion"].intro }] }),
  component: () => <ProductPage content={pages["servicio-de-implementacion"]} />,
});
