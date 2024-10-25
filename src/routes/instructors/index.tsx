import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/instructors/")({
  component: () => <div>Hello /instructors/!</div>,
});
