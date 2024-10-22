import About from '@/components/Pages/About'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/about')({
  component: About,
})
