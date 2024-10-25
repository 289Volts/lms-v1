import AuthHeader from "@/components/Shared/Layout/AuthHeader";
import Footer from "@/components/Shared/Layout/Footer";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <>
      <AuthHeader />
      <Outlet />
      <Footer />
    </>
  );
}
