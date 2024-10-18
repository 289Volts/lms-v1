import { createFileRoute } from "@tanstack/react-router";
import About from "../components/Pages/About";

export const Route = createFileRoute("/about")({
  component: About,
});
