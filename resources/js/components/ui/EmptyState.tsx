import { Inbox } from "lucide-react"

export function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
      <Inbox size={32} />
      <p className="mt-2 text-sm">{label}</p>

      <EmptyState label="No tasks available" />

    </div>
  )
}
