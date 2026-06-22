import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/layout/ProductPage";
import { pages } from "@/content/pages";

export const Route = createFileRoute("/analisis-de-datos")({
  head: () => ({ meta: [{ title: "Análisis de datos — Dataclone" }, { name: "description", content: pages["analisis-de-datos"].intro }] }),
  component: () => <ProductPage content={pages["analisis-de-datos"]} />,
});
