import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/students/$studentId/cart')({
  component: () => <div>Hello /students/$studentId/cart!</div>,
})
