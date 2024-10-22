import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/signin')({
  component: () => <div>Hello /(auth)/signin!</div>,
})
