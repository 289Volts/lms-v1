import Home from "@/components/Pages/Home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/")({
  component: Home,
});
