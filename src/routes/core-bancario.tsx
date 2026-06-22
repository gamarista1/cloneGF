import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/layout/ProductPage";
import { pages } from "@/content/pages";

export const Route = createFileRoute("/core-bancario")({
  head: () => ({ meta: [{ title: "Core bancario — Dataclone" }, { name: "description", content: pages["core-bancario"].intro }] }),
  component: () => <ProductPage content={pages["core-bancario"]} />,
});
