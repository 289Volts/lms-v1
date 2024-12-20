import Footer from '@/components/Shared/Layout/Footer'
import Header from '@/components/Shared/Layout/Header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/instructors')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const user = Route.useLoaderData()
  return (
    <>
      <Header user={user} />
      <Outlet />
      <Footer page="instructor" />
    </>
  )
}
