import { Card, CardContent } from "@/components/ui/card"
import { Users, FolderKanban, CheckCircle, Activity, Projector, ListCheck } from "lucide-react"

const stats = [
  {
    label: "People",
    value: 24,
    icon: Users,
  },
  {
    label: "Projects",
    value: 6,
    icon: FolderKanban,
  },
  {
    label: "Tasks",
    value: 42,
    icon: CheckCircle,
  },
  {
    label: "Active",
    value: 18,
    icon: Activity,
  },
  {
    label: "Active Projects",
    value: 4,
    icon: ListCheck,
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <Card
            key={stat.label}
            className="transition-all hover:shadow-md hover:-translate-y-1 focus-within:ring-2"
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold">
                  {stat.value}
                </p>
              </div>

              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
