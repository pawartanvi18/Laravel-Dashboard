import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tasks = [
  {
    title: "Design dashboard UI",
    project: "Organisation Dashboard",
    assignee: "Tanvi Pawar",
    dueDate: "12 Jan 2026",
    status: "In Progress",
  },
  {
    title: "Implement analytics cards",
    project: "AI Analytics Panel",
    assignee: "Aarav Mehta",
    dueDate: "14 Jan 2026",
    status: "Pending",
  },
  {
    title: "Review UI feedback",
    project: "Employee Portal",
    assignee: "Riya Sharma",
    dueDate: "15 Jan 2026",
    status: "In Progress",
  },
  {
    title: "Finalize project report",
    project: "Organisation Dashboard",
    assignee: "Kunal Verma",
    dueDate: "18 Jan 2026",
    status: "Pending",
  },
]

function statusVariant(status: string) {
  switch (status) {
    case "In Progress":
      return "default"
    case "Pending":
      return "secondary"
    default:
      return "outline"
  }
}

export function RunningTasks() {
  return (
    <Card className="h-[320px]">
      <CardContent className="p-4 flex flex-col h-full">
        
        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">
          Running Tasks
        </h2>

        {/* Scrollable Tasks */}
        <div className="space-y-4 overflow-y-auto pr-2">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="rounded-md border p-3 hover:bg-muted transition"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {task.project}
                  </p>
                </div>

                <Badge variant={statusVariant(task.status)}>
                  {task.status}
                </Badge>
              </div>

              <div className="mt-2 text-sm text-muted-foreground">
                Assigned to <span className="font-medium">{task.assignee}</span>
                {" · "}
                Due <span className="font-medium">{task.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
