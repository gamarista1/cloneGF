import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/layout/ProductPage";
import { pages } from "@/content/pages";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({ meta: [{ title: "Sobre nosotros — Grupo Sife" }, { name: "description", content: pages["sobre-nosotros"].intro }] }),
  component: () => <ProductPage content={pages["sobre-nosotros"]} />,
});
