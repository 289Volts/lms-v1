import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/register")({
  component: () => <div>Hello /(auth)/logout!</div>,
});
