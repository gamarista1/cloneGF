import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/layout/ProductPage";
import { pages } from "@/content/pages";

export const Route = createFileRoute("/canales-digitales")({
  head: () => ({ meta: [{ title: "Canales digitales — Dataclone" }, { name: "description", content: pages["canales-digitales"].intro }] }),
  component: () => <ProductPage content={pages["canales-digitales"]} />,
});
