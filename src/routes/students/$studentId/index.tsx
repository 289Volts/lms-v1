import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/students/$studentId/')({
  loader: async ({ params }) => {
    return params.studentId
  },
  component: () => <div>Hello /students/$studentId!</div>,
})
