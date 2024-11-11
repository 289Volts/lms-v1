import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/courses')({
  component: () => <div>Hello /_public/courses!</div>,
})
