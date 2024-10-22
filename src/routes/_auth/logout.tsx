import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/logout')({
  component: () => <div>Hello /(auth)/logout!</div>,
})
